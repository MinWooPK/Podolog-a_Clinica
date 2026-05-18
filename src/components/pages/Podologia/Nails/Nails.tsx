import React from "react";
import { Title, Description, Eyebrow, ContaienrFirst } from "./Nails.styles";
import PodologiaNailsMain from "@assets/img/PodologiaNailsMain.jpeg";
import PodologiaNails from "@assets/img/PodologiaNails.jpeg";

import ReviewHome from "@organisms/ReviewHome";
import Hero from "@organisms/Hero";
import WhatWeTreat from "@organisms/WhatWeTreat/WhatWeTreat";
import { ScanSearch, ShieldCheck, Dna } from "lucide-react";

const specializedServices = [
  {
    title: "Cirugía de la Onicocriptosis (Uña encarnada)",
    category: "Cirugía Ungueal",
    description:
      "Aplicación de técnicas definitivas como la matricectomía química. Este procedimiento permite eliminar selectivamente la matriz (la 'raíz') del lateral de la uña para evitar que vuelva a clavarse, solucionando de forma permanente el dolor y las infecciones recurrentes.",
    icon: <ShieldCheck />,
  },
  {
    title: "Abordaje de la Onicodistrofia",
    category: "Cirugía Ungueal",
    description:
      "Tratamiento quirúrgico mediante la avulsión (retirada) total o parcial de la uña en casos de inflamación crónica o deformidades que generan dolor invalidante y no responden a tratamientos conservadores.",
    icon: <ScanSearch />,
  },
  {
    title: "Protocolo Quirúrgico de Alta Seguridad",
    category: "Seguridad Clínica",
    description:
      "Intervenciones realizadas bajo estrictas condiciones de asepsia y esterilidad. Incluimos un seguimiento postquirúrgico personalizado y curas pautadas hasta el alta definitiva para asegurar una cicatrización óptima.",
    icon: <Dna />,
  },
];

const Nails: React.FC = () => {
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
          href: "/servicios",
        }}
      />

      <WhatWeTreat
        items={specializedServices}
        title="¿¿Qué incluye nuestra unidad quirúrgica?
?"
      />
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
