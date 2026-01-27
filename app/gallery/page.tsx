import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';

export default function Gallery() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-12">
            GALLERY
          </h1>

          {/* Gallery Grid */}
          <div className="space-y-12">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pongal Celebration */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                  Pongal Celebration
                </h2>
                <div className="w-full h-[250px] md:h-[280px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* TODO: Add image */}
                  {/* <Image
                    src="/images/gallery/pongal-celebration.jpg"
                    alt="Pongal Celebration"
                    width={400}
                    height={280}
                    className="w-full h-full object-cover"
                  /> */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p className="text-center px-4">Pongal Celebration Image</p>
                  </div>
                </div>
              </div>

              {/* Farewell Day */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                  Farewell Day
                </h2>
                <div className="w-full h-[250px] md:h-[280px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* TODO: Add image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p className="text-center px-4">Farewell Day Image</p>
                  </div>
                </div>
              </div>

              {/* Founders Day 2022 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                  Founders Day 2022
                </h2>
                <div className="w-full h-[250px] md:h-[280px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* TODO: Add image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p className="text-center px-4">Founders Day 2022 Image</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Blood Camp */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                  Blood Camp
                </h2>
                <div className="w-full h-[250px] md:h-[280px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* TODO: Add image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p className="text-center px-4">Blood Camp Image</p>
                  </div>
                </div>
              </div>

              {/* World Hemophilia Day */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                  World Hemophilia Day
                </h2>
                <div className="w-full h-[250px] md:h-[280px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* TODO: Add image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p className="text-center px-4">World Hemophilia Day Image</p>
                  </div>
                </div>
              </div>

              {/* World No Tobacco Day */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                  World No Tobacco Day
                </h2>
                <div className="w-full h-[250px] md:h-[280px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* TODO: Add image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p className="text-center px-4">World No Tobacco Day Image</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* World Oral Health Day */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                  World Oral Health Day
                </h2>
                <div className="w-full h-[250px] md:h-[280px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* TODO: Add image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p className="text-center px-4">World Oral Health Day Image</p>
                  </div>
                </div>
              </div>

              {/* Stem Cell */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                  Stem Cell
                </h2>
                <div className="w-full h-[250px] md:h-[280px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* TODO: Add image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p className="text-center px-4">Stem Cell Image</p>
                  </div>
                </div>
              </div>

              {/* 35th College Day */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                  35th College Day
                </h2>
                <div className="w-full h-[250px] md:h-[280px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* TODO: Add image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p className="text-center px-4">35th College Day Image</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* ANTI RAGGING SEMINAR */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                  ANTI RAGGING SEMINAR
                </h2>
                <div className="w-full h-[250px] md:h-[280px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* TODO: Add image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p className="text-center px-4">ANTI RAGGING SEMINAR Image</p>
                  </div>
                </div>
              </div>

              {/* 26th Graduation Day */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                  26th Graduation Day
                </h2>
                <div className="w-full h-[250px] md:h-[280px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* TODO: Add image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p className="text-center px-4">26th Graduation Day Image</p>
                  </div>
                </div>
              </div>

              {/* Basic Of Cancer and Awareness */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                  Basic Of Cancer and Awareness
                </h2>
                <div className="w-full h-[250px] md:h-[280px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* TODO: Add image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p className="text-center px-4">Basic Of Cancer and Awareness Image</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Fire and safety */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                  Fire and safety
                </h2>
                <div className="w-full h-[250px] md:h-[280px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* TODO: Add image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p className="text-center px-4">Fire and safety Image</p>
                  </div>
                </div>
              </div>

              {/* Prosthodontist Day */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                  Prosthodontist Day
                </h2>
                <div className="w-full h-[250px] md:h-[280px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* TODO: Add image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p className="text-center px-4">Prosthodontist Day Image</p>
                  </div>
                </div>
              </div>

              {/* Yoga day */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                  Yoga day
                </h2>
                <div className="w-full h-[250px] md:h-[280px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* TODO: Add image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p className="text-center px-4">Yoga day Image</p>
                  </div>
                </div>
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
