// import { useEffect, useRef, useState, useCallback } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { X, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// // ─── Carousel slides — swap in real video URLs via `video` key ───────────────
// const SLIDES = [
//   {
//     id: "s1",
//     type: "image",
//     src: "https://images.unsplash.com/photo-1562649268-bd8fa4cf7ad7?w=800&h=440&fit=crop&auto=format",
//     badge: "National",
//     badgeStyle: { background: "#FAEEDA", color: "#854F0B" },
//     title: "Best BTL Agency of the Year",
//     sub: "Event Marketing Awards India · 2023",
//   },
//   {
//     id: "s2",
//     type: "image",
//     src: "https://images.unsplash.com/photo-1580558036732-53b6b3574160?w=800&h=440&fit=crop&auto=format",
//     badge: "2× winner",
//     badgeStyle: { background: "#E1F5EE", color: "#0F6E56" },
//     title: "Excellence in Brand Activation",
//     sub: "EEMA India · 2022 & 2023",
//   },
//   {
//     id: "s3",
//     type: "image",
//     src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=440&fit=crop&auto=format",
//     badge: "3× listed",
//     badgeStyle: { background: "#EEEDFE", color: "#534AB7" },
//     title: "Top 10 Event Companies in India",
//     sub: "EventFaqs Media · 2021, 2022, 2023",
//   },
//   {
//     id: "s4",
//     type: "image",
//     src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=440&fit=crop&auto=format",
//     badge: "Gold",
//     badgeStyle: { background: "#FAECE7", color: "#993C1D" },
//     title: "Best Festival Management Campaign",
//     sub: "Abby Awards · Goafest 2022",
//   },
//   {
//     id: "s5",
//     type: "image",
//     src: "https://images.unsplash.com/photo-1600400411727-6f0fd6e10933?w=800&h=440&fit=crop&auto=format",
//     badge: "Certified",
//     badgeStyle: { background: "#E6F1FB", color: "#185FA5" },
//     title: "ISO 9001:2015 Certified",
//     sub: "Quality Management Systems · Since 2018",
//   },
// ];

// // For real videos add: { id:"s6", type:"video", src:"/your-reel.mp4", ... }

// const SLIDE_DURATION = 3000; // ms per slide

// const STATS = [
//   { label: "Awards won",    value: "48"  },
//   { label: "Cities covered", value: "50+" },
//   { label: "Lives touched",  value: "2M+" },
// ];

// // ─── Progress bar that animates over SLIDE_DURATION ──────────────────────────
// function ProgBar({ active, paused, onComplete, slideKey }) {
//   const [width, setWidth]   = useState(0);
//   const startRef            = useRef(null);
//   const rafRef              = useRef(null);
//   const pausedAt            = useRef(null);
//   const accumulatedRef      = useRef(0);

//   // reset when slide changes
//   useEffect(() => {
//     setWidth(0);
//     accumulatedRef.current = 0;
//     startRef.current       = null;
//     pausedAt.current       = null;
//     if (rafRef.current) cancelAnimationFrame(rafRef.current);
//   }, [slideKey]);

//   useEffect(() => {
//     if (!active) return;

//     if (paused) {
//       // record how far we got
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       if (startRef.current !== null) {
//         accumulatedRef.current += performance.now() - startRef.current;
//       }
//       startRef.current = null;
//       return;
//     }

//     // (re)start
//     startRef.current = performance.now();

//     const tick = (now) => {
//       const elapsed = accumulatedRef.current + (now - startRef.current);
//       const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
//       setWidth(pct);
//       if (pct < 100) {
//         rafRef.current = requestAnimationFrame(tick);
//       } else {
//         onComplete();
//       }
//     };

//     rafRef.current = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(rafRef.current);
//   }, [active, paused, slideKey]);

//   if (!active) {
//     return (
//       <div className="flex-1 h-[2px] rounded-full bg-white/20 overflow-hidden">
//         <div className="h-full bg-white/50 rounded-full" style={{ width: "100%" }} />
//       </div>
//     );
//   }

//   return (
//     <div className="flex-1 h-[2px] rounded-full bg-white/20 overflow-hidden">
//       <div
//         className="h-full bg-[#C9963A] rounded-full"
//         style={{ width: `${width}%` }}
//       />
//     </div>
//   );
// }

// // ─── Main carousel ────────────────────────────────────────────────────────────
// function Carousel() {
//   const [idx, setIdx]       = useState(0);
//   const [paused, setPaused] = useState(false);
//   const videoRefs           = useRef({});

//   const goTo = useCallback((next) => {
//     setIdx((next + SLIDES.length) % SLIDES.length);
//   }, []);

//   const next = useCallback(() => goTo(idx + 1), [idx, goTo]);
//   const prev = useCallback(() => goTo(idx - 1), [idx, goTo]);

//   // auto-play / pause videos
//   useEffect(() => {
//     SLIDES.forEach((s, i) => {
//       const el = videoRefs.current[s.id];
//       if (!el) return;
//       if (i === idx && !paused) {
//         el.currentTime = 0;
//         el.play().catch(() => {});
//       } else {
//         el.pause();
//       }
//     });
//   }, [idx, paused]);

//   const slide = SLIDES[idx];

//   return (
//     <div className="bg-[#080808] relative select-none">
//       {/* ── Progress bars ── */}
//       <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 px-3 pt-2.5">
//         {SLIDES.map((s, i) => (
//           <ProgBar
//             key={s.id}
//             slideKey={s.id}
//             active={i === idx}
//             paused={paused}
//             onComplete={next}
//           />
//         ))}
//         {/* past slides filled */}
//         {SLIDES.map((s, i) =>
//           i < idx ? (
//             <div
//               key={"past-" + s.id}
//               className="hidden"
//             />
//           ) : null
//         )}
//       </div>

//       {/* ── Slide track ── */}
//       <div className="overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slide.id}
//             initial={{ opacity: 0, scale: 1.04 }}
//             animate={{ opacity: 1,  scale: 1     }}
//             exit={{    opacity: 0,  scale: 0.97  }}
//             transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
//             className="relative h-[220px]"
//           >
//             {slide.type === "video" ? (
//               <video
//                 ref={(el) => (videoRefs.current[slide.id] = el)}
//                 src={slide.src}
//                 className="w-full h-full object-cover"
//                 muted
//                 playsInline
//                 loop={false}
//               />
//             ) : (
//               <img
//                 src={slide.src}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//                 draggable={false}
//               />
//             )}

//             {/* gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

//             {/* text overlay */}
//             <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-10">
//               <span
//                 className="text-[11px] font-medium px-2.5 py-0.5 rounded-full"
//                 style={slide.badgeStyle}
//               >
//                 {slide.badge}
//               </span>
//               <p
//                 style={{ fontFamily: "'Cinzel', serif" }}
//                 className="text-white text-[15px] font-semibold mt-2 leading-snug"
//               >
//                 {slide.title}
//               </p>
//               <p className="text-white/55 text-[11px] mt-0.5">{slide.sub}</p>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* ── Controls row ── */}
//       <div className="flex items-center justify-between px-4 py-2.5">
//         {/* dot indicators */}
//         <div className="flex items-center gap-1.5">
//           {SLIDES.map((s, i) => (
//             <button
//               key={s.id}
//               onClick={() => goTo(i)}
//               aria-label={`Go to slide ${i + 1}`}
//               className="h-[5px] rounded-full transition-all duration-300"
//               style={{
//                 width:      i === idx ? "18px" : "5px",
//                 background: i === idx ? "#C9963A" : "rgba(255,255,255,0.25)",
//               }}
//             />
//           ))}
//         </div>

//         {/* nav buttons */}
//         <div className="flex items-center gap-1">
//           <button
//             onClick={prev}
//             aria-label="Previous slide"
//             className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/35 transition-colors"
//           >
//             <ChevronLeft size={14} />
//           </button>
//           <button
//             onClick={() => setPaused((p) => !p)}
//             aria-label={paused ? "Play" : "Pause"}
//             className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/35 transition-colors"
//           >
//             {paused ? <Play size={12} /> : <Pause size={12} />}
//           </button>
//           <button
//             onClick={next}
//             aria-label="Next slide"
//             className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/35 transition-colors"
//           >
//             <ChevronRight size={14} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Modal ────────────────────────────────────────────────────────────────────
// export function AchievementsModal({ onExplore }) {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setOpen(true), 600);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           className="fixed inset-0 z-[300] flex items-center justify-center p-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.22 }}
//           style={{ backdropFilter: "blur(10px)", background: "rgba(0,0,0,0.65)" }}
//           onClick={(e) => e.target === e.currentTarget && setOpen(false)}
//         >
//           <motion.div
//             className="relative w-full max-w-[520px] rounded-2xl overflow-hidden bg-card border border-border shadow-2xl"
//             initial={{ scale: 0.91, y: 28, opacity: 0 }}
//             animate={{ scale: 1,    y: 0,  opacity: 1 }}
//             exit={{    scale: 0.94, y: 16, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 300, damping: 26 }}
//           >
//             {/* ── Carousel (replaces old dark header) ── */}
//             <Carousel />

//             {/* ── Body ── */}
//             <div className="p-5 flex flex-col gap-4">

//               {/* brand + close */}
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-900 to-[#C9963A] flex items-center justify-center flex-shrink-0">
//                   <span
//                     style={{ fontFamily: "'Cinzel', serif" }}
//                     className="text-xs font-bold text-white"
//                   >
//                     AB
//                   </span>
//                 </div>
//                 <div>
//                   <p
//                     style={{ fontFamily: "'Cinzel', serif" }}
//                     className="text-[#C9963A] text-[15px] font-semibold leading-tight"
//                   >
//                     AbyBaby Group
//                   </p>
//                   <p className="text-muted-foreground text-[10px] tracking-[0.22em] uppercase mt-0.5">
//                     India's #1 BTL Agency
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => setOpen(false)}
//                   aria-label="Close"
//                   className="ml-auto w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border/60 transition-colors"
//                 >
//                   <X size={14} />
//                 </button>
//               </div>

//               {/* stats */}
//               <div className="grid grid-cols-3 gap-2.5">
//                 {STATS.map(({ value, label }) => (
//                   <div
//                     key={label}
//                     className="bg-muted/50 rounded-xl py-3 text-center"
//                   >
//                     <p
//                       style={{ fontFamily: "'Cinzel', serif" }}
//                       className="text-[18px] font-bold text-foreground leading-none"
//                     >
//                       {value}
//                     </p>
//                     <p className="text-[11px] text-muted-foreground mt-1">
//                       {label}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA */}
//               <button
//                 onClick={() => { setOpen(false); onExplore?.(); }}
//                 style={{ fontFamily: "'Cinzel', serif" }}
//                 className="w-full py-3 bg-[#C9963A] hover:bg-[#b8842e] active:scale-[0.98] text-white rounded-xl text-[13px] font-semibold tracking-wide transition-all"
//               >
//                 Explore Our Work
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const SLIDES = [
  {
    id: "s1",
    type: "image",
    src: "https://images.unsplash.com/photo-1562649268-bd8fa4cf7ad7?w=900&h=520&fit=crop&auto=format",
    badge: "National",
    badgeStyle: { background: "#ecfccb", color: "#3f6212" },
    title: "Best BTL Agency of the Year",
    sub: "Event Marketing Awards India · 2023",
  },
  {
    id: "s2",
    type: "image",
    src: "https://images.unsplash.com/photo-1580558036732-53b6b3574160?w=900&h=520&fit=crop&auto=format",
    badge: "2× winner",
    badgeStyle: { background: "#E1F5EE", color: "#0F6E56" },
    title: "Excellence in Brand Activation",
    sub: "EEMA India · 2022 & 2023",
  },
  {
    id: "s3",
    type: "image",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&h=520&fit=crop&auto=format",
    badge: "3× listed",
    badgeStyle: { background: "#EEEDFE", color: "#534AB7" },
    title: "Top 10 Event Companies in India",
    sub: "EventFaqs Media · 2021, 2022, 2023",
  },
  {
    id: "s4",
    type: "image",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=520&fit=crop&auto=format",
    badge: "Gold",
    badgeStyle: { background: "#d9f99d", color: "#365314" },
    title: "Best Festival Management Campaign",
    sub: "Abby Awards · Goafest 2022",
  },
  {
    id: "s5",
    type: "image",
    src: "https://images.unsplash.com/photo-1600400411727-6f0fd6e10933?w=900&h=520&fit=crop&auto=format",
    badge: "Certified",
    badgeStyle: { background: "#E6F1FB", color: "#185FA5" },
    title: "ISO 9001:2015 Certified",
    sub: "Quality Management Systems · Since 2018",
  },
];

const SLIDE_DURATION = 3000;

const STATS = [
  { value: "48", label: "Awards won" },
  { value: "50+", label: "Cities covered" },
  { value: "2M+", label: "Lives touched" },
];

// ─── Progress bar ─────────────────────────────────────────────────────────────
function ProgBar({ active, paused, onComplete, slideKey, isPast }) {
  const [width, setWidth] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);
  const accumulatedRef = useRef(0);

  useEffect(() => {
    setWidth(0);
    accumulatedRef.current = 0;
    startRef.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, [slideKey]);

  useEffect(() => {
    if (!active) return;
    if (paused) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (startRef.current !== null)
        accumulatedRef.current += performance.now() - startRef.current;
      startRef.current = null;
      return;
    }
    startRef.current = performance.now();
    const tick = (now) => {
      const elapsed = accumulatedRef.current + (now - startRef.current);
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setWidth(pct);
      if (pct < 100) rafRef.current = requestAnimationFrame(tick);
      else onComplete();
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, paused, slideKey]);

  return (
    <div className="flex-1 h-[2.5px] rounded-full bg-black/10 overflow-hidden">
      <div
        className="h-full rounded-full transition-none"
        style={{
          width: active ? `${width}%` : isPast ? "100%" : "0%",
          background: active
            ? "var(--primary)"
            : isPast
              ? "rgba(0,0,0,0.25)"
              : "transparent",
        }}
      />
    </div>
  );
}

// ─── Carousel ─────────────────────────────────────────────────────────────────
function Carousel({ onFinish }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef({});

  const next = useCallback(() => {
    if (idx < SLIDES.length - 1) setIdx((i) => i + 1);
    else onFinish();
  }, [idx, onFinish]);

  const prev = useCallback(() => setIdx((i) => Math.max(0, i - 1)), []);

  const goTo = useCallback(
    (i) => setIdx(Math.min(Math.max(0, i), SLIDES.length - 1)),
    [],
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") onFinish();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, onFinish]);

  useEffect(() => {
    SLIDES.forEach((s, i) => {
      const el = videoRefs.current[s.id];
      if (!el) return;
      if (i === idx && !paused) {
        el.currentTime = 0;
        el.play().catch(() => {});
      } else el.pause();
    });
  }, [idx, paused]);

  const slide = SLIDES[idx];
  const isLast = idx === SLIDES.length - 1;
  const isFirst = idx === 0;

  return (
    <div className="relative select-none bg-secondary">
      {/* progress bars */}
      <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 px-3 pt-2.5">
        {SLIDES.map((s, i) => (
          <ProgBar
            key={s.id}
            slideKey={`${s.id}-${idx}`}
            active={i === idx}
            isPast={i < idx}
            paused={paused}
            onComplete={next}
          />
        ))}
      </div>

      {/* slide */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            className="relative h-[360px]"
          >
            {slide.type === "video" ? (
              <video
                ref={(el) => (videoRefs.current[slide.id] = el)}
                src={slide.src}
                className="w-full h-full object-cover"
                muted
                playsInline
                loop={false}
              />
            ) : (
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover"
                draggable={false}
              />
            )}

            {/* dark gradient so white text stays readable over any image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-12">
              <span
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-full"
                style={slide.badgeStyle}
              >
                {slide.badge}
              </span>
              {/* white text is fine here — sits on the dark gradient overlay */}
              <p
                style={{ fontFamily: "'Cinzel', serif" }}
                className="text-white text-[19px] font-semibold mt-2.5 leading-snug"
              >
                {slide.title}
              </p>
              <p className="text-white/65 text-[12px] mt-1">{slide.sub}</p>
            </div>

            {idx === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute top-5 right-4"
              >
                {/* subtle hint on dark image area — keep low opacity dark text */}
                <span className="text-black/30 text-[10px] tracking-wide">
                  ← → to navigate
                </span>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* controls row — sits below the image on the light secondary bg */}
      <div className="flex items-center justify-between px-4 py-2.5 border-t border-border">
        <div className="flex items-center gap-1.5">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-[5px] rounded-full border-none p-0 cursor-pointer transition-all duration-300"
              style={{
                width: i === idx ? "18px" : "5px",
                background:
                  i === idx
                    ? "var(--primary)"
                    : i < idx
                      ? "rgba(0,0,0,0.3)"
                      : "rgba(0,0,0,0.15)",
              }}
            />
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={prev}
            disabled={isFirst}
            aria-label="Previous slide"
            className="w-7 h-7 rounded-full border border-border flex items-center justify-center transition-colors disabled:opacity-25 disabled:cursor-not-allowed text-muted-foreground hover:text-foreground hover:border-border/60"
          >
            <ChevronLeft size={14} />
          </button>

          <button
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play" : "Pause"}
            className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border/60 transition-colors"
          >
            {paused ? <Play size={12} /> : <Pause size={12} />}
          </button>

          <button
            onClick={next}
            aria-label={isLast ? "Finish" : "Next slide"}
            className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border/60 transition-colors"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
export function AchievementsModal({ onExplore }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 600);
    return () => clearTimeout(t);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          style={{
            backdropFilter: "blur(10px)",
            background: "rgba(0,0,0,0.45)",
          }}
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <motion.div
            className="relative w-full max-w-[660px] rounded-2xl overflow-hidden bg-card border border-border shadow-2xl"
            initial={{ scale: 0.91, y: 28, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.94, y: 16, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
          >
            <Carousel onFinish={close} />

            {/* body */}
            <div className="px-6 pt-4 pb-5 flex flex-col gap-3.5">
              {/* brand row + close */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #4d7c0f, var(--primary))",
                  }}
                >
                  <span
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className="text-xs font-bold text-primary-foreground"
                  >
                    AB
                  </span>
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "#3f6212",
                    }}
                    className="text-[15px] font-semibold leading-tight"
                  >
                    AbyBaby Group
                  </p>
                  <p className="text-muted-foreground text-[10px] tracking-[0.22em] uppercase mt-0.5">
                    India's #1 BTL Agency
                  </p>
                </div>

                <button
                  onClick={close}
                  aria-label="Close"
                  className="ml-auto w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border/60 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              {/* stats */}
              <div className="grid grid-cols-3 gap-2.5">
                {STATS.map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-muted rounded-xl py-3.5 text-center flex flex-col items-center gap-1 border border-border"
                  >
                    <p
                      style={{
                        fontFamily: "'Cinzel', serif",
                        color: "#3f6212",
                      }}
                      className="text-[20px] font-bold leading-none"
                    >
                      {value}
                    </p>
                    <p className="text-[11px] text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => {
                  close();
                  onExplore?.();
                }}
                style={{
                  fontFamily: "'Cinzel', serif",
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
                className="w-full py-3 rounded-xl text-[13px] font-semibold tracking-wide transition-all hover:opacity-90 active:scale-[0.98]"
              >
                Explore Our Work
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
