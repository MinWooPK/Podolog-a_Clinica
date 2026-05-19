import React from "react";

import {
  Container,
  Section,
  ImageWrapper,
  Image,
  Content,
  Title,
  BulletList,
  Bullet,
  BackButton,
  BackDiv,
} from "./TreatmentSections.styles";

import Button from "@atoms/Button";

type Treatment = {
  title: string;
  description: string[];
  image: string;
  id: string;
};

interface Props {
  items: Treatment[];
  showBackButton?: boolean;
  onBack?: () => void;
  id?: string;
}

const TreatmentSections: React.FC<Props> = ({
  items,
  showBackButton = false,
  onBack,
  id,
}) => {
  return (
    <Container id={id}>
      {items.map((item, index) => (
        <Section id={item.id} key={item.id} $reverse={index % 2 !== 0}>
          <ImageWrapper>
            <Image src={item.image} alt={item.title} />
          </ImageWrapper>

          <Content>
            {showBackButton && (
              <BackDiv className="margin 20px">
                <BackButton onClick={onBack}>← Volver</BackButton>
              </BackDiv>
            )}
            <Title>{item.title}</Title>

            <BulletList>
              {item.description.map((text, i) => (
                <Bullet key={i}>{text}</Bullet>
              ))}
            </BulletList>
          </Content>
        </Section>
      ))}
    </Container>
  );
};

export default TreatmentSections;
