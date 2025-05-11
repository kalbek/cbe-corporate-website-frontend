import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    // h - [59.44vh] sm:h-[70vh] lg:h-[59.44vh]
    <footer className="relative flex min-h-[612px]  flex-col">
      <div className="relative min-h-[612px]   overflow-hidden flex flex-col items-baseline brr-white ">
        {/* decorative left circle container - the background */}
        <div className="h-full w-[117.5%] -blue right-[12.92%] absolute  z-0">
          <div className="absolute left-0 top-0 w-full h-[117.5vw] rounded-full bg-purple-800"></div>
        </div>
        {/* decorative right circle container - the background */}
        <div className="h-full w-[117.5%]  -blue absolute left-[13.47%] top-12 z-0">
          <div className="left-0 top-0 w-full  h-[117.5vw] rounded-full bg-purple-800"></div>
        </div>
        {/* decorative left mask */}
        <div className="absolute w-[18.48%] aspect-square left-0   -bottom-4 -translate-x-[70%]  z-80">
          <img
            src="/icon-and-logos/logos-svg/mask-light-bg.svg"
            alt="Decorative mask"
            className="h-full object-fill "
          />
        </div>
        {/* footer content */}
        <nav className="absolute h-[69.78%] bg-purple-800 brr-white  bottom-0  w-full z-10">
          {/* footer content container */}
          <ul className="mx-[6.94%] h-full -white flex flex-col relative">
            {/* footer links container */}
            <li className="absolute h-fit   top-0 flex justify-center w-full  -blue">
              <ul className="flex flex-col md:flex-row justify-between w-full">
                <li>
                  <ul className="flex flex-col md:flex-row  justify-between  gap-15">
                    <li className="w-fit -blue flex flex-col items-start gap-[18px]">
                      <h1 className="text-white text-md underline" role="menu">
                        About Us
                      </h1>
                      <ul className="flex flex-col gap-2">
                        <li className="text-white text-xs">
                          <Link href="/about-us/about-cbe" passHref>
                            <p>About Cbe</p>
                          </Link>{" "}
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
                    <li className="w-fit -blue flex flex-col items-start gap-[18px]">
                      <h1 className="text-white text-md underline" role="menu">
                        Deposit Accounts
                      </h1>
                      <ul className="flex flex-col gap-2">
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
                    <li className="w-fit -blue flex flex-col items-start gap-[18px]">
                      <h1 className="text-white text-md underline" role="menu">
                        Services
                      </h1>
                      <ul className="flex flex-col gap-2">
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
                      <h1 className="text-white text-md underline" role="menu">
                        Ways of Banking
                      </h1>
                      <ul className="flex flex-col gap-2">
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
                    <li className="w-fit -blue flex flex-col items-start gap-[18px]">
                      <h1 className="text-white text-md underline" role="menu">
                        Resources
                      </h1>
                      <ul className="flex flex-col gap-2">
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
                      <h1 className="text-white text-md underline" role="menu">
                        Contact Us
                      </h1>
                      <ul className="flex flex-col gap-2">
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

                <ul className="flex items-end justify-start h-full w-auto -blue">
                  <li className="flex flex-col items-baseline gap-2">
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
                        SWIFT Code: CBETETAA{" "}
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
            <li className="absolute flex justify-between w-full -blue h-[25%] bottom-[9%]">
              <div className="relative w-full h-full">
                {/* footer social links */}
                <div className="absolute h-fit -white">
                  <div className="flex-cent-vh gap-3.5">
                    <p className="text-white "> Follow Us</p>
                    <div className="flex-cent-vh w-fit flex justify-between gap-5">
                      {/* telegram icon */}
                      <a
                        href="https://telegram.com"
                        target="_blank"
                        className="focus:outline-none"
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
                      >
                        <img
                          src="/icon-and-logos/social-icons/linkedin-icon.svg"
                          alt="linkedin-icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/* footer support content */}
                <div className="absolute h-[42.34%] w-full -white bottom-0 ">
                  <div className="flex justify-between items-baseline w-full h-full ">
                    {/* footer support info */}
                    <div className="relative w-fit h-full flex-cent-vh rounded-[50px] border-[1.5px] border-white ">
                      <div className=" flex-cent-vhb h-full w-full gap-5 -white px-8">
                        <div className="flex-cent-vh gap-2">
                          <img
                            src="/icon-and-logos/icons-svg/phone-icon.svg"
                            alt="phone-icon"
                          />
                          <p className="text-white "> Support:</p>
                        </div>
                        <p className="text-white "> +251951</p>
                      </div>
                    </div>
                    {/* app store links */}
                    <div className="mr-[1%] flex gap-4 w-fit">
                      {/* app store */}
                      <img
                        src="/icon-and-logos/logos-svg/appstore.svg"
                        alt="phone-icon"
                      />
                      {/* google play */}
                      <img
                        src="/icon-and-logos/logos-svg/googleplay-icon.svg"
                        alt="phone-icon"
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
        <div className="absolute w-[70.34%] aspect-square top-["></div>
      </div>
      {/* decorative right mask  component to hide the right mask overflow => width is arbitrary value*/}
      <div className="absolute img h-[70.345%] w-[6.5%] -blue right-0 -top-[11%] z-80">
        <img
          src="/icon-and-logos/logos-svg/mask-light-bg.svg"
          alt="Decorative mask"
          className="object-left h-full w-auto object-cover"
        />
      </div>
      <nav className="relative flex justify-center items-center bottom-0 min-h-11 bg-gold-400 z-70 w-full">
        <ul className="flex flex-col md:flex-row justify-between   w-full h-full  px-8 md:px-25 items-start">
          <li>
            <p className="text-sm text-purple-800 text-wrap">
              © 2025 Comercial Bank of Ethiopia. All right reserved
            </p>
          </li>
          <ul className="flex gap-1 md:gap-5 flex-col md:flex-row justify-between items-start">
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
  );
}
