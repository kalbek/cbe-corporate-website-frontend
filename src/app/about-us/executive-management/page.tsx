import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";

const page = () => {
  const people = [
    {
      name: "Ato Dereje Fufa",
      role: "Executive VP–Retail and Branch Banking",
      photo: "/icon-and-logos/about-us/dereje.png",
    },
    {
      name: "Ato Fikreselassie Zewdu ",
      role: "VP - Credit",
      photo: "/icon-and-logos/about-us/fikresilassie.png",
    },
    {
      name: "Ato Amare Assefa",
      role: "VP – Information System",
      photo: "/icon-and-logos/about-us/amare.png",
    },
    {
      name: "Ato Haileyesus Bekele",
      role: "VP–Customer Experience",
      photo: "/icon-and-logos/about-us/haileyesus.png",
    },
    {
      name: "Ato Ephrem Mekuria",
      role: "VP – Human Resource",
      photo: "/icon-and-logos/about-us/ephrem.png",
    },
    {
      name: "Woy. Makeda Oumer",
      role: "Member",
      photo: "/icon-and-logos/about-us/makida.png",
    },
    {
      name: "Ato Yonas Lidetu",
      role: "VP – Finance",
      photo: "/icon-and-logos/about-us/yonas.png",
    },
    {
      name: "Ato Nuri Hussein",
      role: "VP - CBE Noor",
      photo: "/icon-and-logos/about-us/nuri.png",
    },
    {
      name: "Ato Wegayehu Gebremariam",
      role: "VP – Digital Banking",
      photo: "/icon-and-logos/about-us/wegayehu.png",
    },
    {
      name: "Wzo. Sosina Alemayehu",
      role: "VP – Legal Service",
      photo: "/icon-and-logos/about-us/sosina.png",
    },
    {
      name: "Ato Surra Saketa",
      role: "VP - Facilities Management",
      photo: "/icon-and-logos/about-us/sura.png",
    },
    {
      name: "Ato Mulugeta Sarko",
      role: "VP - Internal Audit",
      photo: "/icon-and-logos/about-us/mulugeta.png",
    },
    {
      name: "Ato Boku Begna",
      role: "VP- Wholesale Banking",
      photo: "/icon-and-logos/about-us/boku.png",
    },
    {
      name: "Ato Firew Gebreselassie",
      role: "VP – Risk Management and Compliance",
      photo: "/icon-and-logos/about-us/frew.png",
    },
    {
      name: "Dr. Eskinder Asfaw",
      role: "VP – Strategy, Planning and Transformation Office",
      photo: "/icon-and-logos/about-us/eskinder.png",
    },
  ];

  
  return (
    <div>
      <Hero
        header="Executive Management"
        description="Our Executive Management team brings together visionary leadership and deep industry experience to guide CBE towards innovation, growth, and unmatched customer service."
        cta={{ label: "Know More", href: "/" }}
      />
      <section className="container mx-auto p-4 mb-16 font-primary">
        <div className="my-[60px]">
          <h2 className="text-accent text-3xl font-bold mb-8">
            Executive Management
          </h2>
          <p className="mb-1 font-bold">
            Leading with Expertise Driving Excellence
          </p>
          <p className="mb-5">
            Get to Know the Board Shaping CBE’s Strategic Direction
          </p>
        </div>

        <div className="inline-block text-center mb-12">
          <Image
            src="/icon-and-logos/about-us/abie.png"
            width={250}
            height={290}
            alt=""
            className="mb-3"
          />
          <p className="text-2xl font-bold text-[#E8A029]">H.E Ato Abie Sano</p>
          <p className="text-2xl">President</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {people.map((person, index) => (
            <div
              key={index}
              className=""
              // className="relative grid justify-center items-center" {index === 2 ? 'text-red-500 font-bold' : 'text-black'}
            >
              <div className="relative inline-block text-center h-[290px] w-[250] mb-3">
                <Image
                  src={person.photo}
                  width={250}
                  height={290}
                  // fill={true}
                  // objectFit="contain"
                  alt={person.name}
                />
                <p className="w-[250px] text-xl accent mt-3">{person.name}</p>
                <p className="text-sm font-normal text-">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
