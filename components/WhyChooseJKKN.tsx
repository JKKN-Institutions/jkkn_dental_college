export default function WhyChooseJKKN() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#006837] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Content */}
          <div>
            <h3 className="text-[#7cb983] text-sm md:text-base font-bold uppercase tracking-wider mb-4">Why Choose JKKN</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Why JKKN Dental College is Your Best Choice
            </h2>

            <div className="space-y-8">
              {/* Point 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-lg">
                    01
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">70+ Years Legacy</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Part of JKKN Institutions with a century-long commitment to progressive education. #JKKN100
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-lg">
                    02
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Unmatched Clinical Exposure</h4>
                  <p className="text-gray-300 leading-relaxed">
                    500+ patients visiting daily — extensive hands-on experience across all specialties.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-lg">
                    03
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Distinguished Learning Facilitators</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Experienced specialists with national and international recognition in their fields.
                  </p>
                </div>
              </div>

              {/* Point 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#7cb983] rounded-full flex items-center justify-center font-bold text-lg">
                    04
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">92% Placement Assistance</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Strong industry connections with leading dental chains and hospitals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {/* Stat 1 */}
              <div className="bg-[#002309] rounded-2xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">39+</div>
                <div className="text-gray-300 text-sm">Years of Excellence</div>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#002309] rounded-2xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">3000+</div>
                <div className="text-gray-300 text-sm">Alumni Network</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-[#002309] rounded-2xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">50+</div>
                <div className="text-gray-300 text-sm">Publications</div>
              </div>

              {/* Stat 4 */}
              <div className="bg-[#002309] rounded-2xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">25+</div>
                <div className="text-gray-300 text-sm">Partnerships</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
