import React from "react";
import { useState } from "react";

import {
  Title,
  Description,
  Eyebrow,
  ContaienrFirst,
} from "./Biometria.styles";
import PodologiaBiometria from "@assets/img/PodologiaBiometria.jpg";
import PodologiaBiometria2 from "@assets/img/PodologiaBiometria2.png";

import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";

import {
  Activity,
  Footprints,
  ScanSearch,
  AlertTriangle,
  Camera,
  Footprints as Shoe,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import TreatmentSections from "@organisms/TreatmentSections/TreatmentSections";

const specializedServices = [
  {
    id: "exploracion-camilla",
    title: "Exploración en Camilla",
    category: "Clínico",
    description:
      "Evaluación del rango articular y balance muscular para detectar bloqueos o compensaciones en el pie y miembros inferiores.",
    icon: <Activity />,
  },

  {
    id: "huella-plantar",
    title: "Estudio de Huella Plantar y Presiones",
    category: "Biomecánica",
    description:
      "Análisis estático mediante plataforma de presiones para estudiar la morfología del pie y la distribución de cargas.",
    icon: <Footprints />,
  },

  {
    id: "analisis-marcha-dinamico",
    title: "Análisis de la Marcha",
    category: "Biomecánica",
    description:
      "Observación del ciclo de marcha para identificar alteraciones en las fases de contacto, apoyo y propulsión.",
    icon: <Activity />,
  },

  {
    id: "calzado-ergonomia",
    title: "Valoración del Calzado y Ergonomía",
    category: "Prevención",
    description:
      "Análisis del desgaste del calzado para comprender su relación con la biomecánica del paciente.",
    icon: <Shoe />,
  },

  {
    id: "diagnostico-mecanico",
    title: "Diagnóstico de Patologías Mecánicas",
    category: "Clínico",
    description:
      "Identificación del origen de fascitis, tendinopatías, metatarsalgias y sobrecargas musculares recurrentes.",
    icon: <AlertTriangle />,
  },

  {
    id: "analisis-3d",
    title: "Análisis del Gesto en 3D (Kinect)",
    category: "Tecnología",
    description:
      "Digitalización del gesto motor mediante captura 3D para analizar la cadena cinética con precisión biomecánica.",
    icon: <ScanSearch />,
  },
];

const treatmentsSub = [
  {
    id: "exploracion-camilla",
    title: "Exploración en Camilla",
    description: [
      "Evaluación del rango articular y balance muscular.",
      "Detección de bloqueos y compensaciones en pie y miembros inferiores.",
      "Análisis funcional en posición de reposo.",
      "Valoración de movilidad global del sistema musculoesquelético.",
    ],
    image: "https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg",
    // camilla clínica / exploración fisioterapia
  },

  {
    id: "huella-plantar",
    title: "Estudio de Huella Plantar y Presiones",
    description: [
      "Análisis estático mediante plataforma de presiones.",
      "Estudio de la morfología del pie.",
      "Distribución de cargas en la base de sustentación.",
      "Detección de desequilibrios posturales.",
    ],
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg",
    // plataforma presión / análisis pie
  },

  {
    id: "analisis-marcha-dinamico",
    title: "Análisis Dinámico de la Marcha",
    description: [
      "Captura de movimiento durante la marcha.",
      "Estudio de fases: contacto, apoyo y propulsión.",
      "Identificación de alteraciones biomecánicas.",
      "Evaluación del gesto funcional del pie.",
    ],
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
    // análisis marcha / caminar / laboratorio
  },

  {
    id: "calzado-ergonomia",
    title: "Valoración de Calzado y Ergonomía",
    description: [
      "Análisis del desgaste del calzado habitual.",
      "Relación entre anatomía y superficie de apoyo.",
      "Evaluación del impacto del calzado en la pisada.",
      "Detección de patrones de sobrecarga.",
    ],
    image: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg",
    // zapatillas / calzado deportivo detalle
  },

  {
    id: "diagnostico-mecanico",
    title: "Diagnóstico de Patologías Mecánicas",
    description: [
      "Identificación del origen de fascitis y tendinopatías.",
      "Detección de metatarsalgias y sobrecargas musculares.",
      "Análisis de disfunciones biomecánicas.",
      "Estudio del origen real del dolor.",
    ],
    image: "https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg",
    // pie dolor / clínica / estudio médico
  },

  {
    id: "analisis-3d",
    title: "Análisis del Gesto con Tecnología 3D (Kinect)",
    description: [
      "Captura de movimiento en 3D del gesto motor.",
      "Digitalización de la cadena cinética completa.",
      "Análisis articular de alta precisión.",
      "Estudio biomecánico junto a tecnología avanzada.",
    ],
    image: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg",
    // escaneo biomecánico / tecnología movimiento
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

const Biometria: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(
    null,
  );

  const selectedTreatmentData = treatmentsSub.find(
    (item) => item.id === selectedTreatment,
  );

  return (
    <>
      <Hero
        backgroundImage={PodologiaBiometria}
        title="Antropometría Integral
"
        subtitle="Evaluación integral de cargas y postura."
        description={
          <>
            En nuestra consulta, el estudio de las proporciones abarca la
            totalidad de tu estructura. Realizamos un
            <strong> perfil antropométrico completo </strong>para entender la
            arquitectura integral de tu cuerpo. Como estructura biológica, el
            pie funciona como el receptor final de todas las cargas, palancas y
            desequilibrios que ocurren en los segmentos superiores.
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
              id="what-we-treat"
              title="¿Qué incluye nuestro análisis?"
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
      <ContaienrFirst $backgroundImage={PodologiaBiometria2}>
        <Eyebrow>Análisis estructural integral</Eyebrow>
        <Title>¿Por qué es necesario este nivel de detalle?</Title>

        <Description>
          Muchas patologías del pie tienen su origen en la rodilla, la cadera o
          incluso la columna. Al realizar un perfil antropométrico completo, no
          solo tratamos el síntoma en el pie, sino que identificamos la causa en
          la estructura global de tu organismo.
        </Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};

export default Biometria;
