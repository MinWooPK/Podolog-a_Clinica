import React from "react";
import { useState } from "react";
import PodologiaQuiopodologia from "@assets/img/PodologiaQuiopodologia.jpeg";
import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import ImgQuipodiaDestail from "@assets/img/ImgQuipodiaDestail.jpg";
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
import {
  ContaienrFirst,
  Description,
  Eyebrow,
  Title,
} from "./Quipodologia.style";

const specializedServices = [
  {
    id: "hiperqueratosis",
    title: "Tratamiento de Hiperqueratosis (Durezas)",
    category: "Quiropodología",
    description:
      "Eliminación indolora de durezas y callosidades (helomas) mediante técnicas de desbridamiento profesional, devolviendo la elasticidad natural a la piel.",
    icon: <ShieldCheck />,
  },
  {
    id: "onicoterapia",
    title: "Onicoterapia (Cuidado de las uñas)",
    category: "Quiropodología",
    description:
      "Corte y fresado terapéutico de las uñas para evitar procesos inflamatorios y asegurar un crecimiento guiado y saludable.",
    icon: <Activity />,
  },
  {
    id: "onicogrifosis",
    title: "Tratamiento de la Onicogrifosis",
    category: "Patología Ungueal",
    description:
      "Abordaje especializado de uñas engrosadas o distróficas para recuperar su funcionalidad y confort.",
    icon: <ScanSearch />,
  },
  {
    id: "onicocriptosis",
    title: "Onicocriptosis (Uña encarnada)",
    category: "Urgencias",
    description:
      "Tratamiento conservador para eliminar el dolor y prevenir la infección. Disponemos de anestesia local técnica en caso de ser necesario para garantizar un procedimiento totalmente indoloro y confortable.",
    icon: <ShieldCheck />,
  },
  {
    id: "talones",
    title: "Fresado de Talones y Rehidratación",
    category: "Dermatología",
    description:
      "Tratamiento específico para talones agrietados, restaurando la barrera lipídica de la piel para evitar puertas de entrada a infecciones.",
    icon: <Footprints />,
  },
  {
    id: "microbiologia",
    title: "Diagnóstico Microbiológico (Hongos y Bacterias)",
    category: "Diagnóstico",
    description:
      "Toma de muestras y cultivos en colaboración con laboratorios especializados para asegurar un tratamiento de precisión basado en la evidencia.",
    icon: <Dna />,
  },
  // {
  //   id: "microbiologia",
  //   title: "Atención Geriátrica y Seguridad Clínica",
  //   category: "Prevención",
  //   description:
  //     "Cuidado preventivo para pacientes con movilidad reducida o piel atrófica. Garantizamos una asepsia total mediante el uso de material estéril procesado en autoclave (Clase B), eliminando los riesgos de la manipulación no profesional.",
  //   icon: <ShieldCheck />,
  // },
];
const treatmentsSub = [
  {
    id: "hiperqueratosis",
    title: "Tratamiento de Hiperqueratosis (Durezas)",
    description: [
      "Eliminación de acumulaciones de queratina para restaurar la salud de la piel.",
      "Desbridamiento profesional de durezas y callosidades (helomas).",
      "Técnicas indoloras para eliminar puntos de presión.",
      "Análisis de hidratación y lípidos de la piel.",
    ],
    image: "https://images.pexels.com/photos/3985325/pexels-photo-3985325.jpeg",
    // 👉 tratamiento de pies / durezas (sin cara)
  },

  {
    id: "onicoterapia",
    title: "Onicoterapia (Cuidado de las uñas)",
    description: [
      "Tratamiento terapéutico de la placa ungueal.",
      "Corte clínico y fresado técnico de las uñas.",
      "Limpieza de canales ungueales.",
      "Prevención de onicocriptosis.",
      "Guía del crecimiento ungueal.",
    ],
    image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg",
    // 👉 cuidado de uñas / podología (sin cara)
  },

  {
    id: "onicogrifosis",
    title: "Tratamiento de la Onicogrifosis",
    description: [
      "Abordaje de uñas engrosadas o deformadas.",
      "Rebaje terapéutico de la placa ungueal.",
      "Recuperación de la comodidad al calzado.",
      "Control de distrofias por traumatismos o edad.",
      "Mejora estética y funcional.",
    ],
    image: "https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg",
    // 👉 uñas engrosadas / tratamiento clínico
  },

  {
    id: "onicocriptosis",
    title: "Onicocriptosis (Uña encarnada)",
    description: [
      "Tratamiento del dolor en canales ungueales.",
      "Extracción conservadora de espículas.",
      "Control de inflamación e infección.",
      "Procedimientos indoloros cuando es necesario.",
      "Prevención de recidivas.",
    ],
    image: "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg",
    // 👉 tratamiento de uña encarnada (sin cara)
  },

  {
    id: "talones",
    title: "Fresado de Talones y Rehidratación",
    description: [
      "Restauración de la barrera lipídica de la piel.",
      "Pulido de talones agrietados.",
      "Hidratación profunda profesional.",
      "Sellado de grietas.",
      "Prevención de infecciones.",
    ],
    image: "https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg",
    // 👉 talones / cuidado piel pie (sin cara)
  },

  {
    id: "microbiologia",
    title: "Diagnóstico Microbiológico (Hongos y Bacterias)",
    description: [
      "Toma de muestras para diagnóstico clínico.",
      "Cultivos para identificar hongos o bacterias.",
      "Colaboración con laboratorios especializados.",
      "Diagnóstico diferencial de patologías ungueales.",
      "Tratamiento basado en evidencia científica.",
    ],
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",
    // 👉 laboratorio / análisis microbiológico
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

const Quipodologia: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(
    null,
  );

  const selectedTreatmentData = treatmentsSub.find(
    (item) => item.id === selectedTreatment,
  );

  return (
    <>
      <Hero
        backgroundImage={PodologiaQuiopodologia}
        title="Quiropodología"
        subtitle=" Salud y mantenimiento del pie"
        description={
          <>
            La quiropodología es la base del cuidado podológico. No se trata de
            un tratamiento estético, sino de una intervención clínica orientada
            a eliminar las dolencias cutáneas, prevenir infecciones y detectar
            de forma precoz patologías sistémicas que se manifiestan en la piel
            y las uñas.
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
              title="¿Qué incluye nuestro servicio de quiropodología?"
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
      <ContaienrFirst $backgroundImage={ImgQuipodiaDestail}>
        <Eyebrow>Quiropodología clínica avanzada</Eyebrow>

        <Title>Tratamientos especializados para la salud del pie</Title>

        <Description>
          Aplicamos técnicas clínicas de precisión en quiropodología y
          dermatología podológica para garantizar la salud y confort absoluto de
          tus pies.
        </Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};

export default Quipodologia;
