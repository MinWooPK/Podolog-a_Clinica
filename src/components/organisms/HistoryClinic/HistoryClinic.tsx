import { useEffect, useState } from "react";
import { getShops, deleteShop, type ShopItem } from "@services/shop.service";

import { useModal } from "@context/ModalContext";
import ModalCreateShop from "@molecules/ModalCreateShop";

const HistoryClinic = () => {
  const [shops, setShops] = useState<ShopItem[]>([]);
  const [loading, setLoading] = useState(true);

  const { showModal, hideModal } = useModal();

  const fetchShops = async () => {
    try {
      setLoading(true);

      const data = await getShops();

      setShops(data);
    } catch (error) {
      console.error("Error al obtener los artículos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShops();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "¿Seguro que quieres eliminar este artículo?",
    );

    if (!confirmDelete) return;

    try {
      await deleteShop(id);

      await fetchShops();
    } catch (error) {
      console.error("Error al eliminar el artículo:", error);
    }
  };

  const handleCreateShop = () => {
    showModal(
      ModalCreateShop,
      {
        onCreated: fetchShops,
        onClose: hideModal,
      },
      false,
      "medium",
    );
  };

  return (
    <div className="mr-10 h-full flex items-center justify-center">
      Proximamente...
    </div>
  );
};

export default HistoryClinic;
