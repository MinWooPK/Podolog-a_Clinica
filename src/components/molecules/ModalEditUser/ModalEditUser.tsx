import { useEffect, useState } from "react";
import { updateUser, type UserData } from "@services/user.service";
import { useModal } from "@context/ModalContext";
import { uploadImage } from "@services/cloudinary.service";

interface ModalEditUserProps {
  user: UserData;
  onUpdated: () => void;
}

const ModalEditUser = ({ user, onUpdated }: ModalEditUserProps) => {
  const { hideModal } = useModal();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone || "");
  const [address, setAddress] = useState(user.address || "");
  const [role, setRole] = useState<string>(user.role);

  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(
    user.avatarUrl,
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!avatar) return;

    const preview = URL.createObjectURL(avatar);
    setAvatarPreview(preview);

    return () => {
      URL.revokeObjectURL(preview);
    };
  }, [avatar]);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setAvatar(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      // Conservamos la imagen actual si no se selecciona una nueva
      let avatarUrl = user.avatarUrl || undefined;

      if (avatar) {
        avatarUrl = await uploadImage(avatar);
      }

      // Si se ha seleccionado una nueva imagen, la subimos a Cloudinary
      if (avatar) {
        console.log("Subiendo imagen a Cloudinary...");

        avatarUrl = await uploadImage(avatar);

        console.log("AVATAR URL:", avatarUrl);
      }

      await updateUser(user.id, {
        name,
        email,
        phone,
        address,
        role,
        avatarUrl,
      });

      console.log("Usuario actualizado correctamente");

      onUpdated();
      hideModal();
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      setError("No se pudo actualizar el usuario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold">Editar usuario</h2>

      {/* AVATAR */}

      <div className="flex flex-col items-center gap-3">
        {avatarPreview ? (
          <img
            src={avatarPreview}
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl">
            {name.charAt(0).toUpperCase()}
          </div>
        )}

        <label className="cursor-pointer text-blue-600">
          Cambiar imagen
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
        </label>
      </div>

      {/* NOMBRE */}

      <div>
        <label className="block mb-1">Nombre</label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* EMAIL */}

      <div>
        <label className="block mb-1">Email</label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* TELEFONO */}

      <div>
        <label className="block mb-1">Teléfono</label>

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* DIRECCION */}

      <div>
        <label className="block mb-1">Dirección</label>

        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* ROL */}

      <div>
        <label className="block mb-1">Rol</label>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="CLIENT">Cliente</option>

          <option value="ADMIN">Administrador</option>
        </select>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={hideModal}
          className="flex-1 border rounded-lg py-2"
        >
          Cancelar
        </button>

        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-blue-600 text-white rounded-lg py-2"
        >
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </div>
    </form>
  );
};

export default ModalEditUser;
