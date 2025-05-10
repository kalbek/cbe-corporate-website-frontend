"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PrimaryNavigation() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [waysOfBankingOpen, setWaysOfBankingOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [cbeNoorOpen, setCbeNoorOpen] = useState(false);
  const menuOpen =
    productsOpen ||
    servicesOpen ||
    waysOfBankingOpen ||
    resourcesOpen ||
    cbeNoorOpen;

  const resetMenuOpens = () => {
    setProductsOpen(false);
    setServicesOpen(false);
    setWaysOfBankingOpen(false);
    setResourcesOpen(false);
    setCbeNoorOpen(false);
  };

  // toggle products menu
  const toogleProducts = () => {
    setProductsOpen(true);
    setServicesOpen(false);
    setWaysOfBankingOpen(false);
    setResourcesOpen(false);
    setCbeNoorOpen(false);
  };

  // toggle products menu
  const toogleServices = () => {
    setProductsOpen(false);
    setServicesOpen(true);
    setWaysOfBankingOpen(false);
    setResourcesOpen(false);
    setCbeNoorOpen(false);
  };

  // toggle products menu
  const toogleWaysOfBanking = () => {
    setProductsOpen(false);
    setServicesOpen(false);
    setWaysOfBankingOpen(true);
    setResourcesOpen(false);
    setCbeNoorOpen(false);
  };

  // toggle products menu
  const toogleResources = () => {
    setProductsOpen(false);
    setServicesOpen(false);
    setWaysOfBankingOpen(false);
    setResourcesOpen(true);
    setCbeNoorOpen(false);
  };

  // toggle products menu
  const toogleCbeNoor = () => {
    setProductsOpen(false);
    setServicesOpen(false);
    setWaysOfBankingOpen(false);
    setResourcesOpen(false);
    setCbeNoorOpen(true);
  };

  return (
    <nav className="h-16 flex gap-4 items-center justify-between px-2 md:px-18 lg:px-24 relative">
      {/* absolute bg for menu */}
      {menuOpen && (
        <ul
          role="presentation  "
          className="absolute min-h-52 w-[100vw]   top-[100%] left-0 bg-white border-t-2 border-t-[#E6E6E6]"
          onMouseLeave={resetMenuOpens}
        ></ul>
      )}
      {/* cbe logo */}
      <ul className=" ">
        <li>
          <Link href={"/home"}>
            <img
              src="/icon-and-logos/logos-svg/logo-cbe-w-text.svg"
              className="max-w-30 max-h-25"
              alt=""
            />
          </Link>
        </li>
      </ul>
      {/* main nav items */}
      <ul className="flex gap-10 justify-center items-center w-fit  h-[100%]">
        <li className="">
          <ul className="gap-10 flex justify-between flex-wrap   w-fit h-16 items-center relative">
            <ul className="h-full">
              <li className="px-2.5 text-sm h-full ">
                <button
                  onClick={toogleProducts}
                  className={`h-[100%] border-b-4 hover:border-b-[var(--color-purple-800)] hover:text-[var(--color-purple-800)] ${
                    !productsOpen
                      ? `hover:cursor-pointer border-b-4  border-b-white`
                      : `cursor-default border-b-[var(--color-purple-800)] text-[var(--color-purple-800)]`
                  }`}
                >
                  <p>Products</p>
                </button>
                <ul
                  className={`${
                    productsOpen ? `visible` : `hidden`
                  }  absolute top-[100%] w-48 py-5 `}
                >
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="">
                      <p>Deposit Accounts</p>
                    </Link>
                  </li>
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="">
                      <p>CBE Cards</p>
                    </Link>
                  </li>
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="">Loans</Link>
                  </li>
                  <li className="py-2 hover:text-[var(--color-purple-800)]">
                    <Link href="">Trade Services</Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/* services menu items */}
            <ul className="h-full">
              <li className="px-2.5 text-sm h-full ">
                <button
                  onClick={toogleServices}
                  className={`h-[100%] border-b-4 hover:border-b-[var(--color-purple-800)] hover:text-[var(--color-purple-800)] ${
                    !servicesOpen
                      ? `hover:cursor-pointer border-b-4  border-b-white`
                      : `cursor-default border-b-[var(--color-purple-800)] text-[var(--color-purple-800)]`
                  }`}
                >
                  <p>Services</p>
                </button>
                <ul
                  className={`${
                    servicesOpen ? `visible` : `hidden`
                  } absolute top-[100%] w-48  py-5`}
                >
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="">
                      <p>CBE Birr Plus</p>
                    </Link>
                  </li>
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="">
                      <p>Ethio Direct</p>
                    </Link>
                  </li>
                  <li className="py-2 hover:text-[var(--color-purple-800)]">
                    <Link href="">CBE Nedaj</Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/* ways of banking menu items */}
            <ul className="h-full">
              <li className="px-2.5 text-sm h-full ">
                <button
                  onClick={toogleWaysOfBanking}
                  className={`h-[100%] border-b-4 hover:border-b-[var(--color-purple-800)] hover:text-[var(--color-purple-800)] ${
                    !waysOfBankingOpen
                      ? `hover:cursor-pointer border-b-4  border-b-white`
                      : `cursor-default border-b-[var(--color-purple-800)] text-[var(--color-purple-800)]`
                  }`}
                >
                  <p>Ways of Banking</p>
                </button>
                <ul
                  className={`${
                    waysOfBankingOpen ? `visible` : `hidden`
                  } absolute top-[100%] w-48  py-5`}
                >
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="">
                      <p>Internet Banking</p>
                    </Link>
                  </li>
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="">
                      <p> Mobile Banking</p>
                    </Link>
                  </li>
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="">Branches</Link>
                  </li>
                  <li className="py-2 hover:text-[var(--color-purple-800)]">
                    <Link href="">ATM Locator</Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/* resourses menu items */}
            <ul className="h-full">
              <li className="px-2.5 text-sm h-full ">
                <button
                  onClick={toogleResources}
                  className={`h-[100%] border-b-4 hover:border-b-[var(--color-purple-800)] hover:text-[var(--color-purple-800)] ${
                    !resourcesOpen
                      ? `hover:cursor-pointer border-b-4  border-b-white`
                      : `cursor-default border-b-[var(--color-purple-800)] text-[var(--color-purple-800)]`
                  }`}
                >
                  <p>Resources</p>
                </button>
                <ul
                  className={`${
                    resourcesOpen ? `visible` : `hidden`
                  } absolute top-[100%] w-48  py-5`}
                >
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="">
                      <p>Publication</p>
                    </Link>
                  </li>
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="">
                      <p> Media Programmes</p>
                    </Link>
                  </li>
                  <li className="py-2 hover:text-[var(--color-purple-800)]">
                    <Link href="">Gallery</Link>
                  </li>
                </ul>
              </li>
              <ul className="hidden">
                {/* 2ndst column */}
                <li>
                  <Link href="">
                    <p>News</p>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <p> Announcements</p>
                  </Link>
                </li>
              </ul>
            </ul>
            {/* CBE Noor menu */}
            <ul className="h-full">
              <li className="px-2.5 text-sm h-full">
                <button
                  onClick={toogleCbeNoor}
                  className={`h-[100%] border-b-4 hover:border-b-[var(--color-purple-800)] hover:text-[var(--color-purple-800)] ${
                    !cbeNoorOpen
                      ? `hover:cursor-pointer border-b-4  border-b-white`
                      : `cursor-default border-b-[var(--color-purple-800)] text-[var(--color-purple-800)]`
                  }`}
                >
                  <Link href="">
                    <p>CBE Noor</p>
                  </Link>
                </button>
              </li>
            </ul>
          </ul>
        </li>
        <li className="w-fit">
          {/* mobile banking button */}
          <button className=" bg-[var(--color-gold-500)] w-fit px-4 py-2.5 rounded-sm cursor-default hover:cursor-default hover:bg-[var(--color-purple-800)]">
            <Link href={""} className="hover:cursor-default ">
              <p className="text-white text-sm">INTERNET BANKING</p>
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
