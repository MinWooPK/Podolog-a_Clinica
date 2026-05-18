import React from "react";
import { Description, Eyebrow, ContaienrFirst } from "./Plantilla.styles";
import PodologiaPlantilla from "@assets/img/PodologiaPlantilla.jpeg";
import PodologiaPlantilla2 from "@assets/img/PodologiaPlantilla2.jpeg";

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
    title: "Fabricación mediante Impresión 3D",
    category: "Tecnología",
    description:
      "Utilizamos procesos de fabricación aditiva de alta precisión. Esta tecnología nos permite graduar la rigidez y la flexibilidad de forma selectiva en diferentes zonas de la plantilla, logrando un control biomecánico avanzado.",
    icon: <ScanSearch />,
  },
  {
    title: "TPU de Alto Rendimiento",
    category: "Materiales",
    description:
      "El TPU (Poliuretano Termoplástico) combina amortiguación, memoria elástica y durabilidad. Es la base ideal para tratamientos que requieren precisión y confort prolongado.",
    icon: <ShieldCheck />,
  },
  {
    title: "Diseño Digital de Estructuras",
    category: "Ingeniería",
    description:
      "Aplicamos diseño digital avanzado para optimizar estructuras internas, reduciendo peso sin comprometer resistencia y mejorando la adaptación al calzado.",
    icon: <Activity />,
  },
  {
    title: "Versatilidad de Densidades",
    category: "Personalización",
    description:
      "Disponemos de diferentes materiales (EVAs y resinas) para adaptar la descarga de presión según la patología y el nivel de soporte requerido.",
    icon: <Footprints />,
  },
  {
    title: "Acabados Técnicos Biocompatibles",
    category: "Confort",
    description:
      "Utilizamos forros transpirables con tratamientos bactericidas que mejoran la higiene, el confort térmico y la salud dérmica del pie.",
    icon: <Dna />,
  },
  {
    title: "Órtesis Digitales y Vendajes Correctivos",
    category: "Corrección",
    description:
      "Fabricamos órtesis de silicona a medida y aplicamos vendajes correctivos para alinear los dedos, reducir presión y mejorar la función biomecánica.",
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

const Plantilla: React.FC = () => {
  return (
    <>
      <Hero
        backgroundImage={PodologiaPlantilla}
        title="Soportes Plantares Personalizados y Ortesis Digitales"
        subtitle="Tratamiento funcional de la pisada"
        description={
          <>
            Tras un análisis biomecánico exhaustivo, diseñamos soluciones
            totalmente personalizadas. Nuestro objetivo es trasladar los
            resultados del estudio a soportes plantares y dispositivos
            correctivos que equilibren las presiones y optimicen la función del
            pie, adaptándonos tanto a la actividad diaria como al gesto
            deportivo de alto rendimiento.
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
        title="Tecnología y Materiales de Vanguardia:



?
?"
      />
      <ContaienrFirst $backgroundImage={PodologiaPlantilla2}>
        <Eyebrow>Biomecánica aplicada</Eyebrow>{" "}
        {/* <Title>¿Por qué es necesario este nivel de detalle?</Title> */}
        <Description>
          La combinación del diseño digital y el uso de polímeros avanzados como
          el TPU nos permite ofrecer un soporte plantar dinámico que respeta la
          biología del movimiento, proporcionando estabilidad donde se necesita
          y flexibilidad donde el pie la demanda.
        </Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};

export default Plantilla;
