import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="flex flex-col px-6 py-16 md:py-24 bg-white dark:bg-background-dark">
      <div className="max-w-6xl mx-auto w-full md:grid md:grid-cols-2 md:gap-16 items-center">
        
        {/* Hero Image */}
        <div className="w-full mb-10 md:mb-0 px-2 md:px-0">
            <div className="relative w-full aspect-[7/8.5] md:aspect-[3/4] rounded-[8px] shadow-elegant overflow-hidden group">
            <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtiMq83OmBhE2wkId4P9alK3I-W3lHY-7OaUcUoR9xDXmq6EVOlSaZKg6YcqaRru5XfaIAtI-dLnjQYhdIddQeuEq0lKYiLHF0QbaO6LWRdJQDMJ_KeYeDmczjY5uhzFPM7yJe6s0nq8Gja7JJGTBPy-v9yBi74gDOm-JQELUYM2ktxpJ9kMq_Eg3Eer2mVNbs_4bWwQm1jNMpWY5we5TR069UM2Xl6O0907CG2Gd4ytVF5FZ_3sDXSg96WeAKjCwxWGPCvHf1n2bn")',
                }}
            ></div>
            {/* Subtle overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            {/* Kicker / Overline */}
            <h3 className="font-display text-primary text-xs font-bold uppercase tracking-[2px]">Về Eli</h3>

            {/* Main Headline */}
            <h1 className="font-serif text-[#191510] dark:text-white text-[32px] md:text-[40px] leading-[1.2] font-normal px-2 md:px-0">
            Tạo nên vẻ đẹp tự nhiên, thăng hoa cảm xúc
            </h1>

            {/* Body Text */}
            <div className="space-y-4 text-left">
            <p className="font-display text-base md:text-lg text-[#4A4A4A] dark:text-gray-300 leading-relaxed font-normal">
                Với hơn 5 năm kinh nghiệm trang điểm cô dâu tại Đà Lạt và Ninh Thuận, Eli luôn theo đuổi phong cách tự
                nhiên, tôn vinh nét đẹp riêng của từng cô dâu. Sự tỉ mỉ và tận tâm là cam kết hàng đầu.
            </p>
            <p className="font-display text-base md:text-lg text-[#4A4A4A] dark:text-gray-300 leading-relaxed font-normal">
                Mỗi đường cọ, mỗi lớp phấn đều được chăm chút để làn da luôn rạng rỡ, giúp nàng tự tin tỏa sáng trong ngày
                trọng đại nhất của mình.
            </p>
            </div>

            {/* Spacer */}
            <div className="h-4 md:h-8"></div>

            {/* Statistics */}
            <div className="flex w-full justify-between md:justify-start md:gap-16 px-2 md:px-0 pt-4 border-t border-primary/10 dark:border-primary/20">
            <div className="flex flex-col items-center md:items-start flex-1 md:flex-none">
                <span className="font-serif text-[36px] md:text-[42px] text-primary leading-none mb-1">5+</span>
                <span className="font-display text-sm text-text-subtle font-medium">Năm kinh nghiệm</span>
            </div>
            <div className="w-px bg-primary/20 h-10 self-center md:hidden"></div>
            <div className="flex flex-col items-center md:items-start flex-1 md:flex-none">
                <span className="font-serif text-[36px] md:text-[42px] text-primary leading-none mb-1">500+</span>
                <span className="font-display text-sm text-text-subtle font-medium">Cô dâu hài lòng</span>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;