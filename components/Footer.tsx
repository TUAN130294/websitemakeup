import React from 'react';

interface FooterProps {
    onNavigate: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-deep-charcoal text-surface-white py-12 px-6 md:px-12 rounded-t-[32px] mt-auto">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-4">
        
        {/* Brand Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:w-1/3">
          <h2 className="text-2xl font-serif font-bold tracking-tight text-white">Eli Hoàng Tú</h2>
          <p className="text-warm-gray text-sm leading-relaxed max-w-xs md:max-w-none">
            Chuyên trang điểm cô dâu tại Đà Lạt & Ninh Thuận. Tôn vinh vẻ đẹp tự nhiên và rạng rỡ nhất của bạn trong
            ngày trọng đại.
          </p>
          <p className="text-warm-gray/60 text-xs font-medium tracking-wide pt-4 hidden md:block">
            © 2024 Eli Hoàng Tú. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start space-y-6">
          <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Liên kết</h3>
          <nav className="flex flex-col space-y-3 items-center md:items-start">
            <button onClick={() => onNavigate('portfolio')} className="text-warm-gray hover:text-white transition-colors duration-300 text-base">
              Portfolio
            </button>
            <button onClick={() => onNavigate('services')} className="text-warm-gray hover:text-white transition-colors duration-300 text-base">
              Dịch vụ & Giá
            </button>
            <button onClick={() => onNavigate('booking')} className="text-warm-gray hover:text-white transition-colors duration-300 text-base">
              Đặt lịch
            </button>
            <button onClick={() => onNavigate('about')} className="text-warm-gray hover:text-white transition-colors duration-300 text-base">
              Về Eli
            </button>
          </nav>
        </div>

        {/* Contact & Socials */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-end space-y-6">
          <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Liên hệ</h3>
          <div className="flex flex-col items-center md:items-end space-y-2 text-warm-gray mb-4">
            <a href="tel:+84900000000" className="hover:text-white transition-colors text-base font-medium">
              090 000 0000
            </a>
            <a href="mailto:contact@elihoangtu.com" className="hover:text-white transition-colors text-base">
              contact@elihoangtu.com
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              aria-label="Call"
              className="group flex items-center justify-center w-10 h-10 rounded-full border border-warm-gray text-white hover:border-primary hover:bg-primary/10 hover:text-primary active:bg-primary active:text-white transition-all duration-300"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
            </button>
            <button
              aria-label="Zalo Chat"
              className="group flex items-center justify-center w-10 h-10 rounded-full border border-warm-gray text-white hover:border-primary hover:bg-primary/10 hover:text-primary active:bg-primary active:text-white transition-all duration-300"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </button>
            <button
              aria-label="Instagram"
              className="group flex items-center justify-center w-10 h-10 rounded-full border border-warm-gray text-white hover:border-primary hover:bg-primary/10 hover:text-primary active:bg-primary active:text-white transition-all duration-300"
            >
              <span className="material-symbols-outlined text-[20px]">photo_camera</span>
            </button>
            <button
              aria-label="Facebook"
              className="group flex items-center justify-center w-10 h-10 rounded-full border border-warm-gray text-white hover:border-primary hover:bg-primary/10 hover:text-primary active:bg-primary active:text-white transition-all duration-300"
            >
              <span className="material-symbols-outlined text-[20px]">public</span>
            </button>
          </div>
        </div>
      </div>
      
       {/* Mobile Copyright */}
      <div className="md:hidden w-full h-px bg-white/10 my-6"></div>
      <div className="md:hidden text-center">
          <p className="text-warm-gray/60 text-xs font-medium tracking-wide">
            © 2024 Eli Hoàng Tú. All rights reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;