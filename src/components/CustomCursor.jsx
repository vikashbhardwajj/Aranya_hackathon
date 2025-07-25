import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = ({ targetRef, className = "", size = 20, children}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const lastEventRef = useRef(null);

  useEffect(() => {
    const updateCursor = (e) => {
      if (!targetRef.current) return;

      const rect = targetRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (inside) {
        setVisible(true);
        setPos({ x, y });
      } else {
        setVisible(false);
      }
    };

    const handleMouseMove = (e) => {
      lastEventRef.current = e;
      updateCursor(e);
    };

    const handleScroll = () => {
      if (lastEventRef.current) {
        updateCursor(lastEventRef.current);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [targetRef]);

  if (!visible) return null;

  return (
    <motion.div
      className={`pointer-events-none absolute z-50 ${className}`}
      animate={{ x: pos.x - size / 2, y: pos.y - size / 2 }}
      transition={{ type: "spring", stiffness: 500, damping: 70 }}
      style={{ width: size, height: size, borderRadius: "50%", position: "absolute" }}
    >
      {children}
    </motion.div>
  );
};

export default CustomCursor;
