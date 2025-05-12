'use client'  
import Image from "next/image";
import { useState } from "react";

const newsItems = [
    {
      id: 1,
      image: "/images/media-img1.png",
      description: "Week 184",
      video: "/images/video.mp4"
    },
    {
      id: 2,
      image: "/images/media-img2.png",
      description: "Week 184",
      video: "/images/video.mp4"
    },
    {
      id: 3,
      image: "/images/media-img3.png",
      description: "Week 184",
      video: "/images/video.mp4"
    },
        {
      id: 4,
      image: "/images/media-img4.png",
      description: "Week 184",
      video: "/images/video.mp4"
    },
    {
      id: 5,
      image: "/images/media-img5.png",
      description: "Week 184",
      video: "/images/video.mp4"
    },
    {
      id: 6,
      image: "/images/media-img6.png",
      description: "Week 184",
      video: "/images/video.mp4"
    },
        {
      id: 7,
      image: "/images/media-img7.png",
      description: "Week 184",
      video: "/images/video.mp4"
    },
    {
      id: 8,
      image: "/images/media-img8.png",
      description: "Week 184",
      video: "/images/video.mp4"
    },
    {
      id: 9,
      image: "/images/media-img9.png",
      description: "Week 184",
      video: "/images/video.mp4"
    },
        {
      id: 10,
      image: "/images/media-img10.png",
      description: "Week 184",
      video: "/images/video.mp4"
    },
    {
      id: 11,
      image: "/images/media-img11.png",
      description: "Week 184",
      video: "/images/video.mp4"
    },
    {
      id: 12,
      image: "/images/media-img12.png",
      description: "Week 184",
      video: "/images/video.mp4"
    },
        {
      id: 13,
      image: "/images/media-img13.png",
      description: "Week 184",
      video: "/images/video.mp4"
    },
    {
      id: 14,
      image: "/images/media-img14.png",
      description: "Week 184",
      video: "/images/video.mp4"
    },
    {
      id: 15,
      image: "/images/media-img15.png",
      description: "Week 184",
      video: "/images/video.mp4"
    }

  ];

  export default function Gallary() {
    const [activePage, setActivePage] = useState(1);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    
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
                <div className="absolute top-1/4 left-4 sm:left-8 md:left-[274px] lg:left-auto lg:right-12 w-full sm:w-3/4 md:w-2/3 lg:w-[523px] max-w-[523px] space-y-4 sm:space-y-5 p-4 sm:p-6 gap-[20px]">
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
                            Media Programmes
                        </h2>
                    </div>
                       <div className="flex flex-wrap justify-center gap-4">
                            <button className="h-[40px] px-5 py-2.5 bg-white leading-5 tracking-tight text-[#000000] text-[14px] font-pt-sans-caption font-normal rounded-lg border border-[#892890] hover:bg-[#892890] hover:text-white transition-colors gap-[10px] cursor-pointer">
                            Amharic TV Programms
                            </button>
                            <button className="h-[40px] px-5 py-2.5 bg-white leading-5 tracking-tight text-[#000000] text-[14px] font-pt-sans-caption font-normal rounded-lg border border-[#892890] hover:bg-[#892890] hover:text-white transition-colors gap-[10px] cursor-pointer">
                            TV Afan oromo
                            </button>
                            <button className="h-[40px] px-5 py-2.5 bg-white leading-5 tracking-tight text-[#000000] text-[14px] font-pt-sans-caption font-normal rounded-lg border border-[#892890] hover:bg-[#892890] hover:text-white transition-colors gap-[10px] cursor-pointer">
                            Product and Service advert
                            </button>
                            <button className="h-[40px] px-5 py-2.5 bg-white leading-5 tracking-tight text-[#000000] text-[14px] font-pt-sans-caption font-normal rounded-lg border border-[#892890] hover:bg-[#892890] hover:text-white transition-colors gap-[10px]s cursor-pointer">
                            CBE Documentary
                            </button>
                            <button className="h-[40px] px-5 py-2.5 bg-white leading-5 tracking-tight text-[#000000] text-[14px] font-pt-sans-caption font-normal rounded-lg border border-[#892890] hover:bg-[#892890] hover:text-white transition-colors gap-[10px] cursor-pointer">
                            CBE Drama
                            </button>
                            <button className="h-[40px] px-5 py-2.5 bg-white leading-5 tracking-tight text-[#000000] text-[14px] font-pt-sans-caption font-normal rounded-lg border border-[#892890] hover:bg-[#892890] hover:text-white transition-colors gap-[10px] cursor-pointer">
                            CBE Tigrigna
                            </button>
                            <button className="h-[40px] w-[44px] flex justify-center items-center p-2.5 bg-white text-[#000000] rotate-90 rounded-lg border border-[#892890] hover:bg-[#892890] hover:text-white transition-colors gap-[10px] cursor-pointer">
                                <span className="flex items-center justify-center ">&gt;</span>
                            </button>
                                 </div>
                        </div>
                         <h1 className="h-[30px] text-[#000000] text-[20px] leading-[30px] tracking-normal font-bold font-weight-700 font-pt-sans-caption mt-2 ml-4 self-start">
                              Amharic TV Programms
                         </h1>
                    
                    {/* News Grid Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-4">
                        {newsItems.map((item) => (
                            <div key={item.id} className="bg-white w-full">
                                <div className="relative w-[370px] h-[204.83px] ">
                                    <Image
                                        src={item.image}
                                        alt="Video Thumbnail"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    <button
                                        className="absolute text-[#ffffff] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[67.49px] h-[47.8px] bg-[#CE1312] rounded flex items-center justify-center shadow-lg cursor-pointer"
                                        onClick={() =>item.video && setActiveVideo(item.video)} disabled={!item.video}>
                                             ▶
                                        </button>
                                </div>

                                {/* modal */}
                                {activeVideo && (
                                    <div
                                        className="fixed inset-0 bg-opacity-25 flex items-center justify-center z-50"
                                        onClick={() => setActiveVideo(null)} // Close when clicking outside
                                    >
                                        <div
                                        className="bg-white h-[716px] w-[1043px] rounded-b-[8px] pb-[40px] pl-[40px] pr-[40px] gap-[40px]"
                                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                                        >
                                        {/* Top Bar */}
                                        <div className="rounded-t-[8px] border-b border-b-[1px] border-gray-300 justify-between p-[20px] flex h-[70px]">
                                            <span className="w-[107px] h-[30px] font-pt-sans-caption font-bold text-[20px] leading-[30px] tracking-[0] text-[#000000]">Video Title</span>
                                            <button
                                            className="w-[62px] h-[20px] text-[#000000] font-pt-sans-caption font-normal text-[14px] leading-[20px] tracking-[-0.01em] cursor-pointer"
                                            onClick={() => setActiveVideo(null)}
                                            >
                                            ✕ Close
                                            </button>
                                        </div>

                                        {/* Video Section */}
                                        <div className="relative w-[1043px] h-[646px] rounded-b-[8px] p-[40px] gap-[40px] flex flex-col mt-12">
                                            <iframe
                                            src={activeVideo}
                                            title="YouTube video"
                                            className="absolute inset-0 w-[967.3px] h-[546px]"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            ></iframe>
                                        </div>
                                        </div>
                                    </div>
                                    )}


                                <div className="w-full h-[30px] mt-4">
                                    <p className="text-[#892890] font-pt-sans-caption font-bold text-[20px] leading-[30px] tracking-normal mt-2">
                                        {item.description}
                                    </p>
                                </div>
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