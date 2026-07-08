"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";

/* ------------------------------- Data ------------------------------- */

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
];

const artworks = [
  { id: 1, title: "Recursive Fields",  medium: "Generative · Processing", year: "2024", col: "col-span-1 md:col-span-2", rowSpan: 2, accent: "#d4f03c", hue: "140" },
  { id: 2, title: "Fault Lines",       medium: "Digital Painting",         year: "2024", col: "col-span-1",               rowSpan: 1, accent: "#ff6b35", hue: "20"  },
  { id: 3, title: "Entropy Study",     medium: "Generative · p5.js",       year: "2023", col: "col-span-1",               rowSpan: 1, accent: "#a78bfa", hue: "265" },
  { id: 4, title: "Signal & Noise",    medium: "Mixed Media · Digital",    year: "2023", col: "col-span-1 md:col-span-2", rowSpan: 1, accent: "#d4f03c", hue: "190" },
  { id: 5, title: "Liminal Space 07",  medium: "Photography · Edit",       year: "2024", col: "col-span-1",               rowSpan: 2, accent: "#ff6b35", hue: "300" },
];

/* ------------------------------- Cards ------------------------------- */

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
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 80% at 20% 50%, ${project.accent}08, transparent)` }}
      />

      <span className="font-[family-name:var(--font-mono)] text-[0.65rem] text-[var(--color-ink3)] tracking-widest pt-1">
        {project.num}
      </span>

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

function ArtCard({ artwork, index }: { artwork: typeof artworks[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const rowClass = artwork.rowSpan === 2 ? "row-span-2" : "row-span-1";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      className={`relative overflow-hidden group ${artwork.col} ${rowClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at ${30 + index * 13}% ${40 + index * 7}%, hsl(${artwork.hue}, 70%, 18%) 0%, transparent 65%),
            radial-gradient(ellipse 50% 80% at ${70 - index * 8}% ${60 + index * 5}%, hsl(${(Number(artwork.hue) + 60) % 360}, 50%, 12%) 0%, transparent 60%),
            hsl(${artwork.hue}, 15%, 8%)
          `,
        }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <filter id={`f${artwork.id}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter={`url(#f${artwork.id})`} />
        </svg>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 6 }, (_, i) => (
            <line key={i} x1={50 + i * 55} y1="0" x2={20 + i * 48} y2="400"
              stroke={artwork.accent} strokeWidth="0.4" strokeOpacity={0.3 + i * 0.05} />
          ))}
          <circle cx={200 + index * 20} cy={180 + index * 15} r={60 + index * 10}
            fill="none" stroke={artwork.accent} strokeWidth="0.5" strokeOpacity="0.25" />
          <circle cx={200 + index * 20} cy={180 + index * 15} r={100 + index * 8}
            fill="none" stroke={artwork.accent} strokeWidth="0.3" strokeOpacity="0.12" />
        </svg>
      </div>

      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 flex flex-col justify-end p-5 md:p-6"
        style={{ background: "linear-gradient(to top, rgba(8,8,7,0.92) 0%, rgba(8,8,7,0.4) 50%, transparent 100%)" }}
      >
        <div className="flex items-end justify-between">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.16em] text-[var(--color-ink3)] mb-1">
              {artwork.medium} · {artwork.year}
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl tracking-widest text-[var(--color-ink)]">
              {artwork.title}
            </h3>
          </div>
          <div className="flex items-center justify-center w-9 h-9 shrink-0 ml-4"
            style={{ background: artwork.accent, color: "var(--color-bg)" }}>
            <IconArrowUpRight size={15} />
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.25 }}
        className="absolute bottom-4 left-5"
      >
        <p className="font-[family-name:var(--font-mono)] text-[0.58rem] uppercase tracking-[0.16em] text-[var(--color-ink3)]">
          {artwork.title}
        </p>
      </motion.div>

      <div className="absolute top-4 right-4 w-2 h-2 rounded-full" style={{ background: artwork.accent }} />
    </motion.div>
  );
}

/* ------------------------------ Toggle ------------------------------ */

type Mode = "software" | "creative";

function ModeToggle({ mode, setMode }: { mode: Mode; setMode: (m: Mode) => void }) {
  const options: { key: Mode; label: string }[] = [
    { key: "software", label: "Software" },
    { key: "creative", label: "Creative" },
  ];

  return (
    <div
      role="tablist"
      aria-label="Portfolio category"
      className="relative inline-flex items-center border border-[var(--color-line2)] p-1 self-start"
    >
      {options.map((o) => {
        const active = mode === o.key;
        return (
          <button
            key={o.key}
            role="tab"
            aria-selected={active}
            onClick={() => setMode(o.key)}
            className={`relative z-10 font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.16em] px-5 py-2.5 transition-colors duration-200 ${
              active ? "text-[var(--color-bg)]" : "text-[var(--color-ink2)] hover:text-[var(--color-ink)]"
            }`}
          >
            {active && (
              <motion.span
                layoutId="mode-pill"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
                className="absolute inset-0 -z-10 bg-[var(--color-accent)]"
              />
            )}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------ Section ------------------------------ */

export default function Portfolio() {
  const [mode, setMode] = useState<Mode>("software");
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="work" className="px-6 md:px-10 lg:px-16 py-24 md:py-36">
      <div ref={titleRef} className="flex flex-col gap-8 mb-14 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
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
              {mode === "software" ? (
                <>
                  BUILT TO
                  <br />
                  <span className="text-[var(--color-ink2)]">LAST</span>
                </>
              ) : (
                <>
                  ART IS THE
                  <br />
                  <span className="text-[var(--color-ink2)]">OTHER HALF</span>
                </>
              )}
            </motion.h2>
          </div>
          <motion.p
            key={mode}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xs text-[var(--color-ink2)] text-sm leading-relaxed md:text-right"
          >
            {mode === "software"
              ? "Engineering-focused projects — web apps, mobile apps, and interfaces built for reliability and craft."
              : "Where code ends, the canvas begins. Generative systems, digital painting, and everything in between."}
          </motion.p>
        </div>

        <ModeToggle mode={mode} setMode={setMode} />
      </div>

      <AnimatePresence mode="wait">
        {mode === "software" ? (
          <motion.div
            key="software"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {projects.map((p, i) => (
              <ProjectCard key={p.num} project={p} index={i} />
            ))}
            <div className="border-t border-[var(--color-line)]" />
          </motion.div>
        ) : (
          <motion.div
            key="creative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3"
              style={{ gridAutoRows: "200px" }}
            >
              {artworks.map((a, i) => (
                <ArtCard key={a.id} artwork={a} index={i} />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-ink2)] border border-[var(--color-line2)] px-8 py-3.5 hover:border-[var(--color-ink2)] hover:text-[var(--color-ink)] transition-all duration-200 inline-flex items-center gap-2"
              >
                View full gallery
                <IconArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
