import React from "react";
import Button from "@atoms/Button";
import {
  ContainerVideo,
  Title,
  Description,
  TreatmentText,
  TreatmentTitle,
  TreatmentCard,
  TreatmentButton,
  TreatmentsSection,
  Header,
  TreatmentsGrid,
} from "./Home.styles";
import BackgroundVideo from "@assets/video/HomeMain.mp4";
import { Container } from "@pages/AboutMe/AboutMe.styles";
import ReviewHome from "@organisms/ReviewHome";
import LocationContact from "@organisms/LocationContact";
import PodoHome from "@organisms/PodoHome";
import ImgFAQPodoLogiaGeneral from "@assets/img/FAQGeneral.jpg";
import FAQ from "@organisms/Faq/FAQ";
import ImgClinica2 from "@assets/img/ClinicaImagen2.jpg";
import FeatureListSection from "@organisms/FeatureListSection/FeatureListSection"; // 👈 IMPORTANTE
import FeatureGrid from "@molecules/WhyUs/FeatureGrid";
import { Footprints, Cpu, MessageCircle, Zap } from "lucide-react";
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

const podoFeatures = {
  title: "Cuidamos la salud de tus pies",

  items: [
    "Estudio biomecánico de la pisada",
    "Tratamiento de uñas encarnadas",
    "Eliminación de durezas y callosidades",
    "Podología deportiva",
    "Tratamiento de papilomas (verrugas)",
    "Plantillas personalizadas",
    "Prevención del pie diabético",
    "Atención para todas las edades",
  ],

  backgroundImage:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
};
const treatments = [
  {
    title: "Podología general",
    description:
      "Diagnóstico y tratamiento de patologías del pie como durezas, callosidades, hongos o alteraciones ungueales. Realizamos una valoración completa para detectar el origen del problema y aplicar el tratamiento más adecuado con tecnología avanzada y técnicas seguras.",
    link: "/podologia",
  },
  {
    title: "Uñas encarnadas",
    description:
      "Tratamiento seguro, rápido y prácticamente indoloro de uñas encarnadas. Eliminamos la causa del problema, reducimos la inflamación y realizamos seguimiento para evitar que vuelva a aparecer, mejorando la salud y el confort del paciente.",
    link: "/podologia/nails",
  },
  {
    title: "Podología deportiva",
    description:
      "Prevención, diagnóstico y tratamiento de lesiones relacionadas con la actividad física. Analizamos la pisada y la biomecánica para evitar sobrecargas, mejorar el rendimiento y reducir el riesgo de lesiones en deportistas.",
    link: "/podologia/deportiva",
  },
  {
    title: "Plantillas personalizadas",
    description:
      "Realizamos un estudio biomecánico completo de la pisada para diseñar plantillas totalmente personalizadas. Estas ayudan a corregir alteraciones posturales, aliviar dolores y mejorar la distribución de cargas en el pie.",
    link: "/podologia/plantillas_3D",
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

const Home: React.FC = () => {
  return (
    <>
      <PodoHome
        name={""}
        description={""}
        onPrimaryClick={() => scrollToSection("what-we-treat")}
      />
      <TreatmentsSection id="what-we-treat">
        <Header>
          <h2>Tratamientos de podología</h2>
        </Header>

        <TreatmentsGrid>
          {treatments.map((item, index) => (
            <TreatmentCard key={index}>
              <TreatmentTitle>{item.title}</TreatmentTitle>

              <TreatmentText>{item.description}</TreatmentText>

              <TreatmentButton href={item.link}>
                Saber más <span>→</span>
              </TreatmentButton>
            </TreatmentCard>
          ))}
        </TreatmentsGrid>
      </TreatmentsSection>

      {/*  NUEVA SECCIÓN PODOLÓGICA */}
      <FeatureListSection
        title={podoFeatures.title}
        subtitle="Tratamientos personalizados de podología avanzada para todas las edades"
        items={podoFeatures.items}
        backgroundImage={ImgClinica2}
      />
      <FeatureGrid
        title="¿Por qué elegir nuestra clínica de podología?"
        items={[
          {
            title: "Especialistas en podología",
            description:
              "Tratamientos avanzados para todo tipo de patologías del pie.",
            icon: <Footprints size={22} />,
          },
          {
            title: "Tecnología avanzada",
            description: "Diagnóstico preciso con tecnología moderna.",
            icon: <Cpu size={22} />,
          },
          {
            title: "Atención personalizada",
            description: "Cada paciente recibe un tratamiento adaptado.",
            icon: <MessageCircle size={22} />,
          },
          {
            title: "Sin esperas",
            description: "Citas rápidas y sin largas listas de espera.",
            icon: <Zap size={22} />,
          },
        ]}
      />
      <FAQ
        items={faqItems}
        image={ImgFAQPodoLogiaGeneral}
        imageAlt="Consulta de podología"
      />

      <ReviewHome />
      <LocationContact />
    </>
  );
};

export default Home;
