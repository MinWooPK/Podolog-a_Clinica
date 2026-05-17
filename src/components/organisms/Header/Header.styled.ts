import styled, { keyframes } from "styled-components";

/* ---------------- NAVBAR ---------------- */

export const Navbar = styled.section`
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);

  @media (max-width: 768px) {
    flex-flow: row nowrap;
  }

  @media (max-width: 430px) {
    padding: 10px 0px;
  }
`;

/* ---------------- LOGO ---------------- */

interface LogoImageProps {
  width?: string;
  height?: string;
}

export const LogoImage = styled.img<LogoImageProps>`
  width: ${({ width }) => width || "40px"};
  height: ${({ height }) => height || "40px"};
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

export const LogoContainer = styled.div<{ $scrolled?: boolean }>`
  display: flex;
  gap: 2rem;
  transform: ${({ $scrolled }) => ($scrolled ? "scale(1.05)" : "scale(1)")};
  transition: transform 0.2s ease;
`;

export const LogoContainerText = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  color: white;
  align-items: start;
`;

export const LogoContainerFirstP = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.principal.fifthy};

  @media (max-width: 1100px) {
    font-size: 24px;
  }
`;

export const LogoContainerSecondP = styled.div`
  font-size: 16px;
  margin-top: -18px;
  margin-left: 7px;
  color: ${({ theme }) => theme.colors.principal.fourthy};
  font-weight: 500;

  @media (max-width: 420px) {
    margin-top: 0;
    font-size: 14px;
    margin-left: 4px;
  }
`;

/* ---------------- CONTAINER ---------------- */

export const ContainerNavbar = styled.div<{ $scrolled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;

  background: ${({ $scrolled }) => ($scrolled ? "#18595b" : "transparent")};

  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(10px)" : "none")};

  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none"};

  transition: all 0.3s ease;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

/* ---------------- MENU ---------------- */

export const SiteMenu = styled.ul`
  text-align: center;

  @media (max-width: 1020px) {
    display: none;
  }
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
`;

/* ---------------- LINKS (FIX PRINCIPAL) ---------------- */

export const StieMenuHref = styled.a<{ $scrolled?: boolean }>`
  font-size: 14px;
  padding: 10px;
  text-decoration: none;
  position: relative;
  display: inline-block;

  color: ${({ $scrolled, theme }) =>
    $scrolled ? "#fff" : theme.colors.principal.secondary};

  &:hover {
    color: #ffc61a;
  }

  &:before {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: #ffc61a;
    bottom: -1px;
    left: 0;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.35s ease;
  }

  &:hover:before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

/* ---------------- SUBMENU ---------------- */

export const SubMenu = styled.ul<{ open: boolean }>`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(6px);
  border-radius: 8px;
  padding: 10px 0;
  margin: 0;

  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-10px)")};

  pointer-events: ${({ open }) => (open ? "auto" : "none")};

  transition: all 0.25s ease;
`;

export const SubMenuItem = styled.li`
  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.principal.secondary};
  }
`;

export const Arrow = styled.span<{ open: boolean }>`
  display: inline-block;
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: rotate(${({ open }) => (open ? "-90deg" : "0deg")});
`;

/* ---------------- MOBILE ---------------- */

export const HamburgerMenu = styled.div`
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
`;

export const Bar = styled.span`
  position: absolute;
  height: 2px;
  width: 100%;
  background: #ffc61a;
`;

/* ---------------- MOBILE MENU ---------------- */

interface NavProps {
  visiblenav: boolean;
}

export const NavBlack = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "visiblenav",
})<NavProps>`
  background-color: #ffc61a;
  width: 60%;
  max-width: 480px;
  min-width: 260px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;

  transform: translateX(${({ visiblenav }) => (visiblenav ? "-100%" : "0")});

  transition: transform 0.3s ease-in-out;
`;

export const NavRed = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "visiblenav",
})<NavProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  background-color: ${({ theme }) => theme.colors.principal.secondary};

  width: 95%;
  height: 100vh;

  transform: translateX(${({ visiblenav }) => (visiblenav ? "-100%" : "0")});

  transition: transform 1.3s ease-in-out;
`;

export const MobileUlDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MobileButtonNav = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

/* ---------------- CTA ---------------- */

export const CitaContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 15px;
  text-decoration: none;
`;

export const CopyRightDescription = styled.p`
  color: #ffc61a;
  font-size: 10px;
  font-weight: 600;
  margin: auto;
  text-align: center;
`;

export const DoctoraliaImage = styled.img`
  width: 25px;
  height: 25px;
`;

export const SubMenuMobile = styled.div<{ open?: boolean }>`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  overflow: hidden;
  max-height: ${({ open }) => (open ? "500px" : "0")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: all 0.3s ease;

  a {
    color: #ddd;
    text-decoration: none;
  }
`;
