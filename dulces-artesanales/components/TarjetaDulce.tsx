"use client";

import React from 'react';
import Image from 'next/image';
import { useCarritoStore, DulceBase } from '@/store/useCarritoStore';
import { Plus } from 'lucide-react';
import { Dulce } from '@/app/productos/page';

interface TarjetaDulceProps {
  dulce: Dulce;
  onEliminar?: (id: string) => void;
}

export const TarjetaDulce: React.FC<TarjetaDulceProps> = ({ dulce }) => {
  const { agregarProducto } = useCarritoStore();

  const manejarAgregar = () => {
    const productoBase: DulceBase = {
      id: dulce.id,
      nombre: dulce.nombre,
      precio: dulce.precio,
      imagen: dulce.imagen || '/placeholder.jpg'
    };
    agregarProducto(productoBase);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col group">
      <div className="relative h-48 w-full bg-gray-50 overflow-hidden shrink-0">
        <Image
          src={dulce.imagen || '/placeholder.jpg'}
          alt={dulce.nombre}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <span className="absolute top-3 right-3 bg-amber-50/90 backdrop-blur-xs text-amber-900 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-100">
          {dulce.categoria}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1 space-y-2">
        <div className="flex-1">
          <h3 className="font-black text-gray-900 text-base tracking-tight truncate">
            {dulce.nombre}
          </h3>
          <p className="text-xs text-gray-400 line-clamp-2 mt-1 leading-relaxed">
            {dulce.descripcion || 'Sin descripción disponible.'}
          </p>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Precio</span>
            <span className="text-lg font-black text-gray-900 tracking-tight">
              S/. {dulce.precio.toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            onClick={manejarAgregar}
            className="bg-amber-600 hover:bg-amber-700 text-white p-2.5 rounded-xl flex items-center justify-center gap-1 text-xs font-bold shadow-xs active:scale-95 transition-all"
          >
            <Plus size={16} />
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
