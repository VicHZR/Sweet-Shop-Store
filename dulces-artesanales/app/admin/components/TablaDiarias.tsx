"use client";

import React, { useState } from 'react';
import { Clock, Eye, FileSpreadsheet } from 'lucide-react';
import { Pedido } from '../page';

interface ProductoComprado {
  id?: string;
  nombre: string;
  cantidad: number;
  precio: number;
}

interface TablaDiariasProps {
  pedidosDiarios: Pedido[];
  mostrarNotificacion: (mensaje: string, tipo: 'exito' | 'error') => void;
}

export const TablaDiarias: React.FC<TablaDiariasProps> = ({
  pedidosDiarios,
  mostrarNotificacion
}) => {
  const [pedidoDetalle, setPedidoDetalle] = useState<Pedido | null>(null);

  const mapearVentasPorHoras = (): [string, number][] => {
    const horasMap: Record<string, number> = {
      "08:00 - 11:00": 0,
      "11:00 - 14:00": 0,
      "14:00 - 17:00": 0,
      "17:00 - 20:00": 0
    };

    pedidosDiarios.forEach(p => {
      
      const fechaInstanciada = new Date(p.createdAt);
      const hora = fechaInstanciada.getHours();
      
      if (hora >= 8 && hora < 11) horasMap["08:00 - 11:00"] += p.total;
      else if (hora >= 11 && hora < 14) horasMap["11:00 - 14:00"] += p.total;
      else if (hora >= 14 && hora < 17) horasMap["14:00 - 17:00"] += p.total;
      else if (hora >= 17 && hora < 20) horasMap["17:00 - 20:00"] += p.total;
    });

    return Object.entries(horasMap);
  };

  const rangosHoras = mapearVentasPorHoras();
  
  const obtenerVentaMaxima = (): number => {
    let maximo = 1;
    rangosHoras.forEach(rango => {
      if (rango[1] > maximo) {
        maximo = rango[1];
      }
    });
    return maximo;
  };

  const ventaMaximaRango = obtenerVentaMaxima();

  const exportarVentaCSV = (pedido: Pedido) => {
    let contenidoCsv = "data:text/csv;charset=utf-8,";
    contenidoCsv += "ID ORDEN,CLIENTE,TELEFONO,DIRECCION,FECHA,TOTAL\n";
    contenidoCsv += `"${pedido.id}","${pedido.nombre} ${pedido.apellidos}","${pedido.telefono}","${pedido.direccion}","${new Date(pedido.createdAt).toLocaleString()}","S/ ${pedido.total.toFixed(2)}"\n\n`;
    contenidoCsv += "PRODUCTO,CANTIDAD,PRECIO UNITARIO\n";

    try {
      const productosArray = JSON.parse(pedido.productos) as ProductoComprado[];
      if (Array.isArray(productosArray)) {
        productosArray.forEach((prod) => {
          contenidoCsv += `"${prod.nombre || 'Dulce'}","${prod.cantidad || 1}","S/ ${(prod.precio || 0).toFixed(2)}"\n`;
        });
      }
    } catch {
      contenidoCsv += `"Productos en texto plano","1","S/ ${pedido.total.toFixed(2)}"\n`;
    }

    const encodedUri = encodeURI(contenidoCsv);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Venta_${pedido.id.substring(0, 8)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    mostrarNotificacion("Archivo CSV de la orden descargado con éxito", "exito");
  };
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-black text-gray-800 flex items-center gap-2">
          <Clock size={16} className="text-amber-600" />
          Monitoreo de Ventas del Día por Intervalos de Horas
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {rangosHoras.map((elementoGrafico) => {
            const rangoHoraStr = elementoGrafico[0];
            const totalRecaudadoHora = elementoGrafico[1];
            const porcentajeAltura = (totalRecaudadoHora / ventaMaximaRango) * 100;
            return (
              <div key={rangoHoraStr} className="border border-gray-50 bg-gray-50/30 rounded-xl p-3 flex flex-col justify-between space-y-3">
                <span className="text-[10px] font-bold text-gray-400 block uppercase">{rangoHoraStr}</span>
                <div className="h-16 w-full bg-gray-100 rounded-lg overflow-hidden flex items-end">
                  <div 
                    className="bg-amber-500 w-full transition-all duration-500 ease-out"
                    style={{ height: `${Math.max(porcentajeAltura, 6)}%` }}
                  />
                </div>
                <span className="text-xs font-black text-gray-900 block">S/ {totalRecaudadoHora.toFixed(2)}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50">
          <h2 className="text-base font-black text-gray-900 tracking-tight">Historial de Órdenes de la Semana en Curso</h2>
        </div>
        
        {pedidosDiarios.length === 0 ? (
          <div className="p-12 text-center text-xs text-gray-400">No hay transacciones registradas dentro de este ciclo semanal.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 text-[10px] font-black text-gray-400 uppercase tracking-wider border-b border-gray-100">
                  <th className="p-4">Fecha / Hora</th>
                  <th className="p-4">Comprador</th>
                  <th className="p-4">Contacto</th>
                  <th className="p-4 text-right">Monto Total</th>
                  <th className="p-4 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-xs text-gray-700">
                {pedidosDiarios.map((pedido) => (
                  <tr key={pedido.id} className="hover:bg-gray-50/50 transition">
                    <td className="p-4 font-medium text-gray-500">{new Date(pedido.createdAt).toLocaleString()}</td>
                    <td className="p-4 font-bold text-gray-900">{pedido.nombre} {pedido.apellidos}</td>
                    <td className="p-4">{pedido.telefono}</td>
                    <td className="p-4 text-right font-black text-amber-900">S/ {pedido.total.toFixed(2)}</td>
                    <td className="p-4 flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => setPedidoDetalle(pedido)}
                        className="p-2 bg-gray-50 hover:bg-amber-50 text-gray-600 hover:text-amber-800 rounded-lg transition cursor-pointer"
                        title="Ver Detalles"
                      >
                        <Eye size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => exportarVentaCSV(pedido)}
                        className="p-2 bg-gray-50 hover:bg-green-50 text-gray-600 hover:text-green-700 rounded-lg transition cursor-pointer"
                        title="Exportar CSV"
                      >
                        <FileSpreadsheet size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {pedidoDetalle && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-gray-100 p-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="border-b border-gray-100 pb-3">
              <h3 className="font-black text-gray-900 text-base">Desglose Físico de Compra</h3>
              <p className="text-[10px] text-gray-400 font-mono mt-0.5">ID: {pedidoDetalle.id}</p>
            </div>
            
            <div className="space-y-2 text-xs">
              <p><strong className="text-gray-400">Cliente:</strong> <span className="text-gray-900 font-bold">{pedidoDetalle.nombre} {pedidoDetalle.apellidos}</span></p>
              <p><strong className="text-gray-400">Entrega:</strong> <span className="text-gray-900">{pedidoDetalle.direccion}</span></p>
            </div>

            <div className="border border-gray-100 rounded-xl p-3 bg-gray-50/50 space-y-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Productos Solicitados</span>
              <div className="divide-y divide-gray-100 max-h-40 overflow-y-auto text-xs">
                {(() => {
                  try {
                    const prods = JSON.parse(pedidoDetalle.productos) as ProductoComprado[];
                    if (Array.isArray(prods)) {
                      return prods.map((p, idx) => (
                        <div key={idx} className="py-2 flex justify-between items-center text-gray-700">
                          <span>{p.nombre} <strong className="text-amber-800">x{p.cantidad || 1}</strong></span>
                          <span className="font-bold text-gray-900">S/ {((p.precio || 0) * (p.cantidad || 1)).toFixed(2)}</span>
                        </div>
                      ));
                    }
                  } catch {
                    
                  }
                  return <p className="text-gray-400 py-1">Texto plano: {pedidoDetalle.productos}</p>
                })()}
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-gray-100">
              <span className="text-xs font-bold text-gray-500">Monto Total Cargado</span>
              <span className="text-lg font-black text-amber-900">S/ {pedidoDetalle.total.toFixed(2)}</span>
            </div>

            <button
              type="button"
              onClick={() => setPedidoDetalle(null)}
              className="w-full py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold rounded-xl transition cursor-pointer"
            >
              Cerrar Detalle
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
