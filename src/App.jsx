import { useState } from "react";
import { motion } from "motion/react";
import { DesktopSidebar } from "./app/components/DesktopSidebar";
import { FloatingNav } from "./app/components/FloatingNav";
import { HomePage } from "./app/components/pages/HomePage";
import { AboutPage } from "./app/components/pages/AboutPage";
import { BlogPage } from "./app/components/pages/BlogPage";
import { AchievementsModal } from "./app/components/ui/AchievementsModal";
import { ContactPage } from "./app/components/pages/ContactPage";
import { ClientsBar } from "./app/components/StoriesBar";
import { PrivacyPage } from "./app/components/pages/PrivacyPage";
import { TermsPage } from "./app/components/pages/TermsPage";
import { EventsSection } from "./app/components/pages/EventsPage";
import { MessagePage } from "./app/components/pages/MessagePage";
import { RightPanel } from "./app/components/pages/RightPanel";
import { MobileTopBar } from "./app/components/MobileTopBar";
import { ExhibitionsSection } from "./app/components/pages/ExhibitionPage";
import { CompanyProfileSection } from "./app/components/pages/ProfilePage";
import { DigitalSection } from "./app/components/pages/Digitalpage";
const PAGES = {
  home: HomePage,
  about: AboutPage,
  blog: BlogPage,
  contact: ContactPage,
  privacy: PrivacyPage,
  terms: TermsPage,
  events: EventsSection,
  message: MessagePage,
  exhibition: ExhibitionsSection,
  profile: CompanyProfileSection,
  digital:DigitalSection
};

const RIGHT_PANEL_WIDTH = 300; // px — must match RightPanel's fixed width

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
  };

  const PageComponent = PAGES[currentPage];
  const sidebarWidth = sidebarCollapsed ? 72 : 240;

  return (
    <div className="bg-background text-foreground min-h-screen">
      <style>{`
        body { font-family: 'DM Sans', sans-serif; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #080808; }
        ::-webkit-scrollbar-thumb { background: #C9963A; border-radius: 0; }
        * { scrollbar-width: thin; scrollbar-color: #C9963A #080808; }
      `}</style>

      {/* ── Achievement modal ── */}
      {/* <AchievementsModal onExplore={() => navigate("events")} /> */}

      {/* ── Fixed LEFT sidebar — desktop only ── */}
      <DesktopSidebar
        currentPage={currentPage}
        navigate={navigate}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      {/* ── Fixed STORIES/CLIENTS BAR
            left  = sidebar right edge
            right = right panel left edge
            Always rendered — stops before the right panel on xl screens ── */}
      <ClientsBar sidebarWidth={72} rightOffset={RIGHT_PANEL_WIDTH} />

      {/* ── Fixed RIGHT PANEL — always visible on xl+, full height ── */}
      <aside
        className="hidden lg:flex flex-col fixed top-0 right-0 h-full z-40  bg-background"
        style={{ width: `${RIGHT_PANEL_WIDTH}px` }}
      >
        <div className="flex-1 overflow-y-auto scrollbar-hide py-4 px-3 flex flex-col gap-4">
          <RightPanel navigate={navigate} />
        </div>
      </aside>
      <MobileTopBar />

      {/* ────────────────────────────────────────────────────
          DESKTOP MAIN
          — offset left  : sidebar width
          — offset right : right panel width (always)
          — offset top   : clients bar height (88px)
      ──────────────────────────────────────────────────── */}
      <main
        className="min-h-screen hidden lg:block"
        style={{
          marginLeft: `${sidebarWidth}px`,
          marginRight: `${RIGHT_PANEL_WIDTH}px`,
          transition:
            "margin-left 300ms cubic-bezier(0.4,0,0.2,1), margin-right 300ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Spacer so content starts below the fixed ClientsBar */}
        <div className="h-[88px]" />

        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <PageComponent
            navigate={navigate}
            currentPage={currentPage}
            sidebarWidth={sidebarWidth}
          />
        </motion.div>
      </main>

      {/* ────────────────────────────────────────────────────
          MOBILE MAIN — no offsets, no right panel
      ──────────────────────────────────────────────────── */}
      <main className="min-h-screen lg:hidden">
        <motion.div
          key={currentPage + "-mobile"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <PageComponent
            navigate={navigate}
            currentPage={currentPage}
            sidebarWidth={0}
          />
        </motion.div>
      </main>

      {/* ── Floating nav — mobile only ── */}
      <FloatingNav currentPage={currentPage} navigate={navigate} />
    </div>
  );
}
// import { useState } from "react";
// import { motion } from "motion/react";
// import { DesktopSidebar } from "./app/components/DesktopSidebar";
// import { FloatingNav } from "./app/components/FloatingNav";
// import { HomePage } from "./app/components/pages/HomePage";
// import { AboutPage } from "./app/components/pages/AboutPage";
// import { GalleryPage } from "./app/components/pages/GalleryPage";
// import { FestivalPage } from "./app/components/pages/FestivalPage";
// import { BlogPage } from "./app/components/pages/BlogPage";

// const PAGES = {
//   home: HomePage,
//   about: AboutPage,
//   gallery: GalleryPage,
//   festival: FestivalPage,
//   blog: BlogPage,
// };

// export default function App() {
//   const [currentPage, setCurrentPage] = useState("home");
//   const navigate = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0 });
//   };
//   const PageComponent = PAGES[currentPage];
//   return (
//     <div className="bg-background text-foreground min-h-screen">
//       <style>{`
//         body { font-family: 'DM Sans', sans-serif; }
//         .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
//         .scrollbar-hide::-webkit-scrollbar { display: none; }
//         ::-webkit-scrollbar { width: 3px; }
//         ::-webkit-scrollbar-track { background: #080808; }
//         ::-webkit-scrollbar-thumb { background: #a3e635; border-radius: 0; }
//         * { scrollbar-width: thin; scrollbar-color: #a3e635 #080808; }
//       `}</style>
//       {/* Fixed sidebar — desktop/tablet */}
//       <DesktopSidebar currentPage={currentPage} navigate={navigate} />
//       {/* Main content area — offset for sidebar on lg+ */}
//       <main className="lg:ml-[240px] min-h-screen">
//         <motion.div
//           key={currentPage}
//           initial={{ opacity: 0, y: 8 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
//         >
//           <PageComponent navigate={navigate} currentPage={currentPage} />
//         </motion.div>
//       </main>
//       {/* Floating hamburger nav — mobile only */}
//       <FloatingNav currentPage={currentPage} navigate={navigate} />
//     </div>
//   );
// }
