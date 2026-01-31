'use client';

import { useEffect } from 'react';

export default function DCIMDS() {
  useEffect(() => {
    window.location.replace('/pdf/DCI-Permission-letter-mds.pdf');
  }, []);

  return null;
}
