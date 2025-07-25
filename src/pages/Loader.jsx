import { delay } from "motion";
import { motion, useMotionValue, animate } from "motion/react";
import { h1, nav } from "motion/react-client";
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Loader = ({onFinish}) => {
  const nbOfColumns = window.innerWidth < 640 ? 3 : 4;

  const navigate = useNavigate();

  const [hideLoader, setHideLoader] = useState(false);
  const [count, setCount] = useState(0);

  const messages = [
    "You are beautiful, smile plz 😊  ",
    "Every seed you plant matters 🌱  ",
    "Let the earth breathe through you 🍃  ",
    "Peace begins where nature lives 🕊️  ",
    "Your soul is rooted in something bigger 🌳  ",
    "In stillness, we grow strongest 🌾  ",
    "The forest remembers every step you take 🌲  ",
    "The world blossoms with your kindness 🌸  ",
    "You are the sunshine to someone’s soil ☀️  ",
    "The earth is smiling because you’re here 🌍  ",
  ];

  const typingSpeed = window.innerWidth < 640 ? 20 : 30; // Adjust typing speed based on screen size

  const selectedMessage = useMemo(() => {
    return messages[Math.floor(Math.random() * messages.length)];
  }, []);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 3.4,
      delay: 0.8,
      onUpdate(value) {
        setCount(Math.round(value));
      },
      onComplete() {
        setHideLoader(true);
        navigate("/");
        setInterval(() => {
          onFinish();
        }, 250);

       
      },
    });

    return () => controls.stop();
  }, []);

  return (
    <motion.div
      className="loader fixed top-0 left-0 z-[300] flex h-full w-full items-center justify-center bg-white"
      initial={{
        height: "100%",
        top: 0,
      }}
      animate={
        hideLoader
          ? {
              height: "0%",
              top: "-100%",

              transition: {
                duration: 0.8,
                delay: 0.25,
                ease: [0.76, 0, 0.24, 1],
              },
            }
          : {}
      }
    >
      <div className="loader-trnasition left pointer-events-none fixed top-0 left-0 z-[100] flex h-full w-full p-0">
        {Array.from({ length: nbOfColumns }).map((_, index) => (
          <motion.div
            key={index}
            className="pointer-events-none relative h-full w-full bg-[rgb(0,0,0)]"
            initial={{
              top: 0,
            }}
            animate={{
              top: hideLoader ? "0" : "100%",
              height: hideLoader ? 0 : "100%",

              transition: {
                duration: 0.9,
                delay: (nbOfColumns - index) * 0.04,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
          />
        ))}
      </div>
      <div className="content flex w-[90%] flex-col items-center justify-center md:w-[85%] md:gap-10">
        <h1 className="text-6xl md:text-7xl lg:text-9xl">
          <Typewriter
            words={[selectedMessage]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={typingSpeed}
            deleteSpeed={10000}
            delaySpeed={0}
          />
        </h1>
        <motion.h1
          className="loader-number absolute top-0 right-0 z-10 text-center text-6xl font-bold text-black md:relative md:w-full md:text-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          {count}%
        </motion.h1>
        <div className="loader-logo absolute top-1 left-2">
          <motion.span
            className="inline-block text-2xl font-bold text-green-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <svg
              width="205.99999999999997"
              height="103.5315697038993"
              viewBox="0 0 300 187.2336215901211"
              className="looka-1j8o68f h-20 w-20 md:h-[100px] md:w-[200px]"
            >
              <defs id="SvgjsDefs1011"></defs>
              <g
                id="SvgjsG1012"
                featurekey="monogramFeature-0"
                transform="matrix(2.8575373564930753,0,0,2.8575373564930753,81.42796157669763,-51.435672416875356)"
                fill="#a0e4b0"
              >
                <path d="M23.977 18 l21.017 42.041 l-9.2925 0 l-8.0736 -16.094 l-15.365 0 l-8.0148 16.054 l-1.2483 0 z M12.823 42.832 l14.239 0 l-7.134 -14.228 z M20.552 27.356 l15.838 31.564 l6.7958 0 l-19.209 -38.419 z"></path>
              </g>
              <g
                id="SvgjsG1013"
                featurekey="nameFeature-0"
                transform="matrix(1.6869148269661325,0,0,1.6869148269661325,-2.539266109617031,119.75702207640641)"
                fill="#111111"
              >
                <path d="M25.12 39.32 c0.16 0.4 -0.04 0.68 -0.48 0.68 l-1.26 0 c-0.32 0 -0.54 -0.12 -0.68 -0.48 l-2.3 -6.06 l-14.12 0 l-2.3 6.06 c-0.14 0.36 -0.36 0.48 -0.68 0.48 l-1.26 0 c-0.44 0 -0.64 -0.28 -0.48 -0.68 l10.32 -26.84 c0.12 -0.32 0.42 -0.48 0.74 -0.48 l1.48 0 c0.32 0 0.58 0.16 0.7 0.48 z M7.18 31.14 l12.32 0 l-6.16 -16.2 z M48.129999999999995 28.7 l5.6 10.6 c0.22 0.42 0.02 0.7 -0.44 0.7 l-1.48 0 c-0.32 0 -0.54 -0.14 -0.7 -0.44 l-5.56 -10.58 l-0.58 0 l-8.06 0 l0 10.42 c0 0.36 -0.24 0.6 -0.6 0.6 l-1.3 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -26.8 c0 -0.36 0.24 -0.6 0.6 -0.6 l9.96 0 c6.7 0 9.44 3.12 9.44 8.48 c0 4.44 -1.86 7.34 -6.28 8.22 z M36.91 26.619999999999997 l8.2 0 c3.98 0 6.84 -1.16 6.84 -6.14 s-2.86 -6.12 -6.84 -6.12 l-8.2 0 l0 12.26 z M85.86 39.32 c0.16 0.4 -0.04 0.68 -0.48 0.68 l-1.26 0 c-0.32 0 -0.54 -0.12 -0.68 -0.48 l-2.3 -6.06 l-14.12 0 l-2.3 6.06 c-0.14 0.36 -0.36 0.48 -0.68 0.48 l-1.26 0 c-0.44 0 -0.64 -0.28 -0.48 -0.68 l10.32 -26.84 c0.12 -0.32 0.42 -0.48 0.74 -0.48 l1.48 0 c0.32 0 0.58 0.16 0.7 0.48 z M67.92 31.14 l12.32 0 l-6.16 -16.2 z M114.71000000000001 12 c0.36 0 0.6 0.24 0.6 0.6 l0 26.8 c0 0.3 -0.18 0.52 -0.44 0.58 l0 0.02 l-2.1 0 c-0.32 0 -0.56 -0.12 -0.72 -0.4 l-14.4 -24.18 l0 23.98 c0 0.36 -0.24 0.6 -0.6 0.6 l-1.3 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -26.8 c0 -0.32 0.18 -0.54 0.46 -0.58 l0 -0.02 l2.08 0 c0.32 0 0.56 0.12 0.72 0.4 l14.4 24.14 l0 -23.94 c0 -0.36 0.24 -0.6 0.6 -0.6 l1.3 0 z M148.01999999999998 12 c0.48 0 0.66 0.32 0.4 0.72 l-10.74 16.44 l0 10.24 c0 0.36 -0.24 0.6 -0.6 0.6 l-1.3 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -10.24 l-10.72 -16.44 c-0.26 -0.4 -0.08 -0.72 0.4 -0.72 l1.58 0 c0.32 0 0.54 0.12 0.72 0.4 l9.28 14.26 l9.28 -14.26 c0.18 -0.28 0.4 -0.4 0.72 -0.4 l1.58 0 z M179.29 39.32 c0.16 0.4 -0.04 0.68 -0.48 0.68 l-1.26 0 c-0.32 0 -0.54 -0.12 -0.68 -0.48 l-2.3 -6.06 l-14.12 0 l-2.3 6.06 c-0.14 0.36 -0.36 0.48 -0.68 0.48 l-1.26 0 c-0.44 0 -0.64 -0.28 -0.48 -0.68 l10.32 -26.84 c0.12 -0.32 0.42 -0.48 0.74 -0.48 l1.48 0 c0.32 0 0.58 0.16 0.7 0.48 z M161.35 31.14 l12.32 0 l-6.16 -16.2 z"></path>
              </g>
            </svg>
          </motion.span>
        </div>
        <h1 className="absolute bottom-10 left-5 text-2xl font-semibold text-gray-700 md:text-3xl lg:text-4xl">
          <Typewriter
            words={["Mother Nature's Call"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={10}
            deleteSpeed={30}
            delaySpeed={100}
          />
        </h1>
      </div>
    </motion.div>
  );
};

export default Loader;
