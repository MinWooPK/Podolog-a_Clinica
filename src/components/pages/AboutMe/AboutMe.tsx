import React from "react";
import Button from "@atoms/Button";
import { Container, Title, Description } from "./AboutMe.styles";

const AboutMe: React.FC = () => {
  return (
    <Container>
      <Title>Bienvenido 👋11111</Title>
      <Description>
        Esta es tu pantalla inicial con styled-components y alias configurados.
      </Description>
      <Button label="Empezar" onClick={() => alert("¡Vamos allá! 🚀")} />
    </Container>
  );
};

export default AboutMe;
