import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";

const page = () => {
  const people = [
    {
      name: "H.E Ato Ahmed Shide",
      role: "Chairperson",
      photo: "/icon-and-logos/about-us/ahmed.png",
    },
    {
      name: "Woy. Aynalem Nigussie",
      role: "Member",
      photo: "/icon-and-logos/about-us/aynalem.png",
    },
    {
      name: "Ato Wondimagegn Negera",
      role: "Member",
      photo: "/icon-and-logos/about-us/wondimagegn.png",
    },
    {
      name: "W/ro. Tigist Hamid",
      role: "Member",
      photo: "/icon-and-logos/about-us/tigist.png",
    },
    {
      name: "Ato Bereket Fesehatsion Tesfamariam",
      role: "Member",
      photo: "/icon-and-logos/about-us/bereket.png",
    },
    {
      name: "Ato Olani Sekata Duressa",
      role: "Member",
      photo: "/icon-and-logos/about-us/olani.png",
    },
    {
      name: "H.E Ato Moges Balcha Gebremedhin",
      role: "Member",
      photo: "/icon-and-logos/about-us/moges.png",
    },
    {
      name: "Woy. Mahlet Kasa Woldesenbet",
      role: "Member",
      photo: "/icon-and-logos/about-us/mahlet.png",
    },
    {
      name: "Ato Henok Assefa",
      role: "Member",
      photo: "/icon-and-logos/about-us/henok.png",
    },
    {
      name: "Ambassador Henok Teferra Shawl",
      role: "Member",
      photo: "/icon-and-logos/about-us/amb-henok.png",
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

        <div className="mb-12">
          <Image src="" width={250} height={290} alt="" className="mb-3" />
          <p className="text-2xl font-bold line">H.E Ato Ahmed Shide</p>
          <p className="text-2xl font-normal text-">President</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {people.map((person, index) => (
            <div
              key={index}
              // className="relative grid justify-center items-center" {index === 2 ? 'text-red-500 font-bold' : 'text-black'}
            >
              <div className="text-center">
                <Image
                  src={person.photo}
                  width={250}
                  height={290}
                  alt={person.name}
                  className="mb-3 mx-aut"
                />
                <p className="text-xl font-bold line">{person.name}</p>
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
