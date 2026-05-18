import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 120px; */
  padding: 100px 0px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
`;

interface SectionProps {
  $reverse?: boolean;
}

export const Section = styled.div<SectionProps>`
  display: flex;
  align-items: stretch;

  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};

  /* max-width: 1200px; */
  /* margin: 0 auto; */

  /* border-radius: 24px; */
  overflow: hidden;

  background: #ffffff;
  border: 1px solid #eef2f7;
  box-shadow: 0 10px 40px rgba(15, 23, 42, 0.06);

  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 60px rgba(15, 23, 42, 0.1);
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  height: 420px;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  display: block;

  transition: transform 0.6s ease;

  ${Section}:hover & {
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 50px 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 30px 24px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 24px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: -10px;
    width: 50px;
    height: 4px;
    background: linear-gradient(90deg, #4a78d0, #60a5fa);
    border-radius: 999px;
  }
`;

export const BulletList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Bullet = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #475569;

  padding-left: 18px;
  position: relative;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    background: #4a78d0;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 10px;
  }
`;
