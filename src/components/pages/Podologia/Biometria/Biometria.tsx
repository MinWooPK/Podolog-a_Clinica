import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Title,
  Description,
  Eyebrow,
  ContaienrFirst,
} from "./Biometria.styles";
import PodologiaBiometria from "@assets/img/PodologiaBiometria.jpg";
import PodologiaBiometria2 from "@assets/img/PodologiaBiometria2.png";
import ImgBiometria4 from "@assets/img/Biomecanica4.jpeg";
import ImgBiometria5 from "@assets/img/Biomecanica5.jpeg";
import ImgBiometria6 from "@assets/img/Biomecanica6.jpeg";
import ImgBiometria7 from "@assets/img/Biomecanica7.jpg";
import ImgBiometria8 from "@assets/img/Biomecanica8.jpg";
import ImgBiometria9 from "@assets/img/Biomecanica9.jpeg";

import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";

import {
  Activity,
  Footprints,
  ScanSearch,
  AlertTriangle,
  Camera,
  Footprints as Shoe,
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

const Biometria: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(
    null,
  );

  const { t } = useTranslation();

  const specializedServices = [
    {
      id: "exploracion-camilla",
      icon: <Activity />,
    },

    {
      id: "huella-plantar",
      icon: <Footprints />,
    },

    {
      id: "analisis-marcha-dinamico",
      icon: <Activity />,
    },

    {
      id: "calzado-ergonomia",
      icon: <Shoe />,
    },

    {
      id: "diagnostico-mecanico",
      icon: <AlertTriangle />,
    },

    {
      id: "analisis-3d",
      icon: <ScanSearch />,
    },
  ];

  const treatmentsSub = [
    {
      id: "exploracion-camilla",
      image: ImgBiometria4,
    },

    {
      id: "huella-plantar",
      image: ImgBiometria5,
    },

    {
      id: "analisis-marcha-dinamico",
      image: ImgBiometria6,
    },

    {
      id: "calzado-ergonomia",
      image: ImgBiometria7,
    },

    {
      id: "diagnostico-mecanico",
      image: ImgBiometria8,
    },

    {
      id: "analisis-3d",
      image: ImgBiometria9,
    },
  ];

  const treatmentsData = specializedServices.map((item) => ({
    id: item.id,
    icon: item.icon,
    title: t(`biomecanicoTreatments.${item.id}.title`),
    category: t(`biomecanicoTreatments.${item.id}.category`),
    description: t(`biomecanicoTreatments.${item.id}.description`),
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
          title: t(`biomecanicoSub.${base.id}.title`),
          description: t(`biomecanicoSub.${base.id}.description`, {
            returnObjects: true,
          }) as string[],
        };
      })()
    : null;

  return (
    <>
      <Hero
        backgroundImage={PodologiaBiometria}
        title={t("biomecanicoTheme.title")}
        subtitle={t("biomecanicoTheme.subtitle")}
        description={t("biomecanicoTheme.description")}
        primaryButton={{
          label: t("general.hero.primary"),
          href: "/contacto",
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
              title={t("oterhSubTitle.biometria")}
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
      <ContaienrFirst $backgroundImage={PodologiaBiometria2}>
        <Eyebrow>{t("biomecanicoThemeSection.eyebrow")}</Eyebrow>

        <Title>{t("biomecanicoThemeSection.title")}</Title>

        <Description>{t("biomecanicoThemeSection.description")}</Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};

export default Biometria;
