export default function Careers() {
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
              <h1 className="text-4xl font-bold mb-4 text-white">Careers</h1>
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
      {/* Careers Section (Below Hero) */}
      <section className="relative w-full bg-white px-4 pt-12 pb-20">
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
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Company Introduction Block */}
          <div className="max-w-[700px] text-left ml-0">
            <h2 className="text-3xl font-bold text-purple-800 mt-12 mb-2">
              Come an join our team
            </h2>
          </div>
          <p className="text-base text-gray-700 my-4">
            At the Commercial Bank of Ethiopia, we believe in nurturing talent
            and empowering individuals to grow professionally. Our diverse and
            inclusive work environment offers meaningful career opportunities
            across various fields, from finance and technology to customer
            service and operations. Join us to shape the future of banking in
            Ethiopia while building a fulfilling career.
          </p>
          {/* Action Buttons */}
          <div className="max-w-[700px] text-left ml-0">
            <div className="flex flex-col space-y-4 mb-4">
              <a
                href="#about"
                className="inline-block self-start border border-[#8E2B8B] text-[#8E2B8B] font-medium rounded-md px-4 py-2 hover:bg-[#8E2B8B] hover:text-white transition-all duration-300"
              >
                About Our CBE
              </a>
              <a
                href="#apply"
                className="inline-block text-[#8E2B8B] font-bold rounded-md px-4 py-2 hover:underline transition-all duration-300"
              >
                Apply Now
              </a>
            </div>
            {/* Application Email Text */}
            <div className="mb-2 text-base text-gray-700">
              Interested candidates can apply by sending their resume and cover
              letter to our recruitment team via email. Please mention the job
              title in the subject line of your email.
            </div>
            <div className="mb-8 text-base">
              <span className="font-medium text-[#8E2B8B]">
                Email:{' '}
                <a
                  href="mailto:careers@cbe.co.et"
                  className="underline hover:opacity-80"
                >
                  careers@cbe.co.et
                </a>
              </span>
            </div>
          </div>
          {/* Subheading */}
          <h3 className="text-2xl font-bold text-purple-800 text-center mt-10 mb-6">
            Current Opening
          </h3>
          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Job cards from prompt */}
            {[
              {
                title: 'Finance analyst',
                desc: 'Analyze financial data, prep reports',
                location: 'Addis Ababa',
                type: 'Full time',
              },
              {
                title: 'General office manager',
                desc: 'Manage operations, reporting',
                location: 'Addis Ababa',
                type: 'Full time',
              },
              {
                title: 'Branch Operations Officer',
                desc: 'Supervise branch ops and staff',
                location: 'Dire Dawa',
                type: 'Full time',
              },
              {
                title: 'Credit Analyst',
                desc: 'Assess risk and creditworthiness',
                location: 'Addis Ababa',
                type: 'Full time',
              },
              {
                title: 'Digital Banking Support Specialist',
                desc: 'Support digital channels and systems',
                location: 'Addis Ababa',
                type: 'Full time',
              },
              {
                title: 'Risk and Compliance Officer',
                desc: 'Monitor compliance, internal audit',
                location: 'Addis Ababa',
                type: 'Full time',
              },
              {
                title: 'Customer Relationship Manager',
                desc: 'Maintain high-value client relations',
                location: 'Addis Ababa',
                type: 'Full time',
              },
            ].map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-md shadow-sm border border-gray-200 p-6 flex flex-col h-full"
              >
                <h4 className="text-lg font-bold mb-2 text-[#8E2B8B]">
                  {job.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                  {job.desc}
                </p>
                <div className="flex flex-row space-x-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                        fill="#8E2B8B"
                      />
                    </svg>
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M17 10.5V7a5 5 0 0 0-10 0v3.5a4.5 4.5 0 1 0 9 0zM12 22a7 7 0 0 0 7-7h-2a5 5 0 0 1-10 0H5a7 7 0 0 0 7 7z"
                        fill="#8E2B8B"
                      />
                    </svg>
                    {job.type}
                  </span>
                </div>
                <a
                  href="#apply"
                  className="mt-auto w-full py-1.5 border border-[#8E2B8B] text-[#8E2B8B] rounded text-center font-medium hover:bg-[#8E2B8B] hover:text-white transition"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
