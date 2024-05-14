import React from 'react'
import useEmblaCarousel from "embla-carousel-react";
import "./MovieSlide.css";
import { Box, Stack } from '@chakra-ui/react';

import FilmJson from '../../1-Assets/data/films_metadata.json'
import MovieCard from '../Cards/MovieCard';

const MovieCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
  const [allMovies, setAllMovies] = React.useState([])
  

  React.useEffect(() => {
    setAllMovies(()=> FilmJson)
  }, [])
  

  
  return (
    <Box className="emblaA">
      <Box className="embla__viewportA" ref={emblaRef}>
        <Box className="embla__containerA gap-7">
          {allMovies.map((data, index) => {
            return (
              <Box
               
                key={index}
                className="embla__slideA h-full w-full"
              >
                <Box className="embla__slide__movie">
                  <MovieCard data={data} />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default MovieCarousel

