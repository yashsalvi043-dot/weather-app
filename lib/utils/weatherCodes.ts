import type { WeatherCondition } from '@/lib/api/types';

interface WeatherMeta {
  label: string;
  icon: string;
  condition: WeatherCondition;
}

const WMO: Record<number, WeatherMeta> = {
  0: { label: 'Clear Sky', icon: '\u2600\uFE0F', condition: 'sunny' },
  1: { label: 'Mainly Clear', icon: '\uD83C\uDF24', condition: 'sunny' },
  2: { label: 'Partly Cloudy', icon: '\u26C5', condition: 'cloudy' },
  3: { label: 'Overcast', icon: '\u2601\uFE0F', condition: 'cloudy' },
  45: { label: 'Fog', icon: '\uD83C\uDF2B', condition: 'fog' },
  48: { label: 'Rime Fog', icon: '\uD83C\uDF2B', condition: 'fog' },
  51: { label: 'Light Drizzle', icon: '\uD83C\uDF26', condition: 'rain' },
  53: { label: 'Drizzle', icon: '\uD83C\uDF26', condition: 'rain' },
  55: { label: 'Dense Drizzle', icon: '\uD83C\uDF27', condition: 'rain' },
  61: { label: 'Slight Rain', icon: '\uD83C\uDF27', condition: 'rain' },
  63: { label: 'Moderate Rain', icon: '\uD83C\uDF27', condition: 'rain' },
  65: { label: 'Heavy Rain', icon: '\uD83C\uDF27', condition: 'rain' },
  66: { label: 'Freezing Rain', icon: '\uD83C\uDF27', condition: 'rain' },
  67: { label: 'Heavy Freezing Rain', icon: '\uD83C\uDF27', condition: 'rain' },
  71: { label: 'Slight Snow', icon: '\uD83C\uDF28', condition: 'snow' },
  73: { label: 'Moderate Snow', icon: '\u2744\uFE0F', condition: 'snow' },
  75: { label: 'Heavy Snow', icon: '\u2744\uFE0F', condition: 'snow' },
  77: { label: 'Snow Grains', icon: '\u2744\uFE0F', condition: 'snow' },
  80: { label: 'Rain Showers', icon: '\uD83C\uDF26', condition: 'rain' },
  81: { label: 'Moderate Showers', icon: '\uD83C\uDF27', condition: 'rain' },
  82: { label: 'Violent Showers', icon: '\uD83C\uDF27', condition: 'rain' },
  85: { label: 'Snow Showers', icon: '\uD83C\uDF28', condition: 'snow' },
  86: { label: 'Heavy Snow Showers', icon: '\uD83C\uDF28', condition: 'snow' },
  95: { label: 'Thunderstorm', icon: '\u26C8\uFE0F', condition: 'thunderstorm' },
  96: { label: 'Thunderstorm + Hail', icon: '\u26C8\uFE0F', condition: 'thunderstorm' },
  99: { label: 'Severe Thunderstorm', icon: '\u26C8\uFE0F', condition: 'thunderstorm' },
};

const FALLBACK: WeatherMeta = { label: 'Unknown', icon: '\u2753', condition: 'cloudy' };

export function getWeatherMeta(code: number): WeatherMeta {
  return WMO[code] ?? FALLBACK;
}

export function getGradientVar(condition: WeatherCondition): string {
  return `var(--gradient-${condition})`;
}
