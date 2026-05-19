import styled, { keyframes } from "styled-components";

export const HeroContainer = styled.section<{ $bg: string }>`
  width: 100%;
  height: 100vh;

  background-image: url(${({ $bg }) => $bg});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroContent = styled.div`
  max-width: 700px;
  margin-left: 5rem;
  animation: ${fadeUp} 0.8s ease-out;

  background: rgba(255, 255, 255, 0.62);
  backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.2);

  padding: 2rem;
  border-radius: 24px;
  @media (max-width: 768px) {
    margin-left: 0;
    margin: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 0.5rem;
  color: #18595b;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  font-size: 3rem;
  margin: 0;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.92);
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  margin-top: 1rem;
  opacity: 0.85;
  line-height: 1.6;
  color: #1f1f1f;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

/*  BOTONES COMO LINKS */
export const PrimaryButton = styled.a`
  background: #18595b;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.2s ease;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #0f3f40;
  }
`;

export const SecondaryButton = styled.a`
  background: transparent;
  /* color: white; */
  border: 1px solid #0f3f40;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.2s ease;
  color: #0f3f40;
  cursor: pointer;
  &:hover {
    background: white;
    color: #18595b;
  }
`;
