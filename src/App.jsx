import Header from "./components/Header";
import Hero from "./components/Hero";
import QuickLinks from "./components/QuickLinks";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <QuickLinks />
      <About />
      <Footer />
    </div>
  );
}
