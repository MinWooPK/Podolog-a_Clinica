import React from "react";
import { useState } from "react";
import { Description, Eyebrow, ContaienrFirst } from "./Plantilla.styles";
import PodologiaPlantilla from "@assets/img/PodologiaPlantilla.jpeg";
import PodologiaPlantilla2 from "@assets/img/PodologiaPlantilla2.jpeg";

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
import { AnimatePresence, motion } from "framer-motion";
import TreatmentSections from "@organisms/TreatmentSections/TreatmentSections";

const specializedServices = [
  {
    id: "impresion-3d",
    title: "Fabricación mediante Impresión 3D",
    category: "Tecnología",
    description:
      "Utilizamos procesos de fabricación aditiva de alta precisión. Esta tecnología nos permite graduar la rigidez y la flexibilidad de forma selectiva en diferentes zonas de la plantilla, logrando un control biomecánico avanzado.",
    icon: <ScanSearch />,
  },
  {
    id: "tpu-alto-rendimiento",
    title: "TPU de Alto Rendimiento",
    category: "Materiales",
    description:
      "El TPU (Poliuretano Termoplástico) combina amortiguación, memoria elástica y durabilidad. Es la base ideal para tratamientos que requieren precisión y confort prolongado.",
    icon: <ShieldCheck />,
  },
  {
    id: "diseno-digital",
    title: "Diseño Digital de Estructuras",
    category: "Ingeniería",
    description:
      "Aplicamos diseño digital avanzado para optimizar estructuras internas, reduciendo peso sin comprometer resistencia y mejorando la adaptación al calzado.",
    icon: <Activity />,
  },
  {
    id: "densidades",
    title: "Versatilidad de Densidades",
    category: "Personalización",
    description:
      "Disponemos de diferentes materiales (EVAs y resinas) para adaptar la descarga de presión según la patología y el nivel de soporte requerido.",
    icon: <Footprints />,
  },
  {
    id: "acabados-biocompatibles",
    title: "Acabados Técnicos Biocompatibles",
    category: "Confort",
    description:
      "Utilizamos forros transpirables con tratamientos bactericidas que mejoran la higiene, el confort térmico y la salud dérmica del pie.",
    icon: <Dna />,
  },
  {
    id: "ortesis-digitales",
    title: "Órtesis Digitales y Vendajes Correctivos",
    category: "Corrección",
    description:
      "Fabricamos órtesis de silicona a medida y aplicamos vendajes correctivos para alinear los dedos, reducir presión y mejorar la función biomecánica.",
    icon: <Footprints />,
  },
];
const treatmentsSub = [
  {
    id: "impresion-3d",
    title: "Fabricación mediante Impresión 3D",
    description: [
      "Control biomecánico total mediante fabricación aditiva.",
      "Graduación de rigidez según zonas del pie.",
      "Diseño basado en escaneo digital previo.",
      "Optimización de la respuesta elástica.",
      "Réplica exacta del modelo digital.",
    ],
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
    // 👉 impresión 3D / tecnología médica
  },

  {
    id: "tpu-alto-rendimiento",
    title: "TPU de Alto Rendimiento",
    description: [
      "Material con amortiguación avanzada.",
      "Alta resistencia al desgaste.",
      "Memoria elástica para recuperación de forma.",
      "Confort prolongado en uso diario.",
      "Base ideal para tratamientos de precisión.",
    ],
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    // 👉 materiales técnicos / polímeros
  },

  {
    id: "diseno-digital",
    title: "Diseño Digital de Estructuras",
    description: [
      "Ingeniería aplicada al soporte plantar.",
      "Reducción de peso mediante estructuras internas.",
      "Adaptación a cualquier tipo de calzado.",
      "Refuerzo de puntos críticos.",
      "Optimización del confort dentro de la zapatilla.",
    ],
    image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
    // 👉 diseño CAD / ingeniería
  },

  {
    id: "densidades",
    title: "Versatilidad de Densidades",
    description: [
      "Uso de EVA y resinas técnicas.",
      "Adaptación de dureza según patología.",
      "Combinación de densidades por zonas.",
      "Tratamiento de puntos de alta presión.",
      "Personalización según peso y actividad.",
    ],
    image: "https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg",
    // 👉 materiales / espuma técnica / laboratorio
  },

  {
    id: "acabados-biocompatibles",
    title: "Acabados Técnicos Biocompatibles",
    description: [
      "Forros transpirables de alta gama.",
      "Materiales bactericidas e higiénicos.",
      "Regulación térmica del pie.",
      "Evita irritaciones y rozaduras.",
      "Mayor durabilidad del tratamiento.",
    ],
    image: "https://images.pexels.com/photos/6695843/pexels-photo-6695843.jpeg",
    // 👉 materiales textiles técnicos / plantilla
  },

  {
    id: "ortesis-digitales",
    title: "Ortesis Digitales y Vendajes Correctivos",
    description: [
      "Ortesis de silicona personalizadas.",
      "Corrección de alineación de dedos.",
      "Reducción de presión mecánica.",
      "Vendajes funcionales terapéuticos.",
      "Integración en la actividad diaria.",
    ],
    image: "https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg",
    // 👉 vendajes pie / ortesis / podología
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

const Plantilla: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(
    null,
  );

  const selectedTreatmentData = treatmentsSub.find(
    (item) => item.id === selectedTreatment,
  );

  return (
    <>
      <Hero
        backgroundImage={PodologiaPlantilla}
        title="Soportes Plantares Personalizados y Ortesis Digitales"
        subtitle="Tratamiento funcional de la pisada"
        description={
          <>
            Tras un análisis biomecánico exhaustivo, diseñamos soluciones
            totalmente personalizadas. Nuestro objetivo es trasladar los
            resultados del estudio a soportes plantares y dispositivos
            correctivos que equilibren las presiones y optimicen la función del
            pie, adaptándonos tanto a la actividad diaria como al gesto
            deportivo de alto rendimiento.
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
      </AnimatePresence>
      <ContaienrFirst $backgroundImage={PodologiaPlantilla2}>
        <Eyebrow>Biomecánica aplicada</Eyebrow>{" "}
        {/* <Title>¿Por qué es necesario este nivel de detalle?</Title> */}
        <Description>
          La combinación del diseño digital y el uso de polímeros avanzados como
          el TPU nos permite ofrecer un soporte plantar dinámico que respeta la
          biología del movimiento, proporcionando estabilidad donde se necesita
          y flexibilidad donde el pie la demanda.
        </Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};

export default Plantilla;
