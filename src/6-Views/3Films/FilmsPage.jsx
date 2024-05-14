import React from "react";
import styled from "styled-components";
import CustomStack from "../../2-Components/Stacks/CustomStack";
import WebNavigation from "../../2-Components/Navigation/WebNavigation";
import FilmsHero from "./FilmsHero";
import FilmsWatchList from "./FilmsWatchList";
import Advert from "./Advert";
import FilmsGenre from "./FilmsGenre";
import FooterWatch from "../../2-Components/Footer/FooterWatch";
import Footer from "../../2-Components/Footer/Footer";
const FilmsPage = () => {
  return (
    <Container className="space-y-0 flex-col relative w-full h-full">
      <WebNavigation />

      <CustomStack className="flex-col w-full height-full">
        <FilmsHero />
        <FilmsWatchList />
        <Advert />
        <FilmsGenre />
        <FooterWatch />
      </CustomStack>
      <Footer />
    </Container>
  );
};

export default FilmsPage;

const Container = styled(CustomStack)``;
