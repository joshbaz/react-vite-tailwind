import React from "react";
import styled from "styled-components";
import CustomStack from "../../2-Components/Stacks/CustomStack";
import HeroCarousel from "../../2-Components/Carousels/HeroCarousel";
const FilmsHero = () => {
  return (
    <HeroContent className="flex justify-center items-center h-[65vh]  sm:h-[60vh] md:h-[80vh]">
      <CustomStack className="text-center items-center w-full gap-[0px]">
        <HeroCarousel />
      </CustomStack>
    </HeroContent>
  );
};

export default FilmsHero;

const HeroContent = styled.section`

  display: flex;

  background: rgba(20, 17, 24, 1);

  overflow: hidden;
  position: relative;

  
`;
