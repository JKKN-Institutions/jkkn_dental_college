'use client';

import { useEffect } from 'react';

export default function LetterOfUndertaking() {
  useEffect(() => {
    window.location.replace('/pdf/Letter-of-Undertaking-MD.pdf');
  }, []);

  return null;
}
