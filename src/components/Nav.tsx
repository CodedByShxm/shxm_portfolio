"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconArrowUpRight } from "@tabler/icons-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Art", href: "#art" },
  { label: "Career", href: "#career" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 transition-all duration-500 ${
          scrolled ? "border-b border-[var(--color-line)] backdrop-blur-xl bg-[rgba(8,8,7,0.85)]" : ""
        }`}
      >
        <a href="#" className="font-[family-name:var(--font-display)] text-xl tracking-widest text-[var(--color-ink)]">
          S.<span className="text-[var(--color-accent)]">B</span>W
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.14em] text-[var(--color-ink2)] hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.14em] bg-[var(--color-accent)] text-[var(--color-bg)] px-4 py-2 hover:bg-[#e8ff5a] transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Hire me <IconArrowUpRight size={12} />
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block w-6 h-px bg-[var(--color-ink)] origin-center" />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-6 h-px bg-[var(--color-ink)]" />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block w-6 h-px bg-[var(--color-ink)] origin-center" />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-bg2)] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-[family-name:var(--font-display)] text-5xl tracking-widest text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
