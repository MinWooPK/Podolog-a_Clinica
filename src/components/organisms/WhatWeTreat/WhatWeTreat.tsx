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
  ReadMore,
} from "./WhatWeTreat.styles";

type Treatment = {
  id?: string;
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
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const MAX_CHARS = 65;

  const truncate = (text: string, isOpen: boolean) => {
    if (isOpen || text.length <= MAX_CHARS) return text;
    return text.slice(0, MAX_CHARS) + "...";
  };

  return (
    <Container id={id}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>

      <Grid>
        {items.map((item) => {
          const isOpen = expandedId === item.id;

          return (
            <Card
              key={item.id}
              $expanded={isOpen}
              onClick={() => item.id && onCardClick?.(item.id)}
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

                <CardText>{truncate(item.description, isOpen)}</CardText>

                {item.description.length > MAX_CHARS && (
                  <ReadMore
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCard(item.id!);
                    }}
                  >
                    {isOpen ? "Ver menos" : "Ver más"}
                  </ReadMore>
                )}
              </CardContent>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default WhatWeTreat;
