import React from "react";
import { useTranslation } from "react-i18next";
import SMEC from "@assets/img/SEMEDImg.jpg";

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
  ALink,
  CertificateImage,
  CertificateCard,
  CertificatesGrid,
} from "./AboutMe.styles";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Card>
        <Image src={RebeAboutMe} alt="Dra Rebeca Saludes" />

        <Content>
          <Title>{t("aboutMe.title")}</Title>
          <Name>Dra. Rebeca Saludes Llamas</Name>
          <Subtitle>{t("aboutMe.subtitle")} </Subtitle>
          <Section>
            <Paragraph>
              {t("aboutMe.section1.col")} <strong>838070120</strong> |{" "}
              {t("aboutMe.section1.center")}
              <strong>6102</strong>
            </Paragraph>
          </Section>
          <Divider />
          <Section>
            <Paragraph>
              {t("aboutMe.education1")}{" "}
              <strong>{t("aboutMe.education1a")}</strong>
              {t("aboutMe.education1b")}
              <u>{t("aboutMe.education1c")}</u>
            </Paragraph>

            <Paragraph>
              {t("aboutMe.education2")} <strong>2015</strong>
              {t("aboutMe.education2b")} <u>{t("aboutMe.education2c")}</u>,{" "}
              {t("aboutMe.education2d")}
              <strong>{t("aboutMe.education2e")}</strong>{" "}
              {t("aboutMe.education2f")} <u>{t("aboutMe.education2g")}</u>
            </Paragraph>
          </Section>
          <Divider />
          <HighlightBox>
            <h3>{t("aboutMe.focusTitle")}</h3>
            <p>
              {t("aboutMe.focusText1")}{" "}
              <strong>{t("aboutMe.focusText2")}</strong>{" "}
              {t("aboutMe.focusText2a")}{" "}
              <strong>{t("aboutMe.focusText3")}</strong>
              {/* {t("aboutMe.focusText3a")}{" "}
              <strong>{t("aboutMe.focusText4")}</strong>{" "} */}
              {t("aboutMe.focusText5")}
            </p>
          </HighlightBox>
          <Divider />
          <Section>
            <h3>{t("aboutMe.recognitionsTitle")}</h3>

            <Paragraph>
              • <strong>{t("aboutMe.recognitions1")}</strong>
              <br />• <strong>{t("aboutMe.recognitions2")}</strong>
              <br />• {t("aboutMe.recognitions3")}{" "}
              <strong>
                <ALink
                  href="https://www.researchgate.net/profile/Rebeca-Saludes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ResearchGate
                </ALink>
              </strong>
            </Paragraph>
          </Section>
          <QuoteBox>“{t("aboutMe.quote")}”</QuoteBox>
          <CertificatesGrid>
            <CertificateCard>
              <CertificateImage src={SMEC} alt="Certificado SEMED" />
            </CertificateCard>
          </CertificatesGrid>{" "}
        </Content>
      </Card>
    </Container>
  );
};

export default AboutMe;
