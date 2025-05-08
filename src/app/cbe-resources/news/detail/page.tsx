'use client'

import Image from 'next/image'

export default function NewsArticle() {
  return (
    <div className="bg-white w-[1440] h-[1107px]">
      {/* Date and Title */}
      <section className="w-[1440] h-[318px] gap-[14px] pt-[80px] pr-[100px] pb-[80px] pl-[100px]">
        <p className="w-[1240] h-[24px] text-[#E9A029] font-pt-sans-caption font-bold text-[18px] leading-[24px] text-center">06 May 2021</p>
        <h1 className=" text-purple-800 w-[1240] h-[120px] font-pt-sans-caption font-normal text-[48px] leading-[60px] tracking-[-0.02em] text-center">
        CBE Board of Directors, Management and Employees Plant 1 Million Tree Seedlings across the Country
        </h1>
      </section>

      {/* Image */}
      <div className='w-[1440] h-[789px] gap-[57px] pt-[80px] pr-[80px] pb-[100px] pl-[80px]'>
      <div className="flex justify-center">
        <Image
          src="/images/detail.png"
          alt="CBE Tree Planting"
          width={768}
          height={512}
          className="w-[768px] h-[432px]"
        />
      </div>

      {/* Paragraph */}
      <section className='justify-center flex pt-[20px]'>
        <p className='w-[732px] h-[120px] text-[#000000] font-pt-sans-caption font-normal text-[16px] leading-[24px] tracking-[0] text-center'>
        The Commercial Bank of Ethiopia Board of Directors, management and employees planted 1 million tree seedlings in various selected areas across the country, August 1st 2020. Ato Abie Sano President of the CBE, during the tree planting program held in Addis Ababa Bole Lemi Industrial Park, said that the program is part of the government’s initiative to plant five billion trees in 2020 aimed at curbing the effects of climate change and deforestation.
        </p>
      </section>
      </div>
    </div>
  )
}
