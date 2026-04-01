import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <footer className="py-6 text-center">
      <Typography variant="caption" className="!text-white/40">
        Powered by{' '}
        <a
          href="https://open-meteo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white/60 transition-colors"
        >
          Open-Meteo
        </a>
        {' '}&middot; Weather data from national weather services
      </Typography>
    </footer>
  );
}
