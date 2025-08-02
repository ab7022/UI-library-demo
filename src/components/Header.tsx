// Header component
export function Header() {
  return (
    <header className="w-full py-4 bg-white/10 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="bg-fuchsia-700/80 p-2 rounded-lg">
            <span className="text-xl text-white">📁</span>
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white">
              @abdul__bayees/ui-library
            </span>
            <span className="hidden md:inline text-xs bg-fuchsia-900/60 text-fuchsia-100 rounded-full px-2 py-1 ml-3">
              v1.0.0
            </span>
          </div>
        </div>
        <nav className="mt-4 md:mt-0 flex gap-1 sm:gap-4">
          <a
            href="#features"
            className="px-3 py-2 rounded-md text-sm font-medium text-fuchsia-100 hover:text-white hover:bg-fuchsia-700/30 transition-colors"
          >
            Features
          </a>
          <a
            href="#variants"
            className="px-3 py-2 rounded-md text-sm font-medium text-fuchsia-100 hover:text-white hover:bg-fuchsia-700/30 transition-colors"
          >
            Components
          </a>
          <a
            href="#live-config"
            className="px-3 py-2 rounded-md text-sm font-medium text-fuchsia-100 hover:text-white hover:bg-fuchsia-700/30 transition-colors"
          >
            Config Editor
          </a>
          <a
            href="https://github.com/ab7022/UI-library-demo/"
            target="_blank"
            rel="noopener"
            className="px-3 py-2 rounded-md text-sm font-medium text-fuchsia-100 hover:text-white hover:bg-fuchsia-700/30 transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
