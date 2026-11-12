"use client";

import React from 'react';

import { X, MapPin, Mail, Phone, User } from 'lucide-react';

interface Pedido {
  id: string;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  direccion: string;
  productos: string; 
  total: number;
  estado: 'pendiente' | 'completado' | 'cancelado';
  createdAt: string;
}

interface ItemProducto {
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
}

interface ModalPedidoProps {
  isOpen: boolean;
  pedidoSeleccionado: Pedido | null;
  setIsModalPedidoOpen: (isOpen: boolean) => void;
  cambiarEstadoPedido: (id: string, nuevoEstado: 'pendiente' | 'completado' | 'cancelado') => Promise<void>;
}

export const ModalPedido: React.FC<ModalPedidoProps> = ({
  isOpen,
  pedidoSeleccionado,
  setIsModalPedidoOpen,
  cambiarEstadoPedido
}) => {
  if (!isOpen || !pedidoSeleccionado) return null;

  let listaProductos: ItemProducto[] = [];
  try {
    listaProductos = JSON.parse(pedidoSeleccionado.productos);
  } catch {
    listaProductos = [];
  }

  const manejarAccionEstado = async (nuevoEstado: 'completado' | 'cancelado') => {
    await cambiarEstadoPedido(pedidoSeleccionado.id, nuevoEstado);
    setIsModalPedidoOpen(false); 
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl border border-gray-100 p-6 space-y-6 max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-200">
        
        {/* Encabezado */}
        <div className="flex justify-between items-start border-b border-gray-100 pb-3 shrink-0">
          <div>
            <h3 className="text-lg font-black text-gray-900 tracking-tight">Detalle Completo del Pedido</h3>
            <p className="text-[10px] font-mono text-gray-400 mt-0.5">{pedidoSeleccionado.id}</p>
          </div>
          <button 
            type="button" 
            onClick={() => setIsModalPedidoOpen(false)} 
            className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-50 rounded-lg transition cursor-pointer bg-transparent border-0"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cuerpo Deslizable */}
        <div className="flex-1 overflow-y-auto space-y-5 pr-1 text-xs">
          {/* Datos del Cliente */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-3 font-semibold text-gray-700">
            <div className="flex items-center gap-2">
              <User size={14} className="text-amber-700" />
              <span>{pedidoSeleccionado.nombre} {pedidoSeleccionado.apellidos}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-amber-700" />
              <span>{pedidoSeleccionado.telefono}</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              <Mail size={14} className="text-amber-700" />
              <span className="truncate">{pedidoSeleccionado.email}</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2 border-t border-gray-200/60 pt-2 mt-1">
              <MapPin size={14} className="text-amber-700" />
              <span>{pedidoSeleccionado.direccion}</span>
            </div>
          </div>

          {/* Artículos Solicitados */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-wider">Artículos Solicitados (Lista del Pedido)</h4>
            <div className="border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-100 bg-white">
              {listaProductos.length === 0 ? (
                <div className="p-3 font-medium text-gray-800 whitespace-pre-line leading-relaxed">
                  {pedidoSeleccionado.productos}
                </div>
              ) : (
                listaProductos.map((item, index) => (
                  <div key={index} className="p-3 flex justify-between items-center font-bold text-gray-800">
                    <div>
                      <span>{item.nombre}</span>
                      <span className="text-gray-400 font-normal text-[11px] ml-1.5">x{item.cantidad || 1} unidades</span>
                    </div>
                    <span className="text-gray-900">S/. {((item.precio || 0) * (item.cantidad || 1)).toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Pie de Ventana */}
        <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 shrink-0">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Monto Total Recaudado:</span>
            <strong className="text-xl font-black text-amber-800">S/. {pedidoSeleccionado.total.toFixed(2)}</strong>
          </div>

          {pedidoSeleccionado.estado === 'pendiente' && (
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => manejarAccionEstado('cancelado')}
                className="px-4 py-2 border border-red-200 text-red-600 bg-red-50/30 hover:bg-red-600 hover:text-white rounded-xl text-xs font-bold transition shadow-2xs cursor-pointer"
              >
                Anular Pedido
              </button>
              <button
                type="button"
                // CORRECCIÓN 2872: Se eliminó la expresión as any redundante pasando el string directo
                onClick={() => manejarAccionEstado('completado')}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
              >
                Completar Orden
              </button>
            </div>
          )}

          {pedidoSeleccionado.estado !== 'pendiente' && (
            <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${
              pedidoSeleccionado.estado === 'completado' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}>
              Estado: {pedidoSeleccionado.estado}
            </span>
          )}
        </div>

      </div>
    </div>
  );
};
