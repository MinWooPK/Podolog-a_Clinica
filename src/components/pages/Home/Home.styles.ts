import styled from "styled-components";

export const Contaienr = styled.div`
  width: 100%;
`;

export const ContainerVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.principal.pure};
  z-index: 2;
`;

export const Description = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none; /* para que no interfiera con clicks */
`;
