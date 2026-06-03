import { motion } from "motion/react";
import { MapPin, Phone, MessageSquare, Building2 } from "lucide-react";

export function PresenceSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      {/* Header */}
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
          Presence
        </p>

        <h1 className="text-3xl font-bold font-sans mt-2">Let's Talk</h1>

        <p className="text-muted-foreground mt-3 text-sm leading-relaxed font-sans">
          We value your feedback and are committed to providing excellent
          customer service. If you have any questions, concerns, or suggestions,
          please don't hesitate to get in touch with us. We're here to help.
        </p>
      </div>

      {/* Location Card */}
      <div className="bg-card border border-border rounded-3xl p-5 mb-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Building2 size={22} className="text-primary" />
          </div>

          <div>
            <h3 className="font-semibold text-lg font-sans">
              Corporate Office
            </h3>

            <div className="flex items-start gap-2 mt-3">
              <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />

              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                6B, Janak Road,
                <br />
                Lake Market, Kalighat,
                <br />
                Kolkata – 700029,
                <br />
                West Bengal, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="tel:+919830832000"
          className="bg-card border border-border rounded-3xl p-5 hover:border-primary transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Phone size={20} className="text-primary" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                Call Us
              </p>

              <h3 className="font-semibold text-lg font-sans">
                +91 9830832000
              </h3>
            </div>
          </div>
        </a>

        <a
          href="tel:+919830836000"
          className="bg-card border border-border rounded-3xl p-5 hover:border-primary transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <MessageSquare size={20} className="text-primary" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                Alternate Number
              </p>

              <h3 className="font-semibold text-lg font-sans">
                +91 9830836000
              </h3>
            </div>
          </div>
        </a>
      </div>

      {/* Instagram Style Stats */}
      <div className="grid grid-cols-3 gap-3 mt-5">
        <div className="bg-card border border-border rounded-2xl p-4 text-center">
          <h3 className="text-xl font-bold font-sans text-primary">20+</h3>
          <p className="text-xs text-muted-foreground">Years</p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-4 text-center">
          <h3 className="text-xl font-bold font-sans text-primary">500+</h3>
          <p className="text-xs text-muted-foreground">Events</p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-4 text-center">
          <h3 className="text-xl font-bold font-sans text-primary">PAN</h3>
          <p className="text-xs text-muted-foreground">India</p>
        </div>
      </div>
    </motion.div>
  );
}
