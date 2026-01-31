'use client';

import { useEffect } from 'react';

export default function AnnualReport() {
  useEffect(() => {
    window.location.replace('/pdf/ANNUAL-REPORT.pdf');
  }, []);

  return null;
}
