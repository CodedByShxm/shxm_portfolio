"use client";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: "5+", label: "Years Developing Software" },
  { value: "10+", label: "Enterprise services worked on" },
  { value: "4", label: "Backend technologies used daily" },
  { value: "2", label: "Mobile & web apps built" },
];

const stack = [
  {
    category: "Languages",
    items: ["Java", "Dart", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Flutter", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "REST APIs", "Microservices", "Azure Service Bus"],
  },
  {
    category: "Database & Infra",
    items: ["MSSQL", "PostgreSQL", "Docker", "Supabase"],
  },
  {
    category: "Creative",
    items: ["UI/UX Design", "Motion Design", "Brand Identity", "Visual Design"],
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="px-6 md:px-10 lg:px-16 py-60 md:py-36">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-ink3)] block mb-4"
          >
            About
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-display)] tracking-tight leading-none mb-8"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            BOTH HALVES
            <br />
            <span className="text-[var(--color-ink2)]">ARE REAL</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-[var(--color-ink2)] leading-relaxed"
          >
            <p>
              I've spent the last eight years building infrastructure that quietly powers products people love —
              from real-time data engines to multi-tenant platforms at scale.
            </p>
            <p>
              The creative work isn't a hobby. It's how I think. Generative systems, visual composition,
              and motion have shaped how I approach architecture — constraint as canvas.
            </p>
            <p className="text-[var(--color-ink)] font-[family-name:var(--font-serif)] italic text-lg">
              "The best systems feel designed. The best art feels engineered."
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 gap-4 mt-12"
          >
            {stats.map((s) => (
              <div key={s.label} className="border border-[var(--color-line)] p-5 hover:border-[var(--color-line2)] transition-colors duration-300">
                <div className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-[var(--color-accent)] mb-1">
                  {s.value}
                </div>
                <div className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.14em] text-[var(--color-ink3)]">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Stack */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-ink3)] mb-8">
            Stack
          </p>
          <div className="space-y-0">
            {stack.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + gi * 0.08 }}
                className="border-t border-[var(--color-line)] py-5 grid grid-cols-[100px_1fr] gap-4 items-start hover:border-[var(--color-line2)] transition-colors duration-300"
              >
                <span className="font-[family-name:var(--font-mono)] text-[0.62rem] uppercase tracking-[0.14em] text-[var(--color-ink3)] pt-0.5">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-[family-name:var(--font-mono)] text-[0.7rem] text-[var(--color-ink2)] px-2.5 py-1 border border-[var(--color-line2)] hover:border-[var(--color-ink3)] hover:text-[var(--color-ink)] transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
            <div className="border-t border-[var(--color-line)]" />
          </div>

          {/* Availability block */}
          <div className="mt-10 p-6 border border-[var(--color-line)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-accent)]" />
            <div className="pl-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <span className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  Available now
                </span>
              </div>
              <p className="text-[var(--color-ink2)] text-sm leading-relaxed">
                Open to senior IC, staff, and creative/technical hybrid roles. Also taking on freelance projects with interesting constraints.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
