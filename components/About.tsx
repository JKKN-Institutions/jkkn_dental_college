import { siteContent } from '@/data/content';

export default function About() {
  return (
    <section className="py-16 bg-cream">
      <div className="container-custom">
        <h2 className="section-heading mb-8">
          {siteContent.about.heading}
        </h2>
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {siteContent.about.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
