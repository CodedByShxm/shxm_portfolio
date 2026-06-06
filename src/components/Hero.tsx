"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { IconArrowDown } from "@tabler/icons-react";

function GlitchText({ text }: { text: string }) {
  return (
    <span className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <span
        aria-hidden
        className="absolute inset-0 text-[var(--color-accent2)] opacity-0 group-hover:opacity-100 transition-opacity duration-75"
        style={{ clipPath: "inset(30% 0 40% 0)", transform: "translate(-2px, 1px)" }}
      >
        {text}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 text-[var(--color-accent3)] opacity-0 group-hover:opacity-60 transition-opacity duration-75"
        style={{ clipPath: "inset(60% 0 10% 0)", transform: "translate(2px, -1px)" }}
      >
        {text}
      </span>
    </span>
  );
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 overflow-hidden">

      {/* Ambient background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: bgY, background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
          className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full opacity-[0.07]"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-15%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full opacity-[0.05]"
          animate={{ scale: [1, 1.08, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          style={{ background: "radial-gradient(circle, var(--color-accent3) 0%, transparent 70%)" }}
        />
      </div>

      {/* BG ghost text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <motion.span
          style={{ y: bgY, opacity, WebkitTextStroke: "1px rgba(240,237,228,0.035)" }}
          className="font-[family-name:var(--font-display)] text-[22vw] leading-none tracking-tight text-transparent select-none"
        >
          Brown-Wright
        </motion.span>
      </div>

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Hero content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        style={{ scale, opacity }}
        className="relative z-10 px-6 md:px-10 lg:px-16"
      >
        {/* Status badge */}
        <motion.div variants={fadeUp} className="mb-6 md:mb-8">
          <span className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-ink2)] border border-[var(--color-line2)] px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            Available for projects · 2025
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="font-[family-name:var(--font-display)] leading-[0.9] tracking-tight mb-4 md:mb-6"
          style={{ fontSize: "clamp(4.5rem, 14vw, 13rem)" }}
        >
          <GlitchText text="Shemar" />
          <br />
          <span className="text-[var(--color-ink2)]">
            <GlitchText text="BROWN-WRIGHT" />
          </span>
        </motion.h1>

        {/* Divider row */}
        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="h-px flex-1 max-w-[120px] bg-[var(--color-line2)]" />
          <span className="font-[family-name:var(--font-serif)] italic text-[var(--color-ink2)] text-sm md:text-base">
            Senior Software Developer & Creative
          </span>
          <div className="h-px flex-1 bg-[var(--color-line2)]" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="max-w-xl text-[var(--color-ink2)] text-base md:text-lg leading-relaxed mb-10 md:mb-14"
        >
          I build systems that feel alive — production-grade software by day,
          experimental visual art by night. Both sides inform the other.
        </motion.p>

        {/* CTA row */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-[family-name:var(--font-mono)] text-[0.75rem] uppercase tracking-[0.14em] px-6 py-3.5 hover:bg-[#e8ff5a] transition-all duration-200 hover:scale-105 active:scale-95"
          >
            View my work
            <IconArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform duration-200" />
          </a>
          <a
            href="#art"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-ink2)] border border-[var(--color-line2)] px-6 py-3.5 hover:border-[var(--color-ink2)] hover:text-[var(--color-ink)] transition-all duration-200"
          >
            Explore art
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-6 md:right-10 flex flex-col items-center gap-2"
      >
        <span className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.2em] text-[var(--color-ink3)] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[var(--color-ink3)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
