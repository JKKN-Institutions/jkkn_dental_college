'use client';

import { useEffect } from 'react';

export default function ValueAddedCourses() {
  useEffect(() => {
    window.location.replace('/pdf/value-added-course.pdf');
  }, []);

  return null;
}
