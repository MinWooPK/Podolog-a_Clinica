import {
  Section,
  Container,
  Eyebrow,
  Title,
  Description,
  ImageWrapper,
  CTA,
  Grid,
  Card,
  CardTitle,
  CardText,
  MetaBlock,
  MetaItem,
  Divider,
} from "./Investigacion.styles";

import ImgInvestigacion from "@assets/img/Investigacion.jpeg";
import { useTranslation } from "react-i18next";

const Investigacion: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        <Eyebrow>{t("eyebrow")}</Eyebrow>

        <Title>{t("title")}</Title>

        <Description>{t("description")}</Description>

        {/* META */}
        <MetaBlock>
          <MetaItem>
            <strong>Approach:</strong> {t("meta.approach")}
          </MetaItem>

          <MetaItem>
            <strong>Unit:</strong> {t("meta.unit")}
          </MetaItem>

          <MetaItem>
            <strong>Objective:</strong> {t("meta.objective")}
          </MetaItem>
        </MetaBlock>

        <Divider />

        {/* CARDS */}
        <Grid>
          <Card>
            <CardTitle>{t("cards.1.title")}</CardTitle>
            <CardText>{t("cards.1.text")}</CardText>
          </Card>

          <Card>
            <CardTitle>{t("cards.2.title")}</CardTitle>
            <CardText>{t("cards.2.text")}</CardText>
          </Card>

          <Card>
            <CardTitle>{t("cards.3.title")}</CardTitle>
            <CardText>{t("cards.3.text")}</CardText>
          </Card>

          <Card>
            <CardTitle>{t("cards.4.title")}</CardTitle>
            <CardText>{t("cards.4.text")}</CardText>
          </Card>
        </Grid>

        {/* IMAGE */}
        <ImageWrapper>
          <img src={ImgInvestigacion} alt="Research biomechanics analysis" />
        </ImageWrapper>

        <Divider />

        <Description>{t("footerInvetigacion")}</Description>

        <CTA
          href="https://www.researchgate.net"
          target="_blank"
          rel="noreferrer"
        >
          {t("ctaInvetigacion")}
        </CTA>
      </Container>
    </Section>
  );
};

export default Investigacion;
