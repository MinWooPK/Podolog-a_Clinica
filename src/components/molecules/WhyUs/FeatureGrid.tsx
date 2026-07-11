import React from "react";
import {
  Section,
  Grid,
  Card,
  IconBox,
  Title,
  Description,
  Header,
  InfoCard,
  HeaderCard,
} from "./FeatureGrid.style";

type Item = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};
type FeatureGridProps = {
  title: string;
  items: Item[];
};

const FeatureGrid: React.FC<FeatureGridProps> = ({ title, items }) => {
  return (
    <Section>
      <Header>
        <h2>{title}</h2>
      </Header>

      <Grid>
        {items.map((item, index) => (
          <Card key={index}>
            <HeaderCard>
              <IconBox>{item.icon}</IconBox>
              <Title>{item.title}</Title>
            </HeaderCard>
            <InfoCard>
              <Description>{item.description}</Description>
            </InfoCard>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default FeatureGrid;
