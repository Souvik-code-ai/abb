// import { motion } from "motion/react";
// import {
//   Award,
//   Globe,
//   Lightbulb,
//   Heart,
//   MapPin,
//   Phone,
//   Mail,
// } from "lucide-react";
// import { StoriesBar } from "../StoriesBar";
// import { QuickNav } from "../QuickNav";
// // import type { Page, NavigateFn, Story } from "../../types";

// const STORIES = [
//   {
//     id: "a1",
//     name: "Our Story",
//     thumb:
//       "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "a2",
//     name: "Community",
//     thumb:
//       "https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "a3",
//     name: "Team Work",
//     thumb:
//       "https://images.unsplash.com/photo-1646929189708-eb1b9fff7387?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "a4",
//     name: "Leadership",
//     thumb:
//       "https://images.unsplash.com/photo-1738151466731-7d98e3fe6b3c?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "a5",
//     name: "Tradition",
//     thumb:
//       "https://images.unsplash.com/photo-1772947314926-a3bcffd09b1b?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "a6",
//     name: "Digital Age",
//     thumb:
//       "https://images.unsplash.com/photo-1704362626757-e24cf4127327?w=200&h=200&fit=crop&auto=format",
//   },
// ];

// const VALUES = [
//   {
//     Icon: Award,
//     title: "Excellence",
//     desc: "25 years of raising the bar in event creativity and execution across every project we deliver.",
//   },
//   {
//     Icon: Globe,
//     title: "Pan-India Reach",
//     desc: "10 branch offices, 50+ cities — from urban metros to India's rural heartlands.",
//   },
//   {
//     Icon: Lightbulb,
//     title: "Innovation",
//     desc: "Blending traditional BTL wisdom with cutting-edge phygital experiences.",
//   },
//   {
//     Icon: Heart,
//     title: "Passion",
//     desc: "From the first brief to the final curtain — every event is produced with genuine care.",
//   },
// ];

// const GALLERY_IMAGES = [
//   "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop&auto=format",
//   "https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=400&h=400&fit=crop&auto=format",
//   "https://images.unsplash.com/photo-1738151466731-7d98e3fe6b3c?w=400&h=400&fit=crop&auto=format",
//   "https://images.unsplash.com/photo-1646929189708-eb1b9fff7387?w=400&h=400&fit=crop&auto=format",
//   "https://images.unsplash.com/photo-1562649268-bd8fa4cf7ad7?w=400&h=400&fit=crop&auto=format",
//   "https://images.unsplash.com/photo-1772947314926-a3bcffd09b1b?w=400&h=400&fit=crop&auto=format",
//   "https://images.unsplash.com/photo-1704362626757-e24cf4127327?w=400&h=400&fit=crop&auto=format",
//   "https://images.unsplash.com/photo-1585371843734-1800eada9acc?w=400&h=400&fit=crop&auto=format",
//   "https://images.unsplash.com/photo-1573964093819-aaa848e41d4a?w=400&h=400&fit=crop&auto=format",
// ];

// // interface AboutPageProps {
// //   navigate: NavigateFn;
// //   currentPage: Page;
// // }

// export function AboutPage({ navigate, currentPage }) {
//   return (
//     <div className="min-h-screen bg-background">
//       {/* Mobile header */}
//       <div className="lg:hidden sticky top-0 z-30 bg-card/96 backdrop-blur-sm border-b border-border px-5 h-14 flex items-center">
//         <div
//           style={{ fontFamily: "'Cinzel', serif" }}
//           className="text-base font-bold text-foreground"
//         >
//           About
//         </div>
//       </div>

//       {/* Stories */}
//       <StoriesBar stories={STORIES} pageLabel="Our Journey Highlights" />

//       {/* Instagram Profile Header */}
//       <div className="max-w-[500px] mx-auto px-5 py-6 border-b border-border">
//         <div className="flex items-start gap-5">
//           {/* Avatar */}
//           <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-amber-700 via-yellow-400 to-amber-500 flex-shrink-0">
//             <div className="w-20 h-20 rounded-full border-2 border-background bg-gradient-to-br from-amber-700 to-primary flex items-center justify-center">
//               <span
//                 style={{ fontFamily: "'Cinzel', serif" }}
//                 className="text-2xl font-bold text-white"
//               >
//                 AB
//               </span>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="flex-1">
//             <div
//               style={{ fontFamily: "'Cinzel', serif" }}
//               className="text-base font-bold text-foreground mb-3"
//             >
//               abybaby_group
//             </div>
//             <div className="grid grid-cols-3 gap-2 text-center">
//               {[
//                 { val: "5K+", lbl: "posts" },
//                 { val: "100+", lbl: "clients" },
//                 { val: "10+", lbl: "branches" },
//               ].map(({ val, lbl }) => (
//                 <div key={lbl}>
//                   <div
//                     style={{ fontFamily: "'Cinzel', serif" }}
//                     className="font-bold text-foreground text-base leading-tight"
//                   >
//                     {val}
//                   </div>
//                   <div className="text-xs text-muted-foreground">{lbl}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bio */}
//         <div className="mt-4">
//           <div
//             style={{ fontFamily: "'Cinzel', serif" }}
//             className="text-sm font-semibold text-foreground"
//           >
//             AbyBaby Group
//           </div>
//           <p className="text-sm text-foreground/70 mt-1 leading-relaxed">
//             India's leading BTL Marketing & Event Activation company 🇮🇳
//             <br />
//             25+ Years · 50+ Cities · 5000+ Events
//             <br />
//             From rural haats to grand urban stages 🎪
//           </p>
//           <div className="flex items-center gap-1.5 mt-2 text-primary text-sm">
//             <MapPin size={12} />
//             <span>Mumbai, Maharashtra, India</span>
//           </div>
//         </div>

//         {/* Action buttons */}
//         <div className="flex gap-2.5 mt-4">
//           <button className="flex-1 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg cursor-pointer">
//             Follow
//           </button>
//           <button className="flex-1 py-2 border border-border text-foreground/70 text-sm font-semibold rounded-lg cursor-pointer">
//             Message
//           </button>
//         </div>
//       </div>

//       {/* Company story section */}
//       <div className="max-w-[500px] mx-auto px-5 py-6 border-b border-border">
//         <h2
//           style={{ fontFamily: "'Cinzel', serif" }}
//           className="text-xl font-bold text-foreground mb-1"
//         >
//           Our Story
//         </h2>
//         <div className="w-8 h-px bg-primary mb-4" />
//         <p className="text-sm text-foreground/65 leading-relaxed mb-3">
//           Founded in 1999, AbyBaby Group has shaped the way brands connect with
//           consumers across India — from the remotest rural haats to the grandest
//           urban stages. With 25 years of experience, we've become the trusted
//           partner for India's most iconic brands.
//         </p>
//         <p className="text-sm text-foreground/65 leading-relaxed">
//           With over 100 premium clients, 10 branches spanning the subcontinent,
//           and more than 5,000 projects delivered, we bring unmatched strategic
//           depth and operational excellence to every engagement.
//         </p>
//       </div>

//       {/* Values grid */}
//       <div className="max-w-[500px] mx-auto px-5 py-6 border-b border-border">
//         <h3
//           style={{ fontFamily: "'Cinzel', serif" }}
//           className="text-base font-bold text-foreground mb-5"
//         >
//           What Drives <span className="text-primary">Us</span>
//         </h3>
//         <div className="grid grid-cols-2 gap-3">
//           {VALUES.map(({ Icon, title, desc }, i) => (
//             <motion.div
//               key={title}
//               className="bg-card border border-border rounded-2xl p-4"
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: i * 0.08 }}
//               whileHover={{ y: -2 }}
//             >
//               <div className="w-9 h-9 rounded-xl border border-primary/40 flex items-center justify-center mb-3">
//                 <Icon size={15} className="text-primary" />
//               </div>
//               <div
//                 style={{ fontFamily: "'Cinzel', serif" }}
//                 className="text-sm font-bold text-foreground mb-1.5"
//               >
//                 {title}
//               </div>
//               <p className="text-[11px] text-foreground/55 leading-relaxed">
//                 {desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Photo grid (Instagram profile grid style) */}
//       <div className="max-w-[500px] mx-auto border-b border-border">
//         <div className="px-5 py-3 flex items-center gap-2 border-b border-border/50">
//           <div className="w-1 h-4 bg-primary rounded-full" />
//           <span
//             style={{ fontFamily: "'Cinzel', serif" }}
//             className="text-xs font-semibold text-foreground tracking-widest uppercase"
//           >
//             Moments
//           </span>
//         </div>
//         <div className="grid grid-cols-3 gap-px bg-border">
//           {GALLERY_IMAGES.map((src, i) => (
//             <motion.div
//               key={i}
//               className="aspect-square bg-muted overflow-hidden"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.3, delay: i * 0.05 }}
//             >
//               <img
//                 src={src}
//                 alt=""
//                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Contact strip */}
//       <div className="max-w-[500px] mx-auto px-5 py-5 border-b border-border">
//         <div className="flex flex-col gap-3">
//           {[
//             { Icon: Phone, text: "+91 98765 43210" },
//             { Icon: Mail, text: "hello@abybabygroup.com" },
//             { Icon: MapPin, text: "Mumbai, Maharashtra, India" },
//           ].map(({ Icon, text }) => (
//             <div key={text} className="flex items-center gap-3">
//               <div className="w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center flex-shrink-0">
//                 <Icon size={13} className="text-primary" />
//               </div>
//               <span className="text-sm text-foreground/65">{text}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="max-w-[500px] mx-auto">
//         <QuickNav currentPage={currentPage} navigate={navigate} />
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Award,
  Globe,
  Lightbulb,
  Heart,
  MapPin,
  Phone,
  Mail,
  X,
  Send,
  User,
  AtSign,
  MessageSquare,
} from "lucide-react";
// import { StoriesBar } from "../StoriesBar";
import { QuickNav } from "../QuickNav";

// ─────────────────────────────────────────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────────────────────────────────────────

const STORIES = [
  {
    id: "a1",
    name: "Our Story",
    thumb:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "a2",
    name: "Community",
    thumb:
      "https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "a3",
    name: "Team Work",
    thumb:
      "https://images.unsplash.com/photo-1646929189708-eb1b9fff7387?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "a4",
    name: "Leadership",
    thumb:
      "https://images.unsplash.com/photo-1738151466731-7d98e3fe6b3c?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "a5",
    name: "Tradition",
    thumb:
      "https://images.unsplash.com/photo-1772947314926-a3bcffd09b1b?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "a6",
    name: "Digital Age",
    thumb:
      "https://images.unsplash.com/photo-1704362626757-e24cf4127327?w=200&h=200&fit=crop&auto=format",
  },
];

const VALUES = [
  {
    Icon: Award,
    title: "Excellence",
    desc: "25 years of raising the bar in event creativity and execution across every project we deliver.",
  },
  {
    Icon: Globe,
    title: "Pan-India Reach",
    desc: "10 branch offices, 50+ cities — from urban metros to India's rural heartlands.",
  },
  {
    Icon: Lightbulb,
    title: "Innovation",
    desc: "Blending traditional BTL wisdom with cutting-edge phygital experiences.",
  },
  {
    Icon: Heart,
    title: "Passion",
    desc: "From the first brief to the final curtain — every event is produced with genuine care.",
  },
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1738151466731-7d98e3fe6b3c?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1646929189708-eb1b9fff7387?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1562649268-bd8fa4cf7ad7?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1772947314926-a3bcffd09b1b?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1704362626757-e24cf4127327?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1585371843734-1800eada9acc?w=400&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1573964093819-aaa848e41d4a?w=400&h=400&fit=crop&auto=format",
];

// ─────────────────────────────────────────────────────────────────────────────
// MESSAGE MODAL
// ─────────────────────────────────────────────────────────────────────────────

function MessageModal({ onClose }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    // TODO: replace with real API — e.g. POST /api/contact
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setSent(true);
    setTimeout(onClose, 1800);
  };

  const FIELDS = [
    { name: "name", Icon: User, placeholder: "Your Name", type: "text" },
    { name: "email", Icon: AtSign, placeholder: "Your Email", type: "email" },
  ];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
    >
      {/* Blurred overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Card — slides up on mobile, scales in on desktop */}
      <motion.div
        className="relative w-full sm:max-w-[440px] sm:mx-5 bg-card border border-border rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden"
        initial={{ y: 80, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 80, opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle (mobile) */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-border" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-4 pb-5 border-b border-border">
          <div>
            <h2
              style={{ fontFamily: "'Cinzel', serif" }}
              className="text-base font-bold text-foreground"
            >
              Send a Message
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              We'll get back to you within 24 hours
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/6 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <AnimatePresence mode="wait">
            {sent ? (
              /* ── Success ── */
              <motion.div
                key="success"
                className="flex flex-col items-center justify-center py-8 gap-3"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.25 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <Send size={22} className="text-primary" />
                </motion.div>
                <p
                  style={{ fontFamily: "'Cinzel', serif" }}
                  className="text-sm font-bold text-foreground"
                >
                  Message Sent!
                </p>
                <p className="text-xs text-muted-foreground text-center">
                  Thank you, {form.name}. We'll reach out soon.
                </p>
              </motion.div>
            ) : (
              /* ── Form ── */
              <motion.div
                key="form"
                className="flex flex-col gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {FIELDS.map(({ name, Icon, placeholder, type }, i) => (
                  <motion.div
                    key={name}
                    className="relative"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                      <Icon size={14} />
                    </div>
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full bg-background border border-border rounded-xl pl-9 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                  </motion.div>
                ))}

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                >
                  <div className="absolute left-3.5 top-3.5 text-muted-foreground pointer-events-none">
                    <MessageSquare size={14} />
                  </div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message…"
                    rows={4}
                    className="w-full bg-background border border-border rounded-xl pl-9 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  />
                </motion.div>

                <motion.button
                  onClick={handleSubmit}
                  disabled={
                    sending || !form.name || !form.email || !form.message
                  }
                  className="w-full py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 }}
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────

export function AboutPage({ navigate, currentPage, sidebarWidth = 240 }) {
  const [showModal, setShowModal] = useState(false);
  const [followed, setFollowed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* ── Mobile header ── */}
      <div
        className="lg:hidden sticky top-0 z-30 bg-card/96 backdrop-blur-sm border-b border-border px-5 h-14 flex items-center"
        onClick={() => navigate("home")}
      >
        <div
          style={{ fontFamily: "'Cinzel', serif" }}
          className="text-lg font-bold text-primary"
        >
          AbyBaby
          <span className="text-foreground/65 ml-1 text-base">Group</span>
        </div>
      </div>

      {/* ── Stories ── */}
      {/* <StoriesBar
        stories={STORIES}
        pageLabel="Our Journey Highlights"
        sidebarWidth={sidebarWidth}
      /> */}

      {/* ── Profile header ── */}
      <div className="max-w-[500px]  px-5 py-6 border-b border-border">
        <div className="flex items-start gap-5">
          {/* Avatar */}
          <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-lime-700 via-lime-400 to-green-30 flex-shrink-0">
            <div className="w-20 h-20 rounded-full border-2 border-background bg-gradient-to-br from-lime-700 to-primary flex items-center justify-center">
              <span
                style={{ fontFamily: "'Cinzel', serif" }}
                className="text-2xl font-bold text-white"
              >
                AB
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex-1">
            <div
              style={{ fontFamily: "'Cinzel', serif" }}
              className="text-base font-bold text-foreground mb-3"
            >
              abybaby_group
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              {[
                { val: "5K+", lbl: "posts" },
                { val: "100+", lbl: "clients" },
                { val: "10+", lbl: "branches" },
              ].map(({ val, lbl }) => (
                <div key={lbl}>
                  <div
                    style={{ fontFamily: "'Cinzel', serif" }}
                    className="font-bold text-foreground text-base leading-tight"
                  >
                    {val}
                  </div>
                  <div className="text-xs text-muted-foreground">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-4">
          <div
            style={{ fontFamily: "'Cinzel', serif" }}
            className="text-sm font-semibold text-foreground"
          >
            AbyBaby Group
          </div>
          <p className="text-sm text-foreground/70 mt-1 leading-relaxed">
            India's leading BTL Marketing & Event Activation company 🇮🇳
            <br />
            25+ Years · 50+ Cities · 5000+ Events
            <br />
            From rural haats to grand urban stages 🎪
          </p>
          <div className="flex items-center gap-1.5 mt-2 text-primary text-sm">
            <MapPin size={12} />
            <span>Mumbai, Maharashtra, India</span>
          </div>
        </div>

        {/* ── Action buttons ── */}
        <div className="flex gap-2.5 mt-4">
          {/* Follow / Following toggle */}
          <motion.button
            onClick={() => setFollowed((prev) => !prev)}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-300 ${
              followed
                ? "bg-transparent border border-border text-foreground/70"
                : "bg-primary text-primary-foreground"
            }`}
            whileTap={{ scale: 0.96 }}
          >
            <AnimatePresence mode="wait">
              {followed ? (
                <motion.span
                  key="following"
                  className="flex items-center gap-1.5"
                  initial={{ opacity: 0, scale: 0.8, y: 4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -4 }}
                  transition={{ duration: 0.18 }}
                >
                  {/* Animated checkmark */}
                  <motion.svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <motion.path
                      d="M2 7l3.5 3.5L12 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.svg>
                  Following
                </motion.span>
              ) : (
                <motion.span
                  key="follow"
                  initial={{ opacity: 0, scale: 0.8, y: 4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -4 }}
                  transition={{ duration: 0.18 }}
                >
                  Follow
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Message */}
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 py-2 border border-border text-foreground/70 text-sm font-semibold rounded-lg hover:border-primary/50 hover:text-foreground transition-colors cursor-pointer"
          >
            Message
          </button>
        </div>
      </div>

      {/* ── Our Story ── */}
      <div className="max-w-[500px]  px-5 py-6 border-b border-border">
        <h2
          style={{ fontFamily: "'Cinzel', serif" }}
          className="text-xl font-bold text-foreground mb-1"
        >
          Our Story
        </h2>
        <div className="w-8 h-px bg-primary mb-4" />
        <p className="text-sm text-foreground/65 leading-relaxed mb-3">
          Founded in 1999, AbyBaby Group has shaped the way brands connect with
          consumers across India — from the remotest rural haats to the grandest
          urban stages. With 25 years of experience, we've become the trusted
          partner for India's most iconic brands.
        </p>
        <p className="text-sm text-foreground/65 leading-relaxed">
          With over 100 premium clients, 10 branches spanning the subcontinent,
          and more than 5,000 projects delivered, we bring unmatched strategic
          depth and operational excellence to every engagement.
        </p>
      </div>

      {/* ── Values grid ── */}
      <div className="max-w-[500px]  px-5 py-6 border-b border-border">
        <h3
          style={{ fontFamily: "'Cinzel', serif" }}
          className="text-base font-bold text-foreground mb-5"
        >
          What Drives <span className="text-primary">Us</span>
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {VALUES.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="bg-card border border-border rounded-2xl p-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
            >
              <div className="w-9 h-9 rounded-xl border border-primary/40 flex items-center justify-center mb-3">
                <Icon size={15} className="text-primary" />
              </div>
              <div
                style={{ fontFamily: "'Cinzel', serif" }}
                className="text-sm font-bold text-foreground mb-1.5"
              >
                {title}
              </div>
              <p className="text-[11px] text-foreground/55 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Photo grid ── */}
      <div className="max-w-[500px]  border-b border-border">
        <div className="px-5 py-3 flex items-center gap-2 border-b border-border/50">
          <div className="w-1 h-4 bg-primary rounded-full" />
          <span
            style={{ fontFamily: "'Cinzel', serif" }}
            className="text-xs font-semibold text-foreground tracking-widest uppercase"
          >
            Moments
          </span>
        </div>
        <div className="grid grid-cols-3 gap-px bg-border">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.div
              key={i}
              className="aspect-square bg-muted overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Contact strip ── */}
      <div className="max-w-[500px]  px-5 py-5 border-b border-border">
        <div className="flex flex-col gap-3">
          {[
            { Icon: Phone, text: "+91 98765 43210" },
            { Icon: Mail, text: "hello@abybabygroup.com" },
            { Icon: MapPin, text: "Mumbai, Maharashtra, India" },
          ].map(({ Icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center flex-shrink-0">
                <Icon size={13} className="text-primary" />
              </div>
              <span className="text-sm text-foreground/65">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom nav ── */}
      {/* <div className="max-w-[500px] mx-auto">
        <QuickNav currentPage={currentPage} navigate={navigate} />
      </div> */}

      {/* ── Message Modal ── */}
      <AnimatePresence>
        {showModal && <MessageModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </div>
  );
}
