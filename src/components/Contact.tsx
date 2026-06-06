"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { IconArrowUpRight, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail } from "@tabler/icons-react";

const socials = [
  { icon: IconBrandGithub, label: "GitHub", href: "https://github.com/CodedByShxm" },
  { icon: IconBrandLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shemarbrownwright/" },
  { icon: IconBrandTwitter, label: "Twitter", href: "https://twitter.com/CodedByShxm" },
  { icon: IconMail, label: "Email", href: "mailto:shemrs1@gmail.com" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="px-6 md:px-10 lg:px-16 pt-24 pb-16 md:pt-36 md:pb-24 bg-[var(--color-bg2)] relative overflow-hidden">

      {/* Background ghost text */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden select-none">
        <span
          className="font-[family-name:var(--font-display)] leading-none text-transparent"
          style={{
            fontSize: "clamp(6rem, 18vw, 16rem)",
            WebkitTextStroke: "1px rgba(240,237,228,0.03)",
            transform: "translateX(10%)",
          }}
        >
          TALK
        </span>
      </div>

      <div ref={ref} className="relative z-10 max-w-3xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-ink3)] block mb-4"
        >
          Contact
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] leading-none tracking-tight mb-8"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
        >
          LET'S BUILD
          <br />
          <span className="text-[var(--color-ink2)]">SOMETHING.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-[var(--color-ink2)] text-base md:text-lg leading-relaxed mb-12 max-w-xl"
        >
          Whether it's a production system, a creative collaboration, or just a conversation worth having —
          I'm reachable and responsive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="mailto:shemrs1@gmail.com"
            className="group inline-flex items-center gap-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-[family-name:var(--font-mono)] text-[0.75rem] uppercase tracking-[0.14em] px-8 py-4 hover:bg-[#e8ff5a] transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Send an email
            <IconArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
          <a
            href="https://drive.google.com/file/d/1Ub3FdpZDxfetgTgmxbDthYPHXinHFJvy/view?usp=sharing"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-ink2)] border border-[var(--color-line2)] px-8 py-4 hover:border-[var(--color-ink2)] hover:text-[var(--color-ink)] transition-all duration-200"
          >
            Download CV
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-3"
        >
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex items-center justify-center w-10 h-10 border border-[var(--color-line2)] text-[var(--color-ink3)] hover:border-[var(--color-ink2)] hover:text-[var(--color-ink)] transition-all duration-200 hover:scale-110"
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer line */}
      <div className="border-t border-[var(--color-line)] mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.16em] text-[var(--color-ink3)]">
          © 2025 Shemar Brown-Wright. All rights reserved.
        </span>
        <span className="font-[family-name:var(--font-serif)] italic text-[var(--color-ink3)] text-sm">
          Designed & built by hand
        </span>
      </div>
    </section>
  );
}
