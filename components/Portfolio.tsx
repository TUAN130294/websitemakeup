import React, { useState } from 'react';
import { PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

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
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category === activeCategory);

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
            {filteredItems.map((item) => (
            <div
                key={item.id}
                className="group relative flex flex-col items-start justify-end h-[480px] w-full rounded-[12px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform md:hover:-translate-y-1"
            >
                <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.imageUrl}')` }}
                ></div>
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
                </div>
            </div>
            ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-2 text-primary dark:text-primary font-medium text-sm md:text-base hover:underline underline-offset-4 px-6 py-3 rounded-full hover:bg-primary/5 transition-colors">
            <span>Xem thêm hình ảnh</span>
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;