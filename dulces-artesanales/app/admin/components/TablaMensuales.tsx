"use client";

import React, { useState } from 'react';
import { RefreshCw, FolderDown, Calendar, LineChart, ChevronRight, X } from 'lucide-react';

export interface CierreMensual {
  id: string;
  mesAnio: string;
  totalVentas: number;
  numCierres: number;
  cierresJson: string;
  createdAt: string;
}

interface CierreDiarioRespaldo {
  fecha: string;
  totalVentas: number;
  numPedidos: number;
}

interface TablaMensualesProps {
  mensuales: CierreMensual[];
  onForzarCierreMes: () => void;
  ejecutandoCierre: boolean;
}

export const TablaMensuales: React.FC<TablaMensualesProps> = ({ 
  mensuales, 
  onForzarCierreMes,
  ejecutandoCierre
}) => {
  const [mesSeleccionado, setMesSeleccionado] = useState<CierreMensual | null>(null);

  
  const ventaMaximaHistorica = mensuales.length > 0 
    ? Math.max(...mensuales.map(m => m.totalVentas)) 
    : 1;

  
  const descargarCarpetaMesExcel = (cierreMes: CierreMensual) => {
    try {
      const cierresDiarios: CierreDiarioRespaldo[] = JSON.parse(cierreMes.cierresJson);
      
      let contenidoCsv = "\uFEFF";
      contenidoCsv += `REPORTE CONSOLIDADO MENSUAL - MES [ ${cierreMes.mesAnio} ]\n`;
      contenidoCsv += `Total Recaudado en el Mes,S/. ${cierreMes.totalVentas.toFixed(2)}\n`;
      contenidoCsv += `Dias Operados con Cierres Diarios,${cierreMes.numCierres}\n\n`;
      
      contenidoCsv += "Fecha de Cierre Diario,N° Pedidos Atendidos,Total Diario Recaudado\n";

      cierresDiarios.forEach((cd) => {
        const fechaCD = new Date(cd.fecha).toLocaleDateString('es-PE');
        contenidoCsv += `${fechaCD},${cd.numPedidos},S/. ${cd.totalVentas.toFixed(2)}\n`;
      });

      const blob = new Blob([contenidoCsv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const enlace = document.createElement('a');
      enlace.href = url;
      enlace.setAttribute('download', `Ventas_Consolidado_Mes_${cierreMes.mesAnio}.csv`);
      document.body.appendChild(enlace);
      enlace.click();
      document.body.removeChild(enlace);
    } catch {
      alert("Error al extraer la información histórica de la carpeta del mes.");
    }
  };

  return (
    <div className="space-y-6">
      {/* SECCIÓN SUPERIOR: BOTÓN FORZAR ACCIÓN */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 flex justify-between items-center shadow-xs">
        <div>
          <h3 className="text-sm font-bold text-gray-800">Cierre del Ciclo Comercial Mensual</h3>
          <p className="text-xs text-gray-400">Si deseas limpiar los balances diarios y empaquetar el acumulado de inmediato, ejecuta la orden de manera manual.</p>
        </div>
        <button
          type="button"
          disabled={ejecutandoCierre}
          onClick={onForzarCierreMes}
          className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition shadow-xs disabled:opacity-50 cursor-pointer"
        >
          <RefreshCw size={14} className={ejecutandoCierre ? "animate-spin" : ""} />
          Cerrar Mes Activo
        </button>
      </div>

      {/* REPRESENTACIÓN GRÁFICA DE VENTAS CON TAILWIND CSS */}
      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-4">
        <h3 className="text-xs font-black uppercase text-gray-400 tracking-wider flex items-center gap-1.5">
          <LineChart size={16} className="text-amber-700" />
          Gráfico Comparativo de Ingresos Mensuales
        </h3>
        
        {mensuales.length === 0 ? (
          <p className="text-xs text-gray-400 italic text-center py-4">No hay datos suficientes para graficar históricos mensuales.</p>
        ) : (
          <div className="space-y-3.5">
            {mensuales.map((mes) => {
              // Calculamos el porcentaje relativo de la barra frente al mes récord
              const porcentajeBarra = (mes.totalVentas / ventaMaximaHistorica) * 100;
              return (
                <div key={mes.id} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-gray-700 uppercase">Mes: {mes.mesAnio}</span>
                    <span className="text-gray-900 font-black">S/. {mes.totalVentas.toFixed(2)}</span>
                  </div>
                  <div className="w-full bg-gray-100 h-3.5 rounded-full overflow-hidden flex">
                  <div className="w-full bg-gray-100 h-3.5 rounded-full overflow-hidden flex">
                    <div 
                      style={{ width: `${Math.max(porcentajeBarra, 4)}%` }}
                      className="bg-linear-to-r from-amber-500 to-amber-700 rounded-full transition-all duration-500 h-full"
                    />
                  </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* GRILLA / CARPETAS DE HISTÓRICOS */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50/70 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-6 py-3.5 text-left">Carpeta de Ventas</th>
              <th className="px-6 py-3.5 text-left">Días Cerrados</th>
              <th className="px-6 py-3.5 text-left">Consolidado Total</th>
              <th className="px-6 py-3.5 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
            {mensuales.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-400 font-medium">
                  La carpeta histórica de ventas mensuales se encuentra vacía.
                </td>
              </tr>
            ) : (
              mensuales.map((mes) => (
                <tr key={mes.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-lg">📁</span>
                    <span>Período Mensual {mes.mesAnio}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium">{mes.numCierres} cierres diarios</td>
                  <td className="px-6 py-4 whitespace-nowrap font-black text-amber-800">S/. {mes.totalVentas.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                    <button
                      type="button"
                      onClick={() => setMesSeleccionado(mes)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg inline-flex items-center gap-1 text-xs font-semibold transition cursor-pointer"
                    >
                      Ver Carpeta <ChevronRight size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => descargarCarpetaMesExcel(mes)}
                      className="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-3 py-1.5 rounded-lg inline-flex items-center gap-1 text-xs font-bold border border-emerald-200 transition cursor-pointer"
                    >
                      <FolderDown size={14} /> Exportar Excel
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* COMPONENTE FLOTANTE MODAL: DESGLOSE DE CARPETA INTERNA */}
      {mesSeleccionado && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-gray-100 p-6 space-y-4 max-h-[85vh] flex flex-col">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3 shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-xl">📂</span>
                <h3 className="text-base font-black text-gray-900">Carpeta Interna del Mes {mesSeleccionado.mesAnio}</h3>
              </div>
              <button type="button" onClick={() => setMesSeleccionado(null)} className="text-gray-400 hover:text-gray-600 cursor-pointer"><X size={20} /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
              {(() => {
                try {
                  const itemsDiarios: CierreDiarioRespaldo[] = JSON.parse(mesSeleccionado.cierresJson);
                  return itemsDiarios.map((cd, index) => (
                    <div key={index} className="bg-gray-50 border border-gray-100 p-3 rounded-xl flex justify-between items-center text-xs font-semibold">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-amber-700" />
                        <span className="text-gray-700">{new Date(cd.fecha).toLocaleDateString('es-PE')}</span>
                        <span className="text-gray-400 font-normal">({cd.numPedidos} ped.)</span>
                      </div>
                      <span className="font-bold text-gray-900">S/. {cd.totalVentas.toFixed(2)}</span>
                    </div>
                  ));
                } catch {
                  return <p className="text-xs text-red-500">Error al leer los registros de la carpeta.</p>;
                }
              })()}
            </div>

                        <div className="pt-3 border-t border-gray-100 flex justify-between items-center shrink-0">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase block">Consolidado Total</span>
                <strong className="text-lg font-black text-amber-800">S/. {mesSeleccionado.totalVentas.toFixed(2)}</strong>
              </div>
              <button
                type="button"
                onClick={() => descargarCarpetaMesExcel(mesSeleccionado)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 transition"
              >
                <FolderDown size={14} /> Descargar Detalle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

