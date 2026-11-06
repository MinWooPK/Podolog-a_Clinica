import api from "../api/axios";

const API_URL = "/patients";

// ==============================
// TIPOS
// ==============================

export interface Patient {
  id: string;
  name: string;
  surname: string;
  dni: string;
  email: string | null;
  phone: string | null;
  birthDate: string | null;
  address: string | null;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePatientData {
  name: string;
  surname: string;
  dni: string;
  email?: string;
  phone?: string;
  birthDate?: string;
  address?: string;
  active?: boolean;
}

export interface UpdatePatientData {
  name: string;
  surname: string;
  dni: string;
  email?: string;
  phone?: string;
  birthDate?: string;
  address?: string;
  active?: boolean;
}

// ==============================
// OBTENER TODOS LOS PACIENTES
// GET /patients
// ==============================

export const getPatients = async (): Promise<Patient[]> => {
  const response = await api.get<Patient[]>(API_URL);

  return response.data;
};

// ==============================
// OBTENER PACIENTE POR ID
// GET /patients/:id
// ==============================

export const getPatientById = async (id: string): Promise<Patient> => {
  const response = await api.get<Patient>(`${API_URL}/${id}`);

  return response.data;
};

// ==============================
// CREAR PACIENTE
// POST /patients
// ==============================

export const createPatient = async (
  data: CreatePatientData,
): Promise<Patient> => {
  const response = await api.post<Patient>(API_URL, data);

  return response.data;
};

// ==============================
// ACTUALIZAR PACIENTE
// PUT /patients/:id
// ==============================

export const updatePatient = async (
  id: string,
  data: UpdatePatientData,
): Promise<Patient> => {
  const response = await api.put<Patient>(`${API_URL}/${id}`, data);

  return response.data;
};

// ==============================
// ELIMINAR PACIENTE
// DELETE /patients/:id
// ==============================

export const deletePatient = async (id: string): Promise<void> => {
  await api.delete(`${API_URL}/${id}`);
};
