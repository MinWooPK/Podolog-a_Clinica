import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Description, Eyebrow, ContaienrFirst } from "./Plantilla.styles";
import PodologiaPlantilla from "@assets/img/PodologiaPlantilla.jpeg";
import PodologiaPlantilla2 from "@assets/img/PodologiaPlantilla2.jpeg";
import ImgPlantilla1 from "@assets/img/ImgPlantilla1.jpeg";
import ImgPlantilla2 from "@assets/img/ImgPlantilla2.jpeg";
import ImgPlantilla3 from "@assets/img/ImgPlantilla3.jpeg";
import ImgPlantilla4 from "@assets/img/ImgPlantilla4.jpeg";
import ImgPlantilla5 from "@assets/img/ImgPlantilla5.jpeg";
import ImgPlantilla6 from "@assets/img/ImgPlantilla6.jpeg";

import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import {
  Activity,
  Footprints,
  ScanSearch,
  ShieldCheck,
  Dna,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import TreatmentSections from "@organisms/TreatmentSections/TreatmentSections";

//  SCROLL SUAVE
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Plantilla: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(
    null,
  );

  const { t } = useTranslation();

  const specializedServices = [
    {
      id: "impresion-3d",
      icon: <ScanSearch />,
    },
    {
      id: "tpu-alto-rendimiento",
      icon: <ShieldCheck />,
    },
    {
      id: "diseno-digital",
      icon: <Activity />,
    },
    {
      id: "densidades",
      icon: <Footprints />,
    },
    {
      id: "acabados-biocompatibles",
      icon: <Dna />,
    },
    {
      id: "ortesis-digitales",
      icon: <Footprints />,
    },
  ];
  const treatmentsSub = [
    {
      id: "impresion-3d",
      image: ImgPlantilla1,
    },

    {
      id: "tpu-alto-rendimiento",
      image: ImgPlantilla2,
    },

    {
      id: "diseno-digital",
      image: ImgPlantilla3,
    },

    {
      id: "densidades",
      image: ImgPlantilla4,
    },

    {
      id: "acabados-biocompatibles",
      image: ImgPlantilla5,
    },

    {
      id: "ortesis-digitales",
      image: ImgPlantilla6,
    },
  ];

  const treatmentsData = specializedServices.map((item) => ({
    id: item.id,
    icon: item.icon,
    title: t(`plantillaTreatments.${item.id}.title`),
    category: t(`plantillaTreatments.${item.id}.category`),
    description: t(`plantillaTreatments.${item.id}.description`),
  }));

  const selectedTreatmentTranslated = selectedTreatment
    ? (() => {
        const base = treatmentsSub.find(
          (item) => item.id === selectedTreatment,
        );

        if (!base) return null;

        return {
          id: base.id,
          image: base.image,
          title: t(`plantillaSub.${base.id}.title`),
          description: t(`plantillaSub.${base.id}.description`, {
            returnObjects: true,
          }) as string[],
        };
      })()
    : null;

  return (
    <>
      <Hero
        backgroundImage={PodologiaPlantilla}
        title={t("plantillaTheme.title")}
        subtitle={t("plantillaTheme.subtitle")}
        description={t("plantillaTheme.description")}
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

      <AnimatePresence mode="wait">
        {!selectedTreatment ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.35 }}
          >
            <WhatWeTreat
              id="what-we-treat"
              title={t("oterhSubTitle.plantilla")}
              items={treatmentsData}
              onCardClick={(id) => setSelectedTreatment(id)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
          >
            <TreatmentSections
              id="what-we-treat"
              items={
                selectedTreatmentTranslated ? [selectedTreatmentTranslated] : []
              }
              showBackButton={true}
              onBack={() => setSelectedTreatment(null)}
            />{" "}
          </motion.div>
        )}
      </AnimatePresence>
      <ContaienrFirst $backgroundImage={PodologiaPlantilla2}>
        <Eyebrow>{t("plantillaThemeSection.eyebrow")}</Eyebrow>

        <Description>{t("plantillaThemeSection.description")}</Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};

export default Plantilla;
