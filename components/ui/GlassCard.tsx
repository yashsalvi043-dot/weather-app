'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function GlassCard({ children, className = '', delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 25, delay }}
      className={`
        rounded-2xl border border-white/12
        bg-white/8 backdrop-blur-xl
        shadow-[0_8px_32px_rgba(0,0,0,0.2)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
