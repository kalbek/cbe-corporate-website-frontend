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
        header="Board of Directors"
        description="Our Board of Directors brings strategic vision, expertise, and leadership to drive CBE’s growth and success, ensuring excellence in banking and service delivery."
        cta={{ label: "Know More", href: "/" }}
      />
      <section className="container mx-auto p-4">
        <div className="my-[60px]">
          <h2 className="text-accent text-3xl font-bold mb-5">
            Board of Directors
          </h2>
          <p className="mb-5">
            Meet the Board of Directors Steering CBE’s Future
          </p>
        </div>
        <div className="grid grid-cols-<100px> gap-8">
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
