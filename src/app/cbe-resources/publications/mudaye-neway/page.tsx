import Hero from "@/components/hero";
export default function MudayeNeway() {


  return (
    <div className="font-primary">
      <Hero
        header="CBE Publications"
        description="Access official reports, updates, and insights from CBE—your trusted source for transparency, performance, and financial growth."
        cta={{ label: "Know More", href: "/" }}
      />
      <section className="container mx-auto px-4 grid grid-cols-3 gap-10 py-15">
        <div className="col-span-2 pb-20 pr-5 mb-300">
          <h2 className="text-accent text-[30px] font-bold mb-5 text-[#892890]">
            Publications
          </h2>
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