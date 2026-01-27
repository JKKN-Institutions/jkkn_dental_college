import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-[#0A4D5C] text-white py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0D5F6F] px-4 py-2 rounded-full mb-6 md:mb-8">
              <span className="text-yellow-400 text-xl">🏆</span>
              <span className="text-white text-sm font-semibold">DCI Approved | NAAC Accredited</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Transform Your Future at{' '}
              <span className="text-[#FF6B35]">Tamil Nadu's Premier Dental College</span>
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed">
              Join J.K.K. Nattraja Dental College — where world-class dental education meets compassionate patient care. Our DCI-approved programs prepare Learners for exceptional careers in dentistry.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 md:gap-12 mb-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#FF6B35]">500+</div>
                <div className="text-sm text-gray-300 uppercase">Learners</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#FF6B35]">200+</div>
                <div className="text-sm text-gray-300 uppercase">Dental Chairs</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#FF6B35]">100%</div>
                <div className="text-sm text-gray-300 uppercase">Placement</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/admissions"
                className="bg-[#FF6B35] hover:bg-[#FF5722] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
              >
                Start Your Application →
              </Link>
              <Link
                href="/academics"
                className="border-2 border-white hover:bg-white hover:text-[#0A4D5C] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
              >
                Explore Programs
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src="/images/dental-xray.jpg"
                alt="Dental Professional"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Recognized & Approved By Section */}
        <div className="mt-16 md:mt-20">
          <div className="text-center mb-8">
            <h3 className="text-sm md:text-base text-gray-400 uppercase tracking-wider">Recognized & Approved By</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            <img src="/images/affiliations/dci.png" alt="Dental Council of India" className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all" />
            <img src="/images/affiliations/nmc.png" alt="National Medical Commission" className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all" />
            <img src="/images/affiliations/naac.png" alt="NAAC Accreditation" className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all" />
            <img src="/images/affiliations/mgr-university.png" alt="Tamil Nadu Dr. MGR Medical University" className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
}
