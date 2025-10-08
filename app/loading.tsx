"use client";

import { motion } from "framer-motion";

const messages = [
  "Initializing modules…",
  "Fetching your data…",
  "Optimizing performance…",
  "Almost there…",
];

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="space-y-2">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [-40, 0, 0, 40],
            }}
            transition={{
              delay: i * 0.8,
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="px-4 py-2 bg-neutral-800/70 text-white rounded shadow-lg backdrop-blur-sm"
          >
            {msg}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
