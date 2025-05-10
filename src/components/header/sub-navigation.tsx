"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SubNavigation() {
  const pathname = usePathname();
  const [socialOpen, setSocialOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [subsidaryBranchesOpen, setSubsidaryBranchesOpen] = useState(false);

  //   pathnames for each pages
  const carrersActive = pathname === "/misalliance/careers";
  const atmBranchesActive = pathname === "/ways-of-banking/atm-branch-locator";

  //   toggle with click about cbe group menu for md and sm screens only
  const toggleCbeGroup = () => {
    if (window.innerWidth < 1024) {
      setLangOpen(false);
      setSocialOpen(false);
      setSubsidaryBranchesOpen(false);
      setAboutOpen(!aboutOpen);
    }
  };

  return (
    <>
      <div className="min-h-7 flex justify-between items-center bg-purple-800 p-2 md:px-[7.2%] -z-50">
        <div className="w-[clamp(120px,13.05vw,188px)] h-full relative ">
          <nav>
            <ul className="flex flex-col md:flex-row items-start md:items-center text-white">
              <li>
                <p
                  className="text-xs text-white md:text-base hover:cursor-default"
                  onMouseEnter={() => {
                    setAboutOpen(true);
                    setLangOpen(false);
                    setSocialOpen(false);
                    setSubsidaryBranchesOpen(false);
                  }}
                  onClick={toggleCbeGroup}
                >
                  About CBE Group
                </p>
              </li>
              <li>
                <span className="hidden md:inline-block md:ml-[14px]">|</span>
              </li>
              <li className="md:ml-[14px] text-xs text-white md:text-base ">
                {/* dynamically call Link element based on careers page activeness */}
                {carrersActive ? (
                  <>
                    <p className="cursor-default">Careers</p>
                  </>
                ) : (
                  <>
                    <Link
                      href="/misalliance/careers"
                      className="hover:cursor-pointer"
                    >
                      Careers
                    </Link>
                  </>
                )}
              </li>
            </ul>
            {/* About CBE Group navigation sub menu */}
            <ul
              className={`${
                aboutOpen ? `visible` : `hidden`
              } absolute  bg-white top-[130%] md:top-[120%] lg:top-[145%] shadow rounded-lg`}
            >
              {/* about cbe group menu */}
              <li
                className="flex flex-col md:flex-row   p-5 gap-0 md:gap-8    relative"
                onMouseLeave={() => setAboutOpen(false)}
                onClick={() => setAboutOpen(false)}
              >
                {/* tooltip diamond image */}
                <img
                  src="/icon-and-logos/home-page/svg-icons/tooltip-diamond.svg"
                  className="absolute -top-[11px] left-[8%]   w-fit h-[22px]"
                  alt="a dimond icon for about cbe group tooltip"
                />
                {/* about cbe group menu items */}
                <ul className="flex flex-col rounded-sm font-bold">
                  <Link href="/about-us/about-cbe" passHref>
                    <li className="flex-cent-v pr-10 w-fit md:w-60 py-2 border-b border-b-[#e8a029] cursor-pointer text-sm text-black hover:text-[var(--color-puple-800)]">
                      About CBE
                    </li>
                  </Link>
                  <Link href="/about-us/board-of-directors" passHref>
                    <li className="flex-cent-v pr-10 w-fit md:w-60 py-2 border-b border-b-[#e8a029] cursor-pointer text-sm text-black hover:text-[var(--color-puple-800)]">
                      Borad of Directors
                    </li>
                  </Link>
                  <Link href="/about-us/executive-management" passHref>
                    <li className="flex-cent-v pr-10 w-fit md:w-60 py-2 border-b border-b-[#e8a029] cursor-pointer text-sm text-black hover:text-[var(--color-puple-800)]">
                      Executive Management
                    </li>
                  </Link>
                </ul>
                {/* second row */}
                <ul className="flex flex-col rounded-sm  font-bold cursor-default">
                  <Link href="/about-us/OrganizationalStructure" passHref>
                    <li className="flex-cent-v pr-10 w-fit md:w-60 py-2 border-b border-b-[#e8a029] cursor-pointer text-sm text-black hover:text-[var(--color-puple-800)]">
                      Organizational Structure
                    </li>
                  </Link>
                  <Link href="/about-us/csr" passHref>
                    <li className="flex-cent-v pr-10 w-fit md:w-60 py-2 border-b border-b-[#e8a029] cursor-pointer text-sm text-black hover:text-[var(--color-puple-800)]">
                      CSR
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div className="w-fit h-full flex flex-wrap gap-0 md:gap-10 justify-end">
          {/* call center, atm branches and subsidary section  */}
          <div className="flex flex-wrap justify-end">
            {/* call center */}
            <div className="flex items-center gap-1 w-fit px-2 cursor-default">
              <img src="\icon-and-logos\icons-svg\customer-care.svg" alt="" />
              <p className="text-xs text-white">
                Call Center: <span className="text-white">+251951</span>
              </p>
            </div>
            {/* atm and branches */}
            {atmBranchesActive ? (
              <>
                <div
                  className={`cursor-default flex items-center gap-1 w-fit px-2  relative`}
                >
                  <img
                    src="\icon-and-logos\icons-svg\location-icon.svg"
                    alt=""
                  />
                  <p className="text-xs text-white">ATM & Branches</p>
                </div>
              </>
            ) : (
              <>
                <Link
                  className={`hover:cursor-pointer flex items-center gap-1 w-fit px-2  relative`}
                  href="/ways-of-banking/atm-branch-locator"
                >
                  <img
                    src="\icon-and-logos\icons-svg\location-icon.svg"
                    alt=""
                  />
                  <p className="text-xs text-white">ATM & Branches</p>
                </Link>
              </>
            )}
            {/* subsidary branch */}
            <div
              className="flex items-center gap-1 w-fit px-2 relative "
              onClick={() => {
                setSocialOpen(false);
                setLangOpen(false);
                setSubsidaryBranchesOpen(!subsidaryBranchesOpen);
              }}
            >
              <img
                src="\icon-and-logos\icons-svg\location-icon.svg"
                alt=""
                className="hover:cursor-pointer"
              />
              <p
                className={`text-xs text-white ${
                  !subsidaryBranchesOpen
                    ? `hover:cursor-pointer`
                    : `cursor-default`
                } `}
              >
                Subsidary Branch
              </p>

              {/* subsidary branch navigation menu */}
              <div
                className={`${
                  subsidaryBranchesOpen ? `visible` : `hidden`
                } absolute left-2   bg-white top-[200%] md:top-[160%] shadow rounded-md `}
                onMouseLeave={() => setSubsidaryBranchesOpen(false)}
              >
                <ul className="flex flex-col px-5  py-[18px] gap-3.5 font-bold w-fit md:w-44 ">
                  <Link href="/djibouti-branch/home">
                    <li className="flex gap-1  w-fit hover:cursor-pointer">
                      <img
                        src="icon-and-logos/home-page/svg-icons/subsidary-icon.svg"
                        alt=""
                      />
                      <p className="text-xs text-black">Djibouti Branch</p>
                    </li>
                  </Link>
                  <Link href="/south-sudan-branch/home">
                    <li className="flex gap-1   w-fit hover:cursor-pointer">
                      <img
                        src="icon-and-logos/home-page/svg-icons/subsidary-icon.svg"
                        alt=""
                      />
                      <p className="text-xs text-black">South Sudan Branch</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          {/* social and lang section  */}
          <div className="flex items-center gap-5 w-fit relative ">
            {/* social section and chevron down icon */}
            <div
              className={`w-fit flex gap-1 text-xs text-white ${
                !socialOpen ? `hover:cursor-pointer` : `cursor-default`
              } `}
              onClick={() => {
                setLangOpen(false);
                setSubsidaryBranchesOpen(false);
                setSocialOpen(!socialOpen);
              }}
            >
              <p>Social</p>
              <img
                src="\icon-and-logos\icons-svg\chevron-down-white.svg"
                alt=""
              />
            </div>
            {/* social links navigation  menu */}
            <div
              className={`${
                socialOpen ? `visible` : `hidden`
              } absolute    bg-white top-[140%] shadow`}
              onMouseLeave={() => setSocialOpen(false)}
            >
              <ul className="flex flex-col gap-4 py-4 rounded-sm  font-bold cursor-default">
                <li className="flex gap-1 flex-cent-v pl-4 pr-10 w-fit">
                  <img
                    src="/icon-and-logos/social-icons/telegram-icon-black.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <p className="text-xs text-black">Telegram</p>
                </li>
                <li className="flex gap-1 pl-4 pr-10 w-fit">
                  <img
                    src="/icon-and-logos/social-icons/facebook-icon-black.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <p className="text-xs text-black">Facebook</p>
                </li>
                <li className="flex gap-1 pl-4 pr-10 w-fit">
                  <img
                    src="/icon-and-logos/social-icons/x-icon-black.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <p className="text-xs text-black">X</p>
                </li>
                <li className="flex gap-1 pl-4 pr-10 w-fit">
                  <img
                    src="/icon-and-logos/social-icons/instagram-icon-black.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <p className="text-xs text-black">Instagram</p>
                </li>
                <li className="flex gap-1 pl-4 pr-10 w-fit">
                  <img
                    src="/icon-and-logos/social-icons/youtube-icon-black.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <p className="text-xs text-black">Youtube</p>
                </li>
                <li className="flex gap-1 pl-4 pr-10 w-fit">
                  <img
                    src="/icon-and-logos/social-icons/linkedin-icon-black.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <p className="text-xs text-black">Linkedin</p>
                </li>
              </ul>
            </div>
            {/* lang section  */}
            <div
              className={`w-fit flex gap-1 text-xs text-white  ${
                !langOpen ? `hover:cursor-pointer` : `cursor-default`
              }`}
              onClick={() => {
                setSocialOpen(false);
                setSubsidaryBranchesOpen(false);
                setLangOpen(!langOpen);
              }}
            >
              <p>EN</p>
              <img
                src="\icon-and-logos\icons-svg\chevron-down-white.svg"
                alt=""
              />
            </div>
            {/* social lists menu */}
            <div
              className={`${
                langOpen ? `visible` : `hidden`
              } absolute left-0 md:left-[65%]  bg-white top-[140%] shadow`}
              onMouseLeave={() => setLangOpen(false)}
            >
              <ul className="flex flex-col gap-4 py-4 rounded-sm  font-bold">
                <li className="flex gap-1 flex-cent-v pl-4 pr-10 w-fit cursor-default">
                  <p className="text-xs text-black">English</p>
                </li>
                <li className="flex gap-1 pl-4 pr-10 w-fit cursor-pointer">
                  <a
                    target="_"
                    href="https://www.google.com/"
                    className="text-xs text-black"
                  >
                    Amharic
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
