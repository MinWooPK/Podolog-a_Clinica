import React from "react";
import { useState, FormEvent } from "react";
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
} from "./ContactMe.styles";
import ReviewHome from "@organisms/ReviewHome";

const ContactMe: React.FC = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mpwyjwey", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        } as HeadersInit,
      });

      if (response.ok) {
        setStatus("✅ Mensaje enviado correctamente.");
        form.reset();
      } else {
        setStatus("❌ Ocurrió un error al enviar el mensaje.");
      }
    } catch (error) {
      setStatus("❌ Ocurrió un error al enviar el mensaje.");
      console.error(error);
    }
  };
  return (
    <Container>
      <FormContainer>
        {/* IZQUIERDA */}
        <ContactSection>
          {/* IZQUIERDA */}
          <ContactInfo>
            <Title>Contacta con nuestra clínica</Title>

            <Text>
              ¿Quieres pedir una cita o resolver dudas? Estamos aquí para
              ayudarte por teléfono, WhatsApp o formulario.
            </Text>

            <List>
              <ListItem>
                Teléfono: <a href="tel:627 66 42 49">627 66 42 49</a>
              </ListItem>
              <ListItem>
                WhatsApp: <a href="https://wa.me/627 66 42 49">627 66 42 49</a>
              </ListItem>
            </List>

            <Subtitle>¿Dónde estamos?</Subtitle>

            <Text>
              Plaza del Olivar 3 - Edificio Europa
              <br />
              07001 - Palma de Mallorca - Illes Balears{" "}
            </Text>

            <Subtitle>Horario de atención</Subtitle>

            <ScheduleBox>
              <Text>{/* <b>CERRADO POR VACACIONES</b> */}</Text>
              <Text>Lunes a jueves: 9:00 - 20:00</Text>
              <Text>Viernes: 9:00 - 15:00</Text>
            </ScheduleBox>
          </ContactInfo>

          {/* DERECHA */}
          <SideBox>
            <Subtitle>También puedes agendar tu cita</Subtitle>

            <Text>Reserva online sin esperas.</Text>

            <CTAButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.doctoralia.es/rebeca-saludes-llamas/podologo/portocristo"
            >
              Pedir cita online →
            </CTAButton>
          </SideBox>
        </ContactSection>

        {/* DERECHA */}
        <ContactForm onSubmit={handleSubmit}>
          <FieldGroup>
            <Label htmlFor="name">Nombre completo</Label>

            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Introduce tu nombre"
              required
              minLength={3}
            />

            <HelperText>Introduce al menos 3 caracteres</HelperText>
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="email">Correo electrónico</Label>

            <Input
              id="email"
              type="email"
              name="email"
              placeholder="ejemplo@email.com"
              required
            />

            <HelperText>Te responderemos a este correo</HelperText>
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="phone">Teléfono</Label>

            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+34 600 000 000"
              pattern="[0-9+ ]{6,}"
              required
            />

            <HelperText>Solo números y símbolo +</HelperText>
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="message">Mensaje</Label>

            <TextArea
              id="message"
              name="message"
              placeholder="Cuéntanos cómo podemos ayudarte..."
              rows={5}
              required
              minLength={10}
            />

            <HelperText>Describe brevemente tu consulta</HelperText>
          </FieldGroup>

          <SubmitButton type="submit">Enviar mensaje</SubmitButton>
        </ContactForm>

        {status && <p>{status}</p>}
      </FormContainer>
      {/* <LocationContactContainer>
 

        <MapsContainer>
          <InfoBox>
            <div>
              📍 Plaza del Olivar 3 — Edificio Europa, Centre, Palma de Mallorca
            </div>
            <div>📞 627 66 42 49</div>
          </InfoBox>
        </MapsContainer>
      </LocationContactContainer> */}
      <MapsContainer>
        <MapsGoogle
          title="Ubicación"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=Plaza+del+Olivar+3,+EDIFICIO+EUROPA,+Centre,+Palma+de+Mallorca&key=AIzaSyCwEJPDBC6g1EksVNwV2y9ovuAjluS0iYs"
        ></MapsGoogle>
      </MapsContainer>
      <ReviewHome />{" "}
    </Container>
  );
};

export default ContactMe;
