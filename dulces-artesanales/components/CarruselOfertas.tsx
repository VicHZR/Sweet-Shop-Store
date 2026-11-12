"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Calendar, CreditCard } from 'lucide-react';

export interface BannerOferta {
  id: string;
  imagen: string;
  descripcion: string;
  vigencia: string | Date;
  metodosPago: string[];
}

interface CarruselOfertasProps {
  ofertas?: BannerOferta[];
}

export const CarruselOfertas: React.FC<CarruselOfertasProps> = ({ ofertas = [] }) => {
  const [indiceActivo, setIndiceActivo] = useState(0);

  
  useEffect(() => {
    if (!ofertas || ofertas.length <= 1) return;
    const intervaloAuto = setInterval(() => {
      setIndiceActivo((prev) => (prev + 1) % ofertas.length);
    }, 7000);
    return () => clearInterval(intervaloAuto);
  }, [ofertas]);

  
  if (!ofertas || ofertas.length === 0) {
    return null;
  }

  const ofertaActual = ofertas[indiceActivo];

  const irAAntetior = () => {
    setIndiceActivo((prev) => (prev === 0 ? ofertas.length - 1 : prev - 1));
  };

  const irASiguiente = () => {
    setIndiceActivo((prev) => (prev + 1) % ofertas.length);
  };

  const formatearFecha = (fechaInput: string | Date) => {
    try {
      const objetoFecha = new Date(fechaInput);
      return objetoFecha.toLocaleDateString('es-PE', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch {
      return String(fechaInput);
    }
  };
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 mb-10 group">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden min-h-85 flex flex-col md:flex-row transition-all duration-500 ease-in-out">
        
        {/* 📸 SECCIÓN IZQUIERDA: Imagen expandida para máxima legibilidad */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-gray-50 overflow-hidden border-b md:border-b-0 md:border-r border-gray-100">
          <Image
            src={ofertaActual.imagen || '/placeholder.jpg'}
            alt="Promoción Dulce Diferencia"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
            unoptimized
          />
          <div className="absolute top-4 left-4 bg-amber-600 text-white font-extrabold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm z-10">
            Oferta Especial Vigente
          </div>
        </div>
        {/* 📝 SECCIÓN DERECHA: Datos de la Promoción */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-[10px] font-black text-amber-800 uppercase tracking-widest block bg-amber-50 px-3 py-1 rounded-md w-fit">
              Campaña Comercial Dulce Diferencia
            </span>
            <p className="text-gray-700 font-bold text-sm md:text-base leading-relaxed whitespace-pre-line">
              {ofertaActual.descripcion}
            </p>
          </div>

          <div className="space-y-4 border-t border-gray-50 pt-4">
            {/* Fecha Límite de Vigencia */}
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
              <Calendar size={15} className="text-amber-600" />
              <span>Válido hasta el: <strong className="text-gray-800">{formatearFecha(ofertaActual.vigencia)}</strong></span>
            </div>

            {/* Pasarelas de Pago */}
            <div className="flex flex-col space-y-1.5">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                <CreditCard size={12} /> Métodos de Pago Permitidos:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {ofertaActual.metodosPago && ofertaActual.metodosPago.map((metodo, idx) => (
                  <span 
                    key={idx} 
                    className="text-[10px] font-black bg-gray-100 border border-gray-200 text-gray-700 px-2.5 py-1 rounded-lg uppercase tracking-wide"
                  >
                    {metodo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flechas y Paginadores del Control Deslizante */}
      {ofertas.length > 1 && (
        <>
          <button
            type="button"
            onClick={irAAntetior}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full border border-gray-200 shadow-md transition opacity-0 group-hover:opacity-100 z-20 cursor-pointer hidden md:flex items-center justify-center hover:scale-105"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={irASiguiente}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full border border-gray-200 shadow-md transition opacity-0 group-hover:opacity-100 z-20 cursor-pointer hidden md:flex items-center justify-center hover:scale-105"
          >
            <ChevronRight size={18} />
          </button>

          {/* Indicadores Puntuales de Progreso */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
            {ofertas.map((elementoIndicador, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setIndiceActivo(idx)}
                className={`h-1.5 transition-all rounded-full ${
                  idx === indiceActivo ? 'bg-amber-600 w-5' : 'bg-gray-300 w-1.5'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
