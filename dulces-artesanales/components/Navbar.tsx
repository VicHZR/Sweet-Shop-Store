"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 
import { useCarritoStore } from '@/store/useCarritoStore';
import { CarritoModal } from './CarritoModal';
import { ShoppingCart, Menu, X } from 'lucide-react';
import Image from 'next/image';

export const Navbar = () => {
  const { obtenerConteoItems } = useCarritoStore();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40 px-6 py-4 shadow-xs">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* LOGO CORPORATIVO CON RETORNO AL HOME */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-amber-100 shadow-sm">
            <Image 
              src="/logo.png" 
              alt="Dulce Diferencia Logo" 
              fill 
              sizes="32px" 
              className="object-cover"
              unoptimized
            />
          </div>
          <span className="text-lg font-black text-amber-800 tracking-tight group-hover:text-amber-900 transition-colors">
            Dulce Diferencia
          </span>
        </Link>

        {/* ENLACES ACTIVOS Y CONTROLADORES EN ESCRITORIO */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <Link href="/" className="hover:text-amber-800 transition-colors cursor-pointer">
              Inicio
            </Link>
            <Link href="/productos" className="hover:text-amber-800 transition-colors cursor-pointer">
              Productos
            </Link>
            <Link 
              href="https://wa.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-amber-800 transition-colors cursor-pointer"
            >
              Contacto
            </Link>
          </nav>
          
          {/* Disparador de Menú en Celulares */}
          <button 
            type="button"
            onClick={() => setMenuAbierto(!menuAbierto)} 
            className="md:hidden text-gray-700 hover:text-amber-700 transition-colors cursor-pointer"
          >
            {menuAbierto ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Icono del Carrito de Compras Lateral */}
          <div className="relative flex">
            <button 
              type="button"
              onClick={() => setCarritoAbierto(true)}
              className="p-2 hover:bg-amber-50 rounded-full transition-colors text-gray-700 hover:text-amber-800 cursor-pointer"
            >
              <ShoppingCart size={20} />
              {obtenerConteoItems() > 0 && (
                <span className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white animate-bounce">
                  {obtenerConteoItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ ADAPTABLE PARA DISPOSITIVOS MÓVILES */}
      {menuAbierto && (
        <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 flex flex-col gap-3.5 text-sm font-bold text-gray-700 uppercase tracking-wider animate-in slide-in-from-top duration-200">
          <Link href="/" onClick={() => setMenuAbierto(false)} className="hover:text-amber-800 cursor-pointer">
            Inicio
          </Link>
          <Link href="/productos" onClick={() => setMenuAbierto(false)} className="hover:text-amber-800 cursor-pointer">
            Productos
          </Link>
          <Link 
            href="https://wa.me" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => setMenuAbierto(false)} 
            className="hover:text-amber-800 cursor-pointer"
          >
            Contacto
          </Link>
        </nav>
      )}

      {/* MODAL INYECTADO DEL CARRITO */}
      <CarritoModal 
        isOpen={carritoAbierto} 
        onClose={() => setCarritoAbierto(false)} 
      />
    </header>
  );
};
