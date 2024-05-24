import { useEffect } from "react";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Lenis from '@studio-freight/lenis'
import ProtoTypeSection from "./pages/Prototype_section";
function App() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-black bg-radial border border-black h-max w-full">
      <img alt="bg-noise" className="pointer-events-none fixed inset-0 z-10 h-screen w-full object-cover" srcset="https://xield.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-noise.5db3ded2.png&amp;w=1920&amp;q=75 1x, https://xield.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-noise.5db3ded2.png&amp;w=3840&amp;q=75 2x" src="https://xield.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-noise.5db3ded2.png&amp;w=3840&amp;q=75"></img>
      <img alt="bg-grid" className="pointer-events-none fixed inset-0 z-20 h-screen w-full object-cover" src="https://xield.io/_next/static/media/bg-grid-line.12099731.svg" />
      <Navbar />
      <Home />
      <ProtoTypeSection />
    </div>
  )
}
export default App
