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
  Subtitle,
} from "./WhatWeTreat.styles";

type Treatment = {
  id: string;
  title: string;
  description: string;
  category?: string;
  color?: string;
  bgColor?: string;
  icon?: React.ReactNode;
};

interface Props {
  title?: string;
  subtitle?: string;
  items: Treatment[];
  id?: string;
  onCardClick?: (id: string) => void;
}

const WhatWeTreat: React.FC<Props> = ({
  title = "¿Qué tratamos en consulta?",
  subtitle = "",
  items,
  id,
  onCardClick,
}) => {
  return (
    <Container id={id}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      <Grid>
        {items.map((item) => (
          <Card
            key={item.id}
            onClick={() => onCardClick?.(item.id)}
            style={{ cursor: "pointer" }}
          >
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
