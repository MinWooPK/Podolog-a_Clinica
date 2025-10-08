import { FaStar } from "react-icons/fa";
import DoctorialiaIcon from "@assets/icons/doctoralia.png";
import {
  Card,
  DefinitionCard,
  DoctoraliaImage,
  FlexHeader,
  HeaderCard,
  SubTitleCard,
  TitleCard,
} from "./CardReview.style";

interface CardReviewProps {
  name: string;
  description: string;
}

function CardReview({ name, description }: CardReviewProps) {
  return (
    <Card
      href="https://www.doctoralia.es/rebeca-saludes-llamas/podologo/palma-de-mallorca#profile-reviews"
      target="_blank"
      rel="noopener noreferrer"
    >
      <HeaderCard>
        <FlexHeader>
          <TitleCard>{name}</TitleCard>
          <SubTitleCard>
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} color="#18595B" />
            ))}
          </SubTitleCard>
        </FlexHeader>
        <DoctoraliaImage src={DoctorialiaIcon} alt={name} />
      </HeaderCard>
      <DefinitionCard>{description}</DefinitionCard>
    </Card>
  );
}

export default CardReview;
