import styled from "styled-components";

export const Container = styled.section`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 60px 20px;
  background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #0f172a;
  /* margin-bottom: 60px; */

  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Grid = styled.div`
  max-width: 1200px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1åfr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: 16px;
  color: #64748b;
  max-width: 700px;
  margin: -40px auto 60px auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 40px;
  }
`;
export const Card = styled.div<{ $expanded?: boolean }>`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  padding: 24px;
  cursor: pointer;
  display: flex;
  gap: 16px;
  /* flex-direction: column; */

  max-height: ${({ $expanded }) => ($expanded ? "600px" : "180px")};
  overflow: hidden;

  transition:
    max-height 0.8s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.3s ease,
    transform 0.3s ease;

  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);

  will-change: max-height;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
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

export const HeaderCardContent = styled.div`
  display: flex;
  gap: 6px;
`;
export const SubCardContent = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-top: 10px;
`;

export const CardText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #556070;
  margin-top: 15px;
`;

export const ReadMore = styled.button`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  background: none;
  border: none;
  color: #4a78d0;
  font-weight: 600;
  cursor: pointer;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;
