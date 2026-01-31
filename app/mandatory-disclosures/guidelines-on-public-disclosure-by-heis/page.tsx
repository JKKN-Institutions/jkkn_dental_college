'use client';

import { useEffect } from 'react';

export default function GuidelinesOnPublicDisclosure() {
  useEffect(() => {
    window.location.replace('/pdf/Guidelines-on-Public-Disclosure-by-HEIs-MD.pdf');
  }, []);

  return null;
}
