import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterRoot = styled.footer`
  background: #123f41;
  color: #e3eeee;

  a {
    text-decoration: none;
  }

  a:focus-visible {
    outline: 2px solid #ffc61a;
    outline-offset: 5px;
    border-radius: 4px;
  }
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: 1140px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 24px 20px 16px;

  @media (max-width: 600px) {
    padding-top: 20px;
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.3fr);
  align-items: center;
  gap: 32px;
  padding-bottom: 16px;

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
`;

export const FooterColumn = styled.div`
  min-width: 0;
`;

export const BrandLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  max-width: 100%;

  > div {
    min-width: 0;
  }
`;

export const LogoImage = styled.img`
  display: block;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  object-fit: contain;

  @media (max-width: 420px) {
    width: 46px;
    height: 46px;
  }
`;

export const BrandName = styled.span`
  display: block;
  color: #86dcd8;
  font-size: clamp(20px, 2vw, 22px);
  font-weight: 600;
  line-height: 1.25;

  @media (max-width: 420px) {
    font-size: 20px;
  }
`;

export const BrandSubtitle = styled.span`
  display: block;
  margin-top: 5px;
  color: #ffda68;
  font-size: 12px;
  line-height: 1.5;
`;

export const FooterAddress = styled.address`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2px 20px;
  font-size: 13px;
  font-style: normal;
  line-height: 1.6;

  > :first-child {
    grid-column: 1 / -1;
  }

  @media (max-width: 1000px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    flex-shrink: 0;
    color: #86dcd8;
  }

  span,
  a {
    min-width: 0;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    color: inherit;
  }

  a:hover {
    color: #ffda68;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

export const FooterBottom = styled.div`
  padding-top: 12px;
  border-top: 1px solid rgba(227, 238, 238, 0.18);
  color: #bed1d1;
  font-size: 11px;
  line-height: 1.7;

  p {
    margin: 0;
  }
`;
