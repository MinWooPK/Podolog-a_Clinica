import React from "react";
import {
  Title,
  Description,
  Eyebrow,
  ContaienrFirst,
} from "./DismorfiaAsimetria.styles";
import ImgDismorfiaAsimetria from "@assets/img/DismorfiaAsimetria.jpeg";
import ImgDismorfiaAsimetria2 from "@assets/img/DismorfiaAsimetria.jpeg";
import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { Brain, Users, RefreshCcw, Heart } from "lucide-react";

const psychoCorporalIntegration = [
  {
    title: "Análisis de la Expresión Corporal",
    category: "Psicocorporal",
    description:
      "Identificamos cómo las asimetrías y tensiones crónicas se vinculan a patrones de miedo, evitación y mecanismos de defensa. El cuerpo se interpreta como una expresión funcional de la historia biomecánica y emocional.",
    icon: <Brain />,
  },
  {
    title: "Sinergia Clínica y Psicoterapéutica",
    category: "Interdisciplinar",
    description:
      "Colaboramos con psicólogos y psicoanalistas para integrar el abordaje psíquico con la lectura objetiva de las manifestaciones físicas de la dismorfia o asimetría corporal.",
    icon: <Users />,
  },
  {
    title: "Reeducación y Autoconciencia",
    category: "Reeducación",
    description:
      "La corrección biomecánica crea nuevas oportunidades de conciencia corporal, facilitando procesos terapéuticos con menor resistencia física y mayor integración funcional.",
    icon: <RefreshCcw />,
  },
  {
    title: "El Cuerpo como Soporte del Cambio",
    category: "Integración",
    description:
      "Aceptar la estructura corporal como base del cambio permite habitar el cuerpo de forma más equilibrada, favoreciendo la estabilidad física y emocional en el proceso evolutivo.",
    icon: <Heart />,
  },
];

const DismorfiaAsimetria: React.FC = () => {
  return (
    <>
      <Hero
        backgroundImage={ImgDismorfiaAsimetria}
        title="Dismorfias y Asimetrías
"
        subtitle="La Huella de tu Historia en el Cuerpo"
        description={
          <>
            Entendemos la estructura física como el registro vivo de tu
            biografía. Las variaciones en la forma{" "}
            <strong> (dismorfias)</strong>y las diferencias de equilibrio{" "}
            <strong>(asimetrías)</strong> son adaptaciones funcionales que el
            organismo desarrolla para gestionar su relación con el entorno y sus
            propias vivencias.
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
        title="Un puente entre la estructura y la psique

"
        items={psychoCorporalIntegration}
      />

      <ContaienrFirst backgroundImage={ImgDismorfiaAsimetria2}>
        <Eyebrow>Tu estructura cuenta una historia</Eyebrow>
        <Title> analizamos cada asimetría como una adaptación vital</Title>

        <Description>
          La capacidad de adaptación biológica ante asimetrías extremas
          fundamenta nuestra metodología. Analizamos procesos de recuperación
          reales para priorizar la totalidad de la persona, evitando el análisis
          aislado del segmento dañado.
        </Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};
export default DismorfiaAsimetria;
