import React from 'react'
import CustomStack from '../../2-Components/Stacks/CustomStack';
import { Box } from '@mui/material';
import { FAQDATA } from '../../1-Assets/data/FaqData';
import FaqQuestions from '../../2-Components/FAQ/FaqQuestions.jsx';

const FAQ = () => {
  return (
    <Box className="w-full  bg-[#141118] py-16 px-12 lg:px-[86px] overflow-hidden">
      <CustomStack className="flex-col space-y-[40px] mx-auto w-full md:max-w-prose lg:max-w-[1000px] 2xl:max-w-[1240px]">
        <h1 className="text-3xl text-center font-[Inter-Bold] text-[#F2F2F2] leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight  2xl:text-7xl 2xl:leading-tight tracking-wide">
          Frequently Asked Questions
        </h1>

        <Box className="w-full mx-auto">
          {
            FAQDATA.map((data, index) => {
              return <FaqQuestions key={index} item={data} indexsent={index} />;
            })
          }
        
        </Box>
      </CustomStack>
    </Box>
  );
}

export default FAQ