import Hero from "@/components/hero";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Hero
        header="Loan"
        description="It is the oldest CBE product and service and also the main source of income of the bank. Loan create investment that play vital role in economic and social development of the country through creating employment. CBE avails huge amount of loan for the over all investment in the country."
        cta={{ label: "Know More", href: "/" }}
      />
    </div>
  );
};

export default page;
