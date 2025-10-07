import { Link } from "react-router-dom";

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
} from "./Footer.style";
import LogoImgSrc from "@assets/icons/SoloLogo.png";

function Footer() {
  return (
    <FooterPodologia>
      <FooterTitleContaienr>
        <LogoImage src={LogoImgSrc} width="40px" height="40px" />
        <FooterTitle>Tramontana Salud</FooterTitle>
        <FooterSubTitle>Rebeca Saludes Llamas</FooterSubTitle>
      </FooterTitleContaienr>
      {/* <FooterMiddle>
        <div>Visitanos</div>
        <div>Contacto</div>
      </FooterMiddle> */}
      <FooterLast>
        <FooterCopyRight>
          © 2025 MinWoo Park Kim - All Rights Reserved.
        </FooterCopyRight>
        <FooterSubInfo>
          <a>Aviso legal</a>
          <a>Politica privacidad</a>
          <a>Cookies</a>
        </FooterSubInfo>
      </FooterLast>
    </FooterPodologia>
  );
}

export default Footer;
