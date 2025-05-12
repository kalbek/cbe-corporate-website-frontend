

export default function TermsAndTarrif() {
  return (
    <div className="bg-white">
      <div className="relative">
        <img
          src="/images/hero.png"
          alt="Internet Banking Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex">
          {/* Navigation Arrows */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <span className="text-2xl text-white cursor-pointer hover:text-gray-300 transition-colors">&lt;</span>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
            <span className="text-2xl text-white cursor-pointer hover:text-gray-300 transition-colors">&gt;</span>
          </div>
          {/* Left half - empty */}
          <div className="w-1/2"></div>
          {/* Right half - content */}
          <div className="w-1/2 flex items-center justify-center">
            <div className="max-w-2xl px-8 py-6">
              <h1 className="text-4xl font-bold mb-4 text-white">Terms and Tariff</h1>
              <p className="max-w-2xl text-base mb-4 text-white !text-white">
                Enjoy attractive interest rates on all CBE deposit accounts. Secure your future, grow your savings, and earn up to 7.125% annually with confidence and ease.
               </p>
              <a
                href="#"
                className="inline-block bg-[#a58aa8] text-white px-6 py-3 rounded-lg hover:bg-[#927290] transition-colors mb-4"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}