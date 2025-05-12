import Hero from "@/components/hero";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Hero
        header="International Trade Service"
        description="The Trade Service is one of the core processes of the bank entrusted with the task of international banking services. The services are now provided at all branches of the bank with a single contact point of customer service relationship officers assigned for this purpose only."
        cta={{ label: "Know More", href: "/" }}
      />
    </div>
  );
};

export default page;
