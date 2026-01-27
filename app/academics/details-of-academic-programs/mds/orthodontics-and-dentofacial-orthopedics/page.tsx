'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function MDSOrthodontics() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0B4F6C] to-[#01BAEF] py-20 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* DCI Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-semibold text-sm">DCI Approved | NAAC Accredited</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                MDS Orthodontics & <span className="text-[#FF6B35]">Dentofacial Orthopaedics</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Transform smiles and change lives with our comprehensive 3-year postgraduate program. Master the art and science of teeth alignment, malocclusion correction, and facial aesthetics under the guidance of experienced Learning Facilitators at J.K.K. Nattraja Dental College.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg">
                  Apply Now
                </button>
                <button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#0B4F6C] font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300">
                  View Curriculum
                </button>
              </div>
            </div>

            {/* Right Content - Orthodontics Excellence Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0B4F6C] to-[#0a3f54] rounded-2xl p-12 border-4 border-white/20 overflow-hidden">
                <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-12">Orthodontics Excellence</h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">3</div>
                    <div className="text-sm text-gray-200">Year Program</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">100%</div>
                    <div className="text-sm text-gray-200">Placement Support</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">25+</div>
                    <div className="text-sm text-gray-200">Years Legacy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Bar Section */}
      <section className="bg-white py-8 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Duration */}
            <div className="flex items-center gap-4">
              <div className="bg-[#FF6B35] rounded-lg p-4 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">DURATION</div>
                <div className="text-lg font-bold text-gray-800">3 Years Full-Time</div>
              </div>
            </div>

            {/* Intake */}
            <div className="flex items-center gap-4">
              <div className="bg-[#FF6B35] rounded-lg p-4 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">INTAKE</div>
                <div className="text-lg font-bold text-gray-800">3 Seats Per Year</div>
              </div>
            </div>

            {/* Admission */}
            <div className="flex items-center gap-4">
              <div className="bg-[#FF6B35] rounded-lg p-4 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">ADMISSION</div>
                <div className="text-lg font-bold text-gray-800">NEET MDS Based</div>
              </div>
            </div>

            {/* Affiliation */}
            <div className="flex items-center gap-4">
              <div className="bg-[#FF6B35] rounded-lg p-4 flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold mb-1">AFFILIATION</div>
                <div className="text-lg font-bold text-gray-800">TN Dr. MGR University</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wide mb-2">PROGRAM OVERVIEW</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Master the Art of Creating Perfect Smiles</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The MDS in Orthodontics and Dentofacial Orthopaedics at J.K.K. Nattraja Dental College is a rigorous 3-year postgraduate program designed to transform dental graduates into highly skilled orthodontic specialists. Our program combines cutting-edge technology with evidence-based clinical training to prepare Learners for excellence in dental practice, research, and academia.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Orthodontics focuses on diagnosing, preventing, and correcting malpositioned teeth and jaws, including irregular dental development and facial growth patterns. Our comprehensive curriculum covers fixed and removable appliances, clear aligners, lingual orthodontics, and orthognathic surgery coordination.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Digital Orthodontics Lab</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">3D Imaging & CBCT</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Clear Aligner Training</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Research Publications</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Expert Learning Facilitators</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">High Patient Volume</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image Box */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#e55a2b] rounded-2xl p-16 aspect-square flex items-center justify-center shadow-lg">
                <h3 className="text-5xl md:text-6xl font-bold text-white text-center">Clinical Training</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wide mb-2">COURSE STRUCTURE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our curriculum is designed to provide both theoretical knowledge and extensive clinical experience in orthodontic diagnosis and treatment.
            </p>
          </div>

          {/* Year Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Year 1 */}
            <div className="bg-gradient-to-br from-[#0B4F6C] to-[#0a3f54] rounded-2xl p-8 text-white">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 inline-block mb-6">
                <span className="font-semibold">Year 1</span>
              </div>
              <h3 className="text-3xl font-bold mb-6">Foundation & Basic Sciences</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-200">Applied Basic Sciences & Anatomy</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-200">Growth & Development of Craniofacial Complex</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-200">Biomechanics & Biomaterials</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-200">Cephalometrics & Radiographic Analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-200">Research Methodology</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-200">Clinical Case Observation</span>
                </li>
              </ul>
            </div>

            {/* Year 2 */}
            <div className="bg-gradient-to-br from-[#FF6B35] to-[#e55a2b] rounded-2xl p-8 text-white">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 inline-block mb-6">
                <span className="font-semibold">Year 2</span>
              </div>
              <h3 className="text-3xl font-bold mb-6">Clinical Training</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-[#0B4F6C] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-100">Fixed Orthodontic Appliances & Techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#0B4F6C] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-100">Removable & Functional Appliances</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#0B4F6C] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-100">Dentofacial Orthopaedics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#0B4F6C] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-100">Treatment Planning & Case Selection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#0B4F6C] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-100">TMJ Disorders & Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#0B4F6C] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-100">Dissertation Work Initiation</span>
                </li>
              </ul>
            </div>

            {/* Year 3 */}
            <div className="bg-gradient-to-br from-[#01BAEF] to-[#0B4F6C] rounded-2xl p-8 text-white">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 inline-block mb-6">
                <span className="font-semibold">Year 3</span>
              </div>
              <h3 className="text-3xl font-bold mb-6">Advanced Practice</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-100">Clear Aligner Therapy (Invisalign)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-100">Lingual Orthodontics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-100">Orthognathic Surgery Coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-100">Cleft Lip & Palate Management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-100">Dissertation Completion & Defense</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-[#FF6B35] rounded-full p-1 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-100">Practice Management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wide mb-2">WHAT YOU'LL ACHIEVE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Learning Outcomes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our graduates are equipped with comprehensive skills to excel in clinical practice, research, and academic leadership in orthodontics.
            </p>
          </div>

          {/* Outcomes Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Clinical Competencies */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Clinical Competencies</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] mt-1">•</span>
                  <span>Advanced bracket bonding & wire bending</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] mt-1">•</span>
                  <span>Clear aligner case management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] mt-1">•</span>
                  <span>Complex malocclusion treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] mt-1">•</span>
                  <span>Surgical orthodontics coordination</span>
                </li>
              </ul>
            </div>

            {/* Diagnostic Skills */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Diagnostic Skills</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] mt-1">•</span>
                  <span>Cephalometric analysis mastery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] mt-1">•</span>
                  <span>3D imaging interpretation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] mt-1">•</span>
                  <span>Growth prediction & assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] mt-1">•</span>
                  <span>Comprehensive treatment planning</span>
                </li>
              </ul>
            </div>

            {/* Professional Development */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Professional Development</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] mt-1">•</span>
                  <span>Research methodology & publication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] mt-1">•</span>
                  <span>Digital workflow management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] mt-1">•</span>
                  <span>Practice setup & management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6B35] mt-1">•</span>
                  <span>Ethical decision making</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wide mb-2">ADMISSION REQUIREMENTS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Review the qualifications and documents required for admission to the MDS Orthodontics program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Eligibility Requirements */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#FF6B35] rounded-lg p-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Eligibility Requirements</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="bg-[#FF6B35] text-white font-bold text-lg rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-700 pt-1">
                    BDS degree from a DCI-recognized dental college
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="bg-[#FF6B35] text-white font-bold text-lg rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-700 pt-1">
                    Completion of 1-year compulsory rotating internship
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="bg-[#FF6B35] text-white font-bold text-lg rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-700 pt-1">
                    Valid registration with State Dental Council or DCI
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="bg-[#FF6B35] text-white font-bold text-lg rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <p className="text-gray-700 pt-1">
                    Qualified NEET MDS entrance examination
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="bg-[#FF6B35] text-white font-bold text-lg rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    5
                  </div>
                  <p className="text-gray-700 pt-1">
                    No upper age limit for admission
                  </p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#FF6B35] rounded-lg p-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Required Documents</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">BDS Degree Certificate</span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">NEET MDS Score Card</span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Internship Certificate</span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">DCI/State Registration</span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Migration Certificate</span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Transfer Certificate</span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">ID Proof (Aadhar/Passport)</span>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">Passport Size Photos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Facilities Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wide mb-2">WORLD-CLASS INFRASTRUCTURE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Department Facilities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art facilities provide Learners with hands-on experience using the latest orthodontic technology and equipment.
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Digital Orthodontics Lab */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#0B4F6C] rounded-lg p-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Digital Orthodontics Lab</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Advanced digital workflow with CAD/CAM systems, 3D printing for aligners and models, and digital treatment planning software for precise orthodontic care.
              </p>
            </div>

            {/* CBCT & 3D Imaging Center */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#0B4F6C] rounded-lg p-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">CBCT & 3D Imaging Center</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Cone Beam Computed Tomography for detailed craniofacial imaging, digital cephalometric analysis, and comprehensive diagnostic imaging capabilities.
              </p>
            </div>

            {/* Wire Bending Laboratory */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#0B4F6C] rounded-lg p-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Wire Bending Laboratory</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Dedicated preclinical lab with typodont stations for mastering wire bending techniques, bracket positioning, and appliance fabrication skills.
              </p>
            </div>

            {/* Clinical Treatment Unit */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#0B4F6C] rounded-lg p-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Clinical Treatment Unit</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Modern dental chairs with integrated orthodontic equipment, including light-cure units, bracket positioning guides, and patient management systems.
              </p>
            </div>

            {/* Research & Library */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#0B4F6C] rounded-lg p-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Research & Library</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive digital library with access to international orthodontic journals, research databases, and latest publications for evidence-based practice.
              </p>
            </div>

            {/* Seminar & Conference Hall */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#0B4F6C] rounded-lg p-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Seminar & Conference Hall</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                State-of-the-art seminar hall equipped with AV facilities for case presentations, journal clubs, guest lectures, and continuing education programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Gallery Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wide mb-2">CAMPUS LIFE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Department Gallery</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our modern facilities, clinical settings, and vibrant academic environment.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {/* Clinical Setup */}
            <div className="bg-gradient-to-br from-[#0B4F6C] to-[#0a3f54] rounded-2xl aspect-square flex items-center justify-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-white text-center">Clinical Setup</h3>
            </div>

            {/* Digital Lab */}
            <div className="bg-gradient-to-br from-[#FF6B35] to-[#e55a2b] rounded-2xl aspect-square flex items-center justify-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-white text-center">Digital Lab</h3>
            </div>

            {/* CBCT Center */}
            <div className="bg-gradient-to-br from-[#01BAEF] to-[#0B4F6C] rounded-2xl aspect-square flex items-center justify-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-white text-center">CBCT Center</h3>
            </div>

            {/* Wire Lab */}
            <div className="bg-gradient-to-br from-[#0B4F6C] to-[#0a3f54] rounded-2xl aspect-square flex items-center justify-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-white text-center">Wire Lab</h3>
            </div>

            {/* Seminar Hall */}
            <div className="bg-gradient-to-br from-[#FF6B35] to-[#e55a2b] rounded-2xl aspect-square flex items-center justify-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-white text-center">Seminar Hall</h3>
            </div>

            {/* Patient Care */}
            <div className="bg-gradient-to-br from-[#01BAEF] to-[#0B4F6C] rounded-2xl aspect-square flex items-center justify-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-white text-center">Patient Care</h3>
            </div>

            {/* Research Lab */}
            <div className="bg-gradient-to-br from-[#0B4F6C] to-[#0a3f54] rounded-2xl aspect-square flex items-center justify-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-white text-center">Research Lab</h3>
            </div>

            {/* Library */}
            <div className="bg-gradient-to-br from-[#FF6B35] to-[#e55a2b] rounded-2xl aspect-square flex items-center justify-center p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-white text-center">Library</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#0B4F6C] to-[#0a3f54]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wide mb-2">YOUR FUTURE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Career Opportunities</h2>
            <p className="text-gray-200 max-w-3xl mx-auto">
              MDS Orthodontics opens doors to diverse and rewarding career paths in dental healthcare.
            </p>
          </div>

          {/* Career Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Private Practice */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-colors duration-300">
              <div className="bg-[#FF6B35] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Private Practice</h3>
              <p className="text-gray-200 leading-relaxed">
                Establish your own orthodontic clinic or join an established practice. High demand for orthodontic specialists with excellent earning potential.
              </p>
            </div>

            {/* Academic Career */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-colors duration-300">
              <div className="bg-[#FF6B35] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Academic Career</h3>
              <p className="text-gray-200 leading-relaxed">
                Join dental colleges as Learning Facilitator, pursue PhD, contribute to dental education and research, and shape future orthodontists.
              </p>
            </div>

            {/* Hospital Consultant */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-colors duration-300">
              <div className="bg-[#FF6B35] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Hospital Consultant</h3>
              <p className="text-gray-200 leading-relaxed">
                Work as consultant orthodontist in multispecialty hospitals, corporate dental chains, or government healthcare institutions.
              </p>
            </div>

            {/* International Practice */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-colors duration-300">
              <div className="bg-[#FF6B35] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">International Practice</h3>
              <p className="text-gray-200 leading-relaxed">
                Pursue international licensing and practice opportunities in countries with high demand for qualified orthodontic specialists.
              </p>
            </div>

            {/* Research & Innovation */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-colors duration-300">
              <div className="bg-[#FF6B35] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Research & Innovation</h3>
              <p className="text-gray-200 leading-relaxed">
                Contribute to orthodontic research, develop new treatment techniques, and collaborate with aligner companies and dental product manufacturers.
              </p>
            </div>

            {/* Armed Forces Dental Corps */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-colors duration-300">
              <div className="bg-[#FF6B35] rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Armed Forces Dental Corps</h3>
              <p className="text-gray-200 leading-relaxed">
                Join Indian Army, Navy, or Air Force Dental Corps as an orthodontic specialist with excellent career progression and benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wide mb-2">INVESTMENT IN YOUR FUTURE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Fee Structure</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Transparent and competitive fee structure with flexible payment options and scholarship opportunities.
            </p>
          </div>

          {/* Fee Table */}
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-[#0B4F6C] to-[#01BAEF] text-white">
                  <th className="px-8 py-6 text-left text-lg font-bold">FEE COMPONENT</th>
                  <th className="px-8 py-6 text-center text-lg font-bold">YEAR 1</th>
                  <th className="px-8 py-6 text-center text-lg font-bold">YEAR 2</th>
                  <th className="px-8 py-6 text-center text-lg font-bold">YEAR 3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-8 py-6 text-gray-700 font-medium">Tuition Fee</td>
                  <td className="px-8 py-6 text-center text-gray-900 font-semibold">₹8,00,000</td>
                  <td className="px-8 py-6 text-center text-gray-900 font-semibold">₹8,00,000</td>
                  <td className="px-8 py-6 text-center text-gray-900 font-semibold">₹8,00,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-8 py-6 text-gray-700 font-medium">Admission Fee (One-time)</td>
                  <td className="px-8 py-6 text-center text-gray-900 font-semibold">₹50,000</td>
                  <td className="px-8 py-6 text-center text-gray-600">-</td>
                  <td className="px-8 py-6 text-center text-gray-600">-</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-8 py-6 text-gray-700 font-medium">Laboratory & Clinical Fee</td>
                  <td className="px-8 py-6 text-center text-gray-900 font-semibold">₹75,000</td>
                  <td className="px-8 py-6 text-center text-gray-900 font-semibold">₹75,000</td>
                  <td className="px-8 py-6 text-center text-gray-900 font-semibold">₹75,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-8 py-6 text-gray-700 font-medium">Library & Digital Resources</td>
                  <td className="px-8 py-6 text-center text-gray-900 font-semibold">₹25,000</td>
                  <td className="px-8 py-6 text-center text-gray-900 font-semibold">₹25,000</td>
                  <td className="px-8 py-6 text-center text-gray-900 font-semibold">₹25,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-8 py-6 text-gray-700 font-medium">Examination Fee</td>
                  <td className="px-8 py-6 text-center text-gray-900 font-semibold">₹15,000</td>
                  <td className="px-8 py-6 text-center text-gray-900 font-semibold">₹15,000</td>
                  <td className="px-8 py-6 text-center text-gray-900 font-semibold">₹15,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Fee Note */}
          <div className="mt-8 bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700 leading-relaxed">
                Fees are subject to annual revision as per university guidelines. Scholarship and education loan assistance available. Hostel accommodation available at additional cost. Contact the admissions office for detailed fee breakdown and payment schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wide mb-2">HAVE QUESTIONS?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about the MDS Orthodontics program at JKKN.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 text-lg">
                What is the duration of the MDS Orthodontics program?
                <svg className="w-6 h-6 text-[#FF6B35] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                The MDS in Orthodontics and Dentofacial Orthopaedics is a 3-year full-time postgraduate program that includes theoretical coursework, extensive clinical training with live patients, and a mandatory dissertation that contributes to orthodontic research.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 text-lg">
                What is the admission process for MDS Orthodontics?
                <svg className="w-6 h-6 text-[#FF6B35] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                Admission is based on NEET MDS scores conducted by the National Board of Examinations. Candidates must qualify the national entrance examination and participate in state-level or institutional counseling. Seats are allocated based on merit ranking.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 text-lg">
                What clinical exposure will I receive during the program?
                <svg className="w-6 h-6 text-[#FF6B35] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                Learners receive extensive hands-on clinical training with a high patient volume. You will manage complete orthodontic cases from diagnosis to retention, work with various appliance systems including fixed braces, clear aligners, and functional appliances, and participate in interdisciplinary treatment planning.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 text-lg">
                What are the career prospects after completing MDS Orthodontics?
                <svg className="w-6 h-6 text-[#FF6B35] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                Graduates can establish private practice, join academic institutions as Learning Facilitators, work as hospital consultants, pursue research careers, or join armed forces dental corps. The specialty offers excellent earning potential with high demand for qualified orthodontists both in India and internationally.
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 text-lg">
                Is clear aligner training included in the curriculum?
                <svg className="w-6 h-6 text-[#FF6B35] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                Yes, our curriculum includes comprehensive training in clear aligner therapy including Invisalign and other aligner systems. Learners gain hands-on experience in digital treatment planning, aligner case selection, and managing aligner patients from start to finish.
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-gray-900 text-lg">
                What research opportunities are available?
                <svg className="w-6 h-6 text-[#FF6B35] transition-transform duration-300 group-open:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                Learners are encouraged to publish research papers in indexed journals and present at national and international conferences. Our department provides mentorship for dissertation work, access to research facilities, and support for innovative research projects in orthodontics.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] font-semibold text-sm uppercase tracking-wide mb-2">RECOGNITION & ACCREDITATION</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Accreditations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our programs are recognized by leading regulatory bodies ensuring quality education.
            </p>
          </div>

          {/* Accreditation Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* DCI */}
            <div className="flex flex-col items-center">
              <div className="bg-[#0B4F6C] rounded-xl w-24 h-24 flex items-center justify-center mb-4 shadow-lg">
                <span className="text-3xl font-bold text-white">DCI</span>
              </div>
              <h3 className="text-center font-bold text-gray-900">Dental Council of India</h3>
            </div>

            {/* NAAC */}
            <div className="flex flex-col items-center">
              <div className="bg-[#FF6B35] rounded-xl w-24 h-24 flex items-center justify-center mb-4 shadow-lg">
                <span className="text-3xl font-bold text-white">NAAC</span>
              </div>
              <h3 className="text-center font-bold text-gray-900">NAAC Accredited</h3>
            </div>

            {/* MGR */}
            <div className="flex flex-col items-center">
              <div className="bg-[#01BAEF] rounded-xl w-24 h-24 flex items-center justify-center mb-4 shadow-lg">
                <span className="text-3xl font-bold text-white">MGR</span>
              </div>
              <h3 className="text-center font-bold text-gray-900">TN Dr. MGR Medical University</h3>
            </div>

            {/* IDA */}
            <div className="flex flex-col items-center">
              <div className="bg-[#0B4F6C] rounded-xl w-24 h-24 flex items-center justify-center mb-4 shadow-lg">
                <span className="text-3xl font-bold text-white">IDA</span>
              </div>
              <h3 className="text-center font-bold text-gray-900">Indian Dental Association</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FF6B35] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Begin Your Journey to Becoming an Orthodontic Specialist
          </h2>
          <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            Join our prestigious MDS program and transform your career with world-class training at J.K.K. Nattraja Dental College.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-[#FF6B35] font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Download Prospectus
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300">
              Apply Online
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
