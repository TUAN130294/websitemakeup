import React, { useState } from 'react';

interface BookingFormData {
  name: string;
  phone: string;
  location: string;
  date: string;
  time: string;
  skinCondition: string;
  notes: string;
}

const Booking: React.FC = () => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    location: '',
    date: '',
    time: '',
    skinCondition: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        // Reset form
        setFormData({
          name: '',
          phone: '',
          location: '',
          date: '',
          time: '',
          skinCondition: '',
          notes: ''
        });
        setDetailsOpen(false);
      } else {
        // Handle error
        alert(`Lỗi: ${result.error || 'Không thể gửi yêu cầu đặt lịch. Vui lòng thử lại sau.'}`);
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      alert('Lỗi kết nối. Vui lòng kiểm tra internet và thử lại sau.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <section id="booking" className="relative flex flex-col items-center justify-start py-16 px-4 sm:px-6 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="mb-8 text-center w-full max-w-lg">
        <h1 className="text-[#191510] dark:text-white font-serif text-[32px] font-medium leading-tight tracking-tight">
          Đặt lịch với Eli
        </h1>
        <p className="text-[#8b745b] mt-2 text-sm font-light">Dành cho cô dâu tại Đà Lạt & Ninh Thuận</p>
      </header>

      {/* Booking Form Container */}
      <div className="w-full max-w-[640px] bg-white dark:bg-[#2a241e] rounded-[16px] shadow-soft p-6 md:p-12 border border-[#f0ebe6] dark:border-[#3e362e] transition-colors duration-300">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#191510] dark:text-[#e3dcd4]" htmlFor="name">
              Họ tên
            </label>
            <div className="relative">
              <input
                className="block w-full h-[48px] rounded border-gray-200 dark:border-[#4a4238] bg-white dark:bg-[#342e27] text-[#191510] dark:text-white px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-gray-400 dark:placeholder:text-[#6b5e50] transition-colors"
                id="name"
                placeholder="Nhập họ tên của bạn"
                required
                type="text"
                value={formData.name}
                onChange={handleInputChange}
              />
              <span className="absolute right-3 top-3 text-gray-400 dark:text-[#6b5e50]">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  person
                </span>
              </span>
            </div>
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#191510] dark:text-[#e3dcd4]" htmlFor="phone">
              Số điện thoại
            </label>
            <div className="relative">
              <input
                className="block w-full h-[48px] rounded border-gray-200 dark:border-[#4a4238] bg-white dark:bg-[#342e27] text-[#191510] dark:text-white px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-gray-400 dark:placeholder:text-[#6b5e50] transition-colors"
                id="phone"
                placeholder="09xx xxx xxx"
                required
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <span className="absolute right-3 top-3 text-gray-400 dark:text-[#6b5e50]">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  call
                </span>
              </span>
            </div>
          </div>

          {/* Location Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#191510] dark:text-[#e3dcd4]" htmlFor="location">
              Địa điểm tổ chức
            </label>
            <div className="relative">
              <input
                className="block w-full h-[48px] rounded border-gray-200 dark:border-[#4a4238] bg-white dark:bg-[#342e27] text-[#191510] dark:text-white px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-gray-400 dark:placeholder:text-[#6b5e50] transition-colors"
                id="location"
                placeholder="Ví dụ: Khách sạn Dalat Palace"
                required
                type="text"
                value={formData.location}
                onChange={handleInputChange}
              />
              <span className="absolute right-3 top-3 text-gray-400 dark:text-[#6b5e50]">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  location_on
                </span>
              </span>
            </div>
          </div>

          {/* Date & Time Row */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="space-y-2 flex-1">
              <label className="block text-sm font-medium text-[#191510] dark:text-[#e3dcd4]" htmlFor="date">
                Ngày
              </label>
              <input
                className="block w-full h-[48px] rounded border-gray-200 dark:border-[#4a4238] bg-white dark:bg-[#342e27] text-[#191510] dark:text-white px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-gray-400 dark:placeholder:text-[#6b5e50] transition-colors"
                id="date"
                required
                type="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2 flex-1">
              <label className="block text-sm font-medium text-[#191510] dark:text-[#e3dcd4]" htmlFor="time">
                Giờ
              </label>
              <input
                className="block w-full h-[48px] rounded border-gray-200 dark:border-[#4a4238] bg-white dark:bg-[#342e27] text-[#191510] dark:text-white px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-gray-400 dark:placeholder:text-[#6b5e50] transition-colors"
                id="time"
                required
                type="time"
                value={formData.time}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-[#3e362e] my-2"></div>

          {/* Collapsible Section */}
          <div>
            <button
              className="flex w-full items-center justify-between py-2 group focus:outline-none"
              onClick={() => setDetailsOpen(!detailsOpen)}
              type="button"
            >
              <span className="text-base font-medium text-primary dark:text-[#d4a573]">Thêm thông tin chi tiết</span>
              <span
                className={`material-symbols-outlined text-primary dark:text-[#d4a573] transition-transform duration-300 ${
                  detailsOpen ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>
            <div
              className={`space-y-4 pt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                detailsOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#191510] dark:text-[#e3dcd4]" htmlFor="skin">
                  Tình trạng da
                </label>
                <select
                  className="block w-full h-[48px] rounded border-gray-200 dark:border-[#4a4238] bg-white dark:bg-[#342e27] text-[#191510] dark:text-white px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  id="skin"
                  value={formData.skinCondition}
                  onChange={handleInputChange}
                >
                  <option disabled value="">
                    Chọn tình trạng da của bạn
                  </option>
                  <option value="normal">Da thường</option>
                  <option value="oily">Da dầu</option>
                  <option value="dry">Da khô</option>
                  <option value="combination">Da hỗn hợp</option>
                  <option value="sensitive">Da nhạy cảm</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#191510] dark:text-[#e3dcd4]" htmlFor="notes">
                  Ghi chú thêm
                </label>
                <textarea
                  className="block w-full rounded border-gray-200 dark:border-[#4a4238] bg-white dark:bg-[#342e27] text-[#191510] dark:text-white px-4 py-3 text-base focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-gray-400 dark:placeholder:text-[#6b5e50] resize-none transition-colors"
                  id="notes"
                  placeholder="Bất kỳ yêu cầu đặc biệt nào khác..."
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
          </div>

          <button
            className="w-full h-[56px] mt-4 bg-primary hover:bg-primary-hover text-white rounded-full font-medium text-lg shadow-lg shadow-primary/30 transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="material-symbols-outlined animate-spin">refresh</span>
                <span>Đang gửi...</span>
              </>
            ) : (
              <>
                <span>Gửi yêu cầu đặt lịch</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-80 h-80 bg-[#E8DCC4]/30 dark:bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 transition-opacity duration-300">
          <div className="bg-white dark:bg-[#2a241e] rounded-[32px] p-8 max-w-sm w-full text-center shadow-2xl animate-fade-in-up">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-primary text-[40px]">check</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#191510] dark:text-white mb-3">Đã nhận yêu cầu!</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Cảm ơn bạn đã quan tâm. Eli sẽ liên hệ lại qua số điện thoại của bạn trong vòng 24h để xác nhận lịch
              trình.
            </p>
            <button
              className="w-full h-[52px] border-2 border-primary text-primary hover:bg-primary hover:text-white dark:hover:text-white rounded-full font-medium text-base transition-colors duration-300"
              onClick={handleCloseSuccess}
            >
              Quay về trang chủ
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Booking;
