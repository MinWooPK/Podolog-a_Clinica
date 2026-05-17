import React from "react";
import {
  Container,
  Title,
  Grid,
  Card,
  IconWrapper,
  CardContent,
  CardTitle,
  CardText,
  Badge,
} from "./WhatWeTreat.styles";

type Treatment = {
  title: string;
  description: string;
  category?: string;
  color?: string;
  bgColor?: string;
  icon?: React.ReactNode;
};

interface Props {
  title?: string;
  items: Treatment[];
}

const WhatWeTreat: React.FC<Props> = ({
  title = "¿Qué tratamos en consulta?",
  items,
}) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Grid>
        {items.map((item, index) => (
          <Card key={index}>
            <IconWrapper
              style={{ background: item.bgColor, color: item.color }}
            >
              {item.icon}
            </IconWrapper>

            <CardContent>
              <Badge style={{ background: item.bgColor, color: item.color }}>
                {item.category}
              </Badge>

              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.description}</CardText>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default WhatWeTreat;
