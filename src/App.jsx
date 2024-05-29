import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Lenis from '@studio-freight/lenis';
import ProtoTypeSection from "./pages/Prototype_section";
import { UseCase } from "./pages/UseCase";
import { Protocol } from "./pages/Protocol";
import { Footer } from "./components/Footer";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <div
        className="bg-black bg-radial relative border border-black h-max w-full"
        onMouseMove={handleMouseMove}
      >
        {/* cursor */}
        <div
          className="mouse-bg pointer-events-none absolute z-[9999] hidden h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-red-50/10 transition-transform duration-300 ease-in-out lg:grid"
          style={{ top: cursorPosition.y, left: cursorPosition.x }}

        >
          <div className="mouse-bg absolute inset-0 h-full w-full rounded-full opacity-10"></div>
          <img
            alt=""
            className="relative z-20 h-[120px] w-[120px]"
            src="https://xield.io/_next/static/media/cursor.51bcc6a8.svg"
          />
        </div>
        <img
          alt="bg-noise"
          className="pointer-events-none fixed inset-0 z-10 h-screen w-full object-cover"
          srcSet="https://xield.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-noise.5db3ded2.png&amp;w=1920&amp;q=75 1x, https://xield.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-noise.5db3ded2.png&amp;w=3840&amp;q=75 2x"
          src="https://xield.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg-noise.5db3ded2.png&amp;w=3840&amp;q=75"
        ></img>
        <img
          alt="bg-grid"
          className="pointer-events-none fixed inset-0 z-20 h-screen w-full object-cover"
          src="https://xield.io/_next/static/media/bg-grid-line.12099731.svg"
        />
        <Navbar />
        <Home />
        <ProtoTypeSection />
        <UseCase />
        <Protocol />
        <Footer />
      </div>
    </>
  );
}

export default App;
