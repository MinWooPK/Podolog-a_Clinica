import {
  CalendarDays,
  Users,
  UserRound,
  Euro,
  Clock,
  Bell,
  Search,
  ChevronRight,
  Stethoscope,
  FileText,
  Settings,
  LayoutDashboard,
  Receipt,
  LogOut,
  Store,
} from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@context/AuthContext";
import { getUsers, deleteUser, getUserById } from "@services/user.service";
import DashboardMain from "@organisms/DashboardMain/DashboardMain";
import ShopSetting from "@organisms/ShopSetting/ShopSetting";
import PacientAdmin from "@organisms/PacientAdmin/PacientAdmin";
import DateAdmin from "@organisms/DateAdmin/DateAdmin";
import SettingAdmin from "@organisms/SettingAdmin/SettingAdmin";
import HistoryClinic from "@organisms/HistoryClinic/HistoryClinic";
import BillAdmin from "@organisms/BillAdmin/BillAdmin";

interface UserItem {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  role: string;
  avatarUrl: string | null;
}

const sectionContent = {
  dashboard: {
    title: "Dashboard",
    subtitle: "Resumen de la clínica",
  },
  pacient: {
    title: "Pacientes",
    subtitle: "Gestión de los pacientes de la clínica",
  },
  date: {
    title: "Citas",
    subtitle: "Gestión y seguimiento de las citas",
  },
  history: {
    title: "Historias clínicas",
    subtitle: "Consulta y gestión de historias clínicas",
  },
  shop: {
    title: "Tienda",
    subtitle: "Gestión de productos de la clínica",
  },
  bill: {
    title: "Facturación",
    subtitle: "Gestión de facturas y pagos",
  },
  setting: {
    title: "Configuración",
    subtitle: "Configuración de la clínica",
  },
};

const AdminDashboard = () => {
  const { user, login, register, logout } = useContext(AuthContext);
  const [users, setUsers] = useState<UserItem[]>([]);

  // Por defecto estamos en Dashboard
  const [activeSection, setActiveSection] = useState<
    "dashboard" | "shop" | "pacient" | "date" | "history" | "bill" | "setting"
  >("dashboard");

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

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="w-full  bg-slate-50 flex">
      {/* SIDEBAR */}
      <aside className="w-64 min-h-screen bg-white border-r border-slate-200 flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center">
            <Stethoscope className="text-white" size={22} />
          </div>

          <div className="ml-3">
            <h1 className="font-bold text-slate-800">Podoclinic</h1>
            <p className="text-xs text-slate-400">Administración</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <SidebarItem
            icon={<LayoutDashboard size={19} />}
            label="Dashboard"
            active={activeSection === "dashboard"}
            onClick={() => setActiveSection("dashboard")}
          />
          <SidebarItem
            icon={<Users size={19} />}
            label="Pacientes"
            active={activeSection === "pacient"}
            onClick={() => setActiveSection("pacient")}
          />
          <SidebarItem
            icon={<CalendarDays size={19} />}
            label="Citas"
            active={activeSection === "date"}
            onClick={() => setActiveSection("date")}
          />
          {/* <SidebarItem icon={<Stethoscope size={19} />} label="Profesionales" /> */}
          <SidebarItem
            icon={<FileText size={19} />}
            label="Historias clínicas"
            active={activeSection === "history"}
            onClick={() => setActiveSection("history")}
          />
          {/* TIENDA */}
          <SidebarItem
            icon={<Store size={19} />}
            label="Tienda"
            active={activeSection === "shop"}
            onClick={() => setActiveSection("shop")}
          />{" "}
          <SidebarItem
            icon={<Receipt size={19} />}
            label="Facturación"
            active={activeSection === "bill"}
            onClick={() => setActiveSection("bill")}
          />
          <SidebarItem
            icon={<Settings size={19} />}
            label="Configuración"
            active={activeSection === "setting"}
            onClick={() => setActiveSection("setting")}
          />
        </nav>

        <div className="p-4 border-t border-slate-200">
          <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-slate-500 hover:bg-slate-50 rounded-lg">
            <LogOut size={19} />
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 min-w-0">
        {/* HEADER */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <div>
            <h2 className="text-xl text-start font-semibold text-slate-800">
              {sectionContent[activeSection].title}
            </h2>

            <p className="text-sm text-slate-400">
              {sectionContent[activeSection].subtitle}
            </p>
          </div>

          <div className="flex items-center gap-5">
            {/* SEARCH */}
            {/* <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Buscar paciente..."
                className="w-64 h-10 pl-10 pr-4 rounded-lg border border-slate-200 text-sm outline-none focus:border-sky-500"
              />
            </div> */}

            {/* NOTIFICATIONS */}
            <button className="relative w-10 h-10 rounded-lg hover:bg-slate-50 flex items-center justify-center">
              <Bell size={20} className="text-slate-500" />

              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* PROFILE */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                {user.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <UserRound size={20} className="text-sky-600" />
                )}
              </div>

              <div>
                <p className="text-sm font-medium text-slate-700">
                  {user.role}
                </p>

                <p className="text-xs text-slate-400">Admin</p>
              </div>
            </div>
          </div>
        </header>
        {/* CONTENT */}
        <div className="mx-12 my-5">
          {activeSection === "dashboard" && (
            <DashboardMain setActiveSection={setActiveSection} />
          )}{" "}
          {activeSection === "pacient" && <PacientAdmin />}
          {activeSection === "date" && <DateAdmin />}
          {activeSection === "history" && <HistoryClinic />}
          {activeSection === "shop" && <ShopSetting />}{" "}
          {activeSection === "bill" && <BillAdmin />}{" "}
          {activeSection === "setting" && <SettingAdmin />}
        </div>{" "}
      </main>
    </div>
  );
};

function SidebarItem({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
        active
          ? "bg-sky-50 text-sky-600 font-medium"
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

export default AdminDashboard;
