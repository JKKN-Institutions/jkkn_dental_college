'use client';

import { useEffect } from 'react';

export default function SDGInstitution() {
  useEffect(() => {
    window.location.replace('/pdf/NIRF-2025-SDG-INSTITUTIONS.pdf');
  }, []);

  return null;
}
