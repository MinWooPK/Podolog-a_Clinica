import React from "react";
import { Title, Description, Eyebrow, ContaienrFirst } from "./Ortonxia.styles";
import PdologiaOrtonixia from "@assets/img/PdologiaOrtonixia.jpg";
import PdologiaOrtonixia2 from "@assets/img/PdologiaOrtonixia2.jpeg";

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
    title: "Brackets de Composite y Titanio",
    category: "Terapia Ungueal",
    description:
      "Utilizamos composite marmolado (material de alta resistencia usado en odontología) para crear guías y aplicar tensores de titanio. Estos dispositivos ejercen una tracción controlada que ensancha la uña desde su base, obligándola a mantener un crecimiento plano y funcional.",
    icon: <Activity />,
  },
  {
    title: "Reconstrucción de la Lámina Ungueal",
    category: "Reparación",
    description:
      "En casos de uña rota o ausente, reconstruimos la estructura para proteger el lecho y evitar que el tejido blando ocupe el espacio, asegurando que la uña nueva tenga el camino libre para crecer.",
    icon: <ShieldCheck />,
  },
  {
    title: "Tamponade y Guías Laterales",
    category: "Corrección",
    description:
      "Aplicamos guías de gasa algodonada en los canales de la uña para evitar mecánicamente que el borde se clave en la piel mientras dura el tratamiento.",
    icon: <Footprints />,
  },
  {
    title: "Prevención de Recidivas (Kinesiotape)",
    category: "Prevención",
    description:
      "Te enseñamos a realizar vendajes neuromusculares específicos para que, según tu caso, puedas desplazar el tejido del pulpejo (la 'carne' del dedo) y evitar que se interponga en el camino de la uña al crecer.",
    icon: <ScanSearch />,
  },
];

const Nails: React.FC = () => {
  return (
    <>
      <Hero
        backgroundImage={PdologiaOrtonixia}
        title="Ortonixia"
        subtitle="Reeducación y Reconstrucción Ungueal"
        description={
          <>
            La ortonixia es un tratamiento no invasivo que funciona como una
            "ortodoncia" para las uñas. Es la alternativa ideal para corregir
            uñas con curvatura excesiva, evitar que se claven y recuperar la
            anatomía tras una rotura o traumatismo.
          </>
        }
        primaryButton={{
          label: "Reservar cita",
          href: "/contacto",
        }}
        secondaryButton={{
          label: "Ver servicios",
          href: "/servicios",
        }}
      />

      <WhatWeTreat
        items={specializedServices}
        title="¿En qué consiste nuestra técnica?
?
?"
      />
      <ContaienrFirst backgroundImage={PdologiaOrtonixia2}>
        <Eyebrow>Ortónica y corrección ungueal</Eyebrow>

        <Title>Corrección sin cirugía</Title>

        <Description>
          No siempre es necesario eliminar el tejido; a veces, solo necesitamos
          guiar su crecimiento. La ortonixia respeta la integridad de la uña,
          aplicando fuerzas físicas controladas para restaurar su anatomía
          funcional y evitar que vuelva a clavarse.
        </Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};

export default Nails;
