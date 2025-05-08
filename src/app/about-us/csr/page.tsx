import Hero from "@/components/hero";

const page = () => {
  return (
    <div>
      <Hero
        header="Corporate Social Responsibility"
        description="At CBE, our responsibility goes beyond banking. We invest in people, uplift communities, and support sustainable development to build a better future for all."
        cta={{ label: "Know More", href: "/" }}
      />
    </div>
  );
};

export default page;
