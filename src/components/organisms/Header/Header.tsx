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
  MobileButtonNav,
  HamburgerDivMobie,
} from "./Header.styled";

import { GoChevronLeft } from "react-icons/go";
import LogoImgSrc from "@assets/icons/SoloLogo.png";
import Doctoralia from "@assets/icons/doctoralia.png";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

/* ---------------- MENU CONFIG ---------------- */

const MENU = [
  {
    key: "podologia",
    label: "Clínica de podología",
    items: [
      { label: "Podología General", href: "/podologia" },
      { label: "Podología Deportiva", href: "/podologia/deportiva" },
      { label: "Podología Infantil", href: "/podologia/infantil" },
      { label: "Quiropodología", href: "/podologia/quiropodologia" },
      { label: "Cirugía Ungueal", href: "/podologia/nails" },
      { label: "Ortonixia", href: "/podologia/ortonixia" },
      { label: "Estudio Biomecánico", href: "/podologia/estudio_biomecanico" },
      {
        label: "Plantillas Personalizadas",
        href: "/podologia/plantillas_3D",
      },
    ],
  },
  {
    key: "antropologia",
    label: "Antropología",
    items: [
      {
        label: "Estudios de antropometría",
        href: "/antropologia/estudios_antropometria",
      },
      {
        label: "Fotogrametría postura",
        href: "/antropologia/fotogrametria_postura",
      },
      {
        label: "Dismorfías y asimetrías",
        href: "/antropologia/dismorfia_asimetría",
      },
      {
        label: "Genética aplicada a la salud",
        href: "/antropologia/genetica",
      },
      {
        label: "Investigación",
        href: "/antropologia/investigación",
      },
    ],
  },
];

const Header = () => {
  /* ---------------- STATE ---------------- */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  //  FIX: null inicial para evitar flash
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef<HTMLUListElement | null>(null);
  const location = useLocation();

  const pathname = location.pathname;

  /* ---------------- EFFECTS ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1150);
    };

    // const handleClickOutside = (event: MouseEvent) => {
    //   if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
    //     setOpenMenu(null);
    //   }
    // };

    //  IMPORTANTE: inicialización inmediata
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    // document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      // document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (!isDesktop) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDesktop]);

  const isActiveChild = (href: string) => {
    return pathname === href;
  };

  const isActiveParent = (menu: any) => {
    return menu.items.some((item: any) => pathname.startsWith(item.href));
  };
  const isActive = (href: string) => pathname === href;

  /* ---------------- HANDLERS ---------------- */

  const toggleMobileMenu = () => setIsMenuOpen((v) => !v);

  const toggleSubMenu = (key: string) => {
    setOpenMenu((prev) => (prev === key ? null : key));
  };

  /* ---------------- RENDER HELPERS ---------------- */

  const renderDesktopSubMenu = (menu: any) => (
    <SubMenu open={openMenu === menu.key}>
      {/* <SubMenuItem> */}
      {menu.items.map((item: any) => (
        <StieMenuHref
          key={item.href}
          href={item.href}
          $active={isActiveChild(item.href)}
        >
          {item.label}
        </StieMenuHref>
      ))}
      {/* </SubMenuItem> */}
    </SubMenu>
  );

  const renderMobileSubMenu = (menu: any) => {
    return (
      <SubMenuMobile open={openMenu === menu.key}>
        {menu.items.map((item: any) => (
          <SubMenuItem
            key={item.href}
            href={item.href}
            $active={isActiveChild(item.href)}

            // onClick={() => {
            //   setIsMenuOpen(false);
            //   setOpenMenu(null);
            // }}
          >
            {item.label}
          </SubMenuItem>
        ))}
      </SubMenuMobile>
    );
  };

  if (isDesktop === null) return null;

  return (
    <Navbar>
      <ContainerNavbar $scrolled={scrolled}>
        {/* LOGO */}
        <LogoContainer $scrolled={scrolled}>
          <Logo href="/">
            <LogoImage src={LogoImgSrc} alt="Logo" />
            <LogoContainerText>
              <LogoContainerFirstP>Tramontana Salud</LogoContainerFirstP>
              <LogoContainerSecondP>
                Dra. Rebeca Saludes Llamas
              </LogoContainerSecondP>
            </LogoContainerText>
          </Logo>
        </LogoContainer>

        {/* DESKTOP MENU */}
        <SiteMenu ref={menuRef}>
          {MENU.map((menu) => (
            <StieMenuLi key={menu.key}>
              <StieMenuHref
                $scrolled={scrolled}
                $active={isActiveParent(menu)}
                onClick={() => toggleSubMenu(menu.key)}
              >
                {menu.label}
                {/* <Arrow open={openMenu === menu.key}>
                  <GoChevronLeft />
                </Arrow> */}
              </StieMenuHref>
              {openMenu === menu.key && renderDesktopSubMenu(menu)}{" "}
            </StieMenuLi>
          ))}

          <StieMenuLi>
            <StieMenuHref
              $scrolled={scrolled}
              $active={isActive("/DraRebeca")}
              href="/DraRebeca"
            >
              Sobre mí
            </StieMenuHref>
          </StieMenuLi>

          <StieMenuLi>
            <StieMenuHref
              $scrolled={scrolled}
              $active={isActive("/Contact")}
              href="/Contact"
            >
              Contacto
            </StieMenuHref>
          </StieMenuLi>
        </SiteMenu>

        {/* CTA / HAMBURGER */}
        {isDesktop ? (
          <CitaContainer
            href="https://www.doctoralia.es/rebeca-saludes-llamas/podologo/palma-de-mallorca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DoctoraliaImage src={Doctoralia} /> Pedir cita
          </CitaContainer>
        ) : (
          <HamburgerMenu
            className={isMenuOpen ? "open" : ""}
            onClick={toggleMobileMenu}
          >
            <Bar />
            <Bar />
            <Bar />
          </HamburgerMenu>
        )}

        {/* MOBILE MENU */}
        {!isDesktop && (
          <NavBlack visiblenav={!isMenuOpen}>
            <NavRed visiblenav={!isMenuOpen}>
              <HamburgerDivMobie>
                <HamburgerMenu
                  className={isMenuOpen ? "open" : ""}
                  onClick={toggleMobileMenu}
                >
                  <Bar />
                  <Bar />
                  <Bar />
                </HamburgerMenu>
              </HamburgerDivMobie>

              <Logo href="/">
                <LogoImage src={LogoImgSrc} width="100px" height="100px" />
              </Logo>
              <LogoContainerText>
                <LogoContainerFirstP>Tramontana Salud</LogoContainerFirstP>
                <LogoContainerSecondP>
                  Rebeca Saludes Llamas
                </LogoContainerSecondP>
              </LogoContainerText>
              <CitaContainer
                href="https://www.doctoralia.es/rebeca-saludes-llamas/podologo/palma-de-mallorca"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DoctoraliaImage src={Doctoralia} /> Pedir cita
              </CitaContainer>
              <MobileUlDiv>
                <StieMenuLi>
                  <StieMenuHref $mobile href="/" $active={isActive("/")}>
                    Inicio
                  </StieMenuHref>
                </StieMenuLi>

                {MENU.map((menu) => (
                  <StieMenuLi key={menu.key}>
                    <MobileButtonNav
                      $active={isActiveParent(menu)}
                      onClick={() => toggleSubMenu(menu.key)}
                    >
                      {menu.label}
                      <Arrow open={openMenu === menu.key}>
                        <GoChevronLeft />
                      </Arrow>
                    </MobileButtonNav>
                    {openMenu === menu.key && renderMobileSubMenu(menu)}{" "}
                  </StieMenuLi>
                ))}

                <StieMenuLi>
                  <StieMenuHref
                    $mobile
                    href="/DraRebeca"
                    $active={isActive("/DraRebeca")}
                  >
                    Sobre mí
                  </StieMenuHref>
                </StieMenuLi>

                <StieMenuLi>
                  <StieMenuHref
                    $mobile
                    href="/Contact"
                    $active={isActive("/Contact")}
                  >
                    Contacto
                  </StieMenuHref>
                </StieMenuLi>
              </MobileUlDiv>
              <CopyRightDescription>
                © 2025 Tramontana Salud - All Rights Reserved.
              </CopyRightDescription>
            </NavRed>
          </NavBlack>
        )}
      </ContainerNavbar>
    </Navbar>
  );
};

export default Header;
function isActiveParent(menu: any): boolean | undefined {
  throw new Error("Function not implemented.");
}
function isActiveChild(href: any): boolean | undefined {
  throw new Error("Function not implemented.");
}
