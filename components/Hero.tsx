import React from 'react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative flex min-h-[90vh] w-full flex-col items-center justify-center text-center px-6 pt-20 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.85) 0%, rgba(255, 254, 249, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMZDYHDHun-g71qfPM019vpd4UegQ2jxsegcURsHez9gjP5mTnEnSfn38wQW6JWptMcq7J6930DvfRIEqnEwn2QqBqGrp4EGjR6Kw4A72HEgsnq1rmslYO5W9t0MOF637_fCdFRf6G_izuwgVWX13VnMiz97zabeqFFqFVSVFLmSdmD7aQR-XprhxOWAVUCocfOR_MeI_V4fB9QfzfrtE3pD0nJqSZryt1pDzFMI1B27i7AlTnsB2Knuf86xBUKHf2CNmA38o_n-Kb")`,
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-md md:max-w-4xl w-full gap-8 md:gap-10">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-[#191510] text-[42px] md:text-[64px] leading-[1.15] md:leading-tight font-serif font-semibold tracking-tight text-balance">
            Đánh thức vẻ đẹp riêng của bạn
          </h1>
          <p className="text-text-subtle text-lg md:text-xl font-normal leading-relaxed text-balance max-w-2xl mx-auto">
            Chuyên makeup cô dâu tự nhiên, trong trẻo tại Đà Lạt & Ninh Thuận. Mang đến sự tự tin và rạng rỡ nhất cho ngày trọng đại.
          </p>
        </div>

        {/* CTA Group */}
        <div className="flex flex-col w-full gap-4 mt-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => onNavigate('booking')}
            className="flex w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-primary text-white text-base font-bold tracking-wide shadow-lg shadow-primary/20 hover:bg-[#c29465] transition-all transform hover:scale-[1.02]"
          >
            <span className="truncate">Đặt lịch ngay</span>
          </button>
          <button
            onClick={() => onNavigate('portfolio')}
            className="flex w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-transparent border-[1.5px] border-primary text-primary text-base font-bold tracking-wide hover:bg-primary/5 transition-all"
          >
            <span className="truncate">Xem portfolio</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-2 animate-bounce-slow opacity-80 cursor-pointer" onClick={() => onNavigate('about')}>
        <span className="text-xs font-medium text-text-subtle uppercase tracking-widest">Khám phá</span>
        <span className="material-symbols-outlined text-primary" style={{ fontSize: '32px' }}>
          keyboard_arrow_down
        </span>
      </div>
    </section>
  );
};

export default Hero;