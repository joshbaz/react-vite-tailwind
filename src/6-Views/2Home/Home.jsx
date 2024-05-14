import React from "react";
import WebNavigation from "../../2-Components/Navigation/WebNavigation";
import styled from "styled-components";
import CustomStack from "../../2-Components/Stacks/CustomStack";
import Hero from "./Hero";
import ContentSection from "./ContentSection";
import WatchPlace from "./WatchPlace";
import WatchTime from "./WatchTime";
import FAQ from "./FAQ";
import Footer from "../../2-Components/Footer/Footer";
const Home = () => {
  return (
    <Container className="w-full h-full relative flex-col space-y-0 bg-secondary-800">
      <WebNavigation />

      <CustomStack className="flex-col w-full h-full space-y-0">
        <Hero />
        <CustomStack className="flex-col space-y-0">
          <ContentSection />
          <WatchPlace />
          <WatchTime />
          <FAQ />
          <Footer/>
        </CustomStack>
      </CustomStack>
    </Container>
  );
};

export default Home;

const Container = styled(CustomStack)`
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;
