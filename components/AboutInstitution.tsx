import Link from 'next/link';

export default function AboutInstitution() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/college-building.jpg"
                alt="JKKN Dental College Building"
                className="w-full h-auto object-cover"
              />
              {/* 100 Years Legacy Badge */}
              <div className="absolute bottom-6 right-6 bg-[#FF6B35] text-white rounded-2xl p-6 shadow-2xl">
                <div className="text-5xl md:text-6xl font-bold text-center">100</div>
                <div className="text-sm font-bold uppercase tracking-wide text-center">Years Legacy</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="mb-4">
              <h3 className="text-[#FF6B35] text-sm md:text-base font-bold uppercase tracking-wider">About Our Institution</h3>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A4D5C] mb-6">
              A Century of Excellence in Progressive Education
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
              J.K.K. Nattraja Dental College is a premier dental institution under J.K.K. Nattraja Educational Institutions (JKKN), founded on the vision of Founder J.K.K. Nataraja Chettiar (1895-1995).
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              Located in Komarapalayam, Namakkal District, Tamil Nadu, our dental college offers an ideal environment for focused learning. Affiliated with The Tamil Nadu Dr. M.G.R. Medical University and approved by DCI, we produce competent dental professionals.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="text-[#4CAF50] text-xl flex-shrink-0">✓</div>
                <div className="text-gray-700 font-medium">DCI & NMC Approved</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#4CAF50] text-xl flex-shrink-0">✓</div>
                <div className="text-gray-700 font-medium">NAAC Accredited</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#4CAF50] text-xl flex-shrink-0">✓</div>
                <div className="text-gray-700 font-medium">200+ Dental Chairs</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#4CAF50] text-xl flex-shrink-0">✓</div>
                <div className="text-gray-700 font-medium">500+ Daily Patients</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#4CAF50] text-xl flex-shrink-0">✓</div>
                <div className="text-gray-700 font-medium">9 PG Specializations</div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#4CAF50] text-xl flex-shrink-0">✓</div>
                <div className="text-gray-700 font-medium">100% Placement</div>
              </div>
            </div>

            <Link
              href="/academics"
              className="inline-block bg-[#FF6B35] hover:bg-[#FF5722] text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              Explore Programs →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
