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
  ContactInfoList,
  ContactInfoItem,
  ContactText,
  ContactButton,
  ContactContent,
  ContactSection,
  ContactSubtitle,
  ContactTitle,
  ContactMedia,
  ContactImage,
  ConcatBg,
  CitaContainer,
  DoctoraliaImage,
  ButtonContainer,
} from "./LocationContact.style";

import Doctoralia from "@assets/icons/doctoralia.png";
import ImgClinicaImagen from "@assets/img/ClinicaImagen.jpg";

function LocationContact() {
  // const [status, setStatus] = useState("");

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   const data = new FormData(form);

  //   try {
  //     const response = await fetch("https://formspree.io/f/mpwyjwey", {
  //       method: "POST",
  //       body: data,
  //       headers: {
  //         Accept: "application/json",
  //       } as HeadersInit,
  //     });

  //     if (response.ok) {
  //       setStatus("✅ Mensaje enviado correctamente.");
  //       form.reset();
  //     } else {
  //       setStatus("❌ Ocurrió un error al enviar el mensaje.");
  //     }
  //   } catch (error) {
  //     setStatus("❌ Ocurrió un error al enviar el mensaje.");
  //     console.error(error);
  //   }
  // };

  return (
    // <LocationContactContainer>
    //   <FormContainer>
    //     <ContactForm onSubmit={handleSubmit}>
    //       <Input type="text" name="name" placeholder="Nombre" required />
    //       <Input type="email" name="email" placeholder="Email" required />
    //       <Input
    //         type="tel"
    //         name="phone"
    //         placeholder="Teléfono"
    //         pattern="[0-9+ ]{6,}"
    //       />
    //       <TextArea name="message" placeholder="Mensaje" rows={5} required />
    //       <SubmitButton type="submit">Enviar</SubmitButton>
    //     </ContactForm>
    //     {status && <p>{status}</p>}
    //   </FormContainer>

    //   <MapsContainer>
    //     <MapsGoogle
    //       title="Ubicación"
    //       loading="lazy"
    //       allowFullScreen
    //       src="https://www.google.com/maps/embed/v1/place?q=Plaza+del+Olivar+3,+EDIFICIO+EUROPA,+Centre,+Palma+de+Mallorca&key=AIzaSyCwEJPDBC6g1EksVNwV2y9ovuAjluS0iYs"
    //     ></MapsGoogle>

    //     <InfoBox>
    //       <div>
    //         📍 Plaza del Olivar 3 — Edificio Europa, Centre, Palma de Mallorca
    //       </div>
    //       <div>📞 627 66 42 49</div>
    //     </InfoBox>
    //   </MapsContainer>
    // </LocationContactContainer>

    <ContactSection>
      <ContactMedia>
        <ContactImage src={ImgClinicaImagen} />
      </ContactMedia>
      <ConcatBg>
        <ContactContent>
          <ContactTitle>¿Quieres saber más?</ContactTitle>
          <ContactSubtitle>
            Ubicados en el corazón de Palma de Mallorca
          </ContactSubtitle>
          <ContactText>
            Plaza del Olivar 3 - Edificio Europa <br />
            07001 - Palma de Mallorca - Illes Balears
          </ContactText>
          <ContactSubtitle>Llámanos o agenda una cita online</ContactSubtitle>
          <ContactInfoList>
            <ContactInfoItem>
              <a href="tel:627664249">
                Teléfono: <b>627 66 42 49</b>
              </a>
            </ContactInfoItem>

            <ContactInfoItem>
              <a href="https://wa.me/627 66 42 49" target="_blank">
                WhatsApp: <b>627 66 42 49</b>
              </a>
            </ContactInfoItem>
          </ContactInfoList>
          <ContactText>WhatsApp disponible para consultas rápidas.</ContactText>
          <ButtonContainer>
            <CitaContainer
              href="https://www.doctoralia.es/rebeca-saludes-llamas/podologo/palma-de-mallorca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DoctoraliaImage src={Doctoralia} /> Pedir cita
            </CitaContainer>
          </ButtonContainer>
        </ContactContent>
      </ConcatBg>
    </ContactSection>
  );
}

export default LocationContact;
