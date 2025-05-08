import Hero from "@/components/hero";

const page = () => {
  return (
    <div>
      <Hero
        header="Organizational Structure"
        description="Discover how CBE’s structured leadership and departmental alignment drive operational excellence, strategic growth, and customer-focused service delivery across all levels."
        cta={{ label: "Know More", href: "/" }}
      />
    </div>
  );
};

export default page;
