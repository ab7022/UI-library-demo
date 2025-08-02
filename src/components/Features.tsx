// Features section component
export function Features() {
  const features = [
    {
      title: "Config-Driven",
      description:
        "Fully customizable through JSON configuration without touching code",
      icon: "⚙️",
    },
    {
      title: "Accessible",
      description:
        "Built with accessibility in mind, keyboard navigable and screen reader friendly",
      icon: "♿",
    },
    {
      title: "Multiple Variants",
      description:
        "Choose from button, dropzone, image preview, and multi-file variants",
      icon: "🔄",
    },
    {
      title: "Themeable",
      description:
        "Easily customize colors, sizes, borders, and spacing with Tailwind classes",
      icon: "🎨",
    },
  ];

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
      <section id="features" className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Everything you need for modern file upload experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black/60 rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-white/10"
              >
                <div className="text-3xl mb-4 text-white/80">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
