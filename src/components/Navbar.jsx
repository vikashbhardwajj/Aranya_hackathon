import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import aud1 from "../assets/sounds/relax.mp3"; 
import WavyText from "./WavyText";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Join", path: "/login" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;

  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const xForm = window.innerWidth < 640 ? "0%" : "0%";

  const handleClick = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      if (audioRef.current) {
        audioRef.current.loop = true;
        audioRef.current.play();
      }
    }
  };

  const handleAudioEnd = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  useEffect(() => {}, [isOpen]);

  return (
    <nav className="fixed top-5 right-0 left-0 z-[50] flex items-center justify-between px-3 md:top-10 md:px-6">
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="nav-logo p-[0.5rem] rounded-xl md:p-[0.5rem] bg-white/20 backdrop-blur-xl cursor-pointer text-2xl font-bold text-black"
      >
        {"ARANYA".split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block text-2xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      <div
        onClick={handleClick}
        className={`hamburger relative z-[400] flex cursor-pointer items-center justify-center rounded-full px-7 py-3 ${isOpen ? "bg-white/30" : "bg-[rgb(41,41,41)]"} `}
      >
        <audio ref={audioRef} autoPlay loop src={aud1}></audio>
        <motion.p
          className={`menu-text text-white ${isOpen ? "hidden" : "inline-block"}`}
        >
          <WavyText text="MENU" y={5} />
        </motion.p>
        <button
          className="menu flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1 rounded-full bg-amber-500 focus:outline-none"
          aria-label="Toggle menu"
          style={{ scale: isOpen ? 1.1 : 0.3 }}
        >
          <span
            className={`block h-0.5 w-4 rounded bg-black transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
            style={{ opacity: isOpen ? 1 : "" }}
          />
          <span
            className={`block h-0.5 w-4 rounded bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
            style={{ opacity: isOpen ? 0 : "" }}
          />
          <span
            className={`block h-0.5 w-4 rounded bg-black transition-all duration-300 ${
              isOpen ? "-translate-y-1 -rotate-48" : ""
            }`}
            style={{ opacity: isOpen ? 1 : "" }}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "calc(100% + 100px)" }}
            animate={{
              x: xForm,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
            exit={{
              x: "calc(100% + 100px)",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
            className="nav-menu fixed top-0 right-0 z-[300] flex h-[100vh] flex-col items-center justify-center bg-[rgb(41,41,41)] text-white"
          >
            <div className="svg">
              <svg
                className="absolute top-0 -left-[99px] h-full w-[100px]"
                fill="rgb(41, 41, 41)"
                stroke="none"
              >
                <motion.path
                  initial={{ d: initialPath }}
                  animate={{
                    d: targetPath,
                    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
                  }}
                  exit={{
                    d: initialPath,
                    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
                  }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                />
              </svg>
            </div>
            <div className="body box-border flex h-full flex-col justify-between p-[100px]">
              <div className="top relative flex flex-col gap-5">
                <div className="header text-[rgb(153, 153, 153)] mb-10 border-b border-gray-500 pb-2 text-[11px] uppercase">
                  <p className="tracking-widest">NAVIGATION</p>

                  <h1
                    onClick={handleAudioEnd}
                    className="fixed top-7 left-5 cursor-pointer rounded-full bg-amber-50/40 p-1 text-center text-4xl text-black md:top-3"
                  >
                    <i className="ri-arrow-right-s-fill"></i>
                  </h1>
                </div>
                {navLinks.map((link, i) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="origin-left text-6xl font-thin uppercase transition-transform duration-300 hover:scale-90"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.span
                      className="inline-block"
                      initial={{
                        x: 80,
                      }}
                      animate={{
                        x: 0,
                        transition: {
                          duration: 0.8,
                          ease: [0.76, 0, 0.24, 1],
                          delay: 0.05 * i,
                        },
                      }}
                      exit={{
                        x: 80,
                        transition: {
                          duration: 0.8,
                          ease: [0.76, 0, 0.24, 1],
                          delay: 0.05 * i,
                        },
                      }}
                      // transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      {link.name}
                    </motion.span>
                  </NavLink>
                ))}
              </div>

              <div className="footer flex w-full justify-between gap-6">
                <a
                  href="mailto:ind.vikashbhardwaj@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Email"
                >
                  Email
                </a>
                <a
                  href="https://github.com/vikashbhardwajj"
                  target="_blank"
                  rel="noopener"
                  title="Visit on GitHub"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/_vikashbhardwaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit on Instagram"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/vikashbhardwajj"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit on LinkedIn"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

//
