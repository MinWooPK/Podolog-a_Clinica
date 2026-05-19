import React from "react";
import { useState } from "react";

import {
  Title,
  Description,
  Eyebrow,
  ContaienrFirst,
} from "./Deportiva.styles";
import ImgPodoLogiaDeportiva from "@assets/img/PodologiaDeportiva.jpg";
import ImgPodoLogiaDeportiv2 from "@assets/img/PodologiaDeportiva2.jpg";

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
import { AnimatePresence, motion } from "framer-motion";
import TreatmentSections from "@organisms/TreatmentSections/TreatmentSections";

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
    id: "estudio-biomecanico",
    title: "Estudio Biomecánico de la Marcha y la Carrera",
    category: "Biomecánica",
    description:
      "Análisis computerizado mediante sistemas de presión y vídeo para identificar anomalías en el ciclo de la pisada.",
    icon: <Footprints />,
  },
  {
    id: "prevencion-lesiones",
    title: "Prevención de Lesiones",
    category: "Prevención",
    description:
      "Diagnóstico precoz de fascitis plantar, tendinopatías, periostitis y sobrecargas musculares.",
    icon: <ShieldCheck />,
  },
  {
    id: "plantillas-3d",
    title: "Plantillas Personalizadas 3D",
    category: "Tratamiento",
    description:
      "Diseño y fabricación de soportes plantares con materiales técnicos adaptados a cada disciplina deportiva.",
    icon: <ScanSearch />,
  },
  {
    id: "calzado-deportivo",
    title: "Asesoramiento en Calzado Deportivo",
    category: "Rendimiento",
    description:
      "Recomendación técnica según el tipo de pisada, peso, terreno y técnica de carrera.",
    icon: <Activity />,
  },
  {
    id: "perfil-genetico",
    title: "Perfil Genético Músculo-Esquelético",
    category: "Tecnología",
    description:
      "Identificación de marcadores genéticos relacionados con la resistencia tendinosa y predisposición a lesiones.",
    icon: <Dna />,
  },
];

const treatmentsSub = [
  {
    id: "estudio-biomecanico",
    title: "Estudio Biomecánico de la Marcha y la Carrera",
    description: [
      "Análisis avanzado del movimiento para optimizar el rendimiento y detectar anomalías en la pisada.",
      "Análisis informatizado mediante plataformas de presión.",
      "Grabación en vídeo para el estudio del ciclo de marcha.",
      "Identificación de dismetrías y desequilibrios posturales.",
      "Valoración del gesto deportivo según la disciplina.",
    ],
    image: "https://images.pexels.com/photos/4167544/pexels-photo-4167544.jpeg",
    // 👉 pies corriendo / biomecánica (sin cara)
  },

  {
    id: "prevencion-lesiones",
    title: "Prevención de Lesiones",
    description: [
      "Identificación precoz de factores de riesgo para práctica deportiva segura.",
      "Diagnóstico temprano de fascitis plantar y tendinopatías.",
      "Evaluación de sobrecargas musculares y periostitis.",
      "Control de puntos de presión durante el ejercicio.",
      "Seguimiento preventivo para deportistas.",
    ],
    image: "https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg",
    // 👉 fisioterapia piernas / prevención (sin rostro)
  },

  {
    id: "plantillas-3d",
    title: "Plantillas Personalizadas 3D",
    description: [
      "Diseño y fabricación de soportes plantares de alta precisión.",
      "Escaneado digital del pie en 3D.",
      "Uso de materiales técnicos de última generación.",
      "Adaptación al calzado deportivo y terreno.",
      "Mejora de amortiguación y estabilidad.",
    ],
    image: "https://images.pexels.com/photos/6695843/pexels-photo-6695843.jpeg",
    // 👉 escaneo pie / tecnología médica (sin cara)
  },

  {
    id: "calzado-deportivo",
    title: "Asesoramiento en Calzado Deportivo",
    description: [
      "Elección de zapatilla según morfología y actividad.",
      "Evaluación de la interacción entre calzado y biomecánica.",
      "Análisis del drop y estructura de la zapatilla.",
      "Recomendación según estabilidad y control de fuerzas.",
      "Prevención de patologías por mal calzado.",
    ],
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    // 👉 zapatillas running / producto (sin personas)
  },

  {
    id: "perfil-genetico",
    title: "Perfil Genético Músculo-Esquelético",
    description: [
      "Identificación de predisposición genética deportiva.",
      "Marcadores de resistencia tendinosa.",
      "Predisposición a lesiones específicas.",
      "Optimización de cargas de entrenamiento.",
      "Medicina personalizada deportiva.",
    ],
    image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg",
    // 👉 ADN / laboratorio ciencia (sin cara)
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
const Deportiva: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(
    null,
  );

  const selectedTreatmentData = treatmentsSub.find(
    (item) => item.id === selectedTreatment,
  );
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
          onClick: () => scrollToSection("what-we-treat"),
        }}
      />
      <AnimatePresence mode="wait">
        {!selectedTreatment ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.35 }}
          >
            <WhatWeTreat
              id="what-we-treat"
              title="¿Qué incluye nuestro servicio especializado?"
              items={specializedServices}
              onCardClick={(id) => setSelectedTreatment(id)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
          >
            <TreatmentSections
              id="what-we-treat"
              items={[selectedTreatmentData!]}
              showBackButton={true}
              onBack={() => setSelectedTreatment(null)}
            />{" "}
          </motion.div>
        )}
      </AnimatePresence>{" "}
      <ContaienrFirst $backgroundImage={ImgPodoLogiaDeportiv2}>
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
