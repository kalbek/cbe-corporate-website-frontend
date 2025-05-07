import Subnav from './components/subnav';
import MainNav from './components/mainnav';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full">
        {/* sub navigation */}
        <Subnav />
        {/* primary navigation */}
        <MainNav />
        {/* hero section*/}
        <div className="brr h-[50vh] flex-cent-vh">hero section</div>
        {/* services section*/}
        <div className="brr h-48 flex-cent-vh">services section</div>
        {/* digital banking section */}
        <div className="brr h-96 flex-cent-vh">Digital Banking section</div>
        {/* statistics and social responsibilities section */}
        <div className="brr flex-cent-vh h-[89.33vh] sm:h-[80vh] lg:h-[74.44vh]">
          statistics and social responsibilities section
        </div>
        {/* news section  */}
        <div className="flex-cent-vh h-[114.44vh] sm:h-[130vh] lg brr">
          news section
        </div>
      </div>
    </>
  );
}
