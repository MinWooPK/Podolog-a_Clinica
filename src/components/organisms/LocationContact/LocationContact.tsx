import {
  ContactInfoList,
  ContactInfoItem,
  ContactText,
  ContactContent,
  ContactSection,
  ContactSubtitle,
  ContactTitle,
  ContactMedia,
  ContactImage,
  ConcatBg,
  CitaContainer,
  DoctoraliaImage,
  ButtonContainer,
} from "./LocationContact.style";

import Doctoralia from "@assets/icons/doctoralia.png";
import ImgClinicaImagen from "@assets/img/ClinicaImagen.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

function LocationContact() {
  const { t } = useTranslation();

  return (
    <ContactSection>
      <ContactMedia>
        <ContactImage src={ImgClinicaImagen} />
      </ContactMedia>

      <ConcatBg>
        <ContactContent>
          <ContactTitle>{t("locationContact.title")}</ContactTitle>

          <ContactSubtitle>{t("locationContact.subtitle1")}</ContactSubtitle>

          <ContactText>{t("locationContact.address")}</ContactText>

          <ContactSubtitle>{t("locationContact.subtitle2")}</ContactSubtitle>

          <ContactInfoList>
            <ContactInfoItem>
              <Mail size={24} />

              <a
                href="mailto:rebesaludes83@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("locationContact.email")}: <b>rebesaludes83@gmail.com</b>
              </a>
            </ContactInfoItem>

            <ContactInfoItem>
              <FaWhatsapp size={24} color="#25D366" />

              <a href="https://wa.me/34627664249" target="_blank">
                {t("locationContact.whatsapp")}: <b>627 66 42 49</b>
              </a>
            </ContactInfoItem>
          </ContactInfoList>

          <ContactText>{t("locationContact.whatsappText")}</ContactText>

          <ButtonContainer>
            <CitaContainer
              href="https://www.doctoralia.es/rebeca-saludes-llamas/podologo/palma-de-mallorca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DoctoraliaImage src={Doctoralia} />
              {t("locationContact.cta")}
            </CitaContainer>
          </ButtonContainer>
        </ContactContent>
      </ConcatBg>
    </ContactSection>
  );
}
export default LocationContact;
