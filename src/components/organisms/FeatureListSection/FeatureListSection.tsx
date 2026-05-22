import {
  Section,
  Content,
  List,
  Spacer,
  ImageWrapper,
  Image,
  Layout,
  Subtitle,
  SubInfo,
} from "./FeatureListSection.style";

type FeatureListSectionProps = {
  title: string;
  items: string[];
  backgroundImage: string;
  subtitle?: string;
  id?: string;
  imagePosition?: "right" | "bottom";
  subInfo?: {
    text: string;
    highlight: string;
    url: string;
  };
};

export default function FeatureListSection({
  id,
  title,
  items,
  backgroundImage,
  subtitle,
  imagePosition = "right",
  subInfo,
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
        {subInfo && (
          <SubInfo>
            {subInfo.text}{" "}
            <a
              href={subInfo.url}
              target="_blank"
              rel="noreferrer"
              className="subInfoLink"
            >
              {subInfo.highlight}
            </a>
          </SubInfo>
        )}{" "}
        <ImageWrapper $imagePosition={imagePosition}>
          <Image src={backgroundImage} alt={title} />
        </ImageWrapper>
      </Layout>

      <Spacer />
    </Section>
  );
}
