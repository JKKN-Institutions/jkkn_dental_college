'use client';

import { useEffect } from 'react';

export default function AlumniAssociationActivities() {
  useEffect(() => {
    window.location.replace('/pdf/ALUMNI-ASSOCIATION-ACTIVITIES.pdf');
  }, []);

  return null;
}
