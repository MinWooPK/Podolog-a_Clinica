import React, { useState } from "react";
import {
  Container,
  Title,
  Layout,
  AccordionItem,
  Question,
  Answer,
  ImageWrapper,
} from "./FAQ.styles";

type FAQItem = {
  question: string;
  answer: string;
};

interface Props {
  title?: string;
  items: FAQItem[];
  image?: string;
  imageAlt?: string;
}

const FAQ: React.FC<Props> = ({
  title = "Preguntas frecuentes",
  items,
  image,
  imageAlt = "Consulta podológica",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <Title>{title}</Title>

      <Layout>
        <div>
          {items.map((item, index) => (
            <AccordionItem key={index}>
              <Question onClick={() => toggle(index)}>{item.question}</Question>

              <Answer $isOpen={openIndex === index}>{item.answer}</Answer>
            </AccordionItem>
          ))}
        </div>

        {image && (
          <ImageWrapper>
            <img src={image} alt={imageAlt} />
          </ImageWrapper>
        )}
      </Layout>
    </Container>
  );
};

export default FAQ;
