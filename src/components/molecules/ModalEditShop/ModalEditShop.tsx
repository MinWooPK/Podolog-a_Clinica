import { useEffect, useState } from "react";
import { updateShop, type ShopItem } from "@services/shop.service";

import { uploadImage } from "@services/cloudinary.service";
import { useModal } from "@context/ModalContext";

interface ModalEditShopProps {
  shop: ShopItem;
  onUpdated: () => void;
  onClose: () => void;
}

const ModalEditShop = ({ shop, onUpdated, onClose }: ModalEditShopProps) => {
  const { hideModal } = useModal();

  const [title, setTitle] = useState(shop.title);
  const [subtitle, setSubtitle] = useState(shop.subtitle || "");
  const [description, setDescription] = useState(shop.description);
  const [price, setPrice] = useState(String(shop.price));
  const [inStock, setInStock] = useState(shop.inStock);

  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    shop.imageUrl,
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!image) return;

    const preview = URL.createObjectURL(image);

    setImagePreview(preview);

    return () => {
      URL.revokeObjectURL(preview);
    };
  }, [image]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!title.trim()) {
      setError("El título es obligatorio");
      return;
    }

    if (!description.trim()) {
      setError("La descripción es obligatoria");
      return;
    }

    if (!price || Number(price) < 0) {
      setError("Introduce un precio válido");
      return;
    }

    try {
      setLoading(true);

      // Conservamos la imagen actual
      let imageUrl = shop.imageUrl || undefined;

      // Si selecciona otra imagen, la subimos
      if (image) {
        console.log("Subiendo nueva imagen...");

        imageUrl = await uploadImage(image);

        console.log("IMAGE URL:", imageUrl);
      }

      await updateShop(shop.id, {
        title: title.trim(),
        subtitle: subtitle.trim() || undefined,
        description: description.trim(),
        price: Number(price),
        imageUrl,
        inStock,
      });

      console.log("Producto actualizado correctamente");

      await onUpdated();

      onClose();
      hideModal();
    } catch (error) {
      console.error("Error al actualizar producto:", error);

      setError("No se pudo actualizar el producto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-semibold">Editar producto</h2>

      {/* IMAGEN */}

      <div>
        <label className="block mb-2 font-medium">Imagen</label>

        <div className="flex flex-col items-center gap-3">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt={title}
              className="w-40 h-40 rounded-lg object-cover border"
            />
          ) : (
            <div className="w-40 h-40 rounded-lg bg-gray-100 border flex items-center justify-center">
              <span className="text-gray-400">Sin imagen</span>
            </div>
          )}

          <label className="cursor-pointer text-blue-600 hover:text-blue-700">
            Cambiar imagen
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* TITULO */}

      <div>
        <label className="block mb-1 font-medium">Título</label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* SUBTITULO */}

      <div>
        <label className="block mb-1 font-medium">Subtítulo</label>

        <input
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* DESCRIPCION */}

      <div>
        <label className="block mb-1 font-medium">Descripción</label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={7}
          className="w-full border rounded-lg px-3 py-2 resize-y"
        />
      </div>

      {/* PRECIO */}

      <div>
        <label className="block mb-1 font-medium">Precio (€)</label>

        <input
          type="number"
          min="0"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* STOCK */}

      <div className="flex items-center gap-3">
        <input
          id="edit-inStock"
          type="checkbox"
          checked={inStock}
          onChange={(e) => setInStock(e.target.checked)}
          className="w-4 h-4"
        />

        <label htmlFor="edit-inStock" className="font-medium">
          Producto disponible
        </label>
      </div>

      {!inStock && (
        <p className="text-sm text-red-500">
          El producto aparecerá como fuera de stock.
        </p>
      )}

      {/* ERROR */}

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* BOTONES */}

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={() => {
            onClose();
            hideModal();
          }}
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
          {loading ? "Guardando..." : "Guardar cambios"}
        </button>
      </div>
    </form>
  );
};

export default ModalEditShop;
