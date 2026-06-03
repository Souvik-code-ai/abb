import { motion, AnimatePresence } from "motion/react";
import { Grid3x2 as logo1 } from "lucide-react";
import image1 from "../../../assets/exhibition/exhibition/f1.jpg";
import image3 from "../../../assets/exhibition/exhibition/f3.jpg";
import image2 from "../../../assets/exhibition/exhibition/f4.jpg";
import image5 from "../../../assets/exhibition/exhibition/f5.jpg";
import image7 from "../../../assets/exhibition/exhibition/f7.jpg";
import image6 from "../../../assets/exhibition/exhibition/f6.jpg";
import { useState } from "react";
import { NextSection } from "../pages/NextSection.jsx";
import { useNavigate } from "react-router-dom";
export function ExhibitionsSection({ navigate }) {
  const [selectedExhibition, setSelectedExhibition] = useState(null);
  const EXHIBITION_STATS = [
    {
      title: "Exhibitions Completed",
      value: "150+",
      icon: "🏆",
    },
    {
      title: "Booth Area Covered",
      value: "75,000+ sq.ft",
      icon: "📐",
    },
    {
      title: "Design Awards Won",
      value: "24",
      icon: "🥇",
    },
  ];

  const EXHIBITIONS = [
    {
      id: 1,
      name: "Auto Expo 2026",
      boothSize: "2,500 sq.ft",
      attendance: "45,000+",
      features: [
        "Interactive EV Zone",
        "Immersive LED Wall",
        "Product Demonstration Area",
        "VIP Lounge",
      ],
      image: image1,
      modalImage: image7,
    },
    {
      id: 2,
      name: "Tech Innovation Summit",
      boothSize: "1,800 sq.ft",
      attendance: "28,000+",
      features: [
        "AR Product Experience",
        "Live Presentation Stage",
        "Meeting Pods",
        "Digital Registration Counter",
      ],
      image: image2,
      modalImage: image5,
    },
    {
      id: 3,
      name: "Industrial Trade Fair",
      boothSize: "3,200 sq.ft",
      attendance: "60,000+",
      features: [
        "Brand Showcase Zone",
        "Networking Lounge",
        "Digital Product Displays",
        "Live Demo Area",
      ],
      image: image6,
      modalImage: image1,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-background px-6 lg:py-10  pt-[180px]">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold font-sans">Exhibitions</h1>

        <p className="text-muted-foreground mt-2">
          Showcasing our exhibition excellence and achievements
        </p>
      </div>

      {/* Exhibition Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {EXHIBITIONS.map((exhibition) => (
          <motion.div
            key={exhibition.id}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedExhibition(exhibition)}
            className="relative overflow-hidden rounded-2xl cursor-pointer group h-[350px]"
          >
            <img
              src={exhibition.image}
              alt={exhibition.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-2xl font-bold line-clamp-2 font-sans">
                {exhibition.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedExhibition && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExhibition(null)}
          >
            <motion.div
              className="relative max-w-6xl w-full h-[85vh] overflow-hidden rounded-3xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedExhibition.modalImage}
                alt={selectedExhibition.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Floating Title */}
              <div className="absolute top-8 left-8">
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
                  <h2 className="text-white text-3xl font-bold font-sans">
                    {selectedExhibition.name}
                  </h2>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute top-8 right-8 flex gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3">
                  <p className="text-white/70 text-xs">Booth Size</p>
                  <p className="text-white font-semibold">
                    {selectedExhibition.boothSize}
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3">
                  <p className="text-white/70 text-xs">Attendance</p>
                  <p className="text-white font-semibold">
                    {selectedExhibition.attendance}
                  </p>
                </div>
              </div>

              {/* Floating Features */}
              <div className="absolute bottom-8 left-8 max-w-md">
                <div className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-4">
                    Exhibition Highlights
                  </h3>

                  <div className="space-y-3">
                    {selectedExhibition.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-white/90"
                      >
                        <span className="text-lime-400">●</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedExhibition(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {EXHIBITION_STATS.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="text-3xl mb-3 ">
                {typeof Icon === "string" ? Icon : <Icon size={28} />}
              </div>

              <h3 className="text-2xl font-bold text-lime-600 font-sans">
                {stat.value}
              </h3>

              <p className="mt-2 text-muted-foreground font-sans">
                {stat.title}
              </p>
            </div>
          );
        })}
      </div>
      <NextSection
        title="Activations"
        description="Explore brand activations, mall promotions, roadshows and experiential marketing campaigns."
        onClick={() => navigate("activation")}
      />
    </div>
  );
}
