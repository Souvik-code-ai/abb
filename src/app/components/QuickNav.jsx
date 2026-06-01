// import { motion } from "motion/react";
// import { Home, Info, Image, Star, BookOpen } from "lucide-react";
// import type { Page, NavigateFn } from "../types";

// const ALL_PAGES = [
//   { id: "home" as Page, label: "Home", Icon: Home },
//   { id: "about" as Page, label: "About", Icon: Info },
//   { id: "gallery" as Page, label: "Gallery", Icon: Image },
//   { id: "festival" as Page, label: "Festival", Icon: Star },
//   { id: "blog" as Page, label: "Blog", Icon: BookOpen },
// ];

// interface QuickNavProps {
//   currentPage: Page;
//   navigate: NavigateFn;
// }

// export function QuickNav({ currentPage, navigate }: QuickNavProps) {
//   const others = ALL_PAGES.filter((p) => p.id !== currentPage);

//   return (
//     <div className="border-t border-border bg-card px-4 py-8">
//       <p
//         style={{ fontFamily: "'Cinzel', serif" }}
//         className="text-[10px] text-muted-foreground tracking-[0.32em] uppercase text-center mb-5"
//       >
//         Explore More
//       </p>
//       <div className="flex gap-2.5 justify-center flex-wrap">
//         {others.map(({ id, label, Icon }, i) => (
//           <motion.button
//             key={id}
//             onClick={() => navigate(id)}
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.3, delay: i * 0.07 }}
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border text-foreground/55 hover:border-primary hover:text-primary transition-all duration-200 text-sm"
//           >
//             <Icon size={14} />
//             <span style={{ fontFamily: "'Cinzel', serif" }}>{label}</span>
//           </motion.button>
//         ))}
//       </div>
//     </div>
//   );
// }
import { motion } from "motion/react";
import { Home, Info, Image, Star, BookOpen } from "lucide-react";

const ALL_PAGES = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: Info },
  { id: "gallery", label: "Gallery", Icon: Image },
  { id: "festival", label: "Festival", Icon: Star },
  { id: "blog", label: "Blog", Icon: BookOpen },
];

export function QuickNav({ currentPage, navigate }) {
  const others = ALL_PAGES.filter((p) => p.id !== currentPage);

  return (
    <div className="border-t border-border bg-card px-4 py-8 cursor-pointer">
      {/* <p
        style={{ fontFamily: "'Cinzel', serif" }}
        className="text-[10px] text-muted-foreground tracking-[0.32em] uppercase text-center mb-5"
      >
        Explore More
      </p> */}

      {/* <div className="flex gap-2.5 justify-center flex-wrap">
        {others.map(({ id, label, Icon }, i) => (
          <motion.button
            key={id}
            onClick={() => navigate(id)}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.07 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border text-foreground/55 hover:border-primary hover:text-primary transition-all duration-200 text-sm"
          >
            <Icon size={14} />

            <span style={{ fontFamily: "'Cinzel', serif" }}>{label}</span>
          </motion.button>
        ))}
      </div> */}
    </div>
  );
}
