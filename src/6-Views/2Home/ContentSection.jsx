import React from 'react'
import postersImg from '../../1-Assets/posters.svg'
import { Typography } from '@mui/material';

const ContentSection = () => {
  return (
    <div className="w-full bg-secondary-800 py-16 px-12 overflow-hidden">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 md:gap-10 lg:gap-16 lg:max-w-[1000px] xl:gap-28">
       
          <img
            className="object-cover mx-auto w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px]  md:h-auto lg:w-[500px] my-4"
            src={postersImg}
            alt={""}
          />
       

        <div className="w-[100%] sm:w-[60%] md:w-full text-white flex flex-col  justify-center mx-auto my-4 text-center md:text-left">
          <Typography className=" text-3xl font-[Inter-Bold] text-whites-40 leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight 2xl:text-5xl 2xl:leading-tight tracking-wide">
            Contribute to
            <span className="ps-2 md:px-0 md:block">Content Creation</span>
          </Typography>

          <Typography className="text-[#FFFAF6] mx-auto mt-4 max-w-3xl sm:px-0 md:px-0 lg:px-0 font-[Inter-Medium] sm:text-sm/relaxed  lg:text-xl tracking-tight">
            support stories that are authentically Ugandan and built a community
            of pioneers
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default ContentSection