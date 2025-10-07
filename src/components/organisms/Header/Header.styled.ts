import styled, { keyframes } from "styled-components";

export const Navbar = styled.section`
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  /* padding: 10px 40px; */
  align-items: center;
  /* justify-content: space-between; */
  /* padding: 0.5rem 1rem; */
  left: 0;
  z-index: 5;
  /* position: fixed; */
  /* background-color: white; */
  background-color: rgba(
    255,
    255,
    255,
    0.15
  ); /* blanco muy suave y transparente */
  backdrop-filter: blur(6px); /* difumina el fondo para mejorar legibilidad */

  width: 100%;
  @media (max-width: 768px) {
    flex-flow: row nowrap;
  }
  @media (max-width: 430px) {
    padding: 10px 0px;
  }
`;

interface LogoImageProps {
  width?: string;
  height?: string;
}

export const LogoImage = styled.img<LogoImageProps>`
  width: ${({ width }) => width || "40px"};
  height: ${({ height }) => height || "40px"};
`;

export const ContainerNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
export const LogoImg = styled.img`
  width: 205.5px;
  height: 75px;
  @media (max-width: 768px) {
    height: 50px;
    width: 137px;
  }
`;
export const Logo = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  cursor: pointer;
`;

export const SiteMenu = styled.ul`
  text-align: center;
  @media (max-width: 1020px) {
    display: none;
  }
`;

interface SubMenuProps {
  open: boolean;
}

export const SubMenu = styled.ul<SubMenuProps>`
  list-style: none;
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
  background-color: rgba(
    255,
    255,
    255,
    0.15
  ); /* blanco muy suave y transparente */
  backdrop-filter: blur(6px);
  padding: 10px 0;
  margin: 0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: ${({ open }) => (open ? "block" : "none")};
  z-index: 100;
`;

interface ArrowProps {
  open: boolean;
}

export const Arrow = styled.span<ArrowProps>`
  display: inline-block;
  vertical-align: middle;
  margin-left: 8px;
  transition: transform 0.3s ease-in-out;
  transform: rotate(${({ open }) => (open ? "-90deg" : "0deg")});
`;
export const SubMenuItem = styled.li`
  /* padding: 8px 20px; */

  & > a {
    text-decoration: none;
    color: white;
  }

  /* &:hover {
    background: #f5f5f5;
  } */
`;

export const StieMenuUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StieMenuLi = styled.li`
  cursor: pointer;
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0 12px;
  font-weight: 700;
  list-style: none;
  transition: all 0.35s ease-in-out;
`;

export const StieMenuHref = styled.a`
  color: #fff;
  font-size: 18px;
  letter-spacing: 0;
  padding: 10px 10px;
  cursor: pointer;
  position: relative;
  text-decoration: none; /* Para quitar el subrayado predeterminado */
  overflow: hidden;
  display: inline-block;
  white-space: normal;
  &:hover {
    color: #ffc61a;
  }

  &:before,
  &:after {
    content: attr(data-hover);
    position: absolute;
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
  }

  &:before {
    height: 3px;
    width: 100%;
    background-color: #ffc61a;
    bottom: -1px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.35s ease;
  }

  &:hover:before {
    transform-origin: left;
    transform: scaleX(1);
  }

  &:after {
    top: 0;
    left: 0;
    padding: 0.5em 0;
    max-width: 0%;
    transition: max-width 0.35s ease;
  }

  &:hover:after {
    max-width: 100%;
  }
`;

export const HamburgerMenu = styled.div`
  width: 30px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  cursor: pointer;
  /* margin: auto; */
  &:hover span:nth-child(2) {
    width: 100%;
  }
  & span:nth-child(1) {
    top: 0px;
    width: 100%;
  }
  & span:nth-child(2) {
    top: 9px;
    width: 22px;
  }
  & span:nth-child(3) {
    top: 18px;
    width: 100%;
  }

  &.open span:nth-child(1) {
    top: 9px;
    right: 0;
    transform: rotate(135deg);
    width: 28px !important;
  }

  &.open span:nth-child(3) {
    top: 9px;
    right: 0;
    transform: rotate(-135deg);
    width: 28px !important;
  }

  &.open span:nth-child(2) {
    opacity: 0;
    left: -20px;
  }
`;

export const Bar = styled.span`
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #ffc61a;
  opacity: 1;
  left: 0;
  top: 0;
  transform: rotate(0deg);
  transition: width 0.3s ease;
`;

export const NavbarButton = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 30px;
  color: #ffc61a;
  height: 64px;
  line-height: 64px;
  padding: 0 21px;
  position: relative;
  font-size: 17px;
  font-weight: 600;
  border-radius: 3rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavBlack = styled("div").withConfig({
  shouldForwardProp: (prop) => prop !== "visiblenav",
})<NavProps>`
  background-color: #ffc61a;
  width: 60%;
  max-width: 480px;
  min-width: 260px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100vh;
  transform: translateX(${(props) => (props.visiblenav ? "-100%" : "0")});
  transition: transform 0.3s ease-in-out;
`;
interface NavProps {
  visiblenav: boolean;
}
export const NavRed = styled("div").withConfig({
  shouldForwardProp: (prop) => prop !== "visiblenav",
})<NavProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  /* background-color: black; */
  /* background-color: white; */
  background-color: ${({ theme }) => theme.colors.principal.secondary};

  width: 95%;
  gap: 2rem;
  transition-delay: 0.2s;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100vh;
  transform: translateX(${(props) => (props.visiblenav ? "-100%" : "0")});
  transition: transform 1.3s ease-in-out;
`;

export const SideBarTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  color: #ffc61a;
`;

export const IconCircle = styled.div`
  background-color: #ffc61a;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 91px;
  border-radius: 23rem;
`;

export const IconDescription = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export const CopyRightDescription = styled.p`
  color: #ffc61a;
  font-size: 10px;
  font-weight: 600;
  margin: auto;
  text-align: center;
`;

export const MobileUlDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: auto;
`;

export const LogoContainerText = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  color: white;
  align-items: start;
`;
export const LogoContainerFirstP = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.principal.fifthy};

  /* color: #ffc61a; */
  @media (max-width: 1100px) {
    font-size: 24px;
  }
`;
export const LogoContainerSecondP = styled.div`
  font-size: 20px;
  margin-top: -18px;
  margin-left: 7px;
  color: ${({ theme }) => theme.colors.principal.fourthy};

  @media (max-width: 420px) {
    margin-top: 0;
    font-size: 14px;
    margin-left: 4px;
  }
`;

export const DoctoraliaImage = styled.img`
  width: 25px;
  height: 25px;
`;

export const CitaContainer = styled.a`
  background-color: rgba(73, 221, 217, 0.2);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.principal.terciary};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.principal.terciary};
  cursor: pointer;
  transition: all 0.3s ease; // transición suave

  &:hover {
    background-color: ${({ theme }) => theme.colors.principal.secondary};
    color: ${({ theme }) => theme.colors.principal.first};
  }
`;

export const SubMenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-bottom: 10px;
  a {
    font-size: 14px;
    color: #ddd;
    padding: 6px 0;
    text-decoration: none;
    transition: color 0.2s;
  }
  a:hover {
    color: #fff;
  }
`;
