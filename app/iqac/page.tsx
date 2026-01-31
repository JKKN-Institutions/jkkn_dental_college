'use client';

import { useEffect } from 'react';

export default function IQAC() {
  useEffect(() => {
    window.location.replace('/pdf/IQAC.pdf');
  }, []);

  return null;
}
