'use client';

import { Metadata } from "next";
import { DataTable } from "@/components/ui/data-table";

interface PosData {
  id: string;
  branchName: string;
  district: string;
  posMerchantOrBranchName: string;
  telephone: string;
}

const posData: PosData[] = [
  {
    id: "1",
    branchName: "Saris Addisu Sefer",
    district: "BOLE",
    posMerchantOrBranchName: "SENTOZA TRADING PLC",
    telephone: "-"
  },
  {
    id: "2",
    branchName: "ASGORI BRANCH",
    district: "AMBO",
    posMerchantOrBranchName: "ASGORI BRANCH",
    telephone: "-"
  },
  {
    id: "3",
    branchName: "Sebategna",
    district: "MERKATO",
    posMerchantOrBranchName: "BIRHANHYUN SEBHAT HABTU",
    telephone: "-"
  },
  {
    id: "4",
    branchName: "Tabor",
    district: "HAWASSA",
    posMerchantOrBranchName: "TESHALE AWALE ETHIOPIA SUPERMA",
    telephone: "-"
  },
  {
    id: "5",
    branchName: "Combolcha",
    district: "DESSIE",
    posMerchantOrBranchName: "COMBOLCHA POST OFFICE",
    telephone: "-"
  },
  {
    id: "6",
    branchName: "Coca Mazoria",
    district: "MERKATO",
    posMerchantOrBranchName: "MEKA NISA KILATO",
    telephone: "-"
  },
  {
    id: "7",
    branchName: "Addis Ababa",
    district: "ARADA",
    posMerchantOrBranchName: "ETHIOPIAN POSTAL SERVICE ENTER",
    telephone: "-"
  },
  {
    id: "8",
    branchName: "Addis Ababa",
    district: "ARADA",
    posMerchantOrBranchName: "ETHIOPIAN POSTAL SERVICE ENTER",
    telephone: "-"
  },
  {
    id: "9",
    branchName: "KURFA BRANCH",
    district: "ARADA",
    posMerchantOrBranchName: "KURFA BRANCH",
    telephone: "-"
  },
  {
    id: "10",
    branchName: "Addis Ababa",
    district: "ARADA",
    posMerchantOrBranchName: "ETHIOPIAN POSTAL SERVICE ENTER",
    telephone: "-"
  }];

import { useState } from "react";

export default function Branch() {
  const [activeTab, setActiveTab] = useState('POS');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white">
      <div className="relative">
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
      <div className="container mx-auto px-4 py-2">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-2xl font-bold !text-[#892890] mb-2">Network</h2>
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
          <div className="p-4">
            <h4 className="text-2xl font-semibold text-black mb-4">POS</h4>
            <DataTable
              columns={[
                {
                  accessorKey: "id",
                  header: "ID"
                },
                {
                  accessorKey: "branchName",
                  header: "Branch Name"
                },
                {
                  accessorKey: "district",
                  header: "District"
                },
                {
                  accessorKey: "posMerchantOrBranchName",
                  header: "POS Merchant/Branch Name"
                },
                {
                  accessorKey: "telephone",
                  header: "Telephone"
                }
              ]}
              data={posData}
            />
            </div>
          </div>
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
  );
}