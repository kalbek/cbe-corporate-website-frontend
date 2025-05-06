"use client";

import React, { useState, useEffect } from "react";

export default function Subnav() {
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const socialDropdown = document.querySelector('.social-dropdown');
      const languageDropdown = document.querySelector('.language-dropdown');
      const socialTrigger = document.querySelector('.social-trigger');
      const languageTrigger = document.querySelector('.language-trigger');
      
      // Check if the click is outside both the dropdown and its trigger
      if (socialDropdown && !socialDropdown.contains(event.target as Node) && 
          (socialTrigger && !socialTrigger.contains(event.target as Node))) {
        setIsSocialOpen(false);
      }
      
      if (languageDropdown && !languageDropdown.contains(event.target as Node) && 
          (languageTrigger && !languageTrigger.contains(event.target as Node))) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-8xl w-full px-4 sm:px-6 lg:px-16">
      <div className="bg-[#892890] text-white py-1 px-8 md:px-12 lg:px-24">
        <div className="flex justify-between items-center text-xs">
          {/* Left Side */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <a href="#" className="hover:text-gray-200 transition-colors text-gray-200">
                About CBE Group
              </a>
              <div className="absolute left-0 mt-2 w-[500px] bg-white rounded-md shadow-lg py-2 hidden group-hover:block">
                <div className="grid grid-cols-2 gap-4 p-4">
                  {/* Left Column */}
                  <div>
                    <a href="#" className="block text-black hover:text-[#892890] transition-colors border-b-2 border-[#edb75e] pb-2">
                      About CBE
                    </a>
                    <a href="#" className="block text-black hover:text-[#892890] transition-colors border-b-2 border-[#edb75e] pb-2">
                      Board of Directors
                    </a>
                    <a href="#" className="block text-black hover:text-[#892890] transition-colors border-b-2 border-[#edb75e] pb-2">
                      Executive Management
                    </a>
                  </div>
                  {/* Right Column */}
                  <div>
                    <a href="#" className="block text-black hover:text-[#892890] transition-colors border-b-2 border-[#edb75e] pb-2">
                      Organizational Structure
                    </a>
                    <a href="#" className="block text-black hover:text-[#892890] transition-colors border-b-2 border-[#edb75e] pb-2">
                      CSR
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <span className="text-white">|</span>
            <a href="#" className="hover:text-gray-200 transition-colors text-gray-200">
              Careers
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Call Center */}
            <div className="flex items-center gap-2 hover:text-gray-200 transition-colors text-gray-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Call Center: +251951</span>
            </div>

            {/* ATM & Branches */}
            <div className="flex items-center gap-2 hover:text-gray-200 transition-colors text-gray-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>ATM & Branches</span>
            </div>

            {/* Subsidiary Branch */}
            <div className="flex items-center gap-2 hover:text-gray-200 transition-colors text-gray-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Subsidiary Branch</span>
            </div>

            {/* Social Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors text-gray-200"
                onClick={() => {
                  const dropdown = document.querySelector('.social-dropdown');
                  dropdown?.classList.toggle('hidden');
                }}
              >
                <span>Social</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ${isSocialOpen ? '' : 'hidden'} social-dropdown`}>
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12z" />
                  </svg>
                  Telegram
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.503 1.499-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                  Facebook
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.253-.149-4.771-1.699-4.92-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.92-4.919 1.266-.057 1.645-.069 4.849-.069 3.205 0 3.584.013 4.85.07zM12 0C8.741 0 8.333.014 7.053.072 2.947.272.273 2.945.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.104 2.865 6.779 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.104-.2 6.779-2.865 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.104-2.836-6.78-6.98-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 19c-3.869 0-7-3.131-7-7s3.131-7 7-7 7 3.131 7 7-3.131 7-7 7z"/>
                  </svg>
                  Instagram
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"/>
                  </svg>
                  YouTube
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.033-.923-4.319l-1.735-1.735c-1.846-1.846-4.474-2.867-6.764-2.867-2.575 0-4.998 1.041-6.764 2.867L4.457 5.63c-.9-1.286-.923-2.99-0.923-4.319V2.547h-3.554v23.905H20.447z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 6.757A10.946 10.946 0 0112 0C5.387 0 0 5.387 0 12c0 5.94 4.713 10.744 10.937 11.64.8.075 1.638-.337 1.954-1.118l1.264-5.324a2.003 2.003 0 00-.025-1.002L2.985 17.49 2.985 8.965c0-2.154 1.164-3.97 2.94-4.934.16-.092.24-.196.24-.303v-.058a6.185 6.185 0 0115.943 0v.058a4.11 4.11 0 00-.24.303 4.965 4.965 0 002.94 4.934v6.528a2.003 2.003 0 001.979 1.829z"/>
                  </svg>
                  X (Twitter)
                </a>
              </div>
            </div>

            {/* Language Selector */}
            <div className="relative group">
              <button
                className="flex items-center gap-2 cursor-pointer hover:text-gray-200 transition-colors text-gray-200"
                onClick={() => {
                  const dropdown = document.querySelector('.language-dropdown');
                  dropdown?.classList.toggle('hidden');
                }}
              >
                <span>EN</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className={`absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 ${isLanguageOpen ? '' : 'hidden'} language-dropdown`}>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">English</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Amharic</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
}
