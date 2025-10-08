import styled, { keyframes } from "styled-components";

export const ReviewHomeContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  /* background-color: #f9f9f9; */
`;

export const TitleReview = styled.h2`
  font-size: 42px;
  color: ${({ theme }) => theme.colors.principal.secondary};
  font-weight: 700;
  text-align: center;
`;

export const SubTitleReview = styled.p`
  color: ${({ theme }) => theme.colors.principal.fifthy};
  font-weight: 500;
  font-size: 24px;
`;

// Animación de scroll vertical
const scroll = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`;

export const ReviewsBox = styled.div`
  background-color: ${({ theme }) => theme.colors.principal.pure};

  max-height: 600px; /* altura máxima */
  overflow: hidden;
  width: 100%;
  position: relative;
  justify-content: center;
  display: grid;

  /* &:hover .scroll-content {
    animation-play-state: paused; /* pausa al pasar cursor */
  /* } */
  @media (max-width: 768px) {
    max-height: 400px;
  }
`;

export const ScrollContent = styled.div`
  display: grid;
  gap: 2rem;
  align-items: center;

  grid-template-columns: repeat(3, 1fr);
  animation: ${scroll} 120s linear infinite;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    animation: ${scroll} 280s linear infinite;
  }
`;
