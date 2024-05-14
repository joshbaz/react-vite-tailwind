import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import HeroBg from "../../1-Assets/Hero2.svg";
import Buttons from "../../2-Components/Buttons/Buttons";
const Hero = () => {
  let navigate = useNavigate();
  return (
    <HeroContent className="relative bg-origin-border bg-left-top flex-col">
      <Box className="mx-auto h-screen px-4 py-32 flex items-center">
        <Box className="mx-auto max-w-3xl text-center md:max-w-full lg:max-w-full">
          <Typography className="font-[Inter-Bold] text-3xl leading-tight text-[#FFFFFE] md:text-5xl xl:text-6xl 2xl:text-7xl">
            Creating Authentic <span className="block">African Stories</span>{" "}
          </Typography>

          <Typography className="mx-auto mt-4 font-[Inter-Medium] text-xs md:text-base  text-[#FFFFFE] lg:text-xl/relaxed">
            Stream Originals like Fate, FairPlay and many more.
          </Typography>

          <Box className="mt-8 flex flex-wrap justify-center gap-5">
            <Buttons className="block w-full rounded-full border border-[#EE5170] bg-[#EE5170] sm:px-10 md:px-12 py-3 hover:bg-transparent hover:text-whites-40 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto lg:px-16">
              <Typography className="font-[Roboto-Medium] text-whites-40 text-xs md:text-sm lg:text-base">
                Sign Up for Free
              </Typography>
            </Buttons>
            <Buttons className="block w-full rounded-full border border-[#FFFFFE] bg-transparent sm:px-10 md:px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto lg:px-16 custombtn">
              <Typography className="font-[Roboto-Medium] text-whites-40 text-xs md:text-sm lg:text-base">
                Watch Now
              </Typography>
            </Buttons>
          </Box>
        </Box>
      </Box>

      <Buttons
        variant="ghost"
        className="text-whites-40 absolute left-0 right-0 w-[121px] mx-auto bottom-1 space-y-1"
      >
        <Typography className="font-[Inter-Regular] text-sm lg:text-base">
          learn more
        </Typography>
        <span className="icon-[solar--round-alt-arrow-down-broken] w-5 h-5"></span>
      </Buttons>
    </HeroContent>
  );
};

export default Hero;

const HeroContent = styled(Box)`
  height: 100vh;
  display: flex;

  background: linear-gradient(
      180deg,
      rgba(22, 21, 22, 0.513),
      rgba(9, 7, 11, 0.987)
    ),
    url(${HeroBg}) top/cover no-repeat;
  background: linear-gradient(
      to top,
      rgba(20, 17, 24, 1),
      rgba(20, 17, 24, 0.729)
    ),
    url(${HeroBg}) top/cover no-repeat;

  .custombtn {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    background: transparent;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    transition: all 0.3s ease;

    &:focus {
      outline: none;
    }
    &:hover {
      background: transparent;
      backdrop-filter: blur(0px);
      -webkit-backdrop-filter: blur(0px);
    }
  }
`;
