'use client';

import { useEffect } from 'react';

export default function AffiliationMDS() {
  useEffect(() => {
    window.location.replace('/pdf/university-provisional-affiliation-letters-mds.pdf');
  }, []);

  return null;
}
