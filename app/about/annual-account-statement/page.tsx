'use client';

import { useEffect } from 'react';

export default function AnnualAccountStatement() {
  useEffect(() => {
    window.location.replace('/pdf/ANNUAL-ACCOUNTS-STATEMENT.pdf');
  }, []);

  return null;
}
