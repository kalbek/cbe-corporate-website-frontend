export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full">
        {/* hero section*/}
        <div className="w-full aspect-[1440/519]">
          <img
            src="/images/hero-home-img.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        {/* services section*/}
        <div className="brr h-48 flex-cent-vh">services section</div>
        {/* digital banking section */}
        <div className="brr h-96 flex-cent-vh">Digital Banking section</div>
        {/* statistics and social responsibilities section */}
        <div className="brr flex-cent-vh h-[89.33vh] sm:h-[80vh] lg:h-[74.44vh]">
          statistics and social responsibilities section
        </div>
        {/* news section  */}
        <div className="flex-cent-vh h-[101.44vh] sm:h-[130vh] lg brr">
          news section
        </div>
      </div>
    </>
  );
}
