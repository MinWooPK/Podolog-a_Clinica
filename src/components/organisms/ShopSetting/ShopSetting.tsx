import { useEffect, useState } from "react";
import { getShops, deleteShop, type ShopItem } from "@services/shop.service";

import { useModal } from "@context/ModalContext";
import ModalCreateShop from "@molecules/ModalCreateShop";
import ModalEditShop from "@molecules/ModalEditShop";

const ShopSetting = () => {
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

  const handleEditShop = (shop: ShopItem) => {
    showModal(
      ModalEditShop,
      {
        shop,
        onUpdated: fetchShops,
        onClose: hideModal,
      },
      false,
      "medium",
    );
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
    <div className="mr-10">
      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Productos</h1>

        <button
          type="button"
          onClick={handleCreateShop}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          + Crear producto
        </button>
      </div>

      {/* LOADING */}

      {loading ? (
        <p>Cargando productos...</p>
      ) : shops.length === 0 ? (
        /* SIN PRODUCTOS */

        <div className="p-8 text-center border rounded-xl bg-white">
          <p className="text-gray-500">No hay productos en la tienda.</p>
        </div>
      ) : (
        /* TABLA */

        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-600">
                    Producto
                  </th>

                  <th className="px-6 py-4 text-left font-semibold text-gray-600">
                    Descripción
                  </th>

                  <th className="px-6 py-4 text-left font-semibold text-gray-600">
                    Precio
                  </th>

                  <th className="px-6 py-4 text-left font-semibold text-gray-600">
                    Stock
                  </th>

                  <th className="px-6 py-4 text-right font-semibold text-gray-600">
                    Acciones
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {shops.map((shop) => (
                  <tr
                    key={shop.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {/* PRODUCTO */}

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        {shop.imageUrl ? (
                          <img
                            src={shop.imageUrl}
                            alt={shop.title}
                            className="w-14 h-14 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center">
                            <span className="text-xs text-gray-400">
                              Sin imagen
                            </span>
                          </div>
                        )}

                        <div>
                          <p className="font-semibold text-gray-900">
                            {shop.title}
                          </p>

                          {shop.subtitle && (
                            <p className="text-xs text-gray-500 mt-1">
                              {shop.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* DESCRIPCIÓN */}

                    <td className="px-6 py-4 max-w-md">
                      <p className="text-gray-600 line-clamp-2">
                        {shop.description}
                      </p>
                    </td>

                    {/* PRECIO */}

                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-900">
                        {Number(shop.price).toFixed(2)} €
                      </span>
                    </td>

                    {/* STOCK */}

                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          shop.inStock
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {shop.inStock ? "Disponible" : "Fuera de stock"}
                      </span>
                    </td>

                    {/* ACCIONES */}

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => handleEditShop(shop)}
                          className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                        >
                          Editar
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(shop.id)}
                          className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopSetting;
