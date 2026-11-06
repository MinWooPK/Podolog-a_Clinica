import { useEffect, useState } from "react";

import {
  CalendarDays,
  Users,
  UserRound,
  Euro,
  ChevronRight,
  Stethoscope,
  FileText,
  Receipt,
} from "lucide-react";

import {
  getRecentAppointmentsByDate,
  type RecentAppointment,
} from "@services/appointment.service";

const patients = [
  {
    name: "María García",
    email: "maria@email.com",
    lastVisit: "08/08/2026",
    status: "Activo",
  },
  {
    name: "Juan Martínez",
    email: "juan@email.com",
    lastVisit: "05/08/2026",
    status: "Activo",
  },
  {
    name: "Ana Rodríguez",
    email: "ana@email.com",
    lastVisit: "02/08/2026",
    status: "Activo",
  },
];

const stats = [
  {
    title: "Pacientes",
    value: "1.248",
    icon: Users,
  },
  {
    title: "Citas hoy",
    value: "24",
    icon: CalendarDays,
  },
  {
    title: "Ingresos",
    value: "8.420 €",
    icon: Euro,
  },
  {
    title: "Profesionales",
    value: "8",
    icon: Stethoscope,
  },
];

const QuickAction = ({
  icon,
  title,
  description,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-3 text-left"
    >
      <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-slate-700">{title}</p>

        <p className="text-xs text-slate-400 mt-0.5">{description}</p>
      </div>
    </button>
  );
};

type Section =
  "dashboard" | "shop" | "pacient" | "date" | "history" | "bill" | "setting";

interface DashboardMainProps {
  setActiveSection: React.Dispatch<React.SetStateAction<Section>>;
}

const DashboardMain = ({ setActiveSection }: DashboardMainProps) => {
  const [appointments, setAppointments] = useState<RecentAppointment[]>([]);

  const [appointmentsLoading, setAppointmentsLoading] = useState(true);

  // ==============================
  // FECHA DE HOY
  // ==============================

  const getTodayDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  // ==============================
  // FORMATEAR FECHA
  // ==============================

  const formatToday = () => {
    const today = new Date();

    return today.toLocaleDateString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // ==============================
  // OBTENER CITAS DE HOY
  // ==============================

  const fetchTodayAppointments = async () => {
    try {
      setAppointmentsLoading(true);

      const today = getTodayDate();

      const data = await getRecentAppointmentsByDate("2026-08-14");

      setAppointments(data);
    } catch (error) {
      console.error("Error al obtener las citas de hoy:", error);

      setAppointments([]);
    } finally {
      setAppointmentsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodayAppointments();
  }, []);

  return (
    <div>
      {/* ============================== */}
      {/* WELCOME */}
      {/* ============================== */}

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Bienvenido</h1>

        <p className="text-slate-500 mt-1">
          Aquí tienes un resumen de la actividad de la clínica.
        </p>
      </div>

      {/* ============================== */}
      {/* STATS */}
      {/* ============================== */}

      <div className="grid grid-cols-4 gap-5 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-white rounded-xl border border-slate-200 p-5"
            >
              <div className="flex items-center justify-center gap-8">
                <div className="w-11 h-11 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Icon size={22} className="text-sky-600" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">{stat.title}</p>

                  <p className="text-2xl font-bold text-slate-800 mt-1">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ============================== */}
      {/* GRID */}
      {/* ============================== */}

      <div className="grid grid-cols-3 gap-6">
        {/* ============================== */}
        {/* APPOINTMENTS */}
        {/* ============================== */}

        <div className="col-span-2 bg-white rounded-xl border border-slate-200">
          <div className="p-5 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-800">Citas de hoy</h3>

              <p className="text-sm text-slate-400 mt-1 capitalize">
                {formatToday()}
              </p>
            </div>

            <button
              type="button"
              className="text-sm text-sky-600 font-medium flex items-center gap-1 cursor-pointer"
              onClick={() => setActiveSection("date")}
            >
              Ver todas
              <ChevronRight size={16} />
            </button>
          </div>

          {/* ============================== */}
          {/* LOADING */}
          {/* ============================== */}

          {appointmentsLoading ? (
            <div className="p-8 flex items-center justify-center">
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-5 h-5 border-2 border-slate-300 border-t-sky-600 rounded-full animate-spin" />

                <span className="text-sm">Cargando citas...</span>
              </div>
            </div>
          ) : appointments.length === 0 ? (
            /* ============================== */
            /* SIN CITAS */
            /* ============================== */

            <div className="p-8 text-center">
              <CalendarDays size={32} className="mx-auto text-slate-300 mb-3" />

              <p className="text-sm text-slate-500">
                No hay citas programadas para hoy.
              </p>
            </div>
          ) : (
            /* ============================== */
            /* CITAS */
            /* ============================== */

            <div>
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center px-5 py-4 border-b border-slate-100 last:border-0"
                >
                  {/* HORA */}

                  <div className="w-16">
                    <p className="font-semibold text-slate-700">
                      {appointment.startTime}
                    </p>
                  </div>

                  {/* ICONO */}

                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <UserRound size={19} className="text-slate-500" />
                  </div>

                  {/* PACIENTE + SERVICIO */}

                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-slate-700">
                      {appointment.patient.name} {appointment.patient.surname}
                    </p>

                    <p className="text-xs text-slate-400 mt-1">
                      {appointment.service}
                    </p>
                  </div>

                  {/* ESTADO */}

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      appointment.isPending
                        ? "bg-amber-50 text-amber-600"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    {appointment.isPending ? "Pendiente" : "Confirmada"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ============================== */}
        {/* QUICK ACTIONS */}
        {/* ============================== */}

        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h3 className="font-semibold text-slate-800">Acciones rápidas</h3>

          <div className="mt-5 grid grid-cols-2 gap-8">
            <QuickAction
              icon={<UserRound size={20} />}
              title="Nuevo paciente"
              description="Registrar paciente"
              onClick={() => setActiveSection("pacient")}
            />

            <QuickAction
              icon={<CalendarDays size={20} />}
              title="Nueva cita"
              description="Programar cita"
              onClick={() => setActiveSection("date")}
            />

            <QuickAction
              icon={<FileText size={20} />}
              title="Historia clínica"
              description="Consultar historias"
              onClick={() => setActiveSection("history")}
            />

            <QuickAction
              icon={<Receipt size={20} />}
              title="Nueva factura"
              description="Crear facturación"
              onClick={() => setActiveSection("bill")}
            />
          </div>
        </div>
      </div>

      {/* ============================== */}
      {/* PATIENTS */}
      {/* ============================== */}

      <div className="mt-6 bg-white rounded-xl border border-slate-200">
        <div className="p-5 border-b border-slate-200 flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-slate-800">
              Pacientes recientes
            </h3>

            <p className="text-sm text-slate-400 mt-1">
              Últimos pacientes atendidos
            </p>
          </div>

          <button
            type="button"
            className="text-sm text-sky-600 font-medium"
            onClick={() => setActiveSection("pacient")}
          >
            Ver pacientes
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {patients.map((patient) => (
            <div key={patient.email} className="px-5 py-4 flex items-center">
              <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center">
                <UserRound size={18} className="text-sky-600" />
              </div>

              <div className="ml-4 flex-1">
                <p className="text-sm font-medium text-slate-700">
                  {patient.name}
                </p>

                <p className="text-xs text-slate-400 mt-1">{patient.email}</p>
              </div>

              <div className="mr-10">
                <p className="text-xs text-slate-400">Última visita</p>

                <p className="text-sm text-slate-600 mt-1">
                  {patient.lastVisit}
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium">
                {patient.status}
              </span>

              <button
                type="button"
                className="ml-6 text-slate-400 hover:text-slate-700"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
