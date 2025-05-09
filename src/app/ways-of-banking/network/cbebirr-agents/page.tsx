'use client';

import { Metadata } from "next";
import { DataTable } from "@/components/ui/data-table";

interface CbeBirrAgentData {
  id: string;
  name: string;
  region: string;
  city: string;
  wereda: string;
  kebele: string;
  telephone: string;
  responsibleBranch: string;
  location: string;
  agentBusiness: string;
}

const columns = [
  { id: "id", header: "ID", accessorKey: "id" },
  { id: "name", header: "Name", accessorKey: "name" },
  { id: "region", header: "Region", accessorKey: "region" },
  { id: "city", header: "City", accessorKey: "city" },
  { id: "wereda", header: "Wereda", accessorKey: "wereda" },
  { id: "kebele", header: "Kebele", accessorKey: "kebele" },
  { id: "telephone", header: "Telephone", accessorKey: "telephone" },
  { id: "responsibleBranch", header: "Responsible Branch", accessorKey: "responsibleBranch" },
  { id: "location", header: "Location", accessorKey: "location" },
  { id: "agentBusiness", header: "Agent Business", accessorKey: "agentBusiness" }
];

const sampleData: CbeBirrAgentData[] = [
  {
    id: "1",
    name: "5 KILLO TRADING PLC",
    region: "Addis Ababa",
    city: "AA",
    wereda: "GULELE",
    kebele: "9",
    telephone: "962404040",
    responsibleBranch: "Menbere Patriarich",
    location: "5killo",
    agentBusiness: "/usr/bin/node"
  },
  {
    id: "2",
    name: "A BETTER TOMORROW RESEARCH...",
    region: "Addis Ababa",
    city: "ADDIS ABABA",
    wereda: "09",
    kebele: "16",
    telephone: "940912889",
    responsibleBranch: "Adwa Park",
    location: "Kolfe mesalemya",
    agentBusiness: "-"
  },
  {
    id: "3",
    name: "A.H.D ELECTRI AND MATERIAL PLC",
    region: "Diredawa",
    city: "DD",
    wereda: "DD",
    kebele: "06",
    telephone: "930282746",
    responsibleBranch: "Gende Korrie",
    location: "CONEL GARAD BUILDIG",
    agentBusiness: "-"
  },
  {
    id: "4",
    name: "ABAS ADUS SHOP",
    region: "Oromia",
    city: "BOREDA",
    wereda: "GOROGUTU",
    kebele: "01",
    telephone: "251975088660",
    responsibleBranch: "Boreda",
    location: "AROUND BANK",
    agentBusiness: "-"
  },
  {
    id: "5",
    name: "ABAS MUZEMIL SEID",
    region: "Diredawa",
    city: "DD",
    wereda: "DD",
    kebele: "02",
    telephone: "251921160362",
    responsibleBranch: "Megalla",
    location: "SABIAN SEBATEGNA",
    agentBusiness: "-"
  },
  {
    id: "6",
    name: "ABATE RETA MERGIYAW",
    region: "Amhara",
    city: "WURGEESA",
    wereda: "HABRU",
    kebele: "1",
    telephone: "251913982914",
    responsibleBranch: "WURGESA BRANCH",
    location: "WURGESA K.01",
    agentBusiness: "-"
  },
  {
    id: "7",
    name: "ABATIHUN SUPER MARKET",
    region: "SNNP",
    city: "JINKA",
    wereda: "JINKA",
    kebele: "MEHAL ARADA",
    telephone: "912042337",
    responsibleBranch: "GeshMARKOS",
    location: "Jinka city-Mehal ketema kebele",
    agentBusiness: "-"
  },
  {
    id: "8",
    name: "ABAY KIDANIE EKORA",
    region: "Addis Ababa",
    city: "AA",
    wereda: "WEREDA 01",
    kebele: "GUNCHRE KE 02",
    telephone: "983066799",
    responsibleBranch: "Tefera Degife",
    location: "BOLE MICHAEL",
    agentBusiness: "-"
  },
  {
    id: "9",
    name: "ABAY MOBILE",
    region: "Addis Ababa",
    city: "AA",
    wereda: "06",
    kebele: "06",
    telephone: "2519202223464",
    responsibleBranch: "Gofa Gebriel",
    location: "A.A NSL w 6 house No 497/43...",
    agentBusiness: "-"
  },
  {
    id: "10",
    name: "ABAYNEH GEBEYEHU SIMEGN",
    region: "Amhara",
    city: "DEMBECHA",
    wereda: "DEMBECHA...",
    kebele: "02",
    telephone: "930651846",
    responsibleBranch: "DEJAZMACH GOSHU BRANCH",
    location: "DEMBECHA KEB 01",
    agentBusiness: "-"
  }
];

import { useState } from "react";

export default function CbeBirrAgents() {
  const [activeTab, setActiveTab] = useState('CBE Birr Agents');

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
        </div>

        <div className="rounded-lg shadow overflow-hidden">
          <div className="p-4">
            <h4 className="text-2xl font-semibold text-black mb-4">CBE Birr Agents</h4>
            <DataTable columns={columns} data={sampleData} />
            <button className="bg-white border px-2 py-1 text-purple-600">5</button>
            <button className="bg-white border px-2 py-1 text-purple-600">Next &gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}