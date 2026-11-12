"use client";

import React, { useState } from 'react';
import { Plus, Trash2, Calendar, Loader2, Edit3, X } from 'lucide-react';
import Image from 'next/image';
import { ModalConfirmacion } from '@/components/ModalConfirmacion';

export interface Oferta {
  id: string;
  imagen: string;
  descripcion: string;
  vigencia: string;
  metodosPago: string[];
}

interface GestionOfertasProps {
  ofertas: Oferta[];
  onCrearOferta: (nuevaOferta: Omit<Oferta, 'id'>) => Promise<void>;
  onActualizarOferta: (id: string, ofertaEditada: Omit<Oferta, 'id'>) => Promise<void>;
  onEliminarOferta: (id: string) => Promise<void>;
  mostrarNotificacion: (msg: string, tipo: 'exito' | 'error') => void;
}

export const GestionOfertas: React.FC<GestionOfertasProps> = ({
  ofertas,
  onCrearOferta,
  onActualizarOferta,
  onEliminarOferta,
  mostrarNotificacion
}) => {
  const [subiendoFoto, setSubiendoFoto] = useState(false);
  const [guardando, setGuardando] = useState(false);

  // Estados locales para los campos del formulario de mantenimiento
  const [descripcion, setDescripcion] = useState("");
  const [vigencia, setVigencia] = useState("");
  const [imagen, setImagen] = useState("/placeholder.jpg");
  const [metodosPago, setMetodosPago] = useState<string[]>([]);

  // Estados para controlar el Modo Edición Dinámico libre de useEffects
  const [ofertaAEditar, setOfertaAEditar] = useState<Oferta | null>(null);

  // Estados locales para controlar el Modal de Confirmación Estético de Ofertas
  const [isModalEliminarOpen, setIsModalEliminarOpen] = useState(false);
  const [idOfertaAEliminar, setIdOfertaAEliminar] = useState<string | null>(null);

  const listaMetodos = ["Yape", "Plin", "Efectivo", "Visa / Mastercard"];

  
  const activarEdicionOferta = (oferta: Oferta) => {
    setOfertaAEditar(oferta);
    setDescripcion(oferta.descripcion);
    setImagen(oferta.imagen);
    
    const fechaFormateada = oferta.vigencia ? oferta.vigencia.split('T')[0] : "";
    setVigencia(fechaFormateada);
    setMetodosPago(oferta.metodosPago || []);
  };

  const cancelarEdicion = () => {
    setOfertaAEditar(null);
    setDescripcion("");
    setVigencia("");
    setImagen("/placeholder.jpg");
    setMetodosPago([]);
  };

  const manejarCheckboxMetodo = (metodo: string) => {
    setMetodosPago((prev) =>
      prev.includes(metodo) ? prev.filter((m) => m !== metodo) : [...prev, metodo]
    );
  };

  const manejarSubidaBanner = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivo = e.target.files?.[0];
    if (!archivo) return;

    if (archivo.size > 2 * 1024 * 1024) {
      mostrarNotificacion('El banner promocional no debe superar los 2MB', 'error');
      return;
    }

    setSubiendoFoto(true);
    const formDataImagen = new FormData();
    formDataImagen.append('file', archivo);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formDataImagen,
      });

      if (!res.ok) throw new Error();
      const data = await res.json();
      
      if (data && data.url) {
        setImagen(data.url);
        mostrarNotificacion('Banner cargado correctamente', 'exito');
      }
    } catch {
      mostrarNotificacion('Error al subir la imagen del banner', 'error');
    } finally {
      setSubiendoFoto(false);
    }
  };

  const manejarEnviarFormulario = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!descripcion.trim() || !vigencia || imagen === "/placeholder.jpg") {
      mostrarNotificacion("Por favor, completa todos los campos y sube una foto.", "error");
      return;
    }

    setGuardando(true);
    try {
      if (ofertaAEditar) {
        await onActualizarOferta(ofertaAEditar.id, {
          descripcion,
          imagen,
          vigencia,
          metodosPago
        });
        setOfertaAEditar(null);
      } else {
        await onCrearOferta({
          descripcion,
          imagen,
          vigencia,
          metodosPago
        });
      }
      setDescripcion("");
      setVigencia("");
      setImagen("/placeholder.jpg");
      setMetodosPago([]);
    } finally {
      setGuardando(false);
    }
  };

  const dispararEliminarOferta = (id: string) => {
    setIdOfertaAEliminar(id);
    setIsModalEliminarOpen(true);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* FORMULARIO DE MANTENIMIENTO: CREACIÓN Y EDICIÓN */}
      <form onSubmit={manejarEnviarFormulario} className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-4 h-fit">
        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
          <h3 className="text-sm font-bold text-gray-800">
            {ofertaAEditar ? "📝 Editar Oferta" : "✨ Crear Nueva Oferta"}
          </h3>
          {ofertaAEditar && (
            <button
              type="button"
              onClick={cancelarEdicion}
              className="text-xs text-red-500 font-bold hover:underline flex items-center gap-0.5 cursor-pointer bg-transparent border-0 outline-none"
            >
              <X size={12} /> Cancelar Edición
            </button>
          )}
        </div>
        
        <div className="flex justify-center mb-2">
          <div className="h-24 w-full relative rounded-xl overflow-hidden border-2 border-gray-200 bg-gray-50 shadow-inner">
            <Image src={imagen} alt="Banner" fill className="object-cover" unoptimized />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Descripción de la Oferta</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            disabled={guardando}
            rows={2}
            className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
            placeholder="Ej. ¡2x1 en porciones de tortas seleccionadas!"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Fecha de Vigencia</label>
          <input
            type="date"
            value={vigencia}
            onChange={(e) => setVigencia(e.target.value)}
            disabled={guardando}
            className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Métodos de Pago Habilitados</label>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {listaMetodos.map((metodo) => (
              <label key={metodo} className="flex items-center gap-2 text-xs font-semibold text-gray-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={metodosPago.includes(metodo)}
                  onChange={() => manejarCheckboxMetodo(metodo)}
                  disabled={guardando}
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500 h-4 w-4"
                />
                {metodo}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Subir Imagen de Oferta</label>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={manejarSubidaBanner}
              disabled={subiendoFoto || guardando}
              className="block w-full text-xs text-gray-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100 cursor-pointer disabled:opacity-50"
            />
            {subiendoFoto && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Loader2 className="animate-spin h-4 w-4 text-amber-600" />
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={subiendoFoto || guardando}
          className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center justify-center gap-1.5 disabled:opacity-50 cursor-pointer border-0 outline-none"
        >
          {guardando ? (
            <Loader2 className="animate-spin h-4 w-4" />
          ) : (
            <Plus size={16} />
          )}
          {ofertaAEditar ? "Guardar Cambios" : "Publicar Oferta"}
        </button>
      </form>

      {/* LISTADO DE OFERTAS PUBLICADAS */}
      <div className="lg:col-span-2 space-y-4">
        <h3 className="text-sm font-bold text-gray-800 bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex items-center gap-2">
          <span>📢</span> Ofertas Publicadas en el Carrusel ({ofertas.length})
        </h3>

        {ofertas.length === 0 ? (
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-xs text-center text-gray-400 text-xs font-semibold">
            No se registran promociones activas en la base de datos.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ofertas.map((oferta) => (
              <div key={oferta.id} className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden flex flex-col group">
                
                {/* CABECERA DE ACCIONES UNIFICADAS: FIJA Y PROTEGIDA ANTE DESFASES */}
                <div className="p-4 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center gap-2">
                  <div className="relative h-12 w-20 rounded-lg overflow-hidden border border-gray-200 bg-white shrink-0">
                    <Image src={oferta.imagen || '/placeholder.jpg'} alt="Promo" fill className="object-cover" unoptimized />
                  </div>
                  
                  {/* BOTONERA INTERACTIVA SIEMPRE VISIBLE EN EL FLUJO HTML */}
                  <div className="flex gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => activarEdicionOferta(oferta)}
                      className="bg-amber-50 hover:bg-amber-600 text-amber-800 hover:text-white p-2 rounded-xl transition border border-amber-200 shadow-xs cursor-pointer flex items-center justify-center h-8 w-8 outline-none"
                      title="Editar Oferta"
                    >
                      <Edit3 size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (ofertaAEditar && ofertaAEditar.id === oferta.id) {
                          cancelarEdicion();
                        }
                        dispararEliminarOferta(oferta.id);
                      }}
                      className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white p-2 rounded-xl transition border border-red-200 shadow-xs cursor-pointer flex items-center justify-center h-8 w-8 outline-none"
                      title="Eliminar Oferta"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                {/* DETALLE COMERCIAL DEL BANNER */}
                <div className="p-4 flex flex-col flex-1 justify-between space-y-3 bg-white">
                  <div>
                    <p className="text-xs font-bold text-gray-800 line-clamp-3 leading-relaxed">{oferta.descripcion}</p>
                    <div className="flex items-center gap-1 text-[11px] text-gray-400 font-semibold mt-2">
                      <Calendar size={12} className="text-amber-700" />
                      <span>Expira: {oferta.vigencia ? new Date(oferta.vigencia).toLocaleDateString('es-PE') : "Sin fecha"}</span>
                    </div>
                  </div>
                  {oferta.metodosPago && oferta.metodosPago.length > 0 && (
                    <div className="pt-2 border-t border-gray-50 flex flex-wrap gap-1 items-center">
                      {oferta.metodosPago.map((mp) => (
                        <span key={mp} className="bg-amber-50 text-amber-800 text-[9px] font-black uppercase px-2 py-0.5 rounded-md border border-amber-100 shadow-2xs">
                          {mp}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL DE CONFIRMACIÓN DE ELIMINACIÓN DE OFERTAS CORPORATIVO */}
      <ModalConfirmacion
        isOpen={isModalEliminarOpen}
        titulo="¿Eliminar esta oferta comercial?"
        mensaje="Esta acción removerá el banner promocional de inmediato del carrusel de la tienda pública y no se podrá deshacer."
        textoConfirmar="Eliminar Banner"
        textoCancelar="Cancelar"
        onConfirmar={async () => {
          if (idOfertaAEliminar) {
            await onEliminarOferta(idOfertaAEliminar);
          }
          setIsModalEliminarOpen(false);
          setIdOfertaAEliminar(null);
        }}
        onCancelar={() => {
          setIsModalEliminarOpen(false);
          setIdOfertaAEliminar(null);
        }}
      />
    </div>
  );
};
