'use client'  
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const newsItems = [
    {
      id: 1,
      title: "የኢትዮጵያ ንግድ ባንክ ተደራሽነቱን ከሀገር ውጭ ማስፋት እንዳለበት ተገለፀ፡፡",
      image: "/images/announcement-1.png",
      slug: "news-title-one",
      description: "የኢትዮጵያ ንግድ ባንክ ተደራሽነቱን ከሀገር ውጭ ማስፋት እንዳለበት ተገለፀ፡፡ የኢትዮጵያን ኢንቨስትመንት ሆልዲንግስ (EIH) የባንኩን የግማሽ ዓመት የሥራ አፈፃፀም ገምግሟል፡፡"
    },
    {
      id: 2,
      title: "እንኳን ለደንበኞች አገልግሎት ወር በሰላም አደረሰዎ!",
      image: "/images/announcement-2.png",
      slug: "news-title-two",
      description: "ትላንት ለገንዘብዎ ሁነኛ ባላደራ ሲፈልጉ በመላው ሀገራችን ቅርንጫፎቹን በመክፈት እርስዎ ወዳሉበት የደረሰው ባንካችን፣ ዛሬም በፈጣን እንቅስቃሴ ላይ ባለችው ዓለማችን፤ ከዘመኑ ጋር እየዘመነ አማራጮችዎን እያሰፋና ፍላጎትዎን እያሟላ በተለመደው ትጋቱ..."
    },
    {
      id: 3,
      title: "ለነጋድራስ የኢትዮጵያ ንግድ ባንክ የሥራ ፈጠራ ውድድር ተመዝግበዋል ?",
      image: "/images/announcement-3.png",
      slug: "news-title-three",
      description: "ምዝገባው ታህሳስ 15 /December 24, 2024/ ይጠናቀቃል፡፡ የኢትዮጵያ ንግድ ባንክ የስያሜ ስፖንሰር የሆነበት ነጋድራስ የሥራ ፈጠራ ውድድር በየዙሩ 1.8 ሚልዮን ብር እንዲሁም ለአሸናፊዎች አሸናፊ 5 ሚሊዮን ብር ሽልማት፤..."
    }
  ];

export default function News() {
    const [activePage, setActivePage] = useState(1);
    return <>
    <div className="bg-[#ffffff] text-white w-[1440]">
      {/* Hero Section */}
      <div className="relative h-[549.14px] w-[1440]"> 
        <Image
          src="/images/announcement-img.png"    
          alt="News Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        <div className="relative w-[523px] h-[232px] top-[145px] left-[920px] gap-[20px]">
          <div>
            <h1 className="w-[523px] h-[60px] font-pt-sans-caption font-bold text-[48px] leading-[60px] tracking-[-0.02em]">Announcements</h1>
            <p className="w-[523px] h-[84px] font-pt-sans-caption font-normal text-[18px] leading-[28px] tracking-[0%]">
            Stay informed with the latest official updates, service notices, and important messages from the Commercial Bank of Ethiopia.
            </p>
            <button className="bg-gray-400 w-[139px] h-[48px] gap-[50px] pt-[12px] pr-[20px] pb-[12px] pl-[20px] rounded-[8px]">
              
              Know More
            </button>
          </div>
        </div>
          {/* Left Arrow */}
            <div className="w-[40px] h-[40px] absolute top-[256.57px] left-[22px] cursor-pointer">
                &lt;
            </div>

            {/* Right Arrow */}
            <div className="w-[40px] h-[40px] absolute top-[256.57px] right-[22px] cursor-pointer">
                &gt;
            </div>
      </div>

      {/* News Section */}
      <div className="w-full bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="w-[1440px] h-[138px] gap-[28px] pt-[60px] pr-[80px] pb-[40px] pl-[80px]">
            <h2 className="text-[#892890] text-[30px] font-bold font-pt-sans-caption">Announcements</h2>
          </div>

          {/* News Grid Container */}
          <div className="w-[1440px] h-[751.35px] gap-[80px] pr-[80px] pb-[100px] pl-[80px]">
            {/* Grid */}
            <div className="w-[1280px] h-[558.35px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((item) => (
                <div key={item.id} className="bg-[#ffffff] rounded-lg transition w-[408px] h-[510.35px] gap-[20px]">
                  <div className="relative w-[408px] h-[324.35px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-[408px] h-[166px] gap-[8px]">
                    <h3 className="w-[408px] h-[48px] font-kefa font-bold text-base leading-6 tracking-normal text-black">{item.title}</h3>
                    <p className="w-[408px] h-[72px] font-kefa font-normal text-sm leading-6 tracking-normal text-black">{item.description}</p>
                    <Link href={`/news/${item.slug}`} className="w-[107px] h-[24px]">
                      <button className="w-[107px] h-[24px] font-pt font-normal text-[16px] leading-[24px] tracking-[0] text-[#892890] cursor-pointer">
                        <span className="w-[83px] h-[24px] font-pt-sans-caption font-normal text-base leading-6 tracking-normal text-[#892890]">Read More  </span>  
                        <span className="w-[24px] h-[24px] rotate-90">&gt;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex w-[352px] h-[36px] gap-[6px] ml-auto ">
              <button 
                className="flex w-[77px] h-[36px] px-[12px] py-[8px] gap-[4px] border-1 border-purple-800 rounded-[4px] cursor-pointer"
                onClick={() => setActivePage(prev => prev > 1 ? prev - 1 : 1)}
                disabled={activePage === 1}
              > 
                <span className="w-[16px] h-[16px] text-[#892890]">&lt;</span>
                 <span className="w-[33px] h-[20px] text-[#892890] font-inter font-normal text-sm leading-5 tracking-normal">Back</span>
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button 
                  key={page}
                  className={`w-[31px] h-[36px] px-[12px] py-[8px] text-purple-800 bg-white border-1 cursor-pointer border-purple-800 rounded-[4px] hover:bg-purple-100 transition-colors ${
                    activePage === page ? 'bg-purple-800 text-white' : ''
                  }`}
                  onClick={() => setActivePage(page)}
                >
                  {page}
                </button>
              ))}
              <button 
                className="flex w-[76px] h-[36px] px-[12px] py-[8px] gap-[4px] border-1 border-purple-800 rounded-[4px] cursor-pointer"
                onClick={() => setActivePage(prev => prev < 5 ? prev + 1 : 5)}
                disabled={activePage === 5}
              >
                <span className="w-[32px] h-[20px] text-[#892890] font-inter font-normal text-sm leading-5 tracking-normal">Next</span> 
                <span className="w-[16px] h-[16px] text-[#892890]">&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>   

    </>;
}