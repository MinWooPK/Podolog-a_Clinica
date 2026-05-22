import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Infantil2 from "@assets/img/Infantil2.jpeg";
import Infantil3 from "@assets/img/Infantil3.jpeg";
import Infantil4 from "@assets/img/Infantil4.jpeg";
import Infantil5 from "@assets/img/Infantil5.jpeg";
import Infantil6 from "@assets/img/infantil7.jpg";
import Infantil7 from "@assets/img/infantil6.jpg";
import Infantil8 from "@assets/img/ImgInfantil3.png";
import Infantil9 from "@assets/img/ImgInfantil4.png";
import Infantil10 from "@assets/img/ImgInfantil5.png";

import ImgPodologiaInfantilDetail from "@assets/img/ImgPodologiaInfantilDetail.png";
import PodologiaInfantil from "@assets/img/PodologiaInfantil.jpg";
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
import { ContaienrFirst, Description, Eyebrow, Title } from "./Infantil.styles";
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};
const Infantil: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(
    null,
  );
  const treatments = [
    { id: "maduracion-osea", icon: <Footprints /> },
    { id: "analisis-marcha", icon: <Activity /> },
    { id: "genetica", icon: <Dna /> },
    { id: "patologias-infantiles", icon: <ShieldCheck /> },
    { id: "tratamiento-no-invasivo", icon: <ScanSearch /> },
    { id: "calzado-ergonomia", icon: <Footprints /> },
  ];
  const treatmentsSub = [
    { id: "maduracion-osea", image: Infantil2 },
    { id: "analisis-marcha", image: Infantil9 },
    { id: "genetica", image: Infantil4 },
    { id: "patologias-infantiles", image: Infantil8 },
    { id: "tratamiento-no-invasivo", image: Infantil6 },
    { id: "calzado-ergonomia", image: Infantil10 },
  ];
  const treatmentsData = treatments.map((item) => ({
    id: item.id,
    icon: item.icon,
    title: t(`treatmentsPodologiaFood.${item.id}.title`),
    category: t(`treatmentsPodologiaFood.${item.id}.category`),
    description: t(`treatmentsPodologiaFood.${item.id}.description`),
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
          title: t(`treatmentsSubPodologiaFood.${base.id}.title`),
          description: t(`treatmentsSubPodologiaFood.${base.id}.description`, {
            returnObjects: true,
          }) as string[],
        };
      })()
    : null;
  return (
    <>
      {" "}
      <Hero
        backgroundImage={PodologiaInfantil}
        title={t("podologiaInfantil.title")}
        subtitle={t("podologiaInfantil.subtitle")}
        description={<> {t("podologiaInfantil.description")}</>}
        primaryButton={{
          label: t("general.hero.primary"),
          href: "/contacto",
        }}
        secondaryButton={{
          label: t("general.hero.secondary"),
          onClick: () => scrollToSection("what-we-treat"),
        }}
      />{" "}
      <AnimatePresence mode="wait">
        {" "}
        {!selectedTreatment ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.35 }}
          >
            {" "}
            <WhatWeTreat
              id="what-we-treat"
              items={treatmentsData}
              title={t("oterhSubTitle.infantil")}
              onCardClick={(id) => setSelectedTreatment(id)}
            />{" "}
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
          >
            {" "}
            <TreatmentSections
              id="what-we-treat"
              items={
                selectedTreatmentTranslated ? [selectedTreatmentTranslated] : []
              }
              showBackButton={true}
              onBack={() => setSelectedTreatment(null)}
            />{" "}
          </motion.div>
        )}{" "}
      </AnimatePresence>{" "}
      <ContaienrFirst $backgroundImage={ImgPodologiaInfantilDetail}>
        {" "}
        <Eyebrow>{t("podologiaInfantilSection.eyebrow")}</Eyebrow>{" "}
        <Title>{t("podologiaInfantilSection.title")}</Title>{" "}
        <Description>
          {" "}
          {t("podologiaInfantilSection.description")}
        </Description>{" "}
      </ContaienrFirst>{" "}
      <ReviewHome />{" "}
    </>
  );
};
export default Infantil;
