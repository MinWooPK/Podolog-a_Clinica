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
};

export default function FeatureListSection({
  title,
  items,
  backgroundImage,
  subtitle,
}: FeatureListSectionProps) {
  return (
    <Section>
      <Layout>
        <Content>
          <h2>{title}</h2>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}

          <List>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </List>
        </Content>

        <ImageWrapper>
          <Image src={backgroundImage} alt={title} />
        </ImageWrapper>
      </Layout>

      <Spacer />
    </Section>
  );
}
