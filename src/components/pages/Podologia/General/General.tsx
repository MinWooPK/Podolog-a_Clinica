import { useState } from "react";
import ImgPodoLogiaGeneral from "@assets/img/PodologiaGeneral.jpg";
import ImgPodoLogiaGeneral2 from "@assets/img/PodoLogiaGeneral2.jpg";
import ImgPodoLogiaGeneral3 from "@assets/img/PodoLogiaGeneral3.jpg";
import ImgPodoLogiaGeneral4 from "@assets/img/PodoLogiaGeneral4.jpg";
import ImgPodoLogiaGeneral5 from "@assets/img/PodoLogiaGeneral5.jpg";
import ImgPodoLogiaGeneral6 from "@assets/img/PodoLogiaGeneral6.jpg";
import ImgPodoLogiaGeneral7 from "@assets/img/PodologiaGeneral7.jpeg";
import ImgFAQPodoLogiaGeneral from "@assets/img/FAQGeneral.jpg";
import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { Activity, HeartPulse, Scissors, Shield } from "lucide-react";
import FAQ from "@organisms/Faq/FAQ";
import TreatmentSections from "@organisms/TreatmentSections/TreatmentSections";
import { AnimatePresence, motion } from "framer-motion";

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
    id: "exploracion",
    title: "Exploración y diagnóstico",
    category: "Diagnóstico",
    description:
      "Evaluación integral del estado de la piel y las uñas para detectar patologías de forma precoz.",
    icon: <Activity />,
  },
  {
    id: "infecciones",
    title: "Infecciones cutáneas",
    category: "Tratamiento",
    description:
      "Tratamiento de verrugas plantares (papilomas) y otras afecciones dérmicas.",
    icon: <Shield />,
  },
  {
    id: "quiropodologia",
    title: "Quiropodología",
    category: "Cuidado básico",
    description:
      "Corte correcto de las uñas y tratamiento de durezas (hiperqueratosis), callosidades (helomas) y fresado de talones.",
    icon: <Scissors />,
  },
  {
    id: "ungueal",
    title: "Patología ungueal",
    category: "Tratamiento",
    description: "Uñas encarnadas, engrosadas o con hongos (onicomicosis).",
    icon: <HeartPulse />,
  },
  {
    id: "piel",
    title: "Hidratación y salud de la piel",
    category: "Prevención",
    description: "Tratamiento de piel seca, grietas o sudoración excesiva.",
    icon: <Activity />,
  },
  {
    id: "educacion",
    title: "Educación sanitaria",
    category: "Prevención",
    description: "Recomendaciones sobre cuidado del pie y calzado adecuado.",
    icon: <Shield />,
  },
];

const treatmentsSub = [
  {
    id: "exploracion",
    title: "Exploración y Diagnóstico",
    description: [
      "Evaluación clínica detallada para prevenir y detectar patologías de forma temprana.",
      "Anamnesis y antecedentes médicos.",
      "Evaluación de la morfología y movilidad articular.",
      "Detección precoz de signos de alerta.",
      "Diseño de un plan de salud personalizado.",
    ],
    image: ImgPodoLogiaGeneral2,
  },
  {
    id: "infecciones",
    title: "Infecciones Cutáneas",
    description: [
      "Tratamiento especializado de afecciones dérmicas e infecciones en el pie.",
      "Eliminación de papilomas (verrugas plantares).",
      "Tratamiento de micosis cutánea (hongos).",
      "Control de dermatitis y eccemas.",
      "Prevención de contagios y recidivas.",
    ],
    image: ImgPodoLogiaGeneral3,
  },
  {
    id: "quiropodologia",
    title: "Quiropodología",
    description: [
      "Cuidado clínico esencial para eliminar el dolor y mejorar el confort al caminar.",
      "Eliminación de helomas y durezas.",
      "Fresado terapéutico de talones.",
      "Corte y fresado técnico de las uñas.",
      "Tratamiento de hiperqueratosis por presión.",
    ],
    image: ImgPodoLogiaGeneral4,
  },
  {
    id: "ungueal",
    title: "Patología Ungueal",
    description: [
      "Soluciones integrales para las afecciones que afectan a la salud de las uñas.",
      "Tratamiento de uña encarnada (onicocriptosis).",
      "Abordaje de onicomicosis (hongos en uñas).",
      "Reeducación de uñas engrosadas o deformadas.",
      "Restauración de la estética y funcionalidad ungueal.",
    ],
    image: ImgPodoLogiaGeneral5,
  },
  {
    id: "piel",
    title: "Hidratación y Salud de la Piel",
    description: [
      "Protocolos de regeneración para mantener la integridad de la barrera cutánea.",
      "Tratamiento profundo de la sequedad extrema.",
      "Control de la hiperhidrosis (exceso de sudor).",
      "Cuidado preventivo del Pie Diabético.",
      "Prevención de grietas y lesiones dérmicas.",
    ],
    image: ImgPodoLogiaGeneral6,
  },
  {
    id: "educacion",
    title: "Educación Sanitaria",
    description: [
      "Asesoramiento profesional para el cuidado preventivo en el día a día.",
      "Recomendaciones de calzado adecuado.",
      "Pautas de higiene y secado correcto.",
      "Instrucciones de autoexploración en casa.",
      "Consejos para la prevención de patologías recurrentes.",
    ],
    image: ImgPodoLogiaGeneral7,
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

const General: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(
    null,
  );

  const selectedTreatmentData = treatmentsSub.find(
    (item) => item.id === selectedTreatment,
  );

  return (
    <>
      <Hero
        backgroundImage={ImgPodoLogiaGeneral}
        title="Podología General"
        subtitle="Cuidado integral del pie"
        description="En la consulta de podología general nos ocupamos de la salud de tus pies. A menudo, pequeñas molestias que ignoramos son señales de que algo necesita atención especializada para evitar complicaciones mayores."
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
              items={treatments}
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
      </AnimatePresence>

      <ReviewHome />
    </>
  );
};

export default General;
