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
        <Title>Tus pies en buenas manos.</Title>
        <Description>Clínica de podlogía en Palma de Mallorca</Description>
        <Description>
          Unidad de Podología Clínica y Biomecánica Avanzada. Especialista en el
          diagnóstico y tratamiento integral de las patologías de pie. Ayudamos
          a nuestros pacientes a una recuperación funcional aplicando protocolos
          y tratamientos médicos especializados.
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
