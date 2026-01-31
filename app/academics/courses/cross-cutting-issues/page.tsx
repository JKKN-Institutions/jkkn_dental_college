'use client';

import { useEffect } from 'react';

export default function CrossCuttingIssues() {
  useEffect(() => {
    window.location.replace('/pdf/cross-cutting-issues.pdf');
  }, []);

  return null;
}
