import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const deposit = [
    {
      title: "Savings Account",
      description:
        "Savings Account is an interest bearing (minimum 7%), deposit that CBE renders for physical and legal persons (Individuals, organizations and associations) who can  fulfill the Bank’s requirement and are legal.",
      photo: "/icon-and-logos/products/deposit-one.png",
      list: [
        "Ordinary Saving",
        "Women Saving Account",
        "Youth saving account",
        "Youth saving account",
        "Education Saving Account",
      ],
      link: "",
    },
    {
      title: "Demand/Current Account",
      description:
        "Demand Deposit Account (current or checking account) is a non-interest bearing account and is opened or operated by literate customers only. Demand deposit account can be opened and/or operated by a legal agent in the name of principal, against producing a power of attorney, which shall be attested by the bank’s legal service department or area offices or branch managers, as the case may be. The minimum amount required by the bank to open a current account for individuals or individual trader is birr 500 and for others birr 1000.",
      photo: "/icon-and-logos/products/deposit-two.png",
      list: [
        "Ordinary Demand Deposit",
        "Special-Demand Deposit Account",
        "ECX related Accounts",
      ],
      link: "",
    },
    {
      title: "Savings Account",
      description:
        "These type of deposit is available for foreign residing nationalities of individual and companies or Ethiopians living abroad (who live more than one year abroad) and Ethiopians by origin but with different nationalities. The Accounts can be used for local payments. These accounts are non- interest bearing account (except fixed time Deposit and Diaspora Non-Repatriable) and source of deposits are foreign currencies that the bank exchange with. These products are available in selected branches of the Bank.",
      photo: "/icon-and-logos/products/deposit-three.png",
      list: [
        "Embassies",
        "Diplomats",
        "International Organizations",
        "Foreign Investors",
        "International Charities",
        "Expatriate Employees of International Organizations",
        "Non-Resident Ethiopians and Foreign Nationals of Ethiopian Origin",
        "Exporters",
      ],
      link: "",
    },
    {
      title: "Savings Account",
      description:
        "Fixed-Time Deposit Account is interest bearing account opened for a particular period (time) and with interest rate fixed by prior agreement made between CBE and the customer. The period of fixed time deposit is greater than or equal to 3 months. Withdrawal is not allowed before the maturity date. However, if the customer requests withdrawal before the maturity date, the withdrawn amount shall be entitled to the prevailing saving interest rate. Minimum initial deposit is Birr 10,000 or USD 5,000.00 or its equivalent in EURO or Pound Sterling.",
      photo: "/icon-and-logos/products/deposit-four.png",
      list: [],
      link: "",
    },
  ];

  const company = [
    "/icon-and-logos/products/company-one.png",
    "/icon-and-logos/products/company-two.png",
    "/icon-and-logos/products/company-three.png",
    "/icon-and-logos/products/company-four.png",
    "/icon-and-logos/products/company-five.png",
    "/icon-and-logos/products/company-six.png",
    "/icon-and-logos/products/company-seven.png",
    "/icon-and-logos/products/company-eight.png",
  ];

  return (
    <div>
      <Hero
        header="Deposit Accounts"
        description="Commercial Bank of Ethiopia (CBE) renders different types of deposit products for physical and legal persons (Individuals, organizations and associations) who can fulfill the Bank’s requirement and are legal."
        cta={{ label: "Know More", href: "/" }}
      />

      <section className="font-primary page-container">
        <h2 className="my-[60px] text-accent text-3xl font-bold mb-5">
          Types of Deposits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-10">
          {deposit.map((deposit, index) => (
            <div key={index} className="shadow-sm">
              <div className="relative min-h-[290px]">
                <Image
                  src={deposit.photo}
                  alt={deposit.title}
                  // width={278}
                  // height={221}
                  fill={true}
                  objectFit="cover"
                  className="rounded-sm"
                />
              </div>
              <div className="p-12">
                <div className="text-2xl font-bold text-accent mb-3">
                  {deposit.title}
                </div>
                <div className="mb-8">{deposit.description}</div>

                {deposit.list.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 mb-1">
                    <Image
                      src="/icon-and-logos/products/play.svg"
                      width={12}
                      height={12}
                      alt="play bullet"
                    />
                    <p>{item}</p>
                  </div>
                ))}

                <Link
                  href={deposit.link}
                  className="flex items-center gap-4 text-accent mt-8 cursor-pointer"
                >
                  <p>Know More</p>
                  <Image
                    src="/icon-and-logos/about-us/arrow-left.svg"
                    width={17}
                    height={10}
                    alt="arrow left"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <hr className="text-[#E8A029] border-1" />
      </section>

      <section className="page-container">
        <h2 className="my-[60px] text-accent text-3xl">
          Money Transfer Companies Working With Us
        </h2>
        <div className="flex items-center justify-between my-15">
          <Image
            src="/icon-and-logos/products/previous.svg"
            width={40}
            height={40}
            alt="previous"
            className="hidden sm:flex ml-2 text-accent"
          />

          <div className="flex items-center gap-15">
            {company.map((item, index) => (
              <Image src={item} width={103} height={60} alt="companys" />
            ))}
          </div>

          <Image
            src="/icon-and-logos/products/next.svg"
            width={40}
            height={40}
            alt="previous"
            className="hidden sm:flex ml-2"
          />
        </div>
      </section>
    </div>
  );
};

export default page;
