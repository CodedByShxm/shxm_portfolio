"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";

const projects = [
  {
  num: "01",
  title: "KrisKakes",
  tags: ["Next.js", "React", "TypeScript", "UI/UX Design"],
  desc: "Modern branded website experience for Kris Kakes featuring responsive design, clean animations, and a polished visual identity focused on user engagement.",
  link: "https://www.kakesbykriskakes.com/",
  gh: "#",
  accent: "var(--color-accent)",
  year: "2025",
},
{
  num: "02",
  title: "Budge It",
  tags: ["Flutter", "Dart", "Supabase", "Provider"],
  desc: "Personal finance and budgeting application with goal tracking, scheduled transactions, budgeting calculations, and a modern mobile-first experience.",
  link: "#",
  gh: "#",
  accent: "var(--color-accent3)",
  year: "2026",
},
{
  num: "03",
  title: "Portfolio",
  tags: ["Next.js", "React", "TypeScript", "UI/UX Design"],
  desc: "Personal portfolio showcasing engineering and creative work, featuring modern UI design, responsive layouts, and smooth interactive animations.",
  link: "#",
  gh: "#",
  accent: "var(--color-accent3)",
  year: "2026",
},
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="group relative border-t border-[var(--color-line)] py-8 md:py-10 grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-4 md:gap-8 items-start hover:border-[var(--color-line2)] transition-colors duration-300"
    >
      {/* Hover bg */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 80% at 20% 50%, ${project.accent}08, transparent)` }}
      />

      {/* Number */}
      <span className="font-[family-name:var(--font-mono)] text-[0.65rem] text-[var(--color-ink3)] tracking-widest pt-1">
        {project.num}
      </span>

      {/* Main */}
      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.tags.map((t) => (
            <span key={t} className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.14em] px-2 py-0.5 border border-[var(--color-line2)] text-[var(--color-ink3)]">
              {t}
            </span>
          ))}
        </div>
        <h3
          className="font-[family-name:var(--font-display)] tracking-wider mb-3 transition-colors duration-300 group-hover:text-[var(--color-accent)]"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
        >
          {project.title}
        </h3>
        <p className="text-[var(--color-ink2)] text-sm md:text-base leading-relaxed max-w-xl">
          {project.desc}
        </p>
      </div>

      {/* Actions */}
      <div className="flex md:flex-col items-center gap-3 mt-1">
        <span className="font-[family-name:var(--font-mono)] text-[0.6rem] text-[var(--color-ink3)] tracking-widest hidden md:block mb-2">
          {project.year}
        </span>
        <a
          href={project.link}
          className="flex items-center justify-center w-9 h-9 border border-[var(--color-line2)] text-[var(--color-ink2)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-200 hover:scale-110"
          aria-label="Visit project"
        >
          <IconArrowUpRight size={15} />
        </a>
        {project.gh && (
          <a
            href={project.gh}
            className="flex items-center justify-center w-9 h-9 border border-[var(--color-line2)] text-[var(--color-ink2)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)] transition-all duration-200 hover:scale-110"
            aria-label="View source"
          >
            <IconBrandGithub size={15} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Work() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="work" className="px-6 md:px-10 lg:px-16 py-24 md:py-36">
      <div ref={titleRef} className="flex items-end justify-between mb-16 md:mb-20">
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-ink3)] block mb-3"
          >
            Selected work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-display)] leading-none tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
          >
            BUILT TO
            <br />
            <span className="text-[var(--color-ink2)]">LAST</span>
          </motion.h2>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-[family-name:var(--font-serif)] italic text-[var(--color-ink3)] text-sm md:text-base hidden sm:block mb-2"
        >
          3 projects · 2025–2026
        </motion.span>
      </div>

      <div>
        {projects.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} />
        ))}
        <div className="border-t border-[var(--color-line)]" />
      </div>
    </section>
  );
}
