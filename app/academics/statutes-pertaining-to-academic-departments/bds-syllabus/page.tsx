'use client';

import { useEffect } from 'react';

export default function BDSSyllabus() {
  useEffect(() => {
    window.location.replace('/pdf/BDS-syllabus.pdf');
  }, []);

  return null;
}
