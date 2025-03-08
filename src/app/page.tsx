import Navbar from "./components/navbar.tsx";
import HeroSection from "./containers/hero-section.tsx";
import Whyme from "./containers/whyme-section.tsx";

export default function Home() {
  return (
    <div className="max-w-[100%] flex flex-col items-center">
      <Navbar/>
      <HeroSection/>
      <Whyme/>
    </div>
  );
}
