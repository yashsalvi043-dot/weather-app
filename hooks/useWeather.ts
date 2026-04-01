'use client';

import { useCallback, useReducer } from 'react';
import type { TemperatureUnit, WeatherData, WeatherState } from '@/lib/api/types';

type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: WeatherData }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'RESET' };

function reducer(state: WeatherState, action: Action): WeatherState {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, status: 'loading', error: null };
    case 'FETCH_SUCCESS':
      return { status: 'success', data: action.payload, error: null };
    case 'FETCH_ERROR':
      return { ...state, status: 'error', error: action.payload };
    case 'RESET':
      return { status: 'idle', data: null, error: null };
    default:
      return state;
  }
}

export function useWeather() {
  const [state, dispatch] = useReducer(reducer, {
    status: 'idle',
    data: null,
    error: null,
  });

  const fetchByZip = useCallback(async (zip: string, unit: TemperatureUnit = 'fahrenheit') => {
    dispatch({ type: 'FETCH_START' });
    try {
      const res = await fetch(`/api/weather?zip=${zip}&unit=${unit}`);
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? `Request failed (${res.status})`);
      }
      const data: WeatherData = await res.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (e) {
      dispatch({
        type: 'FETCH_ERROR',
        payload: e instanceof Error ? e.message : 'Something went wrong.',
      });
    }
  }, []);

  const clearError = useCallback(() => {
    dispatch({ type: 'FETCH_ERROR', payload: '' });
  }, []);

  return { ...state, fetchByZip, clearError };
}
