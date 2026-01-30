import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function PhysicalEducationExtraCurrucularActivitiesCommittee() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            PHYSICAL EDUCATION & EXTRA CURRUCULAR ACTIVITIES COMMITTEE
          </h1>

          {/* Committee Members List */}
          <div className="space-y-1">
            <p className="text-base text-black font-bold">1 . Convener – Principal.Prof.Dr.Dhanasekar B</p>
            <p className="text-base text-black font-bold">2.Mr.Rozario Cyril- (Chair)</p>
            <p className="text-base text-black font-bold">3.Dr.Vijay Thiyagarajan- (Member Secretary)</p>
            <p className="text-base text-black font-bold">4.Dr.AnuPriya</p>
            <p className="text-base text-black font-bold">5.Prof.Dr.B.Sasi Rekha</p>
            <p className="text-base text-black font-bold">6.Dr.Sasi Kumar</p>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
