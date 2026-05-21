import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 120px 20px;
`;

export const Card = styled.div`
  display: flex;
  gap: 40px;
  max-width: 1000px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.8s ease;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 350px;
  object-fit: cover;

  @media (max-width: 900px) {
    width: 100%;
    height: 400px;
    object-fit: contain;
  }
`;

export const Content = styled.div`
  padding: 30px;
`;

export const Title = styled.h2`
  font-size: 18px;
  color: #0c6f6f;
  text-transform: uppercase;
`;

export const Name = styled.h1`
  font-size: 28px;
  margin: 0;
  color: rgba(255, 198, 26, 1);
`;

export const Subtitle = styled.h3`
  font-size: 15px;
  color: #777;
  font-weight: 400;
`;

export const Section = styled.div`
  margin-bottom: 15px;
`;

export const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.6;

  strong {
    color: #0c6f6f;
  }

  u {
    text-decoration: none;
    border-bottom: 2px solid #c9a227;
  }
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: #eee;
  margin: 20px 0;
`;

export const HighlightBox = styled.div`
  padding: 15px;
  background: linear-gradient(135deg, #0c6f6f, #c9a227);
  color: white;
  border-radius: 12px;
`;

export const QuoteBox = styled.div`
  margin-top: 20px;
  font-style: italic;
  padding-left: 15px;
  border-left: 3px solid #c9a227;
  color: #444;
`;
