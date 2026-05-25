import React from "react";
import { useState } from "react";
import PodologiaQuiopodologia from "@assets/img/PodologiaQuiopodologia.jpeg";
import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import ImgQuipodiaDestail from "@assets/img/ImgQuipodiaDestail.jpg";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { useTranslation } from "react-i18next";
import ImgQuiropodia5 from "@assets/img/ImgQuriopodia5.jpeg";
import ImgQuiropodia6 from "@assets/img/ImgQuiropodia10.jpeg";
import ImgQuiropodia7 from "@assets/img/ImgQuiropodia7.jpeg";
import ImgQuiropodia8 from "@assets/img/ImgQuiropodia8.jpeg";
import ImgQuiropodia9 from "@assets/img/ImgQuiropodia9.jpeg";
import ImgQuiropodia11 from "@assets/img/ImgQuiropodia11.jpeg";

import {
  Activity,
  Footprints,
  ScanSearch,
  ShieldCheck,
  Dna,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import TreatmentSections from "@organisms/TreatmentSections/TreatmentSections";
import {
  ContaienrFirst,
  Description,
  Eyebrow,
  Title,
} from "./Quipodologia.style";

//  SCROLL SUAVE
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Quipodologia: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(
    null,
  );

  const { t } = useTranslation();

  const specializedServices = [
    {
      id: "hiperqueratosis",
      icon: <ShieldCheck />,
    },
    {
      id: "onicoterapia",
      icon: <Activity />,
    },
    {
      id: "onicogrifosis",
      icon: <ScanSearch />,
    },
    {
      id: "onicocriptosis",
      icon: <ShieldCheck />,
    },
    {
      id: "talones",
      icon: <Footprints />,
    },
    {
      id: "microbiologia",
      icon: <Dna />,
    },
  ];

  const treatmentsSub = [
    {
      id: "hiperqueratosis",
      image: ImgQuiropodia5,
    },

    {
      id: "onicoterapia",
      image: ImgQuiropodia6,
    },

    {
      id: "onicogrifosis",
      image: ImgQuiropodia7,
    },

    {
      id: "onicocriptosis",
      image: ImgQuiropodia8,
    },

    {
      id: "talones",

      image: ImgQuiropodia11,
    },

    {
      id: "microbiologia",
      image: ImgQuiropodia9,
    },
  ];

  const treatmentsData = specializedServices.map((item) => ({
    id: item.id,
    icon: item.icon,
    title: t(`treatmentsQuiropodia.${item.id}.title`),
    category: t(`treatmentsQuiropodia.${item.id}.category`),
    description: t(`treatmentsQuiropodia.${item.id}.description`),
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
          title: t(`treatmentsSubQuiropodia.${base.id}.title`),
          description: t(`treatmentsSubQuiropodia.${base.id}.description`, {
            returnObjects: true,
          }) as string[],
        };
      })()
    : null;

  return (
    <>
      <Hero
        backgroundImage={PodologiaQuiopodologia}
        title={t("quiropodiaTheme.title")}
        subtitle={t("quiropodiaTheme.subtitle")}
        description={t("quiropodiaTheme.description")}
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
              title={t("oterhSubTitle.quriopodia")}
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
      <ContaienrFirst $backgroundImage={ImgQuipodiaDestail}>
        <Eyebrow>{t("quiropodiaSection.eyebrow")}</Eyebrow>

        <Title>{t("quiropodiaSection.title")}</Title>

        <Description>{t("quiropodiaSection.description")}</Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};

export default Quipodologia;
