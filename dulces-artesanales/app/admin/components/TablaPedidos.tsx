"use client";

import React from 'react';
import { Eye } from 'lucide-react';
import { Pedido } from '../page'; // Importamos la interfaz del archivo raíz

interface TablaPedidosProps {
  pedidos: Pedido[];
  busqueda: string;
  abrirDetallePedido: (pedido: Pedido) => void;
}

export const TablaPedidos: React.FC<TablaPedidosProps> = ({
  pedidos,
  busqueda,
  abrirDetallePedido
}) => {
  // Filtramos la lista de pedidos localmente basándonos en el nombre o apellidos del cliente
  const pedidosFiltrados = pedidos.filter(p => 
    `${p.nombre} ${p.apellidos}`.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50/70 text-xs font-semibold uppercase tracking-wider text-gray-500">
          <tr>
            <th className="px-6 py-3.5 text-left">N° Orden</th>
            <th className="px-6 py-3.5 text-left">Cliente</th>
            <th className="px-6 py-3.5 text-left">Teléfono</th>
            <th className="px-6 py-3.5 text-left">Total</th>
            <th className="px-6 py-3.5 text-left">Estado</th>
            <th className="px-6 py-3.5 text-right">Detalle</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
          {pedidosFiltrados.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-6 py-8 text-center text-gray-400 font-medium">
                No hay órdenes de compra registradas.
              </td>
            </tr>
          ) : (            pedidosFiltrados.map((pedido, index) => (
              <tr key={pedido.id} className="hover:bg-gray-50/80 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap font-mono text-xs text-amber-700 font-bold">
                  #ORD-{(index + 1).toString().padStart(4, '0')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-900">
                  {pedido.nombre} {pedido.apellidos}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium">{pedido.telefono}</td>
                <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-900">S/. {pedido.total.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    pedido.estado === 'pendiente' ? 'bg-amber-100 text-amber-800' :
                    pedido.estado === 'completado' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {pedido.estado}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
                  <button
                    type="button"
                    onClick={() => abrirDetallePedido(pedido)}
                    className="bg-gray-100 hover:bg-amber-600 hover:text-white text-gray-700 px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 text-xs transition-all"
                  >
                    <Eye size={14} />
                    Ver detalle
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

