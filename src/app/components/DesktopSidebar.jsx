// // import { Instagram, Facebook, Twitter, Youtube, Phone, Home, Info, Image, Star, BookOpen, Mail } from "lucide-react";
// // import type { Page, NavigateFn } from "../types";

// // const NAV_ITEMS = [
// //   { id: "home" as Page, label: "Home", Icon: Home },
// //   { id: "about" as Page, label: "About", Icon: Info },
// //   { id: "gallery" as Page, label: "Gallery", Icon: Image },
// //   { id: "festival" as Page, label: "Festival", Icon: Star },
// //   { id: "blog" as Page, label: "Blog", Icon: BookOpen },
// // ];

// // interface SidebarProps {
// //   currentPage: Page;
// //   navigate: NavigateFn;
// // }

// // export function DesktopSidebar({ currentPage, navigate }: SidebarProps) {
// //   return (
// //     <aside className="hidden lg:flex fixed left-0 top-0 h-full w-[240px] bg-card border-r border-border flex-col z-40">
// //       {/* Logo */}
// //       <div className="px-6 py-5 border-b border-border">
// //         <div
// //           style={{ fontFamily: "'Cinzel', serif" }}
// //           className="text-xl font-bold text-primary leading-tight"
// //         >
// //           AbyBaby
// //           <span className="text-foreground/65 ml-1">Group</span>
// //         </div>
// //         <div className="text-[10px] text-muted-foreground mt-0.5 tracking-[0.3em] ">
// //           Event Management
// //         </div>
// //       </div>

// //       {/* Profile avatar */}
// //       <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
// //         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-700 to-primary flex items-center justify-center flex-shrink-0">
// //           <span
// //             style={{ fontFamily: "'Cinzel', serif" }}
// //             className="text-sm font-bold text-white"
// //           >
// //             AB
// //           </span>
// //         </div>
// //         <div>
// //           <div className="text-sm font-semibold text-foreground">abybaby_group</div>
// //           <div className="text-xs text-muted-foreground">India's #1 BTL Agency</div>
// //         </div>
// //       </div>

// //       {/* Navigation */}
// //       <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
// //         {NAV_ITEMS.map(({ id, label, Icon }) => (
// //           <button
// //             key={id}
// //             onClick={() => navigate(id)}
// //             className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
// //               currentPage === id
// //                 ? "bg-primary/12 text-primary"
// //                 : "text-foreground/55 hover:bg-white/5 hover:text-foreground"
// //             }`}
// //           >
// //             <Icon
// //               size={20}
// //               className={`flex-shrink-0 transition-colors ${
// //                 currentPage === id ? "text-primary" : "group-hover:text-foreground"
// //               }`}
// //             />
// //             <span
// //               style={{ fontFamily: "'Cinzel', serif" }}
// //               className={`font-medium text-sm ${currentPage === id ? "text-primary" : ""}`}
// //             >
// //               {label}
// //             </span>
// //             {currentPage === id && (
// //               <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
// //             )}
// //           </button>
// //         ))}
// //       </nav>

// //       {/* Stats strip */}
// //       <div className="px-6 py-3 border-t border-border grid grid-cols-3 gap-2 text-center">
// //         {[
// //           { val: "25+", lbl: "Years" },
// //           { val: "5K+", lbl: "Projects" },
// //           { val: "100+", lbl: "Clients" },
// //         ].map(({ val, lbl }) => (
// //           <div key={lbl}>
// //             <div
// //               style={{ fontFamily: "'Cinzel', serif" }}
// //               className="text-base font-bold text-primary leading-tight"
// //             >
// //               {val}
// //             </div>
// //             <div className="text-[10px] text-muted-foreground">{lbl}</div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Socials + Contact */}
// //       <div className="px-5 py-4 border-t border-border">
// //         <div className="flex gap-2 mb-3">
// //           {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
// //             <button
// //               key={i}
// //               className="w-8 h-8 flex items-center justify-center text-foreground/35 hover:text-primary transition-colors duration-150"
// //             >
// //               <Icon size={15} />
// //             </button>
// //           ))}
// //         </div>
// //         <div className="flex items-center gap-2 text-foreground/45 text-[11px] mb-1.5">
// //           <Phone size={11} className="text-primary flex-shrink-0" />
// //           +91 98765 43210
// //         </div>
// //         <div className="flex items-center gap-2 text-foreground/45 text-[11px]">
// //           <Mail size={11} className="text-primary flex-shrink-0" />
// //           hello@abybabygroup.com
// //         </div>
// //       </div>
// //     </aside>
// //   );
// // }
// // import {
// //   HardDrive as Instagram,
// //   HardDrive as Facebook,
// //   HardDrive as Twitter,
// //   HardDrive as Youtube,
// //   Phone,
// //   Home,
// //   Info,
// //   Image,
// //   Star,
// //   BookOpen,
// //   Mail,
// // } from "lucide-react";

// // const NAV_ITEMS = [
// //   { id: "home", label: "Home", Icon: Home },
// //   { id: "about", label: "About", Icon: Info },
// //   { id: "gallery", label: "Gallery", Icon: Image },
// //   { id: "festival", label: "Festival", Icon: Star },
// //   { id: "blog", label: "Blog", Icon: BookOpen },
// // ];

// // export function DesktopSidebar({ currentPage, navigate }) {
// //   return (
// //     <aside className="hidden lg:flex fixed left-0 top-0 h-full w-[240px] bg-card border-r border-border flex-col z-40">
// //       {/* Logo */}
// //       <div
// //         className="px-6 py-5 border-b border-border flex flex-row justify-center items-center gap-1 cursor-pointer"
// //         onClick={() => navigate("home")}
// //       >
// //         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-700 to-primary flex items-center justify-center flex-shrink-0">
// //           <span
// //             style={{ fontFamily: "'Cinzel', serif" }}
// //             className="text-sm font-bold text-white"
// //           >
// //             AB
// //           </span>
// //         </div>
// //         <div className="flex flex-col justify-center items-start">
// //           <div
// //             style={{ fontFamily: "'Cinzel', serif" }}
// //             className="text-xl font-bold text-primary leading-tight"
// //           >
// //             AbyBaby
// //             <span className="text-foreground/65 ml-1">Group</span>
// //           </div>

// //           <div className="text-[10px] text-muted-foreground mt-0.5 tracking-[0.3em] ">
// //             Event Management
// //           </div>
// //         </div>
// //       </div>

// //       {/* Profile avatar */}
// //       {/* <div className="flex items-center gap-3 px-6 py-4 border-b border-border"> */}
// //       {/* <div>
// //           <div className="text-sm font-semibold text-foreground">
// //             abybaby_group
// //           </div>

// //           <div className="text-xs text-muted-foreground">
// //             India's #1 BTL Agency
// //           </div>
// //         </div>*/}
// //       {/* </div> */}

// //       {/* Navigation */}
// //       <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
// //         {NAV_ITEMS.map(({ id, label, Icon }) => (
// //           <button
// //             key={id}
// //             onClick={() => navigate(id)}
// //             className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
// //               currentPage === id
// //                 ? "bg-primary/12 text-primary"
// //                 : "text-foreground/55 hover:bg-white/5 hover:text-foreground"
// //             }`}
// //           >
// //             <Icon
// //               size={20}
// //               className={`flex-shrink-0 transition-colors ${
// //                 currentPage === id
// //                   ? "text-primary"
// //                   : "group-hover:text-foreground"
// //               }`}
// //             />

// //             <span
// //               style={{ fontFamily: "'Cinzel', serif" }}
// //               className={`font-medium text-sm ${
// //                 currentPage === id ? "text-primary" : ""
// //               }`}
// //             >
// //               {label}
// //             </span>

// //             {currentPage === id && (
// //               <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
// //             )}
// //           </button>
// //         ))}
// //       </nav>

// //       {/* Stats strip */}
// //       <div className="px-6 py-3 border-t border-border grid grid-cols-3 gap-2 text-center">
// //         {[
// //           { val: "25+", lbl: "Years" },
// //           { val: "5K+", lbl: "Projects" },
// //           { val: "100+", lbl: "Clients" },
// //         ].map(({ val, lbl }) => (
// //           <div key={lbl}>
// //             <div
// //               style={{ fontFamily: "'Cinzel', serif" }}
// //               className="text-base font-bold text-primary leading-tight"
// //             >
// //               {val}
// //             </div>

// //             <div className="text-[10px] text-muted-foreground">{lbl}</div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Socials + Contact */}
// //       <div className="px-5 py-4 border-t border-border">
// //         <div className="flex gap-2 mb-3">
// //           {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
// //             <button
// //               key={i}
// //               className="w-8 h-8 flex items-center justify-center text-foreground/35 hover:text-primary transition-colors duration-150"
// //             >
// //               <Icon size={15} />
// //             </button>
// //           ))}
// //         </div>

// //         <div className="flex items-center gap-2 text-foreground/45 text-[11px] mb-1.5">
// //           <Phone size={11} className="text-primary flex-shrink-0" />
// //           +91 98765 43210
// //         </div>

// //         <div className="flex items-center gap-2 text-foreground/45 text-[11px]">
// //           <Mail size={11} className="text-primary flex-shrink-0" />
// //           hello@abybabygroup.com
// //         </div>
// //       </div>
// //     </aside>
// //   );
// // }
// // import { useEffect, useRef, useState } from "react";
// // import {
// //   HardDrive as Instagram,
// //   HardDrive as Facebook,
// //   HardDrive as Twitter,
// //   HardDrive as Youtube,
// //   Phone,
// //   Home,
// //   Info,
// //   Image,
// //   Star,
// //   BookOpen,
// //   Mail,
// // } from "lucide-react";

// // const NAV_ITEMS = [
// //   { id: "home", label: "Home", Icon: Home },
// //   { id: "about", label: "About", Icon: Info },
// //   { id: "gallery", label: "Gallery", Icon: Image },
// //   { id: "festival", label: "Festival", Icon: Star },
// //   { id: "blog", label: "Blog", Icon: BookOpen },
// // ];

// // // ─────────────────────────────────────────────────────────────────────────────
// // // useCountUp
// // // Animates a number from 0 → target over `duration` ms using requestAnimationFrame.
// // // `suffix` (e.g. "+" or "K+") is appended to the displayed value.
// // // ─────────────────────────────────────────────────────────────────────────────
// // function useCountUp(target, duration = 1800, suffix = "") {
// //   const [display, setDisplay] = useState("0" + suffix);
// //   const rafRef = useRef(null);

// //   useEffect(() => {
// //     const startTime = performance.now();

// //     // Parse numeric part — handles "25", "5000" (for "5K+"), "100"
// //     const tick = (now) => {
// //       const elapsed = now - startTime;
// //       const progress = Math.min(elapsed / duration, 1);

// //       // Ease-out cubic for a natural deceleration
// //       const eased = 1 - Math.pow(1 - progress, 3);
// //       const current = Math.round(eased * target);

// //       // Format: compress thousands to "K" when target >= 1000
// //       const formatted =
// //         target >= 1000
// //           ? (current / 1000).toFixed(current < 1000 ? 1 : 0) + "K"
// //           : String(current);

// //       setDisplay(formatted + suffix);

// //       if (progress < 1) {
// //         rafRef.current = requestAnimationFrame(tick);
// //       }
// //     };

// //     rafRef.current = requestAnimationFrame(tick);
// //     return () => cancelAnimationFrame(rafRef.current);
// //   }, [target, duration, suffix]);

// //   return display;
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // StatItem — individual animated stat
// // // ─────────────────────────────────────────────────────────────────────────────
// // function StatItem({ target, suffix, lbl, delay = 0 }) {
// //   const [started, setStarted] = useState(false);

// //   // Stagger start by delay ms so each counter starts slightly after the previous
// //   useEffect(() => {
// //     const t = setTimeout(() => setStarted(true), delay);
// //     return () => clearTimeout(t);
// //   }, [delay]);

// //   const value = useCountUp(started ? target : 0, 1600, suffix);

// //   return (
// //     <div>
// //       <div
// //         style={{ fontFamily: "'Cinzel', serif" }}
// //         className="text-base font-bold text-primary leading-tight tabular-nums"
// //       >
// //         {value}
// //       </div>
// //       <div className="text-[10px] text-muted-foreground">{lbl}</div>
// //     </div>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // STATS CONFIG
// // // target → the raw number to count to
// // // suffix → appended after the formatted number
// // // ─────────────────────────────────────────────────────────────────────────────
// // const STATS = [
// //   { target: 25, suffix: "+", lbl: "Years" },
// //   { target: 5000, suffix: "+", lbl: "Projects" },
// //   { target: 100, suffix: "+", lbl: "Clients" },
// // ];

// // // ─────────────────────────────────────────────────────────────────────────────
// // // DESKTOP SIDEBAR
// // // ─────────────────────────────────────────────────────────────────────────────
// // export function DesktopSidebar({ currentPage, navigate }) {
// //   return (
// //     <aside className="hidden lg:flex fixed left-0 top-0 h-full w-[240px] bg-card border-r border-border flex-col z-40 ">
// //       {/* Logo — click navigates home */}
// //       <div
// //         className="px-6 py-5 border-b border-border flex flex-row justify-center items-center gap-1 cursor-pointer"
// //         onClick={() => navigate("home")}
// //       >
// //         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-700 to-primary flex items-center justify-center flex-shrink-0">
// //           <span
// //             style={{ fontFamily: "'Cinzel', serif" }}
// //             className="text-sm font-bold text-white"
// //           >
// //             AB
// //           </span>
// //         </div>
// //         <div className=" flex-col justify-center items-start ">
// //           <div
// //             style={{ fontFamily: "'Cinzel', serif" }}
// //             className="text-xl font-bold text-primary leading-tight"
// //           >
// //             AbyBaby
// //             <span className="text-foreground/65 ml-1">Group</span>
// //           </div>
// //           <div className="text-[10px] text-muted-foreground mt-0.5 tracking-[0.3em] uppercase">
// //             Event Management
// //           </div>
// //         </div>
// //       </div>

// //       {/* Navigation */}
// //       <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
// //         {NAV_ITEMS.map(({ id, label, Icon }) => (
// //           <button
// //             key={id}
// //             onClick={() => navigate(id)}
// //             className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
// //               currentPage === id
// //                 ? "bg-primary/12 text-primary"
// //                 : "text-foreground/55 hover:bg-white/5 hover:text-foreground"
// //             }`}
// //           >
// //             <Icon
// //               size={20}
// //               className={`flex-shrink-0 transition-colors ${
// //                 currentPage === id
// //                   ? "text-primary"
// //                   : "group-hover:text-foreground"
// //               }`}
// //             />
// //             <span
// //               style={{ fontFamily: "'Cinzel', serif" }}
// //               className={`font-medium text-sm ${currentPage === id ? "text-primary" : ""}`}
// //             >
// //               {label}
// //             </span>
// //             {currentPage === id && (
// //               <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
// //             )}
// //           </button>
// //         ))}
// //       </nav>

// //       {/* Animated stats strip */}
// //       <div className="px-6 py-3 border-t border-border grid grid-cols-3 gap-2 text-center">
// //         {STATS.map(({ target, suffix, lbl }, i) => (
// //           <StatItem
// //             key={lbl}
// //             target={target}
// //             suffix={suffix}
// //             lbl={lbl}
// //             delay={i * 120} // stagger: 0ms, 120ms, 240ms
// //           />
// //         ))}
// //       </div>

// //       {/* Socials + Contact */}
// //       <div className="px-5 py-4 border-t border-border">
// //         <div className="flex gap-2 mb-3">
// //           {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
// //             <button
// //               key={i}
// //               className="w-8 h-8 flex items-center justify-center text-foreground/35 hover:text-primary transition-colors duration-150"
// //             >
// //               <Icon size={15} />
// //             </button>
// //           ))}
// //         </div>
// //         <div className="flex items-center gap-2 text-foreground/45 text-[11px] mb-1.5">
// //           <Phone size={11} className="text-primary flex-shrink-0" />
// //           +91 98765 43210
// //         </div>
// //         <div className="flex items-center gap-2 text-foreground/45 text-[11px]">
// //           <Mail size={11} className="text-primary flex-shrink-0" />
// //           hello@abybabygroup.com
// //         </div>
// //       </div>
// //     </aside>
// //   );
// // }
// import { useEffect, useRef, useState } from "react";
// import {
//   HardDrive as Instagram,
//   HardDrive as Facebook,
//   HardDrive as Twitter,
//   HardDrive as Youtube,
//   Phone,
//   Home,
//   Info,
//   Image,
//   Star,
//   BookOpen,
//   Mail,
//   ChevronLeft,
//   ChevronRight,
//   Contact,
//   ShieldCheck,
//   EllipsisVertical,
//   Shield,
//   FileText,
//   ChevronDown,
//   ChevronUp,
//   MessageCircle,
// } from "lucide-react";
// import Logo from "../../assets/logo.jpg";
// const MORE_ITEMS = [
//   { id: "privacy", label: "Privacy Policy", Icon: Shield },
//   { id: "terms", label: "Terms & Conditions", Icon: FileText },
// ];

// const NAV_ITEMS = [
//   { id: "home", label: "Home", Icon: Home },
//   { id: "events", label: "Events", Icon: Info },
//   { id: "digital", label: "Digital", Icon: Image },
//   { id: "contact", label: "Contact", Icon: Contact },
//   { id: "message", label: "Message", Icon: MessageCircle },
//   { id: "eshibition", label: "Exhibition", Icon: BookOpen },
//   { id: "activation", label: "Activation", Icon: ShieldCheck },
// ];

// // ─────────────────────────────────────────────────────────────────────────────
// // useCountUp
// // ─────────────────────────────────────────────────────────────────────────────
// function useCountUp(target, duration = 1800, suffix = "") {
//   const [display, setDisplay] = useState("0" + suffix);
//   const rafRef = useRef(null);

//   useEffect(() => {
//     const startTime = performance.now();
//     const tick = (now) => {
//       const elapsed = now - startTime;
//       const progress = Math.min(elapsed / duration, 1);
//       const eased = 1 - Math.pow(1 - progress, 3);
//       const current = Math.round(eased * target);
//       const formatted =
//         target >= 1000
//           ? (current / 1000).toFixed(current < 1000 ? 1 : 0) + "K"
//           : String(current);
//       setDisplay(formatted + suffix);
//       if (progress < 1) rafRef.current = requestAnimationFrame(tick);
//     };
//     rafRef.current = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(rafRef.current);
//   }, [target, duration, suffix]);

//   return display;
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // StatItem
// // ─────────────────────────────────────────────────────────────────────────────
// function StatItem({ target, suffix, lbl, delay = 0 }) {
//   const [started, setStarted] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setStarted(true), delay);
//     return () => clearTimeout(t);
//   }, [delay]);

//   const value = useCountUp(started ? target : 0, 1600, suffix);

//   return (
//     <div>
//       <div
//         style={{ fontFamily: "var(--font-heading)" }}
//         className="text-base font-bold text-primary leading-tight tabular-nums"
//       >
//         {value}
//       </div>
//       <div
//         style={{ fontFamily: "var(--font-sans)" }}
//         className="text-[10px] text-muted-foreground"
//       >
//         {lbl}
//       </div>
//     </div>
//   );
// }

// const STATS = [
//   { target: 25, suffix: "+", lbl: "Years" },
//   { target: 5000, suffix: "+", lbl: "Projects" },
//   { target: 100, suffix: "+", lbl: "Clients" },
// ];

// // ─────────────────────────────────────────────────────────────────────────────
// // DESKTOP SIDEBAR
// // ─────────────────────────────────────────────────────────────────────────────
// export function DesktopSidebar({
//   currentPage,
//   navigate,
//   collapsed,
//   setCollapsed,
// }) {
//   const [moreOpen, setMoreOpen] = useState(false);
//   const moreRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handler = (e) => {
//       if (moreRef.current && !moreRef.current.contains(e.target)) {
//         setMoreOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   // Close dropdown when sidebar collapses
//   useEffect(() => {
//     if (collapsed) setMoreOpen(false);
//   }, [collapsed]);

//   const isMoreActive = currentPage === "privacy" || currentPage === "terms";

//   return (
//     <aside
//       className={`hidden lg:flex fixed left-0 top-0 h-full bg-card border-r border-border flex-col z-40 transition-all duration-300 ${
//         collapsed ? "w-[88px]" : "w-[240px]"
//       }`}
//       style={{ fontFamily: "var(--font-sans)" }}
//     >
//       {/* ── Toggle Button ─────────────────────────────────────── */}
//       <button
//         onClick={() => setCollapsed(!collapsed)}
//         className="absolute right-0 top-[82px] translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full border border-border bg-card text-foreground shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 z-50"
//       >
//         {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
//       </button>

//       {/* ── Logo ─────────────────────────────────────────────── */}
//       <div
//         className={`px-4 py-3 border-b border-border flex items-center cursor-pointer transition-all duration-300 ${
//           collapsed ? "justify-center" : "gap-3"
//         }`}
//         onClick={() => navigate("home")}
//       >
//         {/* <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-700 to-primary flex items-center justify-center flex-shrink-0 ">
//           <span
//             style={{ fontFamily: "var(--font-heading)" }}
//             className="text-sm font-bold text-white "
//           >
//             <img src={Logo} alt="" className="overflow-hidden rounded-md" />
//           </span>
//         </div> */}

//         {!collapsed && (
//           <div className="flex flex-col items-start justify-start ">
//             <div
//               style={{ fontFamily: "var(--font-heading)" }}
//               className="text-xl font-bold text-primary leading-tight "
//             >
//               <img
//                 src="https://abybabyevents.com/assets/img/assets1/image1/logo/abybaby%20event-white-01.png"
//                 alt=""
//                 className="h-15 "
//               />
//               {/* <span className="text-foreground/65 ml-1">Group</span> */}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ── Navigation ───────────────────────────────────────── */}
//       <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
//         {NAV_ITEMS.map(({ id, label, Icon }) => (
//           <button
//             key={id}
//             onClick={() => {
//               navigate(id);
//               setMoreOpen(false);
//             }}
//             className={`w-full flex items-center rounded-xl transition-all duration-200 group ${
//               collapsed ? "justify-center px-2 py-3" : "gap-3 px-4 py-3"
//             } ${
//               currentPage === id
//                 ? "bg-primary/12 text-primary"
//                 : "text-foreground/55 hover:bg-white/5 hover:text-foreground"
//             }`}
//           >
//             <Icon
//               size={20}
//               className={`flex-shrink-0 transition-colors ${
//                 currentPage === id
//                   ? "text-primary"
//                   : "group-hover:text-foreground"
//               }`}
//             />
//             {!collapsed && (
//               <>
//                 <span
//                   style={{ fontFamily: "var(--font-heading)" }}
//                   className={`font-medium text-sm ${
//                     currentPage === id ? "text-primary" : ""
//                   }`}
//                 >
//                   {label}
//                 </span>
//                 {currentPage === id && (
//                   <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
//                 )}
//               </>
//             )}
//           </button>
//         ))}

//         {/* ── More (dropdown trigger) ───────────────────────── */}
//         <div ref={moreRef} className="relative">
//           <button
//             onClick={() => setMoreOpen((o) => !o)}
//             className={`w-full flex items-center rounded-xl transition-all duration-200 group ${
//               collapsed ? "justify-center px-2 py-3" : "gap-3 px-4 py-3"
//             } ${
//               isMoreActive || moreOpen
//                 ? "bg-primary/12 text-primary"
//                 : "text-foreground/55 hover:bg-white/5 hover:text-foreground"
//             }`}
//           >
//             <EllipsisVertical
//               size={20}
//               className={`flex-shrink-0 transition-colors ${
//                 isMoreActive || moreOpen
//                   ? "text-primary"
//                   : "group-hover:text-foreground"
//               }`}
//             />
//             {!collapsed && (
//               <>
//                 <span
//                   style={{ fontFamily: "var(--font-heading)" }}
//                   className={`font-medium text-sm ${
//                     isMoreActive || moreOpen ? "text-primary" : ""
//                   }`}
//                 >
//                   More
//                 </span>
//                 <div className="ml-auto flex-shrink-0">
//                   {moreOpen ? (
//                     <ChevronUp
//                       size={14}
//                       className="text-primary transition-transform duration-300"
//                     />
//                   ) : (
//                     <ChevronDown
//                       size={14}
//                       className="text-foreground/40 transition-transform duration-300"
//                     />
//                   )}
//                 </div>
//               </>
//             )}
//           </button>

//           {/* ── Dropdown (expanded sidebar) ───────────────── */}
//           {!collapsed && (
//             <div
//               style={{
//                 maxHeight: moreOpen ? "200px" : "0px",
//                 opacity: moreOpen ? 1 : 0,
//                 overflow: "hidden",
//                 transition:
//                   "max-height 300ms cubic-bezier(0.4,0,0.2,1), opacity 200ms ease",
//               }}
//             >
//               <div className="mt-1 mx-2 bg-background rounded-xl overflow-hidden">
//                 {MORE_ITEMS.map(({ id, label, Icon }) => (
//                   <button
//                     key={id}
//                     onClick={() => {
//                       navigate(id);
//                       setMoreOpen(false);
//                     }}
//                     className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-150 group ${
//                       currentPage === id
//                         ? "bg-primary/10 text-primary"
//                         : "text-foreground/55 hover:bg-white/5 hover:text-foreground"
//                     }`}
//                   >
//                     <Icon
//                       size={16}
//                       className={`flex-shrink-0 ${
//                         currentPage === id
//                           ? "text-primary"
//                           : "group-hover:text-foreground"
//                       }`}
//                     />
//                     <span
//                       style={{ fontFamily: "var(--font-heading)" }}
//                       className={`text-sm font-medium ${
//                         currentPage === id ? "text-primary" : ""
//                       }`}
//                     >
//                       {label}
//                     </span>
//                     {currentPage === id && (
//                       <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
//                     )}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* ── Dropdown (collapsed sidebar — floats right) ── */}
//           {moreOpen && collapsed && (
//             <div className="absolute left-full top-0 ml-2 bg-card rounded-xl overflow-hidden shadow-xl z-50 w-44">
//               {MORE_ITEMS.map(({ id, label, Icon }) => (
//                 <button
//                   key={id}
//                   onClick={() => {
//                     navigate(id);
//                     setMoreOpen(false);
//                   }}
//                   className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-150 ${
//                     currentPage === id
//                       ? "bg-primary/10 text-primary"
//                       : "text-foreground/55 hover:bg-white/5 hover:text-foreground"
//                   }`}
//                 >
//                   <Icon size={16} className="flex-shrink-0" />
//                   <span
//                     style={{ fontFamily: "var(--font-heading)" }}
//                     className="text-sm font-medium"
//                   >
//                     {label}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* ── Stats ─────────────────────────────────────────────── */}
//       {!collapsed && (
//         <div className="px-6 py-3 border-t border-border grid grid-cols-3 gap-2 text-center">
//           {STATS.map(({ target, suffix, lbl }, i) => (
//             <StatItem
//               key={lbl}
//               target={target}
//               suffix={suffix}
//               lbl={lbl}
//               delay={i * 120}
//             />
//           ))}
//         </div>
//       )}
//     </aside>
//   );
// }
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  Home,
  Info,
  Image,
  Star,
  BookOpen,
  Mail,
  Contact,
  ShieldCheck,
  Shield,
  FileText,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  EllipsisVertical,
} from "lucide-react";

const MORE_ITEMS = [
  { id: "privacy", label: "Privacy Policy", Icon: Shield },
  { id: "terms", label: "Terms & Conditions", Icon: FileText },
];

const NAV_ITEMS = [
  { id: "home", label: "Home", Icon: Home },
  { id: "events", label: "Events", Icon: Info },
  { id: "digital", label: "Digital", Icon: Image },
  { id: "contact", label: "Contact", Icon: Contact },
  { id: "message", label: "Message", Icon: MessageCircle },
  { id: "eshibition", label: "Exhibition", Icon: BookOpen },
  { id: "activation", label: "Activation", Icon: ShieldCheck },
];

// ─────────────────────────────────────────────────────────────────────────────
// useCountUp
// ─────────────────────────────────────────────────────────────────────────────
function useCountUp(target, duration = 1800, suffix = "") {
  const [display, setDisplay] = useState("0" + suffix);
  const rafRef = useRef(null);

  useEffect(() => {
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      const formatted =
        target >= 1000
          ? (current / 1000).toFixed(current < 1000 ? 1 : 0) + "K"
          : String(current);
      setDisplay(formatted + suffix);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration, suffix]);

  return display;
}

// ─────────────────────────────────────────────────────────────────────────────
// StatItem
// ─────────────────────────────────────────────────────────────────────────────
function StatItem({ target, suffix, lbl, delay = 0, visible }) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay, visible]);

  const value = useCountUp(started ? target : 0, 1600, suffix);

  return (
    <div>
      <div
        style={{ fontFamily: "var(--font-heading)" }}
        className="text-base font-bold text-primary leading-tight tabular-nums"
      >
        {value}
      </div>
      <div className="text-[10px] text-muted-foreground">{lbl}</div>
    </div>
  );
}

const STATS = [
  { target: 25, suffix: "+", lbl: "Years" },
  { target: 5000, suffix: "+", lbl: "Projects" },
  { target: 100, suffix: "+", lbl: "Clients" },
];

// ─────────────────────────────────────────────────────────────────────────────
// DESKTOP SIDEBAR
// ─────────────────────────────────────────────────────────────────────────────
export function DesktopSidebar({ currentPage, navigate }) {
  const [hovered, setHovered] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close dropdown when sidebar collapses
  useEffect(() => {
    if (!hovered) setMoreOpen(false);
  }, [hovered]);

  const isMoreActive = currentPage === "privacy" || currentPage === "terms";

  return (
    <aside
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="hidden lg:flex fixed left-0 top-0 h-full bg-card border-r border-border flex-col z-40 overflow-hidden"
      style={{
        width: hovered ? "240px" : "72px",
        transition: "width 300ms cubic-bezier(0.4,0,0.2,1)",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* ── Logo ─────────────────────────────────────────────── */}
      <div
        className="px-4 py-4 border-b border-border flex items-center gap-3 cursor-pointer overflow-hidden"
        style={{
          whiteSpace: "nowrap",
          flexShrink: 0,
          position: "relative",
          minHeight: 72,
        }}
        onClick={() => navigate("home")}
      >
        {/* ── Collapsed logo mark (visible only when sidebar is NOT hovered) ── */}
        <div
          style={{
            flexShrink: 0,
            width: 36,
            height: 36,
            borderRadius: 10,
            overflow: "hidden",
            // Fade out as sidebar expands
            opacity: hovered ? 0 : 1,
            transform: hovered ? "scale(0.75)" : "scale(1)",
            transition: "opacity 180ms ease, transform 200ms ease",
            // Keep it in flow when collapsed; remove from flow when hovered
            // so it doesn't push the expanded logo sideways
            position: hovered ? "absolute" : "relative",
            pointerEvents: "none",
          }}
        >
          <img
            src="https://abybabyevents.com/assets/img/assets1/image1/logo/abybaby%20event-white-01.png"
            alt="AbyBaby"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            onError={(e) => {
              e.target.style.display = "none";
              // Show fallback initials badge
              const fb = e.target.nextElementSibling;
              if (fb) fb.style.display = "flex";
            }}
          />
          {/* Fallback initials badge */}
          <div
            style={{
              display: "none",
              width: "100%",
              height: "100%",
              background: "var(--primary)",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              fontSize: 14,
              color: "#fff",
              borderRadius: 10,
            }}
          >
            AB
          </div>
        </div>

        {/* ── Expanded logo image (fades in on hover) ── */}
        <div
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0)" : "translateX(-10px)",
            transition: "opacity 200ms ease 60ms, transform 200ms ease 60ms",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <img
            src="https://abybabyevents.com/assets/img/assets1/image1/logo/abybaby%20event-white-01.png"
            alt="AbyBaby Group"
            style={{ height: 48, display: "block" }}
            onError={(e) => {
              e.target.style.display = "none";
              const fb = e.target.nextElementSibling;
              if (fb) fb.style.display = "block";
            }}
          />
          {/* Fallback text logo */}
          <div style={{ display: "none" }}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 17,
                fontWeight: 700,
                color: "var(--primary)",
                lineHeight: 1.2,
              }}
            >
              AbyBaby
              <span
                style={{
                  color: "var(--foreground)",
                  opacity: 0.65,
                  marginLeft: 4,
                }}
              >
                Group
              </span>
            </div>
            <div
              style={{
                fontSize: 10,
                color: "var(--muted-foreground)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginTop: 2,
              }}
            >
              Event Management
            </div>
          </div>
        </div>
      </div>

      {/* ── Navigation ───────────────────────────────────────── */}
      <nav
        className="flex-1 overflow-y-auto"
        style={{
          padding: "12px 10px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {NAV_ITEMS.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => {
              navigate(id);
              setMoreOpen(false);
            }}
            className={`w-full flex items-center rounded-xl transition-all duration-200 group ${
              currentPage === id
                ? "bg-primary/12 text-primary"
                : "text-foreground/55 hover:bg-white/5 hover:text-foreground"
            }`}
            style={{
              gap: 12,
              padding: hovered ? "10px 14px" : "10px 0",
              justifyContent: hovered ? "flex-start" : "center",
              transition:
                "padding 300ms cubic-bezier(0.4,0,0.2,1), justify-content 300ms",
              border: "none",
              background: currentPage === id ? undefined : "transparent",
              cursor: "pointer",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            <Icon
              size={20}
              className={`flex-shrink-0 transition-colors ${
                currentPage === id
                  ? "text-primary"
                  : "group-hover:text-foreground"
              }`}
            />

            {/* Label */}
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                fontSize: 13,
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateX(0)" : "translateX(-8px)",
                transition:
                  "opacity 180ms ease 50ms, transform 180ms ease 50ms",
                color: currentPage === id ? "var(--primary)" : undefined,
                flex: 1,
              }}
            >
              {label}
            </span>

            {/* Active dot */}
            {currentPage === id && (
              <div
                className="flex-shrink-0 rounded-full bg-primary"
                style={{
                  width: 6,
                  height: 6,
                  marginLeft: "auto",
                  opacity: hovered ? 1 : 0,
                  transition: "opacity 180ms ease 60ms",
                }}
              />
            )}
          </button>
        ))}

        {/* ── More (dropdown trigger) ───────────────────────── */}
        <div ref={moreRef} style={{ position: "relative" }}>
          <button
            onClick={() => setMoreOpen((o) => !o)}
            className={`w-full flex items-center rounded-xl transition-all duration-200 group ${
              isMoreActive || moreOpen
                ? "bg-primary/12 text-primary"
                : "text-foreground/55 hover:bg-white/5 hover:text-foreground"
            }`}
            style={{
              gap: 12,
              padding: hovered ? "10px 14px" : "10px 0",
              justifyContent: hovered ? "flex-start" : "center",
              transition: "padding 300ms cubic-bezier(0.4,0,0.2,1)",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            <EllipsisVertical
              size={20}
              className={`flex-shrink-0 ${
                isMoreActive || moreOpen
                  ? "text-primary"
                  : "group-hover:text-foreground"
              }`}
            />

            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                fontSize: 13,
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateX(0)" : "translateX(-8px)",
                transition:
                  "opacity 180ms ease 50ms, transform 180ms ease 50ms",
                color: isMoreActive || moreOpen ? "var(--primary)" : undefined,
                flex: 1,
              }}
            >
              More
            </span>

            <div
              style={{
                flexShrink: 0,
                opacity: hovered ? 1 : 0,
                transition: "opacity 180ms ease 60ms",
              }}
            >
              {moreOpen ? (
                <ChevronUp size={14} className="text-primary" />
              ) : (
                <ChevronDown size={14} className="text-foreground/40" />
              )}
            </div>
          </button>

          {/* ── Dropdown (expanded sidebar) ───────────────── */}
          {hovered && (
            <div
              style={{
                maxHeight: moreOpen ? "200px" : "0px",
                opacity: moreOpen ? 1 : 0,
                overflow: "hidden",
                transition:
                  "max-height 300ms cubic-bezier(0.4,0,0.2,1), opacity 200ms ease",
              }}
            >
              <div
                className="bg-background rounded-xl overflow-hidden"
                style={{ marginTop: 4, marginLeft: 4, marginRight: 4 }}
              >
                {MORE_ITEMS.map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    onClick={() => {
                      navigate(id);
                      setMoreOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-150 group ${
                      currentPage === id
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/55 hover:bg-white/5 hover:text-foreground"
                    }`}
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <Icon
                      size={16}
                      className={`flex-shrink-0 ${
                        currentPage === id
                          ? "text-primary"
                          : "group-hover:text-foreground"
                      }`}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-heading, Georgia, serif)",
                        fontSize: 13,
                        fontWeight: 500,
                        color:
                          currentPage === id ? "var(--primary)" : undefined,
                      }}
                    >
                      {label}
                    </span>
                    {currentPage === id && (
                      <div
                        className="rounded-full bg-primary"
                        style={{
                          width: 6,
                          height: 6,
                          marginLeft: "auto",
                          flexShrink: 0,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Floating dropdown (collapsed state) ── */}
          {moreOpen && !hovered && (
            <div
              className="bg-card rounded-xl overflow-hidden shadow-xl"
              style={{
                position: "absolute",
                left: "100%",
                top: 0,
                marginLeft: 8,
                zIndex: 50,
                width: 176,
              }}
            >
              {MORE_ITEMS.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    navigate(id);
                    setMoreOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-150 ${
                    currentPage === id
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/55 hover:bg-white/5 hover:text-foreground"
                  }`}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <Icon size={16} className="flex-shrink-0" />
                  <span
                    style={{
                      fontFamily: "var(--font-heading, Georgia, serif)",
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    {label}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ── Stats strip ───────────────────────────────────────── */}
      <div
        className="border-t border-border"
        style={{
          padding: "10px 16px",
          display: "grid",
          gridTemplateColumns: hovered ? "repeat(3, 1fr)" : "1fr",
          gap: 8,
          textAlign: "center",
          overflow: "hidden",
          opacity: hovered ? 1 : 0,
          maxHeight: hovered ? "80px" : "0px",
          transition:
            "opacity 200ms ease, max-height 300ms cubic-bezier(0.4,0,0.2,1), grid-template-columns 300ms ease",
        }}
      >
        {STATS.map(({ target, suffix, lbl }, i) => (
          <StatItem
            key={lbl}
            target={target}
            suffix={suffix}
            lbl={lbl}
            delay={i * 120}
            visible={hovered}
          />
        ))}
      </div>

      {/* ── Footer: contact ───────────────────────────────────── */}
      <div
        className="border-t border-border"
        style={{
          padding: hovered ? "12px 16px 14px" : "12px 0",
          overflow: "hidden",
        }}
      >
        {[
          { Icon: Phone, text: "+91 98765 43210" },
          { Icon: Mail, text: "hello@abybabygroup.com" },
        ].map(({ Icon, text }, i) => (
          <div
            key={i}
            className="flex items-center"
            style={{
              gap: 8,
              marginBottom: i === 0 ? 6 : 0,
              justifyContent: hovered ? "flex-start" : "center",
            }}
          >
            <Icon size={12} className="text-primary flex-shrink-0" />
            <span
              style={{
                fontSize: 11,
                color: "var(--foreground)",
                opacity: hovered ? 0.45 : 0,
                transform: hovered ? "translateX(0)" : "translateX(-6px)",
                transition:
                  "opacity 180ms ease 60ms, transform 180ms ease 60ms",
                whiteSpace: "nowrap",
              }}
            >
              {text}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}
