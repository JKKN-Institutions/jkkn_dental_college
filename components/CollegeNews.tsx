'use client';

import { siteContent } from '@/data/content';

export default function CollegeNews() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-heading mb-12">{siteContent.news.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.news.items.map((newsItem, index) => (
            <div key={index} className="card overflow-hidden group cursor-pointer">
              {/* Image Placeholder */}
              <div className="h-56 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white/50 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-sm text-center px-4">
                    {newsItem.title}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                  {newsItem.title}
                </h3>
                <p className="text-sm text-gray-500">{newsItem.date}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full transition-colors">
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
          <button className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full transition-colors">
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
    </section>
  );
}
