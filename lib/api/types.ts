// ── Geocoding ──
export interface GeoLocation {
  zipCode: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  country: string;
}

export interface ZippopotamResponse {
  'post code': string;
  country: string;
  'country abbreviation': string;
  places: Array<{
    'place name': string;
    longitude: string;
    state: string;
    'state abbreviation': string;
    latitude: string;
  }>;
}

// ── Weather ──
export interface CurrentWeather {
  temperature: number;
  feelsLike: number;
  humidity: number;
  precipitation: number;
  weatherCode: number;
  windSpeed: number;
  windDirection: number;
  pressure: number;
}

export interface DailyForecast {
  date: string;
  weatherCode: number;
  tempMax: number;
  tempMin: number;
  precipitationSum: number;
  windSpeedMax: number;
  uvIndexMax: number;
}

export interface WeatherData {
  location: GeoLocation;
  current: CurrentWeather;
  daily: DailyForecast[];
  unit: TemperatureUnit;
  fetchedAt: string;
}

export type TemperatureUnit = 'fahrenheit' | 'celsius';

export type WeatherCondition =
  | 'sunny'
  | 'cloudy'
  | 'rain'
  | 'snow'
  | 'thunderstorm'
  | 'fog'
  | 'night';

// ── App State ──
export interface WeatherState {
  status: 'idle' | 'loading' | 'success' | 'error';
  data: WeatherData | null;
  error: string | null;
}

// ── Open-Meteo Raw Response ──
export interface OpenMeteoResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  current: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
    weather_code: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    surface_pressure: number;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum: number[];
    wind_speed_10m_max: number[];
    uv_index_max: number[];
  };
}
