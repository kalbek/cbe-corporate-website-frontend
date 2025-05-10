import Image from "next/image";
import Hero from "@/components/hero";

const page = () => {
  return (
    <div>
      <Hero
        header="Organizational Structure"
        description="Discover how CBE’s structured leadership and departmental alignment drive operational excellence, strategic growth, and customer-focused service delivery across all levels."
        cta={{ label: "Know More", href: "/" }}
      />
      <section className="font-primary container mx-auto py-4">
        <div className="my-[60px]">
          <h2 className="text-accent text-3xl font-bold mb-5">
            Organizational Structure
          </h2>
          <p className="mb-5">
            Built for Efficiency, Aligned for Impact
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold mb-2">Structure of Organization</h2>
          <h2 className="text-5xl">Commercial Bank of Ethiopia</h2>
        </div>

        <div className="relative h-[900px] my-20 bg-[url(/icon-and-logos/about-us/background.png)] bg-contain bg-no-repeat bg-center">
          <Image
            src="/icon-and-logos/about-us/organization.png"
            alt="Organizational Structure"
            // width={278}
            // height={221}
            fill={true}
            objectFit="contain"
          />
        </div>
      </section>
    </div>
  );
};

export default page;
