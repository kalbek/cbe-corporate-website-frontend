

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/images/hero.png"
          alt="Privacy Policy Hero"
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
              <h1 className="text-4xl font-bold mb-4 text-white">Privacy Policy</h1>
              <p className="max-w-2xl text-base mb-4 text-white !text-white">
                The platform is available for both Android and IOS with highly secured API protection , very easy, friendly UI and fast with instant settlement, senders can use their visa and MasterCard debit or credit cards to transfer the money.
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

      {/* Privacy Policy Content */}
      <div className="bg-gray-50 py-16 w-full">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#86198f] mb-12">
            Privacy Policy & Customer Data Protection
          </h1>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              The Commercial Bank of Ethiopia (CBE) is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines our practices regarding the collection, use, disclosure, and protection of your data.
            </p>
          </section>

          {/* Data Collection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Collection</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We collect personal information about you only when it is necessary for our legitimate business needs, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><span className="font-medium">Opening and managing accounts:</span> Name, address, contact information, identification documents, income information, and transactional data.</li>
              <li><span className="font-medium">Providing you with banking products and services:</span> Transaction details, loan applications and repayments, and service preferences.</li>
              <li><span className="font-medium">Preventing fraud and managing risk:</span> Transaction monitoring, identity verification, and compliance with legal and regulatory requirements.</li>
              <li><span className="font-medium">Improving our services:</span> Analyzing customer behavior to personalize offerings and identify areas for improvement.</li>
            </ul>
          </section>

          {/* Data Disclosure */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Disclosure</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We will not disclose your personal information to any third party without your consent, except in the following situations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><span className="font-medium">To service providers who help us operate our business:</span> These providers are obligated to protect your information and use it only for the purposes we specify.</li>
              <li><span className="font-medium">To comply with legal and regulatory requirements:</span> We may disclose your information to law enforcement agencies or other government officials if required by law.</li>
              <li><span className="font-medium">To protect our rights and interests:</span> We may disclose your information to defend ourselves against legal claims or investigations.</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We take appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We will retain your personal information for as long as it is necessary for the purposes described in this policy unless a longer retention period is required by law.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Access your personal information and request corrections or updates.</li>
              <li>Object to the processing of your personal information.</li>
              <li>Lodge a complaint with a supervisory authority.</li>
            </ul>
          </section>

          {/* Contact Us */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-700"><span className="font-medium">Call Center:</span> +251591</p>
              <p className="text-gray-700"><span className="font-medium">Website:</span> <a href="https://combanketh.et" className="text-[#6b46c1] hover:underline">https://combanketh.et</a></p>
            </div>
          </section>

          {/* Second Contact Us Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-700"><span className="font-medium">Call Center:</span> +251591</p>
              <p className="text-gray-700"><span className="font-medium">Website:</span> <a href="https://combanketh.et" className="text-[#6b46c1] hover:underline">https://combanketh.et</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}