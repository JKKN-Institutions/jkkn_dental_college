'use client';

import { useState } from 'react';
import { siteContent } from '@/data/content';

export default function EducationVideos() {
  const [selectedVideo, setSelectedVideo] = useState(0);

  return (
    <section className="py-16 bg-cream">
      <div className="container-custom">
        <h2 className="section-heading mb-12">{siteContent.videos.heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-black aspect-video rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <svg
                  className="w-20 h-20 mx-auto mb-4 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                <p className="opacity-50">Video Player</p>
              </div>
            </div>
          </div>

          {/* Video Playlist */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-4 shadow-lg max-h-[500px] overflow-y-auto">
              <h3 className="font-bold text-lg text-primary mb-4">Recently Uploaded</h3>
              <div className="space-y-4">
                {siteContent.videos.playlist.map((video, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedVideo(index)}
                    className={`flex gap-3 cursor-pointer p-2 rounded transition-colors ${
                      selectedVideo === index ? 'bg-cream' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="w-24 h-16 bg-primary rounded flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800 line-clamp-2">
                        {video.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">JKKN Dental</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
