import { siteContent } from '@/data/content';

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-heading text-center mb-12">
          {siteContent.partners.heading}
        </h2>
        <div className="bg-cream p-12 rounded-lg">
          <p className="text-center text-gray-500">
            Partner logos will be displayed here
          </p>
        </div>
      </div>
    </section>
  );
}
