import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Title, Description, Eyebrow, ContaienrFirst } from "./Nails.styles";
import PodologiaNailsMain from "@assets/img/PodologiaNailsMain.jpeg";
import PodologiaNails from "@assets/img/PodologiaNails.jpg";
import ImgCirugia2 from "@assets/img/imgCirugia2.jpeg";
import ImgCirugia3 from "@assets/img/imgCirugia3.jpg";
import ImgCirugia4 from "@assets/img/imgCirugia4.jpeg";
import ImgCirugia5 from "@assets/img/ImgCirugia5.jpeg";

import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { ScanSearch, ShieldCheck, Dna } from "lucide-react";
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

const Nails: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(
    null,
  );

  const { t } = useTranslation();

  const specializedServices = [
    {
      id: "onicocriptosis-cirugia",
      icon: <ShieldCheck />,
    },
    {
      id: "onicodistrofia",
      icon: <ScanSearch />,
    },
    {
      id: "protocolo-quirurgico",
      icon: <Dna />,
    },
  ];
  const treatmentsSub = [
    {
      id: "onicocriptosis-cirugia",
      image: ImgCirugia2,
    },

    {
      id: "onicodistrofia",
      image: ImgCirugia3,
    },

    {
      id: "protocolo-quirurgico",
      image: ImgCirugia5,
    },
  ];

  const treatmentsData = specializedServices.map((item) => ({
    id: item.id,
    icon: item.icon,
    title: t(`treatmentsNails.${item.id}.title`),
    category: t(`treatmentsNails.${item.id}.category`),
    description: t(`treatmentsNails.${item.id}.description`),
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
          title: t(`nailsSub.${base.id}.title`),
          description: t(`nailsSub.${base.id}.description`, {
            returnObjects: true,
          }) as string[],
        };
      })()
    : null;

  return (
    <>
      <Hero
        backgroundImage={PodologiaNailsMain}
        title={t("nailsTheme.title")}
        subtitle={t("nailsTheme.subtitle")}
        description={t("nailsTheme.description")}
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
              title={t("oterhSubTitle.nails")}
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
      <ContaienrFirst $backgroundImage={PodologiaNails}>
        <Eyebrow>{t("nailsSection.eyebrow")}</Eyebrow>

        <Title>{t("nailsSection.title")}</Title>

        <Description>{t("nailsSection.description")}</Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};

export default Nails;
