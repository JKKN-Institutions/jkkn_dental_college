'use client';

import { useEffect } from 'react';

export default function MDSProsthodonticsSyllabus() {
  useEffect(() => {
    window.location.replace('/pdf/MDS- PROSTHODONTICS-syllabus.pdf');
  }, []);

  return null;
}
