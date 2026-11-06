export const uploadImage = async (file: File): Promise<string> => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    },
  );

  console.log("STATUS:", response.status);
  console.log("HEADERS:");

  response.headers.forEach((value, key) => {
    console.log(key, ":", value);
  });

  const data = await response.json();

  console.log("========== RESPUESTA CLOUDINARY ==========");
  console.log(JSON.stringify(data, null, 2));

  if (!response.ok) {
    console.log("========== ERROR CLOUDINARY ==========");
    console.log("Mensaje:", data?.error?.message);
    console.log("Error completo:", data?.error);

    throw new Error(data?.error?.message || "Error Cloudinary");
  }

  return data.secure_url;
};
