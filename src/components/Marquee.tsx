"use client";
import { motion } from "motion/react";

const skills = [
  "Java","Spring Boot","Java 21","REST APIs","Microservices", "Azure Service Bus", "MSSQL", "PostgreSQL", "Docker","Flutter",
  "Dart","Next.js","React","TypeScript","Supabase","System Design", "API Architecture", "Enterprise Integration", "Distributed Systems",
  "Backend Architecture","Technical Problem Solving","UI/UX Design","Creative Direction","Motion Design","Visual Design","Brand Identity",
  "Generative Design","Digital Art",
];

function Ticker({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...skills, ...skills];
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex shrink-0 gap-0"
        animate={{ x: reverse ? ["0%", "50%"] : ["-50%", "0%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((s, i) => (
          <span key={i} className="flex items-center gap-0 shrink-0">
            <span className={`font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.16em] px-5 py-3 whitespace-nowrap ${
              i % 7 === 4 ? "text-[var(--color-accent)]" : "text-[var(--color-ink3)]"
            }`}>
              {s}
            </span>
            <span className="text-[var(--color-line2)] text-xs">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="border-y border-[var(--color-line)] overflow-hidden bg-[var(--color-bg2)] py-px">
      <Ticker />
      <div className="border-t border-[var(--color-line)]">
        <Ticker reverse />
      </div>
    </div>
  );
}
