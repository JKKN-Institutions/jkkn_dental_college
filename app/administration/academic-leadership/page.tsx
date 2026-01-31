'use client';

import { useEffect } from 'react';

export default function AcademicLeadership() {
  useEffect(() => {
    window.location.replace('/pdf/Academic-Leadership.pdf');
  }, []);

  return null;
}
