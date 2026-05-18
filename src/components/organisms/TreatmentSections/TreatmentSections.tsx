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
} from "./TreatmentSections.styles";

type Treatment = {
  title: string;
  description: string[];
  image: string;
  id: string;
};

interface Props {
  items: Treatment[];
}

const TreatmentSections: React.FC<Props> = ({ items }) => {
  return (
    <Container>
      {items.map((item, index) => (
        <Section id={item.id} key={item.id} $reverse={index % 2 !== 0}>
          <ImageWrapper>
            <Image src={item.image} alt={item.title} />
          </ImageWrapper>

          <Content>
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
