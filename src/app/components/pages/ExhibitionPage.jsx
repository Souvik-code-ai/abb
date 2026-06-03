import { motion } from "motion/react";
export function ExhibitionsSection() {
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
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
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
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
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
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-background px-6 py-10">
      {/* Heading */}
      <div className="mb-10">
        <h1
          className="text-3xl font-bold"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Exhibitions
        </h1>

        <p className="text-muted-foreground mt-2">
          Showcasing our exhibition excellence and achievements
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {EXHIBITION_STATS.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
          >
            <div className="text-4xl mb-3">{stat.icon}</div>

            <h3 className="text-3xl font-bold text-amber-500">{stat.value}</h3>

            <p className="mt-2 text-muted-foreground">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Exhibition Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {EXHIBITIONS.map((exhibition) => (
          <motion.div
            key={exhibition.id}
            whileHover={{ y: -5 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <img
              src={exhibition.image}
              alt={exhibition.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h3
                className="text-xl font-semibold line-clamp-2"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {exhibition.name}
              </h3>

              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>📐 Booth Size: {exhibition.boothSize}</p>
                <p>👥 Attendance: {exhibition.attendance}</p>
              </div>

              <div className="mt-5">
                <h4 className="font-medium text-amber-500 mb-3">
                  Key Features
                </h4>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {exhibition.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-amber-500">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
