import styled from "styled-components";

// === Styled Components ===
export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: #fff;
  overflow: hidden;
  position: relative;
  @media (max-width: 768px) {
    height: 530px;
    width: 100%;
    margin-top: 0;
    /* opacity: 0.4; */
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
  }
`;

export const LeftContent = styled.div`
  z-index: 2;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: #444;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
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
  position: relative;
  width: 45%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 5rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`;

export const SideImage = styled.img`
  width: 100%;
  max-width: 350px;
  object-fit: contain;
`;
