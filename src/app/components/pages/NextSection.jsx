import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function NextSection({ title, description, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="
        mt-2
        cursor-pointer
        rounded-3xl
        overflow-hidden
        border border-white/10
        bg-white/5
        backdrop-blur-md
      "
    >
      <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-center gap-2">
        <motion.div
          whileHover={{ x: 6 }}
          className="
            flex items-center gap-3
            px-6 py-4
            rounded-full
            bg-lime-600
            text-white
            font-medium
          "
        >
          Explore
          <ArrowRight size={20} />
        </motion.div>
      </div>
    </motion.div>
  );
}
