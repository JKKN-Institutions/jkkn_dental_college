'use client';

import { useEffect } from 'react';

export default function PlacementCellListOfEvents() {
  useEffect(() => {
    window.location.replace('/pdf/LIST-OF-EVENTS-PLACEMENT-CELL- CDC.pdf');
  }, []);

  return null;
}
