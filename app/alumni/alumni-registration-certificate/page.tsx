'use client';

import { useEffect } from 'react';

export default function AlumniRegistrationCertificate() {
  useEffect(() => {
    window.location.replace('/pdf/ALUMNI-Registration-Certificate.pdf');
  }, []);

  return null;
}
