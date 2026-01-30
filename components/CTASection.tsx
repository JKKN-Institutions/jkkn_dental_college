import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-[#7cb983]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Shape Your Dental Career?
        </h2>

        {/* Description */}
        <p className="text-white text-base md:text-lg mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
          Join J.K.K. Nattraja Dental College and become part of a century-long legacy of excellence. Applications for 2025-26 are now open.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="https://admission.jkkn.ac.in/form/jkkn-institution-admission-yxs3w8"
            className="bg-white hover:bg-gray-100 text-[#006837] font-bold py-3 px-8 rounded-full transition-all duration-300 text-center shadow-lg"
          >
            Apply Now →
          </Link>
          <a
            href="tel:+919345855001"
            className="border-2 border-white hover:bg-white hover:text-[#7cb983] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-center inline-flex items-center gap-2"
          >
            <span>📞</span>
            <span>+91 9345855001</span>
          </a>
        </div>
      </div>
    </section>
  );
}
