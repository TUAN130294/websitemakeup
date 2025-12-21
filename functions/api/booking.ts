interface BookingRequest {
  name: string;
  phone: string;
  location: string;
  date: string;
  time: string;
  skinCondition?: string;
  notes?: string;
}

interface EmailResponse {
  id: string;
}

export async function onRequestPost(context: { request: Request; env: { RESEND_API_KEY?: string } }) {
  try {
    const { request, env } = context;
    
    // Parse request body
    const body: BookingRequest = await request.json() as BookingRequest;
    
    // Validate required fields
    const requiredFields = ['name', 'phone', 'location', 'date', 'time'];
    for (const field of requiredFields) {
      if (!body[field as keyof BookingRequest]) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: `Missing required field: ${field}` 
          }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
      }
    }

    // Check RESEND_API_KEY environment variable
    if (!env.RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Server configuration error: RESEND_API_KEY not found' 
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Prepare email content
    const emailContent = `
      <h2>📅 Yêu cầu đặt lịch makeup mới</h2>
      <p>Bạn có một yêu cầu đặt lịch mới từ khách hàng:</p>
      
      <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Họ tên:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${body.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Số điện thoại:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${body.phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Địa điểm:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${body.location}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Ngày:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${body.date}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Giờ:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${body.time}</td>
        </tr>
        ${body.skinCondition ? `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Tình trạng da:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${body.skinCondition}</td>
        </tr>
        ` : ''}
        ${body.notes ? `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Ghi chú:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${body.notes}</td>
        </tr>
        ` : ''}
      </table>
      
      <p><strong>Vui lòng liên hệ với khách hàng trong vòng 24 giờ để xác nhận lịch trình.</strong></p>
      <p>Trân trọng,<br>Hệ thống đặt lịch Eli Makeup Artist</p>
    `;

    // Send email via Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'booking@eli-hoang-tu-makeup.onrender.com', // You'll need to verify this domain with Resend
        to: ['your-email@example.com'], // Replace with admin email (e.g., eli.makeup.artist@example.com)
        subject: `📅 Yêu cầu đặt lịch mới từ ${body.name}`,
        html: emailContent,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.text();
      console.error('Resend API error:', errorData);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Failed to send email notification' 
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const emailResult: EmailResponse = await resendResponse.json() as EmailResponse;

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Booking request sent successfully',
        emailId: emailResult.id 
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('Booking function error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Internal server error' 
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
