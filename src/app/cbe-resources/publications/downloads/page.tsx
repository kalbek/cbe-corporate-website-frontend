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
    title:
      "A new initiative for de-risking investments in the Ethiopian coffee sector. Current Call for Proposals Loans will be awarded through a Call for Proposals targeting companies and cooperatives within the coffee value chain. This Credit Line Facility is a €10 million concessional loan financed by the Italian government to the Government of Ethiopia, managed by the Commercial Bank of Ethiopia (CBE).",
    size: "335.7 KB",
    date: "2025-03-19",
    download: "UNIDO IAT leaflet finalfinal.pdf",
  },
  {
    title: "ከ 15 ዓመት በላይ ሳይንቀሳቀሱ የቆዩ ሒሳቦችን ስለማሳወቅ",
    size: "538.73 KB",
    date: "2023-03-03",
    download: "15 years.pdf",
  },
  {
    title: "Health Center Applicant for Exam",
    size: "264.2 KB",
    date: "2022-04-08",
    download: "HealthCenterApp.pdf",
  },
  {
    title: "10th Round PLS Winners List",
    size: "509.69 KB",
    date: "2022-03-05",
    download: "10ኛው የላቲም ውድድር ውጤቶች.pdf",
  },
  {
    title: "Managment Trainee",
    size: "65.22 KB",
    date: "2021-08-17",
    download: "List of Management Trainee For Interview.pdf",
  },
  {
    title: "IS Managment Trainee",
    size: "42.1 KB",
    date: "2021-08-17",
    download: "IS-Mgt-Trainee.pdf",
  },
  {
    title: "List of candidates for Management Trainee",
    size: "113.8 KB",
    date: "2021-06-26",
    download: "List of candidates for Management Trainee.pdf",
  },
  {
    title: "List of candidates for IS Management Trainee",
    size: "39.46 KB",
    date: "2021-06-26",
    download: "List of candidates for IS Management Trainee.pdf",
  },
  {
    title: "CBE NOOR English",
    size: "208.57 KB",
    date: "2021-05-08",
    download: "CBEnoor-1.pdf",
  },
  {
    title: "CBE Product and Services English",
    size: "147.06 KB",
    date: "2021-05-08",
    download: "CBE-Products-Services-Amharic.pdf",
  },
];

const ROWS_PER_PAGE = 10;

export default function Downloads() {
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
          <h2 className="text-[18px] font-semibold py-5">Downloads</h2>
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
