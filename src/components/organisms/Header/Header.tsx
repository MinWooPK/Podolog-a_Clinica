import {
  Bar,
  ContainerNavbar,
  CopyRightDescription,
  HamburgerMenu,
  Logo,
  LogoContainer,
  MobileUlDiv,
  NavBlack,
  NavRed,
  Navbar,
  SiteMenu,
  StieMenuHref,
  StieMenuLi,
  LogoContainerText,
  LogoContainerFirstP,
  LogoContainerSecondP,
  LogoImage,
  SubMenu,
  SubMenuItem,
  Arrow,
  DoctoraliaImage,
  CitaContainer,
  SubMenuMobile,
} from "./Header.styled";

import { GoChevronLeft } from "react-icons/go";

import LogoImgSrc from "@assets/icons/SoloLogo.png";
import Doctoralia from "@assets/icons/doctoralia.png";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState<boolean>(true);
  const [isDesktop, setIsDestkop] = useState(window.innerWidth > 1020);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const menuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDestkop(window.innerWidth > 1020);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // // 👇 Maneja clics fuera del menú para cerrar submenús
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
  //       setOpenMenu(null);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setNavVisible(!navVisible);
  };

  const toggleSubMenu = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <Navbar>
      <ContainerNavbar>
        <LogoContainer>
          <Logo href="/">
            <LogoImage src={LogoImgSrc} alt="Logo" />
            <LogoContainerText>
              <LogoContainerFirstP>Tramontana Salud</LogoContainerFirstP>
              <LogoContainerSecondP>Rebeca Saludes Llamas</LogoContainerSecondP>
            </LogoContainerText>
          </Logo>
        </LogoContainer>
        {/* 🔽 referencia al SiteMenu */}
        <SiteMenu ref={menuRef}>
          {/* Clínica */}
          <StieMenuLi onMouseEnter={() => setOpenMenu("podologia")}>
            <StieMenuHref>
              Clínica de podología
              <Arrow open={openMenu === "podologia"}>
                <GoChevronLeft />
              </Arrow>
            </StieMenuHref>
            <SubMenu
              open={openMenu === "podologia"}
              onMouseEnter={() => setOpenMenu("podologia")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <SubMenuItem>
                <StieMenuHref href="/podologia/General">
                  Podología General
                </StieMenuHref>
                <StieMenuHref href="/podologia/Deportiva">
                  Podología Deportiva
                </StieMenuHref>
                <StieMenuHref href="/podologia/Infantil">
                  Podología Infantil
                </StieMenuHref>
                <StieMenuHref href="/podologia/Quiropodia">
                  Quiropodia
                </StieMenuHref>
                <StieMenuHref href="/podologia/nails">
                  Cirugía de uña
                </StieMenuHref>
                <StieMenuHref href="/podologia/biomecanica">
                  Estudio biomecánica
                </StieMenuHref>
              </SubMenuItem>
            </SubMenu>
          </StieMenuLi>

          {/* Antropología */}
          <StieMenuLi>
            <StieMenuHref onMouseEnter={() => setOpenMenu("antropologia")}>
              Antropología
              <Arrow open={openMenu === "antropologia"}>
                <GoChevronLeft />
              </Arrow>
            </StieMenuHref>
            <SubMenu
              open={openMenu === "antropologia"}
              onMouseEnter={() => setOpenMenu("antropologia")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <SubMenuItem>
                <StieMenuHref
                  href="/antropologia/Cultura"
                  style={{ margin: "0px 10px" }}
                >
                  Clinica y cultura
                </StieMenuHref>{" "}
                <StieMenuHref
                  href="/antropologia/Interdisciplinar"
                  style={{ margin: "0px 10px" }}
                >
                  Formación interdistiplinar
                </StieMenuHref>{" "}
                <StieMenuHref href="/antropologia/Talleres">
                  Talleres
                </StieMenuHref>{" "}
              </SubMenuItem>
            </SubMenu>
          </StieMenuLi>

          <StieMenuLi onMouseEnter={() => setOpenMenu(null)}>
            <StieMenuHref href="/Tariffs">Sobre mí</StieMenuHref>
          </StieMenuLi>
          <StieMenuLi onMouseEnter={() => setOpenMenu(null)}>
            <StieMenuHref href="/Contact">Contacto</StieMenuHref>
          </StieMenuLi>
        </SiteMenu>
        {!isDesktop ? (
          <HamburgerMenu
            className={isMenuOpen ? "open" : ""}
            onClick={toggleMenu}
          >
            <Bar />
            <Bar />
            <Bar />
          </HamburgerMenu>
        ) : (
          <CitaContainer
            href="https://www.doctoralia.es/rebeca-saludes-llamas/podologo/palma-de-mallorca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DoctoraliaImage src={Doctoralia} /> Pedir cita
          </CitaContainer>
        )}
        <NavBlack className="nav-black" visiblenav={navVisible}>
          <NavRed className="nav-red" visiblenav={navVisible}>
            <Logo href="/">
              <LogoImage src={LogoImgSrc} width="60px" height="60px" />
            </Logo>
            <LogoContainerText>
              <LogoContainerFirstP>Tramontana Salud</LogoContainerFirstP>
              <LogoContainerSecondP>Rebeca Saludes Llamas</LogoContainerSecondP>
            </LogoContainerText>
            {/* <>
              <SideBarTitle>Información Contacto</SideBarTitle>
              <IconCircle>📞</IconCircle>
              <IconDescription>+34 623 56 56 14</IconDescription>
              <IconCircle>📧</IconCircle>
              <IconDescription>juancarlos.blazquezv@gmail.com</IconDescription>
              <IconCircle>📍</IconCircle>
              <IconDescription>Gipuzkoa - Euskadi</IconDescription>
            </> */}

            <MobileUlDiv>
              <StieMenuLi>
                <StieMenuHref href="/">Inicio</StieMenuHref>
              </StieMenuLi>

              {/* Clínica de Podología */}
              <StieMenuLi>
                <button
                  onClick={() => toggleSubMenu("podologia")}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    background: "none",
                    border: "none",
                    fontSize: "16px",
                    padding: "10px 10px",
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  Clínica de podología
                  <Arrow open={openMenu === "podologia"}>
                    <GoChevronLeft
                      style={{
                        transform:
                          openMenu === "podologia"
                            ? "rotate(-90deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </Arrow>
                </button>

                {openMenu === "podologia" && (
                  <SubMenuMobile>
                    <StieMenuHref href="/podologia/General">
                      Podología General
                    </StieMenuHref>
                    <StieMenuHref href="/podologia/Deportiva">
                      Podología Deportiva
                    </StieMenuHref>
                    <StieMenuHref href="/podologia/Infantil">
                      Podología Infantil
                    </StieMenuHref>
                    <StieMenuHref href="/podologia/Quiropodia">
                      Quiropodia
                    </StieMenuHref>
                    <StieMenuHref href="/podologia/nails">
                      Cirugía de uña
                    </StieMenuHref>
                    <StieMenuHref href="/podologia/biomecanica">
                      Estudio biomecánica
                    </StieMenuHref>
                  </SubMenuMobile>
                )}
              </StieMenuLi>

              {/* Antropología */}
              <StieMenuLi>
                <button
                  onClick={() => toggleSubMenu("antropologia")}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    background: "none",
                    border: "none",
                    color: "white",
                    fontSize: "16px",
                    padding: "10px 10px",
                    fontWeight: "700",
                  }}
                >
                  Antropología
                  <Arrow open={openMenu === "antropologia"}>
                    <GoChevronLeft
                      style={{
                        transform:
                          openMenu === "antropologia"
                            ? "rotate(-90deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </Arrow>
                </button>

                {openMenu === "antropologia" && (
                  <SubMenuMobile>
                    <StieMenuHref href="/antropologia/Cultura">
                      Clínica y cultura
                    </StieMenuHref>
                    <StieMenuHref href="/antropologia/Interdisciplinar">
                      Formación interdisciplinar
                    </StieMenuHref>
                    <StieMenuHref href="/antropologia/Talleres">
                      Talleres
                    </StieMenuHref>
                  </SubMenuMobile>
                )}
              </StieMenuLi>

              <StieMenuLi>
                <StieMenuHref href="/Tariffs">Sobre mí</StieMenuHref>
              </StieMenuLi>

              <StieMenuLi>
                <StieMenuHref href="/Contact">Contacto</StieMenuHref>
              </StieMenuLi>
            </MobileUlDiv>

            <CopyRightDescription>
              © 2025 MinWoo Park Kim <br /> - All Rights Reserved.
            </CopyRightDescription>
          </NavRed>
        </NavBlack>
      </ContainerNavbar>
    </Navbar>
  );
};

export default Header;
