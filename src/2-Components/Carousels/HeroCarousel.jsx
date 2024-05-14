import React from 'react'
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./HCarousel.css";
import { DotButton, useDotButton } from "./HCarouselDotButton";
import slideImage from '../../1-Assets/slide1.svg'
import { Box } from '@mui/material';

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const ImageSlides = [
  {
    image: slideImage,
  },
  {
    image: slideImage,
  },
  {
    image: slideImage,
  },
  {
    image: slideImage,
  },
];
const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  
   const tweenFactor = React.useRef(0);
  const tweenNodes = React.useRef([]);
  

   const { selectedIndex, scrollSnaps, onDotButtonClick } =
     useDotButton(emblaApi);

   const setTweenFactor = React.useCallback((emblaApi) => {
     tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
   }, []);

   const tweenOpacity = React.useCallback((emblaApi, eventName) => {
     const engine = emblaApi.internalEngine();
     const scrollProgress = emblaApi.scrollProgress();
     const slidesInView = emblaApi.slidesInView();
     const isScrollEvent = eventName === "scroll";

     emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
       let diffToTarget = scrollSnap - scrollProgress;
       const slidesInSnap = engine.slideRegistry[snapIndex];

       slidesInSnap.forEach((slideIndex) => {
         if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

         if (engine.options.loop) {
           engine.slideLooper.loopPoints.forEach((loopItem) => {
             const target = loopItem.target();

             if (slideIndex === loopItem.index && target !== 0) {
               const sign = Math.sign(target);

               if (sign === -1) {
                 diffToTarget = scrollSnap - (1 + scrollProgress);
               }
               if (sign === 1) {
                 diffToTarget = scrollSnap + (1 - scrollProgress);
               }
             }
           });
         }

         const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
         const opacity = numberWithinRange(tweenValue, 0, 1).toString();
         emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
       });
     });
   }, []);

   React.useEffect(() => {
     if (!emblaApi) return;

     setTweenFactor(emblaApi);
     tweenOpacity(emblaApi);
     emblaApi
       .on("reInit", setTweenFactor)
       .on("reInit", tweenOpacity)
       .on("scroll", tweenOpacity);

     return () => {};
   }, [emblaApi, tweenOpacity]);
  return (
    <Box className="embla">
      <Box className="embla__viewport" ref={emblaRef}>
        <Box className="embla__container">
          {ImageSlides.map((data, index) => {
            return (
              <Box className="embla__slide " key={index}>
                <img
                  className="embla__slide__img object-cover h-[250px] shrink-0 object-right lg:object-cover md:size-fit"
                  src={data.image}
                  alt=""
                />
              </Box>
            );
          })}
        </Box>

        <div className="embla__controls">
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default HeroCarousel