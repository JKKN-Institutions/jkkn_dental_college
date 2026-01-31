'use client';

import { useEffect } from 'react';

export default function BarrierFreeEnvironment() {
  useEffect(() => {
    window.location.replace('/pdf/Barrier-free-environment.pdf');
  }, []);

  return null;
}
