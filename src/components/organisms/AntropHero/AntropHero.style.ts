import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 20px;
  margin-top: 2rem;
`;

export const Layout = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 5rem;
`;

export const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 20px;
  text-decoration: none;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  font-size: 34px;
  line-height: 1.2;
  margin-bottom: 30px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.a`
  padding: 12px 20px;
  background: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
`;

export const SecondaryButton = styled.a`
  padding: 12px 20px;
  background: transparent;
  border: 1px solid #000;
  color: #000;
  text-decoration: none;
  border-radius: 6px;
  &:hover {
    background: #0f3f40;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(15, 63, 64, 0.25);
  }
  /* &:hover {
    color: red;
  } */
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 500px;
  max-height: 600px;
  /* min-height: 00px; */
  object-fit: cover;
  border-radius: 10px;
`;
