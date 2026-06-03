import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import toyotaCover from "../../../assets/Tractor/kv.jpeg";
import toyotaDetail from "../../../assets/Tractor/kv2.jpeg";
import { NextSection } from "./NextSection";
import krishiCover from "../../../assets/Tractor/kv3.jpeg";
import krishiDetail from "../../../assets/Tractor/kv4.jpeg";

import pmsCover from "../../../assets/Tractor/kv6.jpeg";
import pmsDetail from "../../../assets/Tractor/kv7.jpeg";

export function DigitalSection({ navigate }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const DIGITAL_PROJECTS = [
    {
      id: 1,
      name: "Toyota Digital Campaign",
      image: toyotaCover,
      modalImage: toyotaDetail,
      reach: "2.5M+",
      engagement: "320K+",
      services: [
        "Microsite Development",
        "QR Registration",
        "Social Media Campaign",
        "Analytics Dashboard",
      ],
    },
    {
      id: 2,
      name: "Krishivikas Platform",
      image: krishiCover,
      modalImage: krishiDetail,
      reach: "1.2M+",
      engagement: "150K+",
      services: [
        "Website Design",
        "Lead Generation",
        "SEO Optimization",
        "Campaign Reporting",
      ],
    },
    {
      id: 3,
      name: "PMS Corporate Portal",
      image: pmsCover,
      modalImage: pmsDetail,
      reach: "850K+",
      engagement: "95K+",
      services: [
        "Corporate Portal",
        "Dashboard Design",
        "Email Automation",
        "Performance Marketing",
      ],
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen bg-background px-6 pt-[180px] lg:py-10">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold font-sans">Digital Solutions</h1>

          <p className="mt-2 text-muted-foreground">
            Showcasing digital campaigns, websites, analytics and engagement
            solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {DIGITAL_PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProject(project)}
              className="relative overflow-hidden rounded-2xl cursor-pointer group h-[380px]"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-bold font-sans">
                  {project.name}
                </h3>

                <p className="text-white/70 mt-2">
                  Click to explore project details
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl h-[80vh] overflow-hidden rounded-3xl"
            >
              {/* Detail Image */}
              <img
                src={selectedProject.modalImage}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              {/* Title */}
              <div className="absolute top-8 left-8">
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl px-6 py-4">
                  <h2 className="text-white text-3xl font-bold font-sans">
                    {selectedProject.name}
                  </h2>
                </div>
              </div>

              {/* Reach Card */}
              <div className="absolute top-8 right-8">
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-5">
                  <h4 className="text-white/70 text-sm">Reach</h4>
                  <p className="text-white text-3xl font-bold">
                    {selectedProject.reach}
                  </p>
                </div>
              </div>

              {/* Engagement Card */}
              <div className="absolute bottom-8 left-8">
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-5">
                  <h4 className="text-white/70 text-sm">Engagement</h4>
                  <p className="text-white text-3xl font-bold">
                    {selectedProject.engagement}
                  </p>
                </div>
              </div>

              {/* Services Floating Panel */}
              <div className="absolute bottom-8 right-8 w-[320px]">
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6">
                  <h4 className="text-white font-semibold mb-4">
                    Services Delivered
                  </h4>

                  <div className="space-y-3">
                    {selectedProject.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-3 text-white/90"
                      >
                        <span className="w-2 h-2 rounded-full bg-lime-400" />
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/50 text-white text-xl"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <NextSection
        title="Activations"
        description="Explore brand activations, mall promotions, roadshows and experiential marketing campaigns."
        onClick={() => navigate("exhibition")}
      />
    </>
  );
}
