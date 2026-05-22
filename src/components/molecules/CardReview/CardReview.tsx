import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";
import DoctorialiaIcon from "@assets/icons/doctoralia.png";

import {
  Card,
  DefinitionCard,
  FlexHeader,
  HeaderCard,
  TitleCard,
  MoreBtn,
  Avatar,
  NameWrapper,
  SubTitleCard,
  TopAccent,
  DoctoraliaImage,
  CardHeader,
} from "./CardReview.style";

interface CardReviewProps {
  name: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function CardReview({ name, description, isOpen, onToggle }: CardReviewProps) {
  const { t } = useTranslation();

  const isLong = description.length > 120;

  const textToShow =
    !isOpen && isLong ? description.slice(0, 120) + "..." : description;

  return (
    <Card>
      <TopAccent />

      <HeaderCard>
        <FlexHeader>
          <Avatar>{getInitials(name)}</Avatar>

          <NameWrapper>
            <CardHeader>
              <TitleCard>{name}</TitleCard>
            </CardHeader>
            <SubTitleCard>
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} color="#18595B" size={13} />
              ))}
            </SubTitleCard>
          </NameWrapper>
        </FlexHeader>
        <DoctoraliaImage src={DoctorialiaIcon} alt="Doctoralia" />
      </HeaderCard>

      <DefinitionCard $expanded={isOpen}>{textToShow}</DefinitionCard>

      {isLong && (
        <MoreBtn
          onClick={(e) => {
            e.preventDefault();
            onToggle();
          }}
        >
          {isOpen ? t("cta.verMenos") : t("cta.verMas")}{" "}
        </MoreBtn>
      )}
    </Card>
  );
}

export default CardReview;
