import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  User,
  Mail,
  MapPin,
  MessageSquare,
  X,
  CheckCircle2,
} from "lucide-react";

export function MessageModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;

    // API Call Here

    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();

    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        email: "",
        address: "",
        message: "",
      });
    }, 300);
  };

  const fields = [
    {
      name: "name",
      label: "Full Name",
      icon: User,
      type: "text",
      placeholder: "John Doe",
    },
    {
      name: "email",
      label: "Email Address",
      icon: Mail,
      type: "email",
      placeholder: "john@example.com",
    },
    {
      name: "address",
      label: "Address",
      icon: MapPin,
      type: "text",
      placeholder: "City, Country",
    },
  ];

  const modal = (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(10px)",
            }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl overflow-hidden font-sans"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              boxShadow:
                "0 -8px 60px rgba(0,0,0,0.15), 0 20px 60px rgba(0,0,0,0.12)",
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 30,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag Handle */}
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className="w-10 h-1 rounded-full bg-border" />
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  className="px-6 pt-4 pb-7"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-bold text-foreground font-sans">
                        Send a Message
                      </h2>

                      <p className="text-xs mt-1 text-muted-foreground font-sans">
                        to abybaby_group
                      </p>
                    </div>

                    <button
                      onClick={handleClose}
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-border"
                    >
                      <X size={15} />
                    </button>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-3">
                    {fields.map(
                      ({ name, label, icon: Icon, type, placeholder }) => (
                        <div key={name}>
                          <label className="block text-[11px] uppercase font-semibold mb-1">
                            {label}
                          </label>

                          <div
                            className="flex items-center gap-3 rounded-xl px-4 py-3"
                            style={{
                              background: "var(--muted)",
                              border:
                                focused === name
                                  ? "1px solid #84cc16"
                                  : "1px solid var(--border)",
                            }}
                          >
                            <Icon size={15} />

                            <input
                              type={type}
                              name={name}
                              value={form[name]}
                              onChange={handleChange}
                              onFocus={() => setFocused(name)}
                              onBlur={() => setFocused(null)}
                              placeholder={placeholder}
                              className="flex-1 bg-transparent outline-none text-sm"
                            />
                          </div>
                        </div>
                      ),
                    )}

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] uppercase font-semibold mb-1">
                        Message
                      </label>

                      <div
                        className="flex gap-3 rounded-xl px-4 py-3"
                        style={{
                          background: "var(--muted)",
                          border:
                            focused === "message"
                              ? "1px solid #84cc16"
                              : "1px solid var(--border)",
                        }}
                      >
                        <MessageSquare size={15} />

                        <textarea
                          rows={4}
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused(null)}
                          placeholder="Write your message..."
                          className="flex-1 bg-transparent resize-none outline-none text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={!form.name || !form.email || !form.message}
                    className="w-full mt-5 py-3 rounded-xl font-semibold font-sans"
                    style={{
                      background: "var(--primary)",
                      // color: "var(--primary-foreground)",
                      opacity:
                        !form.name || !form.email || !form.message ? 0.5 : 1,
                    }}
                  >
                    Send Message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center px-6 py-14"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={30} style={{ color: "#3f6212" }} />
                  </div>

                  <h3 className="text-lg font-bold mb-2 font-sans">
                    Message Sent!
                  </h3>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll get back to you shortly.
                  </p>

                  <button
                    onClick={handleClose}
                    className="mt-6 px-8 py-2 rounded-xl border border-border"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modal, document.body);
}
