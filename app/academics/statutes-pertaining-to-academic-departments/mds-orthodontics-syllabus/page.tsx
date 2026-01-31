'use client';

import { useEffect } from 'react';

export default function MDSOrthodonticsSyllabus() {
  useEffect(() => {
    window.location.replace('/pdf/MDS-ORTHODONTICS-Syllabus.pdf');
  }, []);

  return null;
}
