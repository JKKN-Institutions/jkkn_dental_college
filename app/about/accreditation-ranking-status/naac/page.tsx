'use client';

import { useEffect } from 'react';

export default function NAAC() {
  useEffect(() => {
    window.location.replace('/pdf/NAAC.pdf');
  }, []);

  return null;
}
