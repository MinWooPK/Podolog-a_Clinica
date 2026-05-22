import {
  Section,
  Content,
  List,
  Spacer,
  ImageWrapper,
  Image,
  Layout,
  Subtitle,
} from "./FeatureListSection.style";

type FeatureListSectionProps = {
  title: string;
  items: string[];
  backgroundImage: string;
  subtitle?: string;
  id?: string;
  imagePosition?: "right" | "bottom";
};

export default function FeatureListSection({
  id,
  title,
  items,
  backgroundImage,
  subtitle,
  imagePosition = "right",
}: FeatureListSectionProps) {
  return (
    <Section id={id}>
      <Layout $imagePosition={imagePosition}>
        <Content>
          <h2>{title}</h2>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}

          <List>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </List>
        </Content>

        <ImageWrapper $imagePosition={imagePosition}>
          <Image src={backgroundImage} alt={title} />
        </ImageWrapper>
      </Layout>

      <Spacer />
    </Section>
  );
}
