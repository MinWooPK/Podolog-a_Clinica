import React from "react";
import { useTranslation } from "react-i18next";

import {
  Title,
  Description,
  Eyebrow,
  ContaienrFirst,
} from "./Antropometria.styles";
import ImgAntropometria from "@assets/img/Antropometria.png";
import ImgAntropometria2 from "@assets/img/Antropometria2.png";
import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { Bone, Droplets, Ruler, User } from "lucide-react";

//  SCROLL SUAVE
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Antropometria: React.FC = () => {
  const { t } = useTranslation();

  const specializedServices = [
    {
      id: "oseo",
      icon: <Bone />,
    },
    {
      id: "pliegues",
      icon: <Droplets />,
    },
    {
      id: "perimetro",
      icon: <Ruler />,
    },
    {
      id: "somatotipo",
      icon: <User />,
    },
  ];

  const treatmentsData = specializedServices.map((item) => ({
    id: item.id,
    icon: item.icon,
    title: t(`antrometriaTreatments.${item.id}.title`),
    category: t(`antrometriaTreatments.${item.id}.category`),
    description: t(`antrometriaTreatments.${item.id}.description`),
  }));

  return (
    <>
      <Hero
        backgroundImage={ImgAntropometria}
        title={t("antrometriaTheme.title")}
        subtitle={t("antrometriaTheme.subtitle")}
        description={t("antrometriaTheme.description")}
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
        items={treatmentsData}
        title={t("oterhSubTitle.antropometria")}
      />

      <ContaienrFirst backgroundImage={ImgAntropometria2}>
        <Eyebrow>{t("antrometriaThemeSection.eyebrow")}</Eyebrow>

        <Description>{t("antrometriaThemeSection.description")}</Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};
export default Antropometria;
