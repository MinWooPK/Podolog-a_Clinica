import React from "react";
import { useTranslation } from "react-i18next";

import { Title, Description, Eyebrow, ContaienrFirst } from "./Genetica.styles";
import ImgGenetica from "@assets/img/Genetica.jpeg";
import ImgGenetica2 from "@assets/img/Genetica2.jpeg";
import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { ShieldCheck, Dna, Activity, TrendingUp } from "lucide-react";

//  SCROLL SUAVE
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Genetica: React.FC = () => {
  const { t } = useTranslation();

  const specializedServices = [
    {
      id: "patologia",
      icon: <ShieldCheck />,
    },
    {
      id: "farmacogenetica",
      icon: <Dna />,
    },
    {
      id: "datosClinicos",
      icon: <Activity />,
    },
    {
      id: "RendimientoyLongevidad",
      icon: <TrendingUp />,
    },
  ];

  const treatmentsData = specializedServices.map((item) => ({
    id: item.id,
    icon: item.icon,
    title: t(`geneticaTreatments.${item.id}.title`),
    category: t(`geneticaTreatments.${item.id}.category`),
    description: t(`geneticaTreatments.${item.id}.description`),
  }));
  return (
    <>
      <Hero
        backgroundImage={ImgGenetica}
        title={t("geneticaTheme.title")}
        subtitle={t("geneticaTheme.subtitle")}
        description={t("geneticaTheme.description")}
        primaryButton={{
          label: t("general.hero.primary"),
          href: "https://www.doctoralia.es/rebeca-saludes-llamas/podologo/palma-de-mallorca",
          target: "_blank",
        }}
        secondaryButton={{
          label: t("general.hero.secondary"),
          onClick: () => scrollToSection("what-we-treat"),
        }}
      />

      <WhatWeTreat
        id="what-we-treat"
        title={t("oterhSubTitle.genetica")}
        items={treatmentsData}
      />

      <ContaienrFirst $backgroundImage={ImgGenetica2}>
        <Eyebrow>{t("geneticaThemeSection.eyebrow")}</Eyebrow>
        <Title>{t("geneticaThemeSection.title")}a</Title>

        <Description>{t("geneticaThemeSection.description")}</Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};
export default Genetica;
