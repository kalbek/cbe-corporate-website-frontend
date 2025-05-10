"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Hero from "@/components/hero";

const newsItems = [
  {
    id: "1",
    uniqueId: "news_one",
    title: "አሻራችን ለልጆቻችን",
    date: "15 Aug 2022",
    image: "/icon-and-logos/about-us/news-one.png",
    description:
      "“አሻራችን ለልጆቻችን” በሚል መሪ ቃል በኢትዮጵያ ዘንድሮ ለአራተኛ ጊዜ ከሚካሄደው የአረንጓዴ አሻራ መርሐ-ግብር ጋር በተያያዘ የባንኩ የዳይሬክተሮች ቦርድ አባላት፣ ማኔጅመንት እና ሠራተኞች በመላ ሀገሪቱ ከ500 ሺ በላይ ችግኞችን ተከሉ፡፡",
  },
  {
    id: "2",
    uniqueId: "news_two",
    title: "የኢትዮጵያ ንግድ ባንክ የዳይሬክተሮች ቦርድ አባላት፣...",
    date: "09 Aug 2021",
    image: "/icon-and-logos/about-us/news-two.png",
    description:
      "የኢትዮጵያ ንግድ ባንክ የዳይሬክተሮች ቦርድ አባላት፣ ማኔጅመንትና ሠራተኞች በሀገር አቀፍ ደረጃ ከ620 ሺህ በላይ ችግኞችን ተከሉ።",
  },
  {
    id: "3",
    uniqueId: "news_three",
    title: "በጎልፍ ክለብ የመጫወቻ ሜዳ 3 ሺህ ችግኞች ተተክለዋል፡፡",
    date: "03 Jul 2021",
    image: "/icon-and-logos/about-us/news-three.png",
    description:
      "በጎልፍ ክለብ የስፖርት መጫወቻ ሜዳ 3 ሺህ ችግኞች በባንካችን ሠራተኞች እና በጎልፍ ማህበሩ አባላት ተተክለዋል፡፡",
  },
  {
    id: "4",
    uniqueId: "news_four",
    title: "CBE donates 10 million birr for the effort in...",
    date: "06 May 2021",
    image: "/icon-and-logos/about-us/news-four.png",
    description:
      "CBE donates 10 million birr for the effort in preventing corona virus pandemic in the nation",
  },
  {
    id: "5",
    uniqueId: "news_five",
    title: "CBE Board of Directors, Management and Employees...",
    date: "06 May 2021",
    image: "/icon-and-logos/about-us/news-five.png",
    description:
      "The Commercial Bank of Ethiopia Board of Directors, management and employees planted 1 million tree seedlings in various selected areas across the country, August 1st 2020.",
  },
  {
    id: "6",
    uniqueId: "news_six",
    title: "CBE donates Blood",
    date: "04 May 2021",
    image: "/icon-and-logos/about-us/news-six.png",
    description:
      "CBE’s president Ato Abe Sano , management and employees has donated blood for those in need participating in law enforcement around northern part of the country and Tirgray region",
  },
];

export default function News() {
  const [activePage, setActivePage] = useState(1);
  return (
    <div className="font-primary">
      <Hero
        header="Corporate Social Responsibility"
        description="At CBE, our responsibility goes beyond banking. We invest in people, uplift communities, and support sustainable development to build a better future for all."
        cta={{ label: "Know More", href: "/" }}
      />
      <section className="page-container mb-16">
        <div className="my-[60px]">
          <h2 className="text-accent text-3xl font-bold mb-5">
            Corporate Social Responsibility
          </h2>
          <p className="mb-5">Banking with Purpose, Impacting Lives</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="">
              <div className="relative h-[270px] mb-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  // width={278}
                  // height={221}
                  fill={true}
                  objectFit="cover"
                  className="rounded-sm"
                />
              </div>
              <div className="">
                <div>
                  <p className="text-[12px] font-bold leading-[18px] text-[#E8A029] mb-3">
                    {item.date}
                  </p>
                  <h3 className="font-bold text-[20px] leading-[24px] font-kefa text-black mb-4">
                    {item.title}
                  </h3>
                  <p className="font-normal text-[14px] leading-[24px] text-black mb-3">
                    {item.description}
                  </p>
                </div>
                <Link
                  href={`/about-us/csr/${item.uniqueId}`}
                  className="text-accent flex items-center justify-baseline gap-3"
                >
                  <p>Know More</p>
                  <Image
                    src="/icon-and-logos/about-us/arrow-left.svg"
                    width={17}
                    height={10}
                    alt="arrow left"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
