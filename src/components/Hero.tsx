import { COLORS } from "../utils/constants";

// Hero section component
export function Hero() {
  return (
    <section className="py-10 sm:py-16 md:py-28 relative overflow-hidden">
      {/* Prismatic Aurora Burst - Multi-layered Gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
            radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
            radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
            radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
            #000000
          `,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-0">
        {/* Left: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-widest text-fuchsia-200 uppercase border border-fuchsia-400/20 backdrop-blur-sm">
            Modern React File Upload
          </span>
          <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Beautiful File Upload{" "}
            <span className="text-fuchsia-400">Components</span>
          </h1>
          <p className="text-base xs:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-xl">
            A modern, accessible, and highly customizable file upload component
            library for React. <br className="hidden md:block" />
            Built with TailwindCSS and designed for seamless integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#variants"
              className={`w-full sm:w-auto text-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 ${COLORS.primary} shadow-md hover:shadow-lg`}
            >
              View Components
            </a>
            <a
              href="https://www.npmjs.com/package/@abdul__bayees/ui-library"
              target="_blank"
              rel="noopener"
              className="w-full sm:w-auto text-center px-8 py-3 rounded-lg font-semibold bg-neutral-900 text-neutral-100 border border-neutral-700 shadow hover:shadow-lg transition-all duration-300"
            >
              Install via npm
            </a>
          </div>
        </div>
        {/* Right: Visual Accent */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 sm:mt-12 md:mt-0">
          <div className="relative w-[220px] h-[220px] xs:w-[280px] xs:h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] flex items-center justify-center">
            {/* Glassy Card with Icon and Aurora Glow */}
            <div
              className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
              style={{ boxShadow: "0 8px 40px 0 rgba(255,255,255,0.08)" }}
            />
            <div className="relative flex flex-col items-center justify-center h-full z-10">
              <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 rounded-2xl bg-fuchsia-700/80 flex items-center justify-center mb-4 sm:mb-6 shadow-lg border-4 border-fuchsia-400/30">
                <span className="text-3xl xs:text-4xl text-white">📁</span>
              </div>
              <span className="text-base xs:text-lg font-semibold text-white/80 mb-1 sm:mb-2">
                @abdul__bayees/ui-library
              </span>
              <span className="text-xs bg-fuchsia-900/60 text-fuchsia-100 rounded-full px-2 xs:px-3 py-1">
                v1.0.0
              </span>
            </div>
            {/* Aurora Glow Overlay */}
            <div
              className="absolute -inset-2 xs:-inset-4 rounded-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(255,20,147,0.12), transparent 70%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
