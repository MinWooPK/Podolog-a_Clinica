import styled from "styled-components";

export const Card = styled.a`
  background: white;
  border: 1px solid rgba(24, 89, 91, 0.15);
  border-radius: 16px;
  padding: 18px;

  /* width: 100%; */
  min-height: 150px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  text-decoration: none;
  color: #1a1a1a;

  transition: all 0.25s ease;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    border-color: rgba(24, 89, 91, 0.35);
  }
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #18595b;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 14px;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleCard = styled.h3`
  font-size: 15px;
  margin: 0;
  font-weight: 600;
`;

export const SubTitleCard = styled.div`
  display: flex;
  gap: 2px;
`;

export const DefinitionCard = styled.p<{ $expanded?: boolean }>`
  font-size: 14px;
  color: #444;
  line-height: 1.5;
  margin: 0;

  ${({ $expanded }) =>
    !$expanded &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;

export const MoreBtn = styled.button`
  background: none;
  border: none;
  color: #18595b;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  }
`;

export const TopAccent = styled.div`
  height: 3px;
  width: 40px;
  background: #18595b;
  border-radius: 10px;
`;
