import React, { useState } from 'react';
import { CalculatorItem } from '../types';

interface ServicesProps {
    onNavigate: (sectionId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    wedding: true,
    preWedding: false,
    mom: false,
    travel: false,
  });

  const calculatorData: CalculatorItem[] = [
    { id: 'wedding', label: 'Trang điểm Tiệc cưới', price: '3.5tr', value: 3500000 },
    { id: 'preWedding', label: 'Chụp Pre-wedding', price: '2.5tr', value: 2500000 },
    { id: 'mom', label: 'Trang điểm Mẹ', price: '1.0tr', value: 1000000 },
    { id: 'travel', label: 'Đi lại (Ngoại thành)', price: '500k', value: 500000 },
  ];

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const total = calculatorData.reduce((acc, item) => {
    return acc + (checkedItems[item.id] ? item.value : 0);
  }, 0);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
  };

  return (
    <section id="services" className="w-full px-4 py-16 md:py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto w-full">
        {/* Headline */}
        <div className="text-center mb-10 md:mb-16">
            <h1 className="text-[#191510] dark:text-white font-serif text-[32px] md:text-[40px] font-bold leading-tight mb-2">
            Dịch vụ & Bảng giá
            </h1>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="md:grid md:grid-cols-12 md:gap-8 lg:gap-12">
            {/* Left Column: Service Cards */}
            <div className="flex flex-col gap-8 md:col-span-7">
                {/* Card 1: Wedding */}
                <div className="bg-white dark:bg-[#2c241b] border border-gray-200 dark:border-gray-700 rounded-[12px] p-8 md:p-10 shadow-sm flex flex-col md:flex-row md:text-left items-center md:items-start text-center gap-6 md:gap-8 hover:shadow-md transition-shadow">
                    <div className="shrink-0 p-4 rounded-full bg-soft-blush text-primary dark:bg-primary/20">
                        <span className="material-symbols-outlined text-[40px]">favorite</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-[#191510] dark:text-white text-[24px] md:text-[26px] font-display font-medium leading-tight mb-2">
                            Trang điểm Cô Dâu
                        </h3>
                        <p className="text-primary text-[20px] font-bold mb-3">Từ 3,500,000đ</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                            Phong cách trang điểm tự nhiên, rạng rỡ và bền màu. Dành cho tiệc cưới sáng hoặc tối tại Đà Lạt & Ninh
                            Thuận.
                        </p>
                        <ul className="w-full space-y-3 mb-6">
                            <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 justify-center md:justify-start">
                            <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                            <span>Bao gồm Makeup & Làm tóc (1 layout)</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 justify-center md:justify-start">
                            <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                            <span>Dặm phấn và hỗ trợ thay váy</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 justify-center md:justify-start">
                            <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                            <span>Tặng kèm lens cao cấp & dưỡng da</span>
                            </li>
                        </ul>
                        <button onClick={() => onNavigate('booking')} className="w-full md:w-auto px-8 cursor-pointer bg-primary hover:bg-[#c29260] transition-colors text-white text-base font-bold h-12 rounded-full flex items-center justify-center">
                            Tư vấn gói này
                        </button>
                    </div>
                </div>
                
                {/* Card 2: Pre-wedding */}
                <div className="bg-white dark:bg-[#2c241b] border border-gray-200 dark:border-gray-700 rounded-[12px] p-8 md:p-10 shadow-sm flex flex-col md:flex-row md:text-left items-center md:items-start text-center gap-6 md:gap-8 hover:shadow-md transition-shadow">
                    <div className="shrink-0 p-4 rounded-full bg-soft-blush text-primary dark:bg-primary/20">
                        <span className="material-symbols-outlined text-[40px]">photo_camera</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-[#191510] dark:text-white text-[24px] md:text-[26px] font-display font-medium leading-tight mb-2">Pre-wedding / Ngoại cảnh</h3>
                        <p className="text-primary text-[20px] font-bold mb-3">Từ 2,500,000đ</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                        Layout phù hợp với concept chụp hình ngoại cảnh, studio. Hỗ trợ thay đổi kiểu tóc và dặm nền theo đoàn.
                        </p>
                        <ul className="w-full space-y-3 mb-6">
                        <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 justify-center md:justify-start">
                            <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                            <span>Theo đoàn 1 buổi (4-5 tiếng)</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 justify-center md:justify-start">
                            <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                            <span>Thay đổi 2-3 kiểu tóc theo concept</span>
                        </li>
                        </ul>
                        <button onClick={() => onNavigate('booking')} className="w-full md:w-auto px-8 cursor-pointer bg-primary hover:bg-[#c29260] transition-colors text-white text-base font-bold h-12 rounded-full flex items-center justify-center">
                            Tư vấn gói này
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Column: Calculator */}
            <div className="mt-12 md:mt-0 md:col-span-5 relative">
                <div className="bg-soft-blush dark:bg-[#2c241b] rounded-[16px] p-8 md:p-10 border border-primary/10 sticky top-24">
                    <h3 className="text-[#191510] dark:text-white text-xl font-bold mb-6 text-center md:text-left">Ước tính chi phí của bạn</h3>
                    <div className="space-y-4 mb-8">
                    {calculatorData.map((item) => (
                        <label
                        key={item.id}
                        className="flex items-center justify-between p-3 bg-white dark:bg-background-dark rounded-lg cursor-pointer hover:shadow-sm transition-shadow group"
                        >
                        <div className="flex items-center gap-3">
                            <input
                            type="checkbox"
                            checked={checkedItems[item.id]}
                            onChange={() => toggleItem(item.id)}
                            className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                            />
                            <span className="text-[#191510] dark:text-white font-medium group-hover:text-primary transition-colors">{item.label}</span>
                        </div>
                        <span className="text-sm text-gray-500">{item.price}</span>
                        </label>
                    ))}
                    </div>
                    <div className="border-t border-primary/20 pt-6 text-center md:text-left">
                        <p className="text-sm text-gray-500 mb-1">Tổng chi phí ước tính</p>
                        <p className="font-serif text-[36px] font-bold text-primary leading-none mb-4">{formatCurrency(total)}</p>
                        <p className="text-xs text-gray-400 italic">
                            *Giá trên chỉ là ước tính tham khảo. Vui lòng liên hệ trực tiếp để được tư vấn combo và ưu đãi chính xác
                            nhất.
                        </p>
                    </div>
                    <button onClick={() => onNavigate('booking')} className="w-full mt-6 cursor-pointer border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all text-base font-bold h-12 rounded-full flex items-center justify-center">
                        Đặt hẹn tư vấn
                    </button>
                </div>
            </div>
        </div>
      
        {/* Footer Image (Visual break) */}
        <div className="mt-12 md:mt-20 rounded-[12px] overflow-hidden h-48 md:h-80 relative">
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <img alt="Bridal Accessories" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIH7MQJ4HHLxPCmIb8REe2d_NjMR2L6DgsKOLCmGHTV7-NpLtGJ6HJl73i0RYNn_QMLM_3gJEoWKtpm6K1gg8XdCUYo3Z5FONE53LAEhI5SjfpVXafSO-_Iz-QjRJu-vCiWXsK--frhRPrbXVNDhAUY-2GcaU_OaSENf6Nn5b7OsZjPsaMvaWxQ1eVNzNXP4gNpbPtcfeqwdGZncKxmNcbTJVq_Hc_AwGO0H9VRXozgKUuvYZquJWtvH5ygK4zLxEC-MaWDvO7HW9-"/>
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <p className="text-white font-serif text-xl md:text-3xl italic drop-shadow-md">"Vẻ đẹp của bạn, niềm vui của tôi"</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;