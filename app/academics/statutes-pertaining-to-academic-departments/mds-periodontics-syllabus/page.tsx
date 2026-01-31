'use client';

import { useEffect } from 'react';

export default function MDSPeriodonticsSyllabus() {
  useEffect(() => {
    window.location.replace('/pdf/MDS-PERIODONTICS-Syllabus.pdf');
  }, []);

  return null;
}
