import type {
  CurrentWeather,
  DailyForecast,
  OpenMeteoResponse,
  TemperatureUnit,
} from './types';

const BASE = 'https://api.open-meteo.com/v1/forecast';

export async function fetchWeather(
  lat: number,
  lon: number,
  unit: TemperatureUnit = 'fahrenheit',
): Promise<{ current: CurrentWeather; daily: DailyForecast[] }> {
  const params = new URLSearchParams({
    latitude: lat.toString(),
    longitude: lon.toString(),
    current: [
      'temperature_2m',
      'relative_humidity_2m',
      'apparent_temperature',
      'precipitation',
      'weather_code',
      'wind_speed_10m',
      'wind_direction_10m',
      'surface_pressure',
    ].join(','),
    daily: [
      'weather_code',
      'temperature_2m_max',
      'temperature_2m_min',
      'precipitation_sum',
      'wind_speed_10m_max',
      'uv_index_max',
    ].join(','),
    temperature_unit: unit,
    wind_speed_unit: 'mph',
    timezone: 'auto',
    forecast_days: '7',
  });

  const res = await fetch(`${BASE}?${params}`, {
    next: { revalidate: 900 }, // Cache weather for 15 min
  });

  if (!res.ok) throw new Error('Weather service unavailable.');

  const raw: OpenMeteoResponse = await res.json();

  const current: CurrentWeather = {
    temperature: raw.current.temperature_2m,
    feelsLike: raw.current.apparent_temperature,
    humidity: raw.current.relative_humidity_2m,
    precipitation: raw.current.precipitation,
    weatherCode: raw.current.weather_code,
    windSpeed: raw.current.wind_speed_10m,
    windDirection: raw.current.wind_direction_10m,
    pressure: raw.current.surface_pressure,
  };

  const daily: DailyForecast[] = raw.daily.time.map((date, i) => ({
    date,
    weatherCode: raw.daily.weather_code[i],
    tempMax: raw.daily.temperature_2m_max[i],
    tempMin: raw.daily.temperature_2m_min[i],
    precipitationSum: raw.daily.precipitation_sum[i],
    windSpeedMax: raw.daily.wind_speed_10m_max[i],
    uvIndexMax: raw.daily.uv_index_max[i],
  }));

  return { current, daily };
}
