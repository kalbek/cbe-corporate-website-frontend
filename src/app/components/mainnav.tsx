"use client";

import React from "react";
import type { ReactNode } from "react";

const MainNav = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-24">
        <nav className="flex items-center justify-between h-16">
          {/* Empty space */}
          <div className="hidden md:flex items-center w-1/4"></div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-[#5d1365] relative transition-colors">
              Products
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#5d1365] transform translate-y-4 opacity-100 hover:opacity-0 transition-opacity"></span>
            </a>
            <a href="#" className="text-gray-900 hover:text-[#5d1365] relative transition-colors">
              Services
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#5d1365] transform translate-y-4 opacity-100 hover:opacity-0 transition-opacity"></span>
            </a>
            <a href="#" className="text-gray-900 hover:text-[#5d1365] relative transition-colors">
              Ways of Banking
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#5d1365] transform translate-y-4 opacity-100 hover:opacity-0 transition-opacity"></span>
            </a>
            <a href="#" className="text-gray-900 hover:text-[#5d1365] relative transition-colors">
              Resources
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#5d1365] transform translate-y-4 opacity-100 hover:opacity-0 transition-opacity"></span>
            </a>
            <a href="#" className="text-gray-900 hover:text-[#5d1365] relative transition-colors">
              CBE Noor
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#5d1365] transform translate-y-4 opacity-100 hover:opacity-0 transition-opacity"></span>
            </a>
            <div className="flex items-center">
              <a
                href="#"
                className="bg-[#f59c00] text-white px-4 py-2 rounded-sm font-medium hover:bg-[#e58c00] transition-colors"
              >
                INTERNET BANKING
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainNav;
