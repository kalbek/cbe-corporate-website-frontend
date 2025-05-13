'use client'  
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const newsItems = [
    {
      id: 1,
      image: "/images/gallery-img1.png"
    },
    {
      id: 2,
      image: "/images/gallery-img2.png",
      description: "Week 184"
    },
    {
      id: 3,
      image: "/images/gallery-img3.png"
    },
        {
      id: 4,
      image: "/images/gallery-img4.png"
    },
    {
      id: 5,
      image: "/images/gallery-img5.png"
    },
    {
      id: 6,
      image: "/images/gallery-img6.png"
    },
        {
      id: 7,
      image: "/images/gallery-img7.png"
    },
    {
      id: 8,
      image: "/images/gallery-img8.png"
    },
    {
      id: 9,
      image: "/images/gallery-img9.png"
    },
        {
      id: 10,
      image: "/images/gallery-img10.png"
    },
    {
      id: 11,
      image: "/images/gallery-img11.png"
    },
    {
      id: 12,
      image: "/images/gallery-img12.png"
    }
  ];

  export default function Gallary() {
    const [activePage, setActivePage] = useState(1);
    const [activeImage, setActiveImage] = useState<string | null>(null);
    const [selectedTitle, setSelectedTitle] = useState("CBE Sport");
    const [showMore, setShowMore] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const extraTitles = [
        "CBE Dinner",
        "CBE Tower"
    ];
    
        useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShowMore(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        }, []);

        useEffect(() => {
    if (activeImage) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

    return () => {
        document.body.style.overflow = '';
    };
    }, [activeImage]);

    
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
                <div className="absolute top-1/4 left-5/7 -translate-x-1/2 w-full max-w-[523px] h-[232px] space-y-4 sm:space-y-5 p-4 sm:p-6 gap-[20px] text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-pt-sans-caption font-bold leading-tight tracking-tight text-white width-[523px] height-[60px] font-weight-700">
                        Media Programmes
                    </h1>
                    <p className="sm:text-base lg:text-[18px] font-pt-sans-caption font-normal leading-relaxed text-white width-[523px] height-[84px] font-weight-400">
                        Stay informed with CBE’s latest news, services, and financial tips through engaging radio and television broadcasts.
                    </p>
                    <button className="bg-gray-400 hover:bg-gray-500 text-white sm:text-base px-4 sm:px-5 py-2 sm:py-3 rounded-lg transition-colors font-weight-700 cursor-pointer">
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 align-center flex flex-col items-center justify-center">
                   <div className="h-[198px] flex flex-col items-center justify-center"> 
                    <div className="mb-8 sm:mb-10 h-[38px] items-center justify-center">
                        <h2 className="text-[#892890] sm:text-2xl lg:text-[30px] font-bold font-pt-sans-caption font-weight-700">
                            Gallery
                        </h2>
                    </div>
                       <div className="relative" ref={dropdownRef}>
      <div className="flex flex-wrap justify-center gap-2 h-auto w-full max-w-[1108px] mx-auto px-4">
                            {[
                            "CBE Sport",
                            "CBE Green Day",
                            "CBE Head Quarter Visit",
                            "CBE Planting",
                            "Diaspora Branch Opening"
                            ].map((title) => (
                            <button
                                key={title}
                                onClick={() => setSelectedTitle(title)}
                                className={`px-5 py-2.5 text-[14px] font-pt-sans-caption font-normal rounded-lg border border-[#892890] transition-colors gap-[10px] cursor-pointer ${
                                selectedTitle === title
                                    ? "bg-[#892890] text-white"
                                    : "bg-white text-[#000000] hover:bg-[#892890] hover:text-white"
                                }`}
                            >
                                {title}
                            </button>
                            ))}

                            {/* Dropdown toggle button */}
                            <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setShowMore((prev) => !prev)}
                                className={`h-[40px] w-[44px] flex justify-center items-center p-2 rounded-sm border border-solid border-[#892890] transition-colors gap-2 cursor-pointer rotate-90 ${
                                showMore
                                    ? "bg-[#892890] text-white"
                                    : "bg-white text-[#000000] hover:bg-[#892890] hover:text-white"
                                }`}
                            >
                                <span className="flex items-center justify-center text-2xl">&gt;</span>
                            </button>

                            {/* Dropdown content box */}
                            {showMore && (
                                <div className="absolute w-[177px] left-0 mt-2 bg-white rounded-lg shadow-lg p-4 z-50 flex flex-col gap-2">
                                {extraTitles.map((title) => (
                                    <button
                                    key={title}
                                    onClick={() => {
                                        setSelectedTitle(title);
                                        setShowMore(false);
                                    }}
                                    className={`w-[137px] h-[18px] gap-[4px] font-pt-sans-caption font-normal text-[12px] leading-[18px] tracking-[0] transition-colors cursor-pointer flex justify-start items-center ${
                                        selectedTitle === title
                                        ? "bg-[#892890] text-white"
                                        : "bg-white text-[#000000] hover:bg-[#892890] hover:text-white"
                                    }`}
                                    >
                                    {title}
                                    </button>
                                ))}
                                </div>
                            )}
                            </div>
                        </div>
                        </div>
                        </div>
                         <h1 className="h-[30px] text-[#000000] text-[20px] leading-[30px] tracking-normal font-bold font-weight-700 font-pt-sans-caption mt-2 ml-4 self-start">
                                {selectedTitle}
                         </h1>
                    
                    {/* News Grid Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-6">
                        {newsItems.map((item) => (
                            <div key={item.id} className="bg-white w-full">
                                <div className="relative w-[370.96px] h-[247.5px] cursor-pointer" onClick={() => item.image && setActiveImage(item.image)}>
                                    <Image
                                        src={item.image}
                                        alt="Image Thumbnail"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>

                                {/* modal */}
                                {activeImage && (
                                    <div
                                        className="fixed inset-0 bg-opacity-25 flex items-center justify-center z-50"
                                        onClick={() => setActiveImage(null)} // Close when clicking outside
                                    >
                                        <div
                                        className="bg-white h-[799.16px] w-[1043px] rounded-b-[8px] pb-[40px] pl-[40px] pr-[40px] gap-[40px] top-[647px] left-[198px]"
                                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                                        >
                                        {/* Top Bar */}
                                        <div className="rounded-t-[8px] border-b border-b-[1px] border-gray-300 justify-between p-[20px] flex h-[70px]">
                                            <span className="w-[107px] h-[30px] font-pt-sans-caption font-bold text-[20px] leading-[30px] tracking-[0] text-[#000000]">Image Title</span>
                                            <button
                                            className="w-[62px] h-[20px] text-[#000000] font-pt-sans-caption font-normal text-[14px] leading-[20px] tracking-[-0.01em] cursor-pointer"
                                            onClick={() => setActiveImage(null)}
                                            >
                                            ✕ Close
                                            </button>
                                        </div>

                                        {/* image Section */}
                                        <div className="relative w-[1043px] h-[646px] rounded-b-[8px] p-[40px] gap-[40px] flex flex-col mt-12">
                                            <Image
                                            src={activeImage}
                                            width={943}
                                            height={629.16}
                                            alt="Modal Image"
                                            className="absolute inset-0 w-[967.3px] h-[546px]"
                                            />
                                        </div>
                                        </div>
                                    </div>
                                    )}
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-end mt-8 sm:mt-16 gap-[6px] w-full h-[36px]">
                        <button
                            className="cursor-pointer flex items-center w-[77px] h-[36px] rounded gap-1 sm:gap-2 px-3 sm:px-4 py-2 border border-gray-400 text-[#892890] sm:text-base hover:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => setActivePage(prev => prev > 1 ? prev - 1 : 1)}
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