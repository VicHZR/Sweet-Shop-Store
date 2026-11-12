"use client";

import React from 'react';
import { X, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Dulce } from '@/app/productos/page';

interface ModalDetalleProps {
  dulce: Dulce | null;
  onClose: () => void;
}

export const ModalDetalle: React.FC<ModalDetalleProps> = ({ dulce, onClose }) => {
  if (!dulce) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-lg border border-marron-logo/10 animate-scale-up">
        {/* Contenedor de Foto del Dulce */}
        <div className="relative h-64 w-full bg-gray-50">
          <Image src={dulce.imagen || '/placeholder.jpg'} alt={dulce.nombre} fill className="object-cover" unoptimized />
          <button 
            type="button" 
            onClick={onClose} 
            className="absolute top-4 right-4 bg-white/80 hover:bg-white text-marron-logo p-2 rounded-full shadow-md transition-all active:scale-95"
          >
            <X size={18} />
          </button>
        </div>

        {/* Detalles e Ingredientes */}
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-start gap-4">
            <div>
              <span className="bg-celeste-logo text-amber-900 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-100">
                {dulce.categoria}
              </span>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight mt-1.5">{dulce.nombre}</h2>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-gray-400 block uppercase tracking-wider">Precio de Venta</span>
              <span className="text-2xl font-black text-amber-900 tracking-tight">S/. {dulce.precio.toFixed(2)}</span>
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed">{dulce.descripcion || 'Este dulce artesanal está preparado bajo recetas exclusivas de la casa.'}</p>

          {dulce.artesanal && (
            <div className="inline-flex items-center gap-1.5 bg-celeste-logo text-marron-logo text-xs font-bold px-3 py-1.5 rounded-xl">
              <Sparkles size={14} /> ElAborado Artesanalmente
            </div>
          )}

          {dulce.ingredientes && dulce.ingredientes.length > 0 && (
            <div className="space-y-1.5 pt-2 border-t border-gray-100">
              <span className="text-xs font-black text-marron-logo uppercase tracking-wider inline-flex items-center gap-1">
                <Heart size={12} className="text-red-500 fill-red-500" /> Componentes e Ingredientes:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {dulce.ingredientes.map((ing, i) => (
                  <span key={i} className="bg-gray-50 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-lg border border-gray-100">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Botón de Cierre */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button 
            type="button" 
            onClick={onClose} 
            className="bg-marron-logo hover:bg-marron-logo/90 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-xs"
          >
            Regresar a la Vitrina
          </button>
        </div>
      </div>
    </div>
  );
};
