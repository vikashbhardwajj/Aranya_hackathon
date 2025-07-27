import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import CustomCurosr from "../components/CustomCursor";
import "../styles/Home.scss";
import WavyText from "../components/WavyText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import Flip from "gsap/Flip";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import vid1 from "../assets/videos/video1.mp4";
import vid2 from "../assets/videos/video2.mp4";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/parrot.jpg";
import tl1 from "/timeline/1.avif";
import tl2 from "/timeline/2.avif";
import tl3 from "/timeline/3.avif";
import tl4 from "/timeline/4.avif";
import tl5 from "/timeline/5.avif";
import tl6 from "/timeline/6.avif";
import tl7 from "/timeline/7.jpg";
import tl8 from "/timeline/8.avif";
import { motion } from "motion/react";

gsap.registerPlugin(useGSAP, CustomEase, Flip, SplitText, ScrollTrigger);

const Home = ({ loaderDone }) => {
  useGSAP(() => {
    if (!loaderDone) return;

    CustomEase.create(
      "hop",
      "M0, 0 C0.355,0.022 0.448,0.079 0.5,0.5 0.542,0.846 0.615, 1 1,1",
    );

    CustomEase.create(
      "hop2",
      "M0, 0 C0.078,0.617 0.114,0.716 0.255,0.828 0.373,0.922 0.561, 1 1,1",
    );

    const mainTl = gsap.timeline();
    const revealerTl = gsap.timeline();
    const scaleTl = gsap.timeline();

    const splitted = new SplitText(".home-main-text", {
      type: " lines",
    });

    revealerTl
      .to(".r-1", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.5,
        ease: "hop",
      })
      .to(
        ".r-2",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          duration: 1.5,
          ease: "hop",
        },
        "<",
      );

    scaleTl.to(".img:first-child", {
      scale: 1,
      duration: 2,
      ease: "power4.inOut",
    });

    const images = document.querySelectorAll(".img:not(:first-child)");

    images.forEach((img, index) => {
      scaleTl.to(
        img,
        {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power3.Out",
        },
        ">-0.5",
      );
    });

    mainTl
      .add(revealerTl)
      .add(scaleTl, "-=1.25")
      .add(() => {
        document
          .querySelectorAll(".img:not(.main)")
          .forEach((img) => img.remove());
        // Flip.getState(".main"); // Removed unused variable 'state'

        document.querySelector(".revealers").remove();

        const state = Flip.getState(".main");

        const imagesContainer = document.querySelector(".images");
        imagesContainer.classList.add("stacked-container");

        document.querySelectorAll(".main").forEach((img, index) => {
          img.classList.add("stacked");
          img.style.order = index;

          gsap.set(".img.stacked", {
            clearProps: "transform, top, left",
          });
        });

        return Flip.from(state, {
          duration: 2,
          ease: "hop",
          absolute: true,
          stagger: { amount: -0.3 },
          onComplete: () => {
            document.querySelector(".container-wrap").style.pointerEvents =
              "none";
          },
        });
      }, ">")
      .from(
        splitted.lines,
        {
          y: "130%",
          autoAlpha: 0,
          duration: 1,
          delay: 1.6,
          ease: "elastic.out(1, 0.3)",
          pointerEvents: "auto",
          stagger: {
            amount: 0.3,
            from: "random",
          },
        },
        "<",
      );
  }, [loaderDone]);

  useGSAP(() => {
    CustomEase.create(
      "hop",
      "M0, 0 C0.355,0.022 0.448,0.079 0.5,0.5 0.542,0.846 0.615, 1 1,1",
    );

    CustomEase.create(
      "hop2",
      "M0, 0 C0.078,0.617 0.114,0.716 0.255,0.828 0.373,0.922 0.561, 1 1,1",
    );
    const tl = gsap.timeline();

    tl.to(".page1", {
      top: "20%",
      scale: 0.3,
      // clipPath: "inset(40% 0% 20% 0% round 2rem)",
      ease: "hop2",

      opacity: 0.4,
      scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        start: "top top",
        end: "+=80%",
        scrub: 3,
        pin: true,
        // pinSpacing: true,
      },
    });

    if (window.innerWidth >= 750) {
      tl.to(".added_later1", {
      top: "0%",
      ease: "power4.in",
      scrollTrigger: {
        trigger: ".added_later1",
        scroller: "body",
        start: "top top",
        end: "+=70%",
        scrub: 2,
        pin: true,
      },
      });
    }

    tl.to(".page2 .video1", {
      scaleX: 0,
      scaleY: 0,
      opacity: 0.7,

      zIndex: 200,
      scale: 1,
      top: 0,
      left: 0,
      ease: "hop",

      scrollTrigger: {
        trigger: ".page2 .video1",
        scroller: "body",
        start: "top -40%",
        end: "+=200%",
        scrub: 2,
        pin: true,
        pinSpacing: true,

        onLeave: () => {
          gsap.to(".page2 video", { autoAlpha: 0, duration: 1.5 });
        },
        onEnterBack: () => {
          gsap.to(".page2 video", { autoAlpha: 1, duration: 1.5 });
        },
      },
    });

    tl.to(".page2", {
      top: "0%",
      // opacity: 0.6,
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top top",
        end: "+=200%",
        scrub: 2,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });

    tl.to(".added_later2", {
      top: "40%",
      ease: "power4.in",
      scrollTrigger: {
        trigger: ".added_later2",
        scroller: "body",
        start: "top 0%",
        end: "+=100%",
        scrub: 2,
        pin: true,
        pinSpacing: false,
      },
    });
  });

  const mouseEnter = (e) => {
    e.target.muted = false;
    // e.target.play();
    e.target.volume = 0.05;
  };

  const mouseLeave = (e) => {
    e.target.play();
    e.target.volume = 0.05;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Aranya – Rooted in Reverence | Bloommark Nature</title>
        <meta
          name="description"
          content="Explore Aranya, a poetic tribute to Mother Nature. Discover sacred elements, natural creations, and our sub-brand Bloommarg for conscious living."
        />
        <meta
          name="keywords"
          content="Aranya, nature tribute, eco project, mother earth, Bloommark, environment, natural elements, eco-lifestyle"
        />
        <meta name="author" content="Aranya Team" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://aranya-five.vercel.app/" />
        <meta property="og:title" content="Aranya – Rooted in Reverence" />
        <meta
          property="og:description"
          content="Aranya is more than a website—it's a journey into nature’s soul."
        />
        <meta
          property="og:image"
          content="https://aranya-five.vercel.app/cover.jpg"
        />
        <meta property="og:url" content="https://aranya-five.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aranya – Rooted in Reverence" />
        <meta
          name="twitter:description"
          content="A soulful experience connecting you with Earth through every scroll."
        />
        <meta
          name="twitter:image"
          content="https://aranya-five.vercel.app/cover.jpg"
        />
      </Helmet>

      <PageWrapper className="home overflow-hidden">
        <div className="container-wrap overflow-hidden">
          <div className="revealers">
            <div className="revealer r-1"></div>
            <div className="revealer r-2"></div>
          </div>

          <div className="images">
            <div className="img">
              <img src={tl1} alt="" />
            </div>
            <div className="img">
              <img src={tl2} alt="" />
            </div>
            <div className="img">
              <img src={tl3} alt="" />
            </div>
            <div className="img">
              <img src={tl4} alt="" />
            </div>
            <div className="img">
              <img src={tl5} alt="" />
            </div>
            <div className="img main">
              <img src={tl6} alt="" />
            </div>
            <div className="img main">
              <img src={tl7} alt="" />
            </div>
            <div className="img main">
              <img src={tl8} alt="" />
            </div>
          </div>
        </div>
        <div className="home-content flex w-full flex-col items-center justify-center gap-2 overflow-hidden">
          <div className="page page1">
            <div className="gola"></div>

            <h1 className="home-main-text bg-purple-400/10 p-[1rem] text-[1.5rem] leading-none backdrop-blur-xs md:p-[2rem] md:text-[3rem] lg:p-[3rem] lg:text-[4rem]">
              <WavyText
                text=" Mother Nature -"
                y={15}
                className="inline text-[50px] -tracking-[3px] lg:text-[10rem] lg:-tracking-[9px]"
              />{" "}
              <br />
              <span> "The first influencer we ever followed"</span>
            </h1>
          </div>
          <div className="added_later1 bg-red-300 p-[1rem] md:p-[2rem]">
            <p className="mb-6 text-xl leading-none font-bold tracking-wider uppercase opacity-70 md:w-[70%] md:text-3xl lg:w-[40%]">
              Welcome to Aranya — A space where every creation honors the earth.
              Explore natural symbols turned into purposeful offerings.
            </p>
            <p className="mb-2 text-xl leading-none font-bold tracking-wider uppercase opacity-70 md:text-2xl">
              A Nature-Centric Project with Purpose
            </p>
            <h1 className="mb-2 text-[60px] -tracking-[5px] md:mb-7 md:text-[8rem] lg:text-[10rem] lg:-tracking-[9px]">
              Aranya?
            </h1>
            <h3 className="first-h3 text-[1.5rem] md:text-[3rem] md:first-letter:ml-[7rem] lg:text-[4rem] lg:first-letter:ml-[17rem]">
              Aranya is not just a website — it’s a tribute to Mother Nature. We
              curate symbolic, sacred, and sustainable creations inspired by
              trees, rivers, animals, and elements. From the mighty banyan to
              healing tulsi, every product tells a story rooted in ecology and
              emotion.
            </h3>

            <blockquote className="my-6 mt-10 border-l-4 border-green-500 pl-4 text-xl leading-none text-gray-600 italic">
              “Crafted not for commerce, but for conscience.”
            </blockquote>
          </div>

          <div className="page page2 pb-[2rem] md:pb-[4rem]">
            <video
              autoPlay
              muted
              loop
              onMouseEnter={(event) => mouseEnter(event)}
              onMouseLeave={(event) => mouseLeave(event)}
              src={vid1}
              className="video1 rounded-md shadow-lg"
            ></video>
            <div className="page2-content relative flex h-full w-full flex-col justify-between gap-10 sm:flex-row">
              <div className="page2-left-wraper relative flex flex-col gap-10 p-3 md:w-1/2">
                <div className="page-2-left sticky top-10 h-fit bg-white/10 shadow-md backdrop-blur-2xl">
                  <section className="page2-section relative flex justify-center px-6 py-20 text-gray-800">
                    <div className="max-w-4xl text-start">
                      <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="mb-8 text-4xl font-bold md:text-6xl"
                      >
                        She never spoke, yet we understood.
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mb-6 w-full text-lg leading-relaxed text-gray-600 md:w-[90%] md:text-xl lg:w-[70%]"
                      >
                        The wind didn’t need words. The trees swayed, and we
                        felt comfort. The river flowed, and we remembered how to
                        move.
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full text-lg leading-relaxed text-gray-600 md:w-[90%] md:text-xl lg:w-[70%]"
                      >
                        Long before language, we listened to the silence between
                        the rustling leaves — and found peace in what wasn’t
                        said.
                      </motion.p>
                      <motion.blockquote
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        viewport={{ once: true }}
                        className="mt-10 text-gray-500 italic"
                      >
                        “Some wisdom cannot be spoken. It must be felt.”
                      </motion.blockquote>
                    </div>
                  </section>
                </div>

                <video
                  className="video2 max-h-84 w-full rounded-md object-cover object-center shadow-lg"
                  src={vid2}
                  autoPlay
                  muted
                  loop
                ></video>
              </div>

              <div className="page2-right sticky top-10 flex h-fit justify-center gap-2 bg-white/10 px-6 py-20 pb-2 shadow-md backdrop-blur-2xl md:h-[100vh] md:w-1/2">
                <div className="page2-right-content flex flex-col justify-between gap-4">
                  <img
                    className="aspect-[16/9] w-full rounded-md object-cover object-top shadow-lg lg:h-[400px]"
                    src={img2}
                    alt=""
                  />
                  <p className="mt-[4rem] mb-2 h-fit pb-5 text-4xl font-bold md:mt-0 md:w-[90%] md:text-5xl lg:w-[80%]">
                    "Before trends and technology, we listened to the whisper of
                    trees, rivers, and winds."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="added_later2 p-[1rem] md:p-[2rem]">
            <p className="mb-6 text-xl leading-none font-bold tracking-wider uppercase opacity-70 md:w-[70%] md:text-3xl">
              Products We Offer
            </p>
            <p className="mb-2 text-xl leading-none font-bold tracking-wider uppercase opacity-70 md:w-[70%] md:text-2xl">
              Sacred trees & plants 🌳
            </p>
            <p className="mb-2 text-xl leading-none font-bold tracking-wider uppercase opacity-70 md:w-[70%] md:text-2xl">
              Healing elements 🌿
            </p>
            <p className="mb-2 text-xl leading-none font-bold tracking-wider uppercase opacity-70 md:w-[70%] md:text-2xl">
              Earth’s wildlife guardians 🦉
            </p>
            <p className="mb-2 text-xl leading-none font-bold tracking-wider uppercase opacity-70 md:w-[70%] md:text-2xl">
              Natural icons of purity 🌸
            </p>
            <p className="mb-2 text-xl leading-none font-bold tracking-wider uppercase opacity-70 md:w-[70%] md:text-2xl">
              Elements like air, water & sun 🌞
            </p>
          </div>
          <div className="added_later3 overflow-hidden">
            <div className="gallery-3d">
              <div className="cylinder">
                {[
                  "/assets/product-img/honeybee.jpg",
                  "/assets/product-img/tulsi.jpg",
                  "/assets/product-img/rose.jpg",
                  "/assets/product-img/sunlight.jpg",
                  "/assets/product-img/sandalwood.jpg",
                  "/assets/product-img/mountain.jpg",
                  "/assets/product-img/peacock.jpg",
                  "/assets/product-img/owl.jpg",
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
          <div className="page page3 p-[1rem] md:p-[4rem]">
            <video
              autoPlay
              muted
              loop
              onMouseEnter={(event) => mouseEnter(event)}
              onMouseLeave={(event) => mouseLeave(event)}
              src={vid2}
              className="video2 rounded-md shadow-lg"
            ></video>
            <motion.div
              className="page3-top relative flex flex-col-reverse justify-between gap-10 pb-[1rem] md:flex-row md:pb-[5rem]"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="page3-top-img top-img">
                <img className="" src={img3} alt="" />
              </div>

              <motion.div className="page3-top-left" variants={item}>
                <div className="news-letter">
                  <span className="letter-text">Newsletter</span>
                  <motion.h2
                    className="text-3xl font-bold md:text-5xl"
                    variants={item}
                  >
                    “Let Your Story Bloom”
                  </motion.h2>
                  <motion.p
                    variants={item}
                    className="my-5 w-[90%] text-lg leading-none text-gray-600 md:w-[70%] lg:w-[60%]"
                  >
                    Stay connected to nature’s rhythm, beauty, and wisdom
                    directly in your mail.
                  </motion.p>

                  <motion.form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col gap-2"
                    variants={item}
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="border-b border-gray-300 p-2 focus:outline-none focus-visible:border-b-2 focus-visible:border-green-500 focus-visible:ring-0 sm:w-[90%]"
                    />
                    <button className="cursor-pointer rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600">
                      <WavyText text="Be the Bloommark" y={5} />
                    </button>
                  </motion.form>
                </div>
              </motion.div>

              <motion.div
                className="page-3-top-right relative border-b border-b-gray-400 pb-10 text-start shadow-md md:border-none md:p-5 md:pb-15 md:text-end"
                variants={container}
              >
                <motion.h1
                  className="sub-brand text-3xl font-bold"
                  variants={item}
                >
                  BLOOMMARG
                </motion.h1>
                <motion.h4 className="my-2 text-sm font-bold" variants={item}>
                  Sub-brand
                </motion.h4>
                <motion.p
                  className="text-lg font-bold md:absolute md:right-5"
                  variants={item}
                >
                  A place where Nature Blooms
                </motion.p>
              </motion.div>
            </motion.div>

            <div className="page3-center flex flex-col justify-between gap-10 border-b py-10 md:flex-row">
              <motion.div
                className="page3-center-left border-b pb-2 md:border-b-0 md:pb-0"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h2
                  className="text-xs font-bold tracking-wider uppercase"
                  variants={item}
                >
                  Trace the Silence
                </motion.h2>
                <div className="page3-center-left-wrapper flex gap-10 py-5 sm:gap-20 md:gap-30">
                  <div className="first">
                    <Link
                      to="/about"
                      className="link cursor-pointer text-sm leading-none font-bold tracking-wider uppercase opacity-70 md:text-base"
                    >
                      Origin
                    </Link>
                    <h3 className="text-sm leading-none font-bold tracking-wider uppercase opacity-70 md:text-base">
                      Stories
                    </h3>
                    <h3 className="text-sm leading-none font-bold tracking-wider uppercase opacity-70 md:text-base">
                      Footprints
                    </h3>
                  </div>
                  <div className="second">
                    <Link
                      to="/products"
                      className="link cursor-pointer text-sm leading-none font-bold tracking-wider uppercase opacity-70 md:text-base"
                    >
                      Creations
                    </Link>
                    <Link
                      to="/about"
                      className="link cursor-pointer text-sm leading-none font-bold tracking-wider uppercase opacity-70 md:text-base"
                    >
                      About
                    </Link>
                    <h3 className="text-sm leading-none font-bold tracking-wider uppercase opacity-70 md:text-base">
                      Bloom
                    </h3>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="page3-center-right flex md:gap-20"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }} // adjust trigger
              >
                <motion.h3
                  className="absolute mb-6 text-center text-xs font-bold tracking-wider uppercase"
                  variants={item}
                >
                  Where Aranya Breathes
                </motion.h3>

                <motion.div
                  className="first mt-6 w-full border-b p-[1rem] pb-[2rem] shadow-md md:w-fit md:border-b-0 md:pb-[1rem]"
                  variants={item}
                >
                  <h1 className="text-xl font-bold">Tapovan 🌲</h1>
                  <p className="italic opacity-70">The Forest of Stillness</p>
                  <p className="opacity-70">In the silence, healing begins.</p>
                  <p className="mt-[0.5rem] text-xs opacity-70">
                    Elevation: 2,800m
                  </p>
                  <button className="mt-[0.5rem] self-start rounded-full px-4 py-2 text-xs">
                    <WavyText text="Get me there" y={5} />
                  </button>
                </motion.div>

                <motion.div
                  className="second mt-6 w-full border-b p-[1rem] pb-[2rem] shadow-md md:w-fit md:border-b-0 md:pb-0"
                  variants={item}
                >
                  <h1 className="text-xl font-bold">Naimisharanya 🌼</h1>
                  <p className="italic opacity-70">The Eternal Grove</p>
                  <p className="opacity-70">
                    Where sages whispered to the Earth.
                  </p>
                  <p className="mt-[0.5rem] text-xs opacity-70">
                    Latitude: 27.4°N
                  </p>
                  <button className="mt-[0.5rem] self-start rounded-full px-4 py-2 text-xs">
                    <WavyText text="Get me there" y={5} />
                  </button>
                </motion.div>

                <motion.div
                  className="third mt-6 mr-4 w-full p-[1rem] pb-[2rem] shadow-md md:w-fit md:border-b-0 md:pb-[1rem]"
                  variants={item}
                >
                  <h1 className="text-xl font-bold">Brahmaputra Bend 🌊</h1>
                  <p className="italic opacity-70">The River’s Sacred Curve</p>
                  <p className="opacity-70">
                    Where the waters listen to the sky.
                  </p>
                  <p className="mt-[0.5rem] text-xs opacity-70">
                    Flow Rate: 19,000 m³/s
                  </p>
                  <button className="mt-[0.5rem] self-start rounded-full px-4 py-2 text-xs">
                    <WavyText text="Get me there" y={5} />
                  </button>
                </motion.div>
              </motion.div>
            </div>

            <div className="page3-bottom flex flex-col items-start justify-between gap-10 py-10 md:flex-row md:items-center">
              <p>
                <span></span> bloommarg@nature.com
              </p>
              <div className="socials flex-wrap">
                <div className="social instagram">
                  <a
                    href="https://www.instagram.com/ncf.india/"
                    target="_blank"
                    title="Visit on Instagram"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                </div>
                <div className="social facebook">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    title="Visit on Facebook"
                  >
                    <i className="ri-facebook-circle-fill"></i>
                  </a>
                </div>
                <div className="social x">
                  <a
                    href="https://x.com/moefcc/"
                    target="_blank"
                    title="Visit on X"
                  >
                    <i className="ri-twitter-x-fill"></i>
                  </a>
                </div>
                <div className="social linkedin">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    title="Visit on Linkedin"
                  >
                    <i className="ri-linkedin-box-fill"></i>
                  </a>
                </div>
                <div className="social youtube">
                  <a
                    href="https://www.youtube.com/channel/UCc7gpqMnnOSbU_F2-5MVVZw"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit on Youtube"
                  >
                    <i className="ri-youtube-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Home;
