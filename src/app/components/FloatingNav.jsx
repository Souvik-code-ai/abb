// // // import { useState } from "react";
// // // import { motion } from "motion/react";
// // // import { Menu, X, Home, Info, Image, Star, BookOpen } from "lucide-react";
// // // import type { Page, NavigateFn } from "../types";

// // // const NAV_ITEMS = [
// // //   { id: "home" as Page, label: "Home", Icon: Home },
// // //   { id: "about" as Page, label: "About", Icon: Info },
// // //   { id: "gallery" as Page, label: "Gallery", Icon: Image },
// // //   { id: "festival" as Page, label: "Festival", Icon: Star },
// // //   { id: "blog" as Page, label: "Blog", Icon: BookOpen },
// // // ];

// // // interface FloatingNavProps {
// // //   currentPage: Page;
// // //   navigate: NavigateFn;
// // // }

// // // export function FloatingNav({ currentPage, navigate }: FloatingNavProps) {
// // //   const [open, setOpen] = useState(false);

// // //   const handleNav = (page: Page) => {
// // //     navigate(page);
// // //     setOpen(false);
// // //   };

// // //   return (
// // //     <div className="lg:hidden">
// // //       {/* Backdrop */}
// // //       {open && (
// // //         <div
// // //           className="fixed inset-0 z-40"
// // //           onClick={() => setOpen(false)}
// // //         />
// // //       )}

// // //       {/* Floating panel */}
// // //       {open && (
// // //         <motion.div
// // //           className="fixed bottom-24 right-5 z-50 bg-black/92 backdrop-blur-2xl border border-border rounded-2xl overflow-hidden shadow-2xl w-56"
// // //           initial={{ opacity: 0, scale: 0.82, y: 12, transformOrigin: "bottom right" }}
// // //           animate={{ opacity: 1, scale: 1, y: 0 }}
// // //           transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
// // //         >
// // //           {/* Panel header */}
// // //           <div className="px-4 py-3 border-b border-border/60">
// // //             <div
// // //               style={{ fontFamily: "'Cinzel', serif" }}
// // //               className="text-xs text-primary font-semibold tracking-widest uppercase"
// // //             >
// // //               Navigate
// // //             </div>
// // //           </div>

// // //           {/* Nav items */}
// // //           <div className="p-2">
// // //             {NAV_ITEMS.map(({ id, label, Icon }) => (
// // //               <motion.button
// // //                 key={id}
// // //                 onClick={() => handleNav(id)}
// // //                 whileTap={{ scale: 0.97 }}
// // //                 className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors duration-150 ${
// // //                   currentPage === id
// // //                     ? "bg-primary/15 text-primary"
// // //                     : "text-foreground/65 hover:bg-white/5 hover:text-foreground"
// // //                 }`}
// // //               >
// // //                 <Icon size={18} className={currentPage === id ? "text-primary" : ""} />
// // //                 <span
// // //                   style={{ fontFamily: "'Cinzel', serif" }}
// // //                   className="text-sm font-medium"
// // //                 >
// // //                   {label}
// // //                 </span>
// // //                 {currentPage === id && (
// // //                   <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
// // //                 )}
// // //               </motion.button>
// // //             ))}
// // //           </div>
// // //         </motion.div>
// // //       )}

// // //       {/* FAB */}
// // //       <motion.button
// // //         onClick={() => setOpen(!open)}
// // //         className="fixed bottom-6 right-5 z-50 w-14 h-14 rounded-full bg-primary shadow-lg shadow-primary/40 flex items-center justify-center"
// // //         whileHover={{ scale: 1.08 }}
// // //         whileTap={{ scale: 0.9 }}
// // //         animate={{ rotate: open ? 90 : 0 }}
// // //         transition={{ duration: 0.22 }}
// // //       >
// // //         {open ? (
// // //           <X size={22} className="text-primary-foreground" />
// // //         ) : (
// // //           <Menu size={22} className="text-primary-foreground" />
// // //         )}
// // //       </motion.button>
// // //     </div>
// // //   );
// // // }
// // import { useState } from "react";
// // import { motion } from "motion/react";
// // import { Menu, X, Home, Info, Image, Star, BookOpen } from "lucide-react";

// // const NAV_ITEMS = [
// //   { id: "home", label: "Home", Icon: Home },
// //   { id: "about", label: "About", Icon: Info },
// //   { id: "gallery", label: "Gallery", Icon: Image },
// //   { id: "festival", label: "Festival", Icon: Star },
// //   { id: "blog", label: "Blog", Icon: BookOpen },
// // ];

// // export function FloatingNav({ currentPage, navigate }) {
// //   const [open, setOpen] = useState(false);

// //   const handleNav = (page) => {
// //     navigate(page);
// //     setOpen(false);
// //   };

// //   return (
// //     <div className="lg:hidden">
// //       {/* Backdrop */}
// //       {open && (
// //         <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
// //       )}

// //       {/* Floating panel */}
// //       {open && (
// //         <motion.div
// //           className="fixed bottom-24 right-5 z-50 bg-black/92 backdrop-blur-2xl border border-border rounded-2xl overflow-hidden shadow-2xl w-56"
// //           initial={{
// //             opacity: 0,
// //             scale: 0.82,
// //             y: 12,
// //             transformOrigin: "bottom right",
// //           }}
// //           animate={{ opacity: 1, scale: 1, y: 0 }}
// //           transition={{
// //             duration: 0.22,
// //             ease: [0.25, 0.46, 0.45, 0.94],
// //           }}
// //         >
// //           {/* Panel header */}
// //           {/* <div className="px-4 py-3 border-b border-border/60">
// //             <div
// //               style={{ fontFamily: "'Cinzel', serif" }}
// //               className="text-xs text-primary font-semibold tracking-widest uppercase"
// //             >
// //               Navigate
// //             </div>
// //           </div> */}

// //           {/* Nav items */}
// //           <div className="p-2">
// //             {NAV_ITEMS.map(({ id, label, Icon }) => (
// //               <motion.button
// //                 key={id}
// //                 onClick={() => handleNav(id)}
// //                 whileTap={{ scale: 0.97 }}
// //                 className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors duration-150 ${
// //                   currentPage === id
// //                     ? "bg-primary/15 text-primary"
// //                     : "text-foreground/65 hover:bg-white/5 hover:text-foreground"
// //                 }`}
// //               >
// //                 <Icon
// //                   size={18}
// //                   className={currentPage === id ? "text-primary" : ""}
// //                 />

// //                 <span
// //                   style={{ fontFamily: "'Cinzel', serif" }}
// //                   className="text-sm font-medium"
// //                 >
// //                   {label}
// //                 </span>

// //                 {currentPage === id && (
// //                   <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
// //                 )}
// //               </motion.button>
// //             ))}
// //           </div>
// //         </motion.div>
// //       )}

// //       {/* FAB */}
// //       <motion.button
// //         onClick={() => setOpen(!open)}
// //         className="fixed bottom-6 right-5 z-50 w-14 h-14 rounded-full bg-primary shadow-lg shadow-primary/40 flex items-center justify-center"
// //         whileHover={{ scale: 1.08 }}
// //         whileTap={{ scale: 0.9 }}
// //         animate={{ rotate: open ? 90 : 0 }}
// //         transition={{ duration: 0.22 }}
// //       >
// //         {open ? (
// //           <X size={22} className="text-primary-foreground" />
// //         ) : (
// //           <Menu size={22} className="text-primary-foreground" />
// //         )}
// //       </motion.button>
// //     </div>
// //   );
// // }
// // import { useState } from "react";
// // import { motion, AnimatePresence } from "motion/react";
// // import { Menu, X, Home, Info, Image, Star, BookOpen } from "lucide-react";

// // const NAV_ITEMS = [
// //   { id: "home", label: "Home", Icon: Home },
// //   { id: "about", label: "About", Icon: Info },
// //   { id: "gallery", label: "Gallery", Icon: Image },
// //   { id: "festival", label: "Festival", Icon: Star },
// //   { id: "blog", label: "Blog", Icon: BookOpen },
// // ];

// // export function FloatingNav({ currentPage, navigate }) {
// //   const [open, setOpen] = useState(false);

// //   const handleNav = (page) => {
// //     navigate(page);
// //     setOpen(false);
// //   };

// //   return (
// //     <div className="lg:hidden">
// //       {open && (
// //         <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
// //       )}

// //       {/* Full-width row pinned to bottom */}
// //       <div className="fixed bottom-6 left-0 right-0 z-50 flex items-center px-5 gap-3">
// //         {/* Icon strip — grows to fill all space left of the FAB */}
// //         <AnimatePresence>
// //           {open && (
// //             <motion.div
// //               className="flex-1 flex items-center justify-around bg-black/92 backdrop-blur-2xl border border-border rounded-2xl px-4 py-2 shadow-2xl"
// //               initial={{ opacity: 0, x: 40, scale: 0.95 }}
// //               animate={{ opacity: 1, x: 0, scale: 1 }}
// //               exit={{ opacity: 0, x: 40, scale: 0.95 }}
// //               transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
// //             >
// //               {NAV_ITEMS.map(({ id, Icon, label }, i) => (
// //                 <motion.button
// //                   key={id}
// //                   onClick={() => handleNav(id)}
// //                   title={label}
// //                   className={`relative w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-150 ${
// //                     currentPage === id
// //                       ? "bg-primary/20 text-primary"
// //                       : "text-foreground/55 hover:bg-white/8 hover:text-foreground"
// //                   }`}
// //                   initial={{ opacity: 0, x: 16 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   transition={{ delay: i * 0.04 }}
// //                   whileTap={{ scale: 0.88 }}
// //                 >
// //                   <Icon size={20} />
// //                   {currentPage === id && (
// //                     <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
// //                   )}
// //                 </motion.button>
// //               ))}
// //             </motion.div>
// //           )}
// //         </AnimatePresence>

// //         {/* FAB — always visible, stays right */}
// //         <motion.button
// //           onClick={() => setOpen(!open)}
// //           className="w-14 h-14 rounded-full bg-primary shadow-lg shadow-primary/40 flex items-center justify-center flex-shrink-0 ml-auto"
// //           whileHover={{ scale: 1.08 }}
// //           whileTap={{ scale: 0.9 }}
// //           animate={{ rotate: open ? 90 : 0 }}
// //           transition={{ duration: 0.22 }}
// //         >
// //           {open ? (
// //             <X size={22} className="text-primary-foreground" />
// //           ) : (
// //             <Menu size={22} className="text-primary-foreground" />
// //           )}
// //         </motion.button>
// //       </div>
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import {
//   Menu,
//   X,
//   Home,
//   Info,
//   Image,
//   Star,
//   BookOpen,
//   ShieldCheck,
//   User,
// } from "lucide-react";

// const NAV_ITEMS = [
//   { id: "home", label: "Home", Icon: Home },
//   { id: "events", label: "Events", Icon: Info },
//   { id: "activation", label: "activation", Icon: ShieldCheck },
//   { id: "digital", label: "digital", Icon: Image },
//   { id: "exhibition", label: "exhibition", Icon: Star },
//   { id: "profile", label: "profile", Icon: User },
// ];

// export function FloatingNav({ currentPage, navigate }) {
//   const [open, setOpen] = useState(false);

//   const handleNav = (page) => {
//     navigate(page);
//     setOpen(false);
//   };

//   return (
//     <div className="lg:hidden">
//       {/* Backdrop */}
//       {open && (
//         <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
//       )}

//       {/* Full-width row pinned to bottom */}
//       <div className="fixed bottom-6 left-0 right-0 z-50 flex items-center px-5 gap-3">
//         {/* Icon strip */}
//         <AnimatePresence>
//           {open && (
//             <motion.div
//               className="flex-1 flex items-center justify-around rounded-2xl px-4 py-2 shadow-lg"
//               style={{
//                 background: "var(--card)", // #f9fafb — light surface
//                 border: "1px solid var(--border)", // #e5e7eb
//                 boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
//               }}
//               initial={{ opacity: 0, x: 40, scale: 0.95 }}
//               animate={{ opacity: 1, x: 0, scale: 1 }}
//               exit={{ opacity: 0, x: 40, scale: 0.95 }}
//               transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
//             >
//               {NAV_ITEMS.map(({ id, Icon, label }, i) => (
//                 <motion.button
//                   key={id}
//                   onClick={() => handleNav(id)}
//                   title={label}
//                   className="relative w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-150"
//                   style={{
//                     background:
//                       currentPage === id
//                         ? "rgba(163,230,53,0.15)"
//                         : "transparent",
//                     color:
//                       currentPage === id
//                         ? "#3f6212" // dark green — readable on light bg
//                         : "var(--muted-foreground)", // #6b7280
//                   }}
//                   initial={{ opacity: 0, x: 16 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.04 }}
//                   whileTap={{ scale: 0.88 }}
//                   whileHover={{
//                     background:
//                       currentPage === id
//                         ? "rgba(163,230,53,0.2)"
//                         : "var(--secondary)", // #f3f4f6
//                   }}
//                 >
//                   <Icon size={20} />
//                   {/* Active dot */}
//                   {currentPage === id && (
//                     <span
//                       className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
//                       style={{ background: "var(--primary)" }} // #a3e635
//                     />
//                   )}
//                 </motion.button>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* FAB — always visible */}
//         <motion.button
//           onClick={() => setOpen(!open)}
//           className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ml-auto"
//           style={{
//             background: "var(--primary)", // #a3e635
//             boxShadow: "0 4px 16px rgba(163,230,53,0.35)",
//           }}
//           whileHover={{ scale: 1.08 }}
//           whileTap={{ scale: 0.9 }}
//           animate={{ rotate: open ? 90 : 0 }}
//           transition={{ duration: 0.22 }}
//         >
//           {open ? (
//             <X size={22} style={{ color: "var(--primary-foreground)" }} /> // #0a0a14
//           ) : (
//             <Menu size={22} style={{ color: "var(--primary-foreground)" }} />
//           )}
//         </motion.button>
//       </div>
//     </div>
//   );
// }
import { motion } from "motion/react";
import { Home, Info, Image, Star, ShieldCheck, User } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home", Icon: Home },
  { id: "events", label: "Events", Icon: Info },
  { id: "activation", label: "Activation", Icon: ShieldCheck },
  { id: "digital", label: "Digital", Icon: Image },
  { id: "exhibition", label: "Exhibition", Icon: Star },
  { id: "profile", label: "Profile", Icon: User },
];

export function FloatingNav({ currentPage, navigate }) {
  const handleNav = (page) => {
    navigate(page);
  };

  return (
    <div className="lg:hidden">
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 border-t"
        style={{
          background: "var(--card)",
          borderColor: "var(--border)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <div className="flex items-center justify-around h-16 px-2">
          {NAV_ITEMS.map(({ id, Icon, label }) => {
            const active = currentPage === id;

            return (
              <motion.button
                key={id}
                onClick={() => handleNav(id)}
                className="relative flex flex-col items-center justify-center gap-1 min-w-0 flex-1 py-2"
                whileTap={{ scale: 0.9 }}
              >
                <Icon
                  size={22}
                  style={{
                    color: active
                      ? "var(--primary)"
                      : "var(--muted-foreground)",
                  }}
                />

                <span
                  className="text-[10px] font-medium truncate"
                  style={{
                    color: active
                      ? "var(--primary)"
                      : "var(--muted-foreground)",
                  }}
                >
                  {label}
                </span>

                {active && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute top-0 w-8 h-1 rounded-full"
                    style={{
                      background: "var(--primary)",
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
