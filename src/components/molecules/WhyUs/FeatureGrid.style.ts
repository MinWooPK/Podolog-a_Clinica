import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 6rem;
  background: #f6fbfb;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 32px;
    color: #18595b;
    margin: 0;
  }
`;

export const Grid = styled.div`
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

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const InfoCard = styled.div``;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const IconBox = styled.div`
  min-width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e6f1f2;

  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin: 0 0 0.5rem 0;
  color: #18595b;
`;

export const Description = styled.p`
  font-size: 14px;
  margin: 0;
  color: #666;
  line-height: 1.5;
`;
