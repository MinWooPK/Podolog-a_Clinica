import React from "react";
import { useTranslation } from "react-i18next";

import {
  Title,
  Description,
  Eyebrow,
  ContaienrFirst,
} from "./DismorfiaAsimetria.styles";
import ImgDismorfiaAsimetria from "@assets/img/DismorfiaAsimetria.jpeg";
import ImgDismorfiaAsimetria2 from "@assets/img/DismorfiaAsimetria.jpeg";
import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { Brain, Users, RefreshCcw, Heart } from "lucide-react";

//  SCROLL SUAVE
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const DismorfiaAsimetria: React.FC = () => {
  const { t } = useTranslation();

  const specializedServices = [
    {
      id: "ExpresiónCorporal",
      category: "Psicocorporal",
      description:
        "Identificamos cómo las asimetrías y tensiones crónicas se vinculan a patrones de miedo, evitación y mecanismos de defensa. Interpretamos el cuerpo como expresión funcional de la historia biomecánica y emocional.",
      icon: <Brain />,
    },
    {
      id: "Psicoterapéutica",
      category: "Interdisciplinar",
      description:
        "Colaboramos con psicólogos y psicoanalistas. Integramos el abordaje psíquico con la lectura de manifestaciones físicas. Analizamos dismorfias y asimetrías corporales desde una visión global.",
      icon: <Users />,
    },
    {
      id: "ReeducaciónyAutoconciencia",
      category: "Reeducación",
      description:
        "La corrección biomecánica genera nuevas oportunidades de conciencia corporal. Facilita procesos terapéuticos con menor resistencia física. Mejora la integración funcional del cuerpo.",
      icon: <RefreshCcw />,
    },
    {
      id: "CuerpoCambio",
      icon: <Heart />,
    },
  ];
  const treatmentsData = specializedServices.map((item) => ({
    id: item.id,
    icon: item.icon,
    title: t(`dismorfiaTreatments.${item.id}.title`),
    category: t(`dismorfiaTreatments.${item.id}.category`),
    description: t(`dismorfiaTreatments.${item.id}.description`),
  }));
  return (
    <>
      <Hero
        backgroundImage={ImgDismorfiaAsimetria}
        title={t("dismorfiaTheme.title")}
        subtitle={t("dismorfiaTheme.subtitle")}
        description={t("dismorfiaTheme.description")}
        primaryButton={{
          label: t("general.hero.primary"),
          href: "/contacto",
        }}
        secondaryButton={{
          label: t("general.hero.secondary"),
          onClick: () => scrollToSection("what-we-treat"),
        }}
      />

      <WhatWeTreat
        id="what-we-treat"
        title={t("oterhSubTitle.asimetria")}
        items={treatmentsData}
      />

      <ContaienrFirst backgroundImage={ImgDismorfiaAsimetria2}>
        <Eyebrow>{t("dismorfiaThemeSection.eyebrow")}</Eyebrow>
        <Title>{t("dismorfiaThemeSection.title")}a</Title>

        <Description>{t("dismorfiaThemeSection.description")}</Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};
export default DismorfiaAsimetria;
