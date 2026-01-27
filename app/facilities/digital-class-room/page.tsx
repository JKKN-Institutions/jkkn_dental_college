import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';

export default function DigitalClassRoom() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8">
            DIGITAL CLASS ROOM
          </h1>

          {/* Image Gallery - 3 Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Image 1 */}
            <div className="w-full h-[280px] md:h-[320px] bg-gray-200 rounded-lg overflow-hidden">
              {/* TODO: Add digital classroom image 1 */}
              {/* <Image
                src="/images/digital-class-1.jpg"
                alt="Digital classroom with projector"
                width={400}
                height={320}
                className="w-full h-full object-cover"
              /> */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <p className="text-center px-4">Digital Class Image 1<br/>(Add digital-class-1.jpg to public/images/)</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="w-full h-[280px] md:h-[320px] bg-gray-200 rounded-lg overflow-hidden">
              {/* TODO: Add digital classroom image 2 */}
              {/* <Image
                src="/images/digital-class-2.jpg"
                alt="Interactive classroom session"
                width={400}
                height={320}
                className="w-full h-full object-cover"
              /> */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <p className="text-center px-4">Digital Class Image 2<br/>(Add digital-class-2.jpg to public/images/)</p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="w-full h-[280px] md:h-[320px] bg-gray-200 rounded-lg overflow-hidden">
              {/* TODO: Add digital classroom image 3 */}
              {/* <Image
                src="/images/digital-class-3.jpg"
                alt="Students in digital classroom"
                width={400}
                height={320}
                className="w-full h-full object-cover"
              /> */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <p className="text-center px-4">Digital Class Image 3<br/>(Add digital-class-3.jpg to public/images/)</p>
              </div>
            </div>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            <strong>Digital Classrooms at JKKN Institutions: Where Technology Meets Excellence At JKKN Institutions, we redefine the classroom experience by integrating cutting-edge technology and design thinking into our learning spaces. Every detail is meticulously planned to inspire innovation, encourage collaborative learning, and cater to the diverse needs of our student body.</strong>
          </p>

          {/* Smart Technology */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Smart Technology:
            </h2>
            <p className="text-base leading-relaxed text-gray-700 mb-3">
              <strong>Smart TVs and Multimedia Projectors: Tailor-made for interactive and dynamic learning experiences.</strong>
            </p>
            <p className="text-base leading-relaxed text-gray-700 mb-3">
              <strong>Portable Microphones and Speakers: For crystal-clear audio in larger classrooms, ensuring that every word is heard.</strong>
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Seamless Integration:</strong>
            </p>
          </div>

          {/* AI Tools and Design Thinking */}
          <div className="mb-6">
            <p className="text-base leading-relaxed text-gray-700 mb-3">
              <strong>AI Tools: Embedded in daily lectures, discussions, and problem-solving sessions to elevate the learning experience.</strong>
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Design Thinking: Integrated into classroom activities to foster innovation and critical thinking.</strong>
            </p>
          </div>

          {/* Customizable Learning Spaces */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Customizable Learning Spaces:
            </h2>
            <p className="text-base leading-relaxed text-gray-700 mb-3">
              <strong>Multiple Classroom Settings: From traditional lecture halls to collaborative workspaces, we have a layout for every learning style.</strong>
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Comfortable Seating: Ergonomically designed for optimum focus and minimal distraction.</strong>
            </p>
          </div>

          {/* High-Speed Connectivity */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              High-Speed Connectivity:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Uninterrupted Internet Access: Because the flow of information shouldn't have to wait.</strong>
            </p>
          </div>

          {/* Inspiring Aesthetics */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Inspiring Aesthetics:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Vibrant Colors and Motivational Posters: Creating an ambiance that stimulates creativity and enthusiasm.</strong>
            </p>
          </div>

          {/* Clean and Hygienic */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Clean and Hygienic:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Regular Maintenance: To offer a safe and hygienic environment conducive to focused learning.</strong>
            </p>
          </div>

          {/* Final Statement */}
          <div className="mb-12">
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Experience the future of learning today, only at JKKN Institutions.</strong>
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
