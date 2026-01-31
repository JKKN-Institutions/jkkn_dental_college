'use client';

import { useEffect } from 'react';

export default function ViewDocument() {
  useEffect(() => {
    window.location.replace('/pdf/Capability-Enhancement-Program-ViewDocument.pdf');
  }, []);

  return null;
}
