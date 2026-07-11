import React from "react";
import { useTranslation } from "react-i18next";

import {
  Title,
  Description,
  Eyebrow,
  ContaienrFirst,
  SectionAntropometria,
} from "./Antropometria.styles";
import ImgAntropometria from "@assets/img/Antropometria.png";
import ImgAntropometria2 from "@assets/img/Antropometria2.png";
import ImgClaraGonzalez from "@assets/img/ImgClaraGonzalez.jpeg";

import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { Bone, Droplets, Ruler, User } from "lucide-react";
import FeatureListSection from "@organisms/FeatureListSection/FeatureListSection";

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
  ];

  const treatmentsData = specializedServices.map((item) => {
    const title = t(`antrometriaTreatments.${item.id}.title`);
    const category = t(`antrometriaTreatments.${item.id}.category`);
    const description = t(`antrometriaTreatments.${item.id}.description`);

    return ` ${title.toUpperCase()}
— 
${description}`;
  });
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
      <FeatureListSection
        id="what-we-treat"
        title={t("oterhSubTitle.antropometria")}
        subtitle={t("antrometriaTheme.subtitle")}
        items={treatmentsData}
        backgroundImage={ImgClaraGonzalez}
        imagePosition="bottom"
        subInfo={{
          text: t("antropometria.subInfo"),
          highlight: "Clara González",
          url: "https://instagram.com/nutricion.longevidad",
        }}
      />

      {/* <WhatWeTreat
        items={treatmentsData}
        title={t("oterhSubTitle.antropometria")}
      /> */}
      <ContaienrFirst backgroundImage={ImgAntropometria2}>
        <Eyebrow>{t("antrometriaThemeSection.eyebrow")}</Eyebrow>

        <Description>{t("antrometriaThemeSection.description")}</Description>
      </ContaienrFirst>
      <ReviewHome />
    </>
  );
};
export default Antropometria;
