import { useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function WavyText({ text, className = "", y = -20 }) {
  const textRef = useRef();
  const splitRef = useRef();

  const runAnimation = () => {
    if (!splitRef.current) {
      splitRef.current = new SplitText(textRef.current, {
        type: "words, chars",
      });
    }
    gsap.fromTo(
      splitRef.current.chars,
      { y , pointerEvents: "none" },
      {
        y: 0,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
        pointerEvents: "auto",
        stagger: 0.03,
      },
    );
  };

  return (
    <span
      ref={textRef}
      className={`inline-block cursor-pointer ${className}`}
      onMouseEnter={runAnimation}
    >
      {text}
    </span>
  );
}
