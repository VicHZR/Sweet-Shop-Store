"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { CarruselOfertas } from '@/components/CarruselOfertas';
import { BarraFiltros } from '@/components/BarraFiltros';
import { GrillaProductos } from '@/components/GrillaProductos';
import { Footer } from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton';

export interface DulcePublico {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria: string;
  imagen: string;
  artesanal: boolean;
  ingredientes: string[];
}

export interface OfertaPublica {
  id: string;
  imagen: string;
  descripcion: string;
  vigencia: string | Date;
  metodosPago: string[];
}

interface DulceApiResponse {
  id: string;
  nombre: string;
  descripcion?: string | null;
  precio: number | string;
  stock?: number;
  categoria?: string | null;
  imagen?: string | null;
  artesanal?: boolean;
  ingredientes?: string[];
}

interface OfertaApiResponse {
  id: string;
  imagen: string;
  descripcion: string;
  vigencia: string | Date;
  metodosPago?: string[];
}
export default function TiendaPublica() {
  const [dulces, setDulces] = useState<DulcePublico[]>([]);
  const [ofertas, setOfertas] = useState<OfertaPublica[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>("VER TODO");
  const [cargando, setCargando] = useState<boolean>(true);

  const sincronizarCatalogoTienda = useCallback(async () => {
    try {
      const [resDulces, resOfertas] = await Promise.all([
        fetch('/api/dulces'),
        fetch('/api/ofertas')
      ]);

      // Tolerancia a envoltorios de objetos o respuestas crudas de la API
      const jsonDulces = resDulces.ok ? await resDulces.json() : [];
      const jsonOfertas = resOfertas.ok ? await resOfertas.json() : [];

      const dataDulces = Array.isArray(jsonDulces) 
        ? jsonDulces 
        : (jsonDulces.dulces || jsonDulces.data || []) as DulceApiResponse[];

      const dataOfertas = Array.isArray(jsonOfertas) 
        ? jsonOfertas 
        : (jsonOfertas.ofertas || jsonOfertas.data || []) as OfertaApiResponse[];

      setDulces(dataDulces.map((d: DulceApiResponse): DulcePublico => {
        return {
          id: d.id,
          nombre: d.nombre,
          descripcion: d.descripcion || "", 
          precio: Number(d.precio),
          stock: d.stock ?? 0,
          categoria: d.categoria || "Sin categoría",
          imagen: d.imagen || "/placeholder.jpg", 
          artesanal: d.artesanal ?? true,
          ingredientes: Array.isArray(d.ingredientes) ? d.ingredientes : []
        };
      }));

      setOfertas(dataOfertas.map((o: OfertaApiResponse): OfertaPublica => {
        return {
          id: o.id,
          imagen: o.imagen,
          descripcion: o.descripcion,
          vigencia: o.vigencia,
          metodosPago: Array.isArray(o.metodosPago) ? o.metodosPago : []
        };
      }));
    } catch (err) {
      console.error("Error al refrescar la interfaz pública:", err);
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    let activo = true;
    const ejecutarCargaEfecto = async () => {
      if (activo) {
        await sincronizarCatalogoTienda();
      }
    };
    ejecutarCargaEfecto();
    return () => {
      activo = false;
    };
  }, [sincronizarCatalogoTienda]);
  return (
    <div className="min-h-screen bg-amber-50/20 text-gray-800 flex flex-col antialiased">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-12 space-y-10">
        
        {/* Encabezado Principal */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl md:text-4xl font-black text-gray-950 tracking-tight">
            Nuestras Delicias Artesanales
          </h1>
          <p className="text-xs md:text-sm text-gray-500 font-medium leading-relaxed">
            Sabores únicos hechos a mano con ingredientes seleccionados para darte un dulce momento de diferencia.
          </p>
        </div>

        {/* Renderizado Seguro del Carrusel de Ofertas Horizontal Expandido */}
        {cargando ? (
          <div className="w-full h-85 bg-white rounded-3xl border border-gray-100 flex items-center justify-center shadow-sm animate-pulse text-xs text-gray-400 font-medium">
            Cargando catálogo promocional...
          </div>
        ) : ofertas.length > 0 ? (
          <CarruselOfertas ofertas={ofertas} />
        ) : (
          <div className="w-full max-w-6xl mx-auto">
            <div className="bg-amber-50/40 border border-dashed border-amber-200 rounded-2xl p-6 text-center text-xs font-semibold text-amber-800">
              Pronto tendremos nuevas promociones exclusivas para ti. ¡Mantente atento!
            </div>
          </div>
        )}
        {/* Barra de Filtros por Categorías */}
        <BarraFiltros 
          categoriaSeleccionada={categoriaSeleccionada} 
          setCategoriaSeleccionada={setCategoriaSeleccionada} 
        />

        {/* 🏛️ SOLUCIÓN DEFINITIVA: Le inyectamos el arreglo completo 'dulces' sin pre-filtrar en la página.
            De esta manera, si GrillaProductos realiza un filtrado interno combinado con su barra de búsqueda,
            tendrá acceso a toda la colección completa de la base de datos evitando el conflicto de estados vacíos. */}
        {cargando ? (
          <div className="text-center text-xs font-semibold text-gray-400 py-12">Cargando delicias artesanales...</div>
        ) : (
          <GrillaProductos 
            dulces={dulces} 
            categoriaSeleccionada={categoriaSeleccionada} 
          />
        )}
      </main>

      {/* Botón Flotante para Pedidos Rápidos */}
      <WhatsappButton />

      {/* Footer de Cierre Corporativo */}
      <Footer />
    </div>
  );
}
