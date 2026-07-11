import {
  Section,
  Layout,
  Content,
  BackLink,
  Title,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  ImageWrapper,
  Image,
} from "./AntropHero.style";

type HeroSectionProps = {
  backText: string;
  backHref: string;
  title: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  image: string;
  alt?: string;
};

export default function AntropHero({
  backText,
  backHref,
  title,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  image,
  alt = "hero image",
}: HeroSectionProps) {
  return (
    <Section>
      <Layout>
        <Content>
          <Title>{title}</Title>

          <ButtonGroup>
            <PrimaryButton href="#down">{primaryButtonText}</PrimaryButton>

            <SecondaryButton href={secondaryButtonHref}>
              {secondaryButtonText}
            </SecondaryButton>
          </ButtonGroup>
        </Content>

        <ImageWrapper>
          <Image src={image} alt={alt} />
        </ImageWrapper>
      </Layout>
    </Section>
  );
}
