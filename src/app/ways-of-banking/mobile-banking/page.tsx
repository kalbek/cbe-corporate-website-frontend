export default function MobileBanking() {
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
              <h1 className="text-4xl font-bold mb-4 text-white">
                Mobile Banking
              </h1>
              <p className="max-w-2xl text-base mb-4 text-white !text-white">
                Mobile banking is a service provided by a bank that allows its
                customers to conduct financial transactions remotely using a
                mobile device. Which perform online banking tasks at everywhere,
                any time. Can involve communication through USSD, Internet, or
                an application designed for the bank services;
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

      {/* New Services Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - image */}
          <div className="md:w-1/2">
            <img
              src="/images/mobilebank.png"
              alt="Mobile Banking Services"
              className="w-full h-auto rounded-lg"
            />
          </div>
          {/* Right side - services */}
          <div className="md:w-1/2 space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold !text-[#892890] mb-2 font-bold">
                  Transfer
                </h3>
                <p className="text-gray-700">
                  It allows customers to transfer money from one account to
                  another account or another bank account using mobile banking.
                </p>
                <hr className="border-t border-[#ffd700] my-4" />
              </div>
              <div>
                <h3 className="text-2xl font-bold !text-[#892890] mb-2 font-bold">
                  Telecom services
                </h3>
                <p className="text-gray-700">
                  It enables customers to the airtime from
                  Ethio-telecom/Safaricom and to pay for postpaid bill payments
                  with mobile banking.
                </p>
                <hr className="border-t border-[#ffd700] my-4" />
              </div>
              <div>
                <h3 className="text-2xl font-bold !text-[#892890] mb-2 font-bold">
                  Utilities
                </h3>
                <p className="text-gray-700">
                  It enables customers to pay for different services such as
                  electricity, water and other utilities provided by the public.
                </p>
                <hr className="border-t border-[#ffd700] my-4" />
              </div>
              <div>
                <h3 className="text-2xl font-bold !text-[#892890] mb-2 font-bold">
                  Government services
                </h3>
                <p className="text-gray-700">
                  It allows customers to pay for different governmental services
                  such as payment for Addis Ababa revenue tax, immigration,
                  Ministry of Trade and Industry, Dire Dawa and Somalirevenue
                  tax payment etc
                </p>
                <hr className="border-t border-[#ffd700] my-4" />
              </div>
              <div>
                <h3 className="text-2xl font-bold !text-[#892890] mb-2 font-bold">
                  PayFor
                </h3>
                <p className="text-gray-700">
                  It allows customers to pay for different fees such as merchant
                  fees, school fees, health payments, donations and Digital Equb
                  etc.
                </p>
                <hr className="border-t border-[#ffd700] my-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
        <div className="w-full space-y-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold !text-[#892890] mb-2 font-bold">
                Travel
              </h3>
              <p className="text-gray-700">
                It enables customers to pay for both land(Guzo go, ride driver,
                Guzo bus ticket &Kelal ticket) and air transport.
              </p>
              <hr className="border-t border-[#ffd700] my-4" />
            </div>
            <div>
              <h3 className="text-2xl font-bold !text-[#892890] mb-2 font-bold">
                Entertainment
              </h3>
              <p className="text-gray-700">
                It enables customers to pay for entertainment channels such as
                Canal+, DSTV and Webs Prix.
              </p>
              <hr className="border-t border-[#ffd700] my-4" />
            </div>
            <div>
              <h3 className="text-2xl font-bold !text-[#892890] mb-2 font-bold">
                Banking
              </h3>
              <p className="text-gray-700">
                It enables customers to acquire non-financial services such as
                viewing locked amounts, standing orders, requesting new and
                replacement ATM/ Visa cards, managing beneficiaries, exchange
                rate, ATM, branch, CBEBirr agent, and Merchant POS locator and
                customer feedback.
              </p>
              <hr className="border-t border-[#ffd700] my-4" />
            </div>
            <div>
              <h3 className="text-2xl font-bold !text-[#892890] mb-2 font-bold text-wrap">
                In addition to the above-mentioned mobile banking service,
                customers can get the following services at any CBE branch and
                951:
              </h3>
              <p className="text-gray-700">
                • Channels add: if a customer has only one channel, he/she can
                request an additional channel in any of the CBE branches •
                Modify End Date: if the customer's access date for mobile
                banking is expired, he/she can appear at any of the branches and
                request an access date extension. • Channel Reset/Pin Reset: if
                a customer forgets their mobile banking PIN, he/she can appear
                at any of CBE branches and request a PIN reset. • Change Phone
                Number: if a customer wants to change phone number, he/she can
                appear at any of the CBE branches and request a phone number
                change to his mobile banking service. • Mobile phone apparatus
                change: if a customer wants to change their mobile phone
                apparatus, he/she can request the service at any of the CBE
                branches • Blocking a mobile banking user: if a customer has
                lost his/her mobile phone unfortunately, he/she can appear at
                any of CBE branches or call 951 and request to block his mobile
                banking user. • Resume Mobile Banking service: When a customer
                wants to resume his/her mobile banking service that has been
                blocked previously, he/she can appear at any of the CBE branches
                and request to resume the service. • Add/Link/ Additional
                Account: Any existing customers having an additional account
                maintained at the T-24 system under the same customer ID, can
                request to associate additional accounts to his/her mobile
                banking.
              </p>
              <hr className="border-t border-[#ffd700] my-4" />
            </div>
            <div>
              <h3 className="text-2xl font-bold !text-[#892890] mb-2 font-bold">
                Customer Support
              </h3>
              <p className="text-gray-700">
                For any complaints about customer service management or any
                feedback, please use the following options:
              </p>
              <p className="text-gray-700">
                • Directly apply to the Branch Manager who created the complaint
                • Call 951 • Use the feedback option on our Mobile Banking
                application
              </p>
              <p className="text-gray-700 mt-2">
                In addition; to get up-to-date information, please join our
                official telegram channel{' '}
                <a
                  href="https://t.me/combankethofficial"
                  className="text-[#892890] hover:text-[#6d1f78]"
                >
                  https://t.me/combankethofficial
                </a>
              </p>
              <hr className="border-t border-[#ffd700] my-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
