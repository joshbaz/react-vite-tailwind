import React from 'react'
import styled from 'styled-components';

import TicketImag from '../../1-Assets/TK.svg'
import { Box, Stack } from '@chakra-ui/react';

const Advert = () => {
  return (
    <Container className="w-full bg-[#141118] py-16  overflow-hidden">
      <Box className="w-full mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16  xl:gap-24 items-start">
        <Stack
          direction="row"
          className="flex px-[2%] flex-wrap gap-0 items-center justify-center mx-auto"
        >
          <Box className="ticketPoster">
            <img src={TicketImag} alt={""} />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

export default Advert

const Container = styled.section`
  min-height: 44vh;

  background-size: cover;

  .ticketPoster {
    height: 330px;
  }

  img {
    height: 100%;
    width: 100%;
    image-rendering: high-quality;
    object-fit: fill;
  }
`;
