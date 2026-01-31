'use client';

import { useEffect } from 'react';

export default function InternalCompliantsCommittee() {
  useEffect(() => {
    window.location.replace('/pdf/Internal-Compliance-committee.pdf');
  }, []);

  return null;
}
