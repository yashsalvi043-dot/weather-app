'use client';

import { useState } from 'react';
import type { TemperatureUnit } from '@/lib/api/types';
import { useWeather } from '@/hooks/useWeather';
import { getWeatherMeta } from '@/lib/utils/weatherCodes';

import BackgroundGradient from '@/components/layout/BackgroundGradient';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SearchBar from '@/components/weather/SearchBar';
import CurrentWeather from '@/components/weather/CurrentWeather';
import ForecastStrip from '@/components/weather/ForecastStrip';
import UnitToggle from '@/components/weather/UnitToggle';
import ErrorToast from '@/components/ui/ErrorToast';
import Skeleton from '@/components/ui/Skeleton';

export default function HomePage() {
  const { status, data, error, fetchByZip, clearError } = useWeather();
  const [unit, setUnit] = useState<TemperatureUnit>('fahrenheit');

  const condition = data
    ? getWeatherMeta(data.current.weatherCode).condition
    : 'sunny';

  const handleSearch = (zip: string) => fetchByZip(zip, unit);

  const handleUnitChange = (u: TemperatureUnit) => {
    setUnit(u);
    if (data) fetchByZip(data.location.zipCode, u);
  };

  return (
    <>
      <BackgroundGradient condition={condition} />
      <ErrorToast message={error} onDismiss={clearError} />

      <div className="min-h-dvh flex flex-col">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">
          <Header />
          <UnitToggle unit={unit} onChange={handleUnitChange} />
        </div>

        <main className="flex-1 flex flex-col items-center px-4 sm:px-6 pt-8 pb-4">
          <SearchBar onSearch={handleSearch} loading={status === 'loading'} />

          {/* Loading skeletons */}
          {status === 'loading' && (
            <div className="w-full max-w-md mx-auto mt-12 space-y-6">
              <div className="flex flex-col items-center gap-4">
                <Skeleton variant="circular" width={80} height={80} />
                <Skeleton variant="text" className="!h-16 !w-48" />
                <Skeleton variant="text" className="!h-5 !w-32" />
                <Skeleton variant="text" className="!h-4 !w-40" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="!h-20" />
                ))}
              </div>
              <div className="flex gap-3 mt-8 overflow-hidden">
                {Array.from({ length: 7 }).map((_, i) => (
                  <Skeleton key={i} className="!h-32 !min-w-[100px] shrink-0" />
                ))}
              </div>
            </div>
          )}

          {/* Weather display */}
          {status === 'success' && data && (
            <>
              <div className="mt-12 w-full max-w-lg">
                <CurrentWeather
                  current={data.current}
                  location={data.location}
                  unit={data.unit}
                />
              </div>
              <ForecastStrip daily={data.daily} unit={data.unit} />
            </>
          )}

          {/* Idle state */}
          {status === 'idle' && (
            <div className="mt-24 text-center text-white/40">
              <p className="text-6xl mb-4">🌤</p>
              <p className="text-lg">Enter a zip code to see the weather</p>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}
