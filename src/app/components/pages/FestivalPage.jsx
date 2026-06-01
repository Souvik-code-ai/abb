// import { motion } from "motion/react";
// import { Play, ArrowRight } from "lucide-react";
// import { StoriesBar } from "../StoriesBar";
// import { PostCard } from "../PostCard";
// import { QuickNav } from "../QuickNav";
// // import type { Page, NavigateFn, Story, Post } from "../../types";

// const STORIES = [
//   {
//     id: "f1",
//     name: "Diwali Reel",
//     thumb:
//       "https://images.unsplash.com/photo-1580558036732-53b6b3574160?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "f2",
//     name: "Decor Reel",
//     thumb:
//       "https://images.unsplash.com/photo-1600400411727-6f0fd6e10933?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "f3",
//     name: "Dance Reel",
//     thumb:
//       "https://images.unsplash.com/photo-1585371843734-1800eada9acc?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "f4",
//     name: "Crowd Reel",
//     thumb:
//       "https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "f5",
//     name: "Fire Reel",
//     thumb:
//       "https://images.unsplash.com/photo-1772947314926-a3bcffd09b1b?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "f6",
//     name: "Divine",
//     thumb:
//       "https://images.unsplash.com/photo-1573964093819-aaa848e41d4a?w=200&h=200&fit=crop&auto=format",
//   },
// ];

// // interface Festival {
// //   id: string;
// //   title: string;
// //   subtitle: string;
// //   date: string;
// //   year: string;
// //   location: string;
// //   desc: string;
// //   tag: string;
// //   img: string;
// //   isVideo?: boolean;
// // }

// const FESTIVALS = [
//   {
//     id: "fv1",
//     title: "Independence Day Special",
//     subtitle: "77 Years of Pride",
//     date: "15 Aug",
//     year: "2024",
//     location: "Pan-India — 50+ Cities",
//     desc: "Nationwide BTL activations celebrating 77 years of independence. Patriotic performances, brand activations, and community engagement across every corner of India.",
//     tag: "#IndependenceDay",
//     img: "https://images.unsplash.com/photo-1600400411727-6f0fd6e10933?w=800&h=500&fit=crop&auto=format",
//     isVideo: true,
//   },
//   {
//     id: "fv2",
//     title: "Diwali Grand Festival",
//     subtitle: "Festival of Lights",
//     date: "10 Nov",
//     year: "2024",
//     location: "Mumbai · Delhi · Jaipur",
//     desc: "Illuminating brand experiences through immersive light installations, cultural performances, and large-scale consumer activations across 3 metro cities.",
//     tag: "#DiwaliActivation",
//     img: "https://images.unsplash.com/photo-1580558036732-53b6b3574160?w=800&h=500&fit=crop&auto=format",
//     isVideo: true,
//   },
//   {
//     id: "fv3",
//     title: "Republic Day Roadshow",
//     subtitle: "Patriotism in Motion",
//     date: "26 Jan",
//     year: "2025",
//     location: "Tier-1 & Tier-2 Cities",
//     desc: "High-energy patriotic brand campaigns and live performances across tier-1 and tier-2 cities with a digital-first amplification strategy.",
//     tag: "#RepublicDay",
//     img: "https://images.unsplash.com/photo-1585371843734-1800eada9acc?w=800&h=500&fit=crop&auto=format",
//   },
//   {
//     id: "fv4",
//     title: "Navratri Cultural Fair",
//     subtitle: "9 Nights of Celebration",
//     date: "3 Oct",
//     year: "2024",
//     location: "Ahmedabad · Vadodara",
//     desc: "Massive Navratri celebrations with traditional garba performances, local artisan showcases, and brand-sponsored live entertainment for 9 consecutive nights.",
//     tag: "#Navratri2024",
//     img: "https://images.unsplash.com/photo-1573964093819-aaa848e41d4a?w=800&h=500&fit=crop&auto=format",
//     isVideo: true,
//   },
// ];

// const POSTS = [
//   {
//     id: "fp1",
//     url: "https://images.unsplash.com/photo-1769718460805-97642006a6bc?w=800&h=800&fit=crop&auto=format",
//     alt: "Puppet performance",
//     caption:
//       "Traditional puppet shows at our Heritage Cultural Festival — keeping India's folk art alive through brand-sponsored community events. 🎭 #FolkArt #Heritage",
//     likes: 3412,
//     comments: 167,
//     time: "3 days ago",
//     location: "Rajasthan, India",
//     isVideo: true,
//   },
//   {
//     id: "fp2",
//     url: "https://images.unsplash.com/photo-1772947314926-a3bcffd09b1b?w=800&h=800&fit=crop&auto=format",
//     alt: "Fire ritual performance",
//     caption:
//       "Sacred fire rituals at our Makar Sankranti Festival activation — spirituality meets modern brand storytelling. 🔥 #MakarSankranti #RitualsAndBrands",
//     likes: 4891,
//     comments: 234,
//     time: "1 week ago",
//     location: "Varanasi, Uttar Pradesh",
//     isVideo: true,
//   },
// ];

// // interface FestivalPageProps {
// //   navigate: NavigateFn;
// //   currentPage: Page;
// // }

// export function FestivalPage({ navigate, currentPage }) {
//   return (
//     <div className="min-h-screen bg-background">
//       {/* Mobile header */}
//       <div
//         className="lg:hidden sticky top-0 z-30 bg-card/96 backdrop-blur-sm border-b border-border px-5 h-14 flex items-center"
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

//       {/* Stories */}
//       <StoriesBar stories={STORIES} pageLabel="Festival Reels" />

//       {/* Section title */}
//       <div className="max-w-[500px] mx-auto px-5 pt-5 pb-3">
//         <h2
//           style={{ fontFamily: "'Cinzel', serif" }}
//           className="text-xl font-bold text-foreground"
//         >
//           <span className="text-primary">Signature</span> Activations
//         </h2>
//         <p className="text-xs text-muted-foreground mt-1">
//           Celebrating India's festivals through brand storytelling
//         </p>
//       </div>

//       {/* Festival cards — full-width post style */}
//       <div className="max-w-[500px] mx-auto">
//         {FESTIVALS.map((f, i) => (
//           <motion.div
//             key={f.id}
//             className="border-b border-border bg-card"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-40px" }}
//             transition={{ duration: 0.5, delay: i * 0.08 }}
//           >
//             {/* Post header */}
//             <div className="flex items-center gap-3 px-4 py-3">
//               <div className="w-9 h-9 rounded-full border border-primary/50 bg-gradient-to-br from-amber-700 to-primary flex items-center justify-center flex-shrink-0">
//                 <span
//                   style={{ fontFamily: "'Cinzel', serif" }}
//                   className="text-xs font-bold text-white"
//                 >
//                   AB
//                 </span>
//               </div>
//               <div className="flex-1 min-w-0">
//                 <div
//                   style={{ fontFamily: "'Cinzel', serif" }}
//                   className="text-sm font-semibold text-foreground"
//                 >
//                   abybaby_group
//                 </div>
//                 <div className="text-[11px] text-muted-foreground truncate">
//                   {f.location}
//                 </div>
//               </div>
//               {/* Date badge */}
//               <div className="bg-primary px-3 py-1.5 text-center rounded-lg flex-shrink-0">
//                 <div
//                   style={{ fontFamily: "'Cinzel', serif" }}
//                   className="text-xs font-bold text-primary-foreground leading-tight"
//                 >
//                   {f.date}
//                 </div>
//                 <div className="text-primary-foreground/75 text-[10px]">
//                   {f.year}
//                 </div>
//               </div>
//             </div>

//             {/* Image */}
//             <div className="relative aspect-video bg-muted overflow-hidden">
//               <img
//                 src={f.img}
//                 alt={f.title}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//               {f.isVideo && (
//                 <div className="absolute inset-0 flex items-center justify-center bg-black/20">
//                   <div className="w-14 h-14 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center">
//                     <Play
//                       size={24}
//                       className="text-white ml-0.5"
//                       fill="white"
//                     />
//                   </div>
//                 </div>
//               )}
//               <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
//               <div className="absolute bottom-3 left-4">
//                 <span className="text-primary text-xs font-semibold tracking-widest">
//                   {f.tag}
//                 </span>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="px-4 py-4">
//               <h3
//                 style={{ fontFamily: "'Cinzel', serif" }}
//                 className="text-base font-bold text-foreground mb-0.5"
//               >
//                 {f.title}
//               </h3>
//               <p className="text-primary text-xs font-medium mb-2">
//                 {f.subtitle}
//               </p>
//               <p className="text-sm text-foreground/60 leading-relaxed mb-3">
//                 {f.desc}
//               </p>
//               <button className="flex items-center gap-1.5 text-primary text-xs font-semibold tracking-widest uppercase hover:gap-3 transition-all duration-200">
//                 Read More <ArrowRight size={11} />
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Additional posts */}
//       <div className="max-w-[500px] mx-auto border-t border-border mt-2">
//         <div className="px-5 py-3">
//           <h3
//             style={{ fontFamily: "'Cinzel', serif" }}
//             className="text-sm font-bold text-foreground"
//           >
//             More Festival Reels
//           </h3>
//         </div>
//         {POSTS.map((post) => (
//           <PostCard key={post.id} post={post} />
//         ))}
//       </div>

//       {/* <div className="max-w-[500px] mx-auto">
//         <QuickNav currentPage={currentPage} navigate={navigate} />
//       </div> */}
//     </div>
//   );
// }
import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
// import { StoriesBar } from "../StoriesBar";
import { PostCard } from "../PostCard";

const STORIES = [
  {
    id: "f1",
    name: "Diwali Reel",
    thumb:
      "https://images.unsplash.com/photo-1580558036732-53b6b3574160?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "f2",
    name: "Decor Reel",
    thumb:
      "https://images.unsplash.com/photo-1600400411727-6f0fd6e10933?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "f3",
    name: "Dance Reel",
    thumb:
      "https://images.unsplash.com/photo-1585371843734-1800eada9acc?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "f4",
    name: "Crowd Reel",
    thumb:
      "https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "f5",
    name: "Fire Reel",
    thumb:
      "https://images.unsplash.com/photo-1772947314926-a3bcffd09b1b?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "f6",
    name: "Divine",
    thumb:
      "https://images.unsplash.com/photo-1573964093819-aaa848e41d4a?w=200&h=200&fit=crop&auto=format",
  },
];

const FESTIVALS = [
  {
    id: "fv1",
    title: "Independence Day Special",
    subtitle: "77 Years of Pride",
    date: "15 Aug",
    year: "2024",
    location: "Pan-India — 50+ Cities",
    desc: "Nationwide BTL activations celebrating 77 years of independence. Patriotic performances, brand activations, and community engagement across every corner of India.",
    tag: "#IndependenceDay",
    img: "https://images.unsplash.com/photo-1600400411727-6f0fd6e10933?w=800&h=500&fit=crop&auto=format",
    isVideo: true,
  },
  {
    id: "fv2",
    title: "Diwali Grand Festival",
    subtitle: "Festival of Lights",
    date: "10 Nov",
    year: "2024",
    location: "Mumbai · Delhi · Jaipur",
    desc: "Illuminating brand experiences through immersive light installations, cultural performances, and large-scale consumer activations across 3 metro cities.",
    tag: "#DiwaliActivation",
    img: "https://images.unsplash.com/photo-1580558036732-53b6b3574160?w=800&h=500&fit=crop&auto=format",
    isVideo: true,
  },
  {
    id: "fv3",
    title: "Republic Day Roadshow",
    subtitle: "Patriotism in Motion",
    date: "26 Jan",
    year: "2025",
    location: "Tier-1 & Tier-2 Cities",
    desc: "High-energy patriotic brand campaigns and live performances across tier-1 and tier-2 cities with a digital-first amplification strategy.",
    tag: "#RepublicDay",
    img: "https://images.unsplash.com/photo-1585371843734-1800eada9acc?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: "fv4",
    title: "Navratri Cultural Fair",
    subtitle: "9 Nights of Celebration",
    date: "3 Oct",
    year: "2024",
    location: "Ahmedabad · Vadodara",
    desc: "Massive Navratri celebrations with traditional garba performances, local artisan showcases, and brand-sponsored live entertainment for 9 consecutive nights.",
    tag: "#Navratri2024",
    img: "https://images.unsplash.com/photo-1573964093819-aaa848e41d4a?w=800&h=500&fit=crop&auto=format",
    isVideo: true,
  },
];

const POSTS = [
  {
    id: "fp1",
    url: "https://images.unsplash.com/photo-1769718460805-97642006a6bc?w=800&h=800&fit=crop&auto=format",
    alt: "Puppet performance",
    caption:
      "Traditional puppet shows at our Heritage Cultural Festival — keeping India's folk art alive through brand-sponsored community events. 🎭 #FolkArt #Heritage",
    likes: 3412,
    comments: 167,
    time: "3 days ago",
    location: "Rajasthan, India",
    isVideo: true,
  },
  {
    id: "fp2",
    url: "https://images.unsplash.com/photo-1772947314926-a3bcffd09b1b?w=800&h=800&fit=crop&auto=format",
    alt: "Fire ritual performance",
    caption:
      "Sacred fire rituals at our Makar Sankranti Festival activation — spirituality meets modern brand storytelling. 🔥 #MakarSankranti #RitualsAndBrands",
    likes: 4891,
    comments: 234,
    time: "1 week ago",
    location: "Varanasi, Uttar Pradesh",
    isVideo: true,
  },
];

/**
 * ROTATE ANIMATION — how it works:
 *
 * Each festival card enters with a combined:
 *   • rotateX  : flips in from a tilted-back plane (perspective-3D card flip)
 *   • rotateZ  : slight clockwise/counter tilt that straightens on arrival
 *   • scale    : grows from 92% → 100% giving a "popping forward" feel
 *   • opacity  : fades in during the first third of the animation
 *   • y        : rises 30px upward to its resting position
 *
 * Cards alternate tilt direction (odd → tilts from +6°, even → -6°) so the
 * feed feels hand-dealt like playing cards being placed on a table.
 *
 * `perspective` on the container is required for rotateX to look 3-D.
 * `transformOrigin: "bottom center"` anchors the flip at the card's base.
 *
 * Stagger: 120ms between each card so the cascade is clearly visible.
 */

// Variants defined outside component — stable reference, no re-creation
const cardVariants = {
  hidden: (isOdd) => ({
    opacity: 0,
    y: 40,
    scale: 0.92,
    rotateX: 25, // tilts card away from viewer (3-D back-flip)
    rotateZ: isOdd ? 5 : -5, // slight lateral tilt, alternating per card
  }),
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    rotateZ: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1], // springy cubic-bezier
    },
  },
};

function FestivalCard({ festival, index }) {
  const isOdd = index % 2 !== 0;

  return (
    // perspective wrapper — required for rotateX to render in 3-D
    <div style={{ perspective: "900px" }}>
      <motion.div
        className="border-b border-border bg-card"
        custom={isOdd} // passes isOdd to variants as the `custom` arg
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        style={{ transformOrigin: "bottom center" }}
      >
        {/* ── Post header ── */}
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
              className="text-sm font-semibold text-foreground"
            >
              abybaby_group
            </div>
            <div className="text-[11px] text-muted-foreground truncate">
              {festival.location}
            </div>
          </div>
          {/* Date badge — animates with slight extra delay for a layered feel */}
          <motion.div
            className="bg-primary px-3 py-1.5 text-center rounded-lg flex-shrink-0"
            initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.3 + index * 0.12,
              ease: "backOut",
            }}
          >
            <div
              style={{ fontFamily: "'Cinzel', serif" }}
              className="text-xs font-bold text-primary-foreground leading-tight"
            >
              {festival.date}
            </div>
            <div className="text-primary-foreground/75 text-[10px]">
              {festival.year}
            </div>
          </motion.div>
        </div>

        {/* ── Image ── */}
        <div className="relative aspect-video bg-muted overflow-hidden">
          {/* Image itself wipes in left→right after card flips into place */}
          <motion.img
            src={festival.img}
            alt={festival.title}
            className="w-full h-full object-cover"
            loading="lazy"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.2 + index * 0.12,
              ease: [0.4, 0, 0.2, 1],
            }}
          />

          {festival.isVideo && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black/20"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.5 + index * 0.12,
                ease: "backOut",
              }}
            >
              <div className="w-14 h-14 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center">
                <Play size={24} className="text-white ml-0.5" fill="white" />
              </div>
            </motion.div>
          )}

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-3 left-4">
            <span className="text-primary text-xs font-semibold tracking-widest">
              {festival.tag}
            </span>
          </div>
        </div>

        {/* ── Content — slides up slightly after card lands ── */}
        <motion.div
          className="px-4 py-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.35 + index * 0.12,
            ease: "easeOut",
          }}
        >
          <h3
            style={{ fontFamily: "'Cinzel', serif" }}
            className="text-base font-bold text-foreground mb-0.5"
          >
            {festival.title}
          </h3>
          <p className="text-primary text-xs font-medium mb-2">
            {festival.subtitle}
          </p>
          <p className="text-sm text-foreground/60 leading-relaxed mb-3">
            {festival.desc}
          </p>
          <button className="flex items-center gap-1.5 text-primary text-xs font-semibold tracking-widest uppercase hover:gap-3 transition-all duration-200">
            Read More <ArrowRight size={11} />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function FestivalPage({ navigate, currentPage, sidebarWidth = 240 }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile header */}
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

      {/* <StoriesBar
        stories={STORIES}
        pageLabel="Festival Reels"
        sidebarWidth={sidebarWidth}
      /> */}

      <div className="max-w-[500px]  px-5 pt-5 pb-3">
        <h2
          style={{ fontFamily: "'Cinzel', serif" }}
          className="text-xl font-bold text-foreground"
        >
          <span className="text-primary">Signature</span> Activations
        </h2>
        <p className="text-xs text-muted-foreground mt-1">
          Celebrating India's festivals through brand storytelling
        </p>
      </div>

      {/* ── Festival cards with rotate animation ── */}
      <div className="max-w-[500px]  pt-8">
        {FESTIVALS.map((f, i) => (
          <FestivalCard key={f.id} festival={f} index={i} />
        ))}
      </div>

      {/* Additional posts */}
      <div className="max-w-[500px] border-t border-border mt-2">
        <div className="px-5 py-3">
          <h3
            style={{ fontFamily: "'Cinzel', serif" }}
            className="text-sm font-bold text-foreground"
          >
            More Festival Reels
          </h3>
        </div>
        {POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
