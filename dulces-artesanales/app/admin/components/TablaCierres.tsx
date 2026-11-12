"use client";

import React, { useState } from 'react';
import { Download, Eye, Calendar, DollarSign, ShoppingBag, X } from 'lucide-react';

export interface CierreDiario {
  id: string;
  fecha: string;
  totalVentas: number;
  numPedidos: number;
  pedidosJson: string;
}

interface ItemPedido {
  nombre: string;
  precio: number;
  cantidad: number;
}

interface PedidoCerrado {
  id: string;
  nombre: string;
  apellidos: string;
  telefono: string;
  direccion: string;
  total: number;
  estado: string;
  productos: string;
}

interface TablaCierresProps {
  cierres: CierreDiario[];
}

export const TablaCierres: React.FC<TablaCierresProps> = ({ cierres }) => {
  const [cierreSeleccionado, setCierreSeleccionado] = useState<CierreDiario | null>(null);

  const descargarExcel = (cierre: CierreDiario) => {
    try {
      const pedidos: PedidoCerrado[] = JSON.parse(cierre.pedidosJson);
      const fechaFormateada = new Date(cierre.fecha).toLocaleDateString('es-PE').replace(/\//g, '-');

      let contenidoCsv = "\uFEFF";
      contenidoCsv += "REPORTE DE CIERRE DIARIO - DULCE DIFERENCIA\n";
      contenidoCsv += `Fecha de Cierre,${new Date(cierre.fecha).toLocaleString('es-PE')}\n`;
      contenidoCsv += `Total Recaudado,S/. ${cierre.totalVentas.toFixed(2)}\n`;
      contenidoCsv += `Total de Pedidos,${cierre.numPedidos}\n\n`;
      
      contenidoCsv += "N° Orden,Cliente,Telefono,Direccion,Monto Total,Estado,Productos Solicitados\n";

      pedidos.forEach((p, index) => {
        let detalleProductos = "";
        try {
          const productosLista: ItemPedido[] = JSON.parse(p.productos);
          detalleProductos = productosLista.map(item => `${item.nombre} (x${item.cantidad})`).join(" | ");
        } catch {
          detalleProductos = "Error al leer productos";
        }

        const numOrden = `#ORD-${(index + 1).toString().padStart(4, '0')}`;
        const nombreCliente = `${p.nombre} ${p.apellidos}`;
        const direccionLimpia = p.direccion.replace(/,/g, ' ');

        contenidoCsv += `${numOrden},${nombreCliente},${p.telefono},${direccionLimpia},S/. ${p.total.toFixed(2)},${p.estado.toUpperCase()},${detalleProductos}\n`;
      });

      const blob = new Blob([contenidoCsv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const enlace = document.createElement('a');
      enlace.href = url;
      enlace.setAttribute('download', `Cierre_Ventas_${fechaFormateada}.csv`);
      document.body.appendChild(enlace);
      enlace.click();
      document.body.removeChild(enlace);
    } catch {
      
      alert("Error al estructurar el archivo de descarga.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50/70 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-6 py-3.5 text-left">Fecha de Cierre</th>
              <th className="px-6 py-3.5 text-left">N° Pedidos</th>
              <th className="px-6 py-3.5 text-left">Total Recaudado</th>
              <th className="px-6 py-3.5 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
            {cierres.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-400 font-medium">
                  No se registran cierres de caja históricos en la base de datos.
                </td>
              </tr>
            ) : (
              cierres.map((cierre) => (
                <tr key={cierre.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-900">
                    {new Date(cierre.fecha).toLocaleDateString('es-PE')} {new Date(cierre.fecha).toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium">{cierre.numPedidos} órdenes</td>
                  <td className="px-6 py-4 whitespace-nowrap font-black text-amber-800">S/. {cierre.totalVentas.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                    <button
                      type="button"
                      onClick={() => setCierreSeleccionado(cierre)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg inline-flex items-center gap-1 text-xs font-semibold transition"
                    >
                      <Eye size={14} /> View Resumen
                    </button>
                    <button
                      type="button"
                      onClick={() => descargarExcel(cierre)}
                      className="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-3 py-1.5 rounded-lg inline-flex items-center gap-1 text-xs font-bold border border-emerald-200 transition"
                    >
                      <Download size={14} /> Descargar Excel
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL RESUMEN */}
      {cierreSeleccionado && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-gray-100 p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <h3 className="text-lg font-black text-gray-900">Resumen Consolidado</h3>
              <button type="button" onClick={() => setCierreSeleccionado(null)} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center gap-3">
                <Calendar className="text-amber-600 shrink-0" size={20} />
                <div><span className="text-gray-400 block text-[10px] font-bold uppercase">Fecha</span><strong className="text-gray-800 text-xs">{new Date(cierreSeleccionado.fecha).toLocaleDateString('es-PE')}</strong></div>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center gap-3">
                <ShoppingBag className="text-amber-600 shrink-0" size={20} />
                <div><span className="text-gray-400 block text-[10px] font-bold uppercase">Pedidos</span><strong className="text-gray-800 text-sm">{cierreSeleccionado.numPedidos} unds</strong></div>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 col-span-2 flex items-center gap-4">
                <DollarSign className="text-emerald-600 shrink-0" size={24} />
                <div><span className="text-gray-400 block text-[10px] font-bold uppercase">Total Bruto Recaudado</span><strong className="text-xl font-black text-gray-900">S/. {cierreSeleccionado.totalVentas.toFixed(2)}</strong></div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => descargarExcel(cierreSeleccionado)}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition"
            >
              <Download size={16} /> Exportar Detalle Completo a Excel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
