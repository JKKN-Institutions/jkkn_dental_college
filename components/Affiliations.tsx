import { siteContent } from '@/data/content';

export default function Affiliations() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-heading text-center mb-12">
          {siteContent.affiliations.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {siteContent.affiliations.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                  {item.type}
                </p>
                <div className="w-40 h-40 bg-cream rounded-full flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-primary">
                    <span className="text-primary font-bold text-xs text-center px-2">
                      {item.title.substring(0, 20)}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mt-4">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
