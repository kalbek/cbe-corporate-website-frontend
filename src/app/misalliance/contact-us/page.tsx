export default function ContactUs() {
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
            <span className="text-2xl text-white cursor-pointer hover:text-gray-300 transition-colors">
              &lt;
            </span>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
            <span className="text-2xl text-white cursor-pointer hover:text-gray-300 transition-colors">
              &gt;
            </span>
          </div>
          {/* Left half - empty */}
          <div className="w-1/2"></div>
          {/* Right half - content */}
          <div className="w-1/2 flex items-center justify-center">
            <div className="max-w-2xl px-8 py-6">
              <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
              <p className="max-w-2xl text-base mb-4 text-white !text-white">
                Get in touch with us for any inquiries or support. We're here to
                help—reach out via phone, email, or visit your nearest CBE
                branch today.
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

      {/* Contact Us Section (Below Hero) */}
      <section className="w-full bg-white pt-12 pb-20 px-4">
        {/* Contact Info Grid */}
        <div className="w-full mb-12">
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden w-full">
            {/* Our Location */}
            <div className="flex-1 p-6 flex flex-col items-start justify-center border-b md:border-b-0 md:border-r border-[#FFD700]">
              <div
                className="font-bold text-lg mb-2"
                style={{ color: '#8E2B8B', fontWeight: 'bold' }}
              >
                Our Location
              </div>
              <div className="text-gray-700 leading-relaxed">
                Ras Desta Damtew St,
                <br />
                01, Kirkos, Addis Ababa, Ethiopia
              </div>
            </div>
            {/* Our Contacts */}
            <div className="flex-1 p-6 flex flex-col items-start justify-center border-b md:border-b-0 md:border-r border-[#FFD700]">
              <div
                className="font-bold text-lg mb-2"
                style={{ color: '#8E2B8B', fontWeight: 'bold' }}
              >
                Our Contacts
              </div>
              <div className="text-gray-700 leading-relaxed">
                Telephone: +251-551-50-04
                <br />
                Fax: +251-551-45-22
              </div>
            </div>
            {/* Email */}
            <div className="flex-1 p-6 flex flex-col items-start justify-center border-b md:border-b-0 md:border-r border-[#FFD700]">
              <div
                className="font-bold text-lg mb-2"
                style={{ color: '#8E2B8B', fontWeight: 'bold' }}
              >
                Email
              </div>
              <div className="text-gray-700 leading-relaxed">
                info@cbe.com.et
              </div>
            </div>
            {/* SWIFT Code */}
            <div className="flex-1 p-6 flex flex-col items-start justify-center">
              <div
                className="font-bold text-lg mb-2"
                style={{ color: '#8E2B8B', fontWeight: 'bold' }}
              >
                SWIFT Code
              </div>
              <div className="text-gray-700 leading-relaxed">CBETETAA</div>
            </div>
          </div>
        </div>

        {/* Get In Touch Form */}
        <div className="max-w-2xl bg-white rounded-lg shadow-md p-8 text-left">
          <h2 className="text-2xl font-bold text-[#8E2B8B] mb-2 text-left">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-6 text-left">
            Complete the form for us to reach out
          </p>
          <form className="space-y-5 text-left">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 mb-4 md:mb-0">
                <label
                  className="block text-[#8E2B8B] font-semibold mb-1"
                  htmlFor="name"
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#8E2B8B]"
                  placeholder="Full Name"
                />
              </div>
              <div className="flex-1">
                <label
                  className="block text-[#8E2B8B] font-semibold mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#8E2B8B]"
                  placeholder="Email Address (optional)"
                />
              </div>
            </div>
            <div>
              <label
                className="block text-[#8E2B8B] font-semibold mb-1"
                htmlFor="phone"
              >
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                required
                id="phone"
                name="phone"
                type="tel"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#8E2B8B]"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label
                className="block text-[#8E2B8B] font-semibold mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#8E2B8B]"
                placeholder="Enter message here"
              ></textarea>
            </div>
            <div>
              <label
                className="block text-[#8E2B8B] font-semibold mb-1"
                htmlFor="how-found"
              >
                How did you find us?
              </label>
              <select
                id="how-found"
                name="how-found"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#8E2B8B]"
              >
                <option value="">Select an option</option>
                <option value="search">Search Engine</option>
                <option value="friend">Friend/Colleague</option>
                <option value="advert">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#8E2B8B] hover:bg-[#6c206a] text-white font-bold py-3 rounded-lg transition-colors mt-2 shadow-md"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
