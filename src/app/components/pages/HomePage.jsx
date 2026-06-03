// import { StoriesBar } from "../StoriesBar";
// import { PostCard } from "../PostCard";
// import { QuickNav } from "../QuickNav";
// // import type { Page, NavigateFn, Story, Post } from "../../types";

// const STORIES = [
//   {
//     id: "h1",
//     name: "Live Stage",
//     thumb:
//       "https://images.unsplash.com/photo-1562649268-bd8fa4cf7ad7?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "h2",
//     name: "Diwali Lights",
//     thumb:
//       "https://images.unsplash.com/photo-1580558036732-53b6b3574160?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "h3",
//     name: "Dance Reel",
//     thumb:
//       "https://images.unsplash.com/photo-1585371843734-1800eada9acc?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "h4",
//     name: "Event Decor",
//     thumb:
//       "https://images.unsplash.com/photo-1600400411727-6f0fd6e10933?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "h5",
//     name: "Night Vibes",
//     thumb:
//       "https://images.unsplash.com/photo-1757598078141-991920b9339a?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "h6",
//     name: "Crowd Energy",
//     thumb:
//       "https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "h7",
//     name: "Live Concert",
//     thumb:
//       "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&h=200&fit=crop&auto=format",
//   },
//   {
//     id: "h8",
//     name: "Summit 2024",
//     thumb:
//       "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=200&fit=crop&auto=format",
//   },
// ];

// const POSTS = [
//   {
//     id: "hp1",
//     url: "https://images.unsplash.com/photo-1562649268-bd8fa4cf7ad7?w=800&h=800&fit=crop&auto=format",
//     alt: "National Product Launch stage",
//     caption:
//       "An unforgettable evening at the National Product Launch 2024. Thousands of attendees, one powerful brand moment. 🎯✨ #AbyBabyGroup #EventManagement #ProductLaunch",
//     likes: 4823,
//     comments: 241,
//     time: "2 hours ago",
//     location: "Mumbai, Maharashtra",
//   },
//   {
//     id: "hp2",
//     url: "https://images.unsplash.com/photo-1580558036732-53b6b3574160?w=800&h=800&fit=crop&auto=format",
//     alt: "Diwali festival lights",
//     caption:
//       "The city came alive with our Diwali Grand Festival activation! 50+ cities, one brand story. 🪔 #DiwaliActivation #BTLMarketing",
//     likes: 6201,
//     comments: 389,
//     time: "1 day ago",
//     location: "Delhi NCR",
//     isVideo: true,
//   },
//   {
//     id: "hp3",
//     url: "https://images.unsplash.com/photo-1585371843734-1800eada9acc?w=800&h=1000&fit=crop&auto=format",
//     alt: "Cultural dance performance",
//     caption:
//       "Celebrating India's rich culture through mesmerizing performances. 💃🎶 #CulturalFest #IndiaEvents #AbyBaby",
//     likes: 3947,
//     comments: 178,
//     time: "3 days ago",
//     location: "Mumbai, Maharashtra",
//     aspectRatio: "4/5",
//   },
//   {
//     id: "hp4",
//     url: "https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=800&h=800&fit=crop&auto=format",
//     alt: "Massive crowd at live event",
//     caption:
//       "10,000+ people at our Pan-India roadshow — this energy is why we do what we do. 🔥 #BrandActivation #LiveEvents",
//     likes: 5432,
//     comments: 302,
//     time: "5 days ago",
//     location: "Bangalore, Karnataka",
//     isVideo: true,
//   },
//   {
//     id: "hp5",
//     url: "https://images.unsplash.com/photo-1600400411727-6f0fd6e10933?w=800&h=800&fit=crop&auto=format",
//     alt: "Luxury event decor setup",
//     caption:
//       "Every detail matters. Our decor team creates environments that tell your brand's story. 🎊 #EventDecor #LuxuryEvents",
//     likes: 2891,
//     comments: 156,
//     time: "1 week ago",
//     location: "Hyderabad, Telangana",
//   },
//   {
//     id: "hp6",
//     url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop&auto=format",
//     alt: "National business summit",
//     caption:
//       "Proud to have managed the National Business Summit 2024 — 500 leaders, 2 days, infinite possibilities. 🏆 #Summit2024 #Corporate",
//     likes: 3201,
//     comments: 198,
//     time: "2 weeks ago",
//     location: "Chennai, Tamil Nadu",
//   },
// ];

// // interface HomePageProps {
// //   navigate: NavigateFn;
// //   currentPage: Page;
// // }

// export function HomePage({ navigate, currentPage }) {
//   return (
//     <div className="min-h-screen bg-background">
//       {/* Mobile top bar */}
//       <div className="lg:hidden sticky top-0 z-30 bg-card/96 backdrop-blur-sm border-b border-border px-5 h-14 flex items-center justify-between">
//         <div
//           style={{ fontFamily: "'Cinzel', serif" }}
//           className="text-lg font-bold text-primary"
//         >
//           AbyBaby
//           <span className="text-foreground/65 ml-1 text-base">Group</span>
//         </div>
//         <div className="flex items-center gap-1">
//           {[...Array(3)].map((_, i) => (
//             <div key={i} className="w-1 h-1 rounded-full bg-foreground/40" />
//           ))}
//         </div>
//       </div>

//       {/* Stories bar */}
//       <StoriesBar stories={STORIES} pageLabel="AbyBaby Events Reel" />

//       {/* Feed (centered Instagram-style) */}
//       <div className="max-w-[500px] mx-auto lg:pt-2">
//         {POSTS.map((post) => (
//           <PostCard key={post.id} post={post} />
//         ))}
//       </div>

//       {/* Quick navigate to other pages */}
//       {/* <div className="max-w-[500px] mx-auto">
//         <QuickNav currentPage={currentPage} navigate={navigate} />
//       </div> */}
//     </div>
//   );
// }
import { useEffect, useRef, useState } from "react";
// import { ClientsBar } from "../StoriesBar";
import { PostCard } from "../PostCard";
import { QuickNav } from "../QuickNav";
import { ClientsBar } from "../StoriesBar";
import { NextSection } from "./NextSection";
const STORIES = [
  {
    id: "h1",
    name: "Live Stage",
    thumb:
      "https://images.unsplash.com/photo-1562649268-bd8fa4cf7ad7?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "h2",
    name: "Diwali Lights",
    thumb:
      "https://images.unsplash.com/photo-1580558036732-53b6b3574160?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "h3",
    name: "Dance Reel",
    thumb:
      "https://images.unsplash.com/photo-1585371843734-1800eada9acc?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "h4",
    name: "Event Decor",
    thumb:
      "https://images.unsplash.com/photo-1600400411727-6f0fd6e10933?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "h5",
    name: "Night Vibes",
    thumb:
      "https://images.unsplash.com/photo-1757598078141-991920b9339a?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "h6",
    name: "Crowd Energy",
    thumb:
      "https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "h7",
    name: "Live Concert",
    thumb:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&h=200&fit=crop&auto=format",
  },
  {
    id: "h8",
    name: "Summit 2024",
    thumb:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=200&fit=crop&auto=format",
  },
];

const POSTS = [
  {
    id: "hp1",
    url: "https://images.unsplash.com/photo-1562649268-bd8fa4cf7ad7?w=800&h=800&fit=crop&auto=format",
    alt: "National Product Launch stage",
    caption:
      "An unforgettable evening at the National Product Launch 2024. Thousands of attendees, one powerful brand moment. 🎯✨ #AbyBabyGroup #EventManagement #ProductLaunch",
    likes: 4823,
    comments: 241,
    time: "2 hours ago",
    location: "Mumbai, Maharashtra",
  },
  {
    id: "hp2",
    url: "https://images.unsplash.com/photo-1580558036732-53b6b3574160?w=800&h=800&fit=crop&auto=format",
    alt: "Diwali festival lights",
    caption:
      "The city came alive with our Diwali Grand Festival activation! 50+ cities, one brand story. 🪔 #DiwaliActivation #BTLMarketing",
    likes: 6201,
    comments: 389,
    time: "1 day ago",
    location: "Delhi NCR",
    isVideo: true,
  },
  {
    id: "hp3",
    url: "https://images.unsplash.com/photo-1585371843734-1800eada9acc?w=800&h=1000&fit=crop&auto=format",
    alt: "Cultural dance performance",
    caption:
      "Celebrating India's rich culture through mesmerizing performances. 💃🎶 #CulturalFest #IndiaEvents #AbyBaby",
    likes: 3947,
    comments: 178,
    time: "3 days ago",
    location: "Mumbai, Maharashtra",
    aspectRatio: "4/5",
  },
  {
    id: "hp4",
    url: "https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=800&h=800&fit=crop&auto=format",
    alt: "Massive crowd at live event",
    caption:
      "10,000+ people at our Pan-India roadshow — this energy is why we do what we do. 🔥 #BrandActivation #LiveEvents",
    likes: 5432,
    comments: 302,
    time: "5 days ago",
    location: "Bangalore, Karnataka",
    isVideo: true,
  },
  {
    id: "hp5",
    url: "https://images.unsplash.com/photo-1600400411727-6f0fd6e10933?w=800&h=800&fit=crop&auto=format",
    alt: "Luxury event decor setup",
    caption:
      "Every detail matters. Our decor team creates environments that tell your brand's story. 🎊 #EventDecor #LuxuryEvents",
    likes: 2891,
    comments: 156,
    time: "1 week ago",
    location: "Hyderabad, Telangana",
  },
  {
    id: "hp6",
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop&auto=format",
    alt: "National business summit",
    caption:
      "Proud to have managed the National Business Summit 2024 — 500 leaders, 2 days, infinite possibilities. 🏆 #Summit2024 #Corporate",
    likes: 3201,
    comments: 198,
    time: "2 weeks ago",
    location: "Chennai, Tamil Nadu",
  },
];

/**
 * AnimatedPostCard
 * Wraps PostCard in a container that slides in from left (even index)
 * or right (odd index) using IntersectionObserver + CSS transitions.
 *
 * Props:
 *  - post        : post data object
 *  - index       : position in the feed (0-based) — drives stagger delay & direction
 *  - initialDelay: extra ms added to the first few cards so they don't all fire at once on mount
 */
function AnimatedPostCard({ post, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Alternating direction: even cards slide from left, odd from right
  const fromLeft = index % 2 === 0;

  // Stagger: each card waits a little longer than the previous one,
  // but cap it so cards deep in the feed still feel snappy when scrolled to.
  const staggerDelay = Math.min(index * 80, 300); // ms

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once — no re-trigger on scroll back
        }
      },
      {
        threshold: 0.08, // fire when just 8 % of the card is in view
        rootMargin: "0px 0px -40px 0px", // trigger slightly before the very bottom edge
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        // Starting state (hidden, translated)
        transform: visible
          ? "translateX(0)"
          : `translateX(${fromLeft ? "-60px" : "60px"})`,
        opacity: visible ? 1 : 0,
        // Smooth cubic-bezier for a natural, springy feel
        transition: visible
          ? `transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${staggerDelay}ms,
             opacity 0.45s ease ${staggerDelay}ms`
          : "none",
        willChange: "transform, opacity",
      }}
    >
      <PostCard post={post} />
    </div>
  );
}

export function HomePage({ navigate, currentPage, sidebarWidth = 240 }) {
  return (
    <div className="min-h-screen bg-background lg:pt-10 pt-45 ">
      {/* Mobile top bar */}
      {/* <div className="lg:hidden sticky top-0 z-30 bg-card/96 backdrop-blur-sm  px-5 h-14 flex items-center justify-between">
        <div
          style={{ fontFamily: "'Cinzel', serif" }}
          className="text-lg font-bold text-primary"
        >
          AbyBaby
          <span className="text-foreground/65 ml-1 text-base">Group</span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-foreground/40" />
          ))}
        </div>
      </div> */}

      {/* Stories bar */}
      {/* <StoriesBar
        stories={STORIES}
        pageLabel="AbyBaby Events Reel"
        sidebarWidth={sidebarWidth} // ← pass it down
      /> */}

      {/* Feed — each PostCard slides in from alternating sides */}
      <div className="max-w-[500px]   overflow-x-hidden mx-auto">
        {POSTS.map((post, index) => (
          <AnimatedPostCard key={post.id} post={post} index={index} />
        ))}
      </div>
      <NextSection
        title="Activations"
        description="Explore brand activations, mall promotions, roadshows and experiential marketing campaigns."
        onClick={() => navigate("events")}
      />
    </div>
  );
}
