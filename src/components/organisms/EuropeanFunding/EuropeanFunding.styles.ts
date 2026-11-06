import styled from "styled-components";

export const FundingSection = styled.section`
  padding: 40px 20px;
  background: ${({ theme }) => theme.colors.principal.pure};
  color: #555;

  @media (max-width: 768px) {
    padding: 32px 20px;
  }
`;

export const FundingContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  min-width: 0;
  margin: 0 auto;
  text-align: center;
`;

export const FundingTitle = styled.h2`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.principal.secondary};
  font-size: clamp(20px, 2vw, 24px);
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.02em;
  text-wrap: balance;
`;

export const FundingText = styled.p`
  max-width: 86ch;
  margin: 0 auto 24px;
  font-size: 14px;
  line-height: 1.75;
  text-wrap: pretty;
`;

export const FundingLogos = styled.img`
  display: block;
  width: 100%;
  max-width: 1100px;
  height: auto;
  margin: 0 auto;
  aspect-ratio: 2709 / 224;

  @media (max-width: 1199px) {
    display: none;
  }
`;

export const FundingMobileLogos = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1199px) {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    align-items: center;
    gap: 20px 24px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 479px) {
    grid-template-columns: minmax(0, 1fr);
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    min-height: 76px;
  }

  img {
    display: block;
    width: auto;
    max-width: 100%;
    height: 76px;
    object-fit: contain;
  }
`;
