'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const newsItems = [
  {
    id: 1,
    title: 'የኢትዮጵያ ንግድ ባንክ ተደራሽነቱን ከሀገር ውጭ ማስፋት እንዳለበት ተገለፀ፡፡',
    image: '/images/announcement-1.png',
    slug: 'news-title-nine',
    description:
      'የኢትዮጵያ ንግድ ባንክ ተደራሽነቱን ከሀገር ውጭ ማስፋት እንዳለበት ተገለፀ፡፡ የኢትዮጵያን ኢንቨስትመንት ሆልዲንግስ (EIH) የባንኩን የግማሽ ዓመት የሥራ አፈፃፀም ገምግሟል፡፡',
  },
  {
    id: 2,
    title: 'እንኳን ለደንበኞች አገልግሎት ወር በሰላም አደረሰዎ!',
    image: '/images/announcement-2.png',
    slug: 'news-title-ten',
    description:
      'ትላንት ለገንዘብዎ ሁነኛ ባላደራ ሲፈልጉ በመላው ሀገራችን ቅርንጫፎቹን በመክፈት እርስዎ ወዳሉበት የደረሰው ባንካችን፣ ዛሬም በፈጣን እንቅስቃሴ ላይ ባለችው ዓለማችን፤ ከዘመኑ ጋር እየዘመነ አማራጮችዎን እያሰፋና ፍላጎትዎን እያሟላ በተለመደው ትጋቱ...',
  },
  {
    id: 3,
    title: 'ለነጋድራስ የኢትዮጵያ ንግድ ባንክ የሥራ ፈጠራ ውድድር ተመዝግበዋል ?',
    image: '/images/announcement-3.png',
    slug: 'news-title-eleven',
    description:
      'ምዝገባው ታህሳስ 15 /December 24, 2024/ ይጠናቀቃል፡፡ የኢትዮጵያ ንግድ ባንክ የስያሜ ስፖንሰር የሆነበት ነጋድራስ የሥራ ፈጠራ ውድድር በየዙሩ 1.8 ሚልዮን ብር እንዲሁም ለአሸናፊዎች አሸናፊ 5 ሚሊዮን ብር ሽልማት፤...',
  },
]

export default function News() {
  const [activePage, setActivePage] = useState(1);
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  return (
    <div className="bg-white text-white w-full">
      {/* Hero Section */}
           <div className="relative lg:aspect-[1440/519] sm:aspect-[9/6] aspect-[13/7]">
              <Image
                src="/images/announcement-img.png"
                alt="News Hero"
                layout="fill"
                objectFit="cover"
                className="opacity-90"
              />
              <div className="absolute lg:top-1/4 md:top-40 top-15 left-5/9 max-w-[523px]  space-y-4 sm:space-y-5 p-4 sm:p-2 gap-[20px] text-left">
                <h1 className="text-2xl sm:text-1xl md:text-4xl lg:text-[48px] font-pt-sans-caption font-bold leading-tight tracking-tight text-white width-[523px] height-[60px] font-weight-700">
                  Announcements
                </h1>
                <p className="text-[12px] md:text-[18px] lg:text-[18px] font-pt-sans-caption font-normal leading-relaxed text-white width-[523px] height-[84px] font-weight-400">
                  Stay informed with the latest official updates, service notices, and important messages from the Commercial Bank of Ethiopia.
                </p>
                <button className="bg-gray-400 hover:bg-gray-500 text-white text-[10px] md:text-[18px] lg:text-[18px] px-4 sm:px-5 py-2 sm:py-3 rounded-lg transition-colors font-weight-700 cursor-pointer">
                  Know More
                </button>
              </div>
              {/* Arrows */}
              <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 text-white cursor-pointer">
                <img src="/images/Previous-Slide-Button.png" alt='icon'/>
              </div>
              <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 text-white cursor-pointer">
                  <img src="/images/Next-Slide-Button.png" alt='icon'/>
              </div>
            </div>

      {/* News Section */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="mb-8 sm:mb-10 h-[38px]">
            <h2 className="text-purple-700 sm:text-2xl lg:text-[30px] font-bold font-pt-sans-caption font-weight-700">
              Announcements
            </h2>
          </div>

          {/* News Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white w-full">
                <div className="relative w-[408] h-[324.35px] ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="w-full gap-[8px] mt-4">
                  <h3 className="text-base sm:text-lg font-kefa font-bold leading-6 text-black line-clamp-2">
                    {item.title}
                  </h3>
                  <div className={`transition-all duration-300 ease-in-out ${
                          expandedCardId === item.id ? 'max-h-[200px] overflow-y-auto' : 'max-h-[60px] overflow-hidden'
                        } text-[#000000] text-sm font-normal leading-relaxed font-pt-sans-caption`}
                      >
                        {item.description}
                      </div>
                    <button className="text-[#892890] font-pt-sans-serif mt-2 hover:underline self-start cursor-pointer flex items-center gap-1"
                        onClick={() =>
                          setExpandedCardId(expandedCardId === item.id ? null : item.id)
                        }
                      >
                        {expandedCardId === item.id ? 'Read Less' : 'Read More'}
                        <img src="/images/Frame.png" alt='greater-than-sign'/>
                      </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center sm:justify-end mt-8 sm:mt-16 gap-[6px] w-[352] h-[36px]">
            <button
              className="cursor-pointer flex items-center w-[77px] h-[36px] rounded gap-1 sm:gap-2 px-3 sm:px-4 py-2 border border-gray-400 text-[#892890] sm:text-base hover:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setActivePage((prev) => (prev > 1 ? prev - 1 : 1))}
              disabled={activePage === 1}
            >
              <span>&lt;</span>
              <span>Back</span>
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`border border-gray-400 rounded sm:text-base w-[31px] h-[36px] cursor-pointer ${
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
              className="cursor-pointer flex items-center w-[77px] h-[36px] rounded gap-1 sm:gap-2 px-3 sm:px-4 py-2 border border-gray-400 text-[#892890] sm:text-base hover:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setActivePage((prev) => (prev < 5 ? prev + 1 : 5))}
              disabled={activePage === 5}
            >
              <span>Next</span>
              <span>&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
