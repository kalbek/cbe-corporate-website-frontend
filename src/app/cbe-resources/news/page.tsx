'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const newsItems = [
  {
    id: 1,
    title: 'የኢትዮጵያ ንግድ ባንክ 122.5 ሚሊዮን ዶላር ለደንበኞቹ ድልድል አደረገ።',
    date: '05 Apr 2025',
    image: '/images/news-image1.png',
    slug: 'news-title-one',
    description:
      'የደምበኞቻችንን የውጪ ምንዛሪ ጥያቄ ለመመለስ እ.ኤ.አ እስከ 31/03/2025 ድረስ ባጠቃላይ በቁጥር 711 ደንበኞቻችን ያቀረቡትን ጥያቄዎች በሙሉ በመገምገም ከቀረቡት ጥያቄዎች ውስጥ ብዛታቸው 698(98%) ለሆኑ ደንበኞች በድምሩ የ122.5 ሚሊዮን የአሜሪካን ዶላር ድልድል የተደረገ መሆኑን እንገልጻለን።',
  },
  {
    id: 2,
    title:
      'የኢትዮጵያ ንግድ ባንክ ባለፉት ስምንት ወራት ብቻ 264.65 ቢልዮን ብር ብድር ለደንበኞቹ ማቅረቡ ተገለፀ።',
    date: '04 Apr 2025',
    image: '/images/news-image2.png',
    slug: 'news-title-two',
    description:
      'አቶ አቤ በዲጂታል አማራጭ ባለፉት ስምንት ወራት አጠቃላይ ብር 3.9 ቢሊዮን ብድር ማቅረብ የተቻለ መሆኑን ገልፀው፣ በዚህም እስከ ፌብርዋሪ 28 ቀን 2025 ድረስ 717 ሺህ ደንበኞች ተጠቃሚ መሆናቸውን አስረድተዋል፡፡',
  },
  {
    id: 3,
    title:
      'የኢትዮጵያ ንግድ ባንክ በባንክ ኢንዱስትሪው ውስጥ ያለውን የገበያ ድርሻ ማሳደጉ ተገለፀ፡፡',
    date: '04 Apr 2025',
    image: '/images/news-image3.png',
    slug: 'news-title-three',
    description:
      'በፌብሩዋሪ 2025 መጨረሻ የኢትዮጵያ ንግድ ባንክ ጠቅላላ ተቀማጭ ገንዘብ ብር 1.541 ትሪሊዮን፣ ጠቅላላ የብድርና የቦንድ ክምችት መጠን ብር 1.393 ትሪሊዮን፣ እንዲሁም አጠቃላይ ሃብት ብር 2.073 ትሪሊየን መድረሱን አቶ አቤ በሪፖርታቸው አመላክተዋል፡፡',
  },
  {
    id: 4,
    title:
      'የኢትዮጵያ ንግድ ባንክ በስምንት ወራት ብር 367.40 ቢሊዮን ተቀማጭ ገንዘብ አሰባሰበ፡፡',
    date: '04 Apr 2025',
    image: '/images/news-image4.png',
    slug: 'news-title-Four',
    description:
      'አቶ አቤ በስምንት ወራት በተቀማጭ ገንዘብ አሰባሰብ የነበረው አፈፃፀም በጁን 2024 ከነበረው ጠቅላላ ተቀማጭ አንጻር የ31.3% ዕድገት እንዲያሳይ ማስቻሉን ገልፀዋል፡፡',
  },
  {
    id: 5,
    title:
      'የኢትዮጵያ ንግድ ባንክ የፖስ ማሽኖችን በመጠቀም ክፍያ የፈጸሙ ደንበኞችን ሸለመ።',
    date: '03 Apr 2025',
    image: '/images/news-image5.png',
    slug: 'news-title-five',
    description:
      'የሲቢኢ ኑር ፕሮዳክት ዴቨሎፕመንት እና ቢዝነስ ኤክስፓንሽን ሥራ አስኪያጅ አቶ አንዋር መሐመድ ደንበኞች ዲጂታል የባንክ አገልግሎቶችን እንዲጠቀሙ ለማበረታታት የሽልማት መርሀ ግብሩ መዘጋጀቱን ገልፀዋል፡፡',
  },
  {
    id: 6,
    title:
      'የኢትዮጵያ ንግድ ባንክ ከማስተር ካርድ ኩባንያ ጋር በመሆን አዲስ የፕላስቲክ እና ቨርችዋል ካርድ አገልግሎት ላይ አዋለ፡፡',
    date: '02 Apr 2025',
    image: '/images/news-image6.png',
    slug: 'news-title-six',
    description:
      'አቶ አቤ ይህ ስትራቴጂካዊ ትብብር የኢትዮጵያ ንግድ ባንክ በሞባይል ባንኪንግ አገልግሎት ያለውን ሰፊ የገበያ ድርሻ በመጠቀም፤ በቨርቹዋል የካርድ አገልግሎት የባንኩን ከ40 ሚሊየን በላይ ደንበኞች የዘመናዊ ዲጂታል የባንክ አገልግሎት ተጠቃሚ ማድረግ እንደሚያስችል ገልፀዋል፡፡',
  },
  {
    id: 7,
    title:
      '”አብሮነት ለበጎነት ፤ በረመዷን ” በሚል መሪ ቃል የኢትዮጵያ ንግድ ባንክ ታላቅ የኢፍጣር መርሃ-ግብር አከናወነ፡፡',
    date: '01 Apr 2025',
    image: '/images/news-image7.png',
    slug: 'news-title-seven',
    description:
      'የኢትዮጵያ ንግድ ባንክ ፕሬዚዳንት አቶ አቤ ሳኖ በበኩላቸው ከወለድ ነፃ የባንክ አገልግሎት በመስጠት 11 ስኬታማ ዓመታትን ያስቆጠረው የሲቢኢ ኑር አገልግሎት በደንበኞቹ ዘንድ ተአማኒነት በማትረፉ ውጤታማ ስለሆነ ለአጋርነታችሁ ምስጋና ይገባችሃል ብለዋል፡፡',
  },
  {
    id: 8,
    title: 'የኢትዮጵያ ንግድ ባንክ 15 ሚሊዮን ብር ድጋፍ አደረገ።',
    date: '31 Mar 2025',
    image: '/images/news-image8.png',
    slug: 'news-title-eight',
    description:
      'ባቡል ኽይር የበጎ አድራጎት ድርጅት በቀን ከአራት ሺህ ስምንት መቶ በላይ አባወራዎችን የምገባ አገልግሎት ይሰጣል፡፡',
  },
];

export default function News() {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="bg-[#ffffff] text-white w-full">
      {/* Hero Section */}
      <div className="relative h-[549.14px] w-full">
        <Image
          src="/images/announcement-img.png"
          alt="News Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        <div className="relative top-[145px] w-full max-w-[523px] mx-auto px-4 sm:left-auto sm:ml-auto sm:mr-20">
          <div className="flex flex-col gap-5">
            <h1 className="w-full font-pt-sans-caption font-bold text-[clamp(32px,5vw,48px)] leading-[60px] tracking-[-0.02em]">
              News
            </h1>
            <p className="w-full font-pt-sans-caption font-normal text-[clamp(16px,2vw,18px)] leading-[28px] tracking-[0%]">
              Explore past announcements, updates, and media coverage from
              CBE—your source for historical insights and institutional
              milestones.
            </p>
            <button className="bg-gray-400 hover:bg-gray-500 transition-colors cursor-pointer w-[139px] h-[48px] pt-[12px] pr-[20px] pb-[12px] pl-[20px] rounded-[8px]">
              Know More
            </button>
          </div>
        </div>
        {/* Left Arrow */}
        <div className="w-10 h-10 absolute top-[256.57px] left-4 sm:left-6 cursor-pointer text-white">
          &lt;
        </div>
        {/* Right Arrow */}
        <div className="w-10 h-10 absolute top-[256.57px] right-4 sm:right-6 cursor-pointer text-white">
          &gt;
        </div>
      </div>

      {/* News Section */}
      <div className="bg-[#ffffff]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-20 py-16">
          <div className="w-full py-10">
            <h2 className="text-[#892890] text-[clamp(24px,4vw,30px)] font-bold font-pt-sans-caption">
              News
            </h2>
          </div>

          {/* News Grid Container */}
          <div className="w-full">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1280px] mx-auto">
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#ffffff] rounded-lg overflow-hidden transition w-full max-w-[299px] mx-auto h-[569.69px] gap-[20px]"
                >
                  <div className="relative w-full h-[237.69px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-full h-[312px] gap-[8px] p-4">
                    <p className="w-full h-[18px] font-pt font-bold text-[12px] leading-[18px] tracking-[0] text-[#E8A029]">
                      {item.date}
                    </p>
                    <h3 className="w-full h-[72px] font-bold text-[20px] leading-[24px] tracking-[0] font-kefa text-black">
                      {item.title}
                    </h3>
                    <p className="w-full h-[168px] font-normal text-[14px] leading-[24px] tracking-[0] text-black">
                      {item.description}
                    </p>
                    <Link href={`/cbe-resources/news/${item.slug}`}>
                      <button className="w-[107px] h-[24px] font-pt font-normal text-[16px] leading-[24px] tracking-[0] text-[#892890] cursor-pointer flex items-center">
                        <span className="w-[83px] h-[24px] font-pt-sans-caption font-normal text-base leading-6 tracking-normal text-[#892890]">
                          Read More
                        </span>
                        <span className="w-[24px] h-[24px]">&gt;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center sm:justify-end mt-8 sm:mt-16 gap-[6px] w-[352] h-[36px]">
              <button
                className="flex w-[77px] h-[36px] px-3 py-2 gap-1 border border-gray-400 rounded-[4px] cursor-pointer items-center disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setActivePage((prev) => (prev > 1 ? prev - 1 : 1))}
                disabled={activePage === 1}
              >
                <span className="w-4 h-4 text-[#892890]">&lt;</span>
                <span className="w-[33px] h-[20px] text-[#892890] font-inter font-normal text-sm leading-5 tracking-normal">
                  Back
                </span>
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-[31px] h-[36px] px-3 py-2 text-purple-800 bg-white border border-gray-400 rounded-[4px] hover:bg-purple-100 transition-colors ${
                    activePage === page ? 'bg-purple-800 text-white' : ''
                  }`}
                  onClick={() => setActivePage(page)}
                >
                  {page}
                </button>
              ))}
              <button
                className="flex w-[76px] h-[36px] px-3 py-2 gap-1 border border-gray-400 rounded-[4px] cursor-pointer items-center disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setActivePage((prev) => (prev < 5 ? prev + 1 : 5))}
                disabled={activePage === 5}
              >
                <span className="w-[32px] h-[20px] text-[#892890] font-inter font-normal text-sm leading-5 tracking-normal">
                  Next
                </span>
                <span className="w-4 h-4 text-[#892890]">&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}