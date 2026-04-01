'use client';

import { motion } from 'motion/react';
import Typography from '@mui/material/Typography';
import type { DailyForecast, TemperatureUnit } from '@/lib/api/types';
import { formatDay, formatTemp } from '@/lib/utils/formatters';
import { getWeatherMeta } from '@/lib/utils/weatherCodes';
import GlassCard from '@/components/ui/GlassCard';

interface Props {
  forecast: DailyForecast;
  unit: TemperatureUnit;
  index: number;
}

export default function ForecastCard({ forecast, unit, index }: Props) {
  const meta = getWeatherMeta(forecast.weatherCode);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.08, type: 'spring', stiffness: 200, damping: 20 }}
    >
      <GlassCard className="p-4 min-w-[100px] text-center flex flex-col items-center gap-1" delay={0}>
        <Typography variant="caption" className="!text-white/60">
          {index === 0 ? 'Today' : formatDay(forecast.date)}
        </Typography>
        <span className="text-3xl my-1">{meta.icon}</span>
        <Typography variant="body1" className="!font-bold !text-sm">
          {formatTemp(forecast.tempMax, unit)}
        </Typography>
        <Typography variant="body1" className="!text-white/50 !text-xs">
          {formatTemp(forecast.tempMin, unit)}
        </Typography>
      </GlassCard>
    </motion.div>
  );
}
