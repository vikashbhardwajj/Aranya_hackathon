import { motion } from "motion/react";

const defaultVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const defaultTransition = {
  duration: 0.4,
  ease: "easeInOut",
};

export default function PageWrapper({
  children,
  // variants = defaultVariants,
  // transition = defaultTransition,
  className = "",
}) {
  const nbOfColumns = window.innerWidth < 640 ? 3 : 4;
  return (
    <motion.section
      className={`section z-[500] px-3 pt-[6rem] md:pt-[8rem]  md:px-[1rem] ${className}`}
      initial="initial"
      animate="animate"
      exit="exit"
      // variants={variants}
      // transition={transition}
    >
      <motion.div
        className="page-transition-blur h-[100vh] w-full absolute top-0 left-0  bg-black pointer-events-none"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0.7, transition: { duration: 0.5 } }}
      ></motion.div>
      <div className="main-page-trnasition left flex z-[300] fixed h-full w-full top-0 left-0 p-0 pointer-events-none">
        {Array.from({ length: nbOfColumns }).map((_, index) => (
          <motion.div
            key={index}
            className=" relative h-full w-full bg-[rgb(0,0,0)] pointer-events-none"
            initial={{
              top: 0,
            }}
            animate={{ top: "100%", transitionEnd: { height: "0", top: "0" } }}
            exit={{
              height: "100%",
              transition: {
                duration: 0.3,
                delay: 0.04 * (5 - index),
                ease: [0.215, 0.61, 0.355, 1],
              },
            }}
            transition={{
              duration: 0.3,
              delay: (5 - index) * 0.06,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          />
        ))}
      </div>
      {/* <div className="left flex flex-col gap-0 fixed h-full w-full top-0 left-0 pointer-events-none">
        {Array.from({ length: nbOfColumns }).map((_, index) => (
          <motion.div
            key={index}
            className="hhh relative h-full w-full bg-black pointer-events-none"
            initial={{
              // top: 0,
              left: 0
            }}
            animate={{ left: "100%",  transitionEnd: { width: "0", left: "0" } }}
            exit={{
              width: "100%",
              transition: {
                duration: 0.3,
                delay: 0.04 * (5 - index),
                ease: [0.215, 0.61, 0.355, 1],
              },
            }}
            transition={{
              duration: 0.3,
              delay: (5 - index) * 0.06,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          />
        ))}
      </div> */}

      {children}
    </motion.section>
  );
}
