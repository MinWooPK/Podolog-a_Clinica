import { useEffect, useMemo, useState } from "react";

import {
  getAppointments,
  deleteAppointment,
  type Appointment,
} from "@services/appointment.service";

import { useModal } from "@context/ModalContext";
import ModalCreateAppointment from "@molecules/ModalCreateAppointment";

const DateAdmin = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const { showModal, hideModal } = useModal();

  // =========================================================
  // OBTENER CITAS
  // =========================================================

  const fetchAppointments = async () => {
    try {
      setLoading(true);

      const data = await getAppointments();

      setAppointments(data);
    } catch (error) {
      console.error("Error al obtener las citas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // =========================================================
  // DATOS DEL CALENDARIO
  // =========================================================

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleDateString("es-ES", {
    month: "long",
  });

  const firstDayOfMonth = new Date(year, month, 1);

  const lastDayOfMonth = new Date(year, month + 1, 0);

  // JS empieza el domingo en 0.
  // Queremos que la semana empiece el lunes.
  const firstDayWeekday = (firstDayOfMonth.getDay() + 6) % 7;

  const daysInMonth = lastDayOfMonth.getDate();

  // =========================================================
  // CREAR DÍAS DEL CALENDARIO
  // =========================================================

  const calendarDays = useMemo(() => {
    const days: (Date | null)[] = [];

    // Huecos antes del primer día
    for (let i = 0; i < firstDayWeekday; i++) {
      days.push(null);
    }

    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    // Completar hasta tener semanas completas
    while (days.length % 7 !== 0) {
      days.push(null);
    }

    return days;
  }, [year, month, firstDayWeekday, daysInMonth]);

  // =========================================================
  // FORMATEAR FECHA PARA COMPARAR
  // =========================================================

  const formatDateKey = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  // =========================================================
  // OBTENER CITAS DE UN DÍA
  // =========================================================

  const getAppointmentsForDate = (date: Date) => {
    const selectedKey = formatDateKey(date);

    return appointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.date);

      return formatDateKey(appointmentDate) === selectedKey;
    });
  };

  // =========================================================
  // SABER SI UN DÍA TIENE CITAS
  // =========================================================

  const hasAppointments = (date: Date) => {
    return getAppointmentsForDate(date).length > 0;
  };

  // =========================================================
  // CAMBIAR MES
  // =========================================================

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
  };

  // =========================================================
  // CAMBIAR AÑO
  // =========================================================

  const goToPreviousYear = () => {
    setCurrentDate(new Date(year - 1, month, 1));
    setSelectedDate(null);
  };

  const goToNextYear = () => {
    setCurrentDate(new Date(year + 1, month, 1));
    setSelectedDate(null);
  };

  // =========================================================
  // VOLVER A HOY
  // =========================================================

  const goToToday = () => {
    const today = new Date();

    setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));

    setSelectedDate(today);
  };

  // =========================================================
  // CREAR CITA
  // =========================================================

  const handleCreateAppointment = () => {
    showModal(
      ModalCreateAppointment,
      {
        onCreated: fetchAppointments,
        onClose: hideModal,
      },
      false,
      "medium",
    );
  };

  // =========================================================
  // SELECCIONAR DÍA
  // =========================================================

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
  };

  // =========================================================
  // ELIMINAR CITA
  // =========================================================

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "¿Seguro que quieres eliminar esta cita?",
    );

    if (!confirmDelete) return;

    try {
      await deleteAppointment(id);

      await fetchAppointments();
    } catch (error) {
      console.error("Error al eliminar la cita:", error);
    }
  };

  // =========================================================
  // FORMATEAR FECHA
  // =========================================================

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // =========================================================
  // DÍA DE HOY
  // =========================================================

  const today = new Date();

  const isToday = (date: Date) => {
    return formatDateKey(date) === formatDateKey(today);
  };

  // =========================================================
  // CITAS DEL DÍA SELECCIONADO
  // =========================================================

  const selectedAppointments = selectedDate
    ? getAppointmentsForDate(selectedDate)
    : [];

  return (
    <div className="mr-10">
      {/* =====================================================
          HEADER
      ===================================================== */}

      {/* <div className="flex items-center justify-between mb-6">
        <div></div>

        <button
          type="button"
          onClick={() => handleCreateAppointment()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          + Nueva cita
        </button>
      </div> */}
      <div className="flex gap-6 items-start">
        {/* =====================================================
          CALENDARIO
      ===================================================== */}
        <div className="flex-1 bg-white rounded-xl border-none shadow-sm overflow-hidden">
          <div className="bg-white rounded-xl border-none shadow-sm overflow-hidden">
            {/* ===================================================
            CABECERA DEL CALENDARIO
        =================================================== */}

            <div className="flex items-center justify-between p-5 border rounded-t-xl">
              <div className="flex items-center gap-2">
                {/* AÑO ANTERIOR */}

                <button
                  type="button"
                  onClick={goToPreviousYear}
                  className="w-9 h-9 border rounded-lg hover:bg-gray-100"
                  title="Año anterior"
                >
                  «
                </button>

                {/* MES ANTERIOR */}

                <button
                  type="button"
                  onClick={goToPreviousMonth}
                  className="w-9 h-9 border rounded-lg hover:bg-gray-100"
                  title="Mes anterior"
                >
                  ‹
                </button>
              </div>

              {/* MES / AÑO */}

              <div className="text-center">
                <h2 className="text-xl font-semibold capitalize">
                  {monthName}
                </h2>

                <p className="text-gray-500">{year}</p>
              </div>

              <div className="flex items-center gap-2">
                {/* MES SIGUIENTE */}

                <button
                  type="button"
                  onClick={goToNextMonth}
                  className="w-9 h-9 border rounded-lg hover:bg-gray-100"
                  title="Mes siguiente"
                >
                  ›
                </button>

                {/* AÑO SIGUIENTE */}

                <button
                  type="button"
                  onClick={goToNextYear}
                  className="w-9 h-9 border rounded-lg hover:bg-gray-100"
                  title="Año siguiente"
                >
                  »
                </button>
              </div>
            </div>

            {/* BOTÓN HOY */}

            <div className="flex justify-end px-5 p-4 border-x">
              <button
                type="button"
                onClick={goToToday}
                className="text-sm border rounded-lg px-3 py-2 hover:bg-gray-100"
              >
                Hoy
              </button>
            </div>

            {/* ===================================================
            DÍAS DE LA SEMANA
        =================================================== */}

            <div className="grid grid-cols-7 border-t border-l">
              {[
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sábado",
                "Domingo",
              ].map((day) => (
                <div
                  key={day}
                  className="p-3 text-center text-sm font-semibold text-gray-500 border-r border-b"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* ===================================================
            DÍAS
        =================================================== */}

            {loading ? (
              <div className="p-10 text-center">
                <p className="text-gray-500">Cargando citas...</p>
              </div>
            ) : (
              <div className="grid grid-cols-7 border-l">
                {calendarDays.map((date, index) => {
                  if (!date) {
                    return (
                      <div
                        key={`empty-${index}`}
                        className="min-h-[120px] bg-gray-50 border-r border-b"
                      />
                    );
                  }

                  const dayAppointments = getAppointmentsForDate(date);

                  const selected =
                    selectedDate &&
                    formatDateKey(selectedDate) === formatDateKey(date);

                  return (
                    <button
                      key={date.toISOString()}
                      type="button"
                      onClick={() => handleSelectDate(date)}
                      className={`
                    min-h-[120px]
                    p-2
                    text-left
                    border-r
                    border-b
                    transition
                    hover:bg-blue-50
                    ${
                      selected
                        ? "bg-blue-50 ring-2 ring-inset ring-blue-500"
                        : "bg-white"
                    }
                  `}
                    >
                      {/* NÚMERO DEL DÍA */}

                      <div className="flex justify-between items-start">
                        <span
                          className={`
                        w-8
                        h-8
                        flex
                        items-center
                        justify-center
                        rounded-full
                        text-sm
                        font-medium
                        ${
                          isToday(date)
                            ? "bg-blue-600 text-white"
                            : "text-gray-700"
                        }
                      `}
                        >
                          {date.getDate()}
                        </span>

                        {/* INDICADOR DE CITAS */}

                        {hasAppointments(date) && (
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                            {dayAppointments.length}
                          </span>
                        )}
                      </div>

                      {/* CITAS DEL DÍA */}

                      <div className="mt-2 space-y-1">
                        {dayAppointments.slice(0, 3).map((appointment) => (
                          <div
                            key={appointment.id}
                            className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-xs truncate"
                          >
                            <span className="font-semibold">
                              {appointment.startTime}
                            </span>{" "}
                            {appointment.patient.name}
                          </div>
                        ))}

                        {dayAppointments.length > 3 && (
                          <p className="text-xs text-gray-500 px-1">
                            +{dayAppointments.length - 3} más
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* =====================================================
          CITAS DEL DÍA SELECCIONADO
      ===================================================== */}

        {selectedDate && (
          <div className="w-[400px] shrink-0">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold">
                  Citas del{" "}
                  {selectedDate.toLocaleDateString("es-ES", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => handleCreateAppointment()}
                className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                +
              </button>
            </div>

            {selectedAppointments.length === 0 ? (
              <div className="bg-white border rounded-xl p-8 text-center">
                <p className="text-gray-500">No hay citas para este día.</p>

                <button
                  type="button"
                  onClick={() => handleCreateAppointment()}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Crear una cita
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {selectedAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="bg-white rounded-xl shadow-sm border p-5"
                  >
                    <div className="flex flex-col gap-4">
                      {/* HORARIO */}
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Horario</p>

                          <p className="font-semibold mt-1">
                            {appointment.startTime} - {appointment.endTime}
                          </p>
                        </div>

                        {/* PACIENTE */}

                        <div>
                          <p className="text-sm text-gray-500">Paciente</p>

                          <p className="font-semibold mt-1">
                            {appointment.patient.name}{" "}
                            {appointment.patient.surname}
                          </p>
                        </div>

                        {/* SERVICIO */}

                        <div>
                          <p className="text-sm text-gray-500">Servicio</p>

                          <p className="font-semibold mt-1">
                            {appointment.service}
                          </p>
                        </div>
                      </div>

                      {/* ACCIONES */}

                      <div className="flex gap-2 pt-3 border-t">
                        <button
                          type="button"
                          className="flex-1 border rounded-lg px-4 py-2 hover:bg-gray-50"
                        >
                          Editar
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(appointment.id)}
                          className="flex-1 bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>

                    {appointment.note && (
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm text-gray-500">Nota</p>

                        <p className="text-gray-700 mt-1">{appointment.note}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DateAdmin;
