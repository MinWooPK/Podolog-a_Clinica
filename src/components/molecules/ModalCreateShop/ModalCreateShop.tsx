import { useState } from "react";
import { createShop } from "@services/shop.service";
import { uploadImage } from "@services/cloudinary.service";
import { useModal } from "@context/ModalContext";

interface ModalCreateShopProps {
  onCreated: () => void;
  onClose: () => void;
}

const ModalCreateShop = ({ onCreated, onClose }: ModalCreateShopProps) => {
  const { hideModal } = useModal();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(true);

  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);

    const preview = URL.createObjectURL(file);
    setImagePreview(preview);
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

      let imageUrl: string | undefined;

      if (image) {
        console.log("Subiendo imagen a Cloudinary...");

        imageUrl = await uploadImage(image);

        console.log("IMAGE URL:", imageUrl);
      }

      await createShop({
        title: title.trim(),
        subtitle: subtitle.trim() || undefined,
        description: description.trim(),
        price: Number(price),
        imageUrl,
        inStock,
      });

      console.log("Producto creado correctamente");

      await onCreated();

      onClose();
      hideModal();
    } catch (error) {
      console.error("Error al crear producto:", error);

      setError("No se pudo crear el producto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-semibold">Crear producto</h2>

      {/* IMAGEN */}

      <div>
        <label className="block mb-2 font-medium">Imagen</label>

        <div className="flex flex-col items-center gap-3">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Vista previa"
              className="w-40 h-40 rounded-lg object-cover border"
            />
          ) : (
            <div className="w-40 h-40 rounded-lg bg-gray-100 border flex items-center justify-center">
              <span className="text-gray-400">Sin imagen</span>
            </div>
          )}

          <label className="cursor-pointer text-blue-600 hover:text-blue-700">
            Seleccionar imagen
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
          placeholder="Ej: Plantillas personalizadas"
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
          placeholder="Descripción corta"
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* DESCRIPCION */}

      <div>
        <label className="block mb-1 font-medium">Descripción</label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción completa del producto..."
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
          placeholder="0.00"
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      {/* STOCK */}

      <div className="flex items-center gap-3">
        <input
          id="inStock"
          type="checkbox"
          checked={inStock}
          onChange={(e) => setInStock(e.target.checked)}
          className="w-4 h-4"
        />

        <label htmlFor="inStock" className="font-medium">
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
          className="flex-1 border rounded-lg py-2 hover:bg-gray-50"
          disabled={loading}
        >
          Cancelar
        </button>

        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Creando..." : "Crear producto"}
        </button>
      </div>
    </form>
  );
};

export default ModalCreateShop;
