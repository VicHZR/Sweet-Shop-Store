"use client";

import React from 'react';
import { Search, RefreshCw } from 'lucide-react';

interface BarraBusquedaProps {
  pestanaActiva: 'productos' | 'pedidos' | 'diarias' | 'semanales' | 'mensuales' | 'ofertas';
  busqueda: string;
  setBusqueda: (busqueda: string) => void;
  refrescarTablas: () => Promise<void>;
  mostrarNotificacion: (mensaje: string, tipo: 'exito' | 'error') => void;
}

export const BarraBusqueda: React.FC<BarraBusquedaProps> = ({
  pestanaActiva,
  busqueda,
  setBusqueda,
  refrescarTablas,
  mostrarNotificacion
}) => {
  const [sincronizando, setSincronizando] = React.useState(false);

  const ejecutarSincronizacionManual = async () => {
    setSincronizando(true);
    try {
      await refrescarTablas();
      mostrarNotificacion("Tablas comerciales sincronizadas con la Base de Datos", "exito");
    } catch {
      mostrarNotificacion("Error al intentar refrescar las colecciones", "error");
    } finally {
      setSincronizando(false);
    }
  };

  // Determinar si la pestaña activa requiere o no barra de búsqueda de texto plano
  const habilitarFiltroTexto = pestanaActiva === 'productos' || pestanaActiva === 'pedidos';

  return (
    <div className="flex items-center justify-between gap-4 mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
      <div className="relative flex-1 max-w-md w-full">
        {habilitarFiltroTexto ? (
          <>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder={pestanaActiva === 'productos' ? "Buscar por nombre o categoría de dulce..." : "Buscar pedidos por nombre de comprador..."}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-xs outline-none bg-gray-50/50 text-gray-700 placeholder-gray-400 font-medium"
            />
          </>
        ) : (
          <div className="text-xs text-gray-400 font-medium flex items-center h-8">
            Filtros avanzados automáticos activos para este reporte financiero.
          </div>
        )}
      </div>

      <button
        type="button"
        disabled={sincronizando}
        onClick={ejecutarSincronizacionManual}
        className="p-2 text-gray-500 hover:text-amber-700 bg-gray-50 hover:bg-amber-50 border border-gray-100 rounded-xl transition disabled:opacity-40 cursor-pointer flex items-center justify-center"
        title="Refrescar datos del servidor"
      >
        <RefreshCw size={16} className={`${sincronizando ? 'animate-spin text-amber-700' : ''}`} />
      </button>
    </div>
  );
};
