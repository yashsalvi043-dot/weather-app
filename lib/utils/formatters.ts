import type { TemperatureUnit } from '@/lib/api/types';

export function formatTemp(val: number, unit: TemperatureUnit): string {
  return `${Math.round(val)}\u00B0${unit === 'fahrenheit' ? 'F' : 'C'}`;
}

export function formatDay(dateStr: string): string {
  return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(
    new Date(dateStr + 'T00:00:00'),
  );
}

export function formatFullDate(dateStr: string): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateStr + 'T00:00:00'));
}

export function formatWind(speed: number, direction: number): string {
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const idx = Math.round(direction / 45) % 8;
  return `${Math.round(speed)} mph ${dirs[idx]}`;
}
