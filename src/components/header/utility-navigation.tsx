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
    } else {
      setAboutOpen(true);
      setLangOpen(false);
      setSocialOpen(false);
      setSubsidaryBranchesOpen(false);
    }
  };

  // toggle social links section on click only for small screens
  const toggleSocialLinks = () => {
    setLangOpen(false);
    setSubsidaryBranchesOpen(false);
    setAboutOpen(false);
    if (window.innerWidth < 1024) {
      setSocialOpen(!socialOpen);
    } else {
      setSocialOpen(true);
    }
  };

  // toggle languages section on click only for small screens
  const toggleLanguageLinks = () => {
    setSocialOpen(false);
    setSubsidaryBranchesOpen(false);
    setAboutOpen(false);
    if (window.innerWidth < 1024) {
      setLangOpen(!langOpen);
    } else {
      setLangOpen(true);
    }
  };

  // toggle cbe group menus visibility

  return (
    <nav
      aria-label="Utility navigation"
      className="min-h-7 flex justify-between items-center bg-purple-800 p-2 md:px-[7.2%] -z-50"
    >
      {/* left side navigation (About CBE Group and Careers)*/}
      <ul className="flex flex-col md:flex-row items-center text-white ">
        {/* About CBE Group */}
        <ul className="flex flex-col md:flex-row md:items-center  relative">
          <button
            onMouseEnter={toggleCbeGroup}
            onClick={toggleCbeGroup}
            aria-expanded={aboutOpen}
            aria-controls="about-cbe-menu"
          >
            <p className="text-xs text-white text-left w-full md:text-base hover:cursor-default">
              About CBE Group
            </p>
          </button>
          {/* About CBE Group sub menu */}
          <ul
            className={`${
              aboutOpen ? `visible` : `hidden`
            } absolute bg-white top-[130%] left-0 md:top-[120%] lg:top-[145%] shadow rounded-lg`}
          >
            {/* about cbe group menu */}
            <li
              className="flex flex-col md:flex-row   p-5 gap-0 md:gap-8  relative"
              onMouseLeave={() => setAboutOpen(false)}
              onClick={() => setAboutOpen(false)}
            >
              {/* tooltip diamond image */}
              <img
                src="/icon-and-logos/home-page/svg-icons/tooltip-diamond.svg"
                className="absolute -top-[11px] left-[8%]   w-fit h-[22px]"
                alt="a dimond icon for about cbe group tooltip"
              />
              {/* about cbe group sub menu items */}
              <ul
                id="about-cbe-menu"
                role="menu"
                className="flex flex-col rounded-sm font-bold"
              >
                <Link href="/about-us/about-cbe" passHref>
                  <li
                    role="menuitem"
                    className="flex-cent-v pr-10 w-fit md:w-60 py-2 border-b border-b-[#e8a029] cursor-pointer text-sm text-black hover:text-[var(--color-puple-800)]"
                  >
                    About CBE
                  </li>
                </Link>
                <Link href="/about-us/board-of-directors" passHref>
                  <li
                    role="menuitem"
                    className="flex-cent-v pr-10 w-fit md:w-60 py-2 border-b border-b-[#e8a029] cursor-pointer text-sm text-black hover:text-[var(--color-puple-800)]"
                  >
                    Borad of Directors
                  </li>
                </Link>
                <Link href="/about-us/executive-management" passHref>
                  <li
                    role="menuitem"
                    className="flex-cent-v pr-10 w-fit md:w-60 py-2 border-b border-b-[#e8a029] cursor-pointer text-sm text-black hover:text-[var(--color-puple-800)]"
                  >
                    Executive Management
                  </li>
                </Link>
              </ul>
              {/* second row */}
              <ul
                role="menu"
                className="flex flex-col rounded-sm  font-bold cursor-default"
              >
                <Link href="/about-us/OrganizationalStructure" passHref>
                  <li
                    role="menuitem"
                    className="flex-cent-v pr-10 w-fit md:w-60 py-2 border-b border-b-[#e8a029] cursor-pointer text-sm text-black hover:text-[var(--color-puple-800)]"
                  >
                    Organizational Structure
                  </li>
                </Link>
                <Link href="/about-us/csr" passHref>
                  <li
                    role="menuitem"
                    className="flex-cent-v pr-10 w-fit md:w-60 py-2 border-b border-b-[#e8a029] cursor-pointer text-sm text-black hover:text-[var(--color-puple-800)]"
                  >
                    CSR
                  </li>
                </Link>
              </ul>
            </li>
          </ul>
          <span
            role="presentation"
            className="hidden md:inline-block md:ml-[14px] text-white"
          >
            |
          </span>
          {/* careers menu item */}
          <li className="md:ml-[14px] text-xs text-white md:text-base ">
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
      </ul>
      {/* right side menu */}
      <ul className="w-fit h-full flex flex-wrap gap-0 md:gap-10 justify-end">
        {/* call center, atm branches and subsidary section  */}
        <ul className="flex flex-wrap justify-end">
          {/* call center */}
          <li className="flex items-center gap-1 w-fit px-2 cursor-default">
            <img src="\icon-and-logos\icons-svg\customer-care.svg" alt="" />
            <p className="text-xs text-white">
              Call Center: <span className="text-white">+251951</span>
            </p>
          </li>
          {/* atm and branches */}
          <li>
            {atmBranchesActive ? (
              <>
                <span
                  className={`cursor-default flex items-center gap-1 w-fit px-2  relative`}
                >
                  <img
                    src="\icon-and-logos\icons-svg\location-icon.svg"
                    alt=""
                  />
                  <p className="text-xs text-white">ATM & Branches</p>
                </span>
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
          </li>
          {/* subsidary branch */}
          <li className="flex items-center gap-1 w-fit px-2 relative ">
            <button
              className="flex-cent-vh gap-1"
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
            </button>

            {/* subsidary branch navigation menu */}
            <ul
              className={`${
                subsidaryBranchesOpen ? `visible` : `hidden`
              } absolute left-2   bg-white top-[200%] md:top-[160%] shadow rounded-md  flex-col  py-[18px] font-bold w-full md:w-44  `}
              onMouseLeave={() => setSubsidaryBranchesOpen(false)}
            >
              <li className="hover:cursor-pointer ml-5 mb-3.5 w-fit">
                <Link
                  href="/djibouti-branch/home"
                  className="flex-cent-vh gap-1"
                >
                  <img
                    src="icon-and-logos/home-page/svg-icons/subsidary-icon.svg"
                    alt=""
                  />
                  <p className="text-xs text-black">Djibouti Branch</p>
                </Link>
              </li>
              <li className="hover:cursor-pointer ml-5 w-fit">
                <Link
                  href="/south-sudan-branch/home"
                  className="flex-cent-vh gap-1"
                >
                  <img
                    src="icon-and-logos/home-page/svg-icons/subsidary-icon.svg"
                    alt=""
                  />
                  <p className="text-xs text-black">South Sudan Branch</p>
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* social and lang section  */}
        <ul className="flex items-center gap-5 w-fit relative ">
          <li>
            <button
              className={`w-fit flex gap-1 text-xs text-white ${
                !socialOpen ? `hover:cursor-pointer` : `cursor-default`
              } `}
              onClick={toggleSocialLinks}
            >
              <p>Social</p>
              <img
                src="\icon-and-logos\icons-svg\chevron-down-white.svg"
                alt=""
              />
            </button>
            {/* social links sub  menu */}

            <ul
              className={`${
                socialOpen ? `visible` : `hidden`
              } absolute    bg-white top-[200%] md:top-[160%] shadow rounded-sm flex-col gap-4 py-4  font-bold cursor-default`}
              onMouseLeave={() => setSocialOpen(false)}
            >
              <li className="flex gap-1 flex-cent-v pl-4 pr-10 w-fit  mb-3.5">
                <Link href="" className="flex gap-1">
                  <img
                    src="/icon-and-logos/social-icons/telegram-icon-black.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <p className="text-xs text-black">Telegram</p>
                </Link>
              </li>
              <li className="flex gap-1 pl-4 pr-10 w-fit  mb-3.5">
                <Link href="" className="flex gap-1">
                  <img
                    src="/icon-and-logos/social-icons/facebook-icon-black.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <p className="text-xs text-black">Facebook</p>
                </Link>
              </li>
              <li className="flex gap-1 pl-4 pr-10 w-fit  mb-3.5">
                <Link href="" className="flex gap-1">
                  <img
                    src="/icon-and-logos/social-icons/x-icon-black.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <p className="text-xs text-black">X</p>
                </Link>
              </li>
              <li className="flex gap-1 pl-4 pr-10 w-fit  mb-3.5">
                <Link href="" className="flex gap-1">
                  <img
                    src="/icon-and-logos/social-icons/instagram-icon-black.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <p className="text-xs text-black">Instagram</p>
                </Link>
              </li>
              <li className="flex gap-1 pl-4 pr-10 w-fit  mb-3.5">
                <Link href="" className="flex gap-1">
                  <img
                    src="/icon-and-logos/social-icons/youtube-icon-black.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <p className="text-xs text-black">Youtube</p>
                </Link>
              </li>
              <li className="flex gap-1 pl-4 pr-10 w-fit">
                <Link href="" className="flex gap-1">
                  <img
                    src="/icon-and-logos/social-icons/linkedin-icon-black.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <p className="text-xs text-black">Linkedin</p>
                </Link>
              </li>
            </ul>
          </li>

          {/* lang section  */}
          <li
            className={`w-fit flex gap-1 text-xs text-white  ${
              !langOpen ? `hover:cursor-pointer` : `cursor-default`
            }`}
            onClick={toggleLanguageLinks}
          >
            <p>EN</p>
            <img
              src="\icon-and-logos\icons-svg\chevron-down-white.svg"
              alt=""
            />
            {/* languages sub menu */}
            <ul
              className={`${
                langOpen ? `visible` : `hidden`
              } absolute left-0 md:left-[65%]  bg-white  top-[200%] md:top-[160%] shadow rounded-sm flex flex-col py-4   font-bold`}
              onMouseLeave={() => setLangOpen(false)}
            >
              <li className="flex gap-1 flex-cent-v pl-4 pr-10 w-fit cursor-default mb-3.5">
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
          </li>
        </ul>
      </ul>
    </nav>
  );
}
