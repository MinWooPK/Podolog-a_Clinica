import React from "react";
import { useState } from "react";

import { Title, Description, Eyebrow, ContaienrFirst } from "./Ortonxia.styles";
import PdologiaOrtonixia from "@assets/img/PdologiaOrtonixia.jpg";
import PdologiaOrtonixia2 from "@assets/img/PdologiaOrtonixia2.jpeg";

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

const treatmentsSub = [
  {
    id: "brackets-ortonixia",
    title: "Brackets de Composite y Titanio",
    description: [
      "Sistemas de ortonixia para corregir la curvatura ungueal.",
      "Tracción mecánica controlada para guiar el crecimiento.",
      "Ensanchamiento progresivo de la lámina ungueal.",
      "Corrección de la morfología de la uña.",
      "Prevención de uñas encarnadas.",
    ],
    image: "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg",
    // 👉 ortonixia / corrección uñas (sin cara)
  },

  {
    id: "reconstruccion-ungueal",
    title: "Reconstrucción de la Lámina Ungueal",
    description: [
      "Restauración estética y funcional de uñas dañadas.",
      "Reconstrucción con materiales técnicos.",
      "Protección del lecho ungueal.",
      "Guía para el crecimiento correcto de la uña.",
      "Recuperación de la barrera protectora natural.",
    ],
    image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg",
    // 👉 reconstrucción uñas / podología estética (sin cara)
  },

  {
    id: "tamponado",
    title: "Tamponado y Guías Laterales",
    description: [
      "Separación mecánica entre uña y tejido blando.",
      "Colocación de gasas en canales ungueales.",
      "Reducción de presión e irritación inmediata.",
      "Protección durante el proceso de curación.",
      "Reeducación del crecimiento ungueal.",
    ],
    image: "https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg",
    // 👉 tratamiento pie / curas podológicas (sin cara)
  },

  {
    id: "prevencion-recidivas",
    title: "Prevención de Recidivas (Reeducación)",
    description: [
      "Formación en autocuidado del pie.",
      "Vendajes funcionales para evitar reincidencia.",
      "Reeducación del crecimiento ungueal.",
      "Protocolos personalizados preventivos.",
      "Educación sanitaria podológica.",
    ],
    image: "https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg",
    // 👉 consulta podológica / educación clínica (sin cara)
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
      image:
        "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg",
    },

    {
      id: "reconstruccion-ungueal",
      image:
        "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg",
    },

    {
      id: "tamponado",
      image:
        "https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg",
    },

    {
      id: "prevencion-recidivas",
      image:
        "https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg",
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
        <Eyebrow>{t("nailsSection.eyebrow")}</Eyebrow>

        <Title>{t("nailsSection.title")}</Title>

        <Description>{t("nailsSection.description")}</Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};

export default Nails;
