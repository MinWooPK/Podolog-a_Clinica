import { useEffect, useState } from "react";
import {
  getPatients,
  deletePatient,
  type Patient,
} from "@services/patient.service";

import { useModal } from "@context/ModalContext";
import ModalPatient from "@molecules/ModalPatient";

import { Search, Pencil, Trash2, Eye, Plus } from "lucide-react";

const PacientAdmin = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const { showModal, hideModal } = useModal();

  // ==============================
  // OBTENER PACIENTES
  // ==============================

  const fetchPatients = async () => {
    try {
      setLoading(true);

      const data = await getPatients();

      setPatients(data);
    } catch (error) {
      console.error("Error al obtener pacientes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  // ==============================
  // CREAR PACIENTE
  // ==============================

  const handleCreatePatient = () => {
    showModal(
      ModalPatient,
      {
        onCreated: fetchPatients,
        onClose: hideModal,
      },
      false,
      "medium",
    );
  };

  // ==============================
  // EDITAR PACIENTE
  // ==============================

  const handleEdit = (id: string) => {
    const patient = patients.find((p) => p.id === id);

    if (!patient) return;

    showModal(
      ModalPatient,
      {
        patient,
        onUpdated: fetchPatients,
        onClose: hideModal,
      },
      false,
      "medium",
    );
  };

  // ==============================
  // ELIMINAR PACIENTE
  // ==============================

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "¿Seguro que quieres eliminar este paciente?",
    );

    if (!confirmDelete) return;

    try {
      await deletePatient(id);

      await fetchPatients();
    } catch (error) {
      console.error("Error al eliminar paciente:", error);
    }
  };

  // ==============================
  // VER PACIENTE
  // ==============================

  const handleView = (id: string) => {
    console.log("Ver paciente:", id);
  };

  // ==============================
  // BUSCADOR
  // ==============================

  const filteredPatients = patients.filter((patient) => {
    const fullName = `${patient.name} ${patient.surname}`.toLowerCase();

    const searchValue = search.toLowerCase();

    return (
      fullName.includes(searchValue) ||
      patient.dni.toLowerCase().includes(searchValue) ||
      (patient.phone ?? "").includes(search)
    );
  });

  return (
    <div className="mr-10">
      {/* HEADER */}

      <div className="flex justify-between bg-white border border-slate-200 rounded-xl p-4 mb-5">
        <div className="relative max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Buscar por nombre, DNI o teléfono..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-10 pl-10 pr-4 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="button"
          onClick={handleCreatePatient}
          className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Plus size={18} />
          Crear paciente
        </button>
      </div>

      {/* LOADING */}

      {loading ? (
        <div className="bg-white border border-slate-200 rounded-xl p-8 text-center">
          <p className="text-gray-500">Cargando pacientes...</p>
        </div>
      ) : filteredPatients.length === 0 ? (
        /* SIN PACIENTES */

        <div className="bg-white border border-slate-200 rounded-xl p-10 text-center">
          <p className="text-gray-500">
            {patients.length === 0
              ? "No hay pacientes registrados."
              : "No se encontraron pacientes."}
          </p>

          {patients.length === 0 && (
            <button
              type="button"
              onClick={handleCreatePatient}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Crear primer paciente
            </button>
          )}
        </div>
      ) : (
        /* TABLA */

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* HEADER */}

              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase">
                    Paciente
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase">
                    DNI
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase">
                    Teléfono
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase">
                    Email
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase">
                    Fecha nacimiento
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-semibold text-slate-500 uppercase">
                    Estado
                  </th>

                  <th className="text-right px-6 py-4 text-xs font-semibold text-slate-500 uppercase">
                    Acciones
                  </th>
                </tr>
              </thead>

              {/* BODY */}

              <tbody className="divide-y divide-slate-100">
                {filteredPatients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-slate-50 transition">
                    {/* PACIENTE */}

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-semibold">
                          {patient.name.charAt(0).toUpperCase()}
                          {patient.surname.charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <p className="font-medium text-slate-700">
                            {patient.name} {patient.surname}
                          </p>

                          {patient.birthDate && (
                            <p className="text-xs text-slate-400">
                              Nacimiento:{" "}
                              {new Date(patient.birthDate).toLocaleDateString(
                                "es-ES",
                              )}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* DNI */}

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {patient.dni}
                    </td>

                    {/* TELEFONO */}

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {patient.phone || "-"}
                    </td>

                    {/* EMAIL */}

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {patient.email || "-"}
                    </td>

                    {/* FECHA NACIMIENTO */}

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {patient.birthDate
                        ? new Date(patient.birthDate).toLocaleDateString(
                            "es-ES",
                          )
                        : "-"}
                    </td>

                    {/* ESTADO */}

                    <td className="px-6 py-4">
                      <span
                        className={
                          patient.active
                            ? "inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600"
                            : "inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-500"
                        }
                      >
                        {patient.active ? "Activo" : "Inactivo"}
                      </span>
                    </td>

                    {/* ACCIONES */}

                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => handleView(patient.id)}
                          className="p-2 rounded-lg text-slate-500 hover:bg-sky-50 hover:text-sky-600"
                          title="Ver paciente"
                        >
                          <Eye size={18} />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleEdit(patient.id)}
                          className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                          title="Editar paciente"
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(patient.id)}
                          className="p-2 rounded-lg text-slate-500 hover:bg-red-50 hover:text-red-600"
                          title="Eliminar paciente"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FOOTER */}

          <div className="px-6 py-4 border-t border-slate-200 text-sm text-slate-400">
            Mostrando {filteredPatients.length} de {patients.length} pacientes
          </div>
        </div>
      )}
    </div>
  );
};

export default PacientAdmin;
