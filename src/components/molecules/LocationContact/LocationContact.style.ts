import styled from "styled-components";

export const LocationContactContainer = styled.div`
  background: linear-gradient(to bottom, #3cbbbb, #18595b);
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  /* width: 100vw;
  height: 100vh; */
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
    padding: 1rem;
  }
`;
export const FormContainer = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  gap: 1rem;
  width: 100%;
  /* max-width: 400px; */
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  /* width: 100%; */

  &:focus {
    outline: none;
    border: 2px solid #007bff;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  /* width: 100%; */

  &:focus {
    outline: none;
    border: 2px solid #007bff;
  }
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

export const MapsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 100%;
  gap: 1rem;
  padding: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    height: 400px;
  }
`;

export const MapsGoogle = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 300px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const InfoBox = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #fff;

  div {
    margin: 0.3rem 0;
  }
`;
