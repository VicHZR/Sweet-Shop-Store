"use client";

import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Dulce } from '../page'; // Importamos la interfaz raíz

interface TablaProductosProps {
  dulcesFiltrados: Dulce[];
  abrirModal: (dulce?: Dulce) => void;
  eliminarDulce: (id: string) => void;
}

export const TablaProductos: React.FC<TablaProductosProps> = ({
  dulcesFiltrados,
  abrirModal,
  eliminarDulce
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50/70 text-xs font-semibold uppercase tracking-wider text-gray-500">
          <tr>
            <th className="px-6 py-3.5 text-left">Imagen</th>
            <th className="px-6 py-3.5 text-left">Nombre</th>
            <th className="px-6 py-3.5 text-left">Categoría</th>
            <th className="px-6 py-3.5 text-left">Precio</th>
            <th className="px-6 py-3.5 text-left">Stock</th>
            <th className="px-6 py-3.5 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
          {dulcesFiltrados.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-6 py-8 text-center text-gray-400 font-medium">
                No se encontraron productos registrados.
              </td>
            </tr>
          ) : (            dulcesFiltrados.map((dulce) => (
              <tr key={dulce.id} className="hover:bg-gray-50/80 transition-colors">
                <td className="px-6 py-3 whitespace-nowrap">
                  <div className="h-10 w-10 relative rounded-lg overflow-hidden border border-gray-100">
                    <Image 
                      src={dulce.imagen || '/placeholder.jpg'} 
                      alt={dulce.nombre} 
                      fill 
                      className="object-cover" 
                      unoptimized 
                    />
                  </div>
                </td>
                <td className="px-6 py-3 whitespace-nowrap font-bold text-gray-900">{dulce.nombre}</td>
                <td className="px-6 py-3 whitespace-nowrap text-gray-500">{dulce.categoria}</td>
                <td className="px-6 py-3 whitespace-nowrap font-semibold text-gray-900">S/. {dulce.precio.toFixed(2)}</td>
                <td className="px-6 py-3 whitespace-nowrap font-medium text-gray-600">{dulce.stock} unds</td>
                <td className="px-6 py-3 whitespace-nowrap text-right font-medium">
                  <button 
                    type="button"
                    onClick={() => abrirModal(dulce)} 
                    className="text-blue-600 hover:text-blue-800 mr-4 transition-colors"
                  >
                    <Edit size={16} />
                  </button>
                  <button 
                    type="button"
                    onClick={() => eliminarDulce(dulce.id)} 
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

