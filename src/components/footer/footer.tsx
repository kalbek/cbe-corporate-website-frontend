'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [aboutUsOpen, setAboutUsOpen] = useState(true)
  const [depositAccountsOpen, setDepositAccountsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [waysOfBankingOpen, setWaysOfBankingOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [contactUsOpen, setContactUsOpen] = useState(false)

  const toggleAboutUs = () => {
    setDepositAccountsOpen(false)
    setServicesOpen(false)
    setWaysOfBankingOpen(false)
    setResourcesOpen(false)
    setContactUsOpen(false)
    setAboutUsOpen(true)
  }

  const toggleDepositAccounts = () => {
    setServicesOpen(false)
    setWaysOfBankingOpen(false)
    setResourcesOpen(false)
    setContactUsOpen(false)
    setAboutUsOpen(false)
    setDepositAccountsOpen(true)
  }
  const toggleServices = () => {
    setDepositAccountsOpen(false)
    setWaysOfBankingOpen(false)
    setResourcesOpen(false)
    setContactUsOpen(false)
    setAboutUsOpen(false)
    setServicesOpen(true)
  }
  const toggleWaysOfBanking = () => {
    setDepositAccountsOpen(false)
    setServicesOpen(false)
    setResourcesOpen(false)
    setContactUsOpen(false)
    setAboutUsOpen(false)
    setWaysOfBankingOpen(true)
  }
  const toggleResources = () => {
    setDepositAccountsOpen(false)
    setServicesOpen(false)
    setWaysOfBankingOpen(false)
    setContactUsOpen(false)
    setAboutUsOpen(false)
    setResourcesOpen(true)
  }
  const toggleContactUs = () => {
    setDepositAccountsOpen(false)
    setServicesOpen(false)
    setWaysOfBankingOpen(false)
    setResourcesOpen(false)
    setAboutUsOpen(false)
    setContactUsOpen(true)
  }

  return (
    // h - [59.44vh] sm:h-[70vh] lg:h-[59.44vh]
    <footer className="relative flex min-h-[612px]  ovehe flex-col ">
      {/* decorative left mask */}
      <div className="absolute min-w-[18.48%] aspect-square left-0 -bottom-4 md:-translate-x-[65%] -translate-y-4 -translate-x-[90%] z-70  ">
        <img
          src="/icon-and-logos/logos-svg/mask-light-bg.svg"
          alt="Decorative mask"
          className="h-full object-fill"
        />
      </div>
      <div className="relative min-h-[612px] overflow-hidden flex flex-col items-baseline">
        {/* decorative left circle container - the background */}
        <div className="h-full w-[117.5%] -blue right-[12.92%] absolute z-0">
          <div className="absolute left-0 top-0 w-full h-[117.5vw] rounded-full bg-purple-800"></div>
        </div>
        {/* decorative right circle container - the background */}
        <div className="h-full w-[117.5%] absolute left-[13.47%] top-12 z-0">
          <div className="left-0 top-0 w-full  h-[117.5vw] rounded-full bg-purple-800"></div>
        </div>

        {/* footer content */}
        <nav className="absolute h-[69.78%] bg-purple-800 bottom-0  w-full z-30">
          {/* footer content container */}
          <ul className="mx-[6.94%] h-full  flex flex-col relative">
            {/* footer links container */}
            <li className="absolute  h-auto top-0 md:h-fit w-fit md:mt-0 flex justify-center md:w-full -mt-6 ">
              {/* <li className="  "> */}
              <ul
                className={`flex flex-row   md:gap-0 justify-between w-full relative   md:mt-0 z-30  gap-10 `}
              >
                <li className="relative w-fit md:w-[75.4%]">
                  <ul className="flex flex-col md:flex-row  md:justify-between items-start text-left">
                    <li className="w-fit flex flex-col items-start gap-[18px]">
                      <button onClick={toggleAboutUs}>
                        <h1
                          className="text-md-bold md:text-lg-bold w-full text-white underline text-left"
                          role="menu"
                        >
                          About Us
                        </h1>
                      </button>
                      <ul
                        className={`${
                          aboutUsOpen ? `flex` : `hidden  `
                        } md:flex flex-col gap-2 ml-2 md:ml-0 -mt-3 md:mt-0 `}
                      >
                        <li className="text-white text-xs">
                          <Link href="/about-us/about-cbe" passHref>
                            <p>About Cbe</p>
                          </Link>{' '}
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/about-us/board-of-directors" passHref>
                            <p>Board of Directors</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/about-us/executive-management" passHref>
                            <p>Executive Management</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link
                            href="/about-us/OrganizationalStructure"
                            passHref
                          >
                            <p>Organizational Structure</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/about-us/csr" passHref>
                            <p>CSR</p>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="w-fit flex flex-col items-start gap-[18px]">
                      <button onClick={toggleDepositAccounts}>
                        <h1
                          className="text-md-bold md:text-lg-bold text-white underline w-[130%] md:w-full text-left"
                          role="menu"
                        >
                          Deposit Accounts
                        </h1>
                      </button>
                      <ul
                        className={`${
                          depositAccountsOpen ? `flex` : `hidden  `
                        } md:flex flex-col gap-2 ml-2 md:ml-0 -mt-3 md:mt-0 `}
                      >
                        <li className="text-white text-xs">
                          <Link href="/products/deposit" passHref>
                            <p>Deposit Accounts</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/products/cards" passHref>
                            <p>Cbe Cards</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/products/loan" passHref>
                            <p>Loans</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/products/trade-services" passHref>
                            <p>Trade Services</p>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="w-fit flex flex-col items-start gap-[18px]">
                      <button onClick={toggleServices}>
                        <h1
                          className="text-md-bold md:text-lg-bold text-white underline"
                          role="menu"
                        >
                          Services
                        </h1>
                      </button>
                      <ul
                        className={`${
                          servicesOpen ? `flex` : `hidden  `
                        } md:flex flex-col gap-2 ml-2 md:ml-0 -mt-3 md:mt-0 `}
                      >
                        <li className="text-white text-xs">
                          <Link href="/cbe-services/cbe-birr" passHref>
                            <p>CBE Birr Plus</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/cbe-services/cbe-ethio-direct " passHref>
                            <p>Ethio Direct</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/cbe-services/cbe-nedaj" passHref>
                            <p>CBE Nedaj</p>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="w-fit -blue flex flex-col items-start gap-[18px]">
                      <button onClick={toggleWaysOfBanking}>
                        <h1
                          className="text-md-bold md:text-lg-bold w-35 md:w-full text-white underline text-left"
                          role="menu"
                        >
                          Ways of Banking
                        </h1>
                      </button>
                      <ul
                        className={`${
                          waysOfBankingOpen ? `flex` : `hidden  `
                        } md:flex flex-col gap-2 ml-2 md:ml-0 -mt-3 md:mt-0 `}
                      >
                        <li className="text-white text-xs">
                          <Link
                            href="/ways-of-banking/internet-banking"
                            passHref
                          >
                            <p>Internet Banking</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/ways-of-banking/network/branch" passHref>
                            <p>Branches</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link
                            href="/ways-of-banking/atm-branch-locator"
                            passHref
                          >
                            <p>ATM Locator</p>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="w-fit flex flex-col items-start gap-[18px]">
                      <button onClick={toggleResources}>
                        <h1
                          className="text-md-bold md:text-lg-bold text-white underline"
                          role="menu"
                        >
                          Resources
                        </h1>
                      </button>
                      <ul
                        className={`${
                          resourcesOpen ? `flex` : `hidden  `
                        } md:flex flex-col gap-2 ml-2 md:ml-0 -mt-3 md:mt-0 `}
                      >
                        <li className="text-white text-xs">
                          <Link
                            href="/cbe-resources/publications/annual-report"
                            passHref
                          >
                            <p>Publication</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/cbe-resources/media/programs" passHref>
                            <p>Media Programs</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/cbe-resources/media/gallary" passHref>
                            <p>Gallary</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/cbe-resources/announcements" passHref>
                            <p>Announcements</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/cbe-resources/news" passHref>
                            <p>News</p>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="w-fit -blue flex flex-col items-start gap-[18px]">
                      <button onClick={toggleContactUs}>
                        <h1
                          className="text-md-bold md:text-lg-bold text-white underline w-full text-left"
                          role="menu"
                        >
                          Contact Us
                        </h1>
                      </button>
                      <ul
                        className={`${
                          contactUsOpen ? `flex` : `hidden  `
                        } md:flex flex-col gap-2 ml-2 md:ml-0 -mt-3 md:mt-0 `}
                      >
                        <li className="text-white text-xs">
                          <Link
                            href="/ways-of-banking/atm-branch-locator"
                            passHref
                          >
                            <p>ATM Locator</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/ways-of-banking/network/branch" passHref>
                            <p>Branch Network</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/misalliance/contact-us" passHref>
                            <p>Contact</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/misalliance/terms-and-tarrif" passHref>
                            <p>Terms and Tarrif</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/misalliance/tenders" passHref>
                            <p>Tenders</p>
                          </Link>
                        </li>
                        <li className="text-white text-xs">
                          <Link href="/misalliance/careers" passHref>
                            <p>Careers</p>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <ul className="flex items-end justify-start h-fit md:h-[100%] w-auto -blue ">
                  <li
                    className={`flex flex-col items-baseline gap-0 md:gap-2 `}
                  >
                    <Link href="">
                      <p className="text-white text-xs">Ras Desta Damtew St,</p>
                    </Link>
                    <Link href="">
                      <p className="text-white text-xs">
                        01, Kirkos, Addis Ababa,Ethiopia.
                      </p>
                    </Link>
                    <Link href="">
                      <p className="text-white text-xs">Tel1:251-551-50-04,</p>
                    </Link>
                    <Link href="">
                      <p className="text-white text-xs"> Fax: 251-551-45-22</p>
                    </Link>
                    <Link href="">
                      <p className="text-white text-xs">
                        SWIFT Code: CBETETAA{' '}
                      </p>
                    </Link>
                    <Link href="">
                      <p className="text-white text-xs">
                        Email: info@cbe.com.et
                      </p>
                    </Link>
                  </li>
                </ul>
              </ul>
            </li>
            {/* footer social container */}
            <li className=" absolute flex justify-between w-full  h-[25%]  bottom-[100%] md:bottom-[9%]">
              <div className="relative w-full h-fit md:h-full flex flex-col z-20">
                {/* footer social links */}
                <div className="flex flex-col items-start md:flex-row gap-2 md:gap-3.5">
                  <p className="text-lg-bold text-white  w-fit text-left float-right whitespace-nowrap">
                    Follow Us
                  </p>
                  <div className="flex-cent-vh w-fit flex justify-between gap-5">
                    {/* telegram icon */}
                    <a
                      href="https://telegram.com"
                      target="_blank"
                      className="focus:outline-none"
                      rel="noreferrer"
                    >
                      <img
                        src="/icon-and-logos/social-icons/telegram-icon.svg"
                        alt="telegram-icon"
                      />
                    </a>
                    {/* facebook-link */}
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      className="focus:outline-none"
                      rel="noreferrer"
                    >
                      <img
                        src="/icon-and-logos/social-icons/facebook-icon.svg"
                        alt="facebook-icon"
                      />
                    </a>
                    {/* twitter-link */}
                    <a
                      href="https://x.com"
                      target="_blank"
                      className="focus:outline-none"
                      rel="noreferrer"
                    >
                      <img
                        src="/icon-and-logos/social-icons/x-icon.svg"
                        alt="twitter-icon"
                      />
                    </a>
                    {/* instagram-link */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      className="focus:outline-none"
                      rel="noreferrer"
                    >
                      <img
                        src="/icon-and-logos/social-icons/instagram-icon.svg"
                        alt="instagram-icon"
                      />
                    </a>
                    {/* youtube-link */}
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      className="focus:outline-none"
                      rel="noreferrer"
                    >
                      <img
                        src="/icon-and-logos/social-icons/youtube-icon.svg"
                        alt="youtube-icon"
                      />
                    </a>
                    {/* linkedin-link */}
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      className="focus:outline-none"
                      rel="noreferrer"
                    >
                      <img
                        src="/icon-and-logos/social-icons/linkedin-icon.svg"
                        alt="linkedin-icon"
                      />
                    </a>
                  </div>
                </div>
                {/* footer support content */}
                <div className="  absolute h-[42.34%] top-110 md:top-14.5 w-full -white bottom-[100%]   md:bottom-0 ">
                  <div className="flex flex-col md:flex-row md:gap-0 gap-2 justify-between items-baseline w-full h-full ">
                    {/* footer support info */}
                    <div className="relative w-fit h-fit md:h-full flex-cent-vh rounded-[50px] border-[1.5px] border-white ">
                      <div className=" flex-cent-vhb h-full w-full gap-5  px-2 py-1 md:px-8">
                        <div className="flex-cent-vh gap-2">
                          <img
                            src="/icon-and-logos/icons-svg/phone-icon.svg"
                            alt="phone-icon"
                          />
                          <p className="text-lg-bold text-white ">Support:</p>
                        </div>
                        <p className="text-lg-bold text-white "> +251951</p>
                      </div>
                    </div>
                    {/* app store links */}
                    <div className="mr-[1%] flex gap-4 w-fit items-end relative z-90">
                      {/* app store */}
                      <img
                        src="/icon-and-logos/logos-svg/appstore.svg"
                        alt="app store"
                      />
                      {/* google play */}
                      <img
                        src="/icon-and-logos/logos-svg/googleplay-icon.svg"
                        alt="google play"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        {/* footer bottom */}
        <div className="absolute w-full h-[10%] bottom-0 flex-cent-vh -white z-80"></div>
        {/* right footer decorative */}
        <div className="absolute w-[70.34%] aspect-square"></div>
      </div>
      {/* decorative right mask  component to hide the right mask overflow => width is arbitrary value*/}
      {/* <div className="absolute img md:h-[70.345%]   md:w-[6.5%]  -right-40 md:right-0 md:top-[-11%] bottom-50 z-80"> */}
      <div className="absolute img md:h-[70.345%] h-[50%] w-[16.5%] md:w-[6.5%] -blue   right-0 md:-top-[11%] top-70 z-80">
        <img
          src="/icon-and-logos/logos-svg/mask-light-bg.svg"
          alt="Decorative mask"
          className="object-left h-full w-auto object-cover"
        />
      </div>
      <nav className="relative flex justify-center items-center bottom-0 min-h-11 bg-gold-400 z-60 w-full">
        <ul className="flex flex-col md:flex-row justify-between   w-full h-full  px-8 md:px-25  items-start">
          <li>
            <p className="text-sm text-purple-800 text-wrap">
              © 2025 Comercial Bank of Ethiopia. All right reserved
            </p>
          </li>
          <ul className="flex gap-1 md:gap-5 flex-col md:flex-row justify-between items-start ">
            <li>
              <Link href="/misalliance/faq" passHref>
                <p className="text-sm text-purple-800 text-wrap">FAQ</p>
              </Link>
            </li>
            <li role="presentation">
              <p className="text-sm text-purple-800 hidden md:block">|</p>
            </li>
            <li>
              <Link href="/misalliance/privacy-policy">
                <p className="text-sm text-purple-800">Privacy Policy</p>
              </Link>
            </li>
            <li role="presentation">
              <p className="text-sm text-purple-800 hidden md:block">|</p>
            </li>
            <Link href="/misalliance/terms-and-tarrif" passHref>
              <li>
                <p className="text-sm text-purple-800">Terms and Tarrif</p>
              </li>
            </Link>
            <li role="presentation">
              <p className="text-sm text-purple-800 hidden md:block">|</p>
            </li>
            <li>
              <p className="text-sm text-purple-800">
                Vulnerability Disclosure Standard Procedure
              </p>
            </li>
          </ul>
        </ul>
      </nav>
    </footer>
  )
}
