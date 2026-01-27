import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';

export default function Transport() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8">
            TRANSPORT
          </h1>

          {/* Image Gallery - 3 Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Image 1 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              {/* TODO: Add transport image 1 */}
              {/* <Image
                src="/images/transport-1.jpg"
                alt="JKKN college buses"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              /> */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <p className="text-center px-4">Transport Image 1<br/>(Add transport-1.jpg to public/images/)</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              {/* TODO: Add transport image 2 */}
              {/* <Image
                src="/images/transport-2.jpg"
                alt="College bus fleet"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              /> */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <p className="text-center px-4">Transport Image 2<br/>(Add transport-2.jpg to public/images/)</p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              {/* TODO: Add transport image 3 */}
              {/* <Image
                src="/images/transport-3.jpg"
                alt="JKKN buses parked"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              /> */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <p className="text-center px-4">Transport Image 3<br/>(Add transport-3.jpg to public/images/)</p>
              </div>
            </div>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            <strong>Navigating your way to academic excellence should be as smooth as possible, and that's precisely what our transport services at JKKN Institutions aim to provide. From the quality of our fleet to the training of our drivers, every aspect has been carefully curated to offer you not just a ride, but a journey you can count on.</strong>
          </p>

          {/* Well-Equipped Fleet */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Well-Equipped Fleet:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Our vehicles are more than just a means of transport; they're an extension of the high-quality experience we provide on campus. Regular servicing and cleanliness checks ensure that each bus is in optimal condition. Features like air conditioning, plush seating, and advanced GPS tracking systems redefine the concept of comfortable commuting.</strong>
            </p>
          </div>

          {/* Expert Drivers */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Expert Drivers:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Behind every wheel is a highly trained professional who is well-versed in local routes and traffic conditions. Frequent skill-upgradation sessions make sure our drivers are always equipped to get you safely and efficiently to your destination.</strong>
            </p>
          </div>

          {/* Cost-Efficiency */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Cost-Efficiency:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Accessibility and affordability go hand-in-hand at JKKN Institutions. The pricing structure is transparent and is calculated based on the distance from your residence to the campus, making sure that premium service does not come with a premium price tag.</strong>
            </p>
          </div>

          {/* Safety Measures */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Safety Measures:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>We have a zero-compromise policy when it comes to safety. Each bus is monitored via CCTV, and designated female attendants are in place to assist female passengers. A stringent set of guidelines ensures a secure commute for everyone aboard.</strong>
            </p>
          </div>

          {/* Timely Operation */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Timely Operation:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Time is of the essence, especially in an academic setting. Our transport services adhere to a strict timetable, facilitating punctuality that allows you to optimize your academic and personal schedules.</strong>
            </p>
          </div>

          {/* Inclusive Accessibility */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Inclusive Accessibility:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>We believe in inclusivity and offer buses equipped with wheelchair ramps and other assistive features, ensuring that every student, irrespective of physical capabilities, can easily use our services.</strong>
            </p>
          </div>

          {/* Final Statement */}
          <div className="mb-12">
            <p className="text-base leading-relaxed text-gray-700">
              <strong>In essence, JKKN Institutions' transport services are an embodiment of our core values—offering a safe, reliable, and comfortable comm</strong>
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
