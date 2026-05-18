import React from "react";
import {
  Title,
  Description,
  Eyebrow,
  ContaienrFirst,
} from "./Fotogrametria.styles";
import ImgFotogrametria from "@assets/img/Fotogrametria.jpeg";
import ImgAntropometria2 from "@assets/img/Antropometria2.png";
import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { ScanLine, RotateCw, Activity, Eye } from "lucide-react";

import FeatureListSection from "@organisms/FeatureListSection/FeatureListSection";
import AntropHero from "@organisms/AntropHero/AntropHero";

const photoMetryProcess = [
  {
    title: "Identificación de desequilibrios",
    category: "Postura",
    description:
      "Analizamos la alineación de puntos clave como trago de la oreja, acromion, cresta ilíaca y maléolo. Visualizamos la distribución de la masa corporal respecto a la línea de gravedad.",
    icon: <ScanLine />,
  },
  {
    title: "Análisis de angulaciones y rotaciones",
    category: "Biomecánica",
    description:
      "Medimos con precisión los grados de inclinación en hombros, pelvis y rodillas. Pequeñas variaciones angulares pueden generar sobrecargas en la cadena muscular y articular.",
    icon: <RotateCw />,
  },
  {
    title: "Evaluación de curvas sagitales",
    category: "Columna",
    description:
      "Evaluamos las curvas de la columna (lordosis y cifosis). Analizamos su relación con el centro de gravedad. Detectamos desplazamientos que afectan al equilibrio global.",
    icon: <Activity />,
  },
  {
    title: "Evidencia clínica y seguimiento",
    category: "Control",
    description:
      "Generamos una representación visual del estado inicial del paciente. Permitimos comparar la evolución tras tratamientos o terapia física.",
    icon: <Eye />,
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

const Fotogrametria: React.FC = () => {
  return (
    <>
      <Hero
        backgroundImage={ImgFotogrametria}
        title="Fotogrametría Postural
"
        subtitle="Análisis digital de la postura en los tres planos del espacio"
        description={
          <>
            La fotogrametría nos permite realizar un análisis cuantitativo de tu
            postura mediante la captura y procesamiento de imágenes de alta
            resolución. A través de este sistema, objetivamos las asimetrías y
            desalineaciones de tu estructura esquelética en los planos frontal,
            sagital y posterior.
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
        title="¿Qué nos aporta la fotogrametría en consulta?"
        items={photoMetryProcess}
        // onCardClick={(id) => scrollToSection(id)}
      />

      <ContaienrFirst backgroundImage={ImgAntropometria2}>
        <Eyebrow>La tecnología al servicio del diagnóstico</Eyebrow>

        <Description>
          Esta información, cruzada con tu perfil antropométrico, nos da la
          clave para entender por qué tu cuerpo se mueve como lo hace y cómo
          podemos optimizar su eficiencia, hacemos visible tu postura para que,
          junto a tu fisioterapeuta u osteópata, podamos reeducar tu movimiento
          y alinear tu base con tu columna.
        </Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};
export default Fotogrametria;
