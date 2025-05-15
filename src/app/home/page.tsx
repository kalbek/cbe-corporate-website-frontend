'use client'

import { useState } from 'react'
import { formatDate } from '@/utils/formatDate'
import announcementContent from '@/data/announcementContent.json'
import currency from '@/data/currency.json'

export default function Home() {
  const formatted = formatDate(Date.now())

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  // method to truncate large text
  function truncateText(text: string) {
    return text.slice(0, 100) + '...'
  }

  // toggle read more button with text
  const toggleReadMore = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index))
  }

  return (
    <>
      <div className="flex flex-col w-full">
        {/* hero section*/}
        <div className="w-full aspect-[1440/519]">
          <img
            src="/images/hero-home-img.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        {/* services section*/}
        <div className="max-h[951px] flex flex-col  items-center">
          {/* services */}
          <ul className="grid grid-cols-2 md:grid-cols-7 py-10 justify-items-center items-center gap-[11px]">
            <li className="flex flex-col items-center gap-3 w-fit">
              <img
                src="/icon-and-logos/home-page/svg-icons/deposit-icon.svg"
                alt="Deposit Accounts"
              />
              <p className="text-center text-sm md:text-lg">Deposit Accounts</p>
            </li>
            <span className="hidden md:block w-fit">
              <img src="/icon-and-logos/icons-svg/divider-line.svg" alt="" />
            </span>
            <li className="flex flex-col justify-center items-center gap-[11px]">
              <img
                src="/icon-and-logos/home-page/svg-icons/cbe-card-icon.svg"
                alt="CBE Cards"
              />
              <p className="text-center text-sm md:text-lg">CBE Cards</p>
            </li>
            <span className="hidden md:block w-fit">
              <img src="/icon-and-logos/icons-svg/divider-line.svg" alt="" />
            </span>
            <li className="flex flex-col justify-center items-center gap-[11px]">
              <img
                src="/icon-and-logos/home-page/svg-icons/loan-icon.svg"
                alt="Loans"
              />
              <p className="text-center text-sm md:text-lg">Loans</p>
            </li>
            <span className="hidden md:block w-fit">
              <img src="/icon-and-logos/icons-svg/divider-line.svg" alt="" />
            </span>
            <li className="flex flex-col justify-center items-center gap-[11px]">
              <img
                src="/icon-and-logos/home-page/svg-icons/trade-services-icon.svg"
                alt="Trade Services"
              />
              <p className="text-center text-sm md:text-lg">Trade Services</p>
            </li>
          </ul>
          {/* ANNOUNCEMENT AND EXCHANGE RATE SECTION */}
          <div className="relative flex flex-col md:flex-row  gap-8 md:gap-0  justify-between overflow-hidden items-center w-full  md:w-full h-auto md:h-[757px]   px-2 md:pt-10 pb-20 md:px-20">
            {/* decorative right mask  component to hide the right mask overflow => width is arbitrary value*/}
            <div className="absolute img md:h-[193px] h-[40%] -blue -right-32 top-20 z-80">
              <img
                src="/icon-and-logos/logos-svg/mask-light-bg.svg"
                alt="Decorative mask"
                className="object-left h-full w-auto object-cover"
              />
            </div>
            {/* decorative left mask */}
            <div className="absolute img md:h-[193px] h-[40%] -blue -left-32 bottom-10 z-80">
              <img
                src="/icon-and-logos/logos-svg/mask-light-bg.svg"
                alt="Decorative mask"
                className="h-full object-fill"
              />
            </div>
            <div className="w-[100%] md:w-[55%] h-auto md:h-full  relative">
              <div className="flex flex-col items-start border border-[var(--color-purple-800)] w-full">
                <h1 className="text-xl-bold pl-7 py-2.5 bg-[var(--color-purple-800)] w-full text-white">
                  Announcements
                </h1>
                <div className="py-5 max-h-[579px] px-7 relative overflow-y-auto scrollbar-hide w-full">
                  {announcementContent.map((ann, idx) => {
                    const isExpanded = idx === expandedIndex
                    return (
                      <div
                        className={`relative flex flex-col gap-10   md:flex-row  w-full  ${isExpanded ? `h-auto` : `min-h-[110px] md:h-[110px]`} ${idx < announcementContent.length - 1 ? `` : ``}border-b border-[var(--color-gold-400)] mb-4`}
                        key={idx}
                      >
                        <img
                          src={ann.imgSrc}
                          alt="announcement"
                          className=" max-w-70  md:max-w-[250px] md:h-[80px]"
                        />
                        <div className="flex flex-col h-full relative justify-between items-start w-full   ">
                          <h2 className="text-md-bold text-[var(--color-purple-800)]   ">
                            {ann.header}
                          </h2>
                          <p className={`text-xs-bold mt-2 overflow-hidden`}>
                            {!isExpanded
                              ? truncateText(ann.content)
                              : ann.content}
                          </p>
                          <button
                            className="flex gap-1 items-center justify-center py-2 hover:cursor-pointer text-[var(--color-purple-800)]"
                            onClick={() => toggleReadMore(idx)}
                          >
                            <p className="text-sm color-[var(--color-purple-800)">
                              {isExpanded ? <>Read Less</> : <>Read More</>}
                            </p>
                            <img
                              src="/icon-and-logos/icons-svg/right-arrow-icon.svg"
                              alt=""
                              className={`w-4 mt-1 ${isExpanded ? `rotate-180` : ``} `}
                            />
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            {/* Exchange rate section */}
            <div className="w-full md:w-[40.7%] h-auto md:h-full relative">
              <div className="flex flex-col h-full bg-[#FBFBFB]">
                <div className="flex justify-between pl-7 pr-2 md:pr-7 lg:pr-10 xl:pr-20 py-2.5 bg-[var(--color-purple-800)] w-full">
                  <h1 className="text-xl-bold  text-white">Exchange Rage</h1>
                  <p className="text-lg-bold text-white">{formatted}</p>
                </div>
                <div className="px-7 py-5 w-full h-full">
                  <div className="flex flex-col justify-items-start max-h-[579px] relative overflow-y-auto scrollbar-hide">
                    {/* exchange rate table header */}
                    <table className="w-full table-auto border-collapse">
                      <thead>
                        <tr className="text-sm font-bold text-[var(--color-purple-800)]">
                          <th className="text-left text-sm-bold py-3">
                            Currency
                          </th>
                          <th className="text-left text-sm py-3">
                            Cash Buying
                          </th>
                          <th className="text-left text-sm py-3">
                            Cash Selling
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {currency.map((curr, idx) => (
                          <tr key={idx} className="align-middle">
                            <td className="py-3">
                              <div className="flex items-center gap-4">
                                <img
                                  src={curr.icon}
                                  alt={curr.name}
                                  className="w-6 h-6"
                                />
                                <div className="flex flex-col">
                                  <p className="font-bold text-sm-bold">
                                    {curr.abbr}
                                  </p>
                                  <p className="text-xs">{curr.name}</p>
                                </div>
                              </div>
                            </td>
                            <td className="border-b border-[var(--color-gold-400)] text-xs-bold md:text-sm">
                              {curr.buying}
                            </td>
                            <td className="border-b border-[var(--color-gold-400)] text-xs-bold md:text-sm">
                              {curr.selling}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* table body */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* digital banking section */}
        <div className="brr h-96 flex-cent-vh">Digital Banking section</div>
        {/* statistics and social responsibilities section */}
        <div className="brr flex-cent-vh h-[89.33vh] sm:h-[80vh] lg:h-[74.44vh]">
          statistics and social responsibilities section
        </div>
        {/* news section  */}
        <div className="flex-cent-vh h-[101.44vh] sm:h-[130vh] lg brr">
          news section
        </div>
      </div>
    </>
  )
}
