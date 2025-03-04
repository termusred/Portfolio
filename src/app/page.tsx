import Navbar from "./components/navbar.tsx";
import HeroSection from "./containers/hero-section.tsx";

export default function Home() {
  return (
    <div className="con w-[100%] h-[100%]">
      <Navbar/>
      <HeroSection/>
    </div>
  );
}
