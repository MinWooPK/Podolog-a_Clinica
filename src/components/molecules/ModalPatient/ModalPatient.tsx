import { useState } from "react";
import { useModal } from "@context/ModalContext";
import {
  createPatient,
  updatePatient,
  type Patient,
} from "@services/patient.service";

interface ModalPatientProps {
  patient?: Patient;
  onCreated?: () => void;
  onUpdated?: () => void;
}

const ModalPatient = ({ patient, onCreated, onUpdated }: ModalPatientProps) => {
  const { hideModal } = useModal();

  const isEditing = !!patient;

  // ==============================
  // ESTADOS
  // ==============================

  const [name, setName] = useState(patient?.name || "");
  const [surname, setSurname] = useState(patient?.surname || "");
  const [dni, setDni] = useState(patient?.dni || "");
  const [email, setEmail] = useState(patient?.email || "");
  const [phone, setPhone] = useState(patient?.phone || "");
  const [birthDate, setBirthDate] = useState(
    patient?.birthDate
      ? new Date(patient.birthDate).toISOString().split("T")[0]
      : "",
  );
  const [address, setAddress] = useState(patient?.address || "");
  const [active, setActive] = useState(patient?.active ?? true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ==============================
  // SUBMIT
  // ==============================

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      // Validaciones básicas
      if (!name.trim()) {
        setError("El nombre es obligatorio");
        setLoading(false);
        return;
      }

      if (!surname.trim()) {
        setError("Los apellidos son obligatorios");
        setLoading(false);
        return;
      }

      if (!dni.trim()) {
        setError("El DNI es obligatorio");
        setLoading(false);
        return;
      }

      const patientData = {
        name: name.trim(),
        surname: surname.trim(),
        dni: dni.trim(),
        email: email.trim() || null,
        phone: phone.trim() || null,
        birthDate: birthDate
          ? new Date(`${birthDate}T00:00:00`).toISOString()
          : null,
        address: address.trim() || null,
        active,
      };

      console.log("========== PACIENTE ==========");
      console.log("EDITANDO:", isEditing);
      console.log("DATOS:", patientData);

      // ==============================
      // EDITAR
      // ==============================

      if (isEditing && patient) {
        await updatePatient(patient.id, patientData);

        console.log("Paciente actualizado correctamente");

        onUpdated?.();
      }

      // ==============================
      // CREAR
      // ==============================
      else {
        await createPatient(patientData);

        console.log("Paciente creado correctamente");

        onCreated?.();
      }

      hideModal();
    } catch (error) {
      console.error("Error al guardar paciente:", error);

      setError(
        isEditing
          ? "No se pudo actualizar el paciente"
          : "No se pudo crear el paciente",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* TITULO */}

      <div>
        <h2 className="text-xl font-semibold">
          {isEditing ? "Editar paciente" : "Crear paciente"}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {isEditing
            ? "Modifica los datos del paciente."
            : "Introduce los datos del nuevo paciente."}
        </p>
      </div>

      {/* NOMBRE Y APELLIDOS */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* NOMBRE */}

        <div>
          <label className="block mb-1 text-sm font-medium">Nombre *</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* APELLIDOS */}

        <div>
          <label className="block mb-1 text-sm font-medium">Apellidos *</label>

          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Apellidos"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
      </div>

      {/* DNI */}

      <div>
        <label className="block mb-1 text-sm font-medium">DNI *</label>

        <input
          type="text"
          value={dni}
          onChange={(e) => setDni(e.target.value.toUpperCase())}
          placeholder="12345678A"
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* EMAIL Y TELEFONO */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* EMAIL */}

        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="paciente@email.com"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* TELEFONO */}

        <div>
          <label className="block mb-1 text-sm font-medium">Teléfono</label>

          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="600 000 000"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
      </div>

      {/* FECHA NACIMIENTO */}

      <div>
        <label className="block mb-1 text-sm font-medium">
          Fecha de nacimiento
        </label>

        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* DIRECCION */}

      <div>
        <label className="block mb-1 text-sm font-medium">Dirección</label>

        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Dirección del paciente"
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* ESTADO */}

      {isEditing && (
        <div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
              className="w-4 h-4"
            />

            <span className="text-sm font-medium">Paciente activo</span>
          </label>
        </div>
      )}

      {/* ERROR */}

      {error && <p className="text-sm text-red-500">{error}</p>}

      {/* BOTONES */}

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={hideModal}
          disabled={loading}
          className="flex-1 border rounded-lg py-2 hover:bg-gray-50"
        >
          Cancelar
        </button>

        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 disabled:opacity-50"
        >
          {loading
            ? "Guardando..."
            : isEditing
              ? "Guardar cambios"
              : "Crear paciente"}
        </button>
      </div>
    </form>
  );
};

export default ModalPatient;
