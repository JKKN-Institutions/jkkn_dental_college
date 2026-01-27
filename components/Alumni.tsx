import { siteContent } from '@/data/content';

export default function Alumni() {
  return (
    <section className="py-16 bg-cream">
      <div className="container-custom">
        <h2 className="section-heading text-center mb-12">
          {siteContent.alumni.heading}
        </h2>
        <div className="bg-white p-12 rounded-lg shadow-lg">
          <p className="text-center text-gray-500">
            Alumni information will be displayed here
          </p>
        </div>
        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(10)].map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === 0 ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
