import Link from 'next/link';

export default function AdmissionsSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FBFBEE]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left - Eligibility */}
          <div>
            <h3 className="text-[#7cb983] text-sm md:text-base font-bold uppercase tracking-wider mb-4">Admissions 2025-26</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#006837] mb-8">
              Begin Your Journey to Dental Excellence
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Join J.K.K. Nattraja Dental College and embark on a transformative educational journey in dental science.
            </p>

            {/* BDS Eligibility */}
            <div className="bg-blue-50 rounded-2xl p-6 mb-6">
              <h4 className="text-xl font-bold text-[#006837] mb-4">BDS Eligibility</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700">10+2 with Physics, Chemistry, Biology</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700">Minimum 50% marks (40% reserved)</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700">Valid NEET-UG score</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700">Age: 17 years by Dec 31</div>
                </div>
              </div>
            </div>

            {/* MDS Eligibility */}
            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <h4 className="text-xl font-bold text-[#006837] mb-4">MDS Eligibility</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700">BDS from DCI-recognized institution</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700">Completed rotating internship</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700">Valid NEET-MDS score</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#7cb983] text-xl flex-shrink-0">✓</div>
                  <div className="text-gray-700">State Dental Council registration</div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/admissions"
                className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
              >
                <span>📞</span>
                <span>Talk to Admissions</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-[#006837] hover:bg-[#006837] hover:text-white text-[#006837] font-bold py-3 px-8 rounded-full transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
              >
                <span>✉️</span>
                <span>Email Us</span>
              </Link>
            </div>
          </div>

          {/* Right - Admission Process */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#006837] mb-8">Admission Process</h3>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-white">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#006837] mb-1">Check Eligibility</h4>
                    <p className="text-sm text-gray-600">Verify academic and NEET requirements</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-white">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#006837] mb-1">Register for Counseling</h4>
                    <p className="text-sm text-gray-600">TN State or All India Quota</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-white">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#006837] mb-1">Participate in Counseling</h4>
                    <p className="text-sm text-gray-600">Select JKKN during choice-filling</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-white">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#006837] mb-1">Document Verification</h4>
                    <p className="text-sm text-gray-600">Complete verification at our office</p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-white">
                      5
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#006837] mb-1">Fee Payment & Enrollment</h4>
                    <p className="text-sm text-gray-600">Pay fees and secure your seat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
