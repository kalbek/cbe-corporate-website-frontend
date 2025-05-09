import Hero from "@/components/hero";
export default function CbeBirr() {
  const steps = [
    {
      title: "STEP 1",
      description:
        "Fill out application form at one of CBE branches, Agents, or Merchants",
    },
    {
      title: "STEP 2",
      description:
        "You will receive authentication(PIN) code from CBE Birr system",
    },
    {
      title: "STEP 3",
      description: "To activate Use PIN and change it to your PIN.",
    },
    {
      title: "STEP 4",
      description: "FINISH",
    },
  ];
  const featuresLeft = [
    "Send Money",
    "Buy Air Time",
    "Pay Bill",
    "Taxi Payment",
    "Mini Statement",
    "Condominium Loan Repayment",
    "Linked Bank Service",
    "Fuel Payment From Bank Account",
    "Fuel Payment From Bank Account",
    "Fundraising",
  ];

  const featuresRight = [
    "Cash Out",
    "Buy Goods",
    "Balance",
    "Manage Beneficiary",
    "Scheduled Payment",
    "Air Time Package Sales",
    "Customer Self Registration",
    "CBEBejeMSL",
    "Magic Pay",
    "All Balance",
  ];
  return (
    <div className="font-primary">
      <Hero
        header="CBE Birr (*847#)"
        description="Internet banking allows a user to conduct financial transactions via the Internet offers almost every service traditionally available through a local branch including balance inquiry, transfers, Mini Statement, detailed transactions, and online bill payments. Itprovides easy, convenient, flexible and secure payment services for CBE customers."
        cta={{ label: "Know More", href: "/" }}
      />
      <section className="container mx-auto px-4 grid grid-cols-3 gap-10 py-15">
        <div className="col-span-2 pb-20 pr-5">
          <h2 className="text-accent text-[18px] font-bold mb-5 text-[#892890]">
            CBE Birr (*847#)
          </h2>
          <p className="mb-4">
            CBE Birr is a mobile money service streamed by Commercial Bank of
            Ethiopia through a network of mobile money agents. Customers with
            mobile phone and SIM can register and open CBE Birr account (Wallet
            Account) at authorised agents or CBE branches. Customers can also
            make online self-registration for the service (level 01
            registration) using CBE Birr app by providing ID and Photo. Once
            customers are registered for CBE Birr service, they can deposit cash
            at the agents or CBE Branches in exchange for electronic money or
            can transfer money from their bank account to their CBE Birr wallet
            using mobile banking service. Sending and receiving money, bill
            payments, fuel payment, condominium loan repayment, airtime top-up,
            flight ticket payment, school fee payment, tax payment are the few
            services among many more services provided by CBE Birr.
          </p>
          <div className=" flex gap-10 w-fit">
            {/* app store */}
            <img
              src="/icon-and-logos/logos-svg/appstore-white.svg"
              alt="phone-icon"
            />
            {/* google play */}
            <img
              src="/icon-and-logos/logos-svg/googleplay-white.svg"
              alt="phone-icon"
            />
          </div>
        </div>
        <div className="pl-30">
          <img
            src="/icon-and-logos/logos-svg/CBE Birr.svg"
            alt="cbe birr-icon"
          />
        </div>
      </section>
      <div className="absolute w-[15.48%] aspect-square left-0 -bottom-65 -translate-x-[70%]">
        <img
          src="/icon-and-logos/logos-svg/mask-light-bg.svg"
          alt="Decorative mask"
          className="h-full object-fill"
        />
      </div>
      <div className="container mx-auto py-4 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="px-10 py-7 text-center rounded-2xl bg-[#892890]"
            >
              <h2 className="text-xl font-bold mb-2 card-content">{step.title}</h2>
              <p className="text-xl font-normal card-content">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white px-6 py-12 flex justify-center items-start ">
        <div className="container mx-auto px-4 w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-[#892890] mb-10">
            CBE Birr Features
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
            {/* Left Column */}
            <ul className="space-y-4">
              {featuresLeft.map((feature, index) => (
                <li
                  key={index}
                  className={`pb-2 ${
                    index !== featuresLeft.length - 1
                      ? "border-b border-yellow-400"
                      : ""
                  }`}
                >
                  {feature}
                </li>
              ))}
            </ul>

            {/* Vertical Divider & Right Column */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-yellow-400 hidden md:block"></div>
              <ul className="space-y-4 pl-6 md:pl-10">
                {featuresRight.map((feature, index) => (
                  <li
                    key={index}
                    className={`pb-2 ${
                      index !== featuresRight.length - 1
                        ? "border-b border-yellow-400"
                        : ""
                    }`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
