import RebeDoct from "@assets/icons/rebe.jpg";
import {
  Btn,
  ButtonGroup,
  Container,
  Description,
  ImageWrapper,
  LeftContent,
  SideImage,
  Title,
} from "./PodoHome.style";

// === MAIN COMPONENT ===
interface PodoHomeProps {
  name: string;
  description: string;
}

export default function PodoHome({ name, description }: PodoHomeProps) {
  return (
    <Container>
      <LeftContent>
        <Title>Especialistas en Sonrisas</Title>
        <Description>Clínica de Ortodoncia en Pozuelo</Description>
        <Description>
          Ayudamos a nuestros pacientes para que luzcan su mejor sonrisa,
          combinando atención personalizada y tecnología vanguardia.
        </Description>

        <ButtonGroup>
          <Btn>Saber más </Btn>
          <Btn>Pedir cita</Btn>
        </ButtonGroup>
      </LeftContent>

      <ImageWrapper>
        <SideImage src={RebeDoct} alt="Imagen" />
      </ImageWrapper>
    </Container>
  );
}
