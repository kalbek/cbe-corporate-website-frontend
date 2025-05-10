"use client";
import { useState } from "react";

export default function SubNavigation() {
  const [socialOpen, setSocialOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <div className="min-h-7 flex justify-between items-center bg-purple-800 p-2 md:px-[7.2%]">
        <div className="w-[clamp(120px,13.05vw,188px)] h-full relative ">
          <nav className="flex flex-col md:flex-row items-start md:items-center text-white">
            <a
              href="#AboutCBEGroup"
              className="text-xs text-white md:text-base"
              onMouseEnter={() => setAboutOpen(true)}
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About CBE Group
            </a>

            <span className="hidden md:inline-block md:ml-[14px]">|</span>

            <a
              href="#Careers"
              className="md:ml-[14px] text-xs text-white md:text-base hover:cursor-pointer"
            >
              Careers
            </a>
          </nav>
          <div
            className={`${
              aboutOpen ? `visible` : `hidden`
            } absolute  bg-white top-[130%] md:top-[120%] lg:top-[145%] shadow rounded-lg`}
          >
            {/* about cbe group menu */}
            <div
              className="flex flex-col md:flex-row   p-5 gap-0 md:gap-8    relative"
              onMouseLeave={() => setAboutOpen(false)}
              onClick={() => setAboutOpen(false)}
            >
              {/* tooltip diamond image */}
              <img
                src="/icon-and-logos/home-page/svg-icons/tooltip-diamond.svg"
                className="absolute -top-[11px] left-[8%]   w-fit h-[22px]"
                alt=""
              />
              {/* about cbe group menu items */}
              <ul className="flex flex-col    rounded-sm  font-bold cursor-default">
                <li className="flex-cent-v  pr-10 w-fit md:w-60 py-2  border-b border-b-[#e8a029] ">
                  <p className="text-sm text-black hover:cursor-pointer hover:text-[var(--color-puple-800)]">
                    About CBE
                  </p>
                </li>
                <li className="w-fit md:w-60 py-2  border-b border-b-[#e8a029] ">
                  <p className="text-sm text-black hover:cursor-pointer hover:text-[var(--color-puple-800)]">
                    Borad of Directors
                  </p>
                </li>
                <li className="w-fit md:w-60 py-2  border-b border-b-[#e8a029] ">
                  <p className="text-sm text-black hover:cursor-pointer hover:text-[var(--color-puple-800)]">
                    Executive Management
                  </p>
                </li>
              </ul>
              {/* second row */}
              <ul className="flex flex-col     rounded-sm  font-bold cursor-default">
                <li className="flex-cent-v w-fit md:w-60 py-2 pr-10 border-b border-b-[#e8a029] ">
                  <p className="text-sm text-black hover:cursor-pointer hover:text-[var(--color-puple-800)]">
                    Organizational Structure
                  </p>
                </li>
                <li className="pr-10 w-fit md:w-60 py-2  not-visited border-b border-b-[#e8a029] ">
                  <p className="text-sm text-black hover:cursor-pointer hover:text-[var(--color-puple-800)]">
                    CSR
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-fit h-full flex flex-wrap gap-0 md:gap-10 justify-end">
          {/* call center, atm branches and subsidary section  */}
          <div className="flex flex-wrap justify-end">
            {/* call center */}
            <div className="flex items-center gap-1 w-fit px-2 ">
              <img src="\icon-and-logos\icons-svg\customer-care.svg" alt="" />
              <p className="text-xs text-white">
                Call Center: <span className="text-white">+251951</span>
              </p>
            </div>
            {/* atm and branches */}
            <div className="flex items-center gap-1 w-fit px-2 ">
              <img src="\icon-and-logos\icons-svg\location-icon.svg" alt="" />
              <p className="text-xs text-white">ATM & Branches</p>
            </div>

            {/* subsidary branch */}
            <div className="flex items-center gap-1 w-fit px-2 ">
              <img src="\icon-and-logos\icons-svg\location-icon.svg" alt="" />
              <p className="text-xs text-white">Subsidary Branch</p>
            </div>
          </div>
          {/* social and lang section  */}
          <div className="flex items-center gap-5 w-fit relative ">
            {/* social section and chevron down icon */}
            <div
              className="w-fit flex gap-1 text-xs text-white hover:cursor-pointer"
              onClick={() => setSocialOpen(!socialOpen)}
            >
              <p>Social</p>
              <img
                src="\icon-and-logos\icons-svg\chevron-down-white.svg"
                alt=""
              />
            </div>
            {/* social lists menu */}
            <div
              className={`${
                socialOpen ? `visible` : `hidden`
              } absolute    bg-white top-[140%] shadow`}
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
              className="w-fit flex gap-1 text-xs text-white hover:cursor-pointer  cursor-default"
              onClick={() => setLangOpen(!langOpen)}
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
            >
              <ul className="flex flex-col gap-4 py-4 rounded-sm  font-bold">
                <li className="flex gap-1 flex-cent-v pl-4 pr-10 w-fit">
                  <p className="text-xs text-black">English</p>
                </li>
                <li className="flex gap-1 pl-4 pr-10 w-fit">
                  <p className="text-xs text-black">Amharic</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
