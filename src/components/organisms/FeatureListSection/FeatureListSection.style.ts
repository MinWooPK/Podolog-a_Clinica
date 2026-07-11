import styled from "styled-components";

export const Section = styled.section`
  padding: 4rem 8rem;
  display: flex;
  justify-content: center;
  background: #f9fbfb;
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const Layout = styled.div<{ $imagePosition: string }>`
  display: flex;
  align-items: center;

  flex-direction: ${({ $imagePosition }) =>
    $imagePosition === "bottom" ? "column" : "row"};

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
    color: #18595b;
    font-weight: 600;
  }
`;
export const Subtitle = styled.p`
  margin: 0.5rem 0 1.5rem;
  font-size: 14px;
  color: #666;
  line-height: 1.4;
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

export const ImageWrapper = styled.div<{ $imagePosition: string }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $imagePosition }) =>
    $imagePosition === "bottom" &&
    `
    order: 2;
  `}
`;

export const Image = styled.img`
  width: 100%;
  /* max-width: 500px; */
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  max-height: 600px;
`;

export const Spacer = styled.div`
  height: 40px;
`;

export const SubInfo = styled.p`
  margin-top: 24px;
  font-size: 14.5px;
  line-height: 1.7;
  color: #18595b;

  .subInfoLink {
    color: rgba(255, 198, 26, 1);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.25s ease;
  }

  .subInfoLink:hover {
    color: #7dd3fc;
    text-decoration: underline;
    text-shadow: 0 0 10px rgba(56, 189, 248, 0.35);
  }
`;
