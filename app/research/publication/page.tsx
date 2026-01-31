'use client';

import { useEffect } from 'react';

export default function Publication() {
  useEffect(() => {
    window.location.replace('/pdf/Publication-TEMPLATE.pdf');
  }, []);

  return null;
}
