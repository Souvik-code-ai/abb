import { useEffect, useRef, useState } from "react";
import {
  Phone,
  Home,
  Info,
  Image,
  Star,
  Mail,
  Contact,
  ShieldCheck,
  Shield,
  FileText,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  EllipsisVertical,
  User,
  NotebookTabs,
  MapPin,
} from "lucide-react";
import Logo from "../../assets/logo.jpg";
import { MessageModal } from "./ui/MessageModal";
const MORE_ITEMS = [
  { id: "privacy", label: "Privacy Policy", Icon: Shield },
  { id: "terms", label: "Terms & Conditions", Icon: FileText },
];

const NAV_ITEMS = [
  { id: "home", label: "Home", Icon: Home },
  { id: "events", label: "Events", Icon: Info },
  { id: "digital", label: "Digital", Icon: Image },
  { id: "presense", label: "Presense", Icon: MapPin },
  { id: "message", label: "Message", Icon: MessageCircle },
  { id: "exhibition", label: "Exhibition", Icon: Star },
  { id: "activation", label: "Activation", Icon: ShieldCheck },
  { id: "profile", label: "Profile", Icon: User },
];

// ─────────────────────────────────────────────────────────────────────────────
// useCountUp
// ─────────────────────────────────────────────────────────────────────────────
function useCountUp(target, duration = 1800, suffix = "") {
  const [display, setDisplay] = useState("0" + suffix);
  const rafRef = useRef(null);

  useEffect(() => {
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      const formatted =
        target >= 1000
          ? (current / 1000).toFixed(current < 1000 ? 1 : 0) + "K"
          : String(current);
      setDisplay(formatted + suffix);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration, suffix]);

  return display;
}

// ─────────────────────────────────────────────────────────────────────────────
// StatItem
// ─────────────────────────────────────────────────────────────────────────────
function StatItem({ target, suffix, lbl, delay = 0, visible }) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay, visible]);

  const value = useCountUp(started ? target : 0, 1600, suffix);

  return (
    <div>
      <div
        style={{ fontFamily: "var(--font-heading)" }}
        className="text-base font-bold text-primary leading-tight tabular-nums"
      >
        {value}
      </div>
      <div className="text-[10px] text-muted-foreground">{lbl}</div>
    </div>
  );
}

const STATS = [
  { target: 25, suffix: "+", lbl: "Years" },
  { target: 5000, suffix: "+", lbl: "Projects" },
  { target: 100, suffix: "+", lbl: "Clients" },
];

// ─────────────────────────────────────────────────────────────────────────────
// DESKTOP SIDEBAR
// ─────────────────────────────────────────────────────────────────────────────
export function DesktopSidebar({ currentPage, navigate }) {
  const [hovered, setHovered] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const moreRef = useRef(null);
  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close dropdown when sidebar collapses
  useEffect(() => {
    if (!hovered) setMoreOpen(false);
  }, [hovered]);

  const isMoreActive = currentPage === "privacy" || currentPage === "terms";

  return (
    <aside
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="hidden lg:flex fixed left-0 top-0 h-full bg-background  flex-col z-40 overflow-hidden"
      style={{
        width: hovered ? "240px" : "72px",
        transition: "width 300ms cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* ── Logo ─────────────────────────────────────────────── */}
      <div
        className="border-border flex items-center rounded-2xl cursor-pointer "
        style={{
          height: 72,
          paddingLeft: 15,
          flexShrink: 0,
        }}
        onClick={() => navigate("home")}
      >
        <img
          src={Logo}
          alt="AbyBaby"
          style={{
            width: 50,
            height: 50,
            objectFit: "contain",
          }}
          className="border-black border-r border-b rounded-2xl "
        />
      </div>

      {/* ── Navigation ───────────────────────────────────────── */}
      <nav
        className="flex-1 overflow-y-auto"
        style={{
          padding: "12px 10px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {NAV_ITEMS.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => {
              if (id === "message") {
                setMessageOpen(true);
                return;
              }

              navigate(id);
              setMoreOpen(false);
            }}
            className={`w-full flex items-center rounded-xl transition-all duration-200 group ${
              currentPage === id
                ? "text-primary bg-primary/10"
                : "text-foreground/55 hover:bg-white/5 hover:text-foreground"
            }`}
            style={{
              gap: 12,
              padding: "10px 14px",
              justifyContent: hovered ? "flex-start" : "center",
              transition:
                "padding 300ms cubic-bezier(0.4,0,0.2,1), justify-content 300ms",
              border: "none",
              background: currentPage === id ? undefined : "transparent",
              cursor: "pointer",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            <Icon
              size={20}
              className={`flex-shrink-0 transition-colors ${
                currentPage === id
                  ? "text-lime-500"
                  : "text-muted-foreground group-hover:text-foregroud"
              }`}
            />

            {/* Label */}
            <span
              style={{
                fontWeight: 500,
                fontSize: 13,
                color: currentPage === id ? "var(--primary)" : undefined,

                opacity: hovered ? 1 : 0,
                width: hovered ? "auto" : 0,
                overflow: "hidden",
                whiteSpace: "nowrap",

                transition: "all 250ms ease",
              }}
            >
              {label}
            </span>

            {/* Active dot */}
            {/* Active dot */}
            {hovered && (
              <div
                style={{
                  width: 12,
                  display: "flex",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginLeft: "auto",
                }}
              >
                {currentPage === id && (
                  <div
                    className="rounded-full bg-primary"
                    style={{
                      width: 6,
                      height: 6,
                    }}
                  />
                )}
              </div>
            )}
          </button>
        ))}

        {/* ── More (dropdown trigger) ───────────────────────── */}
        <div ref={moreRef} style={{ position: "relative" }}>
          <button
            onClick={() => setMoreOpen((o) => !o)}
            className={`w-full flex items-center rounded-xl transition-all duration-200 group ${
              isMoreActive || moreOpen
                ? "bg-primary/12 text-primary"
                : "text-foreground/55 hover:bg-white/5 hover:text-foreground"
            }`}
            style={{
              gap: 12,
              padding: hovered ? "10px 14px" : "10px 14px",
              justifyContent: hovered ? "flex-start" : "center",
              transition: "padding 300ms cubic-bezier(0.4,0,0.2,1)",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            <EllipsisVertical size={20} className="flex-shrink-0" />

            <span
              style={{
                fontWeight: 500,
                fontSize: 13,

                opacity: hovered ? 1 : 0,
                width: hovered ? "auto" : 0,
                overflow: "hidden",
                whiteSpace: "nowrap",

                transition: "all 250ms ease",
              }}
            >
              More
            </span>

            {hovered &&
              (moreOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />)}
          </button>

          {/* ── Dropdown (expanded sidebar) ───────────────── */}
          {hovered && (
            <div
              style={{
                maxHeight: moreOpen ? "200px" : "0px",
                opacity: moreOpen ? 1 : 0,
                overflow: "hidden",
                transition:
                  "max-height 300ms cubic-bezier(0.4,0,0.2,1), opacity 200ms ease",
              }}
            >
              <div
                className="bg-background rounded-xl overflow-hidden"
                style={{ marginTop: 4, marginLeft: 4, marginRight: 4 }}
              >
                {MORE_ITEMS.map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    onClick={() => {
                      navigate(id);
                      setMoreOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-150 group ${
                      currentPage === id
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/55 hover:bg-white/5 hover:text-foreground"
                    }`}
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <Icon
                      size={20}
                      style={{
                        color: currentPage === id ? "#84cc16" : undefined,
                        fill: currentPage === id ? "#84cc16" : "none",
                      }}
                    />
                    <span
                      style={{
                        fontWeight: 500,
                        fontSize: 13,
                        color:
                          currentPage === id ? "var(--primary)" : undefined,

                        width: hovered ? "auto" : 0,
                        opacity: hovered ? 1 : 0,
                        overflow: "hidden",
                        whiteSpace: "nowrap",

                        transform: hovered
                          ? "translateX(0)"
                          : "translateX(-8px)",
                        transition: "all 250ms ease",
                        flex: hovered ? 1 : 0,
                      }}
                    >
                      {label}
                    </span>
                    {currentPage === id && (
                      <div
                        className="rounded-full bg-primary"
                        style={{
                          width: 6,
                          height: 6,
                          marginLeft: "auto",
                          flexShrink: 0,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Floating dropdown (collapsed state) ── */}
          {moreOpen && !hovered && (
            <div
              className="bg-card rounded-xl overflow-hidden shadow-xl"
              style={{
                position: "absolute",
                left: "100%",
                top: 0,
                marginLeft: 8,
                zIndex: 50,
                width: 176,
              }}
            >
              {MORE_ITEMS.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    navigate(id);
                    setMoreOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-150 ${
                    currentPage === id
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/55 hover:bg-white/5 hover:text-foreground"
                  }`}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <Icon size={16} className="flex-shrink-0" />
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    {label}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ── Stats strip ───────────────────────────────────────── */}
      <div
        className="border-t border-border"
        style={{
          padding: "10px 16px",
          display: "grid",
          gridTemplateColumns: hovered ? "repeat(3, 1fr)" : "1fr",
          gap: 8,
          textAlign: "center",
          overflow: "hidden",
          opacity: hovered ? 1 : 0,
          maxHeight: hovered ? "80px" : "0px",
          transition:
            "opacity 200ms ease, max-height 300ms cubic-bezier(0.4,0,0.2,1), grid-template-columns 300ms ease",
        }}
      >
        {STATS.map(({ target, suffix, lbl }, i) => (
          <StatItem
            key={lbl}
            target={target}
            suffix={suffix}
            lbl={lbl}
            delay={i * 120}
            visible={hovered}
          />
        ))}
      </div>

      {/* ── Footer: contact ───────────────────────────────────── */}
      <div
        className="border-t border-border"
        style={{
          padding: hovered ? "12px 16px 14px" : "12px 0",
          overflow: "hidden",
        }}
      >
        {[
          { Icon: Phone, text: "+91 98765 43210" },
          { Icon: Mail, text: "hello@abybabygroup.com" },
        ].map(({ Icon, text }, i) => (
          <div
            key={i}
            className="flex items-center"
            style={{
              gap: 8,
              marginBottom: i === 0 ? 6 : 0,
              justifyContent: "flex-start",
            }}
          >
            <Icon size={12} className="text-primary flex-shrink-0" />
            <span
              style={{
                fontSize: 11,
                color: "var(--foreground)",
                opacity: hovered ? 0.45 : 0,
                transform: hovered ? "translateX(0)" : "translateX(-6px)",
                transition:
                  "opacity 180ms ease 60ms, transform 180ms ease 60ms",
                whiteSpace: "nowrap",
              }}
            >
              {text}
            </span>
          </div>
        ))}
      </div>
      <MessageModal open={messageOpen} onClose={() => setMessageOpen(false)} />
    </aside>
  );
}
