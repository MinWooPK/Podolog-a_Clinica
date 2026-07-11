import styled from "styled-components";

export const ReviewHomeContainer = styled.section`
  padding: 80px 20px;
  background: #f9fbfb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleReview = styled.h2`
  font-size: 32px;
  color: #18595b;
  margin-bottom: 10px;
  text-align: center;
`;

export const SubTitleReview = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
  text-align: center;
`;

export const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  width: 100%;
  max-width: 1100px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
