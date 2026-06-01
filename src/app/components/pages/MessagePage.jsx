import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  ChevronDown,
} from "lucide-react";

const FAQS = [
  {
    q: "How soon will you respond?",
    a: "We typically respond within 4–6 business hours. For urgent queries, call us directly at +91 98308 36000.",
  },
  {
    q: "What events do you manage?",
    a: "From intimate corporate dinners to 50,000-person festivals — we handle it all. Concerts, brand activations, sports events, cultural festivals, and more.",
  },
  {
    q: "Do you operate outside Kolkata?",
    a: "Yes! We operate pan-India across 15+ cities including Mumbai, Delhi, Bangalore, Hyderabad, Chennai, and Goa.",
  },
  {
    q: "How early should I reach out for event planning?",
    a: "Ideally 3–6 months in advance for large events. For smaller gatherings, 4–6 weeks is usually sufficient.",
  },
];

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98308 36000",
    sub: "Mon–Sat, 9 AM – 7 PM",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@abybabyevents.com",
    sub: "We reply within 6 hours",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "14/1A Rafi Ahmed Kidwai Road",
    sub: "Kolkata – 700013, West Bengal",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9 AM to 7 PM",
    sub: "Sunday by appointment",
  },
];

// ─── FAQ accordion item ───────────────────────────────────────────────────────
function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.4 }}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-card hover:bg-muted/40 transition-colors"
      >
        <span
          style={{ fontFamily: "var(--font-heading)" }}
          className="text-sm font-semibold text-foreground pr-4"
        >
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-primary"
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p
              style={{ fontFamily: "var(--font-sans)" }}
              className="px-5 pb-4 pt-1 text-sm text-foreground/65 leading-relaxed"
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function MessagePage({ navigate }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", eventType: "", message: "" });
  };

  const inputClass = (field) =>
    `w-full bg-background border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none transition-colors ${
      focused === field ? "border-primary" : "border-border"
    }`;

  const EVENT_TYPES = [
    "Festival / Concert",
    "Corporate Event",
    "Brand Activation",
    "Sports Event",
    "Cultural Festival",
    "Private Celebration",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-background ">
      {/* ── Mobile top bar ── */}
      <div className="lg:hidden sticky top-0 z-30 bg-card/96 backdrop-blur-sm border-b border-border px-5 h-14 flex items-center justify-between">
        <div
          style={{ fontFamily: "var(--font-heading)" }}
          className="text-lg font-bold text-primary"
        >
          AbyBaby
          <span className="text-foreground/65 ml-1 text-base">Group</span>
        </div>
        <MessageSquare size={20} className="text-primary" />
      </div>

      <div className="max-w-[680px] mx-auto px-4 py-6 lg:py-10">
        {/* ── Page header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <p className="text-[11px] font-semibold text-primary uppercase tracking-[0.3em] mb-2">
            Get In Touch
          </p>
          <h1
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-2xl font-bold text-foreground leading-tight mb-2"
          >
            Let's Plan Something
            <span className="text-primary"> Epic</span>
          </h1>
          <p
            style={{ fontFamily: "var(--font-sans)" }}
            className="text-sm text-foreground/55 leading-relaxed"
          >
            Whether it's a 500-person gala or a 50,000-person festival — drop us
            a message and we'll get back to you within 6 hours.
          </p>
        </motion.div>

        {/* ── Contact info strip ── */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-2 gap-3 mb-6"
        >
          {CONTACT_INFO.map(({ icon: Icon, label, value, sub }) => (
            <div
              key={label}
              className="bg-card border border-border rounded-xl p-4 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon size={15} className="text-primary" />
              </div>
              <div className="min-w-0">
                <p
                  style={{ fontFamily: "var(--font-heading)" }}
                  className="text-[10px] font-semibold text-primary uppercase tracking-widest mb-0.5"
                >
                  {label}
                </p>
                <p
                  style={{ fontFamily: "var(--font-sans)" }}
                  className="text-[12px] font-semibold text-foreground leading-tight truncate"
                >
                  {value}
                </p>
                <p className="text-[11px] text-foreground/45 mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </motion.div> */}

        {/* ── Message form ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="bg-card border border-border rounded-2xl px-5 py-6 mb-6"
        >
          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-base font-bold text-foreground mb-5"
          >
            Send Us a Message
          </h2>

          <div className="space-y-4">
            {/* Name + Phone row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  style={{ fontFamily: "var(--font-sans)" }}
                  className="text-[11px] font-semibold text-primary uppercase tracking-widest block mb-1.5"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  placeholder="John Doe"
                  style={{ fontFamily: "var(--font-sans)" }}
                  className={inputClass("name")}
                />
              </div>
              <div>
                <label
                  style={{ fontFamily: "var(--font-sans)" }}
                  className="text-[11px] font-semibold text-primary uppercase tracking-widest block mb-1.5"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                  placeholder="+91 98765 43210"
                  style={{ fontFamily: "var(--font-sans)" }}
                  className={inputClass("phone")}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                style={{ fontFamily: "var(--font-sans)" }}
                className="text-[11px] font-semibold text-primary uppercase tracking-widest block mb-1.5"
              >
                Email Address *
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                placeholder="you@example.com"
                style={{ fontFamily: "var(--font-sans)" }}
                className={inputClass("email")}
              />
            </div>

            {/* Event type */}
            <div>
              <label
                style={{ fontFamily: "var(--font-sans)" }}
                className="text-[11px] font-semibold text-primary uppercase tracking-widest block mb-1.5"
              >
                Event Type
              </label>
              <div className="flex flex-wrap gap-2">
                {EVENT_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() =>
                      setForm({
                        ...form,
                        eventType: form.eventType === type ? "" : type,
                      })
                    }
                    style={{ fontFamily: "var(--font-sans)" }}
                    className={`text-[11px] px-3 py-1.5 rounded-full border font-medium transition-all duration-200 ${
                      form.eventType === type
                        ? "bg-primary text-background border-primary"
                        : "bg-background text-foreground/60 border-border hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                style={{ fontFamily: "var(--font-sans)" }}
                className="text-[11px] font-semibold text-primary uppercase tracking-widest block mb-1.5"
              >
                Message *
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                placeholder="Tell us about your event — scale, date, location, vision..."
                style={{ fontFamily: "var(--font-sans)" }}
                className={`${inputClass("message")} resize-none`}
              />
              <p className="text-[10px] text-foreground/35 mt-1 text-right">
                {form.message.length} / 500
              </p>
            </div>

            {/* Submit */}
            <motion.button
              onClick={handleSubmit}
              whileTap={{ scale: 0.97 }}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                submitted
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-primary text-background hover:bg-primary/90"
              }`}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle size={16} />
                    Message Sent! We'll be in touch soon.
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-2"
                  >
                    <Send size={16} />
                    Send Message
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <p className="text-[10px] text-foreground/35 text-center">
              * Required fields. We never share your data.
            </p>
          </div>
        </motion.div>

        {/* ── FAQ section ── */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mb-6"
        >
          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-base font-bold text-foreground mb-4"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </motion.div> */}

        {/* ── Social links ── */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="bg-card border border-border rounded-2xl px-5 py-5"
        >
          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-sm font-bold text-foreground mb-1"
          >
            Follow Our Journey
          </h2>
          <p className="text-[12px] text-foreground/50 mb-4">
            Behind-the-scenes content, event highlights &amp; more.
          </p>
          <div className="flex gap-3">
            {[
              {
                Icon: Instagram,
                label: "Instagram",
                handle: "@abybaby_group",
                color: "#E1306C",
              },
              {
                Icon: Facebook,
                label: "Facebook",
                handle: "AbyBaby Events",
                color: "#1877F2",
              },
              {
                Icon: Youtube,
                label: "YouTube",
                handle: "AbyBaby Events",
                color: "#FF0000",
              },
            ].map(({ Icon, label, handle, color }) => (
              <button
                key={label}
                className="flex-1 flex flex-col items-center gap-2 py-3 rounded-xl border border-border bg-background hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{ background: color + "22" }}
                >
                  <Icon size={17} style={{ color }} />
                </div>
                <div>
                  <p
                    style={{ fontFamily: "var(--font-heading)" }}
                    className="text-[11px] font-bold text-foreground"
                  >
                    {label}
                  </p>
                  <p className="text-[10px] text-foreground/40">{handle}</p>
                </div>
              </button>
            ))}
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
