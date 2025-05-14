"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Hero from "@/components/hero";

const navItems = [
  { label: "Annual Report", href: "/cbe-resources/publications/annual-report" },
  { label: "Mudaye Neway", href: "/cbe-resources/publications/mudaye-neway" },
  { label: "Press Release", href: "/cbe-resources/publications/press-release" },
  { label: "Downloads", href: "/cbe-resources/publications/downloads" },
];

const data = [
  {
    title: "AWUDE NIWAY",
    size: "7047.17 KB",
    date: "2025-04-04",
    download: "AWUDE NIWAY_CBE_FINAL.pdf",
  },
  {
    title: "80th Anniversary and HO inauguration",
    size: "15246.94 KB",
    date: "2022-02-19",
    download: "80thAnniversaryBook.pdf",
  },
  {
    title: "Mudaye Neway Vol.8 No. 2",
    size: "5461.38 KB",
    date: "2021-05-08",
    download: "2020-V8No2.pdf",
  },
  {
    title: "Mudaye Neway Vol.8 No.1",
    size: "20626.78 KB",
    date: "2021-05-08",
    download: "2019-V8No1.pdf",
  },
  {
    title: "Mudaye Neway Vol. 7 No. 3",
    size: "17095.13 KB",
    date: "2021-05-08",
    download: "2018-V7No3.pdf",
  },
  {
    title: "Mudaye Neway Vol. 7 No. 2",
    size: "19185.8 KB",
    date: "2021-05-08",
    download: "2018-V7No2.pdf",
  },
  {
    title: "Mudaye Neway Vol. 7 No. 1",
    size: "43329.4 KB",
    date: "2021-05-08",
    download: "2018-V7No1.pdf",
  },
  {
    title: "Mudaye Neway Vol. 6 No. 2",
    size: "25960.57 KB",
    date: "2021-05-08",
    download: "2016-V6No2.pdf",
  },
  {
    title: "Mudaye Neway Vol. 6 No. 1",
    size: "8658 KB",
    date: "2021-05-08",
    download: "2016-V6No1.pdf",
  },
  {
    title: "Mudaye Neway Vol. 5 No. 3",
    size: "12788.95 KB",
    date: "2021-05-08",
    download: "2015-V5No3.pdf",
  },
];

const ROWS_PER_PAGE = 10;

export default function MudayeNeway() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      data.filter((row) =>
        row.title.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / ROWS_PER_PAGE));
  const showRows = filtered.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE
  );

  if (page > totalPages && page !== 1) setPage(1);
  const pathname = usePathname();
  return (
    <div className="font-primary">
      <Hero
        header="CBE Publications"
        description="Access official reports, updates, and insights from CBE—your trusted source for transparency, performance, and financial growth."
        cta={{ label: "Know More", href: "/" }}
      />
      <section className="container mx-auto px-4 grid grid-cols-2 gap-10 py-15">
        <div className="col-span-2  ">
          <h2 className="text-accent text-[30px] font-bold mb-5 text-[#892890]">
            Publications
          </h2>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex gap-2 flex-wrap">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    (pathname === item.href
                      ? "bg-[#892890] white border-transparent "
                      : "bg-white  hover:bg-purple-50 ") +
                    "px-4 py-2 rounded border border-[#892890] text-sm font-medium transition-all"
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="relative w-full max-w-sm">
              <input
                type="search"
                className="w-full px-3 py-1 pr-10 border border-gray-300 rounded focus:outline-none focus:border-[#892890]"
                placeholder="Search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                aria-label="Search Title"
              />
              {search === "" && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <img
                    src="/icon-and-logos/icons-svg/search.svg"
                    alt="Search Icon"
                    className="w-4 h-4 text-gray-400"
                  />
                </div>
              )}
            </div>
          </div>
          <h2 className="text-[18px] font-semibold py-5">Mudaye Neway</h2>
          <table className="w-full ">
            <thead>
              <tr className="border-b border-t border-[#892890] grid grid-cols-4">
                <th className="py-5 px-2 text-[#892890] text-left">Title</th>
                <th className="py-5 px-2 text-[#892890] text-left">Size</th>
                <th className="py-5 px-2 text-[#892890] text-left">Date</th>
                <th className="py-5 px-2 text-[#892890] text-left">
                  Downloads
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {showRows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-[#E6E6E6] hover:bg-purple-50 grid grid-cols-4"
                >
                  <td className="py-5 px-2 max-w-xs break-words">
                    {row.title}
                  </td>
                  <td className="py-5 px-2">{row.size}</td>
                  <td className="py-5 px-2">{row.date}</td>
                  <td className="py-5 px-2">
                    <a
                      className="text-[#892890] underline hover:text-purple-900"
                      href={`/${row.download}`}
                    >
                      {row.download}
                    </a>
                  </td>
                </tr>
              ))}
              {showRows.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-gray-500 py-4 text-center">
                    No results
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="flex justify-end items-center gap-2 mt-6">
            <button
              className="rounded border px-3 py-1 text-sm purple border-[#E9E9E9] bg-white hover:bg-purple-50"
              onClick={() => setPage((p) => p - 1)}
              disabled={page === 1}
            >
              {"< Back"}
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`w-8 h-8 flex items-center justify-center text-sm rounded border ${
                  page === i + 1
                    ? "white bg-[#892890] border-[#892890]"
                    : "border-[#E9E9E9] bg-white purple"
                }`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="rounded border px-3 py-1 text-sm purple border-[#E9E9E9] bg-white hover:bg-purple-50"
              onClick={() => setPage((p) => p + 1)}
              disabled={page === totalPages}
            >
              {"Next >"}
            </button>
          </div>
        </div>
      </section>

      <div className="absolute w-[15.48%] aspect-square left-0 -bottom-100 -translate-x-[70%]">
        <img
          src="/icon-and-logos/logos-svg/mask-light-bg.svg"
          alt="Decorative mask"
          className="h-full object-fill"
        />
      </div>
    </div>
  );
}
