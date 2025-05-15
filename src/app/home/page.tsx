'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const announcementContent = [
    {
      id: 0,
      imgSrc: '/icon-and-logos/home-page/announcement/image-1.png',
      header: 'የብድር ወለድ ምጣኔ ማሻሻያን ስለማሳወቅ',
      content:
        'መንግስት የኢትዮጵያን የፋይናንስ ዘርፍ ተወዳዳሪ እና ሳቢ ለማድረግ ገበያ መር የሆኑ ፖሊሲዎችን እና እስትራቴጂዎችን በመቅረጽ ተግባራዊ እያደረገ ይገኛል...',
    },
    {
      id: 1,
      imgSrc: '/icon-and-logos/home-page/announcement/image-2.png',
      header: 'እንኳን ለደንበኞች አገልግሎት ወር በሰላም አደረሰዎ!',
      content:
        'ትላንት ለገንዘብዎ ሁነኛ ባላደራ ሲፈልጉ በመላው ሀገራችን ቅርንጫፎቹን በመክፈት እርስዎ ወዳሉበት የደረሰው ባንካችን፣ ዛሬም በፈጣን እንቅስቃሴ...',
    },
    {
      id: 0,
      imgSrc: '/icon-and-logos/home-page/announcement/image-1.png',
      header: 'የብድር ወለድ ምጣኔ ማሻሻያን ስለማሳወቅ',
      content:
        'መንግስት የኢትዮጵያን የፋይናንስ ዘርፍ ተወዳዳሪ እና ሳቢ ለማድረግ ገበያ መር የሆኑ ፖሊሲዎችን እና እስትራቴጂዎችን በመቅረጽ ተግባራዊ እያደረገ ይገኛል...',
    },
    {
      id: 1,
      imgSrc: '/icon-and-logos/home-page/announcement/image-2.png',
      header: 'እንኳን ለደንበኞች አገልግሎት ወር በሰላም አደረሰዎ!',
      content:
        'ትላንት ለገንዘብዎ ሁነኛ ባላደራ ሲፈልጉ በመላው ሀገራችን ቅርንጫፎቹን በመክፈት እርስዎ ወዳሉበት የደረሰው ባንካችን፣ ዛሬም በፈጣን እንቅስቃሴ...',
    },
    {
      id: 1,
      imgSrc: '/icon-and-logos/home-page/announcement/image-2.png',
      header: 'እንኳን ለደንበኞች አገልግሎት ወር በሰላም አደረሰዎ!',
      content:
        'ትላንት ለገንዘብዎ ሁነኛ ባላደራ ሲፈልጉ በመላው ሀገራችን ቅርንጫፎቹን በመክፈት እርስዎ ወዳሉበት የደረሰው ባንካችን፣ ዛሬም በፈጣን እንቅስቃሴ...',
    },
    {
      id: 0,
      imgSrc: '/icon-and-logos/home-page/announcement/image-1.png',
      header: 'የብድር ወለድ ምጣኔ ማሻሻያን ስለማሳወቅ',
      content:
        'መንግስት የኢትዮጵያን የፋይናንስ ዘርፍ ተወዳዳሪ እና ሳቢ ለማድረግ ገበያ መር የሆኑ ፖሊሲዎችን እና እስትራቴጂዎችን በመቅረጽ ተግባራዊ እያደረገ ይገኛል...',
    },
    {
      id: 1,
      imgSrc: '/icon-and-logos/home-page/announcement/image-2.png',
      header: 'እንኳን ለደንበኞች አገልግሎት ወር በሰላም አደረሰዎ!',
      content:
        'ትላንት ለገንዘብዎ ሁነኛ ባላደራ ሲፈልጉ በመላው ሀገራችን ቅርንጫፎቹን በመክፈት እርስዎ ወዳሉበት የደረሰው ባንካችን፣ ዛሬም በፈጣን እንቅስቃሴ...',
    },
    {
      id: 1,
      imgSrc: '/icon-and-logos/home-page/announcement/image-2.png',
      header: 'እንኳን ለደንበኞች አገልግሎት ወር በሰላም አደረሰዎ!',
      content:
        'ትላንት ለገንዘብዎ ሁነኛ ባላደራ ሲፈልጉ በመላው ሀገራችን ቅርንጫፎቹን በመክፈት እርስዎ ወዳሉበት የደረሰው ባንካችን፣ ዛሬም በፈጣን እንቅስቃሴ...',
    },
    {
      id: 0,
      imgSrc: '/icon-and-logos/home-page/announcement/image-1.png',
      header: 'የብድር ወለድ ምጣኔ ማሻሻያን ስለማሳወቅ',
      content:
        'መንግስት የኢትዮጵያን የፋይናንስ ዘርፍ ተወዳዳሪ እና ሳቢ ለማድረግ ገበያ መር የሆኑ ፖሊሲዎችን እና እስትራቴጂዎችን በመቅረጽ ተግባራዊ እያደረገ ይገኛል...',
    },
    {
      id: 1,
      imgSrc: '/icon-and-logos/home-page/announcement/image-2.png',
      header: 'እንኳን ለደንበኞች አገልግሎት ወር በሰላም አደረሰዎ!',
      content:
        'ትላንት ለገንዘብዎ ሁነኛ ባላደራ ሲፈልጉ በመላው ሀገራችን ቅርንጫፎቹን በመክፈት እርስዎ ወዳሉበት የደረሰው ባንካችን፣ ዛሬም በፈጣን እንቅስቃሴ...',
    },
    {
      id: 1,
      imgSrc: '/icon-and-logos/home-page/announcement/image-2.png',
      header: 'እንኳን ለደንበኞች አገልግሎት ወር በሰላም አደረሰዎ!',
      content:
        'ትላንት ለገንዘብዎ ሁነኛ ባላደራ ሲፈልጉ በመላው ሀገራችን ቅርንጫፎቹን በመክፈት እርስዎ ወዳሉበት የደረሰው ባንካችን፣ ዛሬም በፈጣን እንቅስቃሴ...',
    },
    {
      id: 0,
      imgSrc: '/icon-and-logos/home-page/announcement/image-1.png',
      header: 'የብድር ወለድ ምጣኔ ማሻሻያን ስለማሳወቅ',
      content:
        'መንግስት የኢትዮጵያን የፋይናንስ ዘርፍ ተወዳዳሪ እና ሳቢ ለማድረግ ገበያ መር የሆኑ ፖሊሲዎችን እና እስትራቴጂዎችን በመቅረጽ ተግባራዊ እያደረገ ይገኛል...',
    },
    {
      id: 1,
      imgSrc: '/icon-and-logos/home-page/announcement/image-2.png',
      header: 'እንኳን ለደንበኞች አገልግሎት ወር በሰላም አደረሰዎ!',
      content:
        'ትላንት ለገንዘብዎ ሁነኛ ባላደራ ሲፈልጉ በመላው ሀገራችን ቅርንጫፎቹን በመክፈት እርስዎ ወዳሉበት የደረሰው ባንካችን፣ ዛሬም በፈጣን እንቅስቃሴ...',
    },
  ]

  const currency = [
    {
      icon: '/icon-and-logos/home-page/exchange-rate/usd.svg',
      abbr: 'USD',
      name: 'US Dollar',
      buying: '1244.0086',
      selling: '1244.0086',
    },
    {
      icon: '/icon-and-logos/home-page/exchange-rate/gbp.svg',
      abbr: 'GBP',
      name: 'Pound Sterling',
      buying: '152.3866',
      selling: '1244.0086',
    },
    {
      icon: '/icon-and-logos/home-page/exchange-rate/',
      abbr: 'EUR',
      name: 'Euro',
      buying: '152.3866',
      selling: '1244.0086',
    },
    {
      icon: '/icon-and-logos/home-page/exchange-rate/',
      abbr: 'CHF',
      name: 'Swiss Frank',
      buying: '152.3866',
      selling: '1244.0086',
    },
    {
      icon: '/icon-and-logos/home-page/exchange-rate/',
      abbr: 'AED',
      name: 'UAE Dirham',
      buying: '152.3866',
      selling: '1244.0086',
    },
    {
      icon: '/icon-and-logos/home-page/exchange-rate/',
      abbr: 'KWD',
      name: 'Kuwaiti Dinar',
      buying: '152.3866',
      selling: '1244.0086',
    },
  ]

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  useEffect(() => {
    console.log('readddd mode is ', expandedIndex)
  }, [expandedIndex])

  // method to truncate large text
  function truncateText(text: string) {
    return text.slice(0, 10) + '...'
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
        <div className="max-h[951px] flex flex-col py-10 items-center justify-center brr">
          {/* services */}
          <ul className="grid grid-cols-2 md:grid-cols-7 justify-items-center items-center gap-[11px]">
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
          <div className="flex flex-col md:flex-row   md:gap-0   justify-between items-center w-full   md:w-full h-auto md:h-[757px]   px-2 pt-10 pb-20 md:px-20 brr">
            <div className="w-[100%] md:w-[55%] h-auto md:h-full  relative">
              <div className="flex flex-col items-start border border-[var(--color-purple-800)] w-full">
                <h1 className="text-xl-bold pl-7 py-2.5 bg-[var(--color-purple-800)] w-full text-white">
                  Announcements
                </h1>
                <div className="py-5 max-h-[579px] px-7 relative overflow-y-scroll w-full">
                  {announcementContent.map((ann, idx) => {
                    const isExpanded = idx === expandedIndex
                    return (
                      <div
                        className={`relative flex flex-col gap-10   md:flex-row  w-full min-h-[110px] ${idx < announcementContent.length - 1 ? `` : ``}border-b border-[var(--color-gold-400)] mb-4`}
                        key={idx}
                      >
                        <img
                          src={ann.imgSrc}
                          alt="announcement"
                          className="  max-w-[250px] "
                        />
                        <div
                          className={`"flex flex-col h-full items-between  items-start gap-2"`}
                        >
                          <h2 className="text-md-bold text-[var(--color-purple-800)] ">
                            {ann.header}
                          </h2>
                          <p>
                            {!isExpanded
                              ? truncateText(ann.content)
                              : ann.content}
                          </p>
                          <button
                            className="flex gap-1 items-center justify-center"
                            onClick={() => toggleReadMore(idx)}
                          >
                            <p className="text-sm color-[var(--color-purple-800)">
                              {isExpanded ? <>Read Less</> : <>Read More</>}
                            </p>
                            <img
                              src="/icon-and-logos/home-page/svg-icons/right-arrow-icon.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="w-[80%] md:w-[40.7%] h-auto md:h-full brr-blue">
              Exchange Rate
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
