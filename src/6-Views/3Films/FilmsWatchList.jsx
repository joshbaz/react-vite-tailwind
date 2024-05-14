import React from 'react'
import styled from 'styled-components';
import MovieCarousel from '../../2-Components/Carousels/MovieCarousel';
import { Box, Stack } from '@chakra-ui/react';
const FilmsWatchList = () => {
  return (
    <Container className="w-full bg-[#141118] py-16  overflow-hidden">
      <Box className="w-full mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16  xl:gap-24 items-start">
        <Stack spacing={"20px"} className="pl-16 flex-col">
          <h1
            className="text-[#FFFAF6] font-[Inter-SemiBold] opacity-[100%] text-[22px] text-left"
            
          >
            Start Watching
          </h1>

          <Stack
            className="flex w-full  gap-0 items-center justify-center mx-auto"
          >
            <MovieCarousel />
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}

export default FilmsWatchList

const Container = styled.section`
  min-height: 44vh;

  background-size: cover;
`;