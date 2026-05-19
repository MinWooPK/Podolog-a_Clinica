import React from "react";
import { useState } from "react";

import Infantil2 from "@assets/img/Infantil2.jpeg";
import Infantil3 from "@assets/img/Infantil3.jpeg";
import Infantil4 from "@assets/img/Infantil4.jpeg";
import Infantil5 from "@assets/img/Infantil5.jpeg";
import Infantil6 from "@assets/img/infantil7.jpg";
import Infantil7 from "@assets/img/infantil6.jpg";
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

const specializedServices = [
  {
    id: "maduracion-osea",
    title: "Evaluación de la Maduración Ósea",
    category: "Desarrollo",
    description:
      "Seguimiento de la aparición y consolidación de los centros de osificación y las placas de crecimiento.",
    icon: <Footprints />,
  },
  {
    id: "analisis-marcha",
    title: "Análisis de la Marcha y el Gesto",
    category: "Biomecánica",
    description:
      "Diagnóstico de variantes como pies planos, marcha de puntillas y alteraciones rotacionales y torsionales de los miembros inferiores (caminar con los pies hacia dentro).",
    icon: <Activity />,
  },
  {
    id: "genetica",
    title: "Perfil Genético de Maduración Ósea (Synlab)",
    category: "Genética",
    description:
      "Estudio de marcadores de ADN (VDR, colágeno) para optimizar la salud articular y ósea desde el interior.",
    icon: <Dna />,
  },
  {
    id: "patologias-infantiles",
    title: "Tratamiento de Patologías del Desarrollo",
    category: "Clínico",
    description:
      "Abordaje especializado de la enfermedad de Sever, uñas encarnadas infantiles y papilomas.",
    icon: <ShieldCheck />,
  },
  {
    id: "tratamiento-no-invasivo",
    title: "Tratamiento No Invasivo",
    category: "Terapia",
    description:
      "Priorizamos ejercicios de estimulación y, solo si es estrictamente necesario por la maduración ósea, diseñamos soportes plantares que guíen, pero no limiten, el movimiento natural.",
    icon: <ScanSearch />,
  },
  {
    id: "calzado-ergonomia",
    title: "Asesoramiento en Calzado y Ergonomía",
    category: "Prevención",
    description:
      "Recomendaciones basadas en la fase evolutiva y la ontogenia del pie para permitir un desarrollo funcional y saludable.",
    icon: <Footprints />,
  },
];
const treatmentsSub = [
  {
    id: "maduracion-osea",
    title: "Evaluación de la Maduración Ósea",
    description: [
      "Seguimiento exhaustivo del crecimiento para asegurar una correcta evolución del sistema musculoesquelético.",
      "Control de la aparición y consolidación de los centros de osificación.",
      "Seguimiento de las placas de crecimiento durante la infancia y adolescencia.",
      "Valoración de la alineación de los miembros inferiores en cada etapa evolutiva.",
      "Detección temprana de anomalías en el desarrollo óseo.",
    ],
    image: Infantil2,
  },
  {
    id: "analisis-marcha",
    title: "Análisis de la Marcha y el Gesto",
    description: [
      "Estudio funcional del movimiento para identificar y corregir variantes en la forma de caminar.",
      "Diagnóstico de pies planos o pies cavos infantiles.",
      "Valoración de la marcha de puntillas y alteraciones rotacionales.",
      "Estudio de torsiones tibiales y femorales.",
      "Análisis de la estabilidad y equilibrio durante la actividad física.",
    ],
    image: Infantil3,
  },
  {
    id: "genetica",
    title: "Perfil Genético de Maduración Ósea",
    description: [
      "Estudio de marcadores genéticos relacionados con el desarrollo articular.",
      "Identificación de predisposiciones en la salud musculoesquelética.",
      "Optimización de pautas preventivas basadas en el perfil del niño.",
      "Medicina de precisión aplicada al crecimiento.",
    ],
    image: Infantil4,
  },
  {
    id: "patologias-infantiles",
    title: "Trastornos del Desarrollo y Patologías",
    description: [
      "Tratamiento de enfermedad de Sever (dolor en el talón).",
      "Alteraciones del crecimiento óseo infantil.",
      "Patologías dérmicas adaptadas a la piel infantil.",
      "Manejo de uñas encarnadas y papilomas.",
    ],
    image: Infantil5,
  },
  {
    id: "tratamiento-no-invasivo",
    title: "Tratamiento No Invasivo",
    description: [
      "Ejercicios de estimulación y fortalecimiento muscular.",
      "Soportes plantares solo si es necesario.",
      "Fomento de la propiocepción y desarrollo motor.",
      "Tratamientos respetuosos con la maduración natural del pie.",
    ],
    image: Infantil6,
  },
  {
    id: "calzado-ergonomia",
    title: "Asesoramiento en Calzado y Ergonomía",
    description: [
      "Elección del calzado según la etapa evolutiva del niño.",
      "Calzado respetuoso y funcional.",
      "Análisis de ergonomía en actividades diarias y escolares.",
      "Educación a padres sobre desarrollo del pie.",
    ],
    image: Infantil7,
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

const Infantil: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(
    null,
  );

  const selectedTreatmentData = treatmentsSub.find(
    (item) => item.id === selectedTreatment,
  );

  return (
    <>
      <Hero
        backgroundImage={PodologiaInfantil}
        title="Podología Infantil"
        subtitle="Cuidando el crecimiento desde la base"
        description={
          <>
            El pie del niño no es una versión pequeña del pie del adulto; es un{" "}
            <strong>órgano en pleno desarrollo</strong>. Como especialista con
            formación avanzada en biología, entiendo que cada etapa del ciclo
            vital tiene sus propios tiempos y necesidades.
            <br />
            <strong>Respetamos la ontogenia del pie</strong>, sabiendo que la
            transición de los moldes cartilaginosos hacia una estructura ósea
            consolidada depende de una cronología madurativa específica que
            debemos monitorizar.
          </>
        }
        primaryButton={{
          label: "Reservar cita",
          href: "/contacto",
        }}
        secondaryButton={{
          label: "Ver servicios",
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
              title="Desarrollo y salud del pie infantil"
              id="what-we-treat"
              items={specializedServices}
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
              items={[selectedTreatmentData!]}
              showBackButton={true}
              onBack={() => setSelectedTreatment(null)}
            />{" "}
          </motion.div>
        )}
      </AnimatePresence>
      <ContaienrFirst $backgroundImage={ImgPodologiaInfantilDetail}>
        <Eyebrow>Podología infantil avanzada</Eyebrow>

        <Title>Crecimiento, prevención y desarrollo funcional</Title>
        <Description>
          Acompañamos el crecimiento de los más pequeños mediante una podología
          preventiva y tecnológica, asegurando un desarrollo saludable y
          funcional de su pisada.
        </Description>
      </ContaienrFirst>
      <ReviewHome />
    </>
  );
};

export default Infantil;
