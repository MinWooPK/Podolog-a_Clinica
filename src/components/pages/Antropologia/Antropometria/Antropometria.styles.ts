import styled from "styled-components";

interface Props {
  backgroundImage?: string;
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
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : "none"};
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

export const SectionAntropometria = styled.section`
  padding: 120px 24px;
  background: linear-gradient(135deg, #e6f1f2 0%, #f6fbfb 50%, #e9f3f4 100%);
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

export const Row = styled.div`
  display: flex;
  gap: 22px;
  align-items: flex-start;

  padding-bottom: 28px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);

  &:last-child {
    border-bottom: none;
  }
`;

export const Icon = styled.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #93c5fd;
  opacity: 0.9;
`;

export const Content = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 8px;
  }

  p {
    font-size: 15.5px;
    line-height: 1.8;
    color: #94a3b8;
    max-width: 750px;
  }
`;
