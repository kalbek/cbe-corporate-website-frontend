import React from "react";

export default function Footer() {
  return (
    <footer className="h-[59.44vh] sm:h-[70vh] lg:h-[59.44vh] relative">
      <div className="brr   overflow-hidden  h-[59.44vh] sm:h-[70vh] lg:h-[59.44vh] relative">
        {/* decorative left circle container - the background */}
        <div className="h-full w-[117.5%] brr-blue right-[12.92%] absolute  z-0">
          <div className="absolute left-0 top-0 w-full h-[117.5vw] rounded-full bg-purple-800"></div>
        </div>
        {/* decorative right circle container - the background */}
        <div className="h-full w-[117.5%]  brr-blue absolute left-[13.47%] top-12 z-0">
          <div className="left-0 top-0 w-full  h-[117.5vw] rounded-full bg-purple-800"></div>
        </div>
        {/* decorative left mask */}
        <div className="absolute w-[18.48%] aspect-square left-0 brr-white -bottom-4 -translate-x-[70%]">
          <img
            src="/icon-and-logos/logos-svg/mask-light-bg.svg"
            alt="Decorative mask"
            className="h-full object-fill brr"
          />
        </div>
        {/* footer content */}
        <div className="absolute h-[69.78%] brr bottom-[10%]  w-full z-10">
          {/* footer content container */}
          <div className="mx-[6.94%] h-full brr-white flex flex-col relative">
            {/* footer links container */}
            <div className="absolute h-[48%] top-0 flex justify-between w-full brr-blue"></div>
            {/* footer social container */}
            <div className="absolute flex justify-between w-full brr-blue h-[25%] bottom-[9%]">
              <div className="relative w-full h-full">
                {/* footer social links */}
                <div className="absolute h-[24%] brr-white">
                  <div className="flex-cent-vh gap-3.5">
                    <p className="text-white "> Follow Us</p>
                    <div className="flex-cent-vh w-fit flex justify-between gap-5">
                      {/* telegram icon */}
                      <a
                        href="https://telegram.com"
                        target="_blank"
                        className="focus:outline-none"
                      >
                        <img
                          src="/icon-and-logos/social-icons/telegram-icon.svg"
                          alt="telegram-icon"
                        />
                      </a>
                      {/* facebook-link */}
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        className="focus:outline-none"
                      >
                        <img
                          src="/icon-and-logos/social-icons/facebook-icon.svg"
                          alt="facebook-icon"
                        />
                      </a>
                      {/* twitter-link */}
                      <a
                        href="https://x.com"
                        target="_blank"
                        className="focus:outline-none"
                      >
                        <img
                          src="/icon-and-logos/social-icons/x-icon.svg"
                          alt="twitter-icon"
                        />
                      </a>
                      {/* instagram-link */}
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        className="focus:outline-none"
                      >
                        <img
                          src="/icon-and-logos/social-icons/instagram-icon.svg"
                          alt="instagram-icon"
                        />
                      </a>
                      {/* youtube-link */}
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        className="focus:outline-none"
                      >
                        <img
                          src="/icon-and-logos/social-icons/youtube-icon.svg"
                          alt="youtube-icon"
                        />
                      </a>
                      {/* linkedin-link */}
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        className="focus:outline-none"
                      >
                        <img
                          src="/icon-and-logos/social-icons/linkedin-icon.svg"
                          alt="linkedin-icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/* footer support content */}
                <div className="absolute h-[42.34%] w-full brr-white bottom-0 ">
                  <div className="flex justify-between items-baseline w-full h-full ">
                    {/* footer support info */}
                    <div className="relative w-fit h-full flex-cent-vh rounded-[50px] border-[1.5px] border-white ">
                      <div className=" flex-cent-vhb h-full w-full gap-5 brr-white px-8">
                        <div className="flex-cent-vh gap-2">
                          <img
                            src="/icon-and-logos/icons-svg/phone-icon.svg"
                            alt="phone-icon"
                          />
                          <p className="text-white "> Support:</p>
                        </div>
                        <p className="text-white "> +251951</p>
                      </div>
                    </div>
                    {/* app store links */}
                    <div className="mr-[1%] flex gap-4 w-fit">
                      {/* app store */}
                      <img
                        src="/icon-and-logos/logos-svg/appstore.svg"
                        alt="phone-icon"
                      />
                      {/* google play */}
                      <img
                        src="/icon-and-logos/logos-svg/googleplay-icon.svg"
                        alt="phone-icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <div className="absolute w-full h-[10%] bottom-0 flex-cent-vh brr-white z-10"></div>
        {/* right footer decorative */}
        <div className="absolute w-[70.34%] aspect-square top-["></div>
      </div>
      {/* decorative right mask */}
      <div className="absolute h-[70.345%] aspect-square brr-blue right-0 translate-x-[70%] -top-[11%]">
        <img
          src="/icon-and-logos/logos-svg/mask-light-bg.svg"
          alt="Decorative mask"
          className="h-full object-fill"
        />
      </div>
    </footer>
  );
}
