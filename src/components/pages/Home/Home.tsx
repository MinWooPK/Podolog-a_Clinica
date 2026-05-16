import React from "react";
import Button from "@atoms/Button";
import { ContainerVideo, Title, Description } from "./Home.styles";
import BackgroundVideo from "@assets/video/HomeMain.mp4";
import { Container } from "@pages/AboutMe/AboutMe.styles";
import ReviewHome from "@organisms/ReviewHome";
import LocationContact from "@organisms/LocationContact";
import PodoHome from "@organisms/PodoHome";

const Home: React.FC = () => {
  return (
    <>
      <PodoHome name={""} description={""} />
      <ReviewHome />
      <LocationContact />
    </>
  );
};

export default Home;
