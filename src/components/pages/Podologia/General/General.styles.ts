import styled from "styled-components";

export const ContaienrFirst = styled.section`
  width: 100%;
`;

export const FadeWrapper = styled.div`
  animation: fadeIn 0.4s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
