import RebeDoct from "@assets/icons/rebe.jpg";
import {
  Btn,
  ButtonGroup,
  Container,
  Description,
  ImageWrapper,
  LeftContent,
  PrimaryButton,
  SecondaryButton,
  SideImage,
  Subtitle,
  Title,
} from "./PodoHome.style";

// === MAIN COMPONENT ===
interface PodoHomeProps {
  name: string;
  description: string;
  onPrimaryClick?: () => void;
}

export default function PodoHome({
  name,
  description,
  onPrimaryClick,
}: PodoHomeProps) {
  return (
    <Container>
      <LeftContent>
        <Title>Bienestar en tus pies</Title>
        <Subtitle>Clínica de podología en Palma de Mallorca</Subtitle>
        <Description>
          Unidad de Podología Clínica y Biomecánica Avanzada. Especialista en el
          diagnóstico y tratamiento integral de las patologías de pie. Ayudamos
          a nuestros pacientes a una recuperación funcional aplicando protocolos
          y tratamientos médicos especializados.
        </Description>

        <ButtonGroup>
          <PrimaryButton onClick={onPrimaryClick}>Saber más </PrimaryButton>
          <SecondaryButton
            href="https://www.doctoralia.es/rebeca-saludes-llamas/podologo/palma-de-mallorca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir cita
          </SecondaryButton>
        </ButtonGroup>
      </LeftContent>

      <ImageWrapper>
        <SideImage src={RebeDoct} alt="Imagen" />
      </ImageWrapper>
    </Container>
  );
}
