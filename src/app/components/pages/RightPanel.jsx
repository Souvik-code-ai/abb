import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  MapPin,
  Clock,
  Trophy,
  Star,
  BookOpen,
  ChevronRight,
  Users,
  Zap,
  Award,
  ExternalLink,
  TrendingUp,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const UPCOMING_EVENTS = [
  {
    id: "e1",
    title: "Kolkata Music Festival",
    date: "Dec 15, 2025",
    location: "Salt Lake Stadium",
    category: "Concert",
    attendees: "12K+",
    thumb:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&h=200&fit=crop&auto=format",
    daysLeft: 14,
    accent: "#C9963A",
  },
  {
    id: "e2",
    title: "Brand Activation Summit",
    date: "Jan 8, 2026",
    location: "Hyatt Regency, Delhi",
    category: "Corporate",
    attendees: "2K+",
    thumb:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=200&fit=crop&auto=format",
    daysLeft: 38,
    accent: "#60a5fa",
  },
  {
    id: "e3",
    title: "Goa Sunburn Festival",
    date: "Jan 27, 2026",
    location: "Vagator Beach, Goa",
    category: "Festival",
    attendees: "30K+",
    thumb:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=200&h=200&fit=crop&auto=format",
    daysLeft: 57,
    accent: "#f472b6",
  },
  {
    id: "e4",
    title: "India Sports Conclave",
    date: "Feb 14, 2026",
    location: "NSCI Dome, Mumbai",
    category: "Sports",
    attendees: "5K+",
    thumb:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=200&h=200&fit=crop&auto=format",
    daysLeft: 75,
    accent: "#34d399",
  },
];

const CASE_STUDIES = [
  {
    id: "c1",
    title: "How We Managed 40K at KMF 2024",
    category: "Festival Management",
    outcome: "Zero incidents · 40,000 attendees",
    readTime: "8 min",
    icon: TrendingUp,
    accent: "#C9963A",
    thumb:
      "https://images.unsplash.com/photo-1562649268-bd8fa4cf7ad7?w=200&h=120&fit=crop&auto=format",
  },
  {
    id: "c2",
    title: "Pan-India Brand Activation in 8 Cities",
    category: "Brand Strategy",
    outcome: "3.4× conversion vs digital spend",
    readTime: "6 min",
    icon: Zap,
    accent: "#60a5fa",
    thumb:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=200&h=120&fit=crop&auto=format",
  },
  {
    id: "c3",
    title: "National Business Summit 2024",
    category: "Corporate Events",
    outcome: "500 leaders · 2-day seamless execution",
    readTime: "5 min",
    icon: Users,
    accent: "#a78bfa",
    thumb:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=200&h=120&fit=crop&auto=format",
  },
];

const AWARDS = [
  {
    id: "a1",
    title: "Best BTL Agency of the Year",
    org: "Event Marketing Awards India",
    year: "2023",
    badge: "National",
    icon: Trophy,
    badgeStyle: { bg: "#FAEEDA", color: "#854F0B" },
  },
  {
    id: "a2",
    title: "Excellence in Brand Activation",
    org: "EEMA India",
    year: "2022 & 2023",
    badge: "2× winner",
    icon: Star,
    badgeStyle: { bg: "#E1F5EE", color: "#0F6E56" },
  },
  {
    id: "a3",
    title: "Top 10 Event Companies",
    org: "EventFaqs Media",
    year: "2021–2023",
    badge: "3× listed",
    icon: Award,
    badgeStyle: { bg: "#EEEDFE", color: "#534AB7" },
  },
  {
    id: "a4",
    title: "Best Festival Management",
    org: "Abby Awards · Goafest",
    year: "2022",
    badge: "Gold",
    icon: CheckCircle,
    badgeStyle: { bg: "#FAECE7", color: "#993C1D" },
  },
  {
    id: "a5",
    title: "ISO 9001:2015 Certified",
    org: "Quality Management Systems",
    year: "Since 2018",
    badge: "Certified",
    icon: BookOpen,
    badgeStyle: { bg: "#E6F1FB", color: "#185FA5" },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION HEADER — reusable
// ─────────────────────────────────────────────────────────────────────────────
function SectionHeader({ icon: Icon, title, action, onAction }) {
  return (
    <div className="flex items-center justify-between px-5 pt-5 pb-4">
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-lime-700 to-primary flex items-center justify-center shadow-sm">
          <Icon size={13} className="text-white" />
        </div>
        <span
          style={{ fontFamily: "var(--font-heading)" }}
          className="text-[13px] font-bold text-foreground tracking-wide"
        >
          {title}
        </span>
      </div>
      {action && (
        <button
          onClick={onAction}
          className="flex items-center gap-1 text-[11px] font-semibold text-primary hover:text-primary/80 transition-colors group"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {action}
          <ArrowUpRight
            size={12}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </button>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WIDGET 1 — Upcoming Events
// ─────────────────────────────────────────────────────────────────────────────
function UpcomingEvents({ navigate }) {
  return (
    <div className="bg-card overflow-hidden ">
      <SectionHeader
        icon={Calendar}
        title="Upcoming Events"
        action="See all"
        onAction={() => navigate?.("festival")}
      />

      <div className="px-3 pb-3 flex flex-col gap-2">
        {UPCOMING_EVENTS.map((ev, i) => (
          <motion.div
            key={ev.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07, duration: 0.35 }}
            className="group relative flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer overflow-hidden transition-all duration-200 hover:shadow-md"
            style={{ background: "var(--secondary)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = ev.accent + "12")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--secondary)")
            }
          >
            {/* Left accent bar */}
            <div
              className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full transition-all duration-200"
              style={{ background: ev.accent }}
            />

            {/* Thumbnail */}
            <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 ml-2">
              <img
                src={ev.thumb}
                alt={ev.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p
                style={{ fontFamily: "var(--font-heading)" }}
                className="text-[12px] font-bold text-foreground leading-tight truncate"
              >
                {ev.title}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <Clock
                  size={9}
                  style={{ color: ev.accent }}
                  className="flex-shrink-0"
                />
                <span
                  className="text-[10px] text-foreground/50"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {ev.date}
                </span>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <MapPin
                  size={9}
                  style={{ color: ev.accent }}
                  className="flex-shrink-0"
                />
                <span
                  className="text-[10px] text-foreground/50 truncate"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {ev.location}
                </span>
              </div>
            </div>

            {/* Right: days + attendees */}
            <div className="flex-shrink-0 flex flex-col items-end gap-1.5">
              <div
                className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: ev.accent, color: "#080808" }}
              >
                {ev.daysLeft}d left
              </div>
              <div
                className="text-[10px] font-semibold"
                style={{ color: ev.accent, fontFamily: "var(--font-sans)" }}
              >
                {ev.attendees}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-4 pb-4 pt-1">
        <button
          onClick={() => navigate?.("festival")}
          className="w-full py-2.5 rounded-xl text-[12px] font-semibold transition-all duration-200 hover:shadow-md active:scale-[0.98]"
          style={{
            fontFamily: "var(--font-heading)",
            background: "linear-gradient(to right, #4d7c0f, var(--primary))",
            color: "var(--primary-foreground)",
            letterSpacing: "0.04em",
          }}
        >
          View All Events →
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WIDGET 2 — Case Studies
// ─────────────────────────────────────────────────────────────────────────────
function CaseStudies({ navigate }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-card overflow-hidden ">
      <SectionHeader
        icon={BookOpen}
        title="Case Studies"
        action="Read all"
        onAction={() => navigate?.("blog")}
      />

      <div className="px-3 pb-3 flex flex-col gap-2.5">
        {CASE_STUDIES.map((cs, i) => (
          <motion.div
            key={cs.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
            onHoverStart={() => setHovered(cs.id)}
            onHoverEnd={() => setHovered(null)}
            className="relative rounded-xl overflow-hidden cursor-pointer"
            style={{ height: "92px" }}
          >
            {/* BG image */}
            <img
              src={cs.thumb}
              alt={cs.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
              style={{
                transform: hovered === cs.id ? "scale(1.07)" : "scale(1)",
              }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />

            {/* Content */}
            <div className="relative h-full flex items-center gap-3 px-3.5">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm"
                style={{
                  background: cs.accent + "30",
                  border: `1px solid ${cs.accent}40`,
                }}
              >
                <cs.icon size={15} style={{ color: cs.accent }} />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  style={{ fontFamily: "var(--font-heading)" }}
                  className="text-[11.5px] font-bold text-white leading-tight line-clamp-2"
                >
                  {cs.title}
                </p>
                {/* <p
                  className="text-[9.5px] mt-1 font-medium"
                  style={{ color: cs.accent, fontFamily: "var(--font-sans)" }}
                >
                  {cs.outcome}
                </p> */}
              </div>
              <div className="flex-shrink-0 flex flex-col items-end gap-2">
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                  style={{
                    background: cs.accent + "30",
                    color: cs.accent,
                    border: `1px solid ${cs.accent}40`,
                  }}
                >
                  {cs.readTime}
                </span>
                <ExternalLink size={11} className="text-white/40" />
              </div>
            </div>

            {/* Bottom shimmer on hover */}
            {hovered === cs.id && (
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(to right, transparent, ${cs.accent}, transparent)`,
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className="px-4 pb-4 pt-1">
        <button
          onClick={() => navigate?.("blog")}
          className="w-full py-2.5 rounded-xl text-[12px] font-semibold border border-border hover:border-primary/40 hover:bg-primary/5 text-foreground transition-all duration-200"
          style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.04em" }}
        >
          All Case Studies →
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WIDGET 3 — Awards & Achievements
// ─────────────────────────────────────────────────────────────────────────────
function AwardsAchievements() {
  const [activeIdx, setActiveIdx] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(
      () => setActiveIdx((i) => (i + 1) % AWARDS.length),
      2800,
    );
    return () => clearInterval(timerRef.current);
  }, []);

  const stats = [
    { value: "48", label: "Awards" },
    { value: "25+", label: "Years" },
    { value: "2M+", label: "Reached" },
  ];

  return (
    <div className="bg-card  overflow-hidden ">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-lime-700 to-primary flex items-center justify-center shadow-sm">
            <Trophy size={13} className="text-white" />
          </div>
          <span
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-[13px] font-bold text-foreground tracking-wide"
          >
            Awards & Achievements
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span
            className="text-[10px] text-primary font-semibold"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Live
          </span>
        </div>
      </div>

      {/* Stats strip — ABOVE spotlight */}
      {/* <div className="grid grid-cols-3 gap-px mx-4 mb-4 rounded-xl overflow-hidden border border-border">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center py-3 bg-secondary hover:bg-primary/8 transition-colors"
          >
            <span
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-[16px] font-bold text-primary leading-none"
            >
              {value}
            </span>
            <span
              className="text-[9px] text-foreground/45 mt-0.5 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {label}
            </span>
          </div>
        ))}
      </div> */}

      {/* Animated spotlight card */}
      <div className="px-4 pb-3">
        <div
          className="relative rounded-xl overflow-hidden p-4 min-h-[80px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(163,230,53,0.12) 0%, rgba(77,124,15,0.08) 50%, transparent 100%)",
            border: "1px solid rgba(163,230,53,0.2)",
          }}
        >
          {/* Subtle corner glow */}
          <div
            className="absolute top-0 right-0 w-16 h-16 rounded-full opacity-20 blur-2xl"
            style={{ background: "var(--primary)" }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-3 relative"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: AWARDS[activeIdx].badgeStyle.bg }}
              >
                {(() => {
                  const Icon = AWARDS[activeIdx].icon;
                  return (
                    <Icon
                      size={18}
                      style={{ color: AWARDS[activeIdx].badgeStyle.color }}
                    />
                  );
                })()}
              </div>
              <div className="flex-1 min-w-0 pr-2">
                <p
                  style={{ fontFamily: "var(--font-heading)" }}
                  className="text-[12.5px] font-bold text-foreground leading-tight"
                >
                  {AWARDS[activeIdx].title}
                </p>
                <p
                  className="text-[10px] text-foreground/50 mt-1"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {AWARDS[activeIdx].org}
                </p>
              </div>
              <span
                className="text-[10px] font-bold px-2 py-1 rounded-lg flex-shrink-0"
                style={{
                  background: AWARDS[activeIdx].badgeStyle.bg,
                  color: AWARDS[activeIdx].badgeStyle.color,
                }}
              >
                {AWARDS[activeIdx].badge}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="flex gap-1 mt-3">
            {AWARDS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="h-[3px] rounded-full transition-all duration-300 border-none p-0 cursor-pointer"
                style={{
                  width: i === activeIdx ? "20px" : "5px",
                  background:
                    i === activeIdx ? "var(--primary)" : "rgba(163,230,53,0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full awards list */}
      <div className="px-3 pb-4 flex flex-col gap-1.5">
        {AWARDS.map((award, i) => (
          <motion.button
            key={award.id}
            onClick={() => setActiveIdx(i)}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 border"
            style={{
              background:
                activeIdx === i ? "rgba(163,230,53,0.08)" : "transparent",
              borderColor:
                activeIdx === i ? "rgba(163,230,53,0.3)" : "transparent",
            }}
            onMouseEnter={(e) => {
              if (activeIdx !== i)
                e.currentTarget.style.background = "var(--secondary)";
            }}
            onMouseLeave={(e) => {
              if (activeIdx !== i)
                e.currentTarget.style.background = "transparent";
            }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: award.badgeStyle.bg }}
            >
              <award.icon size={13} style={{ color: award.badgeStyle.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <p
                style={{ fontFamily: "var(--font-heading)" }}
                className="text-[11px] font-semibold text-foreground leading-tight truncate"
              >
                {award.title}
              </p>
              <p
                className="text-[9px] text-foreground/40 mt-0.5"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {award.year}
              </p>
            </div>
            <span
              className="text-[9px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0"
              style={{
                background: award.badgeStyle.bg,
                color: award.badgeStyle.color,
              }}
            >
              {award.badge}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT — natural height, no viewport clamp
// ─────────────────────────────────────────────────────────────────────────────
export function RightPanel({ navigate }) {
  return (
    <aside className="hidden xl:flex flex-col gap-4 w-[300px] flex-shrink-0">
      {/*
        ── No sticky / max-h / overflow-y-auto here ──
        Panel grows naturally with content.
        Sticky top-4 only if you want it to follow scroll — removed per request.
      */}
      <div className="flex flex-col gap-4 pb-8 pr-6">
        <UpcomingEvents navigate={navigate} />
        <CaseStudies navigate={navigate} />
        <AwardsAchievements />
      </div>
    </aside>
  );
}
