import { motion } from "motion/react";
import { Phone, MapPin, Building2, Clock, Navigation } from "lucide-react";

// Replace with your own image
import officeImage from "../../../assets/mia/ms.jpg";

export function ContactPage() {
  const STATS = [
    {
      value: "20+",
      label: "Years Experience",
    },
    {
      value: "500+",
      label: "Events Delivered",
    },
    {
      value: "15+",
      label: "Cities Covered",
    },
  ];

  const CONTACTS = [
    {
      icon: Phone,
      title: "Primary Contact",
      value: "+91 9830832000",
      href: "tel:+919830832000",
    },
    {
      icon: Phone,
      title: "Secondary Contact",
      value: "+91 9830836000",
      href: "tel:+919830836000",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kalighat, Kolkata",
      href: "#map",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans pt-[150px] lg:py-10">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src={officeImage}
          alt="AbyBaby Office"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

        <div className="absolute bottom-10 left-6 lg:left-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5">
            <Building2 size={16} className="text-lime-600" />
            <span className="text-white text-sm">AbyBaby Events Presence</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight font-sans">
            Let's Talk
          </h1>

          <p className="mt-5 text-white/80 text-lg max-w-xl leading-relaxed">
            We value your feedback and are committed to providing excellent
            customer service. If you have any questions, concerns, or
            suggestions, don't hesitate to get in touch with us.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-3 gap-5">
          {CONTACTS.map(({ icon: Icon, title, value, href }) => (
            <a
              key={title}
              href={href}
              className="rounded-3xl border border-white/10 bg-card/90 backdrop-blur-xl p-6 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-lime-500/10 flex items-center justify-center mb-4">
                <Icon size={22} className="text-lime-600" />
              </div>

              <h3 className="font-semibold text-lg font-sans">{title}</h3>

              <p className="mt-2 text-muted-foreground">{value}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Address Section */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] overflow-hidden border border-border"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-5">
                <MapPin size={22} className="text-lime-600" />

                <h2 className="text-3xl font-bold font-sans">
                  Visit Our Office
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Meet our team and discuss your next event project.
              </p>

              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-lime-600 font-semibold">
                    Address
                  </p>

                  <p className="mt-2 text-lg">
                    6B, Janak Rd
                    <br />
                    Lake Market
                    <br />
                    Kalighat
                    <br />
                    Kolkata – 700029
                    <br />
                    West Bengal
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-lime-600 font-semibold">
                    Contact
                  </p>

                  <p className="mt-2">
                    +91 9830832000
                    <br />
                    +91 9830836000
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-lime-600" />

                  <span className="text-muted-foreground">
                    Monday – Saturday | 9 AM – 7 PM
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-muted min-h-[420px]">
              <iframe
                title="AbyBaby Office"
                src="https://maps.google.com/maps?q=6B%20Janak%20Road%20Kolkata&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[420px]"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      {/* <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STATS.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-border bg-card p-8 text-center"
            >
              <h3 className="text-5xl font-bold text-lime-500">{item.value}</h3>

              <p className="mt-3 text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Directions CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-[32px] overflow-hidden bg-gradient-to-r from-lime-500/10 to-lime-500/5 border border-lime-500/20 p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold">Need Directions?</h2>

              <p className="mt-3 text-muted-foreground max-w-xl">
                Navigate directly to our office and connect with our team for
                event planning, activations, exhibitions and experiential
                marketing solutions.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=6B Janak Road Kolkata"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-lime-500 text-black font-semibold"
            >
              <Navigation size={18} />
              Open in Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
