import { siteContent } from '@/data/content';

export default function EventsStories() {
  return (
    <section className="py-12 bg-cream">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-heading">{siteContent.eventsStories.heading}</h2>
          <button className="bg-accent hover:bg-accent/80 text-white p-2 rounded-full transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <p className="text-gray-500">No events available at this time</p>
        </div>
      </div>
    </section>
  );
}
