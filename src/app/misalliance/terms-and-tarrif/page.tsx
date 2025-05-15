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
                Terms and Tariff
              </h1>
              <p className="max-w-2xl text-base mb-4 text-white !text-white">
                Enjoy attractive interest rates on all CBE deposit accounts.
                Secure your future, grow your savings, and earn up to 7.125%
                annually with confidence and ease.
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

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          {/* Section Title - Centered */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#8E2B8B] mt-12 mb-6">
            Deposit Accounts interest rate
          </h2>
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Deposit Accounts interest rate
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* First data row repeats the header title as in prompt */}
                <tr className="bg-white">
                  <td className="px-4 py-2 text-left align-middle font-normal">
                    Deposit Accounts interest rate
                  </td>
                  <td className="px-4 py-2 text-left align-middle font-normal">
                    -
                  </td>
                  <td className="px-4 py-2 text-left align-middle font-normal">
                    -
                  </td>
                  <td className="px-4 py-2 text-left align-middle font-normal">
                    Interest Rate
                  </td>
                </tr>
                {[
                  { name: 'Ordinary', rate: '7%' },
                  { name: 'Minor', rate: '7%' },
                  { name: 'Women', rate: '7.125%' },
                  { name: 'Youth', rate: '7.125%' },
                  { name: 'Teen Youth', rate: '7.125%' },
                  { name: 'Education', rate: '7.125%' },
                  { name: 'Holiday', rate: '7.5%' },
                  { name: 'Wedding', rate: '7.5%' },
                  { name: 'Demand Deposit', rate: '-' },
                  { name: 'Fixed TIME Deposit', rate: '7.2%' },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Gasha Saving
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'below birr 10,000', rate: '7%' },
                  { name: 'birr 10,000-birr99999', rate: '7.3%' },
                  { name: 'birr 100,000 - birr 500,000', rate: '7.75%' },
                  { name: 'above birr 500,000', rate: '8%' },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    CBE Guzo Saving
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[{ name: 'CBE Guzo saving', rate: '77%' }].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Foreign Hawala Saving
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[{ name: 'Foreign Hawala Saving', rate: '14%' }].map(
                  (row, idx) => (
                    <tr
                      key={row.name}
                      className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                        {row.name}
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                        -
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                        -
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                        {row.rate}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          {/* Section Title - Centered */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#8E2B8B] mt-12 mb-6">
            Banking Business Services
          </h2>
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <h4 className="w-full px-4 py-3 bg-[#8E2B8B] text-white font-bold text-left">
              Deposit Related Account
            </h4>
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Cash Withdrawal at Bank
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Up to Birr 1000', rate: 'free' },
                  { name: 'Birr 1,001-Birr 10,000', rate: 'birr 5' },
                  { name: 'Above Birr 10,000', rate: 'birr 10' },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Replacement of Passbook
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Fully utilized', rate: 'free' },
                  { name: 'Damaged', rate: 'Birr 50' },
                  { name: 'Lost', rate: 'Birr 50' },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Closing Account Before six months of opening
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Closing Account before six months of opening',
                    rate: 'free',
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Standing instruction for first order
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: ' Standing instruction for first order',
                    rate: 'Birr 20',
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Signature Change
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[{ name: 'Signature Change', rate: 'Birr 20/account' }].map(
                  (row, idx) => (
                    <tr
                      key={row.name}
                      className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                        {row.name}
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                        -
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                        -
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                        {row.rate}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Cheque books for private
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: '25 leaves', rate: 'Birr 50' },
                  { name: '50 leaves', rate: 'Birr 215' },
                  { name: '100 leaves', rate: 'Birr 395' },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Stop Payment order
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[{ name: 'Stop Payment order', rate: 'Birr 200/leaf' }].map(
                  (row, idx) => (
                    <tr
                      key={row.name}
                      className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                        {row.name}
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                        -
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                        -
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                        {row.rate}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Balance Confirmation / Saving or Current Account
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Balance Confirmation / Saving or Current Account',
                    rate: 'Birr 100 per case',
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Inactivate Account charge
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Inactive C/A',
                    rate: 'Balance below birr 1,000 = Birr 250 per six months',
                  },
                  {
                    name: 'Inactive S/A',
                    rate: 'Balance below birr 100 = Birr 25 per six months',
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Extra Statement Issuance(Other than once per month)
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Below 1 Year', rate: 'Birr 20 per page' },
                  { name: 'Above 1 Year', rate: 'Birr 20 per page' },
                  { name: 'Through Email', rate: 'Free' },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Duplicate Advice
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Less than two years', rate: 'Birr 20 per page' },
                  { name: 'Over two years', rate: 'Birr 20 per page' },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Postage
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[{ name: 'Postage', rate: 'Birr 100(flat)' }].map(
                  (row, idx) => (
                    <tr
                      key={row.name}
                      className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                        {row.name}
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                        -
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                        -
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                        {row.rate}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Inheritance case Authentication
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: ' Inheritance case Authentication',
                    rate: 'Birr 200 plus third-party charge per case',
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Inheritance of Power of Attorney at the "Document
                    Authentication and Registration Office"
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Online', rate: 'Birr 50' },
                  {
                    name: 'Inperson',
                    rate: 'Birr 200 plus third-party charge per case',
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <h4 className="px-4 py-3 bg-[#8E2B8B] text-white font-bold text-left border border-gray-200 whitespace-nowrap w-full">
              Transfer
            </h4>
            <h4 className="px-4 py-3 bg-[#8E2B8B] text-white font-bold text-left border border-gray-200 whitespace-nowrap w-full">
              {' '}
              LMTS-Local Money Transfer{' '}
            </h4>
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Issuance and Amendment of LMTS
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Up to Birr 3,000',
                    rate: '1/mile Min 3 and service charge of birr 30',
                  },
                  {
                    name: 'Above Birr 3,000',
                    rate: 'Birr 1.25/mille and Service charge of Birr 30',
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Retransfer or Cancelation of LMTS
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Retransfer or Cancelation of LMTS',
                    rate: 'Birr 30',
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Lost LMTS secret number
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[{ name: 'Lost LMTS secret number', rate: 'Birr 30' }].map(
                  (row, idx) => (
                    <tr
                      key={row.name}
                      className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                        {row.name}
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                        -
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                        -
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                        {row.rate}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    LMTS By Staff
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Up to Birr 3,000',
                    rate: '1/mile Min. Birr 3 and Service charge of Birr 30',
                  },
                  {
                    name: 'Above Birr 3,000',
                    rate: 'Birr 1.25/mile and Service charge of Birr 30',
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Account to Account Transfer
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Birr 1- 10,000', rate: 'Birr 5' },
                  { name: 'Birr 10,001- 100,000', rate: 'Birr 10' },
                  {
                    name: 'Above Birr 100,001',
                    rate: 'Fixed Birr 10 plus Birr 5 per thousand',
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Bulk Transfer (Salary Payment)
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Employee with and avg. monthly deposit balance of birr ≤ 100million',
                    rate: 'Free',
                  },
                  {
                    name: 'Employee with and avg. monthly deposit balance of birr > 100million',
                    rate: 'Free',
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Bank to Bank Transfer (EATS)
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Outgoing realtime gross settlement(RTGS) Transaction(Ougoing MT103)',
                    rate: 'Birr 50 plus NBE charge per transaction',
                  },
                  {
                    name: 'Outgoing AA Cheque clearing fee(cheque & CPO)',
                    rate: 'Birr 50 plus NBE charge per cheque and CPO',
                  },
                  {
                    name: 'Outgoing low value payment credit transfer or Bulk credit payments',
                    rate: 'Birr 5 plus NBE charge per transaction',
                  },
                  {
                    name: 'Bank to Bank Transfer(MT202) both incoming and outgoing transaction',
                    rate: 'Birr 50 per transaction(NBE charge only)',
                  },
                  {
                    name: 'Incoming realtime gross settlement(RTGS) Transaction(Incoming MT103)',
                    rate: 'Free',
                  },
                  {
                    name: 'Incoming low value payment(cheque, CPO and credit transfer) or Bulk payments',
                    rate: 'Free',
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Bill Payment
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[{ name: ' Bill Payment', rate: 'Birr 10' }].map(
                  (row, idx) => (
                    <tr
                      key={row.name}
                      className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                        {row.name}
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                        -
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                        -
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                        {row.rate}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <h4 className="px-4 py-3 bg-[#8E2B8B] text-white font-bold text-left border border-gray-200 whitespace-nowrap w-full">
              {' '}
              CPO'S and Certified cheque
            </h4>
            <h4 className="px-4 py-3 bg-[#8E2B8B] text-white font-bold text-left border border-gray-200 whitespace-nowrap w-full">
              {' '}
              CPO Issuance
            </h4>
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    For Account Holders
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[{ name: ' For Account Holders', rate: 'Birr 50' }].map(
                  (row, idx) => (
                    <tr
                      key={row.name}
                      className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                    >
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                        {row.name}
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                        -
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                        -
                      </td>
                      <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                        {row.rate}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    For Non Account Holder
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'for lesstahn birr 100,000', rate: 'birr 500' },
                  { name: 'Birr 100,001-200,000', rate: 'birr 1000' },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Cancelation/Ammendment of CPO
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'For Account Holders', rate: 'Birr 100' },
                  { name: 'For Non Account Holders', rate: 'Birr 200' },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Loss and Refunding
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'For Account Holders', rate: 'Birr 200' },
                  { name: 'For Non Account Holders', rate: 'Birr 400' },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Loss and Replacement
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'For Account Holders', rate: 'Birr 200' },
                  { name: 'For Non Account Holders', rate: 'Birr 400' },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Commission charge on letter of guarantee(Local) against 100%
                    deposit
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: ' Commission charge on letter of guarantee(Local) against 100% deposit',
                    rate: 'Birr 250',
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Service Chnarge on sale of Share
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Service Chnarge on sale of Share', rate: 'Free' },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deposit Accounts Interest Rate Table Section */}
      <section className="relative flex justify-center items-start mt-4 mb-4 px-4">
        {/* Decorative Purple Wave (left) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-0">
          <svg
            width="120"
            height="320"
            viewBox="0 0 120 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 Q60,80 0,120 Q60,160 0,200 Q60,240 0,280"
              stroke="#8E2B8B"
              strokeWidth="6"
              fill="none"
            />
          </svg>
        </div>
        <div className="w-full z-10">
          <div className="overflow-x-auto rounded-lg shadow-sm mx-4 md:mx-16">
            <table className="w-full border border-gray-200 min-w-[600px] table-fixed">
              <thead>
                <tr className="bg-[#8E2B8B]">
                  <th
                    className="px-4 py-3 text-white font-bold text-left whitespace-nowrap w-2/5"
                    colSpan={1}
                  >
                    Safe Deposit Box
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    {' '}
                  </th>
                  <th className="px-4 py-3 text-white font-bold text-left w-1/5">
                    Interest Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Small Box', rate: 'Birr 5,250 per annum' },
                  { name: 'Medium Box', rate: 'Birr 8,750 per annum' },
                  { name: 'Large Box', rate: 'Birr 10,500 per annum' },
                  { name: 'Extra Large Box', rate: 'Birr 14,000 per annum' },
                  { name: 'Deposit for keys', rate: 'Birr 14,000' },
                  {
                    name: 'Penalty for failing to renew contract/pay anual rent/',
                    rate: '100% of the anual reant in arrears. But, 150% of the anual rent in arrears if the payment is above maturity period of the contract',
                  },
                ].map((row, idx) => (
                  <tr
                    key={row.name}
                    className={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-2/5">
                      {row.name}
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-gray-900 w-1/5">
                      -
                    </td>
                    <td className="px-4 py-2 text-left align-middle font-normal text-[#8E2B8B] w-1/5">
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
