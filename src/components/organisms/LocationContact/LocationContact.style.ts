// import styled from "styled-components";

// export const LocationContactContainer = styled.div`
//   background: linear-gradient(to bottom, #3cbbbb, #18595b);
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   gap: 2rem;
//   padding: 2rem;
//   /* width: 100vw;
//   height: 100vh; */
//   color: #fff;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     justify-content: flex-start;
//     height: auto;
//     padding: 1rem;
//   }
// `;
// export const FormContainer = styled.div`
//   padding: 20px;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const ContactForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   max-width: 320px;
//   gap: 1rem;
//   width: 100%;
//   /* max-width: 400px; */
// `;

// export const Input = styled.input`
//   padding: 0.75rem;
//   border: none;
//   border-radius: 8px;
//   font-size: 1rem;
//   /* width: 100%; */

//   &:focus {
//     outline: none;
//     border: 2px solid #007bff;
//   }
// `;

// export const TextArea = styled.textarea`
//   padding: 0.75rem;
//   border: none;
//   border-radius: 8px;
//   font-size: 1rem;
//   resize: vertical;
//   /* width: 100%; */

//   &:focus {
//     outline: none;
//     border: 2px solid #007bff;
//   }
// `;

// export const SubmitButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   padding: 0.75rem;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   font-size: 1rem;
//   transition: background-color 0.3s ease;
//   width: 100%;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// export const MapsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   max-width: 600px;
//   height: 100%;
//   gap: 1rem;
//   padding: 20px;

//   @media (max-width: 768px) {
//     max-width: 100%;
//     height: 400px;
//   }
// `;

// export const MapsGoogle = styled.iframe`
//   width: 100%;
//   height: 100%;
//   min-height: 300px;
//   border: none;
//   border-radius: 10px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
// `;

// export const InfoBox = styled.div`
//   text-align: center;
//   font-size: 1rem;
//   color: #fff;

//   div {
//     margin: 0.3rem 0;
//   }
// `;
import styled from "styled-components";

/* =========================
   BACKGROUND WRAPPER
========================= */
export const ConcatBg = styled.div`
  padding: 2rem 3rem 0;
  @media (max-width: 768px) {
    padding: 2rem 0rem;
  }
`;

/* =========================
   SECTION GRID LAYOUT
========================= */
export const ContactSection = styled.section`
  display: grid;
  background: linear-gradient(135deg, #e6f1f2 0%, #f6fbfb 50%, #e9f3f4 100%);
  grid-template-columns: 1fr 1fr;
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

/* =========================
   IMAGE SIDE
========================= */
export const ContactMedia = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: center;

  transform: translateY(-40px) translateX(60px);
  @media (max-width: 768px) {
    transform: none;
    display: none;
  }
`;

export const ContactImage = styled.img`
  width: 100%;
  /* max-width: 520px; */
  height: auto;

  object-fit: cover;

  border-radius: 16px;

  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.18);
`;

/* =========================
   CONTENT SIDE
========================= */
export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  position: relative;
  z-index: 1;

  padding: 2.5rem 3rem 2.5rem;
  @media (max-width: 768px) {
    padding: 0rem 0rem 0rem;
  }
`;

/* =========================
   TEXT
========================= */
export const ContactTitle = styled.h2`
  font-size: 32px;
  color: #18595b;
  font-weight: 500;
  margin: 0;
`;

export const ContactSubtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  color: #555;
`;

export const ContactText = styled.p`
  margin: 0;
  line-height: 1.5;
  color: #666;
  font-size: 14px;
`;

/* =========================
   CONTACT LIST
========================= */
export const ContactInfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 12px;

  font-size: 14px;
`;

export const ContactInfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #18595b;
  a {
    display: flex;
    align-items: center;
    gap: 10px;

    text-decoration: none;
    color: inherit;
    font-weight: 500;

    b {
      color: #ffc61a;
    }
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

/* =========================
   BUTTON
========================= */
export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 12px 18px;

  background: #ffc61a;
  color: #000;

  font-weight: 600;
  text-decoration: none;

  border-radius: 8px;

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: #ffb800;
  }
`;

export const DoctoraliaImage = styled.img`
  width: 25px;
  height: 25px;
`;

export const CitaContainer = styled.a`
  background-color: rgba(73, 221, 217, 0.2);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.principal.terciary};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.principal.terciary};
  cursor: pointer;
  transition: all 0.3s ease; // transición suave

  &:hover {
    background-color: ${({ theme }) => theme.colors.principal.secondary};
    color: ${({ theme }) => theme.colors.principal.first};
  }
`;

export const ButtonContainer = styled.div`
  width: fit-content;
`;
