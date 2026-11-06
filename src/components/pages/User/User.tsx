import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@context/AuthContext";
import { getUsers, deleteUser, getUserById } from "@services/user.service";

// hooks
import { useModal } from "@context/ModalContext";

// molecules
import ModalSuccess from "@molecules/ModalSuccess";
import ModalEditUser from "@molecules/ModalEditUser/ModalEditUser";

// organism
import AdminDashboard from "@organisms/DashboardAdmin/DashboardAdmin";

import {
  Container,
  UserCard,
  UserHeader,
  Avatar,
  Role,
  UserInfo,
  LoginCard,
  Input,
  Button,
  ErrorMessage,
  SwitchText,
} from "./User.style";

interface UserItem {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  role: string;
  avatarUrl: string | null;
}

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "16px",
  borderBottom: "1px solid #ddd",
  fontWeight: 600,
};

const tdStyle: React.CSSProperties = {
  padding: "16px",
  borderBottom: "1px solid #eee",
};

const User = () => {
  const { user, login, register, logout } = useContext(AuthContext);
  const [users, setUsers] = useState<UserItem[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { showModal, hideModal } = useModal();

  useEffect(() => {
    fetchUsers();
  }, [user]);

  const fetchUsers = async () => {
    if (!user || user.role !== "ADMIN") return;

    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login({
        email,
        password,
      });
    } catch {
      setError("Email o contraseña incorrectos");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await register({
        name,
        email,
        password,
        phone,
        address,
      });
    } catch {
      setError("No se pudo crear la cuenta");
    }
  };

  const handleEditUser = async (id: string) => {
    try {
      const userData = await getUserById(id);

      showModal(
        ModalEditUser,
        {
          user: userData,
          onUpdated: fetchUsers,
        },
        true,
        "medium",
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = (id: string) => {
    showModal(
      ModalSuccess,
      {
        title: "Eliminar usuario",
        text: "¿Seguro que deseas eliminar este usuario?",
        type: "warning",

        onConfirm: async () => {
          try {
            await deleteUser(id);
            await fetchUsers();
            hideModal();
          } catch (error) {
            console.error(error);
            hideModal();
          }
        },

        onClose: hideModal,
      },
      false,
      "small",
    );
  };

  return (
    <Container>
      {!user ? (
        <LoginCard onSubmit={isRegister ? handleRegister : handleLogin}>
          <h1>{isRegister ? "Crear cuenta" : "Iniciar sesión"}</h1>

          {isRegister && (
            <>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre"
              />

              <Input
                type="text"
                placeholder="Teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <Input
                type="text"
                placeholder="Dirección"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </>
          )}

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">{isRegister ? "Registrarse" : "Entrar"}</Button>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <SwitchText>
            {isRegister ? "¿Ya tienes una cuenta?" : "¿No tienes cuenta?"}

            <span onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? " Iniciar sesión" : " Registrarse"}
            </span>
          </SwitchText>
        </LoginCard>
      ) : (
        // <UserCard>
        //   <UserHeader>
        //     {user.avatarUrl ? (
        //       <img
        //         src={user.avatarUrl}
        //         alt={user.name}
        //         className="w-[70px] h-[70px] rounded-full"
        //       />
        //     ) : (
        //       <Avatar>{user.name.charAt(0).toUpperCase()}</Avatar>
        //     )}

        //     <div>
        //       <h1>Bienvenido, {user.name}</h1>
        //       <Role>{user.role}</Role>
        //     </div>
        //   </UserHeader>

        //   <UserInfo>
        //     <div>
        //       <span>Nombre</span>
        //       <p>{user.name}</p>
        //     </div>

        //     <div>
        //       <span>Email</span>
        //       <p>{user.email}</p>
        //     </div>

        //     <div>
        //       <span>Teléfono</span>
        //       <p>{user.phone || "No disponible"}</p>
        //     </div>

        //     <div>
        //       <span>Dirección</span>
        //       <p>{user.address || "No disponible"}</p>
        //     </div>
        //   </UserInfo>
        //   <Button type="button" onClick={logout}>
        //     Cerrar sesión
        //   </Button>
        // </UserCard>
        <AdminDashboard />
      )}
      {/* {user?.role === "ADMIN" && (
        <div className="w-full mt-10 px-10">
          <h2>Clientes</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <thead>
              <tr style={{ background: "#f5f5f5" }}>
                <th style={thStyle}>Nombre</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Teléfono</th>
                <th style={thStyle}>Dirección</th>
                <th style={thStyle}>Rol</th>
                <th style={thStyle}>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {users.map((client) => (
                <tr key={client.id}>
                  <td style={tdStyle}>{client.name}</td>
                  <td style={tdStyle}>{client.email}</td>
                  <td style={tdStyle}>{client.phone || "-"}</td>
                  <td style={tdStyle}>{client.address || "-"}</td>
                  <td style={tdStyle}>{client.role}</td>
                  <td style={tdStyle}>
                    <button onClick={() => handleEditUser(client.id)}>
                      Editar
                    </button>{" "}
                    <button onClick={() => handleDeleteUser(client.id)}>
                      Eliminar
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )} */}
    </Container>
  );
};

export default User;
