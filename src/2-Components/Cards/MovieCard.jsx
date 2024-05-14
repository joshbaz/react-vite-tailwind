import React from 'react'
import posterImage from "../../1-Assets/images/Movie poster/Movie poster.svg";
import styled from 'styled-components';
import { Typography } from '@mui/material';
import { Box, Stack } from '@chakra-ui/react';
import Buttons from '../Buttons/Buttons';

const MovieCard = ({ data }) => {
     const [playActions, setPlayActions] = React.useState(false);
    let ref = React.useRef();
    
      React.useEffect(() => {
        const handler = (event) => {
          if (
            playActions &&
            ref.current &&
            !ref.current.contains(event.target)
          ) {
            setPlayActions(false);
          }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);

        return () => {
          document.removeEventListener("mousedown", handler);
          document.removeEventListener("touchstart", handler);
        };
      }, [playActions]);

      const onMouseEnter = () => {
        window.innerWidth > 960 && setPlayActions(true);
      };

      const onMouseLeave = () => {
        window.innerWidth > 960 && setPlayActions(false);
      };
  return (
    <MovieContainer
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="min-h-[250px] h-max w-[292px] md:min-h-[510px] md:w-[300px] flex flex-col items-start gap-3 pixelated"
    >
      <img
        src={posterImage}
        alt={"movie"}
        className="object-cover h-[389px] "
      />

      {data.Model === "Free to watch" && (
        <Typography className="text-[#F8FAEC]  text-center select-none relative font-[Inter-Medium] text-base/relaxed">
          {data.Model}
        </Typography>
      )}
      {data.Model == "Avaliable to rent or buy" && (
        <div className="flex text-[#F8FAEC] text-[20px] text-center select-none relative font-[Inter-SemiBold] gap-3">
          <span className="icon-[solar--bag-heart-outline] h-6 w-6 text-primary-500"></span>

          <Typography className="font-[Inter-Medium] text-base">
            Free trial, rent or buy
          </Typography>
        </div>
      )}

      <Stack
        direction="row"
        className={`w-full  justify-between p-2 ${
          playActions ? "flex" : "hidden"
        }`}
      >
        <Box>
          <Typography className="font-[Inter-SemiBold] text-base text-whites-40">
            {data.Title}
          </Typography>
          <Stack direction="row">
            <Typography className="font-[Inter-Medium] text-base text-whites-40">
              {data.Year}
            </Typography>
            <Typography className="font-[Inter-Medium] text-base text-whites-40">
              {data.Runtime}
            </Typography>
          </Stack>
        </Box>
        <div>
          <Buttons
            variant={"icon"}
            className="flex rounded-full relative bg-primary-400"
          >
            <span className="icon-[solar--play-circle-linear] h-6 w-6 text-whites-40"></span>
          </Buttons>
        </div>
      </Stack>
    </MovieContainer>
  );
}

export default MovieCard

const MovieContainer = styled(Box)`
  &&.pixelated > img {
    image-rendering: pixelated !important;
  }
`;