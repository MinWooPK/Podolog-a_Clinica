import styled from "styled-components";

export const FooterPodologia = styled.footer`
  background: #18595b;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* align-items: center; */
  font-size: 18px;
  gap: 2rem;
  padding: 2rem;
  text-align: center;

  @media (max-width: 420px) {
    padding: 0.5rem;
    font-size: 14px;
  }
`;

interface LogoImageProps {
  width?: string;
  height?: string;
}

export const FooterTitleContaienr = styled.div``;
export const LogoImage = styled.img<LogoImageProps>`
  width: ${({ width }) => width || "40px"};
  height: ${({ height }) => height || "40px"};
`;
export const FooterTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.principal.fifthy};

  /* color: #ffc61a; */
  @media (max-width: 1100px) {
    font-size: 16px;
  }
`;

export const FooterSubTitle = styled.div`
  font-size: 14x;
  margin-left: 7px;
  color: rgba(255, 198, 26, 1);
  font-weight: 500;

  @media (max-width: 420px) {
    margin-top: 0;
    font-size: 12px;
    /* margin-left: 4px; */
  }
`;
export const FooterMiddle = styled.div`
  display: flex;
`;

export const FooterLast = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.principal.secondary};
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0rem;
  }
`;
export const FooterCopyRight = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.principal.pure};
`;
export const FooterSubInfo = styled.div`
  font-size: 12px;
  gap: 2rem;
  display: flex;
  color: ${({ theme }) => theme.colors.principal.pure};
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
