import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NextSection } from "./NextSection";
// Cover Images
// import droneCover from "../../../assets/activation/drone/cover.jpg";
import miaCover from "../../../assets/mia/ms.jpg";
import mallCover from "../../../assets/mall/mp.jpeg";
import rallyCover from "../../../assets/rally/bk1.jpeg";
import tataCover from "../../../assets/tc/tc2.JPG";
import miaDetail from "../../../assets/mia/ms1.jpg";
import mallDetail from "../../../assets/mall/mp1.jpeg";
import rallyDetail from "../../../assets/rally/bk.jpeg";
import tataDetail from "../../../assets/tc/tc1.JPG";
import mia1 from "../../../assets/mia/ms1.jpg";
import mia2 from "../../../assets/mia/ms2.jpg";
import mia3 from "../../../assets/mia/ms4.jpg";

import mall1 from "../../../assets/mall/mp1.jpeg";
import mall2 from "../../../assets/mall/mp2.jpeg";
import mall3 from "../../../assets/mall/mp3.jpeg";

import rally1 from "../../../assets/rally/bk.jpeg";
import rally2 from "../../../assets/rally/bk6.jpeg";
import rally3 from "../../../assets/rally/bk5.jpeg";
import tata1 from "../../../assets/tc/tc1.JPG";
import tata2 from "../../../assets/tc/tc3.JPG";
import tata3 from "../../../assets/tc/tc4.JPG";
export function ActivationSection({ navigate }) {
  const [selectedActivation, setSelectedActivation] = useState(null);

  const ACTIVATIONS = [
    {
      id: 1,
      title: "MIA Store Launch",
      type: "Retail Activation",
      image: miaCover,
      gallery: [mia1, mia2, mia3],
      audience: "25K+",
      highlights: [
        "Store Inauguration Ceremony",
        "Customer Experience Zone",
        "Product Showcase",
        "Brand Engagement Activities",
        "Media Coverage",
      ],
    },

    {
      id: 2,
      title: "Mall Promotion",
      type: "Mall Activation",
      image: mallCover,
      gallery: [mall1, mall2, mall3],
      audience: "50K+",
      highlights: [
        "Interactive Consumer Engagement",
        "Product Demonstration Booths",
        "Lead Generation Campaign",
        "On-ground Branding",
        "Footfall Conversion Activities",
      ],
    },

    {
      id: 3,
      title: "Bike Rally",
      type: "Roadshow Activation",
      image: rallyCover,
      gallery: [rally1, rally2, rally3],
      audience: "15K+",
      highlights: [
        "Brand Visibility Across City",
        "Rider Community Engagement",
        "Flag-off Ceremony",
        "Roadshow Promotions",
        "Media & Social Coverage",
      ],
    },

    {
      id: 4,
      title: "Tata Culture Connect",
      type: "Corporate Engagement",
      image: tataCover,
      gallery: [tata1, tata2, tata3],
      audience: "8K+",
      highlights: [
        "Employee Engagement Programs",
        "Cultural Activities",
        "Recognition & Awards",
        "Team Building Sessions",
        "Corporate Networking",
      ],
    },
  ];

  const ACTIVATION_STATS = [
    {
      title: "Activations Delivered",
      value: "500+",
      icon: "🚀",
    },
    {
      title: "Audience Reached",
      value: "5M+",
      icon: "👥",
    },
    {
      title: "Cities Covered",
      value: "120+",
      icon: "📍",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  return (
    <>
      <div className="w-full min-h-screen bg-background px-6 pt-[180px] lg:py-10">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold font-sans">Activations</h1>

          <p className="text-muted-foreground mt-2 font-sans">
            Creating immersive brand experiences and audience engagement
            campaigns.
          </p>
        </div>

        {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[380px]">
  {ACTIVATIONS.map((item, index) => {
    const rowIndex = Math.floor(index / 2);
    const isFirstCardInRow = index % 2 === 0;

    const isWide =
      (rowIndex % 2 === 0 && isFirstCardInRow) ||
      (rowIndex % 2 === 1 && !isFirstCardInRow);

    return (
      <motion.div
        key={item.id}
        whileHover={{ y: -6 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setSelectedActivation(item)}
        className={`
          relative overflow-hidden rounded-2xl cursor-pointer group h-full
          ${isWide ? "md:col-span-2" : "md:col-span-1"}
        `}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-xs bg-lime-600 px-3 py-1 rounded-full text-white">
            {item.type}
          </span>

          <h3 className="text-white text-2xl font-bold mt-3 font-sans">
            {item.title}
          </h3>
        </div>
      </motion.div>
    );
  })}
</div>

        {/* Stats */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {ACTIVATION_STATS.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>

              <h3 className="text-2xl font-bold text-lime-500">{stat.value}</h3>

              <p className="mt-2 text-muted-foreground">{stat.title}</p>
            </div>
          ))}
        </div> */}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedActivation && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedActivation(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-7xl h-[85vh] overflow-hidden rounded-3xl"
            >
              {/* Main Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={selectedActivation.gallery[currentImage]}
                  alt={selectedActivation.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

              {/* Previous */}
              <button
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev === 0
                      ? selectedActivation.gallery.length - 1
                      : prev - 1,
                  )
                }
                className="absolute left-6 top-1/2 -translate-y-1/2
                     w-14 h-14 rounded-full z-50
                     bg-black/40 backdrop-blur-md
                     text-white text-3xl
                     flex items-center justify-center
                     hover:bg-black/60 transition"
              >
                ❮
              </button>

              {/* Next */}
              <button
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev === selectedActivation.gallery.length - 1
                      ? 0
                      : prev + 1,
                  )
                }
                className="absolute right-6 top-1/2 -translate-y-1/2 z-50
                     w-14 h-14 rounded-full
                     bg-black/40 backdrop-blur-md
                     text-white text-3xl
                     flex items-center justify-center
                     hover:bg-black/60 transition"
              >
                ❯
              </button>

              {/* Title Card */}
              <div className="absolute top-8 left-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
                <span className="text-xs bg-lime-600 px-3 py-1 rounded-full text-white">
                  {selectedActivation.type}
                </span>

                <h2 className="text-white text-3xl font-bold mt-3 font-sans">
                  {selectedActivation.title}
                </h2>
              </div>

              {/* Audience */}
              <div className="absolute top-8 right-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
                <p className="text-white/70 text-sm">Audience Reach</p>

                <h3 className="text-white text-3xl font-bold font-sans">
                  {selectedActivation.audience}
                </h3>
              </div>

              {/* Highlights */}
              <div className="absolute bottom-8 right-8 w-[320px] backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-4 font-sans">
                  Activation Highlights
                </h4>

                <div className="space-y-3">
                  {selectedActivation.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 text-white"
                    >
                      <span className="w-2 h-2 rounded-full bg-lime-400" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Indicators */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {selectedActivation.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`transition-all rounded-full ${
                      currentImage === index
                        ? "w-8 h-3 bg-white"
                        : "w-3 h-3 bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Thumbnail Strip */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3">
                {selectedActivation.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`overflow-hidden rounded-lg border-2 ${
                      currentImage === index
                        ? "border-white"
                        : "border-white/30"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-20 h-14 object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Close */}
              <button
                onClick={() => setSelectedActivation(null)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full
                     bg-black/50 backdrop-blur-md
                     text-white text-xl
                     flex items-center justify-center"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <NextSection
        title="Activations"
        description="Explore brand activations, mall promotions, roadshows and experiential marketing campaigns."
        onClick={() => navigate("profile")}
      />
    </>
  );
}
