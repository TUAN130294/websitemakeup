interface BookingRequest {
  name: string;
  phone: string;
  location: string;
  date: string;
  time: string;
  skinCondition?: string;
  notes?: string;
  email?: string;
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

    // Send email to admin
    const adminEmailResponse = await fetch('https://api.resend.com/emails', {
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

    if (!adminEmailResponse.ok) {
      const errorData = await adminEmailResponse.text();
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

    const emailResult: EmailResponse = await adminEmailResponse.json() as EmailResponse;

    // Send confirmation email to customer (if email provided)
    if (body.email) {
      const customerEmailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d4a573;">✨ Xác nhận đặt lịch - Eli Hoàng Tú Makeup Artist</h2>
          <p>Xin chào <strong>${body.name}</strong>,</p>
          <p>Cảm ơn bạn đã đặt lịch với Eli! Chúng tôi đã nhận được yêu cầu đặt lịch của bạn với thông tin sau:</p>

          <table style="border-collapse: collapse; width: 100%; margin: 20px 0; background-color: #f9f9f9;">
            <tr>
              <td style="padding: 12px; border: 1px solid #e0e0e0; font-weight: bold; background-color: #faf5f0;">📅 Ngày:</td>
              <td style="padding: 12px; border: 1px solid #e0e0e0;">${body.date}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e0e0e0; font-weight: bold; background-color: #faf5f0;">🕐 Giờ:</td>
              <td style="padding: 12px; border: 1px solid #e0e0e0;">${body.time}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e0e0e0; font-weight: bold; background-color: #faf5f0;">📍 Địa điểm:</td>
              <td style="padding: 12px; border: 1px solid #e0e0e0;">${body.location}</td>
            </tr>
          </table>

          <div style="background-color: #fff8f0; padding: 15px; border-left: 4px solid #d4a573; margin: 20px 0;">
            <p style="margin: 0;"><strong>📞 Eli sẽ liên hệ lại với bạn trong vòng 24 giờ</strong> để xác nhận chi tiết và tư vấn thêm về dịch vụ.</p>
          </div>

          <p>Trong thời gian chờ đợi, bạn có thể:</p>
          <ul>
            <li>Chuẩn bị ảnh tham khảo kiểu makeup/tóc yêu thích</li>
            <li>Dưỡng da kỹ và nghỉ ngơi đầy đủ</li>
            <li>Liên hệ ngay nếu có thắc mắc qua số hotline hoặc Zalo</li>
          </ul>

          <p>Nếu bạn cần thay đổi hoặc hủy lịch, vui lòng thông báo trước ít nhất 7 ngày.</p>

          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
            <p style="margin: 0; color: #666;">Liên hệ với chúng tôi:</p>
            <p style="margin: 5px 0;"><strong>📱 Hotline:</strong> 0123-456-789</p>
            <p style="margin: 5px 0;"><strong>💬 Zalo:</strong> 0123-456-789</p>
            <p style="margin: 5px 0;"><strong>📍 Địa chỉ:</strong> Đà Lạt - Ninh Thuận</p>
          </div>

          <p style="margin-top: 30px; color: #888; font-size: 12px; text-align: center;">
            Email này được gửi tự động từ hệ thống đặt lịch Eli Hoàng Tú Makeup Artist<br>
            Vui lòng không trả lời trực tiếp email này.
          </p>
        </div>
      `;

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'booking@eli-hoang-tu-makeup.onrender.com',
          to: [body.email],
          subject: '✨ Xác nhận đặt lịch - Eli Hoàng Tú Makeup Artist',
          html: customerEmailContent,
        }),
      });
    }

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
