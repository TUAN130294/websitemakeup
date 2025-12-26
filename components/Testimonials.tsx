import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Nguyễn Thị Hương',
      role: 'Cô dâu',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Eli là người makeup artist tuyệt vời nhất mà tôi từng gặp! Cô ấy đã biến tôi thành công chúa trong ngày trọng đại. Makeup giữ lâu suốt 12 tiếng và rất tự nhiên.',
      date: '15/11/2024',
      service: 'Makeup cô dâu'
    },
    {
      id: 2,
      name: 'Trần Minh Anh',
      role: 'Cô dâu',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Tôi có làn da khá khó makeup nhưng Eli đã xử lý rất khéo léo. Kết quả vượt ngoài mong đợi, cả gia đình và bạn bè đều khen nức nở. Chắc chắn sẽ giới thiệu cho bạn bè!',
      date: '03/10/2024',
      service: 'Makeup cô dâu'
    },
    {
      id: 3,
      name: 'Lê Thảo Vi',
      role: 'Khách hàng',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Makeup party của Eli rất sang trọng và phù hợp với concept tiệc của tôi. Cô ấy rất chuyên nghiệp, đúng giờ và tư vấn nhiệt tình. Tôi rất hài lòng!',
      date: '20/09/2024',
      service: 'Makeup tiệc'
    },
    {
      id: 4,
      name: 'Phạm Thanh Mai',
      role: 'Cô dâu',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Eli đã tư vấn và thực hiện makeup cho tôi trong ngày cưới tại Đà Lạt. Mọi thứ đều hoàn hảo! Tôi cảm thấy rất tự tin và xinh đẹp. Cảm ơn Eli rất nhiều! ❤️',
      date: '12/08/2024',
      service: 'Makeup cô dâu'
    },
    {
      id: 5,
      name: 'Hoàng Thu Trang',
      role: 'Khách hàng',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Makeup kỷ yếu của Eli rất tự nhiên và phù hợp với tuổi teen. Con gái tôi rất thích và ảnh chụp ra rất đẹp. Giá cả hợp lý, sẽ quay lại lần sau!',
      date: '05/07/2024',
      service: 'Makeup kỷ yếu'
    },
    {
      id: 6,
      name: 'Đỗ Khánh Linh',
      role: 'Cô dâu',
      image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Tôi đã chọn Eli cho cả makeup cưới và chụp ảnh cưới. Kết quả tuyệt vời! Eli rất tận tâm, lắng nghe ý kiến khách hàng và luôn đưa ra những gợi ý hay.',
      date: '18/06/2024',
      service: 'Makeup cô dâu & Pre-wedding'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className="material-symbols-outlined text-[20px] text-yellow-400"
        style={{ fontVariationSettings: index < rating ? '"FILL" 1' : '"FILL" 0' }}
      >
        star
      </span>
    ));
  };

  return (
    <section id="testimonials" className="flex flex-col py-16 md:py-24 px-4 bg-white dark:bg-[#2a241e]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-[#191510] dark:text-[#f2f0ed] font-serif text-[32px] md:text-[40px] font-medium leading-tight text-center tracking-wide mb-4">
            Khách Hàng Nói Gì Về Eli
          </h2>
          <div className="w-16 h-[2px] bg-primary rounded-full mb-4"></div>
          <p className="text-[#8b745b] dark:text-[#a89f9f] text-center text-base md:text-lg max-w-2xl">
            Hơn 500+ cô dâu và khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-soft-blush dark:bg-[#1e1914] rounded-[24px] p-8 md:p-12 shadow-elegant">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[32px]">format_quote</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {renderStars(testimonials[currentIndex].rating)}
            </div>

            {/* Testimonial Text */}
            <p className="text-[#191510] dark:text-[#e3dcd4] text-lg md:text-xl text-center leading-relaxed mb-8 font-light italic">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Customer Info */}
            <div className="flex flex-col items-center gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                loading="lazy"
              />
              <div className="text-center">
                <h4 className="text-[#191510] dark:text-white font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[#8b745b] dark:text-[#a89f9f] text-sm">
                  {testimonials[currentIndex].service} • {testimonials[currentIndex].date}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => {
              prevTestimonial();
              setIsAutoPlaying(false);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white dark:bg-[#2a241e] rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center hover:bg-primary hover:text-white group"
            aria-label="Previous testimonial"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={() => {
              nextTestimonial();
              setIsAutoPlaying(false);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white dark:bg-[#2a241e] rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center hover:bg-primary hover:text-white group"
            aria-label="Next testimonial"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`transition-all ${
                index === currentIndex
                  ? 'w-8 h-2 bg-primary'
                  : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
              } rounded-full`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=eli+hoang+tu+makeup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium text-base hover:underline underline-offset-4"
          >
            <span className="material-symbols-outlined">star</span>
            <span>Xem thêm đánh giá trên Google</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
