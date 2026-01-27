export default function OurInstitutionsSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        {/* Heading - Exact match to screenshot with green color */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 md:mb-8 text-left uppercase tracking-wide">
          OUR INSTITUTIONS
        </h1>

        {/* Main Image - Full width with proper aspect ratio */}
        <div className="relative w-full overflow-hidden shadow-lg">
          <img
            src="/images/our-institutions.jpg"
            alt="JKKN Educational Institutions Campus"
            className="w-full h-auto object-cover"
            style={{ maxHeight: '700px', minHeight: '400px' }}
          />
        </div>
      </div>
    </section>
  );
}
