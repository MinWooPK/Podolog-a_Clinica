import React from "react";
import { Title, Description, Eyebrow, ContaienrFirst } from "./Genetica.styles";
import ImgGenetica from "@assets/img/Genetica.jpeg";
import ImgGenetica2 from "@assets/img/Genetica2.jpeg";
import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { ShieldCheck, Dna, Activity, TrendingUp } from "lucide-react";
const geneticPodiatryProcess = [
  {
    title: "Prevención de Patologías Estructurales",
    category: "Prevención Genética",
    description:
      "Identificamos marcadores genéticos asociados al tejido conectivo, densidad ósea y respuesta inflamatoria. Anticipamos lesiones crónicas. Optimizamos la resistencia estructural del pie y la cadena biomecánica.",
    icon: <ShieldCheck />,
  },
  {
    title: "Farmacogenética y Nutrición Evolutiva",
    category: "Metabolismo",
    description:
      "Analizamos la interacción entre genética, nutrición y metabolismo. Optimizamos la regeneración tisular. Mejoramos la respuesta inflamatoria y el rendimiento biomecánico global.",
    icon: <Dna />,
  },
  {
    title: "Sinergia de Datos Clínicos",
    category: "Diagnóstico Avanzado",
    description:
      "Integramos información genética con fotogrametría y análisis biomecánico. Generamos un diagnóstico global de alta precisión. Relacionamos herencia biológica con estado funcional actual.",
    icon: <Activity />,
  },
  {
    title: "Rendimiento y Longevidad Funcional",
    category: "Optimización",
    description:
      "Adaptamos cargas de trabajo y recuperación según el perfil genético. Mejoramos la movilidad y prevenimos sobrecargas. Prolongamos la salud funcional del sistema musculoesquelético.",
    icon: <TrendingUp />,
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

const Genetica: React.FC = () => {
  return (
    <>
      <Hero
        backgroundImage={ImgGenetica}
        title="Genética Aplicada a la Salud"
        subtitle="Tu Código como Hoja de Ruta"
        description={
          <>
            La genética es el plano fundamental sobre el que se construye tu
            estructura. Integramos el análisis molecular para comprender las
            predisposiciones de tu organismo y personalizar tu tratamiento desde
            la base biológica más profunda.
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
        title="Ciencia de precisión para una salud integral"
        items={geneticPodiatryProcess}
      />

      <ContaienrFirst $backgroundImage={ImgGenetica2}>
        <Eyebrow>Tu genética no es un destino fijo</Eyebrow>

        <Title>Interpretamos tu código biológico como punto de partida</Title>

        <Description>
          Tu genética no determina tu límite, sino tu potencial de adaptación.
          Utilizamos análisis molecular avanzado para descifrar tu perfil
          biológico y convertir esa información en una estrategia personalizada
          de prevención, equilibrio y optimización estructural a largo plazo.
        </Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};
export default Genetica;
