"use client";

import React from 'react';
import { X, Save, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { Dulce } from '../page';

interface ModalProductoProps {
  isOpen: boolean;
  dulceAEditar: Dulce | null;
  formData: Partial<Dulce>;
  subiendoImagen: boolean;
  cerrarModal: () => void;
  manejarCambio: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  manejarSubidaArchivoEdicion: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  guardarDulce: () => Promise<void>;
}

export const ModalProducto: React.FC<ModalProductoProps> = ({
  isOpen,
  dulceAEditar,
  formData,
  subiendoImagen,
  cerrarModal,
  manejarCambio,
  manejarSubidaArchivoEdicion,
  guardarDulce
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-gray-100">
        {/* Cabecera del Modal */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100 sticky top-0 bg-white z-10">
          <h2 className="text-xl font-black text-gray-800">
            {dulceAEditar ? 'Editar Dulce' : 'Nuevo Dulce'}
          </h2>
          <button 
            type="button"
            onClick={cerrarModal} 
            className="text-gray-400 hover:text-gray-600 p-1.5 hover:bg-gray-100 rounded-full transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Formulario Interno */}
        <div className="p-6 space-y-4">
          <div className="flex justify-center mb-2">
            <div className="h-28 w-28 relative rounded-xl overflow-hidden border-2 border-gray-200 bg-gray-50 shadow-inner">
              <Image 
                src={formData.imagen || '/placeholder.jpg'} 
                alt="Vista previa" 
                fill 
                className="object-cover" 
                unoptimized 
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Nombre</label>
            <input 
              type="text" 
              name="nombre" 
              value={formData.nombre || ''} 
              onChange={manejarCambio} 
              className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm transition" 
              placeholder="Nombre del dulce" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Descripción</label>
            <textarea 
              name="descripcion" 
              value={formData.descripcion || ''} 
              onChange={manejarCambio} 
              className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm transition" 
              rows={2} 
              placeholder="Detalle del producto" 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Precio (S/.)</label>
              <input 
                type="number" 
                name="precio" 
                value={formData.precio !== undefined ? formData.precio : ''} 
                onChange={manejarCambio} 
                min="0" 
                step="0.01" 
                className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm transition" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Stock</label>
              <input 
                type="number" 
                name="stock" 
                value={formData.stock !== undefined ? formData.stock : ''} 
                onChange={manejarCambio} 
                min="0" 
                className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm transition" 
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Categoría</label>
            <select 
              name="categoria" 
              value={formData.categoria || 'Tortas y Pasteles'} 
              onChange={manejarCambio} 
              className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm transition bg-white"
            >
              <option value="Tortas y Pasteles">Tortas y Pasteles</option>
              <option value="Chocolates y Trufas">Chocolates y Trufas</option>
              <option value="Galletas y Alfajores">Galletas y Alfajores</option>
              <option value="Postres Tradicionales">Postres Tradicionales</option>
              <option value="Pastelitos y Otros">Pastelitos y Otros</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">Subir Foto de Producto</label>
            <div className="relative">
              <input 
                type="file" 
                accept="image/*" 
                onChange={manejarSubidaArchivoEdicion} 
                disabled={subiendoImagen} 
                className="block w-full text-xs text-gray-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100 cursor-pointer disabled:opacity-50" 
              />
              {subiendoImagen && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Loader2 className="animate-spin h-4 w-4 text-amber-600" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 rounded-b-2xl">
          <button 
            type="button"
            onClick={cerrarModal} 
            className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition"
          >
            Cancelar
          </button>
          <button 
            type="button"
            onClick={guardarDulce} 
            disabled={subiendoImagen} 
            className="px-4 py-2 text-sm font-semibold bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition flex items-center gap-1.5 disabled:opacity-50"
          >
            {subiendoImagen ? <Loader2 className="animate-spin h-4 w-4" /> : <Save size={16} />}
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};
