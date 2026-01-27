import { siteContent } from '@/data/content';

export default function OurCollege() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-heading text-center mb-12">
          {siteContent.ourCollege.heading}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-32 h-32 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-4xl">BDS</span>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">
              {siteContent.ourCollege.program.title}
            </h3>
            <p className="text-gray-600 max-w-md">
              {siteContent.ourCollege.program.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
