'use client';

import { Metadata } from "next";

interface BranchData {
  branchName: string;
  district: string;
  branchGrade: string;
  region: string;
  city: string;
  telephone: string;
}

const sampleData: BranchData[] = [
  {
    branchName: "Addis Ababa Main Branch",
    district: "Addis Ketema",
    branchGrade: "A",
    region: "Addis Ababa",
    city: "-",
    telephone: "-"
  },
  {
    branchName: "Bole Branch",
    district: "Bole",
    branchGrade: "B",
    region: "Addis Ababa",
    city: "-",
    telephone: "-"
  },
  {
    branchName: "Lideta Branch",
    district: "Lideta",
    branchGrade: "A",
    region: "Addis Ababa",
    city: "-",
    telephone: "-"
  },
  {
    branchName: "Kality Branch",
    district: "Akaki",
    branchGrade: "B",
    region: "Addis Ababa",
    city: "-",
    telephone: "-"
  },
  {
    branchName: "Addis Ababa Main Branch",
    district: "Addis Ketema",
    branchGrade: "A",
    region: "Addis Ababa",
    city: "-",
    telephone: "-"
  },
  {
    branchName: "Bole Branch",
    district: "Bole",
    branchGrade: "B",
    region: "Addis Ababa",
    city: "-",
    telephone: "-"
  },
  {
    branchName: "Lideta Branch",
    district: "Lideta",
    branchGrade: "A",
    region: "Addis Ababa",
    city: "-",
    telephone: "-"
  },
  {
    branchName: "Kality Branch",
    district: "Akaki",
    branchGrade: "B",
    region: "Addis Ababa",
    city: "-",
    telephone: "-"
  }
];

import { useState } from "react";

export default function Branch() {
  const [activeTab, setActiveTab] = useState('POS');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white">
      <div className="min-h-screen relative">
        <img
          src="/images/hero.png"
          alt="Internet Banking Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex">
          {/* Navigation Arrows */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <span className="text-2xl text-white cursor-pointer hover:text-gray-300 transition-colors">&lt;</span>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
            <span className="text-2xl text-white cursor-pointer hover:text-gray-300 transition-colors">&gt;</span>
          </div>
          {/* Left half - empty */}
          <div className="w-1/2"></div>
          {/* Right half - content */}
          <div className="w-1/2 flex items-center justify-center">
            <div className="max-w-2xl px-8 py-6">
              <h1 className="text-4xl font-bold mb-4 text-white">Branch Network</h1>
              <p className="max-w-2xl text-base mb-4 text-white !text-white">
              From city centers to rural communities, our branches bring banking closer to you.
              </p>
              <a
                href="#"
                className="inline-block bg-[#a58aa8] text-white px-6 py-3 rounded-lg hover:bg-[#927290] transition-colors mb-4"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold !text-[#892890] mb-4">Network</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1">
              <div className="flex gap-2">
                <button 
                  className={`px-4 py-2 rounded-sm border-[--color-puple-800] text-black font-medium ${
                    activeTab === 'Branch Network' 
                      ? 'bg-[#892890]' 
                      : 'bg-white'
                  }`}
                  onClick={() => handleTabClick('Branch Network')}
                >
                  Branch Network
                </button>
                <button 
                  className={`px-4 py-2 rounded-sm border-[--color-puple-800] text-black font-medium ${
                    activeTab === 'POS' 
                      ? 'bg-[#892890]' 
                      : 'bg-white'
                  }`}
                  onClick={() => handleTabClick('POS')}
                >
                  POS
                </button>
                <button 
                  className={`px-4 py-2 rounded-sm border-[--color-puple-800] text-black font-medium ${
                    activeTab === 'CBE Birr Agents' 
                      ? 'bg-[#892890]' 
                      : 'bg-white'
                  }`}
                  onClick={() => handleTabClick('CBE Birr Agents')}
                >
                  CBE Birr Agents
                </button>
                <button 
                  className={`px-4 py-2 rounded-sm border-[--color-puple-800] text-black font-medium ${
                    activeTab === 'Cbe Noor Branches' 
                      ? 'bg-[#892890]' 
                      : 'bg-white'
                  }`}
                  onClick={() => handleTabClick('Cbe Noor Branches')}
                >
                  Cbe Noor Branches
                </button>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for branch"
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:border-[#a58aa8] focus:ring-1 focus:ring-[#a58aa8]"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg shadow overflow-hidden">
        <h4 className="text-2xl font-semibold text-black mb-4">Branch Network</h4>
          <table className="min-w-full">
            <thead>
            <tr>
                <td colSpan={6}>
                  <hr className="border-b border-[#892890] w-full" />
                </td>
              </tr>
              <tr className="bg-[--color-puple-800]">
                <th className="px-6 py-3 text-left text-sm font-medium !text-[--color-puple-800] uppercase tracking-wider">
                  Branch Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium !text-[--color-puple-800] uppercase tracking-wider">
                  District
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium !text-[--color-puple-800] uppercase tracking-wider">
                  Branch Grade
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium !text-[--color-puple-800] uppercase tracking-wider">
                  Region
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium !text-[--color-puple-800] uppercase tracking-wider">
                  City
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium !text-[--color-puple-800] uppercase tracking-wider">
                  Telephone
                </th>
              </tr>
              <tr>
                <td colSpan={6}>
                  <hr className="border-b border-[#892890] w-full" />
                </td>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sampleData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.branchName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.district}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.branchGrade}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.region}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.city}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.telephone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-center mt-6">
          <button className="px-3 py-1 text-gray-500 hover:text-gray-700">
            ‹ Back
          </button>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-[#a58aa8] text-white rounded-full">
              1
            </button>
            <button className="px-3 py-1 text-gray-500 hover:text-gray-700">
              2
            </button>
            <button className="px-3 py-1 text-gray-500 hover:text-gray-700">
              3
            </button>
            <button className="px-3 py-1 text-gray-500 hover:text-gray-700">
              4
            </button>
            <button className="px-3 py-1 text-gray-500 hover:text-gray-700">
              5
            </button>
          </div>
          <button className="px-3 py-1 text-gray-500 hover:text-gray-700">
            Next ›
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}