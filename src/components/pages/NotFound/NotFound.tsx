import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Title, Description } from "./NotFound.styles";

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t("notFound.title")}</Title>
      {/* <Description>Esta en construcción REBEEEE </Description> */}
    </Container>
  );
};

export default NotFound;
