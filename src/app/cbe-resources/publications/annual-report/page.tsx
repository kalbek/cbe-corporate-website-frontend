"use client";
import { useState, useMemo } from "react";
import Hero from "@/components/hero";
const data = [
  {
    title: "CBE Annual Report 2023/24",
    size: "29873.95 KB",
    date: "2025-03-07",
    download: "CBE Annual Report For Web.pdf",
  },
  {
    title: "Annual Report 2008/09",
    size: "19396.59 KB",
    date: "2020-02-20",
    download: "Annual Report 2008-9.pdf",
  },
  {
    title: "Annual Report 2009/10",
    size: "21875.38 KB",
    date: "2021-05-21",
    download: "Annual Report 2009-10.pdf",
  },
  {
    title: "Annual Report 2009/10",
    size: "21875.38 KB",
    date: "-",
    download: "Annual Report 2009-10.pdf",
  },
  {
    title: "Financial position as of June 30, 2024",
    size: "730.24 KB",
    date: "2024-10-14",
    download: "CBE's Financial Statements (FY- 2024).pdf",
  },
  {
    title: "Annual Report 2022/23",
    size: "2022.62 KB",
    date: "2024-05-29",
    download: "CBE_Annual Report 22_23 final.pdf",
  },
  {
    title: "Annual Report 2021/22",
    size: "2181.68 KB",
    date: "2024-05-29",
    download: "CBE_Annual Report 21_22.pdf",
  },
  {
    title: "Annual Report 2020-21",
    size: "2608.28 KB",
    date: "2022-09-01",
    download: "CBE_Annual Report 20_21.pdf",
  },
  {
    title: "Financial Position as of June 30, 2021",
    size: "1198.44 KB",
    date: "2021-12-29",
    download: "financial statement as of june 30-2021.pdf",
  },
  {
    title: "Annual Report 2019-20",
    size: "3069.1 KB",
    date: "2021-09-20",
    download: "annual report 2019_2020.pdf",
  },

  // 2nd page
   {
    title: "CBE Annual Report 2023/24",
    size: "29873.95 KB",
    date: "2025-03-07",
    download: "CBE Annual Report For Web.pdf",
  },
  {
    title: "Annual Report 2008/09",
    size: "19396.59 KB",
    date: "2020-02-20",
    download: "Annual Report 2008-9.pdf",
  },
  {
    title: "Annual Report 2009/10",
    size: "21875.38 KB",
    date: "2021-05-21",
    download: "Annual Report 2009-10.pdf",
  },
  {
    title: "Annual Report 2009/10",
    size: "21875.38 KB",
    date: "-",
    download: "Annual Report 2009-10.pdf",
  },
  {
    title: "Financial position as of June 30, 2024",
    size: "730.24 KB",
    date: "2024-10-14",
    download: "CBE's Financial Statements (FY- 2024).pdf",
  },
  {
    title: "Annual Report 2022/23",
    size: "2022.62 KB",
    date: "2024-05-29",
    download: "CBE_Annual Report 22_23 final.pdf",
  },
  {
    title: "Annual Report 2021/22",
    size: "2181.68 KB",
    date: "2024-05-29",
    download: "CBE_Annual Report 21_22.pdf",
  },
  {
    title: "Annual Report 2020-21",
    size: "2608.28 KB",
    date: "2022-09-01",
    download: "CBE_Annual Report 20_21.pdf",
  },
  {
    title: "Financial Position as of June 30, 2021",
    size: "1198.44 KB",
    date: "2021-12-29",
    download: "financialstatementasofjune30-2021.pdf",
  },
  {
    title: "Annual Report 2019-20",
    size: "3069.1 KB",
    date: "2021-09-20",
    download: "annual report 2019_2020.pdf",
  },
];

const ROWS_PER_PAGE = 10;

export default function AnnualReport() {
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
             <div className="mb-10 flex items-center justify-end ">
        <input
          type="search"
          className="w-[300px] px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-[#892890] pr-0"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          aria-label="Search Title"
        />
      </div>
      <table className="w-full ">
        <thead>
          <tr className="border-b border-[#892890] grid grid-cols-4">
            <th className="py-5 px-2 text-[#892890] text-left">Title</th>
            <th className="py-5 px-2 text-[#892890] text-left">Size</th>
            <th className="py-5 px-2 text-[#892890] text-left">Date</th>
            <th className="py-5 px-2 text-[#892890] text-left">Downloads</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {showRows.map((row, i) => (
            <tr key={i} className="border-b border-[#E6E6E6] hover:bg-purple-50 grid grid-cols-4">
              <td className="py-5 px-2 max-w-xs break-words">{row.title}</td>
              <td className="py-5 px-2">{row.size}</td>
              <td className="py-5 px-2">{row.date}</td>
              <td className="py-5 px-2">
                <a px-2
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
   
      <div className="absolute w-[15.48%] aspect-square left-0 -bottom-65 -translate-x-[70%]">
        <img
          src="/icon-and-logos/logos-svg/mask-light-bg.svg"
          alt="Decorative mask"
          className="h-full object-fill"
        />
      </div>
    </div>
  );
}
