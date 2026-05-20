import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #e6f1f2 0%, #f6fbfb 50%, #e9f3f4 100%);
  padding: 5rem 2rem;
`;

/* 🔲 GRID PRINCIPAL */
export const LocationContactContainer = styled.div`
  background: linear-gradient(to bottom, #3cbbbb, #18595b);
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  padding: 2rem;
  align-items: start;
  color: #fff;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem;
  }
`;

/* 📍 COLUMNA IZQUIERDA */
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 20px;
  text-align: left;
`;

/* 🧾 COLUMNA DERECHA (FORM WRAPPER) */
export const FormContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: start;
  padding: 20px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  position: relative;

  /* padding: 2rem 3rem; */
  /* gap: 3rem; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }
`;

/* 🧾 FORM */
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: stretch;
  padding: 2rem;
  background: linear-gradient(135deg, #8fd3d1, #6cbfbd);
  border-radius: 20px;
`;

export const Input = styled.input`
  padding: 14px 16px;

  border-radius: 12px;

  border: 1px solid #18595b;

  background: rgba(255, 255, 255, 0.08);

  color: #1f3b3d;

  font-size: 1rem;

  transition: all 0.25s ease;

  backdrop-filter: blur(10px);

  &::placeholder {
    color: #1f3b3d;
  }

  &:focus {
    outline: none;

    /* border-color: #7ce7e8; */

    background: rgba(255, 255, 255, 0.12);

    box-shadow: 0 0 0 4px rgba(124, 231, 232, 0.18);
  }

  &:invalid:not(:placeholder-shown) {
    border-color: #ff8c8c;
  }
`;

export const TextArea = styled.textarea`
  padding: 14px 16px;

  border-radius: 12px;

  border: 1px solid #18595b;

  background: rgba(255, 255, 255, 0.08);

  font-size: 1rem;

  resize: vertical;

  min-height: 140px;

  transition: all 0.25s ease;

  backdrop-filter: blur(10px);

  color: #1f3b3d;

  &::placeholder {
    color: #1f3b3d;
  }

  &:focus {
    outline: none;

    /* border-color: #7ce7e8; */

    background: rgba(255, 255, 255, 0.12);

    box-shadow: 0 0 0 4px rgba(124, 231, 232, 0.18);
  }
`;

/* 🔘 BOTÓN */
export const SubmitButton = styled.button`
  width: 100%;

  padding: 14px 18px;

  border: none;

  border-radius: 12px;

  background: linear-gradient(135deg, #0ea5a6, #0b7f80);

  color: white;

  font-size: 1rem;

  font-weight: 600;

  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
  }

  &:active {
    transform: translateY(0);
  }
`;

/* 🗺 MAPA */
export const MapsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
  gap: 1rem;
  padding: 20px;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const MapsGoogle = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 300px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
`;

/* 📍 TEXTO INFO */
export const InfoBox = styled.div`
  text-align: left;
  font-size: 1rem;
  color: #fff;

  div {
    margin: 0.4rem 0;
  }
`;

/* 🧩 EXTRA: TÍTULOS (te faltaban y los estabas usando) */
export const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-weight: 500;
  color: #18595b;
`;

export const Subtitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  opacity: 0.9;
  color: #18595b;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ListItem = styled.li`
  color: #18595b;
  font-weight: 500;

  h3 {
  }
  a {
    color: #ffc61a;
    font-weight: 400;
    text-decoration: none;
  }
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 10px 14px;
  background: #0ea5a6;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.2s ease;

  &:hover {
    background: #0b7f80;
  }
`;

export const ScheduleBox = styled.div`
  padding: 1rem;
  border-left: 3px solid #0ea5a6;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;

export const SideBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1.5rem;

  background: rgba(255, 255, 255, 0.08);

  border: 1px solid rgba(255, 255, 255, 0.12);

  border-radius: 16px;

  backdrop-filter: blur(10px);

  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
`;

export const ContactSection = styled.section`
  display: grid;
  /* background: linear-gradient(135deg, #e6f1f2 0%, #f6fbfb 50%, #e9f3f4 100%); */
  grid-template-columns: 1fr;
  align-items: center;

  position: relative;

  /* padding: 2rem 3rem; */
  /* gap: 3rem; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  width: 100%;
  text-align: start;
`;

export const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: #18595b;
`;

export const HelperText = styled.span`
  font-size: 0.82rem;
  color: #ffc61a;
`;
