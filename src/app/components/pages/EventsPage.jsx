import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Calendar, MapPin, ChevronRight } from "lucide-react";
import { NextSection } from "./NextSection";
// ── Categories with one cover image each ──────────────────────────────────────
const EVENTS = [
  {
    id: 1,
    type: "Cultural",
    status: "upcoming",
    name: "Durga Puja Celebration",
    date: "12 Oct 2026",
    location: "Kolkata",
    attendees: 450,
    image:
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600&h=400&fit=crop",
  },

  {
    id: 2,
    type: "Cultural",
    status: "expired",
    name: "Heritage Dance Night",
    date: "18 Nov 2023",
    location: "Mumbai",
    attendees: 320,
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
  },

  {
    id: 5,
    type: "Product Launch",
    status: "upcoming",
    name: "EV SUV Grand Reveal",
    date: "8 Feb 2027",
    location: "Pune",
    attendees: 580,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
  },

  {
    id: 12,
    type: "Conference",
    status: "expired",
    name: "Innovation Tech Conference",
    date: "3 Mar 2024",
    location: "Mumbai",
    attendees: 720,
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
  },

  {
    id: 15,
    type: "Tata Bandhan",
    status: "upcoming",
    name: "Tata Bandhan Family Day",
    date: "26 Jan 2027",
    location: "Jamshedpur",
    attendees: 610,
    image:
      "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&h=400&fit=crop",
  },

  {
    id: 18,
    type: "Zero Festival",
    status: "upcoming",
    name: "Zero Festival Opening Gala",
    date: "1 Dec 2026",
    location: "Kolkata",
    attendees: 870,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
  },
];
function EventCard({ event, showType }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <div className="relative">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-60 object-cover"
        />

        {showType && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-lime-600 text-white text-xs font-semibold">
              {event.type}
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-sans text-lg font-semibold tracking-wide text-foreground line-clamp-1">
          {event.name}
        </h3>

        <div className="mt-3 space-y-2 text-sm text-muted-foreground">
          <div>📅 {event.date}</div>
          <div>📍 {event.location}</div>
          <div>👥 {event.attendees} Attendees</div>
        </div>
      </div>
    </motion.div>
  );
}
function ProgressItem({ title, value }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span>{title}</span>
        <span>{value}%</span>
      </div>

      <div className="h-3 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-lime-600 rounded-full"
        />
      </div>
    </div>
  );
}
// ── Lightbox ───────────────────────────────────────────────────────────────────
function EventHighlights() {
  const featuredEvents = EVENTS.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Left: Progress Metrics */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold font-sans">Event Highlights</h2>

          <ProgressItem title="Client Satisfaction" value={95} />
          <ProgressItem title="On-Time Delivery" value={92} />
          <ProgressItem title="Repeat Clients" value={88} />
        </div>

        {/* Right: Event Gallery */}
        <div>
          <h2 className="text-2xl font-bold mb-6 font-sans">Event Gallery</h2>

          <div className="grid grid-cols-2 gap-4">
            {featuredEvents.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-2xl group"
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-3">
                  <p className="text-white text-sm font-semibold">
                    {event.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Category Detail View ───────────────────────────────────────────────────────
// function CategoryDetail({ category, onBack }) {
//   const events = EVENTS[category.id] || [];
//   const [lightboxEvent, setLightboxEvent] = useState(null);

//   return (
//     <motion.div
//       className="w-full min-h-screen bg-background"
//       initial={{ opacity: 0, x: 40 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: 40 }}
//       transition={{ duration: 0.25 }}
//     >
//       {/* Header with Breadcrumb */}
//       <div className="px-6 pt-6 pb-4 border-b border-border">
//         {/* Breadcrumb trail */}
//         <nav
//           className="flex items-center gap-2 mb-4 px-4 py-2 rounded-xl w-fit"
//           style={{
//             background: "rgba(255,255,255,0.05)",
//             border: "1px solid rgba(255,255,255,0.1)",
//           }}
//           aria-label="Breadcrumb"
//         >
//           <motion.button
//             onClick={onBack}
//             whileTap={{ scale: 0.95 }}
//             whileHover={{ scale: 1.03 }}
//             className="flex items-center gap-1.5 transition-colors group"
//           >
//             <span
//               style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.06em" }}
//               className="text-sm font-semibold transition-colors"
//               onMouseEnter={(e) => (e.target.style.color = "#c8883c")}
//               onMouseLeave={(e) =>
//                 (e.target.style.color = "rgba(255,255,255,0.7)")
//               }
//               // inline style so it always renders visible
//               // className color can be overridden by theme
//             >
//               <span style={{ color: "rgba(255,255,255,0.7)" }}>Events</span>
//             </span>
//           </motion.button>

//           <ChevronRight
//             size={14}
//             style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }}
//           />

//           <span
//             style={{
//               fontFamily: "'Cinzel', serif",
//               letterSpacing: "0.06em",
//               color: "#c8883c",
//               fontSize: "0.875rem",
//               fontWeight: 600,
//             }}
//           >
//             {category.label}
//           </span>
//         </nav>

//         {/* Page title row */}
//         <div className="flex items-center gap-3">
//           <motion.button
//             onClick={onBack}
//             whileTap={{ scale: 0.9 }}
//             className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
//             style={{
//               background: "rgba(255,255,255,0.06)",
//               border: "1px solid rgba(255,255,255,0.1)",
//             }}
//             aria-label="Back to Events"
//           >
//             <ArrowLeft size={18} className="text-foreground" />
//           </motion.button>

//           <div>
//             <h2
//               style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.05em" }}
//               className="text-xl font-bold text-foreground leading-tight"
//             >
//               {category.label}
//             </h2>
//             <p className="text-muted-foreground text-xs mt-0.5">
//               {events.length} {events.length === 1 ? "event" : "events"} found
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Events grid */}
//       <div className="px-4 py-6">
//         <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {events.map((event, i) => (
//             <motion.div
//               key={event.id}
//               className="group rounded-2xl overflow-hidden cursor-pointer"
//               style={{
//                 border: "1px solid rgba(255,255,255,0.07)",
//                 boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
//               }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.06, duration: 0.3 }}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => setLightboxEvent(event)}
//             >
//               {/* Image */}
//               <div className="relative aspect-[4/3] overflow-hidden">
//                 <img
//                   src={event.url}
//                   alt={event.name}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//               </div>

//               {/* Info below image */}
//               <div
//                 className="px-4 py-3"
//                 style={{
//                   background: "rgba(255,255,255,0.03)",
//                   borderTop: "1px solid rgba(255,255,255,0.06)",
//                 }}
//               >
//                 <p
//                   style={{ fontFamily: "'Cinzel', serif" }}
//                   className="text-foreground text-sm font-semibold leading-snug line-clamp-1"
//                 >
//                   {event.name}
//                 </p>
//                 <div className="flex items-center gap-3 mt-1.5 flex-wrap">
//                   <span className="flex items-center gap-1 text-muted-foreground text-xs">
//                     <Calendar
//                       size={11}
//                       className="flex-shrink-0"
//                       style={{ color: "#c8883c" }}
//                     />
//                     {event.date}
//                   </span>
//                   <span className="flex items-center gap-1 text-muted-foreground text-xs">
//                     <MapPin
//                       size={11}
//                       className="flex-shrink-0"
//                       style={{ color: "#c8883c" }}
//                     />
//                     {event.location}
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {lightboxEvent && (
//           <Lightbox
//             event={lightboxEvent}
//             onClose={() => setLightboxEvent(null)}
//           />
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

// ── Category Grid (main view) ──────────────────────────────────────────────────
// function CategoryGrid({ onSelect }) {
//   return (
//     <motion.div
//       className="w-full min-h-screen bg-background lg:pt-0 pt-35"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.2 }}
//     >
//       {/* Heading */}
//       <div className="px-6 pt-8 pb-6">
//         <h1
//           style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.06em" }}
//           className="text-2xl font-bold text-foreground"
//         >
//           Events
//         </h1>
//         <p className="text-muted-foreground text-sm mt-1">
//           Select a category to explore
//         </p>
//       </div>

//       {/* Category cards — one cover image each */}
//       <div className="px-4 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {CATEGORIES.map((cat, i) => (
//           <motion.button
//             key={cat.id}
//             onClick={() => onSelect(cat)}
//             className="group relative rounded-2xl overflow-hidden text-left w-full"
//             style={{
//               border: "1px solid rgba(255,255,255,0.08)",
//               boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
//               aspectRatio: "4/3",
//             }}
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.07, duration: 0.35 }}
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//           >
//             {/* Cover image */}
//             <img
//               src={cat.cover}
//               alt={cat.label}
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               loading="lazy"
//             />

//             {/* Gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

//             {/* Hover tint */}
//             <div
//               className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               style={{ background: "rgba(180,120,40,0.12)" }}
//             />

//             {/* Text */}
//             <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
//               <p
//                 style={{
//                   fontFamily: "'Cinzel', serif",
//                   letterSpacing: "0.05em",
//                 }}
//                 className="text-white text-lg font-bold leading-tight"
//               >
//                 {cat.label}
//               </p>
//               <p className="text-white/55 text-xs mt-1">{cat.description}</p>

//               {/* Event count pill */}
//               <div
//                 className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-full"
//                 style={{
//                   background: "rgba(180,120,40,0.3)",
//                   border: "1px solid rgba(180,120,40,0.4)",
//                 }}
//               >
//                 <span
//                   className="text-[11px] font-semibold text-amber-300"
//                   style={{ fontFamily: "'Cinzel', serif" }}
//                 >
//                   {EVENTS[cat.id]?.length ?? 0} Events
//                 </span>
//               </div>
//             </div>
//           </motion.button>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// ── EventsSection (root) ───────────────────────────────────────────────────────
export function EventsSection({ navigate }) {
  const TABS = ["upcoming", "expired", "highlights"];

  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="w-full min-h-screen bg-background  lg:pt-0 pt-[140px]">
      {/* Heading */}
      <div className="px-6 pt-8 pb-6">
        <h1 className="font-sans text-3xl font-bold text-foreground">Events</h1>

        <p className="text-muted-foreground text-sm mt-1">
          Explore our latest events and achievements
        </p>
      </div>

      {/* WRITE THE TAB CODE HERE */}
      <div className="px-6">
        <div className="flex gap-3 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full transition-all md:text-base text-xs ${
                activeTab === tab
                  ? "bg-lime-600 text-white"
                  : "bg-white/5 text-muted-foreground"
              }`}
            >
              {tab.replace("-", " ").toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT SECTION */}

      {/* CONTENT SECTION */}
      <div className="min-[418px]:px-6 pb-8 min-[395px]:px-4 px-2">
        {activeTab === "upcoming" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS.filter((event) => event.status === "upcoming").map(
              (event) => (
                <EventCard key={event.id} event={event} showType />
              ),
            )}
          </div>
        )}

        {activeTab === "expired" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS.filter((event) => event.status === "expired").map(
              (event) => (
                <EventCard key={event.id} event={event} showType={false} />
              ),
            )}
          </div>
        )}

        {activeTab === "highlights" && <EventHighlights />}
      </div>
      <NextSection
        title="Activations"
        description="Explore brand activations, mall promotions, roadshows and experiential marketing campaigns."
        onClick={() => navigate("digital")}
      />
    </div>
  );
}
