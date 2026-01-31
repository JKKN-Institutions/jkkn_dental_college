'use client';

import { useEffect } from 'react';

export default function PatientSafetyManual() {
  useEffect(() => {
    window.location.replace('/pdf/PATIENT-SAFETY-MANUAL.pdf');
  }, []);

  return null;
}
