// // import { useState } from "react";
// // import { motion } from "motion/react";
// // import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Play } from "lucide-react";
// // // import type { Post } from "../types";
// // //
// // export function PostCard({ post }: { post: Post }) {
// //   const [liked, setLiked] = useState(false);
// //   const [saved, setSaved] = useState(false);
// //   const [likeCount, setLikeCount] = useState(post.likes);

// //   const handleLike = () => {
// //     const next = !liked;
// //     setLiked(next);
// //     setLikeCount((c) => c + (next ? 1 : -1));
// //   };

// //   return (
// //     <article className="border-b border-border bg-card">
// //       {/* Post header */}
// //       <div className="flex items-center gap-3 px-4 py-3">
// //         <div className="w-9 h-9 rounded-full border border-primary/50 bg-gradient-to-br from-amber-700 to-primary flex items-center justify-center flex-shrink-0">
// //           <span
// //             style={{ fontFamily: "'Cinzel', serif" }}
// //             className="text-xs font-bold text-white"
// //           >
// //             AB
// //           </span>
// //         </div>
// //         <div className="flex-1 min-w-0">
// //           <div
// //             style={{ fontFamily: "'Cinzel', serif" }}
// //             className="text-sm font-semibold text-foreground leading-tight"
// //           >
// //             abybaby_group
// //           </div>
// //           {post.location && (
// //             <div className="text-[11px] text-muted-foreground truncate">
// //               {post.location}
// //             </div>
// //           )}
// //         </div>
// //         <MoreHorizontal size={20} className="text-muted-foreground flex-shrink-0" />
// //       </div>

// //       {/* Media */}
// //       <div
// //         className="relative bg-muted overflow-hidden"
// //         style={{ aspectRatio: post.aspectRatio || "1/1" }}
// //       >
// //         <img
// //           src={post.url}
// //           alt={post.alt}
// //           className="w-full h-full object-cover"
// //           loading="lazy"
// //         />
// //         {post.isVideo && (
// //           <div className="absolute inset-0 flex items-center justify-center bg-black/15">
// //             <motion.div
// //               className="w-16 h-16 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center"
// //               whileTap={{ scale: 0.9 }}
// //             >
// //               <Play size={26} className="text-white ml-0.5" fill="white" />
// //             </motion.div>
// //           </div>
// //         )}
// //       </div>

// //       {/* Action bar */}
// //       <div className="px-4 pt-3 pb-4">
// //         <div className="flex items-center justify-between mb-2.5">
// //           <div className="flex items-center gap-4">
// //             <motion.button onClick={handleLike} whileTap={{ scale: 0.7 }}>
// //               <Heart
// //                 size={26}
// //                 className={`transition-colors duration-150 ${
// //                   liked ? "text-red-500 fill-red-500" : "text-foreground"
// //                 }`}
// //               />
// //             </motion.button>
// //             <motion.button whileTap={{ scale: 0.85 }}>
// //               <MessageCircle size={26} className="text-foreground" />
// //             </motion.button>
// //             <motion.button whileTap={{ scale: 0.85 }}>
// //               <Send size={26} className="text-foreground" />
// //             </motion.button>
// //           </div>
// //           <motion.button onClick={() => setSaved(!saved)} whileTap={{ scale: 0.7 }}>
// //             <Bookmark
// //               size={26}
// //               className={`transition-colors duration-150 ${
// //                 saved ? "text-primary fill-primary" : "text-foreground"
// //               }`}
// //             />
// //           </motion.button>
// //         </div>

// //         <div className="text-sm font-semibold text-foreground">
// //           {likeCount.toLocaleString()} likes
// //         </div>
// //         <p className="text-sm text-foreground mt-1 leading-snug">
// //           <span className="font-semibold">abybaby_group</span>{" "}
// //           {post.caption}
// //         </p>
// //         {post.comments > 0 && (
// //           <button className="text-muted-foreground text-sm mt-1">
// //             View all {post.comments} comments
// //           </button>
// //         )}
// //         <div className="text-muted-foreground text-xs mt-1.5 tracking-wide">
// //           {post.time}
// //         </div>
// //       </div>
// //     </article>
// //   );
// // }
// import { useState } from "react";
// import { motion } from "motion/react";
// import {
//   Heart,
//   MessageCircle,
//   Send,
//   Bookmark,
//   MoreHorizontal,
//   Play,
// } from "lucide-react";

// export function PostCard({ post }) {
//   const [liked, setLiked] = useState(false);
//   const [saved, setSaved] = useState(false);
//   const [likeCount, setLikeCount] = useState(post.likes);

//   const handleLike = () => {
//     const next = !liked;

//     setLiked(next);
//     setLikeCount((c) => c + (next ? 1 : -1));
//   };

//   return (
//     <article className="border-b border-border bg-card">
//       {/* Post header */}
//       <div className="flex items-center gap-3 px-4 py-3">
//         <div className="w-9 h-9 rounded-full border border-primary/50 bg-gradient-to-br from-amber-700 to-primary flex items-center justify-center flex-shrink-0">
//           <span
//             style={{ fontFamily: "'Cinzel', serif" }}
//             className="text-xs font-bold text-white"
//           >
//             AB
//           </span>
//         </div>

//         <div className="flex-1 min-w-0">
//           <div
//             style={{ fontFamily: "'Cinzel', serif" }}
//             className="text-sm font-semibold text-foreground leading-tight"
//           >
//             abybaby_group
//           </div>

//           {post.location && (
//             <div className="text-[11px] text-muted-foreground truncate">
//               {post.location}
//             </div>
//           )}
//         </div>

//         <MoreHorizontal
//           size={20}
//           className="text-muted-foreground flex-shrink-0"
//         />
//       </div>

//       {/* Media */}
//       <div
//         className="relative bg-muted overflow-hidden"
//         style={{ aspectRatio: post.aspectRatio || "1/1" }}
//       >
//         <img
//           src={post.url}
//           alt={post.alt}
//           className="w-full h-full object-cover"
//           loading="lazy"
//         />

//         {post.isVideo && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black/15">
//             <motion.div
//               className="w-16 h-16 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center"
//               whileTap={{ scale: 0.9 }}
//             >
//               <Play size={26} className="text-white ml-0.5" fill="white" />
//             </motion.div>
//           </div>
//         )}
//       </div>

//       {/* Action bar */}
//       <div className="px-4 pt-3 pb-4">
//         <div className="flex items-center justify-between mb-2.5">
//           <div className="flex items-center gap-4">
//             <motion.button onClick={handleLike} whileTap={{ scale: 0.7 }}>
//               <Heart
//                 size={26}
//                 className={`transition-colors duration-150 ${
//                   liked ? "text-red-500 fill-red-500" : "text-foreground"
//                 }`}
//               />
//             </motion.button>

//             <motion.button whileTap={{ scale: 0.85 }}>
//               <MessageCircle size={26} className="text-foreground" />
//             </motion.button>

//             <motion.button whileTap={{ scale: 0.85 }}>
//               <Send size={26} className="text-foreground" />
//             </motion.button>
//           </div>

//           <motion.button
//             onClick={() => setSaved(!saved)}
//             whileTap={{ scale: 0.7 }}
//           >
//             <Bookmark
//               size={26}
//               className={`transition-colors duration-150 ${
//                 saved ? "text-primary fill-primary" : "text-foreground"
//               }`}
//             />
//           </motion.button>
//         </div>

//         {/* <div className="text-sm font-semibold text-foreground">
//           {likeCount.toLocaleString()} likes
//         </div> */}

//         <p className="text-sm text-foreground mt-1 leading-snug">
//           <span className="font-semibold">abybaby_group</span> {post.caption}
//         </p>

//         {/* {post.comments > 0 && (
//           <button className="text-muted-foreground text-sm mt-1">
//             View all {post.comments} comments
//           </button>
//         )} */}

//         <div className="text-muted-foreground text-xs mt-1.5 tracking-wide">
//           {post.time}
//         </div>
//       </div>
//     </article>
//   );
// }
// import { useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import {
//   Heart,
//   MessageCircle,
//   Copy,
//   Bookmark,
//   MoreHorizontal,
//   Play,
//   X,
//   User,
//   Mail,
//   MapPin,
//   MessageSquare,
//   CheckCircle2,
// } from "lucide-react";

// // ── Message Form Modal ─────────────────────────────────────────────────────────
// function MessageModal({ onClose }) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     address: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [focused, setFocused] = useState(null);

//   const handleChange = (e) =>
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = () => {
//     if (!form.name || !form.email || !form.message) return;
//     setSubmitted(true);
//   };

//   const fields = [
//     {
//       name: "name",
//       label: "Full Name",
//       icon: User,
//       type: "text",
//       placeholder: "John Doe",
//     },
//     {
//       name: "email",
//       label: "Email Address",
//       icon: Mail,
//       type: "email",
//       placeholder: "john@example.com",
//     },
//     {
//       name: "address",
//       label: "Address",
//       icon: MapPin,
//       type: "text",
//       placeholder: "City, Country",
//     },
//   ];

//   return (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-0 sm:px-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={onClose}
//     >
//       {/* Backdrop */}
//       <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

//       {/* Modal sheet */}
//       <motion.div
//         className="relative w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl overflow-hidden"
//         style={{
//           background: "linear-gradient(145deg, #1a1a1a 0%, #111 100%)",
//           border: "1px solid rgba(255,255,255,0.08)",
//           boxShadow:
//             "0 -8px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
//         }}
//         initial={{ y: "100%", opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: "100%", opacity: 0 }}
//         transition={{ type: "spring", stiffness: 320, damping: 30 }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Drag handle */}
//         <div className="flex justify-center pt-3 pb-1 sm:hidden">
//           <div
//             className="w-10 h-1 rounded-full"
//             style={{ background: "rgba(255,255,255,0.15)" }}
//           />
//         </div>

//         <AnimatePresence mode="wait">
//           {!submitted ? (
//             <motion.div
//               key="form"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="px-6 pt-4 pb-7"
//             >
//               {/* Header */}
//               <div className="flex items-start justify-between mb-6">
//                 <div>
//                   <h2
//                     style={{
//                       fontFamily: "'Cinzel', serif",
//                       letterSpacing: "0.05em",
//                     }}
//                     className="text-lg font-bold text-white leading-tight"
//                   >
//                     Send a Message
//                   </h2>
//                   <p
//                     className="text-xs mt-1"
//                     style={{
//                       color: "rgba(255,255,255,0.4)",
//                       fontFamily: "'Cinzel', serif",
//                     }}
//                   >
//                     to abybaby_group
//                   </p>
//                 </div>
//                 <motion.button
//                   whileTap={{ scale: 0.85 }}
//                   onClick={onClose}
//                   className="w-8 h-8 rounded-full flex items-center justify-center"
//                   style={{
//                     background: "rgba(255,255,255,0.07)",
//                     border: "1px solid rgba(255,255,255,0.1)",
//                   }}
//                 >
//                   <X size={15} style={{ color: "rgba(255,255,255,0.5)" }} />
//                 </motion.button>
//               </div>

//               {/* Fields */}
//               <div className="space-y-3">
//                 {fields.map(
//                   ({ name, label, icon: Icon, type, placeholder }, i) => (
//                     <motion.div
//                       key={name}
//                       initial={{ opacity: 0, y: 12 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: i * 0.06 }}
//                     >
//                       <label
//                         className="block text-[11px] font-semibold mb-1.5 tracking-widest uppercase"
//                         style={{
//                           color: "rgba(255,255,255,0.35)",
//                           fontFamily: "'Cinzel', serif",
//                         }}
//                       >
//                         {label}
//                       </label>
//                       <div
//                         className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200"
//                         style={{
//                           background:
//                             focused === name
//                               ? "rgba(255,255,255,0.07)"
//                               : "rgba(255,255,255,0.04)",
//                           border:
//                             focused === name
//                               ? "1px solid rgba(180,120,60,0.6)"
//                               : "1px solid rgba(255,255,255,0.08)",
//                           boxShadow:
//                             focused === name
//                               ? "0 0 0 3px rgba(180,120,60,0.08)"
//                               : "none",
//                         }}
//                       >
//                         <Icon
//                           size={15}
//                           style={{
//                             color:
//                               focused === name
//                                 ? "rgba(200,140,60,0.9)"
//                                 : "rgba(255,255,255,0.25)",
//                             flexShrink: 0,
//                             transition: "color 0.2s",
//                           }}
//                         />
//                         <input
//                           type={type}
//                           name={name}
//                           value={form[name]}
//                           onChange={handleChange}
//                           onFocus={() => setFocused(name)}
//                           onBlur={() => setFocused(null)}
//                           placeholder={placeholder}
//                           className="flex-1 bg-transparent text-sm outline-none"
//                           style={{
//                             color: "rgba(255,255,255,0.85)",
//                             caretColor: "rgba(200,140,60,0.9)",
//                             fontFamily: "Georgia, serif",
//                           }}
//                         />
//                       </div>
//                     </motion.div>
//                   ),
//                 )}

//                 {/* Message textarea */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 12 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.18 }}
//                 >
//                   <label
//                     className="block text-[11px] font-semibold mb-1.5 tracking-widest uppercase"
//                     style={{
//                       color: "rgba(255,255,255,0.35)",
//                       fontFamily: "'Cinzel', serif",
//                     }}
//                   >
//                     Message
//                   </label>
//                   <div
//                     className="flex gap-3 rounded-xl px-4 py-3 transition-all duration-200"
//                     style={{
//                       background:
//                         focused === "message"
//                           ? "rgba(255,255,255,0.07)"
//                           : "rgba(255,255,255,0.04)",
//                       border:
//                         focused === "message"
//                           ? "1px solid rgba(180,120,60,0.6)"
//                           : "1px solid rgba(255,255,255,0.08)",
//                       boxShadow:
//                         focused === "message"
//                           ? "0 0 0 3px rgba(180,120,60,0.08)"
//                           : "none",
//                     }}
//                   >
//                     <MessageSquare
//                       size={15}
//                       style={{
//                         color:
//                           focused === "message"
//                             ? "rgba(200,140,60,0.9)"
//                             : "rgba(255,255,255,0.25)",
//                         flexShrink: 0,
//                         marginTop: 2,
//                         transition: "color 0.2s",
//                       }}
//                     />
//                     <textarea
//                       name="message"
//                       value={form.message}
//                       onChange={handleChange}
//                       onFocus={() => setFocused("message")}
//                       onBlur={() => setFocused(null)}
//                       placeholder="Write your message here…"
//                       rows={3}
//                       className="flex-1 bg-transparent text-sm outline-none resize-none"
//                       style={{
//                         color: "rgba(255,255,255,0.85)",
//                         caretColor: "rgba(200,140,60,0.9)",
//                         fontFamily: "Georgia, serif",
//                       }}
//                     />
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Submit */}
//               <motion.button
//                 onClick={handleSubmit}
//                 whileTap={{ scale: 0.97 }}
//                 whileHover={{ scale: 1.01 }}
//                 className="w-full mt-5 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase relative overflow-hidden"
//                 style={{
//                   fontFamily: "'Cinzel', serif",
//                   background:
//                     "linear-gradient(135deg, #b87828 0%, #8b5e1a 100%)",
//                   color: "#fff",
//                   boxShadow: "0 4px 20px rgba(180,120,40,0.35)",
//                   opacity:
//                     !form.name || !form.email || !form.message ? 0.45 : 1,
//                 }}
//                 disabled={!form.name || !form.email || !form.message}
//               >
//                 Send Message
//               </motion.button>
//             </motion.div>
//           ) : (
//             /* Success state */
//             <motion.div
//               key="success"
//               initial={{ opacity: 0, scale: 0.92 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="flex flex-col items-center justify-center px-6 py-14 text-center"
//             >
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 260,
//                   damping: 18,
//                   delay: 0.1,
//                 }}
//                 className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
//                 style={{
//                   background: "rgba(180,120,40,0.15)",
//                   border: "1px solid rgba(180,120,40,0.35)",
//                 }}
//               >
//                 <CheckCircle2 size={32} style={{ color: "#c8883c" }} />
//               </motion.div>
//               <h3
//                 style={{
//                   fontFamily: "'Cinzel', serif",
//                   letterSpacing: "0.05em",
//                 }}
//                 className="text-lg font-bold text-white mb-2"
//               >
//                 Message Sent!
//               </h3>
//               <p
//                 className="text-sm"
//                 style={{
//                   color: "rgba(255,255,255,0.4)",
//                   fontFamily: "Georgia, serif",
//                 }}
//               >
//                 We'll get back to you shortly.
//               </p>
//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 onClick={onClose}
//                 className="mt-7 px-8 py-2.5 rounded-xl text-xs font-bold tracking-widest uppercase"
//                 style={{
//                   fontFamily: "'Cinzel', serif",
//                   background: "rgba(255,255,255,0.06)",
//                   border: "1px solid rgba(255,255,255,0.1)",
//                   color: "rgba(255,255,255,0.6)",
//                 }}
//               >
//                 Close
//               </motion.button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </motion.div>
//   );
// }

// // ── PostCard ───────────────────────────────────────────────────────────────────
// export function PostCard({ post }) {
//   const [liked, setLiked] = useState(false);
//   const [saved, setSaved] = useState(false);
//   const [likeCount, setLikeCount] = useState(post.likes);
//   const [messageOpen, setMessageOpen] = useState(false);

//   const handleLike = () => {
//     const next = !liked;
//     setLiked(next);
//     setLikeCount((c) => c + (next ? 1 : -1));
//   };

//   return (
//     <>
//       <article className="border-b border-border bg-card">
//         {/* Post header */}
//         <div className="flex items-center gap-3 px-4 py-3">
//           <div className="w-9 h-9 rounded-full border border-primary/50 bg-gradient-to-br from-lime-700 to-primary flex items-center justify-center flex-shrink-0">
//             <span
//               style={{ fontFamily: "'Cinzel', serif" }}
//               className="text-xs font-bold text-white"
//             >
//               AB
//             </span>
//           </div>
//           <div className="flex-1 min-w-0">
//             <div
//               style={{ fontFamily: "'Cinzel', serif" }}
//               className="text-sm font-semibold text-foreground leading-tight"
//             >
//               abybaby_group
//             </div>
//             {post.location && (
//               <div className="text-[11px] text-muted-foreground truncate">
//                 {post.location}
//               </div>
//             )}
//           </div>
//           <MoreHorizontal
//             size={20}
//             className="text-muted-foreground flex-shrink-0"
//           />
//         </div>

//         {/* Media */}
//         <div
//           className="relative bg-muted overflow-hidden"
//           style={{ aspectRatio: post.aspectRatio || "1/1" }}
//         >
//           <img
//             src={post.url}
//             alt={post.alt}
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//           {post.isVideo && (
//             <div className="absolute inset-0 flex items-center justify-center bg-black/15">
//               <motion.div
//                 className="w-16 h-16 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center"
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Play size={26} className="text-white ml-0.5" fill="white" />
//               </motion.div>
//             </div>
//           )}
//         </div>

//         {/* Action bar */}
//         <div className="px-4 pt-3 pb-4">
//           <div className="flex items-center justify-between mb-2.5">
//             <div className="flex items-center gap-4">
//               <motion.button onClick={handleLike} whileTap={{ scale: 0.7 }}>
//                 <Heart
//                   size={26}
//                   className={`transition-colors duration-150 ${
//                     liked ? "text-red-500 fill-red-500" : "text-foreground"
//                   }`}
//                 />
//               </motion.button>

//               {/* MessageCircle → opens message form modal */}
//               <motion.button
//                 whileTap={{ scale: 0.85 }}
//                 onClick={() => setMessageOpen(true)}
//               >
//                 <MessageCircle
//                   size={26}
//                   className="text-foreground cursor-pointer"
//                 />
//               </motion.button>

//               <motion.button whileTap={{ scale: 0.85 }}>
//                 <Copy size={26} className="text-foreground cursor-pointer" />
//               </motion.button>
//             </div>

//             <motion.button
//               onClick={() => setSaved(!saved)}
//               whileTap={{ scale: 0.7 }}
//             >
//               <Bookmark
//                 size={26}
//                 className={`transition-colors duration-150 cursor-pointer    ${
//                   saved ? "text-primary fill-primary" : "text-foreground"
//                 }`}
//               />
//             </motion.button>
//           </div>

//           <p className="text-sm text-foreground mt-1 leading-snug">
//             <span className="font-semibold">abybaby_group</span> {post.caption}
//           </p>
//           <div className="text-muted-foreground text-xs mt-1.5 tracking-wide">
//             {post.time}
//           </div>
//         </div>
//       </article>

//       <AnimatePresence>
//         {messageOpen && <MessageModal onClose={() => setMessageOpen(false)} />}
//       </AnimatePresence>
//     </>
//   );
// }
import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  MessageCircle,
  Copy,
  Bookmark,
  MoreHorizontal,
  Play,
  X,
  User,
  Mail,
  MapPin,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

// ── MessageModal ───────────────────────────────────────────────────────────────
function MessageModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", address: "", message: "" });
    }, 350);
  };

  const fields = [
    {
      name: "name",
      label: "Full Name",
      icon: User,
      type: "text",
      placeholder: "John Doe",
    },
    {
      name: "email",
      label: "Email Address",
      icon: Mail,
      type: "email",
      placeholder: "john@example.com",
    },
    {
      name: "address",
      label: "Address",
      icon: MapPin,
      type: "text",
      placeholder: "City, Country",
    },
  ];

  const modal = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center px-0 sm:px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={handleClose}
        >
          {/* Full-viewport backdrop */}
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(12px)",
            }}
          />

          {/* Modal sheet */}
          <motion.div
            className="relative w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl overflow-hidden"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              boxShadow:
                "0 -8px 60px rgba(0,0,0,0.12), 0 20px 60px rgba(0,0,0,0.1)",
            }}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag handle (mobile) */}
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className="w-10 h-1 rounded-full bg-border" />
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="px-6 pt-4 pb-7"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2
                        style={{
                          fontFamily: "'Cinzel', serif",
                          letterSpacing: "0.05em",
                        }}
                        className="text-lg font-bold text-foreground leading-tight"
                      >
                        Send a Message
                      </h2>
                      <p
                        className="text-xs mt-1 text-muted-foreground"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        to abybaby_group
                      </p>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={handleClose}
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-border bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X size={15} />
                    </motion.button>
                  </div>

                  {/* Fields */}
                  <div className="space-y-3">
                    {fields.map(
                      ({ name, label, icon: Icon, type, placeholder }, i) => (
                        <motion.div
                          key={name}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.06 }}
                        >
                          <label
                            className="block text-[11px] font-semibold mb-1.5 tracking-widest uppercase text-muted-foreground"
                            style={{ fontFamily: "'Cinzel', serif" }}
                          >
                            {label}
                          </label>
                          <div
                            className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200"
                            style={{
                              background:
                                focused === name ? "#ffffff" : "var(--muted)",
                              border:
                                focused === name
                                  ? "1px solid #84cc16"
                                  : "1px solid var(--border)",
                              boxShadow:
                                focused === name
                                  ? "0 0 0 3px rgba(163,230,53,0.15)"
                                  : "none",
                            }}
                          >
                            <Icon
                              size={15}
                              style={{
                                color:
                                  focused === name
                                    ? "#3f6212"
                                    : "var(--muted-foreground)",
                                flexShrink: 0,
                                transition: "color 0.2s",
                              }}
                            />
                            <input
                              type={type}
                              name={name}
                              value={form[name]}
                              onChange={handleChange}
                              onFocus={() => setFocused(name)}
                              onBlur={() => setFocused(null)}
                              placeholder={placeholder}
                              className="flex-1 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground"
                              style={{ caretColor: "#3f6212" }}
                            />
                          </div>
                        </motion.div>
                      ),
                    )}

                    {/* Message textarea */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.18 }}
                    >
                      <label
                        className="block text-[11px] font-semibold mb-1.5 tracking-widest uppercase text-muted-foreground"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        Message
                      </label>
                      <div
                        className="flex gap-3 rounded-xl px-4 py-3 transition-all duration-200"
                        style={{
                          background:
                            focused === "message" ? "#ffffff" : "var(--muted)",
                          border:
                            focused === "message"
                              ? "1px solid #84cc16"
                              : "1px solid var(--border)",
                          boxShadow:
                            focused === "message"
                              ? "0 0 0 3px rgba(163,230,53,0.15)"
                              : "none",
                        }}
                      >
                        <MessageSquare
                          size={15}
                          style={{
                            color:
                              focused === "message"
                                ? "#3f6212"
                                : "var(--muted-foreground)",
                            flexShrink: 0,
                            marginTop: 2,
                            transition: "color 0.2s",
                          }}
                        />
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused(null)}
                          placeholder="Write your message here…"
                          rows={3}
                          className="flex-1 bg-transparent text-sm outline-none resize-none text-foreground placeholder:text-muted-foreground"
                          style={{ caretColor: "#3f6212" }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    onClick={handleSubmit}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.01 }}
                    disabled={!form.name || !form.email || !form.message}
                    className="w-full mt-5 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase transition-all"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      background: "var(--primary)",
                      color: "var(--primary-foreground)",
                      boxShadow: "0 4px 20px rgba(163,230,53,0.25)",
                      opacity:
                        !form.name || !form.email || !form.message ? 0.45 : 1,
                      cursor:
                        !form.name || !form.email || !form.message
                          ? "not-allowed"
                          : "pointer",
                    }}
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              ) : (
                /* Success state */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center px-6 py-14 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                      delay: 0.1,
                    }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{
                      background: "rgba(163,230,53,0.12)",
                      border: "1px solid rgba(163,230,53,0.4)",
                    }}
                  >
                    <CheckCircle2 size={32} style={{ color: "#3f6212" }} />
                  </motion.div>
                  <h3
                    style={{
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: "0.05em",
                    }}
                    className="text-lg font-bold text-foreground mb-2"
                  >
                    Message Sent!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We'll get back to you shortly.
                  </p>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClose}
                    className="mt-7 px-8 py-2.5 rounded-xl text-xs font-bold tracking-widest uppercase border border-border bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Portal mounts directly under <body> — outside every card's stacking context
  return createPortal(modal, document.body);
}

// ── PostCard ───────────────────────────────────────────────────────────────────
export function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [messageOpen, setMessageOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleLike = () => {
    const next = !liked;
    setLiked(next);
    setLikeCount((c) => c + (next ? 1 : -1));
  };
  const handleCopy = async () => {
    try {
      // Copy current post URL
      await navigator.clipboard.writeText(post.url);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };
  return (
    <>
      <article className="border-b border-border bg-card">
        {/* Post header */}
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-9 h-9 rounded-full border border-primary/50 bg-gradient-to-br from-lime-700 to-primary flex items-center justify-center flex-shrink-0">
            <span
              style={{ fontFamily: "'Cinzel', serif" }}
              className="text-xs font-bold text-white"
            >
              AB
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div
              style={{ fontFamily: "'Cinzel', serif" }}
              className="text-sm font-semibold text-foreground leading-tight"
            >
              abybaby_group
            </div>
            {post.location && (
              <div className="text-[11px] text-muted-foreground truncate">
                {post.location}
              </div>
            )}
          </div>
          <MoreHorizontal
            size={20}
            className="text-muted-foreground flex-shrink-0"
          />
        </div>

        {/* Media */}
        <div
          className="relative bg-muted overflow-hidden"
          style={{ aspectRatio: post.aspectRatio || "1/1" }}
        >
          <img
            src={post.url}
            alt={post.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {post.isVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/15">
              <motion.div
                className="w-16 h-16 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center"
                whileTap={{ scale: 0.9 }}
              >
                <Play size={26} className="text-white ml-0.5" fill="white" />
              </motion.div>
            </div>
          )}
        </div>

        {/* Action bar */}
        <div className="px-4 pt-3 pb-4">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-4">
              <motion.button onClick={handleLike} whileTap={{ scale: 0.7 }}>
                <Heart
                  size={26}
                  className={`transition-colors duration-150 ${
                    liked ? "text-red-500 fill-red-500" : "text-foreground"
                  }`}
                />
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => setMessageOpen(true)}
              >
                <MessageCircle
                  size={26}
                  className="text-foreground cursor-pointer"
                />
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={handleCopy}
                className="relative"
              >
                <Copy
                  size={26}
                  className={`cursor-pointer transition-all duration-300 ${
                    copied ? "text-lime-500" : "text-foreground"
                  }`}
                />

                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-lime-500 px-2 py-1 text-[10px] font-medium text-white"
                    >
                      Copied!
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            <motion.button
              onClick={() => setSaved(!saved)}
              whileTap={{ scale: 0.7 }}
            >
              <Bookmark
                size={26}
                className={`transition-colors duration-150 cursor-pointer ${
                  saved ? "text-primary fill-primary" : "text-foreground"
                }`}
              />
            </motion.button>
          </div>

          <p className="text-sm text-foreground mt-1 leading-snug">
            <span className="font-semibold">abybaby_group</span> {post.caption}
          </p>
          <div className="text-muted-foreground text-xs mt-1.5 tracking-wide">
            {post.time}
          </div>
        </div>
      </article>

      {/*
        MessageModal lives inside PostCard but is portaled to <body>.
        backdrop-filter now covers the full viewport — no per-card blur bleed.
      */}
      <MessageModal open={messageOpen} onClose={() => setMessageOpen(false)} />
    </>
  );
}
