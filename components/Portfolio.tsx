import React, { useState } from 'react';
import { PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const INITIAL_DISPLAY_COUNT = 6;

  const categories = ['All', 'Bride', 'Party', 'Yearbook', 'Concept'];

  const items: PortfolioItem[] = [
    {
      id: 1,
      title: 'Natural Bridal Glow',
      category: 'Bride',
      location: 'Đà Lạt',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeRl6_QZkFyjh3IXuaVL37gKcl1F_fYhig0_BwbXmPhiXAq2QT6moPa8TKQv_hjZ4gQCaxTMxMvFvzji-1l9XXwIxbIwaAwQZplLxwqVHeANmtX_MWu-KEzNH8F7VsWSvGQJPCN_HCFUkuXsY3G-KCHUh267htgkm-KypqUVRdBBdVOspdUUaGo7jQ51j9l74TjQCr-aUo3PAvoTIs6dTEeOMGwtLpkGaEdaiaadpsy2Z0WFvsku7gKp8smO_AvikCNiQDW_dQUHA7',
      badge: 'Cô dâu',
      badgeIcon: 'favorite'
    },
    {
      id: 2,
      title: 'Evening Glamour',
      category: 'Party',
      location: 'Ninh Thuận',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEtzZgdtduTjuzSLJzsTF9FthBi6PmD5dLoYHeiwLc13YebGZLJoQmYQmARctO7hx3c44ap5rT2NEIacHf6f4n53g4xiOPly6KMfW-UEtUM75MLfiF6xOENvSayFOVmbeC-ytpgrcAOaZ1ou5_wFE0envdpQCXnudEmc29fnJwVkLinEKQ9Ufol866oxInqx_l26Iskv40QXpZFW2xL2ZleESNjXrlcQR5YSdz52rgeS89aePnG9T3IEDNeUr0-BNLqbWfbqx_UPJP',
      badge: 'Tiệc',
      badgeIcon: 'celebration'
    },
    {
      id: 3,
      title: 'Forest Nymph Art',
      category: 'Concept',
      location: 'Studio Đà Lạt',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPrtcSmHopDg936FrSZ4KX556qws7b_gPH9PWnTT8n8sfuRdYktR_JjCDEsfUnNFQurJPCMNPZbbNoiTuN9nfY8PqFnhxZ3gwLDW4z1nKWGPD5r6SWDeGIcRVOZzgQ7NK9i9Ml2SKGcDgpZ8XMxagMkgd53ISXsI4HFNw8_MPYrd0VNTlYhIJ2xd8Eyn7-YJuz8xZ3nFkiMsLYmwVGPDorZHTGbz4GbiodrVzEJnxOZqrmCQT4TY29eR7SzZZWQAHt3Y6Z0a3445ZQ',
      badge: 'Concept',
      badgeIcon: 'palette'
    },
    {
      id: 4,
      title: 'Youthful Radiance',
      category: 'Yearbook',
      location: 'Đà Lạt',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoyp4gV0VU5BNcS5EMsN9QAMvmIuQ9OfIOPy95pRWI4UQJCgbbvL8DiQTfApuUXUwf0VJXhbbFI_P7nn4_B3_qcyBKigbAxZopy_if5kTUspFrVUUo5QNFv0ptJ0fGxxHuRt8DnKkyML7jIY4cl-i2sNx5_UrONiHSiOzVkiC6zHY-EuXu76Js2oZQ8mJEPq0UI-hbK9_I60jQoZm31XTx4a6Es4woENSokeb9Wu6FjoBGkKVJQtV9wqF0fsl4PulEQmn4a9X-PsSA',
      badge: 'Kỷ yếu',
      badgeIcon: 'school'
    },
    {
      id: 5,
      title: 'Romantic Bridal Look',
      category: 'Bride',
      location: 'Ninh Thuận',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
      badge: 'Cô dâu',
      badgeIcon: 'favorite'
    },
    {
      id: 6,
      title: 'Elegant Party Makeup',
      category: 'Party',
      location: 'Đà Lạt',
      imageUrl: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&auto=format&fit=crop&q=80',
      badge: 'Tiệc',
      badgeIcon: 'celebration'
    },
    {
      id: 7,
      title: 'Soft Yearbook Style',
      category: 'Yearbook',
      location: 'Ninh Thuận',
      imageUrl: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=800&auto=format&fit=crop&q=80',
      badge: 'Kỷ yếu',
      badgeIcon: 'school'
    },
    {
      id: 8,
      title: 'Vintage Concept Art',
      category: 'Concept',
      location: 'Studio Đà Lạt',
      imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&auto=format&fit=crop&q=80',
      badge: 'Concept',
      badgeIcon: 'palette'
    },
    {
      id: 9,
      title: 'Traditional Bridal',
      category: 'Bride',
      location: 'Đà Lạt',
      imageUrl: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=800&auto=format&fit=crop&q=80',
      badge: 'Cô dâu',
      badgeIcon: 'favorite'
    },
    {
      id: 10,
      title: 'Modern Party Glam',
      category: 'Party',
      location: 'Ninh Thuận',
      imageUrl: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&auto=format&fit=crop&q=80',
      badge: 'Tiệc',
      badgeIcon: 'celebration'
    },
    {
      id: 11,
      title: 'Fresh Yearbook Beauty',
      category: 'Yearbook',
      location: 'Đà Lạt',
      imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=80',
      badge: 'Kỷ yếu',
      badgeIcon: 'school'
    },
    {
      id: 12,
      title: 'Fantasy Concept',
      category: 'Concept',
      location: 'Studio Đà Lạt',
      imageUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&auto=format&fit=crop&q=80',
      badge: 'Concept',
      badgeIcon: 'palette'
    }
  ];

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter(item => item.category === activeCategory);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMore = filteredItems.length > INITIAL_DISPLAY_COUNT;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % displayedItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + displayedItems.length) % displayedItems.length);
  };

  // Keyboard navigation
  React.useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImageIndex]);

  return (
    <section id="portfolio" className="flex flex-col pt-8 pb-16 md:pb-24 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
            <h1 className="text-[#191510] dark:text-[#f2f0ed] font-serif text-[32px] md:text-[40px] font-medium leading-tight text-center tracking-wide mb-4">
            Portfolio & Gallery
            </h1>
            <div className="w-16 h-[2px] bg-primary rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="w-full mb-8 md:mb-10 flex justify-center">
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-1 snap-x md:flex-wrap md:justify-center">
            {categories.map((cat) => (
                <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`snap-start shrink-0 flex h-10 items-center justify-center px-6 rounded-full transition-all shadow-sm border ${
                    activeCategory === cat
                    ? 'bg-soft-blush dark:bg-primary/20 border-primary/20 dark:border-primary/40 text-[#191510] dark:text-white font-bold'
                    : 'bg-transparent border-[#e5e0db] dark:border-white/10 text-[#635c55] dark:text-white/70 font-medium hover:bg-white/50 dark:hover:bg-white/5'
                }`}
                >
                <span className="text-sm leading-normal">
                    {cat === 'All' ? 'Tất cả' : cat === 'Bride' ? 'Cô dâu' : cat === 'Party' ? 'Tiệc' : cat === 'Yearbook' ? 'Kỷ yếu' : 'Concept'}
                </span>
                </button>
            ))}
            </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedItems.map((item, index) => (
            <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative flex flex-col items-start justify-end h-[480px] w-full rounded-[12px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform md:hover:-translate-y-1 cursor-pointer"
            >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Content */}
                <div className="relative z-10 p-6 w-full flex flex-col gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-[18px]">{item.badgeIcon}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/90">{item.badge}</span>
                </div>
                <h3 className="text-white text-2xl font-bold font-serif leading-tight">{item.title}</h3>
                <p className="text-white/80 text-sm font-light mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    {item.location}
                </p>
                {/* Click indicator */}
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white/60 text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">zoom_in</span>
                    Nhấn để xem
                  </span>
                </div>
                </div>
            </div>
            ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <span className="material-symbols-outlined text-[28px]">close</span>
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm z-10">
              {currentImageIndex + 1} / {displayedItems.length}
            </div>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <span className="material-symbols-outlined text-[28px]">chevron_left</span>
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Next image"
            >
              <span className="material-symbols-outlined text-[28px]">chevron_right</span>
            </button>

            {/* Main image */}
            <div
              className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <img
                  src={displayedItems[currentImageIndex].imageUrl}
                  alt={displayedItems[currentImageIndex].title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                {/* Image info */}
                <div className="mt-4 text-center">
                  <h3 className="text-white text-xl md:text-2xl font-serif font-bold">
                    {displayedItems[currentImageIndex].title}
                  </h3>
                  <p className="text-white/70 text-sm mt-1 flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    {displayedItems[currentImageIndex].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Keyboard hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs hidden md:block">
              Dùng phím ← → để chuyển ảnh, ESC để đóng
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 text-primary dark:text-primary font-medium text-sm md:text-base hover:underline underline-offset-4 px-6 py-3 rounded-full hover:bg-primary/5 transition-colors"
            >
              <span>{showAll ? 'Thu gọn' : 'Xem thêm hình ảnh'}</span>
              <span className={`material-symbols-outlined text-[18px] transition-transform ${showAll ? 'rotate-180' : ''}`}>
                arrow_downward
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;