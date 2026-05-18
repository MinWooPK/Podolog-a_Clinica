import styled from "styled-components";

export const Section = styled.section`
  padding: 100px 20px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
`;

export const Eyebrow = styled.span`
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.7;
`;

export const Title = styled.h2`
  font-size: 36px;
  line-height: 1.2;
  margin: 20px 0;
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 1.7;
  opacity: 0.9;

  strong {
    font-weight: 600;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 40px;

  img {
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
    max-height: 500px;
  }
`;

export const CTA = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 20px;
  background: #000;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #fff;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const CardText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.8;
`;

export const MetaBlock = styled.div`
  margin-top: 30px;
  padding: 20px;
  border-left: 2px solid rgba(0, 0, 0, 0.2);
`;

export const MetaItem = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  opacity: 0.85;

  strong {
    font-weight: 600;
  }
`;

export const Divider = styled.div`
  margin: 40px 0;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
`;
