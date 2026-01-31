'use client';

import { useEffect } from 'react';

export default function AcademicAttributes() {
  useEffect(() => {
    window.location.replace('/pdf/Academic-Attributes.pdf');
  }, []);

  return null;
}
