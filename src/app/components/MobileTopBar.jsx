import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { MessageModal } from "./ui/MessageModal";
// import Logo from "../../assets/logo.jpg";
export function MobileTopBar() {
  const [messageOpen, setMessageOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 lg:hidden"
        style={{
          background: "var(--card)",
          borderBottom: "1px solid var(--border)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://abybabyevents.com/assets/img/assets1/image1/logo/abybaby%20event-white-01.png"
              alt="Logo"
              className="w-15 h-15 object-contain"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Message */}
            <button
              onClick={() => setMessageOpen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
              style={{
                color: "var(--foreground)",
              }}
            >
              <MessageCircle size={20} />
            </button>

            {/* Contact */}
            <button
              onClick={() => (window.location.href = "tel:+919999999999")}
              className="flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
              style={{
                color: "var(--primary-foreground)",
              }}
            >
              <Phone size={20} />
            </button>
          </div>
        </div>
      </header>

      <MessageModal open={messageOpen} onClose={() => setMessageOpen(false)} />
    </>
  );
}
