'use client';

import { motion } from 'motion/react';
import type { CurrentWeather } from '@/lib/api/types';
import { formatWind } from '@/lib/utils/formatters';
import GlassCard from '@/components/ui/GlassCard';

interface Props {
  current: CurrentWeather;
}

const pills = (c: CurrentWeather) => [
  { label: 'Wind', value: formatWind(c.windSpeed, c.windDirection), icon: '💨' },
  { label: 'Humidity', value: `${c.humidity}%`, icon: '💧' },
  { label: 'Pressure', value: `${Math.round(c.pressure)} hPa`, icon: '🌡' },
  { label: 'Precip', value: `${c.precipitation} mm`, icon: '🌧' },
];

export default function WeatherDetails({ current }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
      {pills(current).map((pill, i) => (
        <motion.div
          key={pill.label}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
        >
          <GlassCard className="p-3 text-center" delay={0}>
            <span className="text-xl">{pill.icon}</span>
            <p className="text-xs uppercase tracking-wider text-white/50 mt-1">{pill.label}</p>
            <p className="text-sm font-semibold mt-0.5">{pill.value}</p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
