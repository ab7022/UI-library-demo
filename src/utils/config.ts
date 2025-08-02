import type { FileUploadConfig } from "@abdul__bayees/ui-library";

// Default configuration for file upload components (aurora theme)
export const defaultConfig: FileUploadConfig = {
  variant: "button",
  acceptedTypes: ["image/png", "image/jpeg"],
  maxSizeMB: 2,
  multiple: false,
  labels: {
    uploadButton: "Upload File",
    fileTypeInvalid: "Only PNG/JPEG allowed.",
    fileSizeExceed: "File too large!",
    preview: "Selected file:",
    placeholder: "No file selected",
    dropzone: "Drag & drop files here or click to browse",
    removeFile: "Remove file",
  },
  theme: {
    borderRadius: "rounded-lg",
    size: "md",
    iconPlacement: "left",
    color: "border-fuchsia-400",
    bgColor: "bg-white/10 backdrop-blur-md",
    textColor: "text-white",
    focusRing: "focus:ring-2 focus:ring-fuchsia-400",
  },
};
