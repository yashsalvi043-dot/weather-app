'use client';

import { AnimatePresence, motion } from 'motion/react';

interface ErrorToastProps {
  message: string | null;
  onDismiss: () => void;
}

export default function ErrorToast({ message, onDismiss }: ErrorToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed top-6 left-1/2 z-50 -translate-x-1/2
            rounded-xl border border-red-500/30 bg-red-950/80
            backdrop-blur-lg px-6 py-3 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <span className="text-red-400 text-sm font-medium">{message}</span>
            <button
              onClick={onDismiss}
              className="text-red-400/60 hover:text-red-300 transition-colors ml-2"
              aria-label="Dismiss error"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
