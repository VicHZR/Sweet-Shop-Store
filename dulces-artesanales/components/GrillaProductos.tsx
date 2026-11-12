"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { TarjetaDulce } from '@/components/TarjetaDulce';

import { Dulce } from '@/app/productos/page'; 

interface GrillaProductosProps {
  dulces: Dulce[];
  categoriaSeleccionada: string;
}

export const GrillaProductos: React.FC<GrillaProductosProps> = ({
  dulces,
  categoriaSeleccionada
}) => {
  const [busqueda, setBusqueda] = useState("");

  const dulcesFiltrados = dulces.filter((dulce) => {
    const coincideTexto = dulce.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                          (dulce.descripcion && dulce.descripcion.toLowerCase().includes(busqueda.toLowerCase()));
    const coincideCategoria = categoriaSeleccionada === "Todos" || dulce.categoria === categoriaSeleccionada;
    
    return coincideTexto && coincideCategoria;
  });

  return (
    <div className="space-y-6">
      {/* BARRA DE BÚSQUEDA */}
      <div className="relative w-full md:max-w-sm">
        <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="¿Qué dulce se te antoja hoy?..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm transition-all shadow-xs"
        />
      </div>

      {/* CUADRÍCULA DE TARJETAS */}
      {dulcesFiltrados.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center max-w-sm mx-auto space-y-3 shadow-xs">
          <span className="text-4xl block">🍪</span>
          <h3 className="font-black text-gray-800 text-base">No encontramos dulces</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Prueba cambiando los términos de tu búsqueda o seleccionando otra categoría en el menú superior.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
          {dulcesFiltrados.map((dulce) => (
            <TarjetaDulce key={dulce.id} dulce={dulce} />
          ))}
        </div>
      )}
    </div>
  );
};
