import api from "../api/axios";

export interface AppointmentPatient {
  id: string;
  name: string;
  surname: string;
  dni: string;
  email?: string | null;
  phone?: string | null;
}

export interface Appointment {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  service: string;
  note: string | null;
  patientId: string;

  patient: AppointmentPatient;

  createdAt: string;
  updatedAt: string;
}

export interface CreateAppointmentData {
  date: string;
  startTime: string;
  endTime: string;
  service: string;
  note?: string;
  patientId: string;
}

export interface UpdateAppointmentData {
  date: string;
  startTime: string;
  endTime: string;
  service: string;
  note?: string;
  patientId: string;
}

export interface RecentAppointment {
  id: string;
  startTime: string;
  service: string;
  isPending: boolean;
  patient: {
    name: string;
    surname: string;
  };
}

// ==============================
// OBTENER TODAS LAS CITAS
// ==============================

export const getAppointments = async (): Promise<Appointment[]> => {
  const response = await api.get<Appointment[]>("/appointments");

  return response.data;
};

// ==============================
// OBTENER CITA POR ID
// ==============================

export const getAppointmentById = async (id: string): Promise<Appointment> => {
  const response = await api.get<Appointment>(`/appointments/${id}`);

  return response.data;
};

// ==============================
// CREAR CITA
// ==============================

export const createAppointment = async (
  data: CreateAppointmentData,
): Promise<Appointment> => {
  const response = await api.post<Appointment>("/appointments", data);

  return response.data;
};

// ==============================
// ACTUALIZAR CITA
// ==============================

export const updateAppointment = async (
  id: string,
  data: UpdateAppointmentData,
): Promise<Appointment> => {
  const response = await api.put<Appointment>(`/appointments/${id}`, data);

  return response.data;
};

// ==============================
// ELIMINAR CITA
// ==============================

export const deleteAppointment = async (id: string): Promise<void> => {
  await api.delete(`/appointments/${id}`);
};

export const getRecentAppointmentsByDate = async (
  date: string,
): Promise<RecentAppointment[]> => {
  const response = await api.get(`/appointments/date/${date}/recent`);

  return response.data;
};
