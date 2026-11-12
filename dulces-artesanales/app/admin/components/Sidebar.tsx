"use client";

import React from 'react';
import { ShoppingBag, ClipboardList, CalendarDays, Percent, Clock, CalendarRange } from 'lucide-react';
import Image from 'next/image';

interface SidebarProps {
  pestanaActiva: 'productos' | 'pedidos' | 'diarias' | 'semanales' | 'mensuales' | 'ofertas';
  setPestanaActiva: (pestana: 'productos' | 'pedidos' | 'diarias' | 'semanales' | 'mensuales' | 'ofertas') => void;
  setBusqueda: (busqueda: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  pestanaActiva,
  setPestanaActiva,
  setBusqueda
}) => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-30">
      {/* Encabezado del Menú Lateral */}
      <div className="p-6 border-b border-gray-100 flex items-center gap-2">
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-amber-100">
          <Image 
            src="/logo.png" 
            alt="Logo Dulce Diferencia" 
            fill 
            className="object-cover" 
            unoptimized 
          />
        </div>
        <span className="font-black text-amber-800 tracking-tight">Dulce Diferencia</span>
      </div>

      {/* Opciones de Navegación del Panel */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <button
          type="button"
          onClick={() => { setPestanaActiva('productos'); setBusqueda(''); }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
            pestanaActiva === 'productos' ? 'bg-amber-50 text-amber-800' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <ShoppingBag size={18} />
          Productos
        </button>
        
        <button
          type="button"
          onClick={() => { setPestanaActiva('pedidos'); setBusqueda(''); }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
            pestanaActiva === 'pedidos' ? 'bg-amber-50 text-amber-800' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <ClipboardList size={18} />
          Pedidos Realizados
        </button>

        {/* 🌟  SECCIÓN: Ventas Diarias */}
        <button
          type="button"
          onClick={() => { setPestanaActiva('diarias'); setBusqueda(''); }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
            pestanaActiva === 'diarias' ? 'bg-amber-50 text-amber-800' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Clock size={18} />
          Ventas Diarias
        </button>

        {/* 🌟  SECCIÓN: Ventas Semanales */}
        <button
          type="button"
          onClick={() => { setPestanaActiva('semanales'); setBusqueda(''); }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
            pestanaActiva === 'semanales' ? 'bg-amber-50 text-amber-800' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <CalendarRange size={18} />
          Ventas Semanales
        </button>

        <button
          type="button"
          onClick={() => { setPestanaActiva('mensuales'); setBusqueda(''); }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
            pestanaActiva === 'mensuales' ? 'bg-amber-50 text-amber-800' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <CalendarDays size={18} />
          Ventas mensuales
        </button>

        <button
          type="button"
          onClick={() => { setPestanaActiva('ofertas'); setBusqueda(''); }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
            pestanaActiva === 'ofertas' ? 'bg-amber-50 text-amber-800' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Percent size={18} />
          Gestionar Ofertas
        </button>
      </nav>
    </aside>
  );
};
