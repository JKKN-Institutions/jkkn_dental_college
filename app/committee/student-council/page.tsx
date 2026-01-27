import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function StudentCouncil() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D5E2E] mb-8">
            STUDENT COUNCIL
          </h1>

          {/* View Document Button */}
          <div className="mb-8">
            <a
              href="/view-student-council-document"
              className="inline-block bg-[#E8E1F0] hover:bg-[#D9CEE8] text-gray-700 font-semibold py-3 px-8 rounded transition-all duration-300 text-base"
            >
              View Document
            </a>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="w-full">
              <div className="w-full h-64 bg-gray-300 rounded"></div>
            </div>

            {/* Image 2 */}
            <div className="w-full">
              <div className="w-full h-64 bg-gray-300 rounded"></div>
            </div>

            {/* Image 3 */}
            <div className="w-full">
              <div className="w-full h-64 bg-gray-300 rounded"></div>
            </div>

            {/* Image 4 */}
            <div className="w-full">
              <div className="w-full h-64 bg-gray-300 rounded"></div>
            </div>

            {/* Image 5 */}
            <div className="w-full">
              <div className="w-full h-64 bg-gray-300 rounded"></div>
            </div>

            {/* Image 6 */}
            <div className="w-full">
              <div className="w-full h-64 bg-gray-300 rounded"></div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
