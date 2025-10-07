import React from "react";
import Button from "@atoms/Button";
import { Container, Title, Description } from "./ContactMe.styles";

const ContactMe: React.FC = () => {
  return (
    <Container>
      <Title>Bienvenido222222 👋</Title>
      <Description>
        Esta es tu pantalla inicial con styled-components y alias configurados.
      </Description>
      <Button label="Empezar" onClick={() => alert("¡Vamos allá! 🚀")} />
    </Container>
  );
};

export default ContactMe;
