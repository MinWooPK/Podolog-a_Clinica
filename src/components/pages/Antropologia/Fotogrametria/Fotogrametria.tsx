import React from "react";
import { useTranslation } from "react-i18next";

import {
  Title,
  Description,
  Eyebrow,
  ContaienrFirst,
} from "./Fotogrametria.styles";
import ImgFotogrametria from "@assets/img/Fotogrametria.jpeg";
import ImgAntropometria2 from "@assets/img/Antropometria2.png";
import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { ScanLine, RotateCw, Activity, Eye } from "lucide-react";

const photoMetryProcess = [
  {
    title: "Identificación de desequilibrios",
    category: "Postura",
    description:
      "Analizamos la alineación de puntos clave como trago de la oreja, acromion, cresta ilíaca y maléolo. Visualizamos la distribución de la masa corporal respecto a la línea de gravedad.",
    icon: <ScanLine />,
  },
  {
    title: "Análisis de angulaciones y rotaciones",
    category: "Biomecánica",
    description:
      "Medimos con precisión los grados de inclinación en hombros, pelvis y rodillas. Pequeñas variaciones angulares pueden generar sobrecargas en la cadena muscular y articular.",
    icon: <RotateCw />,
  },
  {
    title: "Evaluación de curvas sagitales",
    category: "Columna",
    description:
      "Evaluamos las curvas de la columna (lordosis y cifosis). Analizamos su relación con el centro de gravedad. Detectamos desplazamientos que afectan al equilibrio global.",
    icon: <Activity />,
  },
  {
    title: "Evidencia clínica y seguimiento",
    category: "Control",
    description:
      "Generamos una representación visual del estado inicial del paciente. Permitimos comparar la evolución tras tratamientos o terapia física.",
    icon: <Eye />,
  },
];
//  SCROLL SUAVE
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Fotogrametria: React.FC = () => {
  const { t } = useTranslation();

  const specializedServices = [
    {
      id: "desequilibrios",
      icon: <ScanLine />,
    },
    {
      id: "rotaciones",
      icon: <RotateCw />,
    },
    {
      id: "sagitales",
      icon: <Activity />,
    },
    {
      id: "seguimiento",
      icon: <Eye />,
    },
  ];

  const treatmentsData = specializedServices.map((item) => ({
    id: item.id,
    icon: item.icon,
    title: t(`fotometriaTreatments.${item.id}.title`),
    category: t(`fotometriaTreatments.${item.id}.category`),
    description: t(`fotometriaTreatments.${item.id}.description`),
  }));

  return (
    <>
      <Hero
        backgroundImage={ImgFotogrametria}
        title={t("fotometriaTheme.title")}
        subtitle={t("fotometriaTheme.subtitle")}
        description={t("fotometriaTheme.description")}
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
        title={t("oterhSubTitle.fotogametria")}
        items={treatmentsData}
        // onCardClick={(id) => scrollToSection(id)}
      />

      <ContaienrFirst backgroundImage={ImgAntropometria2}>
        <Eyebrow>{t("fotometriaThemeSection.eyebrow")}</Eyebrow>

        <Description>{t("fotometriaThemeSection.description")}</Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};
export default Fotogrametria;
