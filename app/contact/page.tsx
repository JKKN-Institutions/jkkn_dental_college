import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Contact() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-12">
            CONTACT US
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section - Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-6 border-b-4 border-[#1B5E20] inline-block pb-1">
                CONTACT INFO
              </h2>

              <div className="space-y-6 mt-8">
                {/* Phone */}
                <div className="bg-[#D4E8D4] p-6 rounded-lg flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-[#5FA866]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                    <p className="text-lg text-gray-700 font-semibold">+(91) 93458 55001</p>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-[#D4E8D4] p-6 rounded-lg flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-[#5FA866]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                    <p className="text-lg text-gray-700 font-semibold">Dental@jkkn.ac.in</p>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-[#D4E8D4] p-6 rounded-lg flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-[#5FA866]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Address</h3>
                    <p className="text-lg text-gray-700 font-semibold leading-relaxed">
                      JKKN Dental College & Hospital, Natarajapuram, NH-544 (Salem To Coimbatore National Highway), Kumarapalayam (TK), Namakkal (DT). Tamil Nadu. 638183.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Online Admission Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-6 border-b-4 border-[#1B5E20] inline-block pb-1">
                ONLINE ADMISSION FORM
              </h2>

              <div className="mt-8">
                <p className="text-lg text-gray-600 mb-6">
                  Required fields are marked.
                </p>
                <a
                  href="#"
                  className="inline-block bg-[#1B5E20] hover:bg-[#145018] text-white font-bold text-lg px-8 py-3 rounded transition-colors"
                >
                  Click Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
