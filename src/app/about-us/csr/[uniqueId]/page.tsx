'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'

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
    uniqueId: "news_fiv",
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

export default function NewsArticle() {
  const {uniqueId} = useParams();

  const newsItem = newsItems.find((item) => item.uniqueId === uniqueId);

  if(!newsItem){
    return <div> News not found </div>
  }

  return (
    <div className="bg-white w-[1440] h-[1107px]">
      {/* Date and Title */}
      <section className="w-[1440] h-[318px] gap-[14px] pt-[100px] pr-[100px] pl-[100px]">
        <p className="w-[1240] h-[24px] text-[#E9A029] font-pt-sans-caption font-bold text-[18px] leading-[24px] text-center">{newsItem.date}</p>
        <h1 className=" text-purple-800 w-[1240] h-[120px] font-pt-sans-caption font-normal text-[48px] leading-[60px] tracking-[-0.02em] text-center">
        {newsItem.title}
        </h1>
      </section>

      {/* Image */}
      <div className='w-[1440] h-[789px] gap-[57px] pr-[80px] pb-[100px] pl-[80px]'>
      <div className="flex justify-center">
        <Image
          src={newsItem.image}
          alt="CBE News"
          width={768}
          height={512}
          className="w-[768px] h-[432px]"
        />
      </div>

      {/* Paragraph */}
      <section className='justify-center flex pt-[40px]'>
        <p className='w-[732px] h-[120px] text-[#000000] font-pt-sans-caption font-normal text-[16px] leading-[24px] tracking-[0] text-center'>
        {newsItem.description}
        </p>
      </section>
      </div>
    </div>
  )
}