'use client';

const atmData = [
  { name: "3 Kuter Mazoria Branch Atm 1", country: "Ethiopia" },
  { name: "4 Kilo Silasie", country: "Ethiopia" },
  { name: "A A University 4 Kilo Campmus Atm", country: "Ethiopia" },
  { name: "A A UNIVERSITY 5 KILO CAMPUS Atm", country: "Ethiopia" },
  { name: "Abageda Branch Atm 1", country: "Ethiopia" },
  { name: "Abajifar Branch Atm 1", country: "Ethiopia" },
  { name: "Abakoran Branch Atm 1", country: "Ethiopia" },
  { name: "Abay Mado Branch Atm 2", country: "Ethiopia" },
  { name: "Abayer Branch Atm 1", country: "Ethiopia" }
];

export default function AtmBranchLocator() {
  return (
    <div className="bg-white">
      <div className="min-h-screen relative">
        <img
          src="/hero.png"
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
              <h1 className="text-4xl font-bold mb-4 text-white">Locator</h1>
              <p className="max-w-2xl text-base mb-4 text-white !text-white">
               Easily locate the nearest CBE branch or ATM—anytime, anywhere. Our locator tool helps you access banking services quickly, no matter where you are. 
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
   
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-purple-700 mb-4">Locator</h1>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="px-6 py-2 bg-purple-700 text-white rounded-lg">ATM's</button>
          <button className="px-6 py-2 border border-purple-700 text-purple-700 rounded-lg">Branches</button>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search for branch"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - ATM List */}
          <div className="bg-white rounded-lg shadow">
            <div className="overflow-y-auto max-h-[600px]">
              {atmData.map((atm, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 last:border-0"
                >
                  <div className="p-4 flex items-start">
                    <div className="w-8 h-8 flex-shrink-0 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-5 h-5 text-purple-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{atm.name}</h3>
                      <p className="text-gray-600">{atm.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="bg-white rounded-lg shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.779801886019!2d38.75319461476103!3d9.02498499377008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b888888888889%3A0x164b888888888888!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1683467499000!5m2!1sen!2sus"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}