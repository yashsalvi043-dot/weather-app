'use client';

import { motion } from 'motion/react';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="flex items-center gap-2"
    >
      <span className="text-2xl">⛅</span>
      <Typography variant="h2" component="h1" className="!text-xl !font-bold tracking-tight">
        SkyPulse
      </Typography>
    </motion.header>
  );
}
