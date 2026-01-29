import Link from 'next/link';

export default function AcademicPrograms() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[#FBFBEE]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h3 className="text-[#7cb983] text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider mb-3 sm:mb-4">Academic Programs</h3>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-[#006837] mb-4 sm:mb-6 leading-tight">
            Comprehensive Dental Education Programs
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Choose from our DCI-approved undergraduate and postgraduate dental programs designed to shape competent, compassionate dental professionals.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 md:mb-20">
          {/* BDS Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Card Header */}
            <div className="bg-[#006837] text-white p-6 sm:p-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#002309] rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🦷</span>
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2">Bachelor of Dental Surgery (BDS)</h3>
              <p className="text-gray-300 text-xs sm:text-sm">5 Years (incl. 1-year internship)</p>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8">
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                Our flagship undergraduate program provides comprehensive training in all aspects of dental science with extensive clinical exposure.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-lg sm:text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700 text-sm sm:text-base">Complete curriculum covering oral biology, pathology, surgery, and restorative dentistry</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-lg sm:text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700 text-sm sm:text-base">Hands-on clinical training from second year</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-lg sm:text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700 text-sm sm:text-base">Modern simulation labs for pre-clinical practice</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-lg sm:text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700 text-sm sm:text-base">Community dentistry camps and rural exposure</div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="mb-4">
                  <div className="text-2xl sm:text-3xl font-bold text-[#006837]">100 Seats</div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase">Annual Intake</div>
                </div>
                <Link
                  href="/admissions"
                  className="block w-full bg-[#7cb983] hover:bg-[#6ba872] active:bg-[#5a9761] text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition-all duration-300 text-center text-sm sm:text-base min-h-[44px] flex items-center justify-center touch-manipulation transform hover:scale-105 active:scale-95"
                >
                  Apply →
                </Link>
              </div>
            </div>
          </div>

          {/* MDS Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Card Header */}
            <div className="bg-[#006837] text-white p-6 sm:p-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#002309] rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🎓</span>
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2">Master of Dental Surgery (MDS)</h3>
              <p className="text-gray-300 text-xs sm:text-sm">3 Years Postgraduate</p>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8">
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                Advance your dental career with specialized MDS programs offering advanced clinical training and research opportunities.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-lg sm:text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700 text-sm sm:text-base">5 specialized branches including Orthodontics, Oral Surgery, Prosthodontics</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-lg sm:text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700 text-sm sm:text-base">Research-oriented curriculum with publication support</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-lg sm:text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700 text-sm sm:text-base">Advanced CBCT and CAD/CAM systems</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-lg sm:text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700 text-sm sm:text-base">Conference presentations and international exposure</div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="mb-4">
                  <div className="text-2xl sm:text-3xl font-bold text-[#006837]">27+ Seats</div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase">PG Intake</div>
                </div>
                <Link
                  href="/admissions"
                  className="block w-full bg-[#7cb983] hover:bg-[#6ba872] active:bg-[#5a9761] text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition-all duration-300 text-center text-sm sm:text-base min-h-[44px] flex items-center justify-center touch-manipulation transform hover:scale-105 active:scale-95"
                >
                  Apply →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* MDS Specializations Section */}
        <div>
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#006837] text-center mb-8 sm:mb-10 md:mb-12">MDS Specializations Offered</h3>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {/* Orthodontics */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🦷</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-1">Orthodontics</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Teeth alignment & braces</p>
                </div>
              </div>
            </div>

            {/* Oral Surgery */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🔬</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-1">Oral Surgery</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Surgical treatments</p>
                </div>
              </div>
            </div>

            {/* Prosthodontics */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🔧</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-1">Prosthodontics</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Implants & dentures</p>
                </div>
              </div>
            </div>

            {/* Periodontics */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🌿</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-1">Periodontics</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Gum disease treatment</p>
                </div>
              </div>
            </div>

            {/* Endodontics */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">💊</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-1">Endodontics</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Root canal therapy</p>
                </div>
              </div>
            </div>

            {/* Pedodontics */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">👶</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-1">Pedodontics</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Children's dental care</p>
                </div>
              </div>
            </div>

            {/* Oral Medicine */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🔬</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-1">Oral Medicine</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Diagnosis & imaging</p>
                </div>
              </div>
            </div>

            {/* Oral Pathology */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🧬</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-1">Oral Pathology</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Disease study</p>
                </div>
              </div>
            </div>

            {/* Public Health */}
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🏥</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#006837] mb-1">Public Health</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Community oral health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
