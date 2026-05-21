"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });
  const ringX = useSpring(cursorX, { stiffness: 120, damping: 22 });
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 22 });

  useEffect(() => {
    const move = (e: MouseEvent) => { cursorX.set(e.clientX); cursorY.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovered(!!el.closest("a, button, [role='button'], .hoverable"));
    };
    const down = () => setClicked(true);
    const up = () => setClicked(false);
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: springX, y: springY,
          translateX: "-50%", translateY: "-50%",
          width: clicked ? 6 : 8, height: clicked ? 6 : 8,
          background: "var(--color-accent)",
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
      {/* ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border"
        style={{
          x: ringX, y: ringY,
          translateX: "-50%", translateY: "-50%",
          width: hovered ? 52 : clicked ? 20 : 36,
          height: hovered ? 52 : clicked ? 20 : 36,
          borderColor: hovered ? "var(--color-accent)" : "rgba(212,240,60,0.35)",
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
