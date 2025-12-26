import React, { useState } from 'react';

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // TODO: Update these with real contact numbers
  const phoneNumber = '0123456789'; // Replace with actual phone
  const zaloNumber = '0123456789';  // Replace with actual Zalo number
  const whatsappNumber = '84123456789'; // Replace with actual WhatsApp (format: 84...)

  const contactMethods = [
    {
      name: 'Gọi điện',
      icon: 'call',
      color: 'bg-green-500 hover:bg-green-600',
      link: `tel:${phoneNumber}`,
    },
    {
      name: 'Zalo',
      icon: 'chat',
      color: 'bg-blue-500 hover:bg-blue-600',
      link: `https://zalo.me/${zaloNumber}`,
    },
    {
      name: 'WhatsApp',
      icon: 'forum',
      color: 'bg-emerald-500 hover:bg-emerald-600',
      link: `https://wa.me/${whatsappNumber}`,
    },
    {
      name: 'Facebook',
      icon: 'thumb_up',
      color: 'bg-indigo-500 hover:bg-indigo-600',
      link: 'https://www.facebook.com/eli.hoangtu.makeup', // Replace with actual Facebook page
    },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);

    // Track event in analytics if available
    if (typeof gtag !== 'undefined') {
      gtag('event', 'contact_button_click', {
        event_category: 'engagement',
        event_label: isOpen ? 'close' : 'open'
      });
    }
  };

  const handleContactClick = (method: string) => {
    // Track which contact method was used
    if (typeof gtag !== 'undefined') {
      gtag('event', 'contact_method_selected', {
        event_category: 'engagement',
        event_label: method
      });
    }

    if (typeof fbq !== 'undefined') {
      fbq('track', 'Contact', { method: method });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      {/* Contact options */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {contactMethods.map((method, index) => (
          <a
            key={method.name}
            href={method.link}
            target={method.link.startsWith('http') ? '_blank' : undefined}
            rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            onClick={() => handleContactClick(method.name)}
            className={`${method.color} text-white rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group`}
            style={{
              transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
            }}
          >
            {/* Icon only on mobile, text + icon on hover/desktop */}
            <div className="flex items-center justify-center w-12 h-12">
              <span className="material-symbols-outlined text-[22px]">{method.icon}</span>
            </div>
            <span className="hidden group-hover:inline-block pr-4 font-medium text-sm whitespace-nowrap">
              {method.name}
            </span>
          </a>
        ))}
      </div>

      {/* Main toggle button */}
      <button
        onClick={handleToggle}
        className={`${
          isOpen ? 'bg-gray-600 hover:bg-gray-700' : 'bg-primary hover:bg-primary-hover'
        } text-white rounded-full shadow-xl transition-all duration-300 flex items-center justify-center w-14 h-14 group`}
        aria-label="Contact options"
      >
        <span
          className={`material-symbols-outlined text-[28px] transition-transform duration-300 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          {isOpen ? 'close' : 'chat'}
        </span>
      </button>

      {/* Pulse animation when closed */}
      {!isOpen && (
        <div className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-primary animate-ping opacity-20 pointer-events-none"></div>
      )}
    </div>
  );
};

export default FloatingContact;
