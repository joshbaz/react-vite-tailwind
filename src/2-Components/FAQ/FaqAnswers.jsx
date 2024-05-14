import { Box, Typography } from '@mui/material'
import React from 'react'

const FaqAnswers = ({itemanswer, dropdown}) => {
  return (
    <Box
      className={`base:px-[20px] w-4/5 mx-auto transition ease-in-out delay-2000 transform motion-reduce:transition-none pb-7 pt-2  ${
        dropdown ? "flex motion-reduce:flex" : "hidden motion-reduce:hidden"
      }`}
    >
      <Typography className="text-whites-40 font-[Sans-Medium] text-base  sm:text-sm lg:text-lg">{itemanswer}</Typography>
    </Box>
  );
}

export default FaqAnswers