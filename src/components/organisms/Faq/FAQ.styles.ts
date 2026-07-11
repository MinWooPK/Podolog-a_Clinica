import styled from "styled-components";

export const Container = styled.section`
  /* max-width: 1100px; */
  margin: 0 auto;
  padding: 2rem 4rem;
  @media (max-width: 900px) {
    padding: 1rem 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #18595b;
  margin-bottom: 40px;
  text-align: center;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const AccordionItem = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  margin-bottom: 12px;
  overflow: hidden;
  background: #fff;
`;

export const Question = styled.div`
  padding: 16px 18px;
  font-weight: 600;
  cursor: pointer;
  background: #f8fafc;

  &:hover {
    background: #eef2f7;
  }
`;

/*  AQUÍ ESTÁ LA CORRECCIÓN */
export const Answer = styled.div<{ $isOpen: boolean }>`
  font-size: 14px;
  line-height: 1.6;
  color: #475569;

  overflow: hidden;

  max-height: ${({ $isOpen }) => ($isOpen ? "300px" : "0")};

  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};

  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0px)" : "translateY(-8px)"};

  transition:
    max-height 0.4s ease,
    opacity 0.25s ease,
    transform 0.35s ease;

  padding: ${({ $isOpen }) => ($isOpen ? "16px 18px" : "0 18px")};
`;

export const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 16px;
  /* overflow: hidden; */
  /* position: sticky; */
  top: 100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    max-height: 600px;
  }
`;
