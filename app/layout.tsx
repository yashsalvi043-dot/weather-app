import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/mui-theme';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SkyPulse — Live Weather',
  description: 'Beautiful, animated weather forecasts by zip code. Powered by Open-Meteo.',
  keywords: ['weather', 'forecast', 'zip code', 'temperature', 'SkyPulse'],
  openGraph: {
    title: 'SkyPulse — Live Weather',
    description: 'Enter a US zip code for instant current conditions and 7-day forecast.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkyPulse — Live Weather',
    description: 'Enter a US zip code for instant current conditions and 7-day forecast.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
