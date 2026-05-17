import React from "react";
import {
  HeroContainer,
  HeroContent,
  Subtitle,
  Title,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "./Hero.style";

type HeroProps = {
  backgroundImage: string;
  subtitle: string;
  title: string;
  description: React.ReactNode;

  primaryButton: {
    label: string;
    href: string;
  };

  secondaryButton: {
    label: string;
    href: string;
  };
};

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  subtitle,
  title,
  description,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <HeroContainer $bg={backgroundImage}>
      <HeroContent>
        {" "}
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
        <ButtonGroup>
          <PrimaryButton href={primaryButton.href}>
            {primaryButton.label}
          </PrimaryButton>

          <SecondaryButton href={secondaryButton.href}>
            {secondaryButton.label}
          </SecondaryButton>
        </ButtonGroup>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
