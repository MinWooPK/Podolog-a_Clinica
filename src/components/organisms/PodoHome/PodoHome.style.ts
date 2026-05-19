import styled from "styled-components";

// === Styled Components ===
export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  padding: 4rem 8rem;
  background: linear-gradient(135deg, #e6f1f2 0%, #f6fbfb 50%, #e9f3f4 100%);
  overflow: hidden;

  min-height: 500px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
    min-height: auto;
    padding: 2rem 0.5rem;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;

  max-width: 520px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
`;
export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.5px;

  color: #18595b;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: #49ddd9;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  font-weight: 600;
  line-height: 1.6;

  &:first-of-type {
    font-weight: 500;
    color: #333;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Btn = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: #0070f3;
  color: white;
  transition: 0.3s;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    order: -1;
  }
`;

export const SideImage = styled.img`
  width: 100%;
  max-width: 380px;
  object-fit: contain;
  border-radius: 15px;

  @media (max-width: 768px) {
    max-width: 260px;
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
