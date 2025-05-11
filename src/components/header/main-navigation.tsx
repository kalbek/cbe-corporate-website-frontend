"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function PrimaryNavigation() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [waysOfBankingOpen, setWaysOfBankingOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [cbeNoorOpen, setCbeNoorOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setCbeNoorOpen(false);
  };

  // disable scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // define close and menu svg icons
  const Close = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#892890"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cursor-pointer"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  const Menu = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#892890"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cursor-pointer"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );

  // reset mobile menu when the screen size exeedds 1024px
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    // Handler to call on change
    const handleChange = (e: MediaQueryListEvent) => {
      setIsSmallScreen(e.matches);
    };

    // Set initial value
    setIsSmallScreen(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // ✅ Use it in JSX or logic
  useEffect(() => {
    // if (isSmallScreen) {
    //   console.log("Now in small screen mode (≤1014px)");
    // }
    setMobileMenuOpen(false);
  }, [isSmallScreen]);

  return (
    <nav className="h-16 flex gap-4 items-center justify-between px-2 md:px-18 lg:px-24 relative ">
      {/* absolute bg for menu */}
      {/* {menuOpen && ( */}
      {menuOpen && (
        <ul
          role="presentation  "
          className="hidden lg:block absolute min-h-52 w-[100vw]   top-[100%] left-0 bg-white border-t-2 border-t-[#E6E6E6] z-30"
          onMouseLeave={resetMenuOpens}
        ></ul>
      )}
      {/* cbe logo */}
      <ul className=" z-80">
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
        <li className=" hidden lg:block">
          <ul className="flex justify-between flex-wrap   min-w-[43vw] h-16 items-center relative z-">
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
                  }  absolute top-[100%] w-48 py-5 z-50`}
                  onClick={resetMenuOpens}
                >
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="/products/deposit">
                      <p>Deposit Accounts</p>
                    </Link>
                  </li>
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="/products/cards">
                      <p>CBE Cards</p>
                    </Link>
                  </li>
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="/products/loan">Loans</Link>
                  </li>
                  <li className="py-2 hover:text-[var(--color-purple-800)]">
                    <Link href="/products/trade-services">Trade Services</Link>
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
                  } absolute top-[100%] w-48  py-5 z-50`}
                  onClick={resetMenuOpens}
                >
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="/cbe-services/cbe-birr">
                      <p>CBE Birr Plus</p>
                    </Link>
                  </li>
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="/cbe-services/cbe-ethio-direct">
                      <p>Ethio Direct</p>
                    </Link>
                  </li>
                  <li className="py-2 hover:text-[var(--color-purple-800)]">
                    <Link href="/cbe-services/cbe-nedaj">CBE Nedaj</Link>
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
                  } absolute top-[100%] w-48  py-5 z-50`}
                  onClick={resetMenuOpens}
                >
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="/ways-of-banking/internet-banking">
                      <p>Internet Banking</p>
                    </Link>
                  </li>
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="/ways-of-banking/mobile-banking">
                      <p> Mobile Banking</p>
                    </Link>
                  </li>
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="/ways-of-banking/network/branch">Branches</Link>
                  </li>
                  <li className="py-2 hover:text-[var(--color-purple-800)]">
                    <Link href="/ways-of-banking/atm-branch-locator">
                      ATM Locator
                    </Link>
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
                  } absolute top-[100%] w-48  py-5 z-50`}
                  onClick={resetMenuOpens}
                >
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="/cbe-resources/publications/annual-report">
                      <p>Publication</p>
                    </Link>
                  </li>
                  <li className="py-2 border-b border-b-[#E6E6E6] hover:text-[var(--color-purple-800)]">
                    <Link href="/cbe-resources/media/programs">
                      <p> Media Programmes</p>
                    </Link>
                  </li>
                  <li className="py-2 hover:text-[var(--color-purple-800)]">
                    <Link href="cbe-resources/media/gallary">Gallery</Link>
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
                <Link href="/products/cbe-noor">
                  <button
                    onClick={toogleCbeNoor}
                    className={`h-[100%] border-b-4 hover:border-b-[var(--color-purple-800)] hover:text-[var(--color-purple-800)] ${
                      !cbeNoorOpen
                        ? `hover:cursor-pointer border-b-4  border-b-white`
                        : `cursor-default border-b-[var(--color-purple-800)] text-[var(--color-purple-800)]`
                    }`}
                  >
                    <p>CBE Noor</p>
                  </button>
                </Link>
              </li>
            </ul>
          </ul>
        </li>

        <li className="w-fit  items-end hidden lg:block">
          <button className=" bg-[var(--color-gold-500)] w-fit px-4 py-2.5 rounded-sm cursor-default hover:cursor-default hover:bg-[var(--color-purple-800)] flex ">
            <Link href={""} className="hover:cursor-default ">
              <p className="text-white text-sm">INTERNET BANKING</p>
            </Link>
          </button>
        </li>

        <li className="lg:hidden">
          <button
            className=""
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <Close /> : <Menu />}
          </button>
        </li>
      </ul>
      {/* mobile main nav */}

      {mobileMenuOpen && (
        <section
          className={` absolute top-[64px] left-0 w-full  h-[calc(100vh-64px)] bg-red-400 z-50 overflow-hidden transition-transform duration-300 `}
        >
          <ul>
            <li></li>
            <li></li>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </ul>
        </section>
      )}
    </nav>
  );
}
