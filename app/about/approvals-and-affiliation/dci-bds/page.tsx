'use client';

import { useEffect } from 'react';

export default function DCIBDS() {
  useEffect(() => {
    window.location.replace('/pdf/DCI-Permission-letter-bds.pdf');
  }, []);

  return null;
}
