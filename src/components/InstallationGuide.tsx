import React from "react";

// Installation guide component
export function InstallationGuide() {
  const installationSteps = [
    {
      title: "Install the package",
      command: "npm install @abdul__bayees/ui-library",
    },
    {
      title: "Import the component",
      code: "import { FileUpload } from '@abdul__bayees/ui-library';",
    },
    {
      title: "Import the component",
      code: "import { FileUploadConfig } from '@abdul__bayees/ui-library';",
    },
    {
      title: "Use with config",
      code: "<FileUpload config={{ variant: 'button', acceptedTypes: ['image/png'] }} />",
    },
  ];

  // EditorBro-style copy button and code block
  const [copiedStep, setCopiedStep] = React.useState<number | null>(null);
  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStep(index);
      setTimeout(() => setCopiedStep(null), 1200);
    } catch (err) {}
  };

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
        }}
      />
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Started in Seconds
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Follow these simple steps to integrate @abdul__bayees/ui-library
              into your project
            </p>
          </div>
          <div className="bg-black/60 rounded-2xl shadow-xl p-6 border border-white/10">
            <ol className="relative border-l-2 border-fuchsia-700/40 ml-4">
              {installationSteps.map((step, index) => {
                const codeText = step.command || step.code || "";
                // Split code into lines for line numbers
                const codeLines = codeText.split("\n");
                return (
                  <li key={index} className="mb-10 ml-6 last:mb-0 relative">
                    {/* Step dot */}
                    <span className="absolute -left-5 flex items-center justify-center w-8 h-8 rounded-full bg-fuchsia-700/80 border-4 border-fuchsia-400/30 text-white font-bold text-lg shadow-md">
                      {index + 1}
                    </span>
                    <div className="bg-black/80 rounded-xl shadow p-5 border border-white/10">
                      <span className="font-semibold text-lg text-white block mb-2">
                        {step.title}
                      </span>
                      <div className="relative group mt-2">
                        <div className="editorbro-mockup bg-[#181A20] border border-[#23262F] rounded-lg overflow-hidden font-mono text-sm shadow-lg relative">
                          {/* EditorBro top bar */}
                          <div className="flex items-center justify-between px-3 py-2 bg-[#23262F] border-b border-[#23262F]">
                            <div className="flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-red-500 inline-block mr-1" />
                              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block mr-1" />
                              <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                            </div>
                            <span className="text-xs text-[#A3A7B7] font-semibold select-none">
                              {step.command ? "Terminal" : "App.tsx"}
                            </span>
                            <button
                              type="button"
                              aria-label="Copy to clipboard"
                              className="ml-2 px-2 py-1 rounded bg-[#23262F] text-[#A3A7B7] hover:text-white hover:bg-fuchsia-700/80 border border-[#23262F] hover:border-fuchsia-400/60 text-xs font-semibold flex items-center gap-1 transition-all focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                              onClick={() => handleCopy(codeText, index)}
                            >
                              {copiedStep === index ? (
                                <>
                                  <svg
                                    className="w-4 h-4 mr-1 inline-block"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  Copied
                                </>
                              ) : (
                                <>
                                  <svg
                                    className="w-4 h-4 mr-1 inline-block"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                  >
                                    <rect
                                      x="9"
                                      y="9"
                                      width="13"
                                      height="13"
                                      rx="2"
                                    />
                                    <rect
                                      x="3"
                                      y="3"
                                      width="13"
                                      height="13"
                                      rx="2"
                                    />
                                  </svg>
                                  Copy
                                </>
                              )}
                            </button>
                          </div>
                          {/* Code area with line numbers */}
                          <div className="flex w-full">
                            <div className="py-3 px-2 bg-[#181A20] text-[#4B5162] text-xs select-none text-right min-w-[2.5em] border-r border-[#23262F]">
                              {codeLines.map((_, i) => (
                                <div key={i} className="leading-6">
                                  {i + 1}
                                </div>
                              ))}
                            </div>
                            <pre className="py-3 px-4 bg-transparent text-[#F8F8F2] whitespace-pre-wrap break-words overflow-x-auto w-full">
                              {codeText}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
