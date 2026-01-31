'use client';

import { useEffect } from 'react';

export default function AntiRaggingCommitteeMembers() {
  useEffect(() => {
    window.location.replace('/pdf/ANTI-RAGGING-COMMITTEE-ViewCommitteeMembers.pdf');
  }, []);

  return null;
}
