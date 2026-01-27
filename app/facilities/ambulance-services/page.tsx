import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';

export default function AmbulanceServices() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Banner Image */}
          <div className="w-full h-[300px] md:h-[400px] bg-gray-200 rounded-lg overflow-hidden mb-8">
            {/* TODO: Add ambulance banner image */}
            {/* <Image
              src="/images/ambulance-banner.jpg"
              alt="JKKN Free Ambulance Service"
              width={1200}
              height={400}
              className="w-full h-full object-cover"
            /> */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <p className="text-center px-4">Ambulance Banner Image<br/>(Add ambulance-banner.jpg to public/images/)</p>
            </div>
          </div>

          {/* First Paragraph */}
          <p className="text-base leading-relaxed text-gray-700 mb-6">
            <strong>JKKN Educational Institutions, we are dedicated to delivering excellent education to our students, staff, and community. In line with our pledge to the community, we take pride in presenting our exceptional ambulance services, available round-the-clock for emergency responses and medical transportation.</strong>
          </p>

          {/* Second Paragraph */}
          <p className="text-base leading-relaxed text-gray-700 mb-12">
            <strong>Our ambulance services are managed by expert emergency medical technicians who are certified and experienced in handling diverse medical emergencies. To ensure our patients receive the highest quality of care, our ambulances are equipped with advanced medical equipment and supplies.</strong>
          </p>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
