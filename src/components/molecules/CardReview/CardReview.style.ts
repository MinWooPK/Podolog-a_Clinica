import styled from "styled-components";

export const Card = styled.a`
  border: 2px solid ${({ theme }) => theme.colors.principal.fifthy};
  padding: 20px 40px;
  border-radius: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  height: fit-content;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
export const DoctoraliaImage = styled.img`
  width: 25px;
  height: 25px;
`;

export const HeaderCard = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const FlexHeader = styled.div``;

export const TitleCard = styled.h2``;

export const SubTitleCard = styled.p``;

export const DefinitionCard = styled.p``;
