import { Link } from "react-router-dom";

import {
  FooterTaxi,
  FooterCopyRightDetailDescription,
  FooterCopyRightDetail,
  LinkBar,
  LinkLi,
  FooterTaxiContainer,
  FooterTaxiContainerLeft,
  FooterTaxiContainerRight,
  FooterTaxiContainerLeftFrist,
  FooterTaxiContainerLeftSecond,
  FooterTaxiContainerLeftThird,
  FooterTaxiImg,
  FooterTaxiP,
  FooterTaxiIconA,
  FooterTaxiContainerLeftLi,
  FooterTaxiContainerRightTitle,
  FooterTaxiContainerRightLi,
  FooterTaxiContainerLogoH2,
  FooterTaxiContainerLogoP,
  FooterTaxiContainerLeftFristSub,
} from "./Footer.style";

const links = [
  { text: "Inicio", url: "/" },
  { text: "Servicios", url: "/service" },
  { text: "Portfolio", url: "/portfolio" },
  { text: "Contact Us", url: "/FormularioPresupuesto" },
  { text: "Sobre Nosotros", url: "/carreras" },
  { text: "Politica de cookies", url: "/PoliticaDeCookies" },
];

const footerDescriptions = [
  "© 2024 Todos los derechos reservados",
  "Diseño y desarrollo CTF - Codetofit",
];

function Footer() {
  return (
    <FooterTaxi>
      <FooterTaxiContainer>
        <FooterTaxiContainerLeft>
          <FooterTaxiContainerLeftFrist>
            {/* <img src={LogoTaxi} alt="Logo" width="85" height="75" /> */}
            <FooterTaxiContainerLeftFristSub>
              <FooterTaxiContainerLogoH2>Taxi</FooterTaxiContainerLogoH2>
              <FooterTaxiContainerLogoP>
                Servicios de Taxi
              </FooterTaxiContainerLogoP>
            </FooterTaxiContainerLeftFristSub>
          </FooterTaxiContainerLeftFrist>
          <FooterTaxiContainerLeftSecond>
            <FooterTaxiP>
              <FooterTaxiIconA />
              Gipuzkoa - Euskadi
            </FooterTaxiP>
            <FooterTaxiP>
              <FooterTaxiIconA />
              +34 623 56 56 14
            </FooterTaxiP>
            <FooterTaxiP>
              <FooterTaxiIconA />
              juancarlos.blazquezv@gmail.com
            </FooterTaxiP>
          </FooterTaxiContainerLeftSecond>
          {/* <FooterTaxiContainerLeftThird>
            <FooterTaxiContainerLeftLi>
              <Facebook />
            </FooterTaxiContainerLeftLi>
            <FooterTaxiContainerLeftLi>
              <Instagram />
            </FooterTaxiContainerLeftLi>
          </FooterTaxiContainerLeftThird> */}
        </FooterTaxiContainerLeft>
        <FooterTaxiContainerRight>
          <FooterTaxiContainerRightTitle>
            Servicios
            <FooterTaxiContainerRightLi>
              Traslado Interurbano
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi>
              Traslado Del Aeropuerto
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi>
              Traslado Hospitalario
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi>
              Traslado De Equipaje
            </FooterTaxiContainerRightLi>
          </FooterTaxiContainerRightTitle>
          <FooterTaxiContainerRightTitle>
            Tarifas Especiales
            <FooterTaxiContainerRightLi>
              Transporte Privado
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi>Aeropuerto</FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi>
              Servicio Empresa
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi>Colectivo </FooterTaxiContainerRightLi>
          </FooterTaxiContainerRightTitle>
          <FooterTaxiContainerRightTitle>
            Seccion
            <FooterTaxiContainerRightLi href="/">
              Inicio
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi href="/GetTaxi">
              Pedir Taxi
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi href="/AboutUs">
              Información
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi href="/Servicios">
              Servicios
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi href="/Tariffs">
              Tarifas
            </FooterTaxiContainerRightLi>
            <FooterTaxiContainerRightLi href="/Contact">
              Contacto
            </FooterTaxiContainerRightLi>
          </FooterTaxiContainerRightTitle>
        </FooterTaxiContainerRight>
      </FooterTaxiContainer>
      <FooterCopyRightDetail>
        {footerDescriptions.map((description, index) => (
          <FooterCopyRightDetailDescription key={index}>
            {description}
          </FooterCopyRightDetailDescription>
        ))}
      </FooterCopyRightDetail>
    </FooterTaxi>
  );
}

export default Footer;
