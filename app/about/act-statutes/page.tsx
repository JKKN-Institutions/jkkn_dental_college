'use client';

import { useEffect } from 'react';

export default function ActStatutes() {
  useEffect(() => {
    window.location.replace('/pdf/acts-and-statutes.pdf');
  }, []);

  return null;
}
