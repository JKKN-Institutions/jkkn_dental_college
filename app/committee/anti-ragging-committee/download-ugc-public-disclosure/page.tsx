'use client';

import { useEffect } from 'react';

export default function AntiRaggingUGCPublicDisclosure() {
  useEffect(() => {
    window.location.replace('/pdf/ANTI-RAGGING-COMMITTEE-PublicDisclosures.pdf');
  }, []);

  return null;
}
