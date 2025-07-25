import { delay } from "motion";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/About.scss";
import vid1 from "../assets/videos/abt.mp4";

import "../styles/About.scss";
import WavyText from "../components/WavyText";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.to(".about_page_1", {
      opacity: 0.7,

      duration: 1,
      scrollTrigger: {
        trigger: ".about_page_1",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 4,
        pin: true,
        // markers: true,
        pinSpacing: false,
      },
    });

    gsap.to(".tml h1", {
      transform: "translateX(-70%)",
      duration: 6,

      ease: "bsine.inOut",

      scrollTrigger: {
        trigger: ".tml ",
        scroller: "body",
        start: "top -20%",
        end: "top -100%",
        scrub: 2,
        pin: true,
        // markers: true,
        pinSpacing: false,
      },
    });

    return () => {
      tl.kill();
    };
  });

  return (
    <PageWrapper className="about text-3xl">
      <div className="about_wrapper">
        <div className="about_page_1">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            src={vid1}
          ></video>
          <p className="mot absolute text-base md:text-lg">
            Mother - You know <br />
            What it means
          </p>
          <div className="grain-overlay pointer-events-none absolute inset-0 z-10"></div>
          <div
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight * 0.5,
                behavior: "smooth",
              })
            }
            className="second-content relative flex cursor-pointer items-center justify-center bg-black/30 px-4 py-2"
          >
            <h3>Welcome</h3>
            <i className="ri-arrow-down-wide-fill ml-4 text-4xl text-white"></i>
          </div>
        </div>
        <div className="about_page_2">
          <div className="top_section relative mb-[2rem] p-[1rem] md:p-[2rem]">
            <p className="mb-6 text-2xl leading-none font-bold tracking-wider uppercase opacity-70 md:text-3xl">
              Welcome to Aranya — The Living Pulse of Nature
            </p>
            <p className="mb-2 text-xl leading-none font-bold tracking-wider uppercase opacity-70 md:text-2xl">
              “Born not in boardrooms, but beneath the banyan shade.”
            </p>
            <h1 className="mb-2 text-[60px] -tracking-[5px] md:mb-7 md:text-[8rem] lg:text-[10rem] lg:-tracking-[9px]">
              Aranya
            </h1>
            <h3 className="first-h3 text-[1.5rem] md:text-[3rem] md:first-letter:ml-[7rem] lg:text-[4rem] lg:first-letter:ml-[17rem]">
              Aranya began as a whisper of longing—to reconnect with the Earth,
              to offer homage not in words, but in purpose. Each of our
              creations is a silent prayer to the planet we call home.
            </h3>
          </div>
          <div className="bottom_section relative p-[1rem] text-end md:p-[2rem]">
            <p className="mb-2 text-xl leading-none font-bold tracking-wider uppercase opacity-70 md:text-2xl">
              “Born not in pixels, but in petals — where creativity meets soil.”
            </p>
            <h1 className="mb-2 text-[60px] -tracking-[7px] md:mb-7 md:text-[8rem] lg:text-[10rem] lg:-tracking-[9px]">
              Bloommarg
            </h1>
            <h3 className="first-h3 text-[1.5rem] md:text-[3rem] md:first-letter:ml-[7rem] lg:text-[4rem] lg:first-letter:ml-[17rem]">
              Bloommarg is Aranya’s creative blossom — a space where stories
              bloom like wildflowers. Each design, word, and wave carries the
              scent of purpose and the hue of harmony. Not just a sub-brand —
              it’s our soul in full color.
            </h3>
          </div>
        </div>

        <div className="about_page_3">
          <details className="about_details p-[1rem] md:p-[2rem]" open={false}>
            <summary className="">
              <h1 className="mb-2 text-[60px] -tracking-[5px] md:mb-7 md:text-[8rem] lg:text-[10rem] lg:-tracking-[9px]">
                Our Origin
              </h1>
            </summary>
            <p className="mb-2 text-lg leading-none font-bold tracking-wider uppercase opacity-70 md:text-2xl">
              “Not manufactured — but manifested by the mountains and monsoon.”
            </p>
            <h2 className="my-6 text-2xl leading-none font-bold tracking-wider uppercase opacity-70 md:text-3xl">
              Grown from the Ground Up
            </h2>
            <h3 className="text-[1.5rem] md:text-[3rem] lg:text-[3rem]">
              Aranya didn’t start as a business idea — it began as a feeling. A
              quiet reverence for dew-laced mornings, for rustling leaves that
              speak without sound. We grew from soil, sun, and spirit — and
              every creation is an ode to that sacred balance between nature and
              being.
            </h3>
          </details>

          <details
            className="about_details my-[1rem] p-[1rem] text-end md:my-[2rem] md:p-[2rem]"
            open={false}
          >
            <summary className="">
              <h1 className="mb-2 text-[57px] -tracking-[5px] md:mb-7 md:text-[8rem] lg:text-[10rem] lg:-tracking-[9px]">
                Nature's Touchpoints
              </h1>
            </summary>
            <p className="mb-2 text-lg leading-none font-bold tracking-wider uppercase opacity-70 md:text-2xl">
              “Every product is a love letter to a living element.”
            </p>
            <h2 className="my-6 text-2xl leading-none font-bold tracking-wider uppercase opacity-70 md:text-3xl">
              Crafted by Earth, Curated for You
            </h2>
            <h3 className="text-[1.5rem] md:text-[3rem] lg:text-[3rem]">
              From the sacred Neem to the quiet grace of the Owl, explore how
              each offering carries a piece of nature’s wisdom.
            </h3>

            <Link to="/products">
              <button className="mt-6 text-2xl  rounded-md bg-black px-4 py-2 text-white/90 transition-colors duration-300 hover:bg-black/80">
                <WavyText text="Explore Creations" />
              </button>
            </Link>
          </details>

          <details className="about_details p-[1rem] md:p-[2rem]" open={false}>
            <summary className="">
              <h1 className="mb-2 text-[60px] -tracking-[5px] md:mb-7 md:text-[8rem] lg:text-[10rem] lg:-tracking-[9px]">
                The Experience
              </h1>
            </summary>
            <p className="mb-2 text-lg leading-none font-bold tracking-wider uppercase opacity-70 md:text-2xl">
              “We don’t sell things. We share symbols.”
            </p>
            <h2 className="my-6 text-2xl leading-none font-bold tracking-wider uppercase opacity-70 md:text-3xl">
              What Makes Aranya Different?
            </h2>

            <ul className="mb-2 text-xl leading-5 font-bold tracking-wider uppercase opacity-70 md:text-2xl">
              <li className="mb-2"> 100% Nature-Aligned</li>
              <li className="mb-2"> Zero-Waste Approach</li>
              <li className="mb-2"> Emotional Sustainability</li>
              <li className="mb-2">Pollinator-Conscious Designs</li>
            </ul>
          </details>
        </div>

        <div className="tml hidden items-center p-[2rem] md:flex md:p-[5rem]">
          <h1 className="">Timeline</h1>
        </div>
        <div className="page4">
          <div className="gallery-3d">
            <div className="cylinder">
              {[
                "/timeline/1.avif",
                "/timeline/2.avif",
                "/timeline/3.avif",
                "/timeline/4.avif",
                "/timeline/5.avif",
                "/timeline/6.avif",
                "/timeline/7.jpg",
                "/timeline/8.avif",
              ].map((url, index) => (
                <div
                  key={index}
                  className="cy1_img"
                  style={{ backgroundImage: `url(${url})` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      

        
      
      </div>
    </PageWrapper>
  );
}
