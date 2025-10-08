import React from "react";
import Button from "@atoms/Button";
import { ContainerVideo, Title, Description } from "./Home.styles";
import BackgroundVideo from "@assets/video/HomeMain.mp4";
import { Container } from "@pages/AboutMe/AboutMe.styles";
import ReviewHome from "@organisms/ReviewHome";
import LocationContact from "@organisms/LocationContact";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <ContainerVideo>
          {/* <Title>Bienvenido 👋</Title> */}
          <Description autoPlay loop muted>
            <source src={BackgroundVideo} type="video/mp4" />
            Tu navegador no soporta videos.
          </Description>
        </ContainerVideo>
      </Container>
      <div>Clínica Antropologica</div>
      <div>Antropología</div>
      <div>Sobre mi</div>
      <ReviewHome />
      <LocationContact />
    </>
  );
};

export default Home;
