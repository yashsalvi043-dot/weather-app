import { NextRequest, NextResponse } from 'next/server';
import { geocodeZip } from '@/lib/api/geocode';
import { fetchWeather } from '@/lib/api/weather';
import { isValidZip } from '@/lib/utils/validators';
import type { TemperatureUnit, WeatherData } from '@/lib/api/types';

export async function GET(req: NextRequest) {
  const zip = req.nextUrl.searchParams.get('zip');
  const unit = (req.nextUrl.searchParams.get('unit') ?? 'fahrenheit') as TemperatureUnit;

  if (!zip || !isValidZip(zip)) {
    return NextResponse.json(
      { error: 'Invalid zip code. Provide a 5-digit US zip.' },
      { status: 400 },
    );
  }

  try {
    const location = await geocodeZip(zip);
    const { current, daily } = await fetchWeather(
      location.latitude,
      location.longitude,
      unit,
    );

    const data: WeatherData = {
      location,
      current,
      daily,
      unit,
      fetchedAt: new Date().toISOString(),
    };

    return NextResponse.json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    const status = message.includes('not found') ? 404 : 502;
    return NextResponse.json({ error: message }, { status });
  }
}
