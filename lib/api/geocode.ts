import type { GeoLocation, ZippopotamResponse } from './types';

const ZIPPOPOTAM_US = 'https://api.zippopotam.us/us';
const ZIPPOPOTAM_IN = 'https://api.zippopotam.us/in';
const GEOCODING_BASE = 'https://geocoding-api.open-meteo.com/v1/search';

export async function geocodeZip(zip: string): Promise<GeoLocation> {
  const base = zip.length === 6 ? ZIPPOPOTAM_IN : ZIPPOPOTAM_US;
  const res = await fetch(`${base}/${zip}`, {
    next: { revalidate: 86400 }, // Cache zip lookups for 24h
  });

  if (!res.ok) {
    if (res.status === 404) throw new Error(`Zip code "${zip}" not found.`);
    throw new Error('Geocoding service unavailable.');
  }

  const data: ZippopotamResponse = await res.json();
  const place = data.places[0];

  return {
    zipCode: data['post code'],
    city: place['place name'],
    state: place.state,
    latitude: parseFloat(place.latitude),
    longitude: parseFloat(place.longitude),
    country: data['country abbreviation'],
  };
}

export async function geocodeCity(query: string): Promise<GeoLocation[]> {
  const res = await fetch(
    `${GEOCODING_BASE}?name=${encodeURIComponent(query)}&count=5&language=en&format=json`,
  );

  if (!res.ok) throw new Error('City search unavailable.');
  const data = await res.json();

  return (data.results ?? []).map((r: Record<string, unknown>) => ({
    zipCode: '',
    city: r.name as string,
    state: (r.admin1 as string) ?? '',
    latitude: r.latitude as number,
    longitude: r.longitude as number,
    country: r.country_code as string,
  }));
}
