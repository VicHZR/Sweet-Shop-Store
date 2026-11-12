"use client";

import React from 'react';
import Link from 'next/link';
import { MessageCircle, Heart } from 'lucide-react';

export const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 mt-16 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-100">
          
          {/* Bloque 1: Identidad de Marca */}
          <div className="space-y-3">
            <span className="text-base font-black text-amber-800 tracking-tight block">
              Dulce Diferencia
            </span>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Preparamos momentos especiales con recetas artesanales únicas en Lima, Perú. Pasión y calidad en cada bocado.
            </p>
          </div>

          {/* Bloque 2: Navegación Rápida */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Menú de Navegación
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-gray-600">
              <li>
                <Link href="/" className="hover:text-amber-800 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-amber-800 transition-colors">
                  Nuestros Productos
                </Link>
              </li>
              <li>
                <Link href="https://wa.me" target="_blank" rel="noopener noreferrer" className="hover:text-amber-800 transition-colors">
                  Contacto directo
                </Link>
              </li>
            </ul>
          </div>

          {/* Bloque 3: Redes Sociales Oficiales */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Síguenos en Redes
            </h4>
            <div className="flex gap-2">
              {/* Instagram */}
              <Link 
                href="https://www.instagram.com/dulce.diferencia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-50 hover:bg-amber-50 text-gray-600 hover:text-amber-800 border border-gray-100 rounded-xl transition-all shadow-xs flex items-center justify-center h-9 w-9"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>

              {/* Facebook */}
              <Link 
                href="https://www.facebook.com/profile.php?id=61574899982155" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-50 hover:bg-amber-50 text-gray-600 hover:text-amber-800 border border-gray-100 rounded-xl transition-all shadow-xs flex items-center justify-center h-9 w-9"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>

              {/* TikTok */}
              <Link 
                href="https://www.tiktok.com/@dulce.diferencia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-50 hover:bg-amber-50 text-gray-600 hover:text-amber-800 border border-gray-100 rounded-xl transition-all shadow-xs flex items-center justify-center font-black text-sm h-9 w-9"
              >
                𝅘𝅥𝅮
              </Link>

              {/* WhatsApp */}
              <Link 
                href="https://wa.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-50 hover:bg-emerald-50 text-gray-600 hover:text-emerald-700 border border-gray-100 rounded-xl transition-all shadow-xs flex items-center justify-center h-9 w-9"
              >
                <MessageCircle size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Créditos Finales */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-medium text-gray-400">
          <p>© {anioActual} Dulce Diferencia. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart size={10} className="text-red-500 fill-red-500" /> en Lima, Perú
          </p>
        </div>
      </div>
    </footer>
  );
};
