"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Upload, X, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function SubirImagenPage() {
  const router = useRouter();
  const [archivoSeleccionado, setArchivoSeleccionado] = useState<File | null>(null);
  const [imagenBase64, setImagenBase64] = useState<string | null>(null);
  const [nombreImagen, setNombreImagen] = useState<string>("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const manejarCambioImagen = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; 

    if (files && files.length > 0) {
      
      const archivo = files[0];

      if (!archivo.type.startsWith("image/")) {
        setError("Por favor selecciona solo archivos de imagen (JPG, PNG).");
        return;
      }

      setError(null);
      setArchivoSeleccionado(archivo); 
      setNombreImagen(archivo.name);   

      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setImagenBase64(reader.result as string);
        }
      };
      reader.readAsDataURL(archivo); // Leer el archivo individual
    } else {
      setArchivoSeleccionado(null);
      setImagenBase64(null);
      setNombreImagen("");
      setError(null);
    }
  };

  const manejarSubida = async (e: FormEvent) => {
    e.preventDefault();
    if (!archivoSeleccionado) {
      setError("Debes seleccionar una imagen.");
      return;
    }

    setCargando(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", archivoSeleccionado); 

      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      alert("Imagen subida correctamente.");
      router.push("/admin");
    } catch (err) {
      console.error(err);
      setError("Error al subir la imagen. Inténtalo de nuevo.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-super-claro py-12 px-4 font-sans">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => router.back()} 
            className="p-2 rounded-full hover:bg-marron-logo/10 text-marron-logo transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-3xl font-bold text-marron-logo">Subir Nueva Imagen</h1>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <form onSubmit={manejarSubida} className="space-y-6">
            <div className="relative group">
              <input
                type="file"
                id="imagen"
                accept="image/*"
                onChange={manejarCambioImagen}
                className="hidden"
              />
              <label
                htmlFor="imagen"
                className={`flex flex-col items-center justify-center w-full h-64 rounded-3xl border-2 border-dashed transition-all cursor-pointer overflow-hidden relative
                  ${imagenBase64 ? "border-marron-logo bg-marron-logo/5" : "border-gray-300 hover:border-marron-logo hover:bg-gray-50"}`}
              >
                {imagenBase64 ? (
                  <div className="relative w-full h-full">
                    <Image 
                      src={imagenBase64} 
                      alt="Vista previa" 
                      fill 
                      className="object-cover"
                      unoptimized
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setArchivoSeleccionado(null);
                        setImagenBase64(null);
                        setNombreImagen("");
                        const input = document.getElementById("imagen") as HTMLInputElement;
                        if (input) input.value = "";
                      }}
                      className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-red-50 text-red-500 transition-colors"
                    >
                      <X size={20} />
                    </button>
                    <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                      {nombreImagen}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                    <div className="p-4 bg-cream-claro rounded-full mb-4 group-hover:bg-marron-logo/10 transition-colors">
                      <Upload className="text-marron-logo w-8 h-8" />
                    </div>
                    <p className="mb-2 text-sm text-gray-600 font-medium">
                      <span className="font-bold text-marron-logo">Haz clic para subir</span> o arrastra
                    </p>
                    <p className="text-xs text-gray-400">PNG, JPG hasta 5MB</p>
                  </div>
                )}
              </label>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl animate-fade-in">
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </div>
            )}

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-3 rounded-2xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-colors"
                disabled={cargando}
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={!archivoSeleccionado || cargando}
                className={`px-8 py-3 rounded-2xl font-bold text-white transition-all flex items-center gap-2 shadow-sm
                  ${!archivoSeleccionado || cargando 
                    ? "bg-gray-300 cursor-not-allowed" 
                    : "bg-marron-logo hover:bg-marron-logo/90 shadow-lg hover:shadow-xl"}`}
              >
                {cargando ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                    Subiendo...
                  </>
                ) : (
                  "Guardar Imagen"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}