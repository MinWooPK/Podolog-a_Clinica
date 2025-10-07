import React from "react";
import Button from "@atoms/Button";
import { Container, Title, Description } from "./Home.styles";
import BackgroundVideo from "@assets/video/HomeMain.mp4";

const Home: React.FC = () => {
  return (
    <Container>
      {/* <Title>Bienvenido 👋</Title> */}

      <Description autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
        Tu navegador no soporta videos.
      </Description>

      <Button label="Empezar" onClick={() => alert("¡Vamos allá! 🚀")} />
    </Container>
  );
};

export default Home;
