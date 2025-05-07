'use client'	
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const newsItems = [
    {
      id: 1,
      title: "News Title One",
      date: "05 Apr 2025",
      image: "/images/news1.jpg",
      slug: "news-title-one",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      title: "News Title Two",
      date: "04 Apr 2025",
      image: "/images/news2.jpg",
      slug: "news-title-two",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      title: "News Title Three",
      date: "04 Apr 2025",
      image: "/images/news3.jpg",
      slug: "news-title-three",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 4,
      title: "News Title Four",
      date: "04 Apr 2025",
      image: "/images/news3.jpg",
      slug: "news-title-Four",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 5,
      title: "News Title Five",
      date: "03 Apr 2025",
      image: "/images/news1.jpg",
      slug: "news-title-five",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 6,
      title: "News Title Six",
      date: "02 Apr 2025",
      image: "/images/news2.jpg",
      slug: "news-title-six",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 7,
      title: "News Title Seven",
      date: "01 Apr 2025",
      image: "/images/news3.jpg",
      slug: "news-title-seven",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 8,
      title: "News Title Eight",
      date: "31 Mar 2025",
      image: "/images/news1.jpg",
      slug: "news-title-eight",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

export default function News() {
    const [activePage, setActivePage] = useState(1);

    return <>

<div className="bg-white text-white w-[1440] h-[2831.53px]">
      {/* Hero Section */}
      <div className="relative h-[549.14px] w-[1440]"> 
        <Image
          src="/images/hero-home-img.png"        //I added this image since its the only one I found in the images folder
          alt="News Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        <div className="relative w-[523px] h-[232px] top-[145px] left-[720px] gap-[20px]">
          <div>
            <h1 className="w-[523px] h-[60px] font-pt-sans-caption font-bold text-[48px] leading-[60px] tracking-[-0.02em]">News</h1>
            <p className="w-[523px] h-[84px] font-pt-sans-caption font-normal text-[18px] leading-[28px] tracking-[0%]">
            Explore past announcements, updates, and media coverage from CBE—your source for historical insights and institutional milestones.
            </p>
            <button className="bg-gray-400 rounded w-[139px] h-[48px] gap-[50px] pt-[12px] pr-[20px] pb-[12px] pl-[20px] rounded-[8px]">
              
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="w-[1440px] h-[138px] gap-[28px] pt-[60px] pr-[80px] pb-[40px] pl-[80px]">
            <h2 className="text-[#892890] text-[30px] font-bold font-pt-sans-caption">News</h2>
          </div>

          {/* News Grid Container */}
          <div className="w-[1440px] h-[1412.39px] gap-[57px] pr-20 pb-24 pl-20">
            {/* Grid */}
            <div className="w-[1280px] h-[1219.39px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {newsItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition w-[299px] h-[569.69px] gap-[20px]">
                  <div className="relative w-[299px] h-[237.69px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-[299px] h-[312px] gap-[8px]">
                    <p className="w-[299px] h-[18px] font-pt font-bold text-[12px] leading-[18px] tracking-[0] text-[#E8A029]">{item.date}</p>
                    <h3 className="w-[299px] h-[72px] font-bold text-[20px] leading-[24px] tracking-[0] font-kefa text-black">{item.title}</h3>
                    <p className="w-[299px] h-[168px] font-normal text-[14px] leading-[24px] tracking-[0] text-black">{item.description}</p>
                    <Link href={`/news/${item.slug}`} className="w-[107px] h-[24px]">
                      <button className="w-[83px] h-[24px] font-pt font-normal text-[16px] leading-[24px] tracking-[0] text-[#892890]">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 space-x-2">
              <button 
                className="flex items-center gap-2 px-2 py-1.5 cursor-pointer text-purple-800 border-1 bg-white-700 rounded"
                onClick={() => setActivePage(prev => prev > 1 ? prev - 1 : 1)}
                disabled={activePage === 1}
              > 
                <span className="group-hover:translate-x-1 transition">&lt;</span> Back
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button 
                  key={page} 
                  className={`px-4 py-2 text-purple-800 bg-white border-1 cursor-pointer border-purple-800 rounded hover:bg-purple-100 transition-colors ${
                    activePage === page ? 'bg-purple-800 text-white' : ''
                  }`}
                  onClick={() => setActivePage(page)}
                >
                  {page}
                </button>
              ))}
              <button 
                className="flex items-center gap-2 px-2 py-1.5 cursor-pointer text-purple-800 border-1 bg-white-800 rounded hover:bg-gray-600"
                onClick={() => setActivePage(prev => prev < 5 ? prev + 1 : 5)}
                disabled={activePage === 5}
              >
                Next <span className="group-hover:translate-x-1 transition">&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>   

    </>;
}
