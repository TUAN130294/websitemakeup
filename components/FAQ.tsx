import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'Tôi nên đặt lịch trước bao lâu?',
      answer: 'Để đảm bảo có slot phù hợp, bạn nên đặt lịch trước ít nhất 1-2 tháng, đặc biệt là trong mùa cưới (tháng 9-12). Đối với ngày lễ hoặc cuối tuần, nên đặt sớm hơn để có nhiều lựa chọn về thời gian.',
      category: 'booking'
    },
    {
      id: 2,
      question: 'Thời gian makeup cô dâu mất bao lâu?',
      answer: 'Makeup cô dâu thường mất khoảng 1.5 - 2 giờ, bao gồm cả làm tóc và trang điểm. Thời gian có thể kéo dài hơn tùy theo yêu cầu kiểu tóc phức tạp hay makeup đặc biệt. Tôi sẽ đến sớm để đảm bảo mọi thứ hoàn hảo đúng giờ.',
      category: 'service'
    },
    {
      id: 3,
      question: 'Makeup có giữ được lâu không?',
      answer: 'Tôi sử dụng các sản phẩm makeup cao cấp, chuyên dụng cho cô dâu với công thức lâu trôi (long-lasting). Makeup có thể giữ tốt trong 10-12 giờ, thậm chí lâu hơn. Tôi cũng chuẩn bị sẵn kit touch-up nhỏ để bạn tự chỉnh sửa nếu cần.',
      category: 'service'
    },
    {
      id: 4,
      question: 'Tôi có da nhạy cảm, có vấn đề gì không?',
      answer: 'Hoàn toàn không! Tôi có nhiều kinh nghiệm làm việc với nhiều loại da khác nhau, kể cả da nhạy cảm, da mụn, da khô. Tôi sẽ tư vấn và sử dụng sản phẩm phù hợp với tình trạng da của bạn. Bạn có thể thông báo trước về tình trạng da để tôi chuẩn bị tốt nhất.',
      category: 'service'
    },
    {
      id: 5,
      question: 'Giá makeup đã bao gồm những gì?',
      answer: 'Giá makeup cô dâu từ 3,500,000đ bao gồm: makeup mặt hoàn chỉnh, làm tóc, phụ kiện tóc cơ bản, và touch-up kit. Không bao gồm mi giả 3D cao cấp (nếu yêu cầu) và phí di chuyển nếu địa điểm cách xa trên 15km. Giá có thể thay đổi tùy theo yêu cầu đặc biệt.',
      category: 'pricing'
    },
    {
      id: 6,
      question: 'Tôi có cần chuẩn bị gì trước khi makeup?',
      answer: 'Bạn nên: (1) Dưỡng da kỹ và ngủ đủ giấc trước 1-2 ngày, (2) Tẩy trang sạch sẽ vào buổi sáng ngày makeup, (3) Mang theo ảnh tham khảo kiểu makeup/tóc yêu thích, (4) Chuẩn bị áo cài nút phía trước để không làm hỏng tóc khi thay đồ, (5) Thông báo nếu có dị ứng hay tình trạng da đặc biệt.',
      category: 'preparation'
    },
    {
      id: 7,
      question: 'Có dịch vụ makeup thử không?',
      answer: 'Có! Tôi có dịch vụ makeup thử (trial) để bạn xem trước và điều chỉnh style phù hợp. Phí makeup thử là 800,000đ - 1,000,000đ tùy theo dịch vụ. Nếu bạn book makeup ngày cưới, tôi sẽ giảm 50% phí makeup thử.',
      category: 'service'
    },
    {
      id: 8,
      question: 'Khu vực nào bạn phục vụ?',
      answer: 'Tôi chủ yếu phục vụ tại Đà Lạt và Ninh Thuận. Với các khu vực khác trong tỉnh Lâm Đồng và lân cận, tôi cũng có thể nhận nếu sắp xếp được lịch trình. Phí di chuyển sẽ được tính thêm tùy theo khoảng cách (200,000đ - 500,000đ).',
      category: 'booking'
    },
    {
      id: 9,
      question: 'Nếu tôi muốn hủy hoặc đổi lịch thì sao?',
      answer: 'Bạn có thể hủy hoặc đổi lịch miễn phí nếu thông báo trước ít nhất 7 ngày. Nếu hủy trong vòng 3-7 ngày, phí hủy là 30% tổng giá trị. Hủy trong vòng 48 giờ hoặc không đến sẽ không được hoàn cọc. Trong trường hợp khẩn cấp (ốm, tai nạn...), chúng ta có thể bàn bạc thêm.',
      category: 'booking'
    },
    {
      id: 10,
      question: 'Tôi có cần đặt cọc không?',
      answer: 'Để giữ chỗ, bạn cần đặt cọc 30-50% tổng giá trị dịch vụ (tối thiểu 1,000,000đ). Phần còn lại bạn thanh toán sau khi hoàn thành makeup. Đặt cọc giúp đảm bảo slot của bạn, đặc biệt trong mùa cao điểm.',
      category: 'pricing'
    },
    {
      id: 11,
      question: 'Bạn có makeup cho mẹ/phù dâu không?',
      answer: 'Có! Tôi có gói dịch vụ makeup cho mẹ cô dâu, phù dâu, và khách mời với giá ưu đãi từ 800,000đ - 1,500,000đ/người. Nếu book combo nhiều người, bạn sẽ được giảm giá thêm.',
      category: 'service'
    },
    {
      id: 12,
      question: 'Sản phẩm makeup bạn sử dụng là gì?',
      answer: 'Tôi sử dụng các thương hiệu makeup chuyên nghiệp và cao cấp như MAC, Estée Lauder, Charlotte Tilbury, NARS, Make Up For Ever, và các sản phẩm Hàn Quốc phù hợp với da người Việt. Tất cả đều là hàng chính hãng, an toàn và phù hợp với làn da châu Á.',
      category: 'service'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tất cả', icon: 'apps' },
    { id: 'booking', name: 'Đặt lịch', icon: 'calendar_month' },
    { id: 'service', name: 'Dịch vụ', icon: 'face_3' },
    { id: 'pricing', name: 'Giá cả', icon: 'payments' },
    { id: 'preparation', name: 'Chuẩn bị', icon: 'checklist' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="flex flex-col py-16 md:py-24 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-[#191510] dark:text-[#f2f0ed] font-serif text-[32px] md:text-[40px] font-medium leading-tight text-center tracking-wide mb-4">
            Câu Hỏi Thường Gặp
          </h2>
          <div className="w-16 h-[2px] bg-primary rounded-full mb-4"></div>
          <p className="text-[#8b745b] dark:text-[#a89f9f] text-center text-base md:text-lg max-w-2xl">
            Giải đáp những thắc mắc phổ biến về dịch vụ makeup
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 mb-8 overflow-x-auto no-scrollbar pb-2 justify-center flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white dark:bg-[#2a241e] text-[#635c55] dark:text-white/70 border border-gray-200 dark:border-white/10 hover:border-primary dark:hover:border-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
              <span className="text-sm font-medium">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-[#2a241e] rounded-[16px] shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100 dark:border-white/5"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-start justify-between p-6 text-left group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    openId === faq.id
                      ? 'bg-primary text-white'
                      : 'bg-primary/10 text-primary'
                  }`}>
                    <span className="material-symbols-outlined text-[20px]">help</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-[#191510] dark:text-white font-semibold text-base md:text-lg pr-4">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <span
                  className={`material-symbols-outlined text-primary text-[24px] shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openId === faq.id
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-6 pb-6 pl-20">
                  <p className="text-[#635c55] dark:text-[#a89f9f] leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-soft-blush dark:bg-[#1e1914] rounded-[20px] p-8">
          <h3 className="text-[#191510] dark:text-white font-serif text-xl md:text-2xl font-medium mb-3">
            Vẫn còn thắc mắc?
          </h3>
          <p className="text-[#8b745b] dark:text-[#a89f9f] mb-6">
            Đừng ngại liên hệ trực tiếp với Eli để được tư vấn chi tiết hơn
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="tel:0123456789"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-medium text-sm transition-colors shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Gọi điện ngay</span>
            </a>
            <a
              href="https://zalo.me/0123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium text-sm transition-colors shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Chat qua Zalo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
