import React from "react";
import { useState } from "react";

import { Title, Description, Eyebrow, ContaienrFirst } from "./Ortonxia.styles";
import PdologiaOrtonixia from "@assets/img/PdologiaOrtonixia.jpg";
import PdologiaOrtonixia2 from "@assets/img/PdologiaOrtonixia2.jpeg";
import ortonixia1 from "@assets/img/ortonixia1.jpeg";
import ortonixia2 from "@assets/img/ortonixia2.jpeg";
import ortonixia4 from "@assets/img/ortonixia4.jpeg";
import ortonixia7 from "@assets/img/ortonixia7.jpeg";

import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { Activity, Footprints, ScanSearch, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import TreatmentSections from "@organisms/TreatmentSections/TreatmentSections";
import { useTranslation } from "react-i18next";

//  SCROLL SUAVE
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Nails: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(
    null,
  );

  const { t } = useTranslation();

  const specializedServices = [
    {
      id: "brackets-ortonixia",
      icon: <Activity />,
    },
    {
      id: "reconstruccion-ungueal",
      icon: <ShieldCheck />,
    },
    {
      id: "tamponado",
      icon: <Footprints />,
    },
    {
      id: "prevencion-recidivas",
      icon: <ScanSearch />,
    },
  ];

  const treatmentsSub = [
    {
      id: "brackets-ortonixia",
      image: ortonixia1,
    },

    {
      id: "reconstruccion-ungueal",
      image: ortonixia2,
    },

    {
      id: "tamponado",
      image: ortonixia4,
    },

    {
      id: "prevencion-recidivas",
      image: ortonixia7,
    },
  ];

  const treatmentsData = specializedServices.map((item) => ({
    id: item.id,
    icon: item.icon,
    title: t(`ortonixiaNails.${item.id}.title`),
    category: t(`ortonixiaNails.${item.id}.category`),
    description: t(`ortonixiaNails.${item.id}.description`),
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
          title: t(`ortonixiaSub.${base.id}.title`),
          description: t(`ortonixiaSub.${base.id}.description`, {
            returnObjects: true,
          }) as string[],
        };
      })()
    : null;

  return (
    <>
      <Hero
        backgroundImage={PdologiaOrtonixia}
        title={t("ortonixiaTheme.title")}
        subtitle={t("ortonixiaTheme.subtitle")}
        description={t("ortonixiaTheme.description")}
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
              title={t("oterhSubTitle.ortonixia")}
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
      <ContaienrFirst $backgroundImage={PdologiaOrtonixia2}>
        <Eyebrow>{t("ortonixiaSection.eyebrow")}</Eyebrow>

        <Title>{t("ortonixiaSection.title")}</Title>

        <Description>{t("ortonixiaSection.description")}</Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};

export default Nails;
