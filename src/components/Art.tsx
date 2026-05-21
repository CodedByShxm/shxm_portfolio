"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { IconArrowUpRight } from "@tabler/icons-react";

const artworks = [
  { id: 1, title: "Recursive Fields",  medium: "Generative · Processing", year: "2024", col: "col-span-1 md:col-span-2", rowSpan: 2, accent: "#d4f03c", hue: "140" },
  { id: 2, title: "Fault Lines",       medium: "Digital Painting",         year: "2024", col: "col-span-1",               rowSpan: 1, accent: "#ff6b35", hue: "20"  },
  { id: 3, title: "Entropy Study",     medium: "Generative · p5.js",       year: "2023", col: "col-span-1",               rowSpan: 1, accent: "#a78bfa", hue: "265" },
  { id: 4, title: "Signal & Noise",    medium: "Mixed Media · Digital",    year: "2023", col: "col-span-1 md:col-span-2", rowSpan: 1, accent: "#d4f03c", hue: "190" },
  { id: 5, title: "Liminal Space 07",  medium: "Photography · Edit",       year: "2024", col: "col-span-1",               rowSpan: 2, accent: "#ff6b35", hue: "300" },
];

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
      {/* Generative placeholder art — fills the grid cell */}
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

      {/* Hover overlay */}
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

      {/* Always-visible label */}
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

export default function Art() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="art" className="px-6 md:px-10 lg:px-16 py-24 md:py-36 bg-[var(--color-bg2)]">
      <div ref={titleRef} className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-ink3)] block mb-3"
          >
            Creative work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-display)] leading-none tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
          >
            ART IS THE
            <br />
            <span className="text-[var(--color-ink2)]">OTHER HALF</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xs text-[var(--color-ink2)] text-sm leading-relaxed md:text-right"
        >
          Where code ends, the canvas begins. Generative systems, digital painting, and everything in between.
        </motion.p>
      </div>

      {/* Grid: fixed row height, no aspect-square on children — rows control height cleanly */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3"
        style={{ gridAutoRows: "200px" }}
      >
        {artworks.map((a, i) => (
          <ArtCard key={a.id} artwork={a} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 flex justify-center"
      >
        <a
          href="#"
          className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-ink2)] border border-[var(--color-line2)] px-8 py-3.5 hover:border-[var(--color-ink2)] hover:text-[var(--color-ink)] transition-all duration-200 inline-flex items-center gap-2"
        >
          View full gallery
          <IconArrowUpRight size={13} />
        </a>
      </motion.div>
    </section>
  );
}