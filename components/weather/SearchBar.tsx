'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { isValidZip } from '@/lib/utils/validators';

interface SearchBarProps {
  onSearch: (zip: string) => void;
  loading: boolean;
}

export default function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [zip, setZip] = useState('');
  const [touched, setTouched] = useState(false);

  const isInvalid = touched && zip.length > 0 && !isValidZip(zip);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isValidZip(zip)) onSearch(zip.trim());
    else setTouched(true);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, scaleX: 0.8 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
      className="w-full max-w-md mx-auto"
    >
      <TextField
        fullWidth
        value={zip}
        onChange={(e) => {
          const v = e.target.value.replace(/\D/g, '').slice(0, 6);
          setZip(v);
          if (touched && isValidZip(v)) setTouched(false);
        }}
        onBlur={() => setTouched(true)}
        placeholder="Enter zip/pin code (e.g. 02101, 400001)"
        error={isInvalid}
        helperText={isInvalid ? 'Enter a valid 5-digit US zip or 6-digit India pin' : ' '}
        disabled={loading}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  disabled={loading || !isValidZip(zip)}
                  className="!text-white/70"
                  aria-label="Search weather"
                >
                  {loading ? (
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <span className="text-lg">🔍</span>
                  )}
                </IconButton>
              </InputAdornment>
            ),
          },
          htmlInput: {
            inputMode: 'numeric' as const,
            pattern: '[0-9]*',
            maxLength: 6,
            'aria-label': 'Zip code',
          },
        }}
      />
    </motion.form>
  );
}
