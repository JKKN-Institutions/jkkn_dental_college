'use client';

import { useState } from 'react';
import { siteContent } from '@/data/content';

export default function Announcements() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAnnouncement = () => {
    setCurrentIndex((prev) =>
      prev === siteContent.announcements.length - 1 ? 0 : prev + 1
    );
  };

  const prevAnnouncement = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? siteContent.announcements.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-accent py-4">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="bg-primary text-white px-6 py-2 font-bold rounded">
              ANNOUNCEMENT
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold">
                {siteContent.announcements[currentIndex]?.text || 'Admission Available'}
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prevAnnouncement}
              className="text-white hover:text-primary transition-colors"
              aria-label="Previous announcement"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextAnnouncement}
              className="text-white hover:text-primary transition-colors"
              aria-label="Next announcement"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
