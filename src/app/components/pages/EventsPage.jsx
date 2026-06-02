import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Calendar, MapPin, ChevronRight } from "lucide-react";

// ── Categories with one cover image each ──────────────────────────────────────
const CATEGORIES = [
  {
    id: "cultural",
    label: "Cultural",
    cover:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
    description: "Celebrating heritage, art & traditions",
  },
  {
    id: "launch",
    label: "Product Launch",
    cover:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
    description: "Grand reveals & brand moments",
  },
  {
    id: "rnr",
    label: "RNR & Strategy Meets",
    cover:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
    description: "Recognition, rewards & leadership summits",
  },
  {
    id: "conference",
    label: "Conference",
    cover:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
    description: "Industry forums & knowledge sessions",
  },
  {
    id: "bandhan",
    label: "Tata Bandhan",
    cover:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
    description: "Community & family celebrations",
  },
  {
    id: "zero",
    label: "Zero Festival",
    cover:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
    description: "Music, culture & zero-waste living",
  },
];

// ── All events per category ────────────────────────────────────────────────────
// Replace url, name, date, location with your real data
const EVENTS = {
  cultural: [
    {
      id: 1,
      name: "Durga Puja Celebration",
      date: "12 Oct 2024",
      location: "Kolkata",
      url: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Heritage Dance Night",
      date: "18 Nov 2023",
      location: "Mumbai",
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Folk Art Exhibition",
      date: "5 Jan 2024",
      location: "Delhi",
      url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Classical Music Evening",
      date: "22 Mar 2024",
      location: "Chennai",
      url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
    },
  ],
  launch: [
    {
      id: 5,
      name: "EV SUV Grand Reveal",
      date: "8 Feb 2024",
      location: "Pune",
      url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Smart Home Series Launch",
      date: "14 Sep 2023",
      location: "Bengaluru",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    },
    {
      id: 7,
      name: "Apparel Collection Drop",
      date: "30 Nov 2024",
      location: "Chennai",
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    },
  ],
  rnr: [
    {
      id: 8,
      name: "Annual Sales R&R 2024",
      date: "20 Jan 2024",
      location: "Goa",
      url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
    },
    {
      id: 9,
      name: "Leadership Strategy Summit",
      date: "5 Apr 2023",
      location: "Jaipur",
      url: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&h=400&fit=crop",
    },
    {
      id: 10,
      name: "Team Excellence Awards",
      date: "15 Dec 2024",
      location: "Hyderabad",
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    },
    {
      id: 11,
      name: "Q3 Strategy Offsite",
      date: "9 Aug 2024",
      location: "Shimla",
      url: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=400&fit=crop",
    },
  ],
  conference: [
    {
      id: 12,
      name: "Innovation Tech Conference",
      date: "3 Mar 2024",
      location: "Mumbai",
      url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
    },
    {
      id: 13,
      name: "Sustainability Forum 2023",
      date: "11 Jul 2023",
      location: "Delhi",
      url: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=400&fit=crop",
    },
    {
      id: 14,
      name: "Future of Work Summit",
      date: "28 Feb 2024",
      location: "Bengaluru",
      url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop",
    },
  ],
  bandhan: [
    {
      id: 15,
      name: "Tata Bandhan Family Day",
      date: "26 Jan 2024",
      location: "Jamshedpur",
      url: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&h=400&fit=crop",
    },
    {
      id: 16,
      name: "Bandhan Cultural Evening",
      date: "14 Aug 2023",
      location: "Pune",
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
    },
    {
      id: 17,
      name: "Community Felicitation",
      date: "2 Oct 2024",
      location: "Mumbai",
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
    },
  ],
  zero: [
    {
      id: 18,
      name: "Zero Festival Opening Gala",
      date: "1 Dec 2024",
      location: "Kolkata",
      url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
    },
    {
      id: 19,
      name: "Zero Waste Art Installation",
      date: "17 Feb 2023",
      location: "Delhi",
      url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
    },
    {
      id: 20,
      name: "Zero Festival Night Stage",
      date: "3 Dec 2023",
      location: "Goa",
      url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
    },
    {
      id: 21,
      name: "Green Pavilion Showcase",
      date: "5 Dec 2024",
      location: "Goa",
      url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop",
    },
  ],
};

// ── Lightbox ───────────────────────────────────────────────────────────────────
function Lightbox({ event, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[300] flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
      <motion.div
        className="relative max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={event.url}
          alt={event.name}
          className="w-full object-cover max-h-[60vh]"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent px-6 py-6">
          <p
            style={{ fontFamily: "'Cinzel', serif" }}
            className="text-white text-xl font-bold"
          >
            {event.name}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <span className="flex items-center gap-1.5 text-white/60 text-sm">
              <Calendar size={13} /> {event.date}
            </span>
            <span className="flex items-center gap-1.5 text-white/60 text-sm">
              <MapPin size={13} /> {event.location}
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all text-sm"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}

// ── Category Detail View ───────────────────────────────────────────────────────
function CategoryDetail({ category, onBack }) {
  const events = EVENTS[category.id] || [];
  const [lightboxEvent, setLightboxEvent] = useState(null);

  return (
    <motion.div
      className="w-full min-h-screen bg-background"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.25 }}
    >
      {/* Header with Breadcrumb */}
      <div className="px-6 pt-6 pb-4 border-b border-border">
        {/* Breadcrumb trail */}
        <nav
          className="flex items-center gap-2 mb-4 px-4 py-2 rounded-xl w-fit"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          aria-label="Breadcrumb"
        >
          <motion.button
            onClick={onBack}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-1.5 transition-colors group"
          >
            <span
              style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.06em" }}
              className="text-sm font-semibold transition-colors"
              onMouseEnter={(e) => (e.target.style.color = "#c8883c")}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(255,255,255,0.7)")
              }
              // inline style so it always renders visible
              // className color can be overridden by theme
            >
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Events</span>
            </span>
          </motion.button>

          <ChevronRight
            size={14}
            style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }}
          />

          <span
            style={{
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.06em",
              color: "#c8883c",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
          >
            {category.label}
          </span>
        </nav>

        {/* Page title row */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={onBack}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            aria-label="Back to Events"
          >
            <ArrowLeft size={18} className="text-foreground" />
          </motion.button>

          <div>
            <h2
              style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.05em" }}
              className="text-xl font-bold text-foreground leading-tight"
            >
              {category.label}
            </h2>
            <p className="text-muted-foreground text-xs mt-0.5">
              {events.length} {events.length === 1 ? "event" : "events"} found
            </p>
          </div>
        </div>
      </div>

      {/* Events grid */}
      <div className="px-4 py-6">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              className="group rounded-2xl overflow-hidden cursor-pointer"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setLightboxEvent(event)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={event.url}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Info below image */}
              <div
                className="px-4 py-3"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p
                  style={{ fontFamily: "'Cinzel', serif" }}
                  className="text-foreground text-sm font-semibold leading-snug line-clamp-1"
                >
                  {event.name}
                </p>
                <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                  <span className="flex items-center gap-1 text-muted-foreground text-xs">
                    <Calendar
                      size={11}
                      className="flex-shrink-0"
                      style={{ color: "#c8883c" }}
                    />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground text-xs">
                    <MapPin
                      size={11}
                      className="flex-shrink-0"
                      style={{ color: "#c8883c" }}
                    />
                    {event.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxEvent && (
          <Lightbox
            event={lightboxEvent}
            onClose={() => setLightboxEvent(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Category Grid (main view) ──────────────────────────────────────────────────
function CategoryGrid({ onSelect }) {
  return (
    <motion.div
      className="w-full min-h-screen bg-background lg:pt-0 pt-35"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Heading */}
      <div className="px-6 pt-8 pb-6">
        <h1
          style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.06em" }}
          className="text-2xl font-bold text-foreground"
        >
          Events
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Select a category to explore
        </p>
      </div>

      {/* Category cards — one cover image each */}
      <div className="px-4 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CATEGORIES.map((cat, i) => (
          <motion.button
            key={cat.id}
            onClick={() => onSelect(cat)}
            className="group relative rounded-2xl overflow-hidden text-left w-full"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
              aspectRatio: "4/3",
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.35 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Cover image */}
            <img
              src={cat.cover}
              alt={cat.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Hover tint */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(180,120,40,0.12)" }}
            />

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
              <p
                style={{
                  fontFamily: "'Cinzel', serif",
                  letterSpacing: "0.05em",
                }}
                className="text-white text-lg font-bold leading-tight"
              >
                {cat.label}
              </p>
              <p className="text-white/55 text-xs mt-1">{cat.description}</p>

              {/* Event count pill */}
              <div
                className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(180,120,40,0.3)",
                  border: "1px solid rgba(180,120,40,0.4)",
                }}
              >
                <span
                  className="text-[11px] font-semibold text-amber-300"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {EVENTS[cat.id]?.length ?? 0} Events
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

// ── EventsSection (root) ───────────────────────────────────────────────────────
export function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <AnimatePresence mode="wait">
      {selectedCategory ? (
        <CategoryDetail
          key="detail"
          category={selectedCategory}
          onBack={() => setSelectedCategory(null)}
        />
      ) : (
        <CategoryGrid key="grid" onSelect={setSelectedCategory} />
      )}
    </AnimatePresence>
  );
}
