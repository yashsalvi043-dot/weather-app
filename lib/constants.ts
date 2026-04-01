import type { WeatherCondition } from './api/types';

export const WEATHER_GRADIENTS: Record<WeatherCondition, { from: string; to: string }> = {
  sunny: { from: '#4A90D9', to: '#87CEEB' },
  cloudy: { from: '#8E9EAB', to: '#B8C6DB' },
  rain: { from: '#373B44', to: '#4286F4' },
  snow: { from: '#E6DADA', to: '#274046' },
  thunderstorm: { from: '#0F2027', to: '#2C5364' },
  fog: { from: '#757F9A', to: '#D7DDE8' },
  night: { from: '#0F0C29', to: '#302B63' },
};

export const WEATHER_ACCENTS: Record<WeatherCondition, string> = {
  sunny: '#FFD700',
  cloudy: '#6B7B8D',
  rain: '#5CA0D3',
  snow: '#B0C4DE',
  thunderstorm: '#E0E722',
  fog: '#9BA4B4',
  night: '#F5F5DC',
};
