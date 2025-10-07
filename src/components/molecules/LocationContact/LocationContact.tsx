import { useState } from "react";
import {
  LocationContactContainer,
  MapsContainer,
  MapsGoogle,
  ContactForm,
  Input,
  TextArea,
  SubmitButton,
  InfoBox,
  FormContainer,
} from "./LocationContact.style";

function LocationContact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mpwyjwey", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("✅ Mensaje enviado correctamente.");
      form.reset();
    } else {
      setStatus("❌ Ocurrió un error al enviar el mensaje.");
    }
  };

  return (
    <LocationContactContainer>
      <FormContainer>
        {/* <h2>Contacto</h2> */}
        <ContactForm onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Nombre" required />
          <Input type="email" name="email" placeholder="Email" required />
          <Input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            pattern="[0-9+ ]{6,}"
          />
          <TextArea name="message" placeholder="Mensaje" rows="5" required />
          <SubmitButton type="submit">Enviar</SubmitButton>
        </ContactForm>
        {status && <p>{status}</p>}
      </FormContainer>

      <MapsContainer>
        <MapsGoogle
          title="Ubicación"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=Plaza+del+Olivar+3,+EDIFICIO+EUROPA,+Centre,+Palma+de+Mallorca&key=AIzaSyCwEJPDBC6g1EksVNwV2y9ovuAjluS0iYs"
        ></MapsGoogle>

        <InfoBox>
          <div>
            📍 Plaza del Olivar 3 — Edificio Europa, Centre, Palma de Mallorca
          </div>
          <div>📞 627 66 42 49</div>
        </InfoBox>
      </MapsContainer>
    </LocationContactContainer>
  );
}

export default LocationContact;
