import Hero from "@/components/hero";
export default function CbeEthioDirect() {
  return (
    <div className="font-primary">
    <Hero
      header="CBE Ethio Direct"
      description="The platform is available for both Android and IOS with highly secured API protection , very easy, friendly UI and fast with instant settlement, senders can use their visa and MasterCard debit or credit cards to transfer the money. "
      cta={{ label: "Know More", href: "/" }}
    />
     <section className="container mx-auto px-4 grid grid-cols-3 gap-10 py-15">
        <div className="col-span-2 pb-20 pr-5 mb-300">
          <h2 className="text-accent text-[18px] font-bold mb-5 text-[#892890]">
            CBE Birr (*847#)
          </h2>
          <p className="mb-4">EthioDirect Remittance Platform</p>
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
          </section>
          <div className="absolute w-[15.48%] aspect-square left-0 -bottom-65 -translate-x-[70%]">
            <img
              src="/icon-and-logos/logos-svg/mask-light-bg.svg"
              alt="Decorative mask"
              className="h-full object-fill"
            />
          </div>
    </div>
  );
}
