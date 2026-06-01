import { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Component as Instagram,
  Component as Facebook,
  Component as Twitter,
  Component as Youtube,
  Send,
  CheckCircle,
} from "lucide-react";

const SOCIAL_LINKS = [
  {
    Icon: Instagram,
    label: "Instagram",
    handle: "@abybaby_group",
    color: "hover:text-pink-400",
  },
  {
    Icon: Facebook,
    label: "Facebook",
    handle: "AbyBaby Group",
    color: "hover:text-blue-400",
  },
  {
    Icon: Twitter,
    label: "Twitter",
    handle: "@abybabygroup",
    color: "hover:text-sky-400",
  },
  {
    Icon: Youtube,
    label: "YouTube",
    handle: "AbyBaby Official",
    color: "hover:text-red-400",
  },
];

const CONTACT_INFO = [
  {
    Icon: Phone,
    label: "Call Us",
    value: "+91 9830832000 || +91 9830974955",
    sub: "Mon – Sat, 9 AM – 7 PM",
  },
  {
    Icon: Mail,
    label: "Email Us",
    value: "sucheta@abybaby.co.in ||shaw.vijay@abybaby.co.in",
    sub: "We reply within 24 hours",
  },
  {
    Icon: MapPin,
    label: "Visit Us",
    value: "6B, Janak Rd, Lake Market, Kalighat Kolkata-700029, Westbengal",
    sub: "India's #1 BTL Agency",
  },
];

export function ContactPage({ navigate, currentPage }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background ">
      {/* ── Mobile top bar ───────────────────────────────────── */}
      <div className="lg:hidden sticky top-0 z-30 bg-card/96 backdrop-blur-sm border-b border-border px-5 h-14 flex items-center justify-between">
        <div
          style={{ fontFamily: "var(--font-heading)" }}
          className="text-lg font-bold text-primary"
        >
          AbyBaby
          <span className="text-foreground/65 ml-1 text-base">Group</span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-foreground/40" />
          ))}
        </div>
      </div>

      {/* ── Page content ─────────────────────────────────────── */}
      <div className="max-w-[600px] mx-auto px-5 pt-28 pb-24 lg:pt-28">
        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-3xl font-bold text-foreground leading-tight"
          >
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p
            style={{ fontFamily: "var(--font-sans)" }}
            className="text-foreground/55 text-sm mt-2"
          >
            Let's create something extraordinary together.
          </p>
        </motion.div>
        {/* ── Contact info cards ───────────────────────────── */}
        <div className="grid grid-cols-1 gap-3 mb-8">
          {CONTACT_INFO.map(({ Icon, label, value, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 bg-card border border-border rounded-2xl px-5 py-4"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <div
                  style={{ fontFamily: "var(--font-heading)" }}
                  className="text-[11px] font-semibold text-primary uppercase tracking-widest"
                >
                  {label}
                </div>
                <div
                  style={{ fontFamily: "var(--font-sans)" }}
                  className="text-sm font-medium text-foreground mt-0.5"
                >
                  {value}
                </div>
                <div
                  style={{ fontFamily: "var(--font-sans)" }}
                  className="text-[11px] text-foreground/45 mt-0.5"
                >
                  {sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Socials ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="bg-card border border-border rounded-2xl px-5 py-5"
        >
          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-base font-bold text-foreground mb-4"
          >
            Follow Us
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {SOCIAL_LINKS.map(({ Icon, label, handle, color }) => (
              <button
                key={label}
                className={`flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-3 text-foreground/50 ${color} transition-colors duration-150 group`}
              >
                <Icon size={18} className="flex-shrink-0 transition-colors" />
                <div className="text-left">
                  <div
                    style={{ fontFamily: "var(--font-heading)" }}
                    className="text-[11px] font-semibold uppercase tracking-wider"
                  >
                    {label}
                  </div>
                  <div
                    style={{ fontFamily: "var(--font-sans)" }}
                    className="text-[10px] text-foreground/35 mt-0.5"
                  >
                    {handle}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
