import React from "react";
import {
  Title,
  Description,
  Eyebrow,
  ContaienrFirst,
} from "./Deportiva.styles";
import ImgPodoLogiaDeportiva from "@assets/img/PodologiaDeportiva.jpg";
import ImgFAQPodoLogiaGeneral from "@assets/img/FAQGeneral.jpg";
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
import FAQ from "@organisms/Faq/FAQ";

const faqItems = [
  {
    question: "¿Duele el tratamiento podológico?",
    answer:
      "No, los tratamientos se realizan de forma indolora o con molestias mínimas. Siempre adaptamos la técnica a la sensibilidad del paciente.",
  },
  {
    question: "¿Necesito cita previa?",
    answer:
      "Sí, es recomendable pedir cita previa para garantizar una atención personalizada y sin esperas.",
  },
  {
    question: "¿Cuánto dura una sesión?",
    answer:
      "La duración habitual es de 30 a 45 minutos, dependiendo del tipo de tratamiento.",
  },
  {
    question: "¿Cada cuánto debo acudir al podólogo?",
    answer:
      "Depende del caso, pero en general se recomienda cada 4 a 8 semanas para tratamientos de mantenimiento.",
  },
  {
    question: "¿Tratáis uñas encarnadas o infecciones?",
    answer:
      "Sí, tratamos patologías ungueales como uñas encarnadas, hongos y engrosamientos de forma profesional y segura.",
  },
  {
    question: "¿Es necesario llevar algo a la consulta?",
    answer:
      "No es necesario. Solo recomendamos traer calzado habitual si queremos valorar su adecuación.",
  },
];

const specializedServices = [
  {
    title: "Estudio Biomecánico de la Marcha y la Carrera",
    category: "Biomecánica",
    description:
      "Análisis computerizado mediante sistemas de presión y vídeo para identificar anomalías en el ciclo de la pisada.",
    icon: <Footprints />,
  },
  {
    title: "Prevención de Lesiones",
    category: "Prevención",
    description:
      "Diagnóstico precoz de fascitis plantar, tendinopatías, periostitis y sobrecargas musculares.",
    icon: <ShieldCheck />,
  },
  {
    title: "Plantillas Personalizadas 3D",
    category: "Tratamiento",
    description:
      "Diseño y fabricación de soportes plantares con materiales técnicos adaptados a cada disciplina deportiva.",
    icon: <ScanSearch />,
  },
  {
    title: "Asesoramiento en Calzado Deportivo",
    category: "Rendimiento",
    description:
      "Recomendación técnica según el tipo de pisada, peso, terreno y técnica de carrera.",
    icon: <Activity />,
  },
  {
    title: "Perfil Genético Músculo-Esquelético",
    category: "Tecnología",
    description:
      "Identificación de marcadores genéticos relacionados con la resistencia tendinosa y predisposición a lesiones.",
    icon: <Dna />,
  },
];

const Deportiva: React.FC = () => {
  return (
    <>
      <Hero
        backgroundImage={ImgPodoLogiaDeportiva}
        title="Podología Deportiva"
        subtitle="Optimiza tu rendimiento desde la base"
        description="En el deporte, el pie es el principal receptor de impactos y el motor de la propulsión. Un gesto técnico repetido miles de veces con una alineación incorrecta es el origen de la mayoría de las lesiones por sobrecarga.

"
        primaryButton={{
          label: "Reservar cita",
          href: "/contacto",
        }}
        secondaryButton={{
          label: "Ver servicios",
          href: "/servicios",
        }}
      />

      <WhatWeTreat items={specializedServices} />
      <ContaienrFirst backgroundImage={ImgPodoLogiaDeportiva}>
        <Eyebrow>Biomecánica y rendimiento</Eyebrow>

        <Title>Nuestro enfoque en el deportista</Title>

        <Description>
          Analizamos el pie tanto en estático como en movimiento, estudiando la
          dinámica de la pisada y la interacción del cuerpo con el terreno para
          mejorar tu eficiencia y proteger tus articulaciones.
        </Description>
      </ContaienrFirst>
      <FAQ
        items={faqItems}
        image={ImgFAQPodoLogiaGeneral}
        imageAlt="Consulta de podología"
      />

      <ReviewHome />
    </>
  );
};
export default Deportiva;
