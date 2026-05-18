import styled from "styled-components";

interface Props {
  $backgroundImage?: string;
}

export const ContaienrFirst = styled.section<Props>`
  margin: 0 auto;
  padding: 120px 20px 90px;
  object-fit: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  position: relative;
  overflow: hidden;

  /*  imagen desde props */
  background-image: ${({ $backgroundImage }) =>
    $backgroundImage ? `url(${$backgroundImage})` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* overlay premium */
  &::after {
    content: "";
    position: absolute;
    inset: 0;

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.62),
      rgba(255, 255, 255, 0.75)
    );

    backdrop-filter: blur(2px);

    z-index: 1;
  }

  /* contenido encima */
  & > * {
    position: relative;
    z-index: 2;
  }

  /* línea decorativa */
  &::before {
    content: "";
    position: absolute;
    top: 45px;
    left: 50%;
    transform: translateX(-50%);

    width: 90px;
    height: 3px;
    border-radius: 999px;

    background: linear-gradient(90deg, #2563eb, #60a5fa);
    opacity: 0.9;

    z-index: 2;
  }
`;

export const Eyebrow = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #2563eb;

  margin-bottom: 18px;
`;

export const Title = styled.h2`
  font-size: 44px;
  font-weight: 700;
  line-height: 1.1;

  color: #0f172a;

  max-width: 750px;

  margin-bottom: 22px;

  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.9;

  color: #475569;

  max-width: 820px;
`;
