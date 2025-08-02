import React from "react";
import { FileUpload } from "@abdul__bayees/ui-library";
import type { FileUploadConfig } from "@abdul__bayees/ui-library";
import { defaultConfig } from "../utils/config";

// Live config editor component
export function LiveConfigDemo() {
  const [config, setConfig] = React.useState<FileUploadConfig>(defaultConfig);
  const [json, setJson] = React.useState(
    JSON.stringify(defaultConfig, null, 2)
  );
  const [error, setError] = React.useState<string | null>(null);

  // Available variants for dropdown
  const variantOptions = [
    { value: "button", label: "Button" },
    { value: "dropzone", label: "Dropzone" },
    { value: "image-preview", label: "Preview Layout" },
    { value: "image-only", label: "Image Only" },
    { value: "multi-file", label: "Multi-file" },
  ];

  // When dropdown changes, update config and JSON
  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVariant = e.target.value as FileUploadConfig["variant"];
    const updatedConfig = { ...config, variant: newVariant };
    setConfig(updatedConfig);
    setJson(JSON.stringify(updatedConfig, null, 2));
    setError(null);
  };

  // When JSON changes, update config and keep dropdown in sync
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJson(e.target.value);
    try {
      const parsed = JSON.parse(e.target.value);
      setConfig(parsed);
      setError(null);
    } catch (err) {
      setError("Invalid JSON format");
    }
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
      <section id="live-config" className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Live Config Editor
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Customize the FileUpload component in real-time with JSON
              configuration
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-black/60 rounded-xl shadow-md p-6 border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Configuration</h3>
                <div className="flex items-center">
                  <span className="text-xs font-medium bg-white/10 text-white px-2 py-1 rounded-full">
                    JSON
                  </span>
                </div>
              </div>
              <div className="mb-4 flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                <label
                  htmlFor="variant-select"
                  className="text-sm text-white/80 font-medium mr-2"
                >
                  Component Variant:
                </label>
                <select
                  id="variant-select"
                  className="bg-black/80 border border-white/20 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                  value={config.variant}
                  onChange={handleVariantChange}
                >
                  {variantOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-sm text-white/80 mb-4">
                Edit the JSON below to customize the FileUpload component.
              </p>
              <div className="relative">
                <textarea
                  className={`w-full h-80 p-4 border rounded-lg font-mono text-sm resize-none focus:ring-2 focus:ring-white/30 focus:border-white/30 bg-black/80 text-white ${
                    error ? "border-red-500" : "border-white/20"
                  }`}
                  value={json}
                  onChange={handleChange}
                  aria-label="JSON config editor"
                  spellCheck={false}
                />
                {error && (
                  <div className="absolute top-2 right-2 bg-red-900 text-red-200 text-xs px-2 py-1 rounded">
                    {error}
                  </div>
                )}
              </div>
              <div className="mt-4 text-xs text-white/60">
                <p className="mb-1">
                  <b>Options:</b> variant, acceptedTypes, maxSizeMB, multiple,
                  labels, theme, etc.
                </p>
                <p>See code comments for all options and examples.</p>
              </div>
            </div>
            <div className="bg-black/60 rounded-xl shadow-md p-6 border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Preview</h3>
                <div className="flex items-center">
                  <span className="text-xs font-medium bg-green-900 text-green-200 px-2 py-1 rounded-full">
                    Live
                  </span>
                </div>
              </div>
              <div className="min-h-[200px] flex items-center justify-center">
                <FileUpload config={config} key={json} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
