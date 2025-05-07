import Image from "next/image";
import Hero from "@/components/hero";

const page = () => {
  const items = [
    "Integrity",
    "Innovative Organization",
    "Service Excellence",
    "Teamwork",
    "Professionalism",
    "Respect for Diversity",
    "Empowerment",
    "Corporate Citizenship",
  ];

  return (
    <div>
      <Hero
        header="About CBE"
        description="With a legacy of trust, innovation, and service excellence, Commercial Bank of Ethiopia stands as the nation’s leading financial institution. Discover our journey, values, and unwavering commitment to empowering individuals, businesses, and communities across Ethiopia and beyond."
        cta={{ label: "Know More", href: "/" }}
      />
      <section className="container mx-auto px-4 grid grid-cols-3 gap-7 py-16">
        <div className="col-span-2 pb-20 pr-5">
          <h2 className="text-accent text-3xl font-bold mb-5">About CBE</h2>
          <p className="mb-5">
            The history of Commercial Bank of Ethiopia (CBE) dates back to the
            establishment of the State Bank of Ethiopia in 1942. CBE was legally
            established as a share company in 1963. Since then, it has been
            playing signiﬁcant roles in the development of the country.
            Currently CBE has more than 40+ million account holders in its more
            than 1940+ branches and the number of Mobile and Internet Banking
            users also reached more than 6.6 million and 37k. Active ATM card
            holders reached more than 8.3 million and 17 million CBE Birr users.
          </p>
          <h2 className="text-accent text-3xl font-bold mb-5">Vision</h2>
          <p className="mb-5">
            To become a world-class commercial bank financially driving
            Ethiopia's future..
          </p>
          <h2 className="text-accent text-3xl font-bold mb-5">Mission</h2>
          <p className="mb-5">
            “We are committed to realizing stakeholder’s value through enhanced
            financial intermediation globally, deploying highly motivated and
            skilled employees.”
          </p>
          <div className="absolute w-[15.48%] aspect-square left-0 -bottom-65 -translate-x-[70%]">
            <img
              src="/icon-and-logos/logos-svg/mask-light-bg.svg"
              alt="Decorative mask"
              className="h-full object-fill"
            />
          </div>
        </div>
        <div className="relative">
          <Image
            src="/icon-and-logos/about-us/cbe.png"
            // width={}
            // height={100%}
            // style={{ objectFit: "contain" }}
            alt="Picture of the author"
            className=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <div>
          <h2 className="text-accent text-3xl font-bold mb-5">Core Value</h2>
          <p className="mb-5">
            Our core values detailed below are the operating principles that
            guide our internal conduct as well as our relationship with our
            customers, partners, and shareholders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div className="flex items-center gap-4 bg-[#E8A029] py-5 px-10 rounded-xs">
              <Image
                src="/icon-and-logos/about-us/play.svg"
                width={12}
                height={12}
                alt="Picture of the author"
                className=""
              />
              <p className="text-xl font-bold text-">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
