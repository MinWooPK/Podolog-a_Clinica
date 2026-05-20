import { Link } from "react-router-dom";
import Doctoralia from "@assets/icons/doctoralia.png";

import {
  FooterPodologia,
  FooterTitleContaienr,
  FooterTitle,
  FooterSubTitle,
  LogoImage,
  FooterLast,
  FooterCopyRight,
  FooterSubInfo,
  FooterMiddle,
  CitaContainer,
  DoctoraliaImage,
} from "./Footer.style";
import LogoImgSrc from "@assets/icons/SoloLogo.png";

function Footer() {
  return (
    <FooterPodologia>
      {/* <FooterMiddle>
        <div>Visitanos</div>
        <div>Contacto</div>
      </FooterMiddle> */}
      <FooterLast>
        <FooterCopyRight>
          {/* <CitaContainer
            href="https://www.doctoralia.es/rebeca-saludes-llamas/podologo/palma-de-mallorca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DoctoraliaImage src={Doctoralia} /> Pedir cita
          </CitaContainer> */}
        </FooterCopyRight>
        <FooterTitleContaienr>
          <LogoImage src={LogoImgSrc} width="40px" height="40px" />
          <FooterTitle>Tramontana Salud</FooterTitle>
          <FooterSubTitle>Dra. Rebeca Saludes Llamas</FooterSubTitle>
          <FooterSubInfo>
            {/* <a>Aviso legal</a>
          <a>Politica privacidad</a>
          <a>Cookies</a> */}
            © 2026 MinWoo Park Kim - All Rights Reserved.
          </FooterSubInfo>
        </FooterTitleContaienr>
        <FooterSubInfo>
          {/* <a>Aviso legal</a>
          <a>Politica privacidad</a>
          <a>Cookies</a> */}
        </FooterSubInfo>
      </FooterLast>
    </FooterPodologia>
  );
}

export default Footer;
