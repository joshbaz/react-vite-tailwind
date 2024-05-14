import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import GenreTypes from "../../2-Components/Genre/GenreTypes";
import styled from 'styled-components';

const genrelists = [
  {
    title: "series",
  },
  {
    title: "movies",
  },
  {
    title: "comedy",
  },
];

const FilmsGenre = () => {
  return (
    <Container className="w-full bg-[#141118] py-16  overflow-hidden">
      <Box className="w-full mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16  xl:gap-24 items-start">
        <Stack spacing={"40px"} className="pl-16">
          <Box className="flex flex-col space-y-4">
           
            <h1 className="text-[#FFFAF6] opacity-[100%] text-4xl text-left font-[Inter-SemiBold] capitalize">
              Genre
            </h1>
            <Stack direction="column" spacing={"30px"}>
              {genrelists.map((data, index) => {
                return <GenreTypes key={index} genreData={data} />;
              })}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default FilmsGenre;

const Container = styled.section`
  min-height: 44vh;

  background-size: cover;
`;
