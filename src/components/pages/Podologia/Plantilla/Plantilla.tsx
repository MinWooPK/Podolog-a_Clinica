import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Description, Eyebrow, ContaienrFirst } from "./Plantilla.styles";
import PodologiaPlantilla from "@assets/img/PodologiaPlantilla.jpeg";
import PodologiaPlantilla2 from "@assets/img/PodologiaPlantilla2.jpeg";

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
      image:
        "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
    },

    {
      id: "tpu-alto-rendimiento",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    },

    {
      id: "diseno-digital",
      image:
        "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
    },

    {
      id: "densidades",
      image:
        "https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg",
    },

    {
      id: "acabados-biocompatibles",
      image:
        "https://images.pexels.com/photos/6695843/pexels-photo-6695843.jpeg",
    },

    {
      id: "ortesis-digitales",
      image:
        "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg",
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
