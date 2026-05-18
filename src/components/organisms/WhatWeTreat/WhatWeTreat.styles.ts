import styled from "styled-components";

export const Container = styled.section`
  /* width: 100%; */
  padding: 50px 20px;
  background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 60px;

  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  padding: 24px;

  display: flex;
  gap: 16px;

  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);

  transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    border-color: #dbe3ec;
  }
`;

export const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #eaf0ff;
  color: #4a78d0;

  flex-shrink: 0;

  transition: all 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Badge = styled.span`
  font-size: 11px;
  font-weight: 600;

  color: #4a78d0;
  background: rgba(74, 120, 208, 0.08);

  padding: 4px 10px;
  border-radius: 999px;

  width: fit-content;

  transition: all 0.25s ease;

  ${Card}:hover & {
    background: rgba(74, 120, 208, 0.12);
  }
`;

export const CardTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: #0f172a;
`;

export const CardText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #556070;
`;
