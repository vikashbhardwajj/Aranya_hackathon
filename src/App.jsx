import Navbar from "./components/Navbar";
import Loader from "./pages/Loader";
import MainRoutes from "./routes/MainRoutes";
import "./styles/App.scss";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      // duration: 1.2,
      // easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      duration: 1.8, // Increased duration for smoother, slower stop
      easing: (t) => 1 - Math.pow(1 - t, 4), // Ease-out quart for a softer stop
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1.4, // Increase this value to make scroll faster (default is 1)
      touchMultiplier: 1.4, // Increase this value for faster touch scroll (default is 1)
    });

    // 🚀 Lenis animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 🔁 ScrollTrigger & Lenis Sync
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return value !== undefined ? lenis.scrollTo(value) : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const handleRefresh = () => {
      // No need to call lenis.update(); just refresh ScrollTrigger
    };
    ScrollTrigger.addEventListener("refresh", handleRefresh);

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.removeEventListener("refresh", handleRefresh);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Loader onFinish={() => setLoaderDone(true)} />
      <Navbar />
      <main>
        <MainRoutes loaderDone={loaderDone} />
      </main>
    </div>
  );
}

// project name Rooted, Aranya(sankrit for forest), Earthkind, Bloommark (a place where nature blooms), Vasudha(Vasudhauva Kutumbakam - the world is one family)
