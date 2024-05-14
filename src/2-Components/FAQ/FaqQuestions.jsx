import { Box, Typography } from "@mui/material";
import React from "react";
import FaqAnswers from "./FaqAnswers";

const FaqQuestions = ({ item, indexsent }) => {
  const [dropDown, setDropDown] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(null);
  let ref = React.useRef();

  React.useEffect(() => {
    const handler = (event) => {
      if (dropDown && ref.current && !ref.current.contains(event.target)) {
        setTimeout(() => {
          setDropDown(false);
        }, 2000);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropDown]);

  // const onMouseLeave = () => {
  //   window.innerWidth > 960 && setDropDown(false);
  // };

  const onMouseClick = (event, isent) => {
    if (dropDown && ref.current && !ref.current.contains(event.target)) {
      setDropDown(false);
    } else {
      setDropDown(!dropDown);
      if (isent !== undefined) setActiveIndex(() => isent + 1);
    }
  };
  return (
    <Box
      ref={ref}
      onClick={(e) => onMouseClick(e, indexsent)}
      className={`bg-[#221e27] transition ease-in-out delay-2000 ${
        activeIndex !== null && activeIndex === indexsent + 1 && dropDown
          ? "bg-secondary-600 "
          : "bg-[#221e27]"
      }`}
    >
      <Box
        className={`qn base:px-[20px] w-[90%] sm:w-4/5 md:w-4/5 mx-auto flex min-h-[57px] items-center justify-between text-[#F2F2F2] hover:text-primary-700 ${
          activeIndex !== null && activeIndex === indexsent + 1 && dropDown
            ? "text-primary-600 "
            : "text-[#F2F2F2]"
        }`}
      >
        <Typography className="font-[Sans-Medium] text-base text-ellipsis sm:text-base md:text-lg">
          {item.qn}
        </Typography>
        <Box>
          <span className="icon-[solar--add-square-broken] h-7 w-7"></span>
        </Box>
      </Box>
      <FaqAnswers itemanswer={item.answer} dropdown={dropDown} />
    </Box>
  );
};

export default FaqQuestions;
