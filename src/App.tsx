import "./index.css";
import {
  Header,
  Hero,
  Features,
  AllVariantsDemo,
  InstallationGuide,
  LiveConfigDemo,
  Footer,
} from "./components";

// Main App component
export default function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 font-sans text-neutral-100">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <AllVariantsDemo />
        <InstallationGuide />
        <LiveConfigDemo />
      </main>
      <Footer />
    </div>
  );
}

