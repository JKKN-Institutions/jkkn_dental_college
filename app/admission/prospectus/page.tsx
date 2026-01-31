'use client';

import { useEffect } from 'react';

export default function Prospectus() {
  useEffect(() => {
    window.location.replace('/pdf/Prospectus.pdf');
  }, []);

  return null;
}
