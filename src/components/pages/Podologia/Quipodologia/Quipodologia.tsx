import React from "react";
import { useState } from "react";
import PodologiaQuiopodologia from "@assets/img/PodologiaQuiopodologia.jpeg";
import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import ImgQuipodiaDestail from "@assets/img/ImgQuipodiaDestail.jpg";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { useTranslation } from "react-i18next";

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
      image:
        "https://images.pexels.com/photos/3985325/pexels-photo-3985325.jpeg",
    },

    {
      id: "onicoterapia",
      image:
        "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg",
    },

    {
      id: "onicogrifosis",
      image:
        "https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg",
    },

    {
      id: "onicocriptosis",
      image:
        "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg",
    },

    {
      id: "talones",

      image:
        "https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg",
    },

    {
      id: "microbiologia",
      image:
        "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",
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

        <Title>{t("quiropodiaSection.title")}a</Title>

        <Description>{t("quiropodiaSection.description")}</Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};

export default Quipodologia;
