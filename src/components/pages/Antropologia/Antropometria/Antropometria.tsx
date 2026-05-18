import React from "react";
import {
  Title,
  Description,
  Eyebrow,
  ContaienrFirst,
} from "./Antropometria.styles";
import ImgAntropometria from "@assets/img/Antropometria.png";
import ImgAntropometria2 from "@assets/img/Antropometria2.png";
import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { Bone, Droplets, Ruler, User } from "lucide-react";

const anthropometryProcess = [
  {
    title: "Diámetros Óseos",
    category: "Estructura",
    description:
      "Medimos la anchura de estructuras óseas como muñeca, fémur o tobillo. Determinamos la robustez esquelética. Evaluamos la capacidad de carga del sistema corporal.",
    icon: <Bone />,
  },
  {
    title: "Pliegues Cutáneos",
    category: "Composición",
    description:
      "Evaluamos el tejido adiposo en puntos estratégicos. Comprendemos la distribución de la masa grasa. Analizamos su impacto metabólico y mecánico.",
    icon: <Droplets />,
  },
  {
    title: "Perímetros Corporales",
    category: "Volumen",
    description:
      "Analizamos los contornos musculares en extremidades y tronco. Detectamos desequilibrios funcionales en la marcha.",
    icon: <Ruler />,
  },
  {
    title: "Somatotipo",
    category: "Biotipo",
    description:
      "Integramos todos los datos antropométricos. Definimos tu biotipo corporal. Personalizamos el tratamiento biomecánico.",
    icon: <User />,
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

const Antropometria: React.FC = () => {
  return (
    <>
      <Hero
        backgroundImage={ImgAntropometria}
        title="Antropometría Integral"
        subtitle="Evaluación completa de la composición y equilibrio corporal"
        description={
          <>
            En nuestra consulta, el estudio de las proporciones abarca la
            totalidad de tu estructura. Realizamos un{" "}
            <strong>perfil antropométrico completo </strong>para entender la
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

      <WhatWeTreat id="what-we-treat" items={anthropometryProcess} />

      <ContaienrFirst backgroundImage={ImgAntropometria2}>
        <Eyebrow>¿Por qué es necesario este nivel de detalle?</Eyebrow>

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
export default Antropometria;
