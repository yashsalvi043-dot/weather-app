'use client';

import type { DailyForecast, TemperatureUnit } from '@/lib/api/types';
import ForecastCard from './ForecastCard';

interface Props {
  daily: DailyForecast[];
  unit: TemperatureUnit;
}

export default function ForecastStrip({ daily, unit }: Props) {
  return (
    <section className="w-full max-w-3xl mx-auto mt-10">
      <h2 className="text-sm uppercase tracking-wider text-white/50 mb-4 px-2">
        7-Day Forecast
      </h2>
      <div className="flex gap-3 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-hide">
        {daily.map((d, i) => (
          <div key={d.date} className="snap-start shrink-0">
            <ForecastCard forecast={d} unit={unit} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
