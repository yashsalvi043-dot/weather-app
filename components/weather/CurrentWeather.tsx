'use client';

import { motion } from 'motion/react';
import Typography from '@mui/material/Typography';
import type { CurrentWeather as CW, GeoLocation, TemperatureUnit } from '@/lib/api/types';
import { formatTemp } from '@/lib/utils/formatters';
import { getWeatherMeta } from '@/lib/utils/weatherCodes';
import WeatherDetails from './WeatherDetails';

interface Props {
  current: CW;
  location: GeoLocation;
  unit: TemperatureUnit;
}

export default function CurrentWeather({ current, location, unit }: Props) {
  const meta = getWeatherMeta(current.weatherCode);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 22, delay: 0.2 }}
      className="text-center"
    >
      {/* Animated weather icon */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="text-7xl sm:text-8xl mb-4"
      >
        {meta.icon}
      </motion.div>

      {/* Temperature */}
      <Typography variant="h1" className="!leading-none !mb-1">
        {formatTemp(current.temperature, unit)}
      </Typography>

      {/* Feels like */}
      <Typography variant="body1" className="!text-white/60 !mb-1">
        Feels like {formatTemp(current.feelsLike, unit)}
      </Typography>

      {/* Condition */}
      <Typography variant="h3" className="!text-white/80 !mb-2">
        {meta.label}
      </Typography>

      {/* Location */}
      <Typography variant="body1" className="!text-white/50 !mb-8">
        {location.city}, {location.state} {location.zipCode}
      </Typography>

      {/* Detail pills */}
      <WeatherDetails current={current} />
    </motion.div>
  );
}
