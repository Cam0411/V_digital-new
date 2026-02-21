import { useRef, useState } from 'react';
import {
  Play,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  Instagram,
  Facebook,
  MonitorPlay,
  TrendingUp,
  Sparkles,
  ArrowDown,
} from 'lucide-react';

const videos = [
  {
    id: 'bds',
    category: 'TVC BẤT ĐỘNG SẢN',
    title: 'Dự án bất động sản Eco retreat',
    videoUrl:
      'https://player.vimeo.com/video/1162937100?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=1',
    aspectRatio: 'aspect-[16/9]',
  },
  {
    id: 'honda',
    category: 'TVC Honda',
    title: 'TVC Honda CRV',
    videoUrl:
      'https://player.vimeo.com/video/1162937143?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=1',
    aspectRatio: 'aspect-[16/9]',
  },
  {
    id: 'baotin',
    category: 'TVC FMCG',
    title: 'TVC Nutri FOOD',
    videoUrl:
      'https://player.vimeo.com/video/1162939003?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=1',
    aspectRatio: 'aspect-[16/9]',
  },
  {
    id: 'vietjet',
    category: 'TVC HÀNG KHÔNG',
    title: 'TVC Vietjet',
    videoUrl:
      'https://player.vimeo.com/video/1162938875?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&controls=1',
    aspectRatio: 'aspect-[16/9]',
  },
];

const serviceGroups = [
    {
        id: 'ai-video-solutions',
        title: 'Nhóm 1: AI Video Marketing Solutions (Dịch vụ Mũi nhọn)',
        services: [
            {
                icon: <MonitorPlay className="w-8 h-8 mb-6 text-[#289a6b]/70" />,
                id: '01',
                title: 'Sản xuất Video AI trọn gói',
                subtitle: 'Tạo video quảng cáo, video giới thiệu sản phẩm chất lượng Cinematic chỉ trong 24-48h.',
            },
            {
                icon: <Sparkles className="w-8 h-8 mb-6 text-[#289a6b]/70" />,
                id: '02',
                title: 'AI Video Fix & Optimization (Điểm chạm độc quyền)',
                subtitle: 'Bạn có video gốc bị lỗi voice, sai màu, hoặc cần thay đổi thông tin sản phẩm? Thay vì quay lại tốn kém, VDC sử dụng AI để can thiệp trực tiếp vào file gốc, chỉnh sửa gương mặt, giọng nói và bối cảnh một cách hoàn hảo. Tiết kiệm 70% chi phí và 90% thời gian so với sản xuất truyền thống.',
            },
        ],
    },
    {
        id: 'performance-growth',
        title: 'Nhóm 2: Performance & Growth (Thực thi & Tăng trưởng)',
        services: [
            {
                icon: <TrendingUp className="w-8 h-8 mb-6 text-[#289a6b]/70" />,
                id: '03',
                title: 'Ads Management (FB, TikTok, Google)',
                subtitle: 'Kết hợp với kho nội dung video AI khổng lồ để chạy A/B Testing liên tục, tìm ra mẫu quảng cáo hiệu quả nhất với chi phí rẻ nhất.',
            },
            {
                icon: <ArrowRight className="w-8 h-8 mb-6 text-[#289a6b]/70" />,
                id: '04',
                title: 'Omnichannel Strategy',
                subtitle: 'Xây dựng phễu bán hàng đa kênh, lấy Video AI làm nội dung dẫn dắt hành vi khách hàng.',
            },
        ],
    },
    {
        id: 'brand-content',
        title: 'Nhóm 3: Brand & Content (Thương hiệu & Nội dung)',
        services: [
            {
                icon: <Facebook className="w-8 h-8 mb-6 text-[#289a6b]/70" />,
                id: '05',
                title: 'Social Media Care',
                subtitle: 'Quản trị kênh Social (TikTok, Reels) bằng nội dung video ngắn sản xuất hàng loạt bằng AI.',
            },
            {
                icon: <MonitorPlay className="w-8 h-8 mb-6 text-[#289a6b]/70" />,
                id: '06',
                title: 'SEO & Creative Content',
                subtitle: 'Tối ưu hóa tìm kiếm không chỉ bằng chữ viết mà bằng cả Video AI chuẩn SEO.',
            },
        ],
    },
];

export default function App() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = current.clientWidth * 0.8;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-[#289a6b] selection:text-white">
      {/* --- FIXED LEFT SIDEBAR (LIÊN HỆ) --- */}
      <aside className="fixed left-0 top-0 h-full w-16 md:w-24 border-r border-[#289a6b]/20 flex flex-col justify-between items-center py-10 z-50 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="flex flex-col gap-6">
          <a href="#" className="hover:text-[#289a6b] transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-[#289a6b] transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        <div className="flex-1 flex items-center justify-center relative w-full">
          <div
            className="absolute whitespace-nowrap uppercase tracking-[0.3em] text-xs font-light"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#289a6b]/30 inline-block"></span>
              Liên hệ
              <span className="w-8 h-[1px] bg-[#289a6b]/30 inline-block"></span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <button className="p-3 bg-[#289a6b]/10 rounded-full hover:bg-[#289a6b] hover:text-white transition-all">
            <Phone className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="ml-16 md:ml-24 w-[calc(100%-4rem)] md:w-[calc(100%-6rem)]">
        {/* TOP HEADER (LOGO) */}
        <header className="fixed top-0 right-0 w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] h-24 flex items-center justify-between px-8 md:px-16 z-40 bg-gradient-to-b from-[#0a0a0a] to-transparent">
          <div className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2">
            VDC <span className="text-xs font-normal tracking-[0.2em] text-gray-400 mt-1 hidden sm:inline">| AI Hub</span>
          </div>
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium">
            <a href="#ai-video-solutions" className="hover:text-[#289a6b] transition-colors">AI Video</a>
            <a href="#performance-growth" className="hover:text-[#289a6b] transition-colors">Tăng trưởng</a>
            <a href="#brand-content" className="hover:text-[#289a6b] transition-colors">Thương hiệu</a>
          </nav>
          <button className="md:hidden">
            <div className="w-6 h-[2px] bg-white mb-1.5"></div>
            <div className="w-6 h-[2px] bg-white mb-1.5"></div>
            <div className="w-4 h-[2px] bg-white"></div>
          </button>
        </header>

        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-24 pb-12 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#289a6b]/10 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-5xl">
            <h2 className="text-sm md:text-base uppercase tracking-[0.3em] text-[#289a6b] mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#289a6b]"></span>
              Giải pháp Marketing ứng dụng AI
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-10">
              Tối ưu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#289a6b] via-[#5ee0aa] to-[#289a6b]/20">
                Hiệu suất
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mb-12 leading-relaxed">
             VDC cung cấp các giải pháp video ứng dụng AI, giúp doanh nghiệp tiết kiệm 70% chi phí và 90% thời gian so với phương pháp truyền thống.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#portfolio"
                className="group flex items-center justify-between px-8 py-5 bg-[#289a6b] text-white text-sm uppercase tracking-widest font-bold hover:bg-[#34c78c] transition-all w-fit"
              >
                Xem sản phẩm Video AI
                <ArrowRight className="w-5 h-5 ml-6 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#services"
                className="group flex items-center justify-between px-8 py-5 border border-[#289a6b]/30 text-white text-sm uppercase tracking-widest font-bold hover:bg-[#289a6b]/20 transition-all w-fit"
              >
                Khám phá Dịch vụ
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-8 md:left-16 animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/30" />
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 px-8 md:px-16 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                {serviceGroups.map((group, groupIndex) => (
                    <div key={groupIndex} id={group.id} className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-12 text-[#289a6b]">{group.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#289a6b]/20">
                            {group.services.map((service) => (
                                <div key={service.id} className="bg-[#050505] p-10 md:p-16 group relative overflow-hidden transition-all duration-500 hover:bg-[#111]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#289a6b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-12">
                                            {service.icon}
                                            <span className="text-4xl font-black text-white/10">{service.id}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">{service.title}</h3>
                                        <p className="text-gray-400 font-light text-sm leading-relaxed">{service.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* VIDEO PRODUCT SECTION */}
        <section id="portfolio" className="py-24 border-t border-[#289a6b]/20 relative">
          <div className="px-8 md:px-16 mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
                Sản phẩm Video
              </h2>
              <p className="text-gray-400 text-sm tracking-widest uppercase">
                Sản xuất bởi VDC AI Hub
              </p>
            </div>
            <div className="hidden md:flex gap-4">
              <button
                onClick={() => scroll('left')}
                className="p-4 border border-[#289a6b]/30 hover:bg-[#289a6b] hover:text-white transition-all rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-4 border border-[#289a6b]/30 hover:bg-[#289a6b] hover:text-white transition-all rounded-full"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-8 md:px-16 pb-12 gap-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video) => (
              <div
                key={video.id}
                className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[45vw] snap-center flex flex-col group"
              >
                <div
                  className={`w-full ${video.aspectRatio} relative bg-[#111] border border-[#289a6b]/20 overflow-hidden mb-6 group-hover:border-[#289a6b]/40 transition-colors`}
                >
                  <iframe
                    src={`${video.videoUrl}${playingVideo === video.id ? '&autoplay=1' : ''}`}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title={video.title}
                  ></iframe>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">
                      {video.category}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {video.title}
                    </h3>
                  </div>
                  <button onClick={() => handlePlayVideo(video.id)} className="w-12 h-12 rounded-full border border-[#289a6b]/30 flex items-center justify-center group-hover:bg-[#289a6b] group-hover:text-white transition-all">
                    <Play className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ADDITIONAL SERVICES */}
        <section id="additional-services" className="py-24 px-8 md:px-16 bg-[#050505] border-t border-[#289a6b]/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#111] p-10 md:p-16 border border-[#289a6b]/20">
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">Digital Marketing</h3>
                    <p className="text-[#289a6b] text-sm uppercase tracking-widest mb-6">AI-Driven Digital Marketing</p>
                    <p className="text-gray-400 font-light">Chiến lược tăng trưởng dựa trên dữ liệu và công nghệ AI.</p>
                </div>
                <div className="bg-[#111] p-10 md:p-16 border border-[#289a6b]/20">
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">Content Creation</h3>
                    <p className="text-[#289a6b] text-sm uppercase tracking-widest mb-6">Massive Video Content</p>
                    <p className="text-gray-400 font-light">Phủ sóng thương hiệu với hàng trăm Video AI mỗi tháng.</p>
                </div>
            </div>
        </section>


        {/* FOOTER / CTA */}
        <footer className="py-32 px-8 md:px-16 bg-[#289a6b]/10 text-white text-center flex flex-col items-center justify-center border-t border-[#289a6b]/20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 max-w-4xl">
            Bắt đầu tối ưu hóa với VDC AI Hub
          </h2>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl text-gray-400">
            Video của bạn chưa đạt hiệu quả mong muốn? Hãy để chúng tôi cải thiện.
          </p>
          <button className="group flex items-center justify-between px-10 py-6 bg-[#289a6b] text-white text-base md:text-lg uppercase tracking-widest font-bold hover:bg-[#34c78c] transition-all">
            Gửi video để nhận tư vấn
            <ArrowRight className="w-6 h-6 ml-8 group-hover:translate-x-2 transition-transform" />
          </button>

          <div className="mt-24 pt-8 border-t border-[#289a6b]/20 w-full flex flex-col md:flex-row justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-400">
            <p>© 2026 VDC AI HUB. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Chính sách
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Điều khoản
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
