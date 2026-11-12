"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface Notificacion {
  mostrar: boolean;
  mensaje: string;
  tipo: 'exito' | 'error';
}

export default function NuevoDulce() {
  const router = useRouter();
  const [guardando, setGuardando] = useState(false);
  const [subiendoImagen, setSubiendoImagen] = useState(false);
  const [notificacion, setNotificacion] = useState<Notificacion>({
    mostrar: false,
    mensaje: '',
    tipo: 'exito'
  });

  // Estados del Formulario
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('chocolates');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');
  const [artesanal, setArtesanal] = useState(true);
  const [ingredientes, setIngredientes] = useState('');

  const mostrarNotificacion = (mensaje: string, tipo: 'exito' | 'error' = 'exito') => {
    setNotificacion({ mostrar: true, mensaje, tipo });
    setTimeout(() => {
      setNotificacion(prev => ({ ...prev, mostrar: false }));
    }, 3000);
  };

  // Función para interceptar el archivo y subirlo al servidor de inmediato
  const manejarSubidaArchivo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivos = e.target.files;
    if (!archivos || archivos.length === 0) return;

    try {
      setSubiendoImagen(true);
      const data = new FormData();
      data.append('file', archivos[0]);

      const respuesta = await fetch('/api/upload', {
        method: 'POST',
        body: data
      });

      if (respuesta.ok) {
        const resultado = await respuesta.json();
        setImagen(resultado.url); // Seteamos la URL devuelta por el servidor
        mostrarNotificacion('Imagen subida y optimizada', 'exito');
      } else {
        mostrarNotificacion('No se pudo procesar el archivo de imagen', 'error');
      }
    } catch (error) {
      console.error(error);
      mostrarNotificacion('Error de red al cargar el archivo', 'error');
    } finally {
      setSubiendoImagen(false);
    }
  };

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !precio) {
      mostrarNotificacion('El nombre y el precio son obligatorios', 'error');
      return;
    }

    try {
      setGuardando(true);
      const respuesta = await fetch('/api/dulces', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          precio,
          categoria,
          descripcion,
          imagen: imagen || '/logo.png', // Fallback si no sube foto
          artesanal,
          ingredientes
        }),
      });

      if (respuesta.ok) {
        mostrarNotificacion('¡Dulce registrado con éxito!', 'exito');
        setTimeout(() => {
          router.push('/admin');
          router.refresh();
        }, 1500);
      } else {
        const err = await respuesta.json();
        mostrarNotificacion(err.error || 'Error al guardar el dulce', 'error');
      }
    } catch (error) {
      console.error(error);
      mostrarNotificacion('Fallo de conexión con el servidor', 'error');
    } finally {
      setGuardando(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-marron-logo p-6 sm:p-12 relative">
      <div className="max-w-xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8">
        
        <div className="mb-6">
          <h1 className="text-2xl font-black tracking-tight">Registrar Delicia</h1>
          <p className="text-sm text-marron-logo/60">Añade un nuevo dulce artesanal al catálogo</p>
        </div>

        <form onSubmit={manejarEnvio} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Nombre del Dulce</label>
            <input 
              type="text" 
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-marron-logo"
              placeholder="Ej. Trufa de Chocolate"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Precio (S/.)</label>
              <input 
                type="number" 
                step="0.01"
                value={precio}
                onChange={e => setPrecio(e.target.value)}
                className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-marron-logo"
                placeholder="0.00"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Categoría</label>
              <select 
                value={categoria}
                onChange={e => setCategoria(e.target.value)}
                className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-marron-logo cursor-pointer"
              >
                <option value="chocolates">Chocolates</option>
                <option value="galletas">Galletas</option>
                <option value="tortas">Tortas</option>
                <option value="caramelos">Caramelos</option>
              </select>
            </div>
          </div>

          {/* 📷 CONTROL DE SUBIDA DE IMAGEN CON MINIATURA */}
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Imagen del Producto</label>
            <div className="flex items-center gap-4 p-4 border border-gray-100 bg-gray-50 rounded-2xl">
              <div className="relative w-20 h-20 bg-white rounded-xl border border-gray-200 overflow-hidden shrink-0 flex items-center justify-center">
                {imagen ? (
                  <Image src={imagen} alt="Vista previa" fill className="object-cover" />
                ) : (
                  <span className="text-xl">📸</span>
                )}
              </div>
              <div className="flex-1">
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={manejarSubidaArchivo}
                  className="block w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-amber-100 file:text-amber-800 hover:file:bg-amber-200 file:cursor-pointer"
                />
                <p className="text-[10px] text-gray-400 mt-1">Soporta JPG, PNG o JPEG. Subida local directa.</p>
                {subiendoImagen && <p className="text-[10px] font-bold text-amber-700 animate-pulse mt-0.5">Guardando archivo en el servidor...</p>}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Ingredientes (Separados por comas)</label>
            <input 
              type="text" 
              value={ingredientes}
              onChange={e => setIngredientes(e.target.value)}
              className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:border-marron-logo"
              placeholder="Cacao, leche, azúcar, galleta"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Descripción</label>
            <textarea 
              value={descripcion}
              onChange={e => setDescripcion(e.target.value)}
              className="w-full text-sm bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 h-24 outline-none focus:border-marron-logo resize-none"
              placeholder="Escribe detalles del producto..."
            />
          </div>

          <div className="flex items-center gap-2 py-1">
            <input 
              type="checkbox" 
              id="artesanal"
              checked={artesanal}
              onChange={e => setArtesanal(e.target.checked)}
              className="rounded border-gray-300 text-marron-logo cursor-pointer"
            />
            <label htmlFor="artesanal" className="text-xs font-bold uppercase text-gray-600 select-none cursor-pointer">Hecho a mano / Producto Artesanal</label>
          </div>

          <div className="flex gap-3 pt-3 border-t border-gray-100">
            <Link 
              href="/admin"
              className="w-1/2 inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold py-3 rounded-xl transition-colors cursor-pointer"
            >
              Volver al Panel
            </Link>
            <button 
              type="submit" 
              disabled={guardando || subiendoImagen}
              className="w-1/2 bg-marron-logo text-white text-sm font-bold py-3 rounded-xl hover:bg-marron-logo/90 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {guardando ? 'Registrando...' : 'Guardar Dulce'}
            </button>
          </div>
        </form>
      </div>

      {notificacion.mostrar && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-lg border border-gray-100/50 transition-all duration-300 ${
          notificacion.tipo === 'exito' 
            ? 'bg-amber-50 text-amber-900 border-l-4 border-l-amber-600' 
            : 'bg-red-50 text-red-900 border-l-4 border-l-red-600'
        }`}>
          <span className="text-base">{notificacion.tipo === 'exito' ? '✨' : '⚠️'}</span>
          <p className="text-xs font-bold tracking-tight">{notificacion.mensaje}</p>
        </div>
      )}
    </main>
  );
}
