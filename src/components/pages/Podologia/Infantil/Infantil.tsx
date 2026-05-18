import React from "react";
import { Title, Description, Eyebrow, ContaienrFirst } from "./Infantil.styles";
import ImgPodoLogiaDeportiva from "@assets/img/PodologiaDeportiva.jpg";
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

const specializedServices = [
  {
    title: "Evaluación de la Maduración Ósea",
    category: "Desarrollo",
    description:
      "Seguimiento de la aparición y consolidación de los centros de osificación y las placas de crecimiento.",
    icon: <Footprints />,
  },
  {
    title: "Análisis de la Marcha y el Gesto",
    category: "Biomecánica",
    description:
      "Diagnóstico de variantes como pies planos, marcha de puntillas y alteraciones rotacionales y torsionales de los miembros inferiores (caminar con los pies hacia dentro).",
    icon: <Activity />,
  },
  {
    title: "Perfil Genético de Maduración Ósea (Synlab)",
    category: "Genética",
    description:
      "Estudio de marcadores de ADN (VDR, colágeno) para optimizar la salud articular y ósea desde el interior.",
    icon: <Dna />,
  },
  {
    title: "Tratamiento de Patologías del Desarrollo",
    category: "Clínico",
    description:
      "Abordaje especializado de la enfermedad de Sever, uñas encarnadas infantiles y papilomas.",
    icon: <ShieldCheck />,
  },
  {
    title: "Tratamiento No Invasivo",
    category: "Terapia",
    description:
      "Priorizamos ejercicios de estimulación y, solo si es estrictamente necesario por la maduración ósea, diseñamos soportes plantares que guíen, pero no limiten, el movimiento natural.",
    icon: <ScanSearch />,
  },
  {
    title: "Asesoramiento en Calzado y Ergonomía",
    category: "Prevención",
    description:
      "Recomendaciones basadas en la fase evolutiva y la ontogenia del pie para permitir un desarrollo funcional y saludable.",
    icon: <Footprints />,
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
  return (
    <>
      <Hero
        backgroundImage={PodologiaInfantil}
        title="Podología Infantil"
        subtitle="Cuidando el crecimiento desde la base"
        description={
          <>
            El pie del niño no es una versión pequeña del pie del adulto; es un
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

      <WhatWeTreat id="what-we-treat" items={specializedServices} />

      <ReviewHome />
    </>
  );
};

export default Infantil;
