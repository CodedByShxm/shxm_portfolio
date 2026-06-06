"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { IconArrowLeft, IconArrowRight, IconBriefcase, IconCode, IconStar, IconArrowUpRight } from "@tabler/icons-react";

const timeline = [
  {
    year: "2020",
    role: "Engineering Intern",
    company: "Huawei Technologies",
    type: "work",
    tags: ["Technical Documentation", "Reporting", "Solution Design"],
    desc: "Supported engineering teams through technical documentation and performance reporting while gaining exposure to enterprise solution design.",
    detail:
      "First exposure to large-scale engineering environments. Developed an appreciation for structured problem solving, documentation, and the importance of designing systems with maintainability in mind.",
    accent: "#d4f03c",
  },
  {
    year: "2020 – 2022",
    role: "Junior Software Engineer",
    company: "Wright's Intelligence Service Ltd",
    type: "work",
    tags: ["Java", "REST APIs", "UI/UX"],
    desc: "Built backend APIs and modular components while contributing to frontend enhancements and cross-team collaboration.",
    detail:
      "Worked across both backend and frontend layers, gaining experience with production software development, code reviews, and collaborative delivery practices. Established a strong foundation in clean, maintainable application design.",
    accent: "#a78bfa",
  },
  {
    year: "2021 – 2022",
    role: "Quality Assurance Analyst",
    company: "National Commercial Bank Jamaica (NCB)",
    type: "work",
    tags: ["Integration Testing", "Regression Testing", "Banking"],
    desc: "Performed testing for large-scale banking systems and improved QA processes and documentation.",
    detail:
      "Developed a strong appreciation for reliability and quality in financial systems. Participated in integration and regression testing efforts while helping improve testing processes and reporting practices.",
    accent: "#ff6b35",
  },
  {
    year: "2022 – 2025",
    role: "Software Engineer",
    company: "Digicel Group",
    type: "work",
    tags: ["Flutter", "Spring Boot", "Azure Service Bus", "CI/CD"],
    desc: "Contributed to MyDigicel and event-driven backend services while solving concurrency challenges and improving platform performance.",
    detail:
      "Worked across mobile and backend domains, integrating Flutter applications with REST APIs and messaging services. Diagnosed multi-instance concurrency issues, supported internal and third-party integrations, and participated in CI/CD automation efforts for large-scale production systems.",
    accent: "#d4f03c",
  },
  {
    year: "2025 – Present",
    role: "Senior Software Engineer",
    company: "Digicel Group",
    type: "work",
    tags: [
      "Java 21",
      "Spring Boot",
      "Microservices",
      "Azure Service Bus",
      "Distributed Systems"
    ],
    desc: "Leading backend architecture for distributed financial services with a focus on resiliency, observability, and concurrency.",
    detail:
      "Driving the design and implementation of distributed financial systems using Spring Boot and Azure Service Bus. Introduced idempotency safeguards, database claim patterns, dead-letter handling, and structured logging to improve reliability and observability. Mentoring engineers on concurrency, fault tolerance, and system design principles.",
    accent: "#a78bfa",
  },
  {
    year: "Future",
    role: "Senior Engineer",
    company: "Building What's Next",
    type: "both",
    tags: ["System Design", "Architecture", "Full Stack"],
    desc: "Continuing to build scalable systems and solve complex engineering challenges.",
    detail:
      "Focused on growing as a senior individual contributor and architect, building systems that balance reliability, maintainability, and business impact while continuing to mentor others and drive engineering excellence.",
    accent: "#d4f03c",
  },
];

const TypeIcon = ({ type }: { type: string }) => {
  if (type === "creative") return <IconStar size={13} />;
  if (type === "both") return <IconCode size={13} />;
  return <IconBriefcase size={13} />;
};

export default function CareerTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollXProgress } = useScroll({ container: trackRef });
  const scaleX = useSpring(scrollXProgress, { stiffness: 100, damping: 30 });

  const scrollTo = (index: number) => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll<HTMLDivElement>(".tl-card");
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      setActiveIndex(index);
    }
  };

  return (
    <section id="career" className="py-24 md:py-36 overflow-hidden" style={{ background: "var(--color-bg2)" }}>

      {/* Header */}
      <div className="px-6 md:px-10 lg:px-16 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-ink3)] block mb-3"
          >
            Career
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-display)] leading-none tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
          >
            THE JOURNEY
            <br />
            <span className="text-[var(--color-ink2)]">SO FAR</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 self-start md:self-auto md:mb-2"
        >
          <button
            onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="flex items-center justify-center w-10 h-10 border border-[var(--color-line2)] text-[var(--color-ink2)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)] transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
          >
            <IconArrowLeft size={15} />
          </button>
          <span className="font-[family-name:var(--font-mono)] text-[0.65rem] text-[var(--color-ink3)] tabular-nums w-12 text-center">
            {String(activeIndex + 1).padStart(2, "0")} / {String(timeline.length).padStart(2, "0")}
          </span>
          <button
            onClick={() => scrollTo(Math.min(timeline.length - 1, activeIndex + 1))}
            disabled={activeIndex === timeline.length - 1}
            className="flex items-center justify-center w-10 h-10 border border-[var(--color-line2)] text-[var(--color-ink2)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)] transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
          >
            <IconArrowRight size={15} />
          </button>
        </motion.div>
      </div>

      {/* ── TIMELINE TRACK ── */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8"
        style={{ scrollbarWidth: "none", gap: "0" }}
        onScroll={() => {
          if (!trackRef.current) return;
          const cards = Array.from(trackRef.current.querySelectorAll<HTMLDivElement>(".tl-card"));
          const center = trackRef.current.scrollLeft + trackRef.current.clientWidth / 2;
          let closest = 0, minDist = Infinity;
          cards.forEach((card, i) => {
            const dist = Math.abs((card.offsetLeft + card.offsetWidth / 2) - center);
            if (dist < minDist) { minDist = dist; closest = i; }
          });
          setActiveIndex(closest);
        }}
      >
        {/* Leading spacer */}
        <div className="shrink-0 w-6 md:w-10 lg:w-16" />

        {timeline.map((item, i) => {
          const isHovered = hoveredIndex === i;
          const isActive = activeIndex === i;
          const isLast = i === timeline.length - 1;

          return (
            <div
              key={i}
              className="tl-card shrink-0 snap-center flex flex-col"
              style={{ width: "clamp(260px, 30vw, 360px)", paddingRight: isLast ? 0 : "clamp(32px, 4vw, 64px)" }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => scrollTo(i)}
            >

              {/* ── Year label ── */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="mb-4"
              >
                <span
                  className="font-[family-name:var(--font-display)] tracking-widest leading-none block"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.1rem)",
                    color: item.accent,
                  }}
                >
                  {item.year}
                </span>
              </motion.div>

              {/* ── Timeline spine: dot + connector line ── */}
              <div className="flex items-center mb-5" style={{ marginRight: isLast ? 0 : "0" }}>
                {/* Dot */}
                <motion.div
                  animate={{
                    scale: isHovered || isActive ? 1.4 : 1,
                    backgroundColor: isHovered || isActive ? item.accent : "var(--color-ink3)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="w-3 h-3 rounded-full shrink-0 z-10"
                  style={{ boxShadow: isHovered ? `0 0 12px ${item.accent}80` : "none" }}
                />
                {/* Connector line to next card */}
                {!isLast && (
                  <div className="relative flex-1 h-px mx-0" style={{ background: "var(--color-line)" }}>
                    <motion.div
                      className="absolute inset-y-0 left-0 h-full origin-left"
                      animate={{ scaleX: isActive || isHovered ? 1 : 0, backgroundColor: item.accent }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                )}
              </div>

              {/* ── Card ── */}
              <motion.div
                animate={{
                  borderColor: isHovered ? item.accent : isActive ? `${item.accent}60` : "var(--color-line)",
                  y: isHovered ? -6 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative border flex flex-col overflow-hidden"
                style={{
                  background: "var(--color-bg3)",
                  minHeight: "260px",
                  cursor: "pointer",
                }}
              >
                {/* Glow */}
                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 80% 70% at 20% 30%, ${item.accent}12, transparent)` }}
                />

                {/* Card top accent bar */}
                <motion.div
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  initial={{ scaleX: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 left-0 right-0 h-px origin-left"
                  style={{ background: item.accent }}
                />

                {/* Static content */}
                <div className="relative z-10 p-5 md:p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="flex items-center justify-center w-7 h-7 shrink-0"
                      style={{ background: `${item.accent}1a`, color: item.accent }}
                    >
                      <TypeIcon type={item.type} />
                    </div>
                    <motion.div
                      animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 4 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: item.accent }}
                    >
                      <IconArrowUpRight size={14} />
                    </motion.div>
                  </div>

                  <h3
                    className="font-[family-name:var(--font-display)] tracking-wider text-[var(--color-ink)] leading-tight mb-1"
                    style={{ fontSize: "clamp(1.05rem, 2vw, 1.35rem)" }}
                  >
                    {item.role}
                  </h3>
                  <p className="font-[family-name:var(--font-serif)] italic text-[var(--color-ink3)] text-sm mb-4">
                    {item.company}
                  </p>

                  {/* Short desc always visible */}
                  <p className="text-[var(--color-ink2)] text-sm leading-relaxed flex-1">
                    {item.desc}
                  </p>

                  {/* ── Expanded detail on hover ── */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div
                          className="pt-4 border-t"
                          style={{ borderColor: `${item.accent}30` }}
                        >
                          <p className="text-[var(--color-ink2)] text-sm leading-relaxed mb-4">
                            {item.detail}
                          </p>
                          {/* Tags appear in expanded state */}
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.14em] px-2.5 py-1 border border-[var(--color-line2)] text-[var(--color-ink3)] hover:border-[var(--color-ink3)] hover:text-[var(--color-ink)] transition-all duration-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  initial={{ scaleX: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 right-0 h-px origin-left"
                  style={{ background: item.accent }}
                />
              </motion.div>
            </div>
          );
        })}

        {/* Trailing spacer */}
        <div className="shrink-0 w-6 md:w-10 lg:w-16" />
      </div>

      {/* Progress bar */}
      <div className="relative mx-6 md:mx-10 lg:mx-16 h-px mt-8 overflow-hidden" style={{ background: "var(--color-line)" }}>
        <motion.div
          className="absolute inset-y-0 left-0 origin-left"
          style={{ scaleX, background: "var(--color-accent)" }}
        />
      </div>

      {/* Dot nav */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {timeline.map((item, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to ${item.year}`}
            style={{
              height: "5px",
              borderRadius: "3px",
              width: activeIndex === i ? "22px" : "5px",
              background: activeIndex === i ? item.accent : "var(--color-ink3)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}