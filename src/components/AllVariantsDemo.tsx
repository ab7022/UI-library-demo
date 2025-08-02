import React from "react";
import { FileUpload } from "@abdul__bayees/ui-library";
import { defaultConfig } from "../utils/config";

// Component card for showcasing variants
function ComponentCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  // Center Button Variant button, and use dark bg for all cards
  const isButtonVariant = title === "Button Variant";
  return (
    <div className="bg-black/70 rounded-xl shadow-md p-6 flex flex-col items-center mb-8 border border-fuchsia-400/30 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-full bg-fuchsia-700/30 flex items-center justify-center mb-4">
        <span className="text-fuchsia-100 text-xl">📁</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm text-fuchsia-100 mb-4 text-center">{description}</p>
      <div
        className={isButtonVariant ? "w-full flex justify-center" : "w-full"}
      >
        {children}
      </div>
    </div>
  );
}

// All variants showcase
export function AllVariantsDemo() {
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
      <section id="variants" className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Component Variants
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Explore the different file upload components with various
              configurations and styles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ComponentCard
              title="Button Variant"
              description="Classic button-based file upload. Accessible and themeable."
            >
              <FileUpload
                config={{
                  ...defaultConfig,
                  variant: "button",
                  theme: {
                    ...defaultConfig.theme,
                    bgColor: "bg-black/80",
                    textColor: "text-white",
                    color: "border-fuchsia-400",
                    focusRing: "focus:ring-2 focus:ring-fuchsia-400",
                  },
                }}
              />
            </ComponentCard>
            <ComponentCard
              title="Dropzone Variant"
              description="Drag-and-drop or click to upload. Keyboard accessible."
            >
              <FileUpload
                config={{
                  ...defaultConfig,
                  variant: "dropzone",
                  theme: {
                    ...defaultConfig.theme,
                    bgColor: "bg-black/80",
                    textColor: "text-white",
                    color: "border-cyan-400",
                    focusRing: "focus:ring-2 focus:ring-cyan-400",
                  },
                  labels: {
                    ...defaultConfig.labels,
                    dropzone: "Drop an image or click to select",
                  },
                }}
              />
            </ComponentCard>
            <ComponentCard
              title="Preview Layout Variant"
              description="Shows a large preview of the selected image or file."
            >
              <FileUpload
                config={{
                  ...defaultConfig,
                  variant: "image-preview",
                  theme: {
                    ...defaultConfig.theme,
                    bgColor: "bg-black",
                    textColor: "tex t-white",
                    color: "border-purple-400",
                    focusRing: "focus:ring-2 focus:ring-purple-400",
                  },
                  labels: {
                    ...defaultConfig.labels,
                    uploadButton: "Select file for preview",
                  },
                }}
              />
            </ComponentCard>
            <ComponentCard
              title="Image-Only Variant"
              description="Accepts only images. Shows a preview."
            >
              <FileUpload
                config={{
                  ...defaultConfig,
                  variant: "image-only",
                  theme: {
                    ...defaultConfig.theme,
                    bgColor: "bg-black/80",
                    textColor: "text-white",
                    color: "border-cyan-400",
                    focusRing: "focus:ring-2 focus:ring-cyan-400",
                  },
                  labels: {
                    ...defaultConfig.labels,
                    uploadButton: "Select image only",
                  },
                }}
              />
            </ComponentCard>
            <ComponentCard
              title="Multi-file Variant"
              description="Select and preview multiple files at once."
            >
              <FileUpload
                config={{
                  ...defaultConfig,
                  variant: "multi-file",
                  multiple: true,
                  theme: {
                    ...defaultConfig.theme,
                    bgColor: "bg-black/80",
                    textColor: "text-white",
                    color: "border-yellow-400",
                    focusRing: "focus:ring-2 focus:ring-yellow-400",
                  },
                  labels: {
                    ...defaultConfig.labels,
                    uploadButton: "Select multiple files",
                  },
                }}
              />
            </ComponentCard>
          </div>
        </div>
      </section>
    </div>
  );
}
