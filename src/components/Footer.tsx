// Footer component
export function Footer() {
  return (
    <footer className="w-full py-4 bg-black/80 border-t border-white/10 text-white text-sm">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <span className="text-lg font-bold tracking-tight">
            file-upload-ui-lib
          </span>
          <span className="text-xs bg-fuchsia-900/60 text-fuchsia-100 rounded-full px-2 py-1 ml-2">
            v1.0.0
          </span>
        </div>
        <nav className="flex gap-4">
          <a
            href="https://github.com/ab7022/UI-library-demo"
            target="_blank"
            rel="noopener"
            className="text-white/60 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://github.com/ab7022/UI-library-demo"
            className="text-white/60 hover:text-white transition-colors"
          >
            Documentation
          </a>
          <a
            href="https://github.com/ab7022/UI-library-demo"
            className="text-white/60 hover:text-white transition-colors"
          >
            Examples
          </a>
        </nav>
      </div>
      <div className="text-center text-white/40 text-xs mt-2">
        &copy; {new Date().getFullYear()} file-upload-ui-lib
      </div>
    </footer>
  );
}
