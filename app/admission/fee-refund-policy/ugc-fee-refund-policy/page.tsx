'use client';

import { useEffect } from 'react';

export default function UGCFeeRefundPolicy() {
  useEffect(() => {
    window.location.replace('/pdf/UGC-Fee-Refund-Policy.pdf');
  }, []);

  return null;
}
