"use client";

import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface BarraFiltrosProps {
  categoriaSeleccionada: string;
  setCategoriaSeleccionada: (categoria: string) => void;
}

export const BarraFiltros: React.FC<BarraFiltrosProps> = ({
  categoriaSeleccionada,
  setCategoriaSeleccionada
}) => {
  // Lista unificada de las categorías comerciales configuradas en el backend
  const categoriasPeruanas = [
    "Todos", 
    "Tortas y Pasteles", 
    "Chocolates y Trufas", 
    "Galletas y Alfajores", 
    "Postres Tradicionales", 
    "Pastelitos y Otros"
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
      {/* Icono decorativo oculto en móviles */}
      <div className="text-gray-400 p-2 shrink-0 md:flex hidden">
        <SlidersHorizontal size={16} />
      </div>

      {categoriasPeruanas.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => setCategoriaSeleccionada(cat)}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 border duration-200 cursor-pointer ${
            categoriaSeleccionada === cat
              ? 'bg-amber-800 border-amber-800 text-white shadow-xs scale-105'
              : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-amber-900'
          }`}
        >
          {cat === "Todos" ? "✨ VER TODO" : cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
