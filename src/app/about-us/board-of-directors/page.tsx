"use client";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import { useState } from "react";

interface Person {
  name: string;
  role: string;
  photo: string;
}

const page = () => {
  const people: Person[] = [
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

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Person | null>(null);

  const handleItemClick = (person: Person) => {
    setSelectedItem(person);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="font-primary">
      <Hero
        header="Board of Directors"
        description="Our Board of Directors brings strategic vision, expertise, and leadership to drive CBE’s growth and success, ensuring excellence in banking and service delivery."
        cta={{ label: "Know More", href: "/" }}
      />
      <section className="page-container mb-16">
        <div className="my-[60px]">
          <h2 className="text-accent text-3xl font-bold mb-5">
            Board of Directors
          </h2>
          <p className="mb-5">
            Meet the Board of Directors Steering CBE’s Future
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {people.map((person, index) => (
            <div
              key={index}
              className="relative grid justify-between text-accent"
            >
              <div>
                <Image
                  src={person.photo}
                  width={220}
                  height={240}
                  alt={person.name}
                  className="mb-3"
                />
                <p className="text-[18px] font-bold max-w-[220px]">{person.name}</p>
                <p className="text-[18px] font-normal">{person.role}</p>
              </div>
              <div
                className="flex items-center gap-4 mt-8 cursor-pointer"
                onClick={() => handleItemClick(person)}
              >
                <p>Know More</p>
                <Image
                  src="/icon-and-logos/about-us/arrow-left.svg"
                  width={17}
                  height={10}
                  alt="arrow left"
                />
              </div>
            </div>
          ))}
          <div className="absolute w-[15.48%] aspect-square left-0 -bottom-65 -translate-x-[70%]">
            <img
              src="/icon-and-logos/logos-svg/mask-light-bg.svg"
              alt="Decorative mask"
              className="h-full object-fill"
            />
          </div>
        </div>
      </section>
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-[800px]">
            <div className="flex justify-between items-center border-b border-black/20">
              <p className="text-[18px] font-bold p-4">Board of Directors</p>
              <button
                onClick={closeDialog}
                className="flex justify-center items-center p-4 gap-3"
              >
                <Image
                  src="/icon-and-logos/about-us/close.svg"
                  width={17}
                  height={10}
                  alt="close"
                />
                <span>Close</span>
              </button>
            </div>
            <div className="flex justify-between">
              <Image
                src={selectedItem?.photo}
                width={175}
                height={206}
                alt={selectedItem?.name}
                className="m-10"
              />
              <div>
                <h2 className="mt-10 mb-2 text-[18px] font-bold text-accent">
                  {selectedItem?.name}
                </h2>
                <p className="font-bold mb-2">Chairperson since 2024-02-09</p>
                <p>
                  H.E Ato Ahmed Shide has been chairing CBE’s Board of Directors
                  since February 2024.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
