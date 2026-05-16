import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #eff6ff, #bfdbfe);
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #1e3a8a;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  max-width: 400px;
  margin-bottom: 2rem;
`;
