"use client";

import React from 'react';

interface CabeceraAdminProps {
  pestanaActiva: 'productos' | 'pedidos' | 'diarias' | 'semanales' | 'mensuales' | 'ofertas';
  ejecutandoCierre: boolean;
  setIsModalCierreOpen: (open: boolean) => void;
  abrirModal: () => void;
}

export const CabeceraAdmin: React.FC<CabeceraAdminProps> = ({
  pestanaActiva,
  ejecutandoCierre,
  setIsModalCierreOpen,
  abrirModal
}) => {
  // Traducir el identificador de la pestaña a un título legible para el usuario
  const obtenerTituloPestana = () => {
    switch (pestanaActiva) {
      case 'productos': return 'Catálogo de Productos';
      case 'pedidos': return 'Pedidos Realizados';
      case 'diarias': return 'Balance de Ventas Diarias';
      case 'semanales': return 'Control de Ciclos Semanales';
      case 'mensuales': return 'Historial Consolidados Mensuales';
      case 'ofertas': return 'Panel de Promociones y Ofertas';
      default: return 'Panel de Control General';
    }
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 mb-6 border-b border-gray-100 gap-4">
      <div>
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">{obtenerTituloPestana()}</h1>
        <p className="text-xs text-gray-500 mt-0.5">Gestión operativa interna y balances comerciales del negocio</p>
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto">
        {pestanaActiva === 'productos' && (
          <button
            type="button"
            onClick={abrirModal}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-sm transition cursor-pointer w-full md:w-auto"
          >
            Nuevo Dulce Artesanal
          </button>
        )}

        {pestanaActiva === 'pedidos' && (
          <button
            type="button"
            disabled={ejecutandoCierre}
            onClick={() => setIsModalCierreOpen(true)}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-sm transition disabled:opacity-50 cursor-pointer w-full md:w-auto"
          >
            {ejecutandoCierre ? 'Procesando Cierre...' : 'Cerrar Ventas del Día'}
          </button>
        )}
      </div>
    </header>
  );
};
