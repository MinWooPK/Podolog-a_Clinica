import React from "react";

import RebeAboutMe from "@assets/img/RebeAboutMe.jpg";
import {
  Container,
  Card,
  Image,
  Content,
  Title,
  Name,
  Subtitle,
  Section,
  Paragraph,
  HighlightBox,
  QuoteBox,
  Divider,
} from "./AboutMe.styles";

const AboutMe: React.FC = () => {
  return (
    <Container>
      <Card>
        <Image src={RebeAboutMe} alt="Dra Rebeca Saludes" />

        <Content>
          <Title>Perfil clínico y académico</Title>

          <Name>Dra. Rebeca Saludes Llamas</Name>

          <Subtitle>
            Podóloga Clínica e Investigadora · Antropología de la Salud
          </Subtitle>

          <Section>
            <Paragraph>
              Nº Col. <strong>838070120</strong> | Centro Sanitario Autorizado
              Nº <strong>6102</strong>
            </Paragraph>
          </Section>

          <Divider />

          <Section>
            <Paragraph>
              Tras graduarme en <strong>Podología (2008)</strong>, consolidé mi
              trayectoria profesional en <u>ortopodología avanzada</u>.
            </Paragraph>

            <Paragraph>
              En <strong>2015</strong>, amplié mi formación en{" "}
              <u>Biología y Antropología</u>, iniciando mi carrera investigadora
              en <strong>Antropología de la Salud</strong> en la Universidad
              Autónoma de Madrid, en convergencia con la orientación del{" "}
              <u>Psicoanálisis Lacaniano</u>.
            </Paragraph>
          </Section>

          <Divider />

          <HighlightBox>
            <h3>Mi enfoque profesional</h3>
            <p>
              Integro las dimensiones <strong>biológicas</strong>,{" "}
              <strong>clínicas</strong> y <strong>culturales</strong> de la
              salud humana, con especial atención a factores evolutivos,
              socioculturales y biomecánicos.
            </p>
          </HighlightBox>

          <Divider />

          <Section>
            <h3>Reconocimientos y afiliaciones</h3>

            <Paragraph>
              •{" "}
              <strong>Sociedad Española de Medicina del Deporte (SEMED)</strong>
              <br />•{" "}
              <strong>Premio a la Mejor Exposición Científica (2024/25)</strong>
              <br />• Perfil investigador y publicaciones académicas en{" "}
              <strong>ResearchGate</strong>
            </Paragraph>
          </Section>

          <QuoteBox>
            “Mi trabajo integra las dimensiones biológicas, clínicas y
            culturales de la salud humana…”
          </QuoteBox>
        </Content>
      </Card>
    </Container>
  );
};

export default AboutMe;
