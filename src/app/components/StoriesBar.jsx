// // import { useState, useEffect } from "react";
// // import { motion } from "motion/react";
// // import { X } from "lucide-react";
// // // import type { Story } from "../types";

// // // interface StoriesBarProps {
// // //   stories: Story[];
// // //   pageLabel?: string;
// // // }

// // export function StoriesBar({ stories, pageLabel }) {
// //   const [viewerOpen, setViewerOpen] = useState(false);
// //   const [activeIdx, setActiveIdx] = useState(0);
// //   const [progress, setProgress] = useState(0);
// //   const [closing, setClosing] = useState(false);
// //   const [viewed, setViewed] = useState(new Set());
// //   const openStory = (idx) => {
// //     setActiveIdx(idx);
// //     setProgress(0);
// //     setViewerOpen(true);
// //   };

// //   const closeViewer = () => {
// //     setClosing(true);
// //     setViewed((v) => new Set([...v, stories[activeIdx].id]));
// //     setTimeout(() => {
// //       setViewerOpen(false);
// //       setClosing(false);
// //       setProgress(0);
// //     }, 180);
// //   };

// //   const goNext = () => {
// //     setViewed((v) => new Set([...v, stories[activeIdx].id]));
// //     if (activeIdx < stories.length - 1) {
// //       setActiveIdx((i) => i + 1);
// //       setProgress(0);
// //     } else {
// //       closeViewer();
// //     }
// //   };

// //   const goPrev = () => {
// //     if (activeIdx > 0) {
// //       setActiveIdx((i) => i - 1);
// //       setProgress(0);
// //     }
// //   };

// //   useEffect(() => {
// //     if (!viewerOpen || closing) return;
// //     const timer = setInterval(() => {
// //       setProgress((p) => {
// //         if (p >= 100) {
// //           if (activeIdx < stories.length - 1) {
// //             setViewed((v) => new Set([...v, stories[activeIdx].id]));
// //             setActiveIdx((i) => i + 1);
// //             return 0;
// //           } else {
// //             closeViewer();
// //             return 0;
// //           }
// //         }
// //         return p + 2.5;
// //       });
// //     }, 100);
// //     return () => clearInterval(timer);
// //   }, [viewerOpen, activeIdx, closing, stories.length]);

// //   const story = stories[activeIdx];

// //   return (
// //     <>
// //       {/* Stories Row */}
// //       <div className="sticky lg:top-0 z-20 flex gap-4 overflow-x-auto scrollbar-hide px-4 py-4 border-b border-border bg-card top-14">
// //         {stories.map((s, idx) => (
// //           <motion.button
// //             key={s.id}
// //             onClick={() => openStory(idx)}
// //             className="flex flex-col items-center gap-1.5 flex-shrink-0"
// //             whileTap={{ scale: 0.92 }}
// //           >
// //             <div
// //               className={`p-[2px] rounded-full ${
// //                 viewed.has(s.id)
// //                   ? "bg-muted"
// //                   : "bg-gradient-to-tr from-green-700 via-lime-400 to-primary"
// //               }`}
// //             >
// //               <div className="w-[58px] h-[58px] rounded-full border-2 border-background overflow-hidden bg-muted">
// //                 <img
// //                   src={s.thumb}
// //                   alt={s.name}
// //                   className="w-full h-full object-cover"
// //                   loading="lazy"
// //                 />
// //               </div>
// //             </div>
// //             <span className="text-[10px] text-foreground/65 w-16 text-center truncate leading-tight">
// //               {s.name}
// //             </span>
// //           </motion.button>
// //         ))}
// //       </div>

// //       {/* Full-screen Story Viewer */}
// //       {viewerOpen && story && (
// //         <motion.div
// //           className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
// //           animate={{ opacity: closing ? 0 : 1 }}
// //           initial={{ opacity: 0 }}
// //           transition={{ duration: 0.18 }}
// //         >
// //           <div className="relative w-full h-full max-w-[480px] overflow-hidden">
// //             {/* Progress bars */}
// //             <div className="absolute top-3 left-3 right-3 flex gap-1 z-20">
// //               {stories.map((_, i) => (
// //                 <div
// //                   key={i}
// //                   className="flex-1 h-[2px] bg-white/25 rounded-full overflow-hidden"
// //                 >
// //                   <div
// //                     className="h-full bg-white rounded-full"
// //                     style={{
// //                       width:
// //                         i < activeIdx
// //                           ? "100%"
// //                           : i === activeIdx
// //                             ? `${progress}%`
// //                             : "0%",
// //                     }}
// //                   />
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Header */}
// //             <div className="absolute top-8 left-3 right-10 flex items-center gap-2.5 z-20 ">
// //               <div className="w-9 h-9 rounded-full border border-primary/60 bg-gradient-to-br from-lime-700 to-primary flex items-center justify-center flex-shrink-0">
// //                 <span
// //                   style={{ fontFamily: "'Cinzel', serif" }}
// //                   className="text-xs font-bold text-white"
// //                 >
// //                   AB
// //                 </span>
// //               </div>
// //               <div>
// //                 <div
// //                   style={{ fontFamily: "'Cinzel', serif" }}
// //                   className="text-white text-sm font-semibold leading-tight"
// //                 >
// //                   AbyBaby Group
// //                 </div>
// //                 <div className="text-white/55 text-xs">{story.name}</div>
// //               </div>
// //             </div>

// //             {/* Close */}
// //             <button
// //               onClick={closeViewer}
// //               className="absolute top-8 right-3 z-20 text-white/80 hover:text-white p-1"
// //             >
// //               <X size={22} />
// //             </button>

// //             {/* Story Image */}
// //             <img
// //               src={`${story.thumb.split("?")[0]}?w=600&h=1060&fit=crop&auto=format`}
// //               alt={story.name}
// //               className="w-full h-full object-cover"
// //             />

// //             {/* Bottom gradient + label */}
// //             <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/85 to-transparent pointer-events-none" />
// //             <div className="absolute bottom-10 left-5 right-5 pointer-events-none">
// //               <p
// //                 style={{ fontFamily: "'Cinzel', serif" }}
// //                 className="text-white text-xl font-bold"
// //               >
// //                 {story.name}
// //               </p>
// //               {pageLabel && (
// //                 <p className="text-white/55 text-sm mt-1">{pageLabel}</p>
// //               )}
// //             </div>

// //             {/* Tap zones */}
// //             <button
// //               className="absolute left-0 top-16 bottom-0 w-1/3 z-10"
// //               onClick={goPrev}
// //             />
// //             <button
// //               className="absolute right-0 top-16 bottom-0 w-2/3 z-10"
// //               onClick={goNext}
// //             />
// //           </div>
// //         </motion.div>
// //       )}
// //     </>
// //   );
// // }
// // import { useState, useEffect } from "react";
// // import { motion } from "motion/react";
// // import { X } from "lucide-react";

// // export function StoriesBar({ stories, pageLabel, sidebarWidth = 0 }) {
// //   const [viewerOpen, setViewerOpen] = useState(false);
// //   const [activeIdx, setActiveIdx] = useState(0);
// //   const [progress, setProgress] = useState(0);
// //   const [closing, setClosing] = useState(false);
// //   const [viewed, setViewed] = useState(new Set());

// //   const openStory = (idx) => {
// //     setActiveIdx(idx);
// //     setProgress(0);
// //     setViewerOpen(true);
// //   };

// //   const closeViewer = () => {
// //     setClosing(true);
// //     setViewed((v) => new Set([...v, stories[activeIdx].id]));
// //     setTimeout(() => {
// //       setViewerOpen(false);
// //       setClosing(false);
// //       setProgress(0);
// //     }, 180);
// //   };

// //   const goNext = () => {
// //     setViewed((v) => new Set([...v, stories[activeIdx].id]));
// //     if (activeIdx < stories.length - 1) {
// //       setActiveIdx((i) => i + 1);
// //       setProgress(0);
// //     } else {
// //       closeViewer();
// //     }
// //   };

// //   const goPrev = () => {
// //     if (activeIdx > 0) {
// //       setActiveIdx((i) => i - 1);
// //       setProgress(0);
// //     }
// //   };

// //   // Auto-progress timer
// //   useEffect(() => {
// //     if (!viewerOpen || closing) return;
// //     const timer = setInterval(() => {
// //       setProgress((p) => {
// //         if (p >= 100) {
// //           if (activeIdx < stories.length - 1) {
// //             setViewed((v) => new Set([...v, stories[activeIdx].id]));
// //             setActiveIdx((i) => i + 1);
// //             return 0;
// //           } else {
// //             closeViewer();
// //             return 0;
// //           }
// //         }
// //         return p + 2.5;
// //       });
// //     }, 100);
// //     return () => clearInterval(timer);
// //   }, [viewerOpen, activeIdx, closing, stories.length]);

// //   // Keyboard arrow navigation
// //   useEffect(() => {
// //     if (!viewerOpen) return;
// //     const onKey = (e) => {
// //       if (e.key === "ArrowRight" || e.key === ">") goNext();
// //       if (e.key === "ArrowLeft" || e.key === "<") goPrev();
// //       if (e.key === "Escape") closeViewer();
// //     };
// //     window.addEventListener("keydown", onKey);
// //     return () => window.removeEventListener("keydown", onKey);
// //   }, [viewerOpen, activeIdx, closing]);

// //   const story = stories[activeIdx];

// //   return (
// //     <>
// //       {/* Stories Row */}
// //       <div
// //         className="fixed lg:top-0 z-20 flex gap-4 overflow-x-auto scrollbar-hide px-4 py-4 border-b border-border bg-card top-14"
// //         style={{
// //           left: `${sidebarWidth}px`,
// //           right: 0,
// //           transition: "left 300ms cubic-bezier(0.4,0,0.2,1)",
// //         }}
// //       >
// //         {stories.map((s, idx) => (
// //           <motion.button
// //             key={s.id}
// //             onClick={() => openStory(idx)}
// //             className="flex flex-col items-center gap-1.5 flex-shrink-0"
// //             whileTap={{ scale: 0.92 }}
// //           >
// //             <div
// //               className={`p-[2px] rounded-full ${
// //                 viewed.has(s.id)
// //                   ? "bg-muted"
// //                   : "bg-gradient-to-tr from-lime-600 via-lime-400 to-green-300"
// //               }`}
// //             >
// //               <div className="w-[58px] h-[58px] rounded-full border-2 border-background overflow-hidden bg-muted">
// //                 <img
// //                   src={s.thumb}
// //                   alt={s.name}
// //                   className="w-full h-full object-cover"
// //                   loading="lazy"
// //                 />
// //               </div>
// //             </div>
// //             <span className="text-[10px] text-foreground/65 w-16 text-center truncate leading-tight">
// //               {s.name}
// //             </span>
// //           </motion.button>
// //         ))}
// //       </div>

// //       {/* Full-screen Story Viewer */}
// //       {viewerOpen && story && (
// //         <motion.div
// //           className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
// //           animate={{ opacity: closing ? 0 : 1 }}
// //           initial={{ opacity: 0 }}
// //           transition={{ duration: 0.18 }}
// //         >
// //           <div className="relative w-full h-full max-w-[480px] overflow-hidden">
// //             {/* Progress bars */}
// //             <div className="absolute top-3 left-3 right-3 flex gap-1 z-20">
// //               {stories.map((_, i) => (
// //                 <div
// //                   key={i}
// //                   className="flex-1 h-[2px] bg-white/25 rounded-full overflow-hidden"
// //                 >
// //                   <div
// //                     className="h-full bg-white rounded-full"
// //                     style={{
// //                       width:
// //                         i < activeIdx
// //                           ? "100%"
// //                           : i === activeIdx
// //                             ? `${progress}%`
// //                             : "0%",
// //                     }}
// //                   />
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Header */}
// //             <div className="absolute top-8 left-3 right-10 flex items-center gap-2.5 z-20">
// //               <div className="w-9 h-9 rounded-full border border-primary/60 bg-gradient-to-br from-lime-600 to-primary flex items-center justify-center flex-shrink-0">
// //                 <span
// //                   style={{ fontFamily: "'Cinzel', serif" }}
// //                   className="text-xs font-bold text-white"
// //                 >
// //                   AB
// //                 </span>
// //               </div>
// //               <div>
// //                 <div
// //                   style={{ fontFamily: "'Cinzel', serif" }}
// //                   className="text-white text-sm font-semibold leading-tight"
// //                 >
// //                   AbyBaby Group
// //                 </div>
// //                 <div className="text-white/55 text-xs">{story.name}</div>
// //               </div>
// //             </div>

// //             {/* Close */}
// //             <button
// //               onClick={closeViewer}
// //               className="absolute top-8 right-3 z-20 text-white/80 hover:text-white p-1"
// //             >
// //               <X size={22} />
// //             </button>

// //             {/* Story Image */}
// //             <img
// //               src={`${story.thumb.split("?")[0]}?w=600&h=1060&fit=crop&auto=format`}
// //               alt={story.name}
// //               className="w-full h-full object-cover"
// //             />

// //             {/* Bottom gradient + label */}
// //             <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/85 to-transparent pointer-events-none" />
// //             <div className="absolute bottom-10 left-5 right-5 pointer-events-none">
// //               <p
// //                 style={{ fontFamily: "'Cinzel', serif" }}
// //                 className="text-white text-xl font-bold"
// //               >
// //                 {story.name}
// //               </p>
// //               {pageLabel && (
// //                 <p className="text-white/55 text-sm mt-1">{pageLabel}</p>
// //               )}
// //             </div>

// //             {/* Tap zones */}
// //             <button
// //               className="absolute left-0 top-16 bottom-0 w-1/3 z-10"
// //               onClick={goPrev}
// //             />
// //             <button
// //               className="absolute right-0 top-16 bottom-0 w-2/3 z-10"
// //               onClick={goNext}
// //             />
// //           </div>
// //         </motion.div>
// //       )}
// //     </>
// //   );
// // }
// import { useState, useEffect, useRef } from "react";
// import { motion } from "motion/react";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";

// const CLIENTS = [
//   {
//     id: "adobe",
//     name: "Hero",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/800px-Adobe_Corporate_Logo.png",
//     bg: "from-red-700 to-red-500",
//     initials: "HR",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Creative Cloud Partner",
//   },
//   {
//     id: "spotify",
//     name: "Tata Motors",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/800px-Spotify_logo_with_text.svg.png",
//     bg: "from-green-700 to-green-500",
//     initials: "TM",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Automobile Partner",
//   },
//   {
//     id: "figma",
//     name: "ITC Limited",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
//     bg: "from-purple-700 to-purple-500",
//     initials: "IL",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "FMCG Partner",
//   },
//   {
//     id: "notion",
//     name: "Toyota",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
//     bg: "from-gray-800 to-gray-600",
//     initials: "TT",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Automobile Partner",
//   },
//   {
//     id: "slack",
//     name: "Tata Steel",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/800px-Slack_icon_2019.svg.png",
//     bg: "from-violet-700 to-violet-500",
//     initials: "TS",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Steel Industry Partner",
//   },
//   {
//     id: "stripe",
//     name: "Flipkart",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/800px-Stripe_Logo%2C_revised_2016.svg.png",
//     bg: "from-indigo-700 to-indigo-500",
//     initials: "FK",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "E-Commerce Partner",
//   },
//   {
//     id: "vercel",
//     name: "Titan Eye+",
//     logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
//     bg: "from-gray-900 to-gray-700",
//     initials: "TE",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Retail Partner",
//   },
//   {
//     id: "max",
//     name: "Max",
//     logo: "https://linear.app/favicon.ico",
//     bg: "from-blue-700 to-blue-500",
//     initials: "MX",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Fashion Partner",
//   },
//   {
//     id: "tanishq",
//     name: "Tanishq",
//     logo: "https://linear.app/favicon.ico",
//     bg: "from-yellow-700 to-yellow-500",
//     initials: "TN",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Jewellery Partner",
//   },
//   {
//     id: "mahindra",
//     name: "Mahindra",
//     logo: "https://linear.app/favicon.ico",
//     bg: "from-red-800 to-red-600",
//     initials: "MD",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Automobile Partner",
//   },
//   {
//     id: "croma",
//     name: "Croma",
//     logo: "https://linear.app/favicon.ico",
//     bg: "from-green-800 to-green-600",
//     initials: "CR",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Electronics Partner",
//   },
//   {
//     id: "hyundai",
//     name: "Hyundai",
//     logo: "https://linear.app/favicon.ico",
//     bg: "from-blue-800 to-blue-600",
//     initials: "HD",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Automobile Partner",
//   },
//   {
//     id: "kutchina",
//     name: "Kutchina",
//     logo: "https://linear.app/favicon.ico",
//     bg: "from-orange-700 to-orange-500",
//     initials: "KN",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Kitchen Appliances",
//   },
//   {
//     id: "ashok-leyland",
//     name: "Ashok Leyland",
//     logo: "https://linear.app/favicon.ico",
//     bg: "from-teal-700 to-teal-500",
//     initials: "AL",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Commercial Vehicles",
//   },
//   {
//     id: "indian-oil",
//     name: "Indian Oil",
//     logo: "https://linear.app/favicon.ico",
//     bg: "from-orange-800 to-orange-600",
//     initials: "IO",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Energy Partner",
//   },
//   {
//     id: "volvo",
//     name: "Volvo",
//     logo: "https://linear.app/favicon.ico",
//     bg: "from-blue-900 to-blue-700",
//     initials: "VV",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Automobile Partner",
//   },
//   {
//     id: "honda",
//     name: "Honda",
//     logo: "https://linear.app/favicon.ico",
//     bg: "from-red-900 to-red-700",
//     initials: "HN",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Automobile Partner",
//   },
//   {
//     id: "maruti",
//     name: "Maruti Suzuki",
//     logo: "https://linear.app/favicon.ico",
//     bg: "from-sky-700 to-sky-500",
//     initials: "MS",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Automobile Partner",
//   },
//   {
//     id: "krishi-vikas",
//     name: "Krishi Vikas",
//     logo: "https://linear.app/favicon.ico",
//     bg: "from-lime-700 to-lime-500",
//     initials: "KV",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Agriculture Partner",
//   },
//   {
//     id: "kangaroo-kids",
//     name: "Kangaroo Kids",
//     logo: "https://linear.app/favicon.ico",
//     bg: "from-pink-700 to-pink-500",
//     initials: "KK",
//     videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     tagline: "Education Partner",
//   },
// ];

// // ─────────────────────────────────────────────────────────────────────────────
// // VIDEO VIEWER
// // ─────────────────────────────────────────────────────────────────────────────
// function VideoViewer({ clients, activeIdx, setActiveIdx, onClose, closing }) {
//   const [progress, setProgress] = useState(0);
//   const videoRef = useRef(null);

//   const client = clients[activeIdx];
//   const hasPrev = activeIdx > 0;
//   const hasNext = activeIdx < clients.length - 1;

//   useEffect(() => {
//     setProgress(0);
//   }, [activeIdx]);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") onClose();
//       if (e.key === "ArrowRight" && hasNext) setActiveIdx((i) => i + 1);
//       if (e.key === "ArrowLeft" && hasPrev) setActiveIdx((i) => i - 1);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [activeIdx, hasPrev, hasNext]);

//   const handleTimeUpdate = () => {
//     const v = videoRef.current;
//     if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
//   };

//   const goPrev = () => {
//     if (hasPrev) setActiveIdx((i) => i - 1);
//   };
//   const goNext = () => {
//     if (hasNext) setActiveIdx((i) => i + 1);
//     else onClose();
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center"
//       animate={{ opacity: closing ? 0 : 1 }}
//       initial={{ opacity: 0 }}
//       transition={{ duration: 0.18 }}
//     >
//       {/* Prev Arrow */}
//       <button
//         onClick={goPrev}
//         disabled={!hasPrev}
//         className={`absolute left-2 md:left-6 z-30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
//           hasPrev
//             ? "bg-white/20 hover:bg-white/40 text-white"
//             : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <ChevronLeft size={24} />
//       </button>

//       {/* Video card */}
//       <div className="relative w-full h-full max-w-[480px] overflow-hidden bg-black">
//         {/* Progress bar */}
//         <div className="absolute top-3 left-3 right-3 z-20">
//           <div className="h-[2px] bg-white/25 rounded-full overflow-hidden">
//             <div
//               className="h-full bg-white rounded-full transition-none"
//               style={{ width: `${progress}%` }}
//             />
//           </div>
//         </div>

//         {/* Header */}
//         <div className="absolute top-8 left-3 right-10 flex items-center gap-2.5 z-20">
//           <div
//             className={`w-9 h-9 rounded-full border border-primary/60 bg-gradient-to-br ${client.bg} flex items-center justify-center flex-shrink-0 overflow-hidden`}
//           >
//             <img
//               src={client.logo}
//               alt={client.name}
//               className="w-6 h-6 object-contain"
//               onError={(e) => {
//                 e.currentTarget.style.display = "none";
//                 e.currentTarget.nextSibling.style.display = "flex";
//               }}
//             />
//             <span
//               style={{ fontFamily: "var(--font-heading)", display: "none" }}
//               className="text-xs font-bold text-white w-full h-full items-center justify-center"
//             >
//               {client.initials}
//             </span>
//           </div>
//           <div>
//             <div
//               style={{ fontFamily: "var(--font-heading)" }}
//               className="text-white text-sm font-semibold leading-tight"
//             >
//               {client.name}
//             </div>
//             <div
//               style={{ fontFamily: "var(--font-sans)" }}
//               className="text-white/55 text-xs"
//             >
//               {client.tagline}
//             </div>
//           </div>
//         </div>

//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute top-8 right-3 z-20 text-white/80 hover:text-white p-1 transition-colors"
//         >
//           <X size={22} />
//         </button>

//         {/* Video */}
//         <video
//           ref={videoRef}
//           key={client.id}
//           src={client.videoUrl}
//           autoPlay
//           playsInline
//           className="w-full h-full object-cover"
//           onTimeUpdate={handleTimeUpdate}
//           onEnded={goNext}
//         />

//         {/* Bottom gradient */}
//         <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/85 to-transparent pointer-events-none" />

//         {/* Bottom label */}
//         <div className="absolute bottom-10 left-5 right-16 pointer-events-none">
//           <p
//             style={{ fontFamily: "var(--font-heading)" }}
//             className="text-white text-xl font-bold"
//           >
//             {client.name}
//           </p>
//           <p
//             style={{ fontFamily: "var(--font-sans)" }}
//             className="text-white/55 text-sm mt-1"
//           >
//             {client.tagline}
//           </p>
//         </div>

//         {/* Counter */}
//         <div className="absolute bottom-10 right-5 pointer-events-none">
//           <span
//             style={{ fontFamily: "var(--font-sans)" }}
//             className="text-white/40 text-xs"
//           >
//             {activeIdx + 1} / {clients.length}
//           </span>
//         </div>
//       </div>

//       {/* Next Arrow */}
//       <button
//         onClick={goNext}
//         disabled={!hasNext}
//         className={`absolute right-2 md:right-6 z-30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
//           hasNext
//             ? "bg-white/20 hover:bg-white/40 text-white"
//             : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <ChevronRight size={24} />
//       </button>
//     </motion.div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // INFINITE CAROUSEL STRIP
// // ─────────────────────────────────────────────────────────────────────────────
// function InfiniteCarousel({ onClientClick, viewedIds }) {
//   const trackRef = useRef(null);
//   const animRef = useRef(null);
//   const posRef = useRef(0);
//   const pausedRef = useRef(false);
//   const SPEED = 0.5; // px per frame — adjust for faster/slower

//   // Duplicate items so the loop is seamless
//   const items = [...CLIENTS, ...CLIENTS];

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     const halfWidth = track.scrollWidth / 2;

//     const tick = () => {
//       if (!pausedRef.current) {
//         posRef.current += SPEED;
//         // Once we've scrolled one full copy, reset to 0 — seamless loop
//         if (posRef.current >= halfWidth) posRef.current = 0;
//         track.style.transform = `translateX(-${posRef.current}px)`;
//       }
//       animRef.current = requestAnimationFrame(tick);
//     };

//     animRef.current = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(animRef.current);
//   }, []);

//   return (
//     <div
//       className="overflow-hidden w-full"
//       onMouseEnter={() => {
//         pausedRef.current = true;
//       }}
//       onMouseLeave={() => {
//         pausedRef.current = false;
//       }}
//       onTouchStart={() => {
//         pausedRef.current = true;
//       }}
//       onTouchEnd={() => {
//         pausedRef.current = false;
//       }}
//     >
//       <div
//         ref={trackRef}
//         className="flex gap-4 px-4 py-4 will-change-transform"
//         style={{ width: "max-content" }}
//       >
//         {items.map((c, idx) => (
//           <motion.button
//             key={`${c.id}-${idx}`}
//             onClick={() => onClientClick(idx % CLIENTS.length)}
//             className="flex flex-col items-center gap-1.5 flex-shrink-0"
//             whileTap={{ scale: 0.92 }}
//           >
//             <div
//               className={`p-[2px] rounded-full ${
//                 viewedIds.has(c.id)
//                   ? "bg-muted"
//                   : "bg-gradient-to-tr from-lime-700 via-lime-400 to-primary"
//               }`}
//             >
//               <div className="w-[54px] h-[54px] rounded-full border-2 border-background overflow-hidden bg-white flex items-center justify-center">
//                 <img
//                   src={c.logo}
//                   alt={c.name}
//                   className="w-8 h-8 object-contain"
//                   onError={(e) => {
//                     e.currentTarget.style.display = "none";
//                     e.currentTarget.nextSibling.style.display = "flex";
//                   }}
//                 />
//                 <div
//                   className={`w-full h-full rounded-full bg-gradient-to-br ${c.bg} items-center justify-center hidden`}
//                 >
//                   <span
//                     style={{ fontFamily: "var(--font-heading)" }}
//                     className="text-xs font-bold text-white"
//                   >
//                     {c.initials}
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <span
//               style={{ fontFamily: "var(--font-sans)" }}
//               className="text-[10px] text-foreground/65 w-16 text-center truncate leading-tight"
//             >
//               {c.name}
//             </span>
//           </motion.button>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // CLIENTS BAR
// // ─────────────────────────────────────────────────────────────────────────────
// export function ClientsBar({ sidebarWidth = 0 }) {
//   const [viewerOpen, setViewerOpen] = useState(false);
//   const [activeIdx, setActiveIdx] = useState(0);
//   const [closing, setClosing] = useState(false);
//   const [viewed, setViewed] = useState(new Set());
//   const [isDesktop, setIsDesktop] = useState(
//     typeof window !== "undefined" ? window.innerWidth >= 1024 : true,
//   );

//   useEffect(() => {
//     const handler = () => setIsDesktop(window.innerWidth >= 1024);
//     window.addEventListener("resize", handler);
//     return () => window.removeEventListener("resize", handler);
//   }, []);

//   const openClient = (idx) => {
//     setActiveIdx(idx);
//     setViewed((v) => new Set([...v, CLIENTS[idx].id]));
//     setViewerOpen(true);
//   };

//   const handleSetActiveIdx = (updater) => {
//     setActiveIdx((prev) => {
//       const next = typeof updater === "function" ? updater(prev) : updater;
//       setViewed((v) => new Set([...v, CLIENTS[next].id]));
//       return next;
//     });
//   };

//   const closeViewer = () => {
//     setClosing(true);
//     setTimeout(() => {
//       setViewerOpen(false);
//       setClosing(false);
//     }, 180);
//   };

//   return (
//     <>
//       {/* ── Fixed bar with infinite carousel ───────────────── */}
//       <div
//         className="fixed lg:top-0 z-30 border-b border-border bg-card top-14"
//         style={{
//           left: isDesktop ? `${sidebarWidth}px` : "0px",
//           right: "0px",
//           transition: "left 300ms cubic-bezier(0.4,0,0.2,1)",
//         }}
//       >
//         {/* Fade edges for a polished infinite feel */}
//         <div className="relative">
//           {/* Left fade */}
//           <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none bg-gradient-to-r from-card to-transparent" />
//           {/* Right fade */}
//           <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none bg-gradient-to-l from-card to-transparent" />

//           <InfiniteCarousel onClientClick={openClient} viewedIds={viewed} />
//         </div>
//       </div>

//       {/* ── Video viewer modal ──────────────────────────────── */}
//       {viewerOpen && (
//         <VideoViewer
//           clients={CLIENTS}
//           activeIdx={activeIdx}
//           setActiveIdx={handleSetActiveIdx}
//           onClose={closeViewer}
//           closing={closing}
//         />
//       )}
//     </>
//   );
// }
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const CLIENTS = [
  {
    id: "adobe",
    name: "Hero",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/800px-Adobe_Corporate_Logo.png",
    bg: "from-red-700 to-red-500",
    initials: "HR",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Creative Cloud Partner",
  },
  {
    id: "spotify",
    name: "Tata Motors",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/800px-Spotify_logo_with_text.svg.png",
    bg: "from-green-700 to-green-500",
    initials: "TM",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Automobile Partner",
  },
  {
    id: "figma",
    name: "ITC Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    bg: "from-purple-700 to-purple-500",
    initials: "IL",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "FMCG Partner",
  },
  {
    id: "notion",
    name: "Toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    bg: "from-gray-800 to-gray-600",
    initials: "TT",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Automobile Partner",
  },
  {
    id: "slack",
    name: "Tata Steel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/800px-Slack_icon_2019.svg.png",
    bg: "from-violet-700 to-violet-500",
    initials: "TS",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Steel Industry Partner",
  },
  {
    id: "stripe",
    name: "Flipkart",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/800px-Stripe_Logo%2C_revised_2016.svg.png",
    bg: "from-indigo-700 to-indigo-500",
    initials: "FK",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "E-Commerce Partner",
  },
  {
    id: "vercel",
    name: "Titan Eye+",
    logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
    bg: "from-gray-900 to-gray-700",
    initials: "TE",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Retail Partner",
  },
  {
    id: "max",
    name: "Max",
    logo: "https://linear.app/favicon.ico",
    bg: "from-blue-700 to-blue-500",
    initials: "MX",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Fashion Partner",
  },
  {
    id: "tanishq",
    name: "Tanishq",
    logo: "https://linear.app/favicon.ico",
    bg: "from-yellow-700 to-yellow-500",
    initials: "TN",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Jewellery Partner",
  },
  {
    id: "mahindra",
    name: "Mahindra",
    logo: "https://linear.app/favicon.ico",
    bg: "from-red-800 to-red-600",
    initials: "MD",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Automobile Partner",
  },
  {
    id: "croma",
    name: "Croma",
    logo: "https://linear.app/favicon.ico",
    bg: "from-green-800 to-green-600",
    initials: "CR",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Electronics Partner",
  },
  {
    id: "hyundai",
    name: "Hyundai",
    logo: "https://linear.app/favicon.ico",
    bg: "from-blue-800 to-blue-600",
    initials: "HD",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Automobile Partner",
  },
  {
    id: "kutchina",
    name: "Kutchina",
    logo: "https://linear.app/favicon.ico",
    bg: "from-orange-700 to-orange-500",
    initials: "KN",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Kitchen Appliances",
  },
  {
    id: "ashok-leyland",
    name: "Ashok Leyland",
    logo: "https://linear.app/favicon.ico",
    bg: "from-teal-700 to-teal-500",
    initials: "AL",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Commercial Vehicles",
  },
  {
    id: "indian-oil",
    name: "Indian Oil",
    logo: "https://linear.app/favicon.ico",
    bg: "from-orange-800 to-orange-600",
    initials: "IO",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Energy Partner",
  },
  {
    id: "volvo",
    name: "Volvo",
    logo: "https://linear.app/favicon.ico",
    bg: "from-blue-900 to-blue-700",
    initials: "VV",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Automobile Partner",
  },
  {
    id: "honda",
    name: "Honda",
    logo: "https://linear.app/favicon.ico",
    bg: "from-red-900 to-red-700",
    initials: "HN",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Automobile Partner",
  },
  {
    id: "maruti",
    name: "Maruti Suzuki",
    logo: "https://linear.app/favicon.ico",
    bg: "from-sky-700 to-sky-500",
    initials: "MS",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Automobile Partner",
  },
  {
    id: "krishi-vikas",
    name: "Krishi Vikas",
    logo: "https://linear.app/favicon.ico",
    bg: "from-lime-700 to-lime-500",
    initials: "KV",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Agriculture Partner",
  },
  {
    id: "kangaroo-kids",
    name: "Kangaroo Kids",
    logo: "https://linear.app/favicon.ico",
    bg: "from-pink-700 to-pink-500",
    initials: "KK",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    tagline: "Education Partner",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO VIEWER
// ─────────────────────────────────────────────────────────────────────────────
function VideoViewer({ clients, activeIdx, setActiveIdx, onClose, closing }) {
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const client = clients[activeIdx];
  const hasPrev = activeIdx > 0;
  const hasNext = activeIdx < clients.length - 1;

  useEffect(() => {
    setProgress(0);
  }, [activeIdx]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasNext) setActiveIdx((i) => i + 1);
      if (e.key === "ArrowLeft" && hasPrev) setActiveIdx((i) => i - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx, hasPrev, hasNext]);

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
  };

  const goPrev = () => {
    if (hasPrev) setActiveIdx((i) => i - 1);
  };
  const goNext = () => {
    if (hasNext) setActiveIdx((i) => i + 1);
    else onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center"
      animate={{ opacity: closing ? 0 : 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
    >
      {/* Prev Arrow */}
      <button
        onClick={goPrev}
        disabled={!hasPrev}
        className={`absolute left-2 md:left-6 z-30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
          hasPrev
            ? "bg-white/20 hover:bg-white/40 text-white"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Video card */}
      <div className="relative w-full h-full max-w-[480px] overflow-hidden bg-black">
        {/* Progress bar */}
        <div className="absolute top-3 left-3 right-3 z-20">
          <div className="h-[2px] bg-white/25 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Header */}
        <div className="absolute top-8 left-3 right-10 flex items-center gap-2.5 z-20">
          <div
            className={`w-9 h-9 rounded-full border border-primary/60 bg-gradient-to-br ${client.bg} flex items-center justify-center flex-shrink-0 overflow-hidden`}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="w-6 h-6 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
            <span
              style={{ fontFamily: "var(--font-heading)", display: "none" }}
              className="text-xs font-bold text-white w-full h-full items-center justify-center"
            >
              {client.initials}
            </span>
          </div>
          <div>
            <div
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-white text-sm font-semibold leading-tight"
            >
              {client.name}
            </div>
            <div
              style={{ fontFamily: "var(--font-sans)" }}
              className="text-white/55 text-xs"
            >
              {client.tagline}
            </div>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-8 right-3 z-20 text-white/80 hover:text-white p-1 transition-colors"
        >
          <X size={22} />
        </button>

        {/* Video */}
        <video
          ref={videoRef}
          key={client.id}
          src={client.videoUrl}
          autoPlay
          playsInline
          className="w-full h-full object-cover"
          onTimeUpdate={handleTimeUpdate}
          onEnded={goNext}
        />

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/85 to-transparent pointer-events-none" />

        {/* Bottom label */}
        <div className="absolute bottom-10 left-5 right-16 pointer-events-none">
          <p
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-white text-xl font-bold"
          >
            {client.name}
          </p>
          <p
            style={{ fontFamily: "var(--font-sans)" }}
            className="text-white/55 text-sm mt-1"
          >
            {client.tagline}
          </p>
        </div>

        {/* Counter */}
        <div className="absolute bottom-10 right-5 pointer-events-none">
          <span
            style={{ fontFamily: "var(--font-sans)" }}
            className="text-white/40 text-xs"
          >
            {activeIdx + 1} / {clients.length}
          </span>
        </div>
      </div>

      {/* Next Arrow */}
      <button
        onClick={goNext}
        className={`absolute right-2 md:right-6 z-30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
          hasNext
            ? "bg-white/20 hover:bg-white/40 text-white"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ChevronRight size={24} />
      </button>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// INFINITE CAROUSEL STRIP
// ─────────────────────────────────────────────────────────────────────────────
function InfiniteCarousel({ onClientClick, viewedIds }) {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const SPEED = 0.5;

  const items = [...CLIENTS, ...CLIENTS];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        if (posRef.current >= halfWidth) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
      onTouchStart={() => {
        pausedRef.current = true;
      }}
      onTouchEnd={() => {
        pausedRef.current = false;
      }}
    >
      <div
        ref={trackRef}
        className="flex gap-4 px-4 py-4 will-change-transform"
        style={{ width: "max-content" }}
      >
        {items.map((c, idx) => (
          <motion.button
            key={`${c.id}-${idx}`}
            onClick={() => onClientClick(idx % CLIENTS.length)}
            className="flex flex-col items-center gap-1.5 flex-shrink-0"
            whileTap={{ scale: 0.92 }}
          >
            <div
              className={`p-[2px] rounded-full ${
                viewedIds.has(c.id)
                  ? "bg-muted"
                  : "bg-gradient-to-tr from-lime-700 via-lime-400 to-primary"
              }`}
            >
              <div className="w-[54px] h-[54px] rounded-full border-2 border-background overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className={`w-full h-full rounded-full bg-gradient-to-br ${c.bg} items-center justify-center hidden`}
                >
                  <span
                    style={{ fontFamily: "var(--font-heading)" }}
                    className="text-xs font-bold text-white"
                  >
                    {c.initials}
                  </span>
                </div>
              </div>
            </div>
            <span
              style={{ fontFamily: "var(--font-sans)" }}
              className="text-[10px] text-foreground/65 w-16 text-center truncate leading-tight"
            >
              {c.name}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CLIENTS BAR  ← rightOffset prop added
// ─────────────────────────────────────────────────────────────────────────────
export function ClientsBar({ sidebarWidth = 0, rightOffset = 0 }) {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [closing, setClosing] = useState(false);
  const [viewed, setViewed] = useState(new Set());
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1280 : true,
  );

  // track xl breakpoint (1280px) — same as Tailwind's xl
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 1280);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const openClient = (idx) => {
    setActiveIdx(idx);
    setViewed((v) => new Set([...v, CLIENTS[idx].id]));
    setViewerOpen(true);
  };

  const handleSetActiveIdx = (updater) => {
    setActiveIdx((prev) => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      setViewed((v) => new Set([...v, CLIENTS[next].id]));
      return next;
    });
  };

  const closeViewer = () => {
    setClosing(true);
    setTimeout(() => {
      setViewerOpen(false);
      setClosing(false);
    }, 180);
  };

  return (
    <>
      {/* ── Fixed bar ── */}
      <div
        className="fixed z-30 border-b border-border bg-card"
        style={{
          // mobile: full-width, below the mobile top bar (top-14)
          // desktop (lg+): offset left for sidebar, starts at top-0
          top: isDesktop ? "0px" : "56px", // 56px = h-14
          left: isDesktop ? `${sidebarWidth}px` : "0px",
          // ← KEY CHANGE: stops before the right panel on xl screens
          right: isDesktop ? `${rightOffset}px` : "0px",
          transition:
            "left 300ms cubic-bezier(0.4,0,0.2,1), right 300ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none bg-gradient-to-r from-card to-transparent" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none bg-gradient-to-l from-card to-transparent" />

          <InfiniteCarousel onClientClick={openClient} viewedIds={viewed} />
        </div>
      </div>

      {/* ── Video viewer modal ── */}
      {viewerOpen && (
        <VideoViewer
          clients={CLIENTS}
          activeIdx={activeIdx}
          setActiveIdx={handleSetActiveIdx}
          onClose={closeViewer}
          closing={closing}
        />
      )}
    </>
  );
}
