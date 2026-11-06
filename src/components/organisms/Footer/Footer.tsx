import { Mail, MapPin, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import LogoImgSrc from "@assets/icons/SoloLogo.png";
import {
  BrandLink,
  BrandName,
  BrandSubtitle,
  ContactItem,
  FooterAddress,
  FooterBottom,
  FooterColumn,
  FooterGrid,
  FooterInner,
  FooterRoot,
  LogoImage,
} from "./Footer.style";

function Footer() {
  const { t } = useTranslation();

  return (
    <FooterRoot>
      <FooterInner>
        <FooterGrid>
          <FooterColumn>
            <BrandLink to="/">
              <LogoImage src={LogoImgSrc} alt="" width={56} height={56} />
              <div>
                <BrandName>Tramontana Salud</BrandName>
                <BrandSubtitle>Dra. Rebeca Saludés Llamas</BrandSubtitle>
              </div>
            </BrandLink>
          </FooterColumn>

          <FooterColumn>
            <FooterAddress>
              <ContactItem>
                <MapPin size={18} aria-hidden="true" />
                <span>{t("contactMe.address")}</span>
              </ContactItem>
              <ContactItem>
                <Mail size={18} aria-hidden="true" />
                <a href="mailto:rebesaludes83@gmail.com">rebesaludes83@gmail.com</a>
              </ContactItem>
              <ContactItem>
                <MessageCircle size={18} aria-hidden="true" />
                <a href="https://wa.me/34627664249" target="_blank" rel="noopener noreferrer">
                  WhatsApp · +34 627 66 42 49
                </a>
              </ContactItem>
            </FooterAddress>
          </FooterColumn>
        </FooterGrid>

        <FooterBottom>
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        </FooterBottom>
      </FooterInner>
    </FooterRoot>
  );
}

export default Footer;
