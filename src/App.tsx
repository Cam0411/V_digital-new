import { useRef } from 'react';
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
  Smartphone,
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

const services = [
  {
    icon: <MonitorPlay className="w-8 h-8 mb-6 text-white/70" />,
    id: '01',
    title: 'AI Video Solutions',
    subtitle: 'Sản xuất nhanh - Sửa lỗi dễ dàng - Chi phí tối ưu',
    features: [
      {
        name: 'Sản xuất Video AI trọn gói',
        desc: 'Chất lượng Cinematic chỉ trong 24-48h.',
      },
      {
        name: 'AI Video Fix & Optimization',
        desc: 'Sửa voice, sai màu, thay thông tin trực tiếp trên file gốc không cần quay lại.',
      },
      {
        name: 'AI Video Recovery',
        desc: 'Hồi sinh video cũ, lỗi thành siêu phẩm.',
      },
    ],
    highlight: true,
  },
  {
    icon: <TrendingUp className="w-8 h-8 mb-6 text-white/70" />,
    id: '02',
    title: 'Growth Marketing',
    subtitle: 'Chiến lược tăng trưởng dựa trên dữ liệu & AI',
    features: [
      {
        name: 'AI-Powered Performance',
        desc: 'Sản xuất hàng loạt video ngắn (Massive Production) để chạy A/B Testing liên tục.',
      },
      {
        name: 'Omnichannel Strategy',
        desc: 'Xây dựng phễu bán hàng đa kênh, tối ưu ROI thực tế.',
      },
    ],
    highlight: false,
  },
  {
    icon: <Sparkles className="w-8 h-8 mb-6 text-white/70" />,
    id: '03',
    title: 'Branding Agency',
    subtitle: 'Xây dựng vị thế dẫn đầu cho cá nhân & tổ chức',
    features: [
      {
        name: 'AI Spokesperson & Avatar',
        desc: 'Đại diện số hiện diện 24/7 không cần ở studio.',
      },
      {
        name: 'Cinematic Storytelling',
        desc: 'Kể câu chuyện thương hiệu bằng video AI điện ảnh, sang trọng.',
      },
    ],
    highlight: false,
  },
  {
    icon: <Smartphone className="w-8 h-8 mb-6 text-white/70" />,
    id: '04',
    title: 'Social Management',
    subtitle: 'Phủ sóng với hàng trăm Video AI mỗi tháng',
    features: [
      {
        name: 'Comprehensive TikTok Growth',
        desc: 'Duy trì tần suất 1-2 video/ngày chất lượng cao nhờ AI.',
      },
      {
        name: 'SEO & Creative Content',
        desc: 'Tối ưu hóa tìm kiếm bằng Video chuẩn SEO đa nền tảng.',
      },
    ],
    highlight: false,
  },
];

export default function App() {
  const carouselRef = useRef<HTMLDivElement>(null);

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
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* --- FIXED LEFT SIDEBAR (LIÊN HỆ) --- */}
      <aside className="fixed left-0 top-0 h-full w-16 md:w-24 border-r border-white/10 flex flex-col justify-between items-center py-10 z-50 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="flex flex-col gap-6">
          <a href="#" className="hover:text-gray-400 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        <div className="flex-1 flex items-center justify-center relative w-full">
          <div
            className="absolute whitespace-nowrap uppercase tracking-[0.3em] text-xs font-light"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-white/30 inline-block"></span>
              Booking & Contact
              <span className="w-8 h-[1px] bg-white/30 inline-block"></span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <button className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-black transition-all">
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
            <a href="#services" className="hover:text-gray-400 transition-colors">
              Services
            </a>
            <a href="#portfolio" className="hover:text-gray-400 transition-colors">
              Portfolio
            </a>
            <a href="#workflow" className="hover:text-gray-400 transition-colors">
              Workflow
            </a>
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
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-5xl">
            <h2 className="text-sm md:text-base uppercase tracking-[0.3em] text-gray-400 mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-gray-400"></span>
              Digital Marketing Tăng cường bởi AI
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-10">
              Kỷ Nguyên <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white/20">
                Sáng Tạo Mới.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mb-12 leading-relaxed">
              Tạo sự khác biệt hoàn toàn so với Agency truyền thống. Tiết kiệm{' '}
              <span className="text-white font-medium">70% chi phí</span> và{' '}
              <span className="text-white font-medium">90% thời gian</span> với
              công nghệ AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#portfolio"
                className="group flex items-center justify-between px-8 py-5 bg-white text-black text-sm uppercase tracking-widest font-bold hover:bg-gray-200 transition-all w-fit"
              >
                Nhận mẫu Video AI
                <ArrowRight className="w-5 h-5 ml-6 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#services"
                className="group flex items-center justify-between px-8 py-5 border border-white/20 text-white text-sm uppercase tracking-widest font-bold hover:bg-white/10 transition-all w-fit"
              >
                Khám phá Dịch vụ
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-8 md:left-16 animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/30" />
          </div>
        </section>

        {/* AI VIDEO CAROUSEL SECTION */}
        <section id="portfolio" className="py-24 border-t border-white/10 relative">
          <div className="px-8 md:px-16 mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
                Showcase
              </h2>
              <p className="text-gray-400 text-sm tracking-widest uppercase">
                Sản xuất bởi VDC AI Hub
              </p>
            </div>
            <div className="hidden md:flex gap-4">
              <button
                onClick={() => scroll('left')}
                className="p-4 border border-white/20 hover:bg-white hover:text-black transition-all rounded-full"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-4 border border-white/20 hover:bg-white hover:text-black transition-all rounded-full"
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
                  className={`w-full ${video.aspectRatio} relative bg-[#111] border border-white/10 overflow-hidden mb-6 group-hover:border-white/30 transition-colors`}
                >
                  <iframe
                    src={video.videoUrl}
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
                  <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <Play className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES ARCHITECTURE */}
        <section id="services" className="py-24 px-8 md:px-16 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
                Service <br /> Architecture
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-2xl">
                Hệ sinh thái dịch vụ nhóm theo tư duy hoàn toàn mới, lấy AI
                Video làm lõi để thúc đẩy tăng trưởng và chuyển đổi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`bg-[#050505] p-10 md:p-16 group relative overflow-hidden transition-all duration-500 hover:bg-[#111] ${
                    service.highlight ? 'border border-white/20' : ''
                  }`}
                >
                  {/* Hover effect gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12">
                      {service.icon}
                      <span className="text-4xl font-black text-white/10">
                        {service.id}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold uppercase tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm uppercase tracking-widest text-gray-400 mb-10 pb-10 border-b border-white/10">
                      {service.subtitle}
                    </p>

                    <ul className="space-y-6">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex flex-col gap-1">
                          <h4 className="font-bold text-lg text-white flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            {feature.name}
                          </h4>
                          <p className="text-gray-400 font-light text-sm pl-3.5 leading-relaxed">
                            {feature.desc}
                          </p>
                        </li>
                      ))}
                    </ul>

                    {service.highlight && (
                      <div className="mt-12">
                        <a
                          href="#"
                          className="inline-flex items-center gap-4 text-sm uppercase tracking-widest font-bold border-b border-white pb-2 hover:text-gray-400 hover:border-gray-400 transition-colors"
                        >
                          Gửi video gốc tối ưu AI{' '}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKFLOW & WHY US */}
        <section
          id="workflow"
          className="py-24 px-8 md:px-16 border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Why Choose VDC */}
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-12">
                Tại sao chọn VDC?
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <span className="font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide mb-2">
                      Tốc độ siêu việt
                    </h3>
                    <p className="text-gray-400 font-light">
                      Sản xuất Video trong vài giờ, không phải vài tuần. Tiết
                      kiệm 90% thời gian chờ đợi.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <span className="font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide mb-2">
                      Linh hoạt tuyệt đối
                    </h3>
                    <p className="text-gray-400 font-light">
                      Sửa lỗi nội dung, thay đổi ngôn ngữ (Dubbing AI) trên video
                      gốc mà không cần setup quay lại tốn kém.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <span className="font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide mb-2">
                      Tối ưu chi phí
                    </h3>
                    <p className="text-gray-400 font-light">
                      Chi phí chỉ bằng 1/3 so với các Production House truyền
                      thống nhờ quy trình AI hóa 80%.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The VDC Workflow */}
            <div className="bg-[#111] p-10 md:p-16 border border-white/10">
              <h2 className="text-3xl font-black uppercase tracking-tight mb-12">
                The VDC Workflow
              </h2>

              <div className="relative border-l border-white/20 ml-6 space-y-12">
                <div className="relative pl-10">
                  <div className="absolute w-4 h-4 bg-white rounded-full -left-[8.5px] top-1"></div>
                  <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                    Bước 01
                  </h3>
                  <h4 className="text-2xl font-bold uppercase mb-2">Input</h4>
                  <p className="text-gray-400 font-light">
                    Khách hàng gửi ý tưởng, kịch bản hoặc video cũ/lỗi cần tối
                    ưu.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute w-4 h-4 bg-black border-2 border-white rounded-full -left-[8.5px] top-1"></div>
                  <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                    Bước 02
                  </h3>
                  <h4 className="text-2xl font-bold uppercase mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                    AI Processing
                  </h4>
                  <p className="text-gray-400 font-light">
                    Hệ thống AI xử lý: sửa lỗi, tạo voice-over chuẩn, làm đẹp
                    hình ảnh, chèn sub, tối ưu kịch bản chuyển đổi.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute w-4 h-4 bg-white rounded-full -left-[8.5px] top-1"></div>
                  <h3 className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                    Bước 03
                  </h3>
                  <h4 className="text-2xl font-bold uppercase mb-2">Output</h4>
                  <p className="text-gray-400 font-light">
                    Nhận Video chất lượng cao, chuẩn form SEO/TikTok, chi phí
                    giảm 60%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER / CTA */}
        <footer className="py-32 px-8 md:px-16 bg-white text-black text-center flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 max-w-4xl">
            Sẵn sàng chuyển đổi cùng VDC AI Hub?
          </h2>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl text-gray-600">
            Bạn lỡ quay video nhưng không ưng ý? Đừng tốn tiền quay lại.
          </p>
          <button className="group flex items-center justify-between px-10 py-6 bg-black text-white text-base md:text-lg uppercase tracking-widest font-bold hover:bg-gray-900 transition-all">
            Gửi video gốc để tối ưu AI
            <ArrowRight className="w-6 h-6 ml-8 group-hover:translate-x-2 transition-transform" />
          </button>

          <div className="mt-24 pt-8 border-t border-black/10 w-full flex flex-col md:flex-row justify-between items-center text-sm font-bold uppercase tracking-widest text-gray-500">
            <p>© 2026 VDC AI HUB. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-black transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
