import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 20px;
  display: flex;
  justify-content: center;
`;

export const Layout = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  flex: 1;

  h2 {
    font-size: 28px;
    margin-bottom: 20px;
    line-height: 1.2;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: 28px;
    margin-bottom: 14px;
    font-size: 16px;
    line-height: 1.4;

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      top: 0;
      color: #2ecc71;
      font-weight: bold;
    }
  }
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
  height: auto;
  border-radius: 12px;
  object-fit: cover;
`;

export const Spacer = styled.div`
  height: 40px;
`;
