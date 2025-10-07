import styled from "styled-components";

export const FooterTaxi = styled.footer`
  background-color: ${({ theme }) => theme.colors.principal.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  min-height: 200px;
  gap: 2rem;
  padding: 3rem;
  text-align: center;
  @media (max-width: 420px) {
    padding: 0.5rem;
    font-size: 14px;
  }
`;

export const FooterTaxiContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
`;

export const FooterTaxiContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const FooterTaxiContainerLeftFrist = styled.div`
  display: flex;
  align-items: center;
`;
export const FooterTaxiContainerLeftFristSub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const FooterTaxiContainerLogoH2 = styled.h1`
  color: #ffc61a;
  font-size: 48px;
  letter-spacing: 3px;
  height: 53px;
`;
export const FooterTaxiContainerLogoP = styled.p`
  color: ${({ theme }) => theme.colors.principal.pure};
  margin-left: 10px;
`;

export const FooterTaxiImg = styled.img`
  max-width: 205px;
`;
export const FooterTaxiP = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
`;
export const FooterTaxiIconA = styled.img``;
export const FooterTaxiIconB = styled.img``;

export const FooterTaxiContainerLeftSecond = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const FooterTaxiContainerLeftThird = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
export const FooterTaxiContainerLeftLi = styled.li`
  background-color: #ffc61a;
  list-style: none;

  border-radius: 23rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

export const FooterTaxiContainerRightLi = styled.a`
  list-style: none;
  display: flex;
  text-decoration: none;
  justify-content: start;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 400;
  text-align: start;
  &:before {
    content: "";
    width: 11px;
    height: 4px;
    display: inline-block;
    background-color: #ffc61a;
    margin-right: 9px;
  }

  &:hover:before {
    background: #ffbf00; /* Change background color on hover */
  }
`;

export const FooterTaxiContainerRight = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  padding-top: 3rem;
`;
export const FooterTaxiContainerRightTitle = styled.div`
  text-align: left;
  color: #ffc61a;
  font-size: 26px;
  margin-top: 10px;
  margin-bottom: 15px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const LinkBar = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const LinkLi = styled.li`
  color: ${({ theme }) => theme.colors.principal.grey};
  cursor: pointer;
`;

export const FooterCopyRightDetail = styled.div`
  display: flex;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.principal.pure};
`;
export const FooterCopyRightDetailDescription = styled.p``;
