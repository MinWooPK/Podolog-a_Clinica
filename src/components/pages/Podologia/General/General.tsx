import React from "react";

import ImgPodoLogiaGeneral from "@assets/img/PodologiaGeneral.jpg";
import ImgFAQPodoLogiaGeneral from "@assets/img/FAQGeneral.jpg";
import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { Activity, HeartPulse, Scissors, Shield } from "lucide-react";
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

const treatments = [
  {
    title: "Exploración y diagnóstico",
    category: "Diagnóstico",
    description:
      "Evaluación integral del estado de la piel y las uñas para detectar patologías de forma precoz.",
    icon: <Activity />,
  },
  {
    title: "Infecciones cutáneas",
    category: "Tratamiento",
    description:
      "Tratamiento de verrugas plantares (papilomas) y otras afecciones dérmicas.",
    icon: <Shield />,
  },
  {
    title: "Quiropodología",
    category: "Cuidado básico",
    description:
      "Corte correcto de las uñas y tratamiento de durezas (hiperqueratosis), callosidades (helomas) y fresado de talones.",
    icon: <Scissors />,
  },
  {
    title: "Patología ungueal",
    category: "Tratamiento",
    description: "Uñas encarnadas, engrosadas o con hongos (onicomicosis).",
    icon: <HeartPulse />,
  },
  {
    title: "Hidratación y salud de la piel",
    category: "Prevención",
    description: "Tratamiento de piel seca, grietas o sudoración excesiva.",
    icon: <Activity />,
  },
  {
    title: "Educación sanitaria",
    category: "Prevención",
    description: "Recomendaciones sobre cuidado del pie y calzado adecuado.",
    icon: <Shield />,
  },
];

const General: React.FC = () => {
  return (
    <>
      <Hero
        backgroundImage={ImgPodoLogiaGeneral}
        title="Podología General"
        subtitle="Cuidado integral del pie"
        description="En la consulta de podología general nos ocupamos de la salud de tus pies. A menudo, pequeñas molestias que ignoramos son señales de que algo necesita atención especializada para evitar complicaciones mayores.

"
        primaryButton={{
          label: "Reservar cita",
          href: "/contacto",
        }}
        secondaryButton={{
          label: "Ver servicios",
          href: "/servicios",
        }}
      ></Hero>{" "}
      <WhatWeTreat items={treatments} />
      <FAQ
        items={faqItems}
        image={ImgFAQPodoLogiaGeneral}
        imageAlt="Consulta de podología"
      />
      <ReviewHome />
    </>
  );
};

export default General;
