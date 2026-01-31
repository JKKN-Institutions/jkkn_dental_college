'use client';

import { useEffect } from 'react';

export default function AffiliationBDS() {
  useEffect(() => {
    window.location.replace('/pdf/university-provisional-affiliation-letters-bds.pdf');
  }, []);

  return null;
}
