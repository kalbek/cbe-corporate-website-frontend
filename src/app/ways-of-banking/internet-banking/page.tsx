export default function InternetBanking() {
  return (
    <div className="bg-white">
      <div className="min-h-screen relative">
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
              <h1 className="text-4xl font-bold mb-4 text-white">Internet Banking</h1>
              <p className="max-w-2xl text-base mb-4 text-white !text-white">
                Internet banking allows a user to conduct financial transactions via the Internet offers almost every service traditionally available through a local branch including balance inquiry, transfers, Mini Statement, detailed transactions, and online bill payments. It provides easy, convenient, flexible and secure payment services for CBE customers.
              </p>
              <a
                href="#"
                className="inline-block bg-[#a58aa8] text-white px-6 py-3 rounded-lg hover:bg-[#927290] transition-colors"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-[--color-puple-800]">Internet Banking Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Account Balances</h3>
                  <div className="border-b-2 border-[--color-gold-300] w-full"></div>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Create Standing Payment Orders</h3>
                  <div className="border-b-2 border-[--color-gold-300] w-full"></div>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Local Money Transfers</h3>
                  <div className="border-b-2 border-[--color-gold-300] w-full"></div>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Account Transaction Details</h3>
                  <div className="border-b-2 border-[--color-gold-300] w-full"></div>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Manage Beneficiary</h3>
                  <div className="border-b-2 border-[--color-gold-300] w-full"></div>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">Utility Payments</h3>
                  <div className="border-b-2 border-[--color-gold-300] w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <img src="/images/howto.png" alt="How to use Internet Banking" className="mx-auto max-w-2xl" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[--color-puple-800]">
            How to use Internet Banking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[--color-puple-800] text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Step 1</h3>
              <p>Register for internet banking by visiting any CBE branch or through our mobile banking app.</p>
            </div>
            <div className="bg-[--color-puple-800] text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Step 2</h3>
              <p>Log in to your internet banking account using your customer ID and password.</p>
            </div>
            <div className="bg-[--color-puple-800] text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Step 3</h3>
              <p>Set up security questions and answers for additional protection.</p>
            </div>
            <div className="bg-[--color-puple-800] text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Step 4</h3>
              <p>Start using all the features of internet banking including transfers, payments, and account management.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}