import { useEffect, useState } from "react";

import { useModal } from "@context/ModalContext";

import {
  createAppointment,
  type CreateAppointmentData,
} from "@services/appointment.service";

import { getPatients, type Patient } from "@services/patient.service";

interface ModalCreateAppointmentProps {
  onCreated: () => void;
  onClose: () => void;
}

const ModalCreateAppointment = ({
  onCreated,
  onClose,
}: ModalCreateAppointmentProps) => {
  const { hideModal } = useModal();

  const [patients, setPatients] = useState<Patient[]>([]);

  const [patientId, setPatientId] = useState("");

  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [service, setService] = useState("");
  const [note, setNote] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingPatients, setLoadingPatients] = useState(true);

  const [error, setError] = useState("");

  // ==============================
  // OBTENER PACIENTES
  // ==============================

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoadingPatients(true);

        const data = await getPatients();

        setPatients(data);
      } catch (error) {
        console.error("Error al obtener pacientes:", error);

        setError("No se pudieron cargar los pacientes");
      } finally {
        setLoadingPatients(false);
      }
    };

    fetchPatients();
  }, []);

  // ==============================
  // CREAR CITA
  // ==============================

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!patientId) {
      setError("Selecciona un paciente");
      return;
    }

    if (!date) {
      setError("Selecciona una fecha");
      return;
    }

    if (!startTime || !endTime) {
      setError("Selecciona la hora de inicio y de fin");
      return;
    }

    if (startTime >= endTime) {
      setError("La hora de inicio debe ser anterior a la hora de fin");
      return;
    }

    if (!service.trim()) {
      setError("Introduce el servicio");
      return;
    }

    try {
      setLoading(true);

      const data: CreateAppointmentData = {
        date,
        startTime,
        endTime,
        service: service.trim(),
        note: note.trim() || undefined,
        patientId,
      };

      await createAppointment(data);

      onCreated();

      hideModal();
      onClose();
    } catch (error) {
      console.error("Error al crear la cita:", error);

      setError("No se pudo crear la cita");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* ============================== */}
      {/* TITULO */}
      {/* ============================== */}

      <div>
        <h2 className="text-xl font-semibold">Nueva cita</h2>

        <p className="text-sm text-gray-500 mt-1">
          Programa una nueva cita para un paciente.
        </p>
      </div>

      {/* ============================== */}
      {/* PACIENTE */}
      {/* ============================== */}

      <div>
        <label className="block mb-1 font-medium">Paciente</label>

        <select
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          disabled={loadingPatients}
          className="w-full border rounded-lg px-3 py-2"
        >
          <option value="">
            {loadingPatients
              ? "Cargando pacientes..."
              : "Selecciona un paciente"}
          </option>

          {patients
            .filter((patient) => patient.active)
            .map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.name} {patient.surname} - {patient.dni}
              </option>
            ))}
        </select>
      </div>

      {/* ============================== */}
      {/* FECHA */}
      {/* ============================== */}

      <div>
        <label className="block mb-1 font-medium">Fecha</label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* ============================== */}
      {/* HORARIOS */}
      {/* ============================== */}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Hora de inicio</label>

          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Hora de fin</label>

          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
      </div>

      {/* ============================== */}
      {/* SERVICIO */}
      {/* ============================== */}

      <div>
        <label className="block mb-1 font-medium">Servicio</label>

        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          placeholder="Ej. Quiropodia"
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* ============================== */}
      {/* NOTA */}
      {/* ============================== */}

      <div>
        <label className="block mb-1 font-medium">Nota</label>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Añade una nota sobre la cita..."
          rows={5}
          className="w-full border rounded-lg px-3 py-2 resize-none"
        />
      </div>

      {/* ============================== */}
      {/* ERROR */}
      {/* ============================== */}

      {error && <p className="text-sm text-red-500">{error}</p>}

      {/* ============================== */}
      {/* BOTONES */}
      {/* ============================== */}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => {
            hideModal();
            onClose();
          }}
          disabled={loading}
          className="flex-1 border rounded-lg py-2"
        >
          Cancelar
        </button>

        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-blue-600 text-white rounded-lg py-2"
        >
          {loading ? "Creando..." : "Crear cita"}
        </button>
      </div>
    </form>
  );
};

export default ModalCreateAppointment;
