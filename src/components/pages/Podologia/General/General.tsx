import { useState } from "react";
import { useTranslation } from "react-i18next";

import ImgPodoLogiaGeneral from "@assets/img/PodologiaGeneral.jpg";
import ImgPodoLogiaGeneral2 from "@assets/img/PodoLogiaGeneral2.jpg";
import ImgPodoLogiaGeneral3 from "@assets/img/PodoLogiaGeneral3.jpg";
import ImgPodoLogiaGeneral4 from "@assets/img/PodoLogiaGeneral4.jpg";
import ImgPodoLogiaGeneral5 from "@assets/img/PodoLogiaGeneral5.jpg";
import ImgPodoLogiaGeneral6 from "@assets/img/PodologiaGeneral8.jpg";
import ImgPodoLogiaGeneral7 from "@assets/img/PodologiaGeneral7.jpeg";
import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { Activity, HeartPulse, Scissors, Shield } from "lucide-react";
import TreatmentSections from "@organisms/TreatmentSections/TreatmentSections";
import { AnimatePresence, motion } from "framer-motion";

//  SCROLL SUAVE
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const General: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(
    null,
  );

  const { t } = useTranslation();

  const treatments = [
    {
      id: "exploracion",
      icon: <Activity />,
    },
    {
      id: "infecciones",
      icon: <Shield />,
    },
    {
      id: "quiropodologia",
      icon: <Scissors />,
    },
    {
      id: "ungueal",
      icon: <HeartPulse />,
    },
    {
      id: "piel",
      icon: <Activity />,
    },
    {
      id: "educacion",
      icon: <Shield />,
    },
  ];

  const treatmentsSub = [
    {
      id: "exploracion",
      image: ImgPodoLogiaGeneral2,
    },
    {
      id: "infecciones",
      image: ImgPodoLogiaGeneral7,
    },
    {
      id: "quiropodologia",
      image: ImgPodoLogiaGeneral4,
    },
    {
      id: "ungueal",
      image: ImgPodoLogiaGeneral5,
    },
    {
      id: "piel",
      image: ImgPodoLogiaGeneral6,
    },
    {
      id: "educacion",
      image: ImgPodoLogiaGeneral3,
    },
  ];

  const treatmentsData = treatments.map((item) => ({
    id: item.id,
    icon: item.icon,
    title: t(`treatmentsPodologia.${item.id}.title`),
    category: t(`treatmentsPodologia.${item.id}.category`),
    description: t(`treatmentsPodologia.${item.id}.description`),
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
          title: t(`treatmentsPodologiaSpec.${base.id}.title`),
          description: t(`treatmentsPodologiaSpec.${base.id}.description`, {
            returnObjects: true,
          }) as string[],
        };
      })()
    : null;

  return (
    <>
      <Hero
        backgroundImage={ImgPodoLogiaGeneral}
        title={t("general.hero.title")}
        subtitle={t("general.hero.subtitle")}
        description={t("general.hero.description")}
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
              title={t("oterhSubTitle.general")}
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

      <ReviewHome />
    </>
  );
};

export default General;
