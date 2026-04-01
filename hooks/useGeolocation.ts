'use client';

import { useCallback, useState } from 'react';

interface GeoState {
  loading: boolean;
  error: string | null;
  coords: { lat: number; lon: number } | null;
}

export function useGeolocation() {
  const [state, setState] = useState<GeoState>({
    loading: false,
    error: null,
    coords: null,
  });

  const request = useCallback(() => {
    if (!navigator.geolocation) {
      setState({ loading: false, error: 'Geolocation not supported.', coords: null });
      return;
    }

    setState({ loading: true, error: null, coords: null });

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setState({
          loading: false,
          error: null,
          coords: { lat: pos.coords.latitude, lon: pos.coords.longitude },
        });
      },
      (err) => {
        const msg =
          err.code === 1 ? 'Location access denied.' : 'Unable to get your location.';
        setState({ loading: false, error: msg, coords: null });
      },
      { enableHighAccuracy: false, timeout: 8000 },
    );
  }, []);

  return { ...state, request };
}
