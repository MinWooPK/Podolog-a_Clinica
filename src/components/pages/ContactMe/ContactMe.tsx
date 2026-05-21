import React from "react";
import { useState, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import {
  Container,
  LocationContactContainer,
  MapsContainer,
  MapsGoogle,
  ContactForm,
  Input,
  TextArea,
  SubmitButton,
  InfoBox,
  Text,
  SideBox,
  List,
  FormContainer,
  ContactInfo,
  CTAButton,
  ScheduleBox,
  Subtitle,
  ListItem,
  Title,
  ContactSection,
  FieldGroup,
  HelperText,
  Label,
  StatusMessage,
} from "./ContactMe.styles";
import ReviewHome from "@organisms/ReviewHome";

const ContactMe: React.FC = () => {
  const { t } = useTranslation();

  const [status, setStatus] = useState<{
    type: "success" | "error";
    title: string;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      setStatus(null); // limpia mensaje anterior

      const response = await fetch("https://formspree.io/f/mpwyjwey", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      setStatus({
        type: "success",
        title: t("contactMe.titleSuccess"),
        message: t("contactMe.success"),
      });

      form.reset();
    } catch (error: unknown) {
      console.error("Submit error:", error);

      setStatus({
        type: "error",
        title: t("contactMe.titleError"),
        message: t("contactMe.error"),
      });
    }
  };

  return (
    <Container>
      <FormContainer>
        <ContactSection>
          <ContactInfo>
            <Title>{t("contactMe.title")}</Title>

            <Text>{t("contactMe.intro")}</Text>

            <List>
              <ListItem>
                <Mail size={24} />
                Email:{" "}
                <a
                  href="mailto:rebesaludes83@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  rebesaludes83@gmail.com
                </a>
              </ListItem>

              <ListItem>
                <FaWhatsapp size={24} color="#25D366" />
                WhatsApp:{" "}
                <a
                  href="https://wa.me/34627664249"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +34 627 66 42 49
                </a>
              </ListItem>
            </List>

            <Subtitle>{t("contactMe.subtitleLocation")}</Subtitle>

            <Text>{t("contactMe.address")}</Text>

            <Subtitle>{t("contactMe.subtitleSchedule")}</Subtitle>

            <ScheduleBox>
              <Text>{t("contactMe.schedule1")}</Text>
              <Text>{t("contactMe.schedule2")}</Text>
            </ScheduleBox>
          </ContactInfo>

          <SideBox>
            <Subtitle>{t("contactMe.subtitleBooking")}</Subtitle>

            <Text>{t("contactMe.bookingText")}</Text>

            <CTAButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.doctoralia.es/rebeca-saludes-llamas/podologo/portocristo"
            >
              {t("contactMe.ctaBooking")}
            </CTAButton>
          </SideBox>
        </ContactSection>

        <ContactForm onSubmit={handleSubmit}>
          <Subtitle>{t("contactMe.formTitle")}</Subtitle>

          <Text>{t("contactMe.formText")}</Text>

          <FieldGroup>
            <Label htmlFor="name">{t("contactMe.name")}</Label>
            <HelperText>{t("contactMe.nameHelp")}</HelperText>

            <Input
              id="name"
              name="name"
              type="text"
              placeholder={t("contactMe.name")}
              required
              minLength={3}
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="email">{t("contactMe.email")}</Label>
            <HelperText>{t("contactMe.emailHelp")}</HelperText>

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="ejemplo@email.com"
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="phone">{t("contactMe.phone")}</Label>
            <HelperText>{t("contactMe.phoneHelp")}</HelperText>

            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+34 600 000 000"
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="message">{t("contactMe.message")}</Label>
            <HelperText>{t("contactMe.messageHelp")}</HelperText>

            <TextArea
              id="message"
              name="message"
              rows={5}
              placeholder={t("contactMe.messageHelp")}
              required
              minLength={10}
            />
          </FieldGroup>
          {status && (
            <StatusMessage $type={status.type}>
              <strong>{status.title}</strong>
              <p>{status.message}</p>
            </StatusMessage>
          )}
          <SubmitButton type="submit">{t("contactMe.submit")}</SubmitButton>
        </ContactForm>
      </FormContainer>

      <MapsContainer>
        <MapsGoogle
          title={t("contactMe.subtitleLocation")}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=Plaza+del+Olivar+3,+EDIFICIO+EUROPA,+Centre,+Palma+de+Mallorca&key=AIzaSyCwEJPDBC6g1EksVNwV2y9ovuAjluS0iYs"
        />
      </MapsContainer>

      <ReviewHome />
    </Container>
  );
};

export default ContactMe;
