import React from "react";
import PodologiaQuiopodologia from "@assets/img/PodologiaQuiopodologia.jpeg";
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

const specializedServices = [
  {
    title: "Tratamiento de Hiperqueratosis (Durezas)",
    category: "Quiropodología",
    description:
      "Eliminación indolora de durezas y callosidades (helomas) mediante técnicas de desbridamiento profesional, devolviendo la elasticidad natural a la piel.",
    icon: <ShieldCheck />,
  },
  {
    title: "Onicoterapia (Cuidado de las uñas)",
    category: "Quiropodología",
    description:
      "Corte y fresado terapéutico de las uñas para evitar procesos inflamatorios y asegurar un crecimiento guiado y saludable.",
    icon: <Activity />,
  },
  {
    title: "Tratamiento de la Onicogrifosis",
    category: "Patología Ungueal",
    description:
      "Abordaje especializado de uñas engrosadas o distróficas para recuperar su funcionalidad y confort.",
    icon: <ScanSearch />,
  },
  {
    title: "Onicocriptosis (Uña encarnada)",
    category: "Urgencias",
    description:
      "Tratamiento conservador para eliminar el dolor y prevenir la infección. Disponemos de anestesia local técnica en caso de ser necesario para garantizar un procedimiento totalmente indoloro y confortable.",
    icon: <ShieldCheck />,
  },
  {
    title: "Fresado de Talones y Rehidratación",
    category: "Dermatología",
    description:
      "Tratamiento específico para talones agrietados, restaurando la barrera lipídica de la piel para evitar puertas de entrada a infecciones.",
    icon: <Footprints />,
  },
  {
    title: "Diagnóstico Microbiológico (Hongos y Bacterias)",
    category: "Diagnóstico",
    description:
      "Toma de muestras y cultivos en colaboración con laboratorios especializados para asegurar un tratamiento de precisión basado en la evidencia.",
    icon: <Dna />,
  },
  {
    title: "Atención Geriátrica y Seguridad Clínica",
    category: "Prevención",
    description:
      "Cuidado preventivo para pacientes con movilidad reducida o piel atrófica. Garantizamos una asepsia total mediante el uso de material estéril procesado en autoclave (Clase B), eliminando los riesgos de la manipulación no profesional.",
    icon: <ShieldCheck />,
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

      <WhatWeTreat
        id="what-we-treat"
        items={specializedServices}
        title="¿Qué incluye nuestro servicio de quiropodología?"
      />

      <ReviewHome />
    </>
  );
};

export default Quipodologia;
