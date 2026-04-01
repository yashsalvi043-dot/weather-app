'use client';

import { motion } from 'motion/react';
import type { TemperatureUnit } from '@/lib/api/types';

interface Props {
  unit: TemperatureUnit;
  onChange: (u: TemperatureUnit) => void;
}

export default function UnitToggle({ unit, onChange }: Props) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-white/10 p-1 relative">
      <motion.div
        layout
        className="absolute h-[calc(100%-8px)] w-[calc(50%-2px)] rounded-full bg-white/20"
        style={{ left: unit === 'fahrenheit' ? 4 : '50%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
      {(['fahrenheit', 'celsius'] as TemperatureUnit[]).map((u) => (
        <button
          key={u}
          onClick={() => onChange(u)}
          className={`relative z-10 px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
            unit === u ? 'text-white' : 'text-white/50'
          }`}
        >
          &deg;{u === 'fahrenheit' ? 'F' : 'C'}
        </button>
      ))}
    </div>
  );
}
