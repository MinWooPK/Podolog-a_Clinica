import React from "react";
import { useState } from "react";

import { Title, Description, Eyebrow, ContaienrFirst } from "./Ortonxia.styles";
import PdologiaOrtonixia from "@assets/img/PdologiaOrtonixia.jpg";
import PdologiaOrtonixia2 from "@assets/img/PdologiaOrtonixia2.jpeg";
import ortonixia1 from "@assets/img/ortonixia1.jpeg";
import ortonixia2 from "@assets/img/ortonixia2.jpeg";
import ortonixia4 from "@assets/img/ortonixia4.jpeg";
import ortonixia6 from "@assets/img/ortonixia6.jpeg";

import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { Activity, Footprints, ScanSearch, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import TreatmentSections from "@organisms/TreatmentSections/TreatmentSections";
import { useTranslation } from "react-i18next";

const specializedServices = [
  {
    id: "brackets-ortonixia",
    title: "Brackets de Composite y Titanio",
    category: "Terapia Ungueal",
    description:
      "Utilizamos composite marmolado (material de alta resistencia usado en odontología) para crear guías y aplicar tensores de titanio. Estos dispositivos ejercen una tracción controlada que ensancha la uña desde su base, obligándola a mantener un crecimiento plano y funcional.",
    icon: <Activity />,
  },
  {
    id: "reconstruccion-ungueal",
    title: "Reconstrucción de la Lámina Ungueal",
    category: "Reparación",
    description:
      "En casos de uña rota o ausente, reconstruimos la estructura para proteger el lecho y evitar que el tejido blando ocupe el espacio, asegurando que la uña nueva tenga el camino libre para crecer.",
    icon: <ShieldCheck />,
  },
  {
    id: "tamponado",
    title: "Tamponade y Guías Laterales",
    category: "Corrección",
    description:
      "Aplicamos guías de gasa algodonada en los canales de la uña para evitar mecánicamente que el borde se clave en la piel mientras dura el tratamiento.",
    icon: <Footprints />,
  },
  {
    id: "prevencion-recidivas",
    title: "Prevención de Recidivas (Kinesiotape)",
    category: "Prevención",
    description:
      "Te enseñamos a realizar vendajes neuromusculares específicos para que, según tu caso, puedas desplazar el tejido del pulpejo (la 'carne' del dedo) y evitar que se interponga en el camino de la uña al crecer.",
    icon: <ScanSearch />,
  },
];

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
      image: ortonixia6,
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
