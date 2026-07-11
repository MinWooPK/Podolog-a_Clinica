import RebeDoct from "@assets/icons/rebe.jpg";
import {
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

import { useTranslation } from "react-i18next";

interface PodoHomeProps {
  onPrimaryClick?: () => void;
}

export default function PodoHome({ onPrimaryClick }: PodoHomeProps) {
  const { t } = useTranslation();

  return (
    <Container>
      <LeftContent>
        <Title>{t("podoHome.title")}</Title>

        <Subtitle>{t("podoHome.subtitle")}</Subtitle>

        <Description>{t("podoHome.description")}</Description>

        <ButtonGroup>
          <PrimaryButton onClick={onPrimaryClick}>
            {t("podoHome.primaryButton")}
          </PrimaryButton>

          <SecondaryButton
            href="https://www.doctoralia.es/rebeca-saludes-llamas/podologo/palma-de-mallorca"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("podoHome.secondaryButton")}
          </SecondaryButton>
        </ButtonGroup>
      </LeftContent>

      <ImageWrapper>
        <SideImage src={RebeDoct} alt="Imagen" />
      </ImageWrapper>
    </Container>
  );
}
