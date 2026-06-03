import { motion } from "motion/react";
import { Download, Eye } from "lucide-react";

export function CompanyProfileSection() {
  const PROCESS_CARDS = [
    {
      title: "Why Choose Us",
      subtitle: "Innovation First",
      image: "/images/company/why-choose.jpg",
    },
    {
      title: "Discussion",
      subtitle: "Understanding Requirements",
      image: "/images/company/discussion.jpg",
    },
    {
      title: "Analysis",
      subtitle: "Data Driven Decisions",
      image: "/images/company/analysis.jpg",
    },
    {
      title: "Implementation",
      subtitle: "Execution With Excellence",
      image: "/images/company/implementation.jpg",
    },
  ];

  const SERVICES = [
    {
      title: "Web Development",
      image: "/images/services/web.jpg",
    },
    {
      title: "Mobile Apps",
      image: "/images/services/mobile.jpg",
    },
    {
      title: "UI / UX Design",
      image: "/images/services/uiux.jpg",
    },
    {
      title: "Digital Marketing",
      image: "/images/services/marketing.jpg",
    },
    {
      title: "Cloud Solutions",
      image: "/images/services/cloud.jpg",
    },
    {
      title: "AI Integration",
      image: "/images/services/ai.jpg",
    },
  ];

  const TECHNOLOGIES = [
    "/images/logos/react.png",
    "/images/logos/node.png",
    "/images/logos/python.png",
    "/images/logos/aws.png",
    "/images/logos/mongodb.png",
    "/images/logos/docker.png",
  ];

  const STATS = [
    {
      value: "250+",
      label: "Projects",
    },
    {
      value: "120+",
      label: "Clients",
    },
    {
      value: "35+",
      label: "Awards",
    },
  ];

  const GALLERY = [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/6.jpg",
  ];
  const PORTFOLIO = {
    title: "AbyBaby Corporate Portfolio",
    description:
      "Explore our projects, exhibitions, events, digital solutions, and success stories.",
    cover:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    pdf: "/portfolio/AbyBaby-Portfolio.pdf",
  };

  const PORTFOLIO_PREVIEWS = [
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  ];
  return (
    <div className="w-full px-6 py-10 space-y-20">
      {/* HERO */}
      <section className="relative h-[500px] rounded-3xl overflow-hidden">
        <img
          src="/images/company/hero.jpg"
          alt="Company"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1
            className="text-5xl md:text-7xl font-bold text-white"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            ABYBABY
          </h1>

          <p className="text-white/80 mt-4 max-w-2xl">
            Transforming Ideas Into Extraordinary Digital Experiences
          </p>
        </div>
      </section>
      {/* PORTFOLIO SECTION */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Company Portfolio
          </h2>

          <a
            href={PORTFOLIO.pdf}
            download
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition"
          >
            <Download size={18} />
            Download PDF
          </a>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8">
          {/* Cover */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-[450px] rounded-3xl overflow-hidden"
          >
            <img
              src={PORTFOLIO.cover}
              alt={PORTFOLIO.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-600 text-white text-xs mb-4">
                COMPANY PROFILE
              </span>

              <h3
                className="text-white text-3xl font-bold line-clamp-2"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {PORTFOLIO.title}
              </h3>

              <p className="text-white/70 mt-3 max-w-xl">
                {PORTFOLIO.description}
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h3
              className="text-3xl font-bold"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Discover Our Work
            </h3>

            <p className="text-muted-foreground mt-4 leading-relaxed">
              Explore our exhibitions, event management projects, digital
              campaigns, corporate branding initiatives, creative experiences,
              and client success stories.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={PORTFOLIO.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition"
              >
                <Eye size={18} />
                View Portfolio
              </a>

              <a
                href={PORTFOLIO.pdf}
                download
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>

            {/* Preview Pages */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {PORTFOLIO_PREVIEWS.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="overflow-hidden rounded-2xl border border-white/10"
                >
                  <img
                    src={img}
                    alt={`Portfolio Preview ${index + 1}`}
                    className="w-full aspect-[3/4] object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* PROCESS */}
      <section>
        <h2
          className="text-3xl font-bold mb-8"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Our Process
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {PROCESS_CARDS.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.03 }}
              className="relative h-[350px] rounded-3xl overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <h3
                  className="text-white text-2xl font-bold line-clamp-2"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {item.title}
                </h3>

                <p className="text-white/70 mt-2">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM STATS */}
      <section>
        <div className="grid grid-cols-3 gap-6">
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center"
            >
              <h3
                className="text-4xl md:text-6xl font-bold text-amber-500"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {stat.value}
              </h3>

              <p className="mt-3 text-muted-foreground uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <h2
          className="text-3xl font-bold mb-8"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Core Services
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ scale: 1.03 }}
              className="relative h-[320px] rounded-3xl overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-5 left-5 right-5">
                <h3
                  className="text-white text-xl font-semibold line-clamp-2"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section>
        <h2
          className="text-3xl font-bold mb-8"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Working Technologies
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {TECHNOLOGIES.map((logo, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Technology"
                className="h-14 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section>
        <h2
          className="text-3xl font-bold mb-8"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Project Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt="Project"
                className="w-full aspect-square object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
