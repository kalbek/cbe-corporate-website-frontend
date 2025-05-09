'use client'  
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const newsItems = [
    {
      id: 1,
      title: "የኢትዮጵያ ንግድ ባንክ ተደራሽነቱን ከሀገር ውጭ ማስፋት እንዳለበት ተገለፀ፡፡",
      image: "/images/announcement-1.png",
      slug: "news-title-nine",
      description: "የኢትዮጵያ ንግድ ባንክ ተደራሽነቱን ከሀገር ውጭ ማስፋት እንዳለበት ተገለፀ፡፡ የኢትዮጵያን ኢንቨስትመንት ሆልዲንግስ (EIH) የባንኩን የግማሽ ዓመት የሥራ አፈፃፀም ገምግሟል፡፡"
    },
    {
      id: 2,
      title: "እንኳን ለደንበኞች አገልግሎት ወር በሰላም አደረሰዎ!",
      image: "/images/announcement-2.png",
      slug: "news-title-ten",
      description: "ትላንት ለገንዘብዎ ሁነኛ ባላደራ ሲፈልጉ በመላው ሀገራችን ቅርንጫፎቹን በመክፈት እርስዎ ወዳሉበት የደረሰው ባንካችን፣ ዛሬም በፈጣን እንቅስቃሴ ላይ ባለችው ዓለማችን፤ ከዘመኑ ጋር እየዘመነ አማራጮችዎን እያሰፋና ፍላጎትዎን እያሟላ በተለመደው ትጋቱ..."
    },
    {
      id: 3,
      title: "ለነጋድራስ የኢትዮጵያ ንግድ ባንክ የሥራ ፈጠራ ውድድር ተመዝግበዋል ?",
      image: "/images/announcement-3.png",
      slug: "news-title-eleven",
      description: "ምዝገባው ታህሳስ 15 /December 24, 2024/ ይጠናቀቃል፡፡ የኢትዮጵያ ንግድ ባንክ የስያሜ ስፖንሰር የሆነበት ነጋድራስ የሥራ ፈጠራ ውድድር በየዙሩ 1.8 ሚልዮን ብር እንዲሁም ለአሸናፊዎች አሸናፊ 5 ሚሊዮን ብር ሽልማት፤..."
    }
  ];

  export default function News() {
    const [activePage, setActivePage] = useState(1);
    
    return (
        <div className="bg-white text-white w-full">
            {/* Hero Section */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[549.14px]">
                <Image
                    src="/images/announcement-img.png"
                    alt="News Hero"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90"
                />
                <div className="absolute top-1/4 left-4 sm:left-8 md:left-12 lg:left-auto lg:right-12 w-full sm:w-3/4 md:w-2/3 lg:w-[523px] max-w-[523px] space-y-4 sm:space-y-5 p-4 sm:p-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-pt-sans-caption font-bold leading-tight tracking-tight text-white">
                        Announcements
                    </h1>
                    <p className="text-sm sm:text-base lg:text-[18px] font-pt-sans-caption font-normal leading-relaxed text-white">
                        Stay informed with the latest official updates, service notices, and important messages from the Commercial Bank of Ethiopia.
                    </p>
                    <button className="bg-gray-400 hover:bg-gray-500 text-white text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-3 rounded-lg transition-colors">
                        Know More
                    </button>
                </div>
                {/* Arrows */}
                <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 text-white cursor-pointer">
                    &lt;
                </div>
                <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 text-white cursor-pointer">
                    &gt;
                </div>
            </div>

            {/* News Section */}
            <div className="w-full bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                    <div className="mb-8 sm:mb-10">
                        <h2 className="text-[#892890] text-xl sm:text-2xl lg:text-[30px] font-bold font-pt-sans-caption">
                            Announcements
                        </h2>
                    </div>

                    {/* News Grid Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        {newsItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition w-full">
                                <div className="relative w-full aspect-[4/3]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-lg"
                                    />
                                </div>
                                <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
                                    <h3 className="text-base sm:text-lg font-kefa font-bold leading-6 text-black line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base font-kefa font-normal leading-6 text-black line-clamp-3">
                                        {item.description}
                                    </p>
                                    <Link href={`/news/${item.slug}`}>
                                        <button className="flex items-center gap-2 text-[#892890] font-pt-sans-caption font-normal text-sm sm:text-base hover:underline">
                                            <span>Read More</span>
                                            <span className="text-lg">&gt;</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center sm:justify-end mt-8 sm:mt-10 gap-2 sm:gap-3">
                        <button
                            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 border border-purple-800 rounded-md text-[#892890] text-sm sm:text-base hover:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => setActivePage(prev => prev > 1 ? prev - 1 : 1)}
                            disabled={activePage === 1}
                        >
                            <span>&lt;</span>
                            <span>Back</span>
                        </button>
                        {[1, 2, 3, 4, 5].map((page) => (
                            <button
                                key={page}
                                className={`px-3 sm:px-4 py-2 border border-purple-800 rounded-md text-sm sm:text-base ${
                                    activePage === page
                                        ? 'bg-purple-800 text-white'
                                        : 'text-purple-800 hover:bg-purple-100'
                                }`}
                                onClick={() => setActivePage(page)}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 border border-purple-800 rounded-md text-[#892890] text-sm sm:text-base hover:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => setActivePage(prev => prev < 5 ? prev + 1 : 5)}
                            disabled={activePage === 5}
                        >
                            <span>Next</span>
                            <span>&gt;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}