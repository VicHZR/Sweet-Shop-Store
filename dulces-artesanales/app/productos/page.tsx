"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Loader2 } from 'lucide-react';

// CORRECCIÓN 2307: Enlazamos con el alias global '@/' para que Next.js los lea sin importar la carpeta física
import { BarraFiltros } from '@/components/BarraFiltros';
import { GrillaProductos } from '@/components/GrillaProductos';

export interface Dulce {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
  categoria: string;
  artesanal: boolean;
  ingredientes: string[];
}

export default function ProductosPage() {
  const [dulces, setDulces] = useState<Dulce[]>([]);
  const [cargando, setCargando] = useState(true);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>("Todos");

  const cargarCatalogoPublico = useCallback(async () => {
    try {
      const res = await fetch('/api/dulces');
      const datos = res.ok ? await res.json() : [];
      return datos;
    } catch (error) {
      console.error("❌ Error al cargar la vitrina pública de dulces:", error);
      return null;
    }
  }, []);

  useEffect(() => {
    let activo = true;

    const inicializarFlujo = async () => {
      const resultado = await cargarCatalogoPublico();
      if (activo) {
        window.setTimeout(() => {
          if (resultado) {
            setDulces(resultado);
          }
          setCargando(false);
        }, 0);
      }
    };

    inicializarFlujo();

    return () => {
      activo = false;
    };
  }, [cargarCatalogoPublico]);

  if (cargando) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Loader2 className="animate-spin h-8 w-8 text-amber-600" />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50/50 pb-16 animate-in fade-in duration-300">
      {/* SECCIÓN DE BIENVENIDA */}
      <div className="bg-white border-b border-gray-100 py-10 px-6 mb-8 shadow-xs">
        <div className="max-w-6xl mx-auto text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-black text-amber-900 tracking-tight">
            Nuestra Vitrina de Dulces Artesanales
          </h1>
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Explora y saborea las mejores creaciones preparadas con ingredientes de alta calidad.
          </p>
        </div>
      </div>

      {/* CONTENEDOR DEL CATÁLOGO */}
      <div className="max-w-6xl mx-auto px-6 space-y-6">
        
        {/* FILTROS DE CATEGORÍAS */}
        <div className="flex justify-end border-b border-gray-100 pb-2">
          <BarraFiltros 
            categoriaSeleccionada={categoriaSeleccionada}
            setCategoriaSeleccionada={setCategoriaSeleccionada}
          />
        </div>

        {/* GRILLA Y BUSCADOR COMPONENTIZADO */}
        <GrillaProductos 
          dulces={dulces}
          categoriaSeleccionada={categoriaSeleccionada}
        />
        
      </div>
    </div>
  );
}
