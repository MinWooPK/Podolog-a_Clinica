import React from "react";
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
  ShieldCheck,
  Dna,
} from "lucide-react";

const specializedServices = [
  {
    title: "Diámetros óseos",
    category: "Estructura",
    description:
      "Medimos la anchura de estructuras como muñeca, fémur o tobillo para determinar la robustez esquelética y capacidad de carga.",
    icon: <Activity />,
  },
  {
    title: "Pliegues cutáneos",
    category: "Composición corporal",
    description:
      "Evaluamos el tejido adiposo para comprender la distribución de la grasa y su impacto biomecánico en la pisada.",
    icon: <ShieldCheck />,
  },
  {
    title: "Perímetros corporales",
    category: "Biomecánica",
    description:
      "Analizamos la relación entre masa muscular y estructura ósea para detectar desequilibrios funcionales.",
    icon: <Footprints />,
  },
  {
    title: "Somatotipo",
    category: "Análisis global",
    description:
      "Integramos todos los datos para definir el biotipo corporal y personalizar el tratamiento biomecánico.",
    icon: <Dna />,
  },
];

const Biometria: React.FC = () => {
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
          href: "/servicios",
        }}
      />

      <WhatWeTreat
        items={specializedServices}
        title="¿Qué analizamos en un perfil antropométrico completo?

?
?"
      />
      <ContaienrFirst backgroundImage={PodologiaBiometria2}>
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
