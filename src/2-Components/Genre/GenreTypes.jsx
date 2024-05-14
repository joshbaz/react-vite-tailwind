import { Stack } from "@chakra-ui/react";
import React from "react";
import MovieCarousel from "../Carousels/MovieCarousel";

const GenreTypes = ({ genreData }) => {
  return (
    <Stack
      direction="column"
      spacing="20px"
      className="flex w-full  gap-0 items-start justify-center mx-auto"
    >
      <h1 className="text-[#FFFAF6] opacity-[100%] font-[Inter-SemiBold] text-lg text-left capitalize">
        {genreData.title}
      </h1>
      <div className="mt-4">
        <MovieCarousel />
      </div>
    </Stack>
  );
};

export default GenreTypes;
