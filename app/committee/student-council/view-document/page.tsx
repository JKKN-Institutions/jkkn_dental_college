'use client';

import { useEffect } from 'react';

export default function StudentCouncilViewDocument() {
  useEffect(() => {
    window.location.replace('/pdf/Student-Council-ViewDocument.pdf');
  }, []);

  return null;
}
