"use client";

import React, { useState } from 'react';
import { useCarritoStore, ItemCarrito } from '@/store/useCarritoStore';
import { X, Trash2, ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';
import Image from 'next/image';

interface CarritoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CarritoModal: React.FC<CarritoModalProps> = ({ isOpen, onClose }) => {
  // Consumo de Zustand global
  const { 
    items, 
    actualizarCantidad, 
    removerProducto, 
    vaciarCarrito, 
    obtenerTotal 
  } = useCarritoStore();

  // Estados locales para el flujo de pantallas y carga
  const [paso, setPaso] = useState<'revision' | 'formulario' | 'exito'>('revision');
  const [enviando, setEnviando] = useState(false);
  const [errorEnvio, setErrorEnvio] = useState<string | null>(null);

  // Datos del cliente para la orden de entrega
  const [datosCliente, setDatosCliente] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: 'Lima'
  });

  if (!isOpen) return null;

  const manejarCambioInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDatosCliente(prev => ({ ...prev, [name]: value }));
  };

  const manejarCancelarCarrito = () => {
    if (confirm('¿Estás seguro de que deseas cancelar la compra? Se vaciará tu carrito.')) {
      vaciarCarrito();
      setPaso('revision');
      onClose();
    }
  };
  // Envío final del pedido a PostgreSQL
  const manejarConfirmarPedido = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorEnvio(null);

    if (
      !datosCliente.nombre.trim() || 
      !datosCliente.apellidos.trim() || 
      !datosCliente.email.trim() || 
      !datosCliente.telefono.trim() || 
      !datosCliente.direccion.trim()
    ) {
      setErrorEnvio('Por favor, completa todos los campos obligatorios de entrega.');
      return;
    }

    setEnviando(true);

    try {
      const cuerpoPedido = {
        nombre: datosCliente.nombre,
        apellidos: datosCliente.apellidos,
        email: datosCliente.email,
        telefono: datosCliente.telefono,
        direccion: datosCliente.direccion,
        ciudad: datosCliente.ciudad,
        productos: JSON.stringify(items),
        total: obtenerTotal()
      };

      const res = await fetch('/api/pedidos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cuerpoPedido),
      });

      if (!res.ok) {
        throw new Error('Hubo un problema al registrar la orden en el servidor.');
      }

      vaciarCarrito();
      setPaso('exito');
    } catch {
      setErrorEnvio('Ocurrió un error inesperado. Inténtalo de nuevo más tarde.');
    } finally {
      setEnviando(false);
    }
  };

  const reiniciarModal = () => {
    setDatosCliente({
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      direccion: '',
      ciudad: 'Lima'
    });
    setPaso('revision');
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex justify-end z-50 transition-opacity">
      <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* CABECERA COMPARTIDA DEL MODAL */}
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-xl font-black text-gray-800 tracking-tight">
              {paso === 'revision' && 'Tu Carrito de Dulces'}
              {paso === 'formulario' && 'Datos de Entrega'}
              {paso === 'exito' && '¡Pedido Recibido!'}
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {paso === 'revision' && `${items.length} productos seleccionados`}
              {paso === 'formulario' && 'Completa el formulario para validar la orden'}
              {paso === 'exito' && 'Tu orden está siendo procesada'}
            </p>
          </div>
          {paso !== 'exito' && (
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-gray-600 p-1.5 hover:bg-gray-100 rounded-full transition-all"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* PANTALLA 1: REVISIÓN DE ARTÍCULOS EN EL CARRITO */}
        {paso === 'revision' && (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/50">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                  <span className="text-4xl">🧁</span>
                  <p className="text-sm font-semibold text-gray-500">Tu carrito está completamente vacío.</p>
                  <button 
                    type="button"
                    onClick={onClose} 
                    className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-xl hover:bg-amber-100 transition-all"
                  >
                    Ver Catálogo de Dulces
                  </button>
                </div>
              ) : (
                items.map((item: ItemCarrito) => (
                  <div 
                    key={item.id} 
                    className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs flex gap-4 items-center"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-100 bg-gray-50 shrink-0">
                      <Image 
                        src={item.imagen || '/placeholder.jpg'} 
                        alt={item.nombre} 
                        fill 
                        className="object-cover" 
                        unoptimized 
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-sm truncate">{item.nombre}</h4>
                      <p className="text-xs font-semibold text-amber-700 mt-0.5">S/. {item.precio.toFixed(2)} c/u</p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <button 
                          type="button"
                          onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                          className="w-6 h-6 border border-gray-200 bg-white rounded-md text-xs font-bold flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-gray-800 w-6 text-center">{item.cantidad}</span>
                        <button 
                          type="button"
                          onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                          className="w-6 h-6 border border-gray-200 bg-white rounded-md text-xs font-bold flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button 
                      type="button"
                      onClick={() => removerProducto(item.id)}
                      className="text-gray-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-5 border-t border-gray-100 bg-white shadow-md space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Total Estimado:</span>
                  <span className="text-2xl font-black text-gray-900">S/. {obtenerTotal().toFixed(2)}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    type="button"
                    onClick={manejarCancelarCarrito}
                    className="w-full py-3 bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 text-sm font-bold rounded-xl transition-all"
                  >
                    Cancelar Compra
                  </button>
                  <button 
                    type="button"
                    onClick={() => setPaso('formulario')}
                    className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all"
                  >
                    Confirmar Pedido
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
        {/* PANTALLA 2: FORMULARIO DE RECOPILACIÓN DE DATOS DEL CLIENTE */}
        {paso === 'formulario' && (
          <form onSubmit={manejarConfirmarPedido} className="flex-1 flex flex-col min-h-0 bg-white">
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {errorEnvio && (
                <div className="p-3.5 rounded-xl bg-red-50 text-red-700 text-xs font-semibold border border-red-100">
                  {errorEnvio}
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Nombres *</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={datosCliente.nombre}
                    onChange={manejarCambioInput}
                    disabled={enviando}
                    placeholder="Ej. Juan"
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Apellidos *</label>
                  <input
                    type="text"
                    name="apellidos"
                    required
                    value={datosCliente.apellidos}
                    onChange={manejarCambioInput}
                    disabled={enviando}
                    placeholder="Ej. Pérez"
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Número de Teléfono *</label>
                <input
                  type="tel"
                  name="telefono"
                  required
                  value={datosCliente.telefono}
                  onChange={manejarCambioInput}
                  disabled={enviando}
                  placeholder="Ej. 987654321"
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Correo Electrónico *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={datosCliente.email}
                  onChange={manejarCambioInput}
                  disabled={enviando}
                  placeholder="juan.perez@email.com"
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Dirección de Entrega *</label>
                <input
                  type="text"
                  name="direccion"
                  required
                  value={datosCliente.direccion}
                  onChange={manejarCambioInput}
                  disabled={enviando}
                  placeholder="Av. Larco 123, Dpto 401"
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Ciudad / Distrito</label>
                <select
                  name="ciudad"
                  value={datosCliente.ciudad}
                  onChange={manejarCambioInput}
                  disabled={enviando}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm bg-white transition-all"
                >
                  <option value="Lima">Lima</option>
                  <option value="Miraflores">Miraflores</option>
                  <option value="San Isidro">San Isidro</option>
                  <option value="Santiago de Surco">Santiago de Surco</option>
                  <option value="San Borja">San Borja</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>

              <div className="pt-2 border-t border-dashed border-gray-100">
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Monto Neto de Productos:</span>
                  <span className="font-bold text-gray-800">S/. {obtenerTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-gray-100 bg-white shadow-md flex gap-3">
              <button
                type="button"
                onClick={() => setPaso('revision')}
                disabled={enviando}
                className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-bold rounded-xl flex items-center gap-1.5 transition-all disabled:opacity-50"
              >
                <ArrowLeft size={16} />
                Atrás
              </button>
              <button
                type="submit"
                disabled={enviando}
                className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {enviando ? (
                  <>
                    <Loader2 className="animate-spin h-4 w-4" />
                    Procesando Orden...
                  </>
                ) : (
                  <>
                    Confirmar Compra
                    <CheckCircle2 size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* PANTALLA 3: VISTA DE ÉXITO TRAS LA COMPRA */}
        {paso === 'exito' && (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4 bg-white animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 border border-green-100">
              <CheckCircle2 size={36} />
            </div>
            <div>
              <h3 className="text-xl font-black text-gray-900 tracking-tight">¡Muchas gracias por tu compra!</h3>
              <p className="text-sm text-gray-500 mt-2 max-w-xs mx-auto">
                Tu orden ha sido registrada con éxito en Soles (S/.) y ya se encuentra visible en el Panel de Administración.
              </p>
            </div>
            <button
              type="button"
              onClick={reiniciarModal}
              className="mt-4 px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all"
            >
              Seguir Explorando Tienda
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
