// // import { useState } from "react";
// // import { motion } from "motion/react";
// // import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
// // import { StoriesBar } from "../StoriesBar";
// // import { QuickNav } from "../QuickNav";
// // // import type { Page, NavigateFn, Story } from "../../types";

// // const STORIES = [
// //   {
// //     id: "b1",
// //     name: "Event Blog",
// //     thumb:
// //       "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=200&fit=crop&auto=format",
// //   },
// //   {
// //     id: "b2",
// //     name: "Insights",
// //     thumb:
// //       "https://images.unsplash.com/photo-1704362626757-e24cf4127327?w=200&h=200&fit=crop&auto=format",
// //   },
// //   {
// //     id: "b3",
// //     name: "Strategy",
// //     thumb:
// //       "https://images.unsplash.com/photo-1738151466731-7d98e3fe6b3c?w=200&h=200&fit=crop&auto=format",
// //   },
// //   {
// //     id: "b4",
// //     name: "Community",
// //     thumb:
// //       "https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=200&h=200&fit=crop&auto=format",
// //   },
// //   {
// //     id: "b5",
// //     name: "Case Study",
// //     thumb:
// //       "https://images.unsplash.com/photo-1646929189708-eb1b9fff7387?w=200&h=200&fit=crop&auto=format",
// //   },
// // ];

// // // interface Article {
// // //   id: string;
// // //   cat: string;
// // //   date: string;
// // //   readTime: string;
// // //   title: string;
// // //   excerpt: string;
// // //   img: string;
// // //   likes: number;
// // //   comments: number;
// // //   tags: string[];
// // // }

// // const ARTICLES = [
// //   {
// //     id: "ar1",
// //     cat: "INSIGHTS",
// //     date: "Mar 12, 2025",
// //     readTime: "5 min read",
// //     title: "Why BTL Marketing Still Wins in Rural India",
// //     excerpt:
// //       "Digital adoption is rising, but face-to-face brand interactions remain the most trusted channel in India's heartland. Here's why BTL isn't going anywhere.",
// //     img: "https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=800&h=450&fit=crop&auto=format",
// //     likes: 1247,
// //     comments: 89,
// //     tags: ["BTL", "Rural Marketing", "India"],
// //   },
// //   {
// //     id: "ar2",
// //     cat: "EVENTS",
// //     date: "Feb 28, 2025",
// //     readTime: "8 min read",
// //     title: "Behind the Scenes: Managing a 10,000-Person Product Launch",
// //     excerpt:
// //       "From logistics to live entertainment — how our team pulled off one of India's biggest FMCG launches in under 12 weeks with zero surprises on the day.",
// //     img: "https://images.unsplash.com/photo-1562649268-bd8fa4cf7ad7?w=800&h=450&fit=crop&auto=format",
// //     likes: 2103,
// //     comments: 156,
// //     tags: ["Event Management", "FMCG", "Case Study"],
// //   },
// //   {
// //     id: "ar3",
// //     cat: "STRATEGY",
// //     date: "Jan 15, 2025",
// //     readTime: "6 min read",
// //     title: "The Phygital Future of Brand Activation",
// //     excerpt:
// //       "Merging physical events with digital touchpoints creates exponentially richer, more measurable consumer experiences. Here's how to build a phygital strategy.",
// //     img: "https://images.unsplash.com/photo-1704362626757-e24cf4127327?w=800&h=450&fit=crop&auto=format",
// //     likes: 978,
// //     comments: 67,
// //     tags: ["Digital", "Strategy", "Phygital"],
// //   },
// //   {
// //     id: "ar4",
// //     cat: "CASE STUDY",
// //     date: "Dec 10, 2024",
// //     readTime: "10 min read",
// //     title: "How We Built 50-City Simultaneous Activations for Independence Day",
// //     excerpt:
// //       "Coordinating 50+ city activations on the same day required military-level planning. Our operations head breaks down the logistics, tech stack, and lessons learned.",
// //     img: "https://images.unsplash.com/photo-1600400411727-6f0fd6e10933?w=800&h=450&fit=crop&auto=format",
// //     likes: 1834,
// //     comments: 124,
// //     tags: ["Operations", "Scale", "Case Study"],
// //   },
// // ];

// // const CAT_COLORS = {
// //   INSIGHTS: "text-blue-400",
// //   EVENTS: "text-amber-400",
// //   STRATEGY: "text-green-400",
// //   "CASE STUDY": "text-purple-400",
// // };

// // // interface BlogPageProps {
// // //   navigate: NavigateFn;
// // //   currentPage: Page;
// // // }

// // export function BlogPage({ navigate, currentPage }) {
// //   const [expanded, setExpanded] = useState(null);
// //   return (
// //     <div className="min-h-screen bg-background">
// //       {/* Mobile header */}
// //       <div
// //         className="lg:hidden sticky top-0 z-30 bg-card/96 backdrop-blur-sm border-b border-border px-5 h-14 flex items-center gap-3"
// //         onClick={() => navigate("home")}
// //       >
// //         <div
// //           style={{ fontFamily: "'Cinzel', serif" }}
// //           className="text-lg font-bold text-primary"
// //         >
// //           AbyBaby
// //           <span className="text-foreground/65 ml-1 text-base">Group</span>
// //         </div>
// //       </div>

// //       {/* Stories */}
// //       <StoriesBar stories={STORIES} pageLabel="Latest Stories" />

// //       {/* Blog header */}
// //       <div className="max-w-[600px] mx-auto px-5 pt-5 pb-3">
// //         <h2
// //           style={{ fontFamily: "'Cinzel', serif" }}
// //           className="text-xl font-bold text-foreground"
// //         >
// //           Ideas & <span className="text-primary">Perspectives</span>
// //         </h2>
// //         <p className="text-xs text-muted-foreground mt-1">
// //           {ARTICLES.length} articles · Updated weekly
// //         </p>
// //       </div>

// //       {/* Articles */}
// //       <div className="max-w-[600px] mx-auto divide-y divide-border">
// //         {ARTICLES.map((article, i) => (
// //           <motion.article
// //             key={article.id}
// //             className="bg-card border-b border-border"
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true, margin: "-40px" }}
// //             transition={{ duration: 0.5, delay: i * 0.1 }}
// //           >
// //             {/* Post header */}
// //             <div className="flex items-center gap-3 px-4 py-3">
// //               <div className="w-8 h-8 rounded-full border border-primary/50 bg-gradient-to-br from-amber-700 to-primary flex items-center justify-center flex-shrink-0">
// //                 <span
// //                   style={{ fontFamily: "'Cinzel', serif" }}
// //                   className="text-[10px] font-bold text-white"
// //                 >
// //                   AB
// //                 </span>
// //               </div>
// //               <div className="flex-1 min-w-0">
// //                 <div
// //                   style={{ fontFamily: "'Cinzel', serif" }}
// //                   className="text-sm font-semibold text-foreground"
// //                 >
// //                   abybaby_group
// //                 </div>
// //                 <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
// //                   <span>{article.date}</span>
// //                   <span>·</span>
// //                   <Clock size={10} />
// //                   <span>{article.readTime}</span>
// //                 </div>
// //               </div>
// //               <span
// //                 className={`text-[10px] font-bold tracking-widest ${CAT_COLORS[article.cat] || "text-primary"}`}
// //               >
// //                 {article.cat}
// //               </span>
// //             </div>

// //             {/* Cover image */}
// //             <div className="relative aspect-video bg-muted overflow-hidden">
// //               <img
// //                 src={article.img}
// //                 alt={article.title}
// //                 className="w-full h-full object-cover"
// //                 loading="lazy"
// //               />
// //             </div>

// //             {/* Content */}
// //             <div className="px-4 py-4">
// //               <h3
// //                 style={{ fontFamily: "'Cinzel', serif" }}
// //                 className="text-base font-bold text-foreground leading-snug mb-2"
// //               >
// //                 {article.title}
// //               </h3>
// //               <p className="text-sm text-foreground/60 leading-relaxed mb-3">
// //                 {expanded === article.id
// //                   ? article.excerpt
// //                   : article.excerpt.slice(0, 100) + "..."}
// //               </p>
// //               <button
// //                 onClick={() =>
// //                   setExpanded(expanded === article.id ? null : article.id)
// //                 }
// //                 className="text-primary text-xs font-semibold flex items-center gap-1.5 mb-4"
// //               >
// //                 {expanded === article.id ? "Read less" : "Read more"}{" "}
// //                 <ArrowRight size={11} />
// //               </button>

// //               {/* Tags */}
// //               <div className="flex flex-wrap gap-1.5 mb-3">
// //                 {article.tags.map((tag) => (
// //                   <span
// //                     key={tag}
// //                     className="flex items-center gap-1 text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full"
// //                   >
// //                     <Tag size={9} />
// //                     {tag}
// //                   </span>
// //                 ))}
// //               </div>

// //               {/* Actions */}
// //               <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border/50 pt-3">
// //                 <span>❤️ {article.likes.toLocaleString()} likes</span>
// //                 <span>💬 {article.comments} comments</span>
// //                 <button className="ml-auto text-primary font-semibold flex items-center gap-1">
// //                   Share <ArrowRight size={10} />
// //                 </button>
// //               </div>
// //             </div>
// //           </motion.article>
// //         ))}
// //       </div>

// //       {/* Load more hint */}
// //       {/* <div className="max-w-[600px] mx-auto px-5 py-6 text-center border-b border-border">
// //      <button className="flex items-center gap-2 text-primary text-sm font-semibold mx-auto hover:gap-3 transition-all duration-200">
// //           Load more articles <ArrowRight size={14} />
// //         </button>
// //       </div> */}

// //       {/* <div className="max-w-[600px] mx-auto">
// //         <QuickNav currentPage={currentPage} navigate={navigate} />
// //       </div> */}
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import { motion } from "motion/react";
// import { ArrowRight, Clock, Tag } from "lucide-react";
// import { StoriesBar } from "../StoriesBar";

// const STORIES = [
//   {
//     id: "b1",
//     name: "Event Blog",
//     thumb:
//       "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "b2",
//     name: "Insights",
//     thumb:
//       "https://images.unsplash.com/photo-1704362626757-e24cf4127327?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "b3",
//     name: "Strategy",
//     thumb:
//       "https://images.unsplash.com/photo-1738151466731-7d98e3fe6b3c?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "b4",
//     name: "Community",
//     thumb:
//       "https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "b5",
//     name: "Case Study",
//     thumb:
//       "https://images.unsplash.com/photo-1646929189708-eb1b9fff7387?w=200&h=200&fit=crop&auto=format",
//   },
// ];

// const ARTICLES = [
//   {
//     id: "ar1",
//     cat: "INSIGHTS",
//     date: "Mar 12, 2025",
//     readTime: "5 min read",
//     title: "Why BTL Marketing Still Wins in Rural India",
//     excerpt:
//       "Digital adoption is rising, but face-to-face brand interactions remain the most trusted channel in India's heartland. Here's why BTL isn't going anywhere.",
//     img: "https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=800&h=450&fit=crop&auto=format",
//     likes: 1247,
//     comments: 89,
//     tags: ["BTL", "Rural Marketing", "India"],
//   },
//   {
//     id: "ar2",
//     cat: "EVENTS",
//     date: "Feb 28, 2025",
//     readTime: "8 min read",
//     title: "Behind the Scenes: Managing a 10,000-Person Product Launch",
//     excerpt:
//       "From logistics to live entertainment — how our team pulled off one of India's biggest FMCG launches in under 12 weeks with zero surprises on the day.",
//     img: "https://images.unsplash.com/photo-1562649268-bd8fa4cf7ad7?w=800&h=450&fit=crop&auto=format",
//     likes: 2103,
//     comments: 156,
//     tags: ["Event Management", "FMCG", "Case Study"],
//   },
//   {
//     id: "ar3",
//     cat: "STRATEGY",
//     date: "Jan 15, 2025",
//     readTime: "6 min read",
//     title: "The Phygital Future of Brand Activation",
//     excerpt:
//       "Merging physical events with digital touchpoints creates exponentially richer, more measurable consumer experiences. Here's how to build a phygital strategy.",
//     img: "https://images.unsplash.com/photo-1704362626757-e24cf4127327?w=800&h=450&fit=crop&auto=format",
//     likes: 978,
//     comments: 67,
//     tags: ["Digital", "Strategy", "Phygital"],
//   },
//   {
//     id: "ar4",
//     cat: "CASE STUDY",
//     date: "Dec 10, 2024",
//     readTime: "10 min read",
//     title: "How We Built 50-City Simultaneous Activations for Independence Day",
//     excerpt:
//       "Coordinating 50+ city activations on the same day required military-level planning. Our operations head breaks down the logistics, tech stack, and lessons learned.",
//     img: "https://images.unsplash.com/photo-1600400411727-6f0fd6e10933?w=800&h=450&fit=crop&auto=format",
//     likes: 1834,
//     comments: 124,
//     tags: ["Operations", "Scale", "Case Study"],
//   },
// ];

// const CAT_COLORS = {
//   INSIGHTS: "text-blue-400",
//   EVENTS: "text-amber-400",
//   STRATEGY: "text-green-400",
//   "CASE STUDY": "text-purple-400",
// };

// /**
//  * SKEW ANIMATION — how it works:
//  *
//  * Each article card enters the viewport with a combined:
//  *
//  *   • skewY   : card leans diagonally (like a parallelogram sliding in)
//  *               Even cards skew from  +6°, odd cards from -6° — so they
//  *               arrive from alternating directions.
//  *
//  *   • skewX   : a subtle horizontal shear (±2°) that adds a magazine-rip
//  *               feel, as if the card is being peeled off a stack.
//  *
//  *   • x       : simultaneously slides 40px from the matching side so the
//  *               skew and movement feel connected (not just spinning in place).
//  *
//  *   • opacity : fades in during the first 30% of the motion so the skew
//  *               is visible but not jarring on appearance.
//  *
//  *   • scale   : grows from 0.95 → 1.00 so the card "unfolds" slightly.
//  *
//  * After landing, the card snaps to skewY=0 / skewX=0 — perfectly upright.
//  * The easing [0.22, 1, 0.36, 1] gives a springy deceleration so it settles
//  * naturally without bouncing.
//  *
//  * Each internal element (image, content block, tags) has its own micro-skew
//  * that resolves slightly after the card, giving a layered depth effect —
//  * like ink settling onto paper after a printing press stamps down.
//  */

// // Direction alternates per card index
// const getSkewVariants = (isEven) => ({
//   hidden: {
//     opacity: 0,
//     scale: 0.93,
//     x: isEven ? 80 : -80,
//     skewY: isEven ? 18 : -18,
//     skewX: isEven ? 8 : -8,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     x: 0,
//     skewY: 0,
//     skewX: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// });

// // Inner-element skew — more dramatic, resolves just after card lands
// const innerVariants = {
//   hidden: { opacity: 0, skewX: 12, x: 20 },
//   visible: {
//     opacity: 1,
//     skewX: 0,
//     x: 0,
//     transition: { duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] },
//   },
// };

// // Image wipes in with a strong skewed clip
// const imageVariants = {
//   hidden: { clipPath: "inset(0 100% 0 0 round 4px)", skewX: -10 },
//   visible: {
//     clipPath: "inset(0 0% 0 0 round 4px)",
//     skewX: 0,
//     transition: { duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] },
//   },
// };

// function SkewArticleCard({ article, index }) {
//   const [expanded, setExpanded] = useState(false);
//   const isEven = index % 2 === 0;
//   const skewVariants = getSkewVariants(isEven);

//   return (
//     // overflow-hidden prevents the skewed card from spilling outside its column
//     <div className="overflow-hidden">
//       <motion.article
//         className="bg-card border-b border-border"
//         variants={skewVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-50px" }}
//       >
//         {/* ── Post header ── */}
//         <motion.div
//           className="flex items-center gap-3 px-4 py-3"
//           variants={innerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <div className="w-8 h-8 rounded-full border border-primary/50 bg-gradient-to-br from-amber-700 to-primary flex items-center justify-center flex-shrink-0">
//             <span
//               style={{ fontFamily: "'Cinzel', serif" }}
//               className="text-[10px] font-bold text-white"
//             >
//               AB
//             </span>
//           </div>
//           <div className="flex-1 min-w-0">
//             <div
//               style={{ fontFamily: "'Cinzel', serif" }}
//               className="text-sm font-semibold text-foreground"
//             >
//               abybaby_group
//             </div>
//             <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
//               <span>{article.date}</span>
//               <span>·</span>
//               <Clock size={10} />
//               <span>{article.readTime}</span>
//             </div>
//           </div>
//           {/* Category badge pops in with a skew-bounce */}
//           <motion.span
//             className={`text-[10px] font-bold tracking-widest ${CAT_COLORS[article.cat] || "text-primary"}`}
//             initial={{ opacity: 0, skewX: -25, x: 16 }}
//             whileInView={{ opacity: 1, skewX: 0, x: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.35,
//               delay: 0.3 + index * 0.08,
//               ease: "backOut",
//             }}
//           >
//             {article.cat}
//           </motion.span>
//         </motion.div>

//         {/* ── Cover image — skewed clip wipe ── */}
//         <div className="relative aspect-video bg-muted overflow-hidden">
//           <motion.img
//             src={article.img}
//             alt={article.title}
//             className="w-full h-full object-cover"
//             loading="lazy"
//             variants={imageVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           />
//         </div>

//         {/* ── Content — slides in with trailing skew ── */}
//         <motion.div
//           className="px-4 py-4"
//           initial={{ opacity: 0, skewY: isEven ? 8 : -8, y: 20 }}
//           whileInView={{ opacity: 1, skewY: 0, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.5,
//             delay: 0.25 + index * 0.08,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//         >
//           <h3
//             style={{ fontFamily: "'Cinzel', serif" }}
//             className="text-base font-bold text-foreground leading-snug mb-2"
//           >
//             {article.title}
//           </h3>
//           <p className="text-sm text-foreground/60 leading-relaxed mb-3">
//             {expanded ? article.excerpt : article.excerpt.slice(0, 100) + "..."}
//           </p>
//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="text-primary text-xs font-semibold flex items-center gap-1.5 mb-4"
//           >
//             {expanded ? "Read less" : "Read more"} <ArrowRight size={11} />
//           </button>

//           {/* Tags — each skews in with a staggered offset */}
//           <div className="flex flex-wrap gap-1.5 mb-3">
//             {article.tags.map((tag, ti) => (
//               <motion.span
//                 key={tag}
//                 className="flex items-center gap-1 text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full"
//                 initial={{
//                   opacity: 0,
//                   skewX: isEven ? 20 : -20,
//                   x: isEven ? 18 : -18,
//                 }}
//                 whileInView={{ opacity: 1, skewX: 0, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.3,
//                   delay: 0.35 + index * 0.08 + ti * 0.06,
//                   ease: "easeOut",
//                 }}
//               >
//                 <Tag size={9} />
//                 {tag}
//               </motion.span>
//             ))}
//           </div>

//           {/* Actions */}
//           <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border/50 pt-3">
//             {/* <span>❤️ {article.likes.toLocaleString()} likes</span>
//             <span>💬 {article.comments} comments</span> */}
//             <button className="ml-auto text-primary font-semibold flex items-center gap-1 cursor-pointer">
//               Copy Link <ArrowRight size={10} />
//             </button>
//           </div>
//         </motion.div>
//       </motion.article>
//     </div>
//   );
// }

// export function BlogPage({ navigate, currentPage }) {
//   return (
//     <div className="min-h-screen bg-background">
//       {/* Mobile header */}
//       <div
//         className="lg:hidden sticky top-0 z-30 bg-card/96 backdrop-blur-sm border-b border-border px-5 h-14 flex items-center gap-3"
//         onClick={() => navigate("home")}
//       >
//         <div
//           style={{ fontFamily: "'Cinzel', serif" }}
//           className="text-lg font-bold text-primary"
//         >
//           AbyBaby
//           <span className="text-foreground/65 ml-1 text-base">Group</span>
//         </div>
//       </div>

//       <StoriesBar stories={STORIES} pageLabel="Latest Stories" />

//       <div className="max-w-[600px] mx-auto px-5 pt-5 pb-3">
//         <h2
//           style={{ fontFamily: "'Cinzel', serif" }}
//           className="text-xl font-bold text-foreground"
//         >
//           Ideas & <span className="text-primary">Perspectives</span>
//         </h2>
//         <p className="text-xs text-muted-foreground mt-1">
//           {ARTICLES.length} articles · Updated weekly
//         </p>
//       </div>

//       {/* ── Articles with skew animation ── */}
//       <div className="max-w-[600px] mx-auto divide-y divide-border">
//         {ARTICLES.map((article, i) => (
//           <SkewArticleCard key={article.id} article={article} index={i} />
//         ))}
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Clock, Tag, Check, Link } from "lucide-react";
// import { StoriesBar } from "../StoriesBar";

const STORIES = [
  {
    id: "b1",
    name: "Event Blog",
    thumb:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "b2",
    name: "Insights",
    thumb:
      "https://images.unsplash.com/photo-1704362626757-e24cf4127327?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "b3",
    name: "Strategy",
    thumb:
      "https://images.unsplash.com/photo-1738151466731-7d98e3fe6b3c?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "b4",
    name: "Community",
    thumb:
      "https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "b5",
    name: "Case Study",
    thumb:
      "https://images.unsplash.com/photo-1646929189708-eb1b9fff7387?w=200&h=200&fit=crop&auto=format",
  },
];

const ARTICLES = [
  {
    id: "ar1",
    cat: "INSIGHTS",
    date: "Mar 12, 2025",
    readTime: "5 min read",
    title: "Why BTL Marketing Still Wins in Rural India",
    excerpt:
      "Digital adoption is rising, but face-to-face brand interactions remain the most trusted channel in India's heartland. Here's why BTL isn't going anywhere.",
    img: "https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=800&h=450&fit=crop&auto=format",
    likes: 1247,
    comments: 89,
    tags: ["BTL", "Rural Marketing", "India"],
    slug: "btl-marketing-rural-india",
  },
  {
    id: "ar2",
    cat: "EVENTS",
    date: "Feb 28, 2025",
    readTime: "8 min read",
    title: "Behind the Scenes: Managing a 10,000-Person Product Launch",
    excerpt:
      "From logistics to live entertainment — how our team pulled off one of India's biggest FMCG launches in under 12 weeks with zero surprises on the day.",
    img: "https://images.unsplash.com/photo-1562649268-bd8fa4cf7ad7?w=800&h=450&fit=crop&auto=format",
    likes: 2103,
    comments: 156,
    tags: ["Event Management", "FMCG", "Case Study"],
    slug: "10000-person-product-launch",
  },
  {
    id: "ar3",
    cat: "STRATEGY",
    date: "Jan 15, 2025",
    readTime: "6 min read",
    title: "The Phygital Future of Brand Activation",
    excerpt:
      "Merging physical events with digital touchpoints creates exponentially richer, more measurable consumer experiences. Here's how to build a phygital strategy.",
    img: "https://images.unsplash.com/photo-1704362626757-e24cf4127327?w=800&h=450&fit=crop&auto=format",
    likes: 978,
    comments: 67,
    tags: ["Digital", "Strategy", "Phygital"],
    slug: "phygital-future-brand-activation",
  },
  {
    id: "ar4",
    cat: "CASE STUDY",
    date: "Dec 10, 2024",
    readTime: "10 min read",
    title: "How We Built 50-City Simultaneous Activations for Independence Day",
    excerpt:
      "Coordinating 50+ city activations on the same day required military-level planning. Our operations head breaks down the logistics, tech stack, and lessons learned.",
    img: "https://images.unsplash.com/photo-1600400411727-6f0fd6e10933?w=800&h=450&fit=crop&auto=format",
    likes: 1834,
    comments: 124,
    tags: ["Operations", "Scale", "Case Study"],
    slug: "50-city-independence-day-activations",
  },
];

const CAT_COLORS = {
  INSIGHTS: "text-blue-400",
  EVENTS: "text-amber-400",
  STRATEGY: "text-green-400",
  "CASE STUDY": "text-purple-400",
};

const getSkewVariants = (isEven) => ({
  hidden: {
    opacity: 0,
    scale: 0.93,
    x: isEven ? 80 : -80,
    skewY: isEven ? 18 : -18,
    skewX: isEven ? 8 : -8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    skewY: 0,
    skewX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
});

const innerVariants = {
  hidden: { opacity: 0, skewX: 12, x: 20 },
  visible: {
    opacity: 1,
    skewX: 0,
    x: 0,
    transition: { duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] },
  },
};

const imageVariants = {
  hidden: { clipPath: "inset(0 100% 0 0 round 4px)", skewX: -10 },
  visible: {
    clipPath: "inset(0 0%   0 0 round 4px)",
    skewX: 0,
    transition: { duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] },
  },
};

function SkewArticleCard({ article, index }) {
  const [expanded, setExpanded] = useState(false);
  // "idle" | "copying" | "copied"
  const [copyState, setCopyState] = useState("idle");

  const isEven = index % 2 === 0;
  const skewVariants = getSkewVariants(isEven);

  const handleCopyLink = async () => {
    if (copyState !== "idle") return; // prevent double-click during animation

    // Build a shareable URL using the current page origin + article slug
    const url = `${window.location.origin}/blog/${article.slug}`;

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Fallback for older browsers / non-secure contexts
      const ta = document.createElement("textarea");
      ta.value = url;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }

    setCopyState("copied");
    // Reset back to idle after 2 seconds
    setTimeout(() => setCopyState("idle"), 2000);
  };

  return (
    <div className="overflow-hidden">
      <motion.article
        className="bg-card border-b border-border"
        variants={skewVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* ── Post header ── */}
        <motion.div
          className="flex items-center gap-3 px-4 py-3"
          variants={innerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-8 h-8 rounded-full border border-primary/50 bg-gradient-to-br from-lime-700 to-primary flex items-center justify-center flex-shrink-0">
            <span
              style={{ fontFamily: "'Cinzel', serif" }}
              className="text-[10px] font-bold text-white"
            >
              AB
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div
              style={{ fontFamily: "'Cinzel', serif" }}
              className="text-sm font-semibold text-foreground"
            >
              abybaby_group
            </div>
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <span>{article.date}</span>
              <span>·</span>
              <Clock size={10} />
              <span>{article.readTime}</span>
            </div>
          </div>
          <motion.span
            className={`text-[10px] font-bold tracking-widest ${CAT_COLORS[article.cat] || "text-primary"}`}
            initial={{ opacity: 0, skewX: -25, x: 16 }}
            whileInView={{ opacity: 1, skewX: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              delay: 0.3 + index * 0.08,
              ease: "backOut",
            }}
          >
            {article.cat}
          </motion.span>
        </motion.div>

        {/* ── Cover image ── */}
        <div className="relative aspect-video bg-muted overflow-hidden">
          <motion.img
            src={article.img}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="lazy"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </div>

        {/* ── Content ── */}
        <motion.div
          className="px-4 py-4"
          initial={{ opacity: 0, skewY: isEven ? 8 : -8, y: 20 }}
          whileInView={{ opacity: 1, skewY: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.25 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h3
            style={{ fontFamily: "'Cinzel', serif" }}
            className="text-base font-bold text-foreground leading-snug mb-2"
          >
            {article.title}
          </h3>
          <p className="text-sm text-foreground/60 leading-relaxed mb-3">
            {expanded ? article.excerpt : article.excerpt.slice(0, 100) + "..."}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary text-xs font-semibold flex items-center gap-1.5 mb-4"
          >
            {expanded ? "Read less" : "Read more"} <ArrowRight size={11} />
          </button>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {article.tags.map((tag, ti) => (
              <motion.span
                key={tag}
                className="flex items-center gap-1 text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full"
                initial={{
                  opacity: 0,
                  skewX: isEven ? 20 : -20,
                  x: isEven ? 18 : -18,
                }}
                whileInView={{ opacity: 1, skewX: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.35 + index * 0.08 + ti * 0.06,
                  ease: "easeOut",
                }}
              >
                <Tag size={9} />
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border/50 pt-3">
            {/* Copy Link button — toggles between states */}
            <motion.button
              onClick={handleCopyLink}
              className={`ml-auto font-semibold flex items-center gap-1.5 transition-colors duration-200 cursor-pointer select-none ${
                copyState === "copied"
                  ? "text-green-400"
                  : "text-primary hover:text-primary/80"
              }`}
              whileTap={{ scale: 0.93 }}
            >
              <motion.span
                key={copyState} // re-mounts on state change → triggers fade-in
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-1.5"
              >
                {copyState === "copied" ? (
                  <>
                    <Check size={11} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Link size={10} />
                    Copy Link
                  </>
                )}
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </motion.article>
    </div>
  );
}

export function BlogPage({ navigate, currentPage, sidebarWidth = 240 }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile header */}
      <div
        className="lg:hidden sticky top-0 z-30 bg-card/96 backdrop-blur-sm border-b border-border px-5 h-14 flex items-center gap-3"
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
      {/* 
      <StoriesBar
        stories={STORIES}
        pageLabel="Latest Stories"
        sidebarWidth={sidebarWidth}
      /> */}

      <div className="max-w-[600px] px-5 pt-5 pb-3">
        <h2
          style={{ fontFamily: "'Cinzel', serif" }}
          className="text-xl font-bold text-foreground"
        >
          Ideas & <span className="text-primary">Perspectives</span>
        </h2>
        <p className="text-xs text-muted-foreground mt-1">
          {ARTICLES.length} articles · Updated weekly
        </p>
      </div>

      <div className="max-w-[600px]  divide-y divide-border pt-8">
        {ARTICLES.map((article, i) => (
          <SkewArticleCard key={article.id} article={article} index={i} />
        ))}
      </div>
    </div>
  );
}
