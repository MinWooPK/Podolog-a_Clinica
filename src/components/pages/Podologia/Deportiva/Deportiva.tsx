import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Title,
  Description,
  Eyebrow,
  ContaienrFirst,
} from "./Deportiva.styles";
import ImgPodoLogiaDeportiva from "@assets/img/PodologiaDeportiva.jpg";
import ImgPodoLogiaDeportiv2 from "@assets/img/PodologiaDeportiva2.jpg";

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
const Deportiva: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(
    null,
  );

  const { t } = useTranslation();

  const specializedServices = [
    {
      id: "estudio-biomecanico",
      icon: <Footprints />,
    },
    {
      id: "prevencion-lesiones",
      icon: <ShieldCheck />,
    },
    {
      id: "plantillas-3d",
      icon: <ScanSearch />,
    },
    {
      id: "calzado-deportivo",
      icon: <Activity />,
    },
    {
      id: "perfil-genetico",
      icon: <Dna />,
    },
  ];

  const treatmentsSub = [
    {
      id: "estudio-biomecanico",
      image:
        "https://images.pexels.com/photos/4167544/pexels-photo-4167544.jpeg",
    },
    {
      id: "prevencion-lesiones",
      image:
        "https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg",
    },
    {
      id: "plantillas-3d",
      image:
        "https://images.pexels.com/photos/6695843/pexels-photo-6695843.jpeg",
    },
    {
      id: "calzado-deportivo",
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    },
    {
      id: "perfil-genetico",
      image:
        "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg",
    },
  ];

  const treatmentsData = specializedServices.map((item) => ({
    id: item.id,
    icon: item.icon,
    title: t(`specializedServices.${item.id}.title`),
    category: t(`specializedServices.${item.id}.category`),
    description: t(`specializedServices.${item.id}.description`),
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
          title: t(`tremensSupport.${base.id}.title`),
          description: t(`tremensSupport.${base.id}.description`, {
            returnObjects: true,
          }) as string[],
        };
      })()
    : null;

  return (
    <>
      <Hero
        backgroundImage={ImgPodoLogiaDeportiva}
        title={t("podologiaDeportiva.title")}
        subtitle={t("podologiaDeportiva.subtitle")}
        description={t("podologiaDeportiva.description")}
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
              title={t("oterhSubTitle.deporte")}
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
      </AnimatePresence>{" "}
      <ContaienrFirst $backgroundImage={ImgPodoLogiaDeportiv2}>
        <Eyebrow>{t("podologiaDeportivaSection.eyebrow")}</Eyebrow>

        <Title>{t("podologiaDeportivaSection.title")}a</Title>

        <Description>{t("podologiaDeportivaSection.description")}</Description>
      </ContaienrFirst>
      <ReviewHome />
    </>
  );
};
export default Deportiva;
