import styled from "styled-components";

export const Contaienr = styled.div`
  width: 100%;
`;

export const ContainerVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.principal.pure};
  z-index: 2;
`;

export const Description = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none; /* para que no interfiera con clicks */
`;

export const TreatmentsSection = styled.section`
  padding: 5rem 2rem;
  background: #f6fbfb;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    color: #18595b;
    font-size: 32px;
    margin: 0;
  }
`;

/* 🔥 ESTO ES LO IMPORTANTE: UNA SOLA FILA HORIZONTAL */
export const TreatmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const TreatmentCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  gap: 12px;

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const TreatmentTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #18595b;
`;

export const TreatmentText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`;

export const TreatmentButton = styled.a`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  color: #18595b;
  font-weight: 600;
  text-decoration: none;

  span {
    transition: transform 0.2s ease;
  }

  &:hover span {
    transform: translateX(4px);
  }
`;
