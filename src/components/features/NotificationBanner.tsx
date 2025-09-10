"use client";

import { motion } from "framer-motion";

export function NotificationBanner({ message }: { message: string }) {
  if (!message) return null;
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full rounded-md border border-border bg-secondary text-secondary-foreground px-4 py-2 text-sm"
    >
      {message}
    </motion.div>
  );
}


