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
import FeatureListSection from "@organisms/FeatureListSection/FeatureListSection"; //  IMPORTANTE
import FeatureGrid from "@molecules/WhyUs/FeatureGrid";
import { Footprints, Cpu, MessageCircle, Zap } from "lucide-react";

import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const podoFeatures = {
    items: [
      "biomechanics",
      "ingrown_nails",
      "calluses",
      "sports",
      "warts",
      "insoles",
      "diabetic",
      "all_ages",
    ],
  };
  const faqItems = [
    {
      key: "pain",
    },
    {
      key: "appointment",
    },
    {
      key: "duration",
    },
    {
      key: "frequency",
    },
    {
      key: "nails",
    },
    {
      key: "clinic",
    },
  ];

  const treatments = [
    {
      title: t("home.treatments.general.title"),
      description: t("home.treatments.general.desc"),
      link: "/podologia",
    },
    {
      title: t("home.treatments.nails.title"),
      description: t("home.treatments.nails.desc"),
      link: "/podologia/nails",
    },
    {
      title: t("home.treatments.sports.title"),
      description: t("home.treatments.sports.desc"),
      link: "/podologia/deportiva",
    },
    {
      title: t("home.treatments.insoles.title"),
      description: t("home.treatments.insoles.desc"),
      link: "/podologia/plantillas_3D",
    },
  ];
  const featureItems = [
    {
      key: "specialists",
      icon: <Footprints size={22} />,
    },
    {
      key: "technology",
      icon: <Cpu size={22} />,
    },
    {
      key: "personalized",
      icon: <MessageCircle size={22} />,
    },
    {
      key: "no_waiting",
      icon: <Zap size={22} />,
    },
  ];
  return (
    <>
      <PodoHome onPrimaryClick={() => scrollToSection("what-we-treat")} />
      <TreatmentsSection id="what-we-treat">
        <Header>
          <h2>{t("home.treatmentsTitle")}</h2>
        </Header>

        <TreatmentsGrid>
          {treatments.map((item, index) => (
            <TreatmentCard key={index}>
              <TreatmentTitle>{item.title}</TreatmentTitle>

              <TreatmentText>{item.description}</TreatmentText>

              <TreatmentButton href={item.link}>
                {t("cta.verMas")} <span>→</span>
              </TreatmentButton>
            </TreatmentCard>
          ))}
        </TreatmentsGrid>
      </TreatmentsSection>

      {/*  NUEVA SECCIÓN PODOLÓGICA */}
      <FeatureListSection
        title={t("featuresPodo.title")}
        subtitle={t("featuresPodo.subtitle")}
        items={podoFeatures.items.map((key) => t(`featuresPodo.items.${key}`))}
        backgroundImage={ImgClinica2}
      />
      <FeatureGrid
        title={t("featureGrid.title")}
        items={featureItems.map((item) => ({
          title: t(`featureGrid.items.${item.key}.title`),
          description: t(`featureGrid.items.${item.key}.description`),
          icon: item.icon,
        }))}
      />
      <FAQ
        items={faqItems.map((item) => ({
          question: t(`faq.items.${item.key}.question`),
          answer: t(`faq.items.${item.key}.answer`),
        }))}
        image={ImgFAQPodoLogiaGeneral}
        imageAlt="Consulta de podología"
      />

      <ReviewHome />
      <LocationContact />
    </>
  );
};

export default Home;
