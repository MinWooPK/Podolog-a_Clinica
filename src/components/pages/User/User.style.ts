import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin-top: 4rem;
  text-align: center;
  background: linear-gradient(135deg, #e6f1f2 0%, #f6fbfb 50%, #e9f3f4 100%);
  /* padding: 5rem 2rem; */
  min-height: 100vh;
  width: 100%;
`;

export const UserCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px;
  max-width: 600px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

export const UserHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  h1 {
    margin: 0;
    font-size: 28px;
  }
`;

export const Avatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #2563eb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
`;

export const Role = styled.span`
  display: inline-block;
  margin-top: 8px;
  padding: 5px 12px;
  border-radius: 20px;
  background: #dbeafe;
  color: #1d4ed8;
  font-size: 14px;
  font-weight: 600;
`;

export const UserInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  div {
    background: #f8fafc;
    padding: 15px;
    border-radius: 10px;
  }

  span {
    color: #64748b;
    font-size: 13px;
  }

  p {
    margin: 5px 0 0;
    font-weight: 600;
  }
`;

export const LoginCard = styled.form`
  background: white;
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 320px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  gap: 40px;

  h1 {
    margin: 0;
    text-align: center;
    font-size: 28px;
  }
  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 12px;

    h1 {
      font-size: 24px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  font-size: 15px;
  outline: none;
  box-sizing: border-box;

  transition: border-color 0.2s;

  &:focus {
    border-color: #2563eb;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: #2563eb;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: #1d4ed8;
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;
  text-align: center;
  color: #dc2626;
  font-size: 14px;
`;

export const SwitchText = styled.p`
  text-align: center;
  font-size: 14px;
  color: #64748b;

  span {
    color: #2563eb;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export const ClientsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
`;
export const ClientCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 16px;
  transition: 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
  }
`;

export const ClientAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #6c63ff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

export const ClientInfo = styled.div`
  flex: 1;

  h3 {
    margin-bottom: 16px;
  }
`;

export const ClientItem = styled.div`
  margin-bottom: 12px;

  span {
    display: block;
    font-size: 12px;
    color: #777;
    margin-bottom: 3px;
  }

  p {
    margin: 0;
    font-weight: 500;
  }
`;

export const ClientRole = styled.div`
  display: inline-block;
  margin-top: 12px;
  padding: 6px 12px;
  border-radius: 20px;
  background: #eef2ff;
  color: #4f46e5;
  font-weight: 600;
  font-size: 12px;
`;
