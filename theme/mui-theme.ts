'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#4A90D9' },
    secondary: { main: '#FFD700' },
    background: {
      default: 'transparent',
      paper: 'rgba(255, 255, 255, 0.08)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: 'var(--font-inter), sans-serif',
    h1: { fontSize: '4.5rem', fontWeight: 700, lineHeight: 1 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1.25rem', fontWeight: 500 },
    body1: { fontSize: '1rem', fontWeight: 400 },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.1em',
    },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiCssBaseline: {
      styleOverrides: { body: { background: 'transparent' } },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none' as const,
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.15)' },
            '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
            '&.Mui-focused fieldset': { borderColor: '#4A90D9' },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

export default theme;
