import Link from 'next/link';

export default function AcademicPrograms() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FBFBEE]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-[#7cb983] text-sm md:text-base font-bold uppercase tracking-wider mb-4">Academic Programs</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-6">
            Comprehensive Dental Education Programs
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Choose from our DCI-approved undergraduate and postgraduate dental programs designed to shape competent, compassionate dental professionals.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* BDS Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Card Header */}
            <div className="bg-[#006837] text-white p-8">
              <div className="w-12 h-12 bg-[#002309] rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🦷</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Bachelor of Dental Surgery (BDS)</h3>
              <p className="text-gray-300 text-sm">5 Years (incl. 1-year internship)</p>
            </div>

            {/* Card Body */}
            <div className="p-8">
              <p className="text-gray-600 mb-6">
                Our flagship undergraduate program provides comprehensive training in all aspects of dental science with extensive clinical exposure.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700">Complete curriculum covering oral biology, pathology, surgery, and restorative dentistry</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700">Hands-on clinical training from second year</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700">Modern simulation labs for pre-clinical practice</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700">Community dentistry camps and rural exposure</div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="mb-4">
                  <div className="text-3xl font-bold text-[#006837]">100 Seats</div>
                  <div className="text-sm text-gray-500 uppercase">Annual Intake</div>
                </div>
                <Link
                  href="/admissions"
                  className="block w-full bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                >
                  Apply →
                </Link>
              </div>
            </div>
          </div>

          {/* MDS Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Card Header */}
            <div className="bg-[#006837] text-white p-8">
              <div className="w-12 h-12 bg-[#002309] rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Master of Dental Surgery (MDS)</h3>
              <p className="text-gray-300 text-sm">3 Years Postgraduate</p>
            </div>

            {/* Card Body */}
            <div className="p-8">
              <p className="text-gray-600 mb-6">
                Advance your dental career with specialized MDS programs offering advanced clinical training and research opportunities.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700">5 specialized branches including Orthodontics, Oral Surgery, Prosthodontics</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700">Research-oriented curriculum with publication support</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700">Advanced CBCT and CAD/CAM systems</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700">Conference presentations and international exposure</div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="mb-4">
                  <div className="text-3xl font-bold text-[#006837]">27+ Seats</div>
                  <div className="text-sm text-gray-500 uppercase">PG Intake</div>
                </div>
                <Link
                  href="/admissions"
                  className="block w-full bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-center"
                >
                  Apply →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* MDS Specializations Section */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-[#006837] text-center mb-12">MDS Specializations Offered</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Orthodontics */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🦷</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#006837] mb-1">Orthodontics</h4>
                  <p className="text-sm text-gray-600">Teeth alignment & braces</p>
                </div>
              </div>
            </div>

            {/* Oral Surgery */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔬</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#006837] mb-1">Oral Surgery</h4>
                  <p className="text-sm text-gray-600">Surgical treatments</p>
                </div>
              </div>
            </div>

            {/* Prosthodontics */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔧</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#006837] mb-1">Prosthodontics</h4>
                  <p className="text-sm text-gray-600">Implants & dentures</p>
                </div>
              </div>
            </div>

            {/* Periodontics */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#006837] mb-1">Periodontics</h4>
                  <p className="text-sm text-gray-600">Gum disease treatment</p>
                </div>
              </div>
            </div>

            {/* Endodontics */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💊</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#006837] mb-1">Endodontics</h4>
                  <p className="text-sm text-gray-600">Root canal therapy</p>
                </div>
              </div>
            </div>

            {/* Pedodontics */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👶</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#006837] mb-1">Pedodontics</h4>
                  <p className="text-sm text-gray-600">Children's dental care</p>
                </div>
              </div>
            </div>

            {/* Oral Medicine */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔬</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#006837] mb-1">Oral Medicine</h4>
                  <p className="text-sm text-gray-600">Diagnosis & imaging</p>
                </div>
              </div>
            </div>

            {/* Oral Pathology */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🧬</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#006837] mb-1">Oral Pathology</h4>
                  <p className="text-sm text-gray-600">Disease study</p>
                </div>
              </div>
            </div>

            {/* Public Health */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏥</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#006837] mb-1">Public Health</h4>
                  <p className="text-sm text-gray-600">Community oral health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
