import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomStack from "../Stacks/CustomStack";
import {
  Typography,
} from "@mui/material";
import { MENUDATA } from "../../1-Assets/data/MenuData";
import Logo from "../../1-Assets/logos/Logo.svg";
import MenuItems from "./MenuItems";
import Buttons from "../Buttons/Buttons.tsx";
import MobileItems from "./MobileItems.jsx";
const WebNavigation = () => {
  const [nav, setNav] = React.useState(false);
  const [navSolid, setNavSolid] = React.useState(false);

  let routeNavigate = useNavigate();
  const handleNav = () => {
    setNav(!nav);
  };

  const handlePopupToggle = (e) => {
    e.preventDefault();
  };
  const navSolidChange = () => {
    if (window.scrollY >= 120) {
      if (!navSolid) setNavSolid(true);
    } else {
      setNavSolid(false);
    }
  };

  window.addEventListener("scroll", navSolidChange);
  return (
    <NavContainer className="absolute items-center h-[85px] w-full mx-auto px-5 lg:px-14 z-10">
      <CustomStack className="w-full h-full justify-between items-center max-w-[1280px] mx-auto overflow-hidden">
        {/** menu logo & items */}
        <CustomStack className="bg-transparent space-x-20 items-center">
          <div
            className="mx-0 mt-0 select-none cursor-pointer lg:w-24 lg:h-24"
            onClick={() => routeNavigate("/", { replace: true })}
          >
            <img src={Logo} alt="" className="w-full h-full" />
          </div>

          <ul className="hidden lg:flex w-full space-x-5 h-[60%]">
            {MENUDATA.map((data, index) => {
              return <MenuItems key={index} item={data} />;
            })}
          </ul>
        </CustomStack>
        {/** menu action button */}
        <div className="hidden lg:flex">
          <ActionButton
            as={"button"}
            className="font-[Roboto-Medium] text-lg text-whites-40"
          >
            <span>Sign In</span>
          </ActionButton>
        </div>
        {/** Mobile hanburger */}

        <Buttons
          variant="ghost"
          className="text-secondary-50 flex lg:hidden rounded-full px-0 py-0 m-0"
          onClick={handleNav}
        >
          {nav ? (
            <span className="icon-[ion--close] text-5xl"></span>
          ) : (
            <span className="icon-[solar--hamburger-menu-broken] text-5xl"></span>
          )}
        </Buttons>

        {/** Mobile Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 overflow-hidden flex flex-col justify-around bg-[#141118]  ease-in-out duration-500 lg:hidden"
              : "fixed left-[-100%] top-0 w-[80%] h-full border-r border-r-gray-900 overflow-hidden flex flex-col justify-around bg-[#141118]  ease-linear duration-500 lg:hidden"
          }
        >
          <div className="flex flex-col items-center justify-start h-screen space-y-2 pb-4 overflow-hidden">
            <div className="h-10"></div>
            <ul className="w-[80%] flex flex-col items-center justify-around align-middle h-[80%]">
              {MENUDATA.map((data, index) => {
                return <MobileItems key={index} item={data} />;
              })}
            </ul>
            <div className="h-max w-[80%] flex items-center justify-center  mb-[0%] select-none">
              <div className="flex flex-col w-full items-center space-y-3">
                <Buttons className="rounded-full w-full max-w-[300px] py-3 ">
                  <Typography className="font-[Sans-Bold] text-md">
                    Contact us
                  </Typography>
                </Buttons>
                <MobileButton
                  as={"button"}
                  className="rounded-full w-full max-w-[300px] py-4 font-[Sans-Bold] text-md"
                >
                  <span>Sign In</span>
                </MobileButton>
              </div>
            </div>
          </div>
        </div>
      </CustomStack>
    </NavContainer>
  );
};

export default WebNavigation;

const NavContainer = styled(CustomStack)``;

const ActionButton = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  display: inline-block;
  position: relative;
  overflow: hidden;

  border-radius: 100px;
  border: 1px solid #fffffe;
  height: 40px;
  width: 140px;
  cursor: pointer;
  background: transparent;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }

  span {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    transform: translateY(-50%);
    z-index: 9;
  }

  &:hover {
    background: transparent;
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
  }
`;

const MobileButton = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;

  border-radius: 100px;
  border: 1px solid #fffffe;
  height: 40px;
 

  color: #ffffff;
  cursor: pointer;
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

  span {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    transform: translateY(-50%);
    z-index: 9;
  }

  &:hover {
    background: transparent;
    background: #ee5170;
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
  }
`;