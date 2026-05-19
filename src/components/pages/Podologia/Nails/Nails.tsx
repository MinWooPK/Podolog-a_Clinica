import React from "react";
import { useState } from "react";

import { Title, Description, Eyebrow, ContaienrFirst } from "./Nails.styles";
import PodologiaNailsMain from "@assets/img/PodologiaNailsMain.jpeg";
import PodologiaNails from "@assets/img/PodologiaNails.jpg";
import ImgCirugia2 from "@assets/img/imgCirugia2.jpeg";
import ImgCirugia3 from "@assets/img/imgCirugia3.jpg";
import ImgCirugia4 from "@assets/img/imgCirugia4.jpeg";
import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { ScanSearch, ShieldCheck, Dna } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import TreatmentSections from "@organisms/TreatmentSections/TreatmentSections";

const specializedServices = [
  {
    id: "onicocriptosis-cirugia",
    title: "Cirugía de la Onicocriptosis (Uña encarnada)",
    category: "Cirugía Ungueal",
    description:
      "Aplicación de técnicas definitivas como la matricectomía química. Este procedimiento permite eliminar selectivamente la matriz (la 'raíz') del lateral de la uña para evitar que vuelva a clavarse, solucionando de forma permanente el dolor y las infecciones recurrentes.",
    icon: <ShieldCheck />,
  },
  {
    id: "onicodistrofia",
    title: "Abordaje de la Onicodistrofia",
    category: "Cirugía Ungueal",
    description:
      "Tratamiento quirúrgico mediante la avulsión (retirada) total o parcial de la uña en casos de inflamación crónica o deformidades que generan dolor invalidante y no responden a tratamientos conservadores.",
    icon: <ScanSearch />,
  },
  {
    id: "protocolo-quirurgico",
    title: "Protocolo Quirúrgico de Alta Seguridad",
    category: "Seguridad Clínica",
    description:
      "Intervenciones realizadas bajo estrictas condiciones de asepsia y esterilidad. Incluimos un seguimiento postquirúrgico personalizado y curas pautadas hasta el alta definitiva para asegurar una cicatrización óptima.",
    icon: <Dna />,
  },
];
const treatmentsSub = [
  {
    id: "onicocriptosis-cirugia",
    title: "Cirugía de la Onicocriptosis (Uña encarnada)",
    description: [
      "Técnicas definitivas para eliminar dolor e infecciones recurrentes.",
      "Matricectomía química para resolución permanente.",
      "Eliminación parcial de la matriz ungueal afectada.",
      "Prevención de recurrencias.",
      "Recuperación rápida con mínimas molestias.",
    ],
    image: ImgCirugia2,
  },

  {
    id: "onicodistrofia",
    title: "Abordaje de la Onicodistrofia",
    description: [
      "Tratamiento quirúrgico de uñas deformadas o crónicas.",
      "Avulsión parcial o total de la uña.",
      "Resolución de dolor invalidante.",
      "Tratamiento de inflamación del lecho ungueal.",
      "Recuperación funcional del pie.",
    ],
    image: ImgCirugia3,
  },

  {
    id: "protocolo-quirurgico",
    title: "Protocolo Quirúrgico de Alta Seguridad",
    description: [
      "Cirugías bajo estricta asepsia clínica.",
      "Entornos de máxima esterilidad.",
      "Seguimiento postquirúrgico personalizado.",
      "Control de todas las fases de cicatrización.",
      "Protocolos de seguridad para éxito del tratamiento.",
    ],
    image: ImgCirugia4,
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

const Nails: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(
    null,
  );

  const selectedTreatmentData = treatmentsSub.find(
    (item) => item.id === selectedTreatment,
  );
  return (
    <>
      <Hero
        backgroundImage={PodologiaNailsMain}
        title="Cirugía Ungueal"
        subtitle="Soluciones definitivas"
        description={
          <>
            Cuando los tratamientos conservadores no son suficientes para
            resolver patologías crónicas de la uña, recurrimos a técnicas
            quirúrgicas mínimamente invasivas. Realizamos intervenciones
            ambulatorias bajo anestesia local, diseñadas para una recuperación
            rápida y un resultado funcional permanente.
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
              title="Cirugía podológica y procedimientos ungueales avanzados"
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
      <ContaienrFirst $backgroundImage={PodologiaNails}>
        <Eyebrow>Cirugía ungueal ambulatoria</Eyebrow>

        <Title>Eficacia y recuperación:</Title>

        <Description>
          Nuestro objetivo es que el paciente recupere su ritmo de vida lo antes
          posible. Utilizamos técnicas ambulatorias que permiten salir caminando
          de la consulta, con molestias mínimas y resultados estéticos
          garantizados.
        </Description>
      </ContaienrFirst>

      <ReviewHome />
    </>
  );
};

export default Nails;
