'use client';

import type { WeatherCondition } from '@/lib/api/types';

interface Props {
  condition: WeatherCondition;
}

const GRADIENTS: Record<WeatherCondition, string> = {
  sunny: 'from-sky-500 to-blue-300',
  cloudy: 'from-slate-500 to-slate-300',
  rain: 'from-slate-800 to-blue-600',
  snow: 'from-slate-200 to-cyan-900',
  thunderstorm: 'from-slate-900 to-cyan-800',
  fog: 'from-slate-500 to-slate-300',
  night: 'from-indigo-950 to-purple-900',
};

export default function BackgroundGradient({ condition }: Props) {
  return (
    <div
      className={`fixed inset-0 -z-10 bg-gradient-to-br transition-all duration-1000 ${GRADIENTS[condition]}`}
    />
  );
}
