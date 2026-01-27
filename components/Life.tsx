import { siteContent } from '@/data/content';

export default function Life() {
  return (
    <section className="py-16 bg-cream">
      <div className="container-custom">
        <h2 className="section-heading mb-12">{siteContent.life.heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-primary to-accent h-96 rounded-lg shadow-xl flex items-center justify-center">
              <span className="text-white/30 text-2xl">Life @ JKKN Image</span>
            </div>
          </div>
          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>{siteContent.life.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
