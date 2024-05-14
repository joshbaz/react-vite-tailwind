import React from 'react'

import watchBg from "../../1-Assets/watchtimeImg.svg";

const FooterWatch = () => {
  return (
    <div className="w-full bg-[#141118] py-16 px-12 lg:px-[86px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 md:gap-10 md:items-center lg:gap-16 lg:max-w-[1000px] lg:items-center xl:gap-28">
        <img
          className="object-contain md:object-cover mx-auto w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px]  md:h-auto lg:w-[500px] my-4 rounded-lg"
          src={watchBg}
          alt={"apps"}
        />

        <div className=" flex flex-col justify-center  mx-auto my-4 text-center md:text-left">
          <h1 className="text-whites-40 text-3xl font-bold leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight  2xl:text-7xl 2xl:leading-tight tracking-wider">
            Watch Anytime.
            <span className="ps-2 md:px-0 md:block ">Anywhere.</span>
          </h1>
          <p className="text-[#FFFAF6] font-[Inter-Regular] mx-auto mt-4 max-w-3xl sm:px-0 md:px-0 lg:px-0 font-medium sm:text-xl/relaxed  lg:text-[20px] tracking-tight">
            Our site is the home of Local ‘Authentic’ stories that amplify
            Ugandan Culture. You can watch full episodes, Send Donations to fund
            future seasons of shows You love.
          </p>

          {/**
                 <div className="mx-auto md:w-full">
            <Box
              className={`text-[#FFFAF6] mx-auto font-[Inter-SemiBold]  text-left mt-4 max-w-3xl sm:px-0 md:px-0 md:w-full lg:px-0  sm:text-xl/relaxed  lg:text-2xl `}
            >
              Download the App below for free.
            </Box>
            
            <Box className="flex gap-x-[20px] mt-[20px]">
              <button className="flex gap-[6px] items-center h-[52px] justify-center px-[12px] rounded-md border">
                <Box className="my-0 mx-0">
                  <span className="icon-[ion--logo-apple]"></span>
                </Box>

                <Box className="leading-tight ">
                  <p
                    className={
                      "text-[#F2F2F2] font-[Inter-Regular] text-[12px]"
                    }
                  >
                    Download on the
                  </p>
                  <h1 className="text-[#F2F2F2] text-[20px] font-[Inter-Medium]">
                    App Store
                  </h1>
                </Box>
              </button>
              <button className="flex gap-[6px] items-center h-[52px] justify-center px-[12px] rounded-md border">
                <Box>
                  <span className="icon-[ion--logo-google-playstore]"></span>
                </Box>
                <Box className="leading-tight text-left ">
                  <p
                    className={
                      "text-[#F2F2F2] font-[Inter-Regular] text-[12px]"
                    }
                  >
                    GET IT ON
                  </p>
                  <h1 className="text-[#F2F2F2] text-[20px] font-sans font-medium">
                    Google Play
                  </h1>
                </Box>
              </button>
            </Box>
          </div>
                */}
        </div>
      </div>
    </div>
  );
}

export default FooterWatch