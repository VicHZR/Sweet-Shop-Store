"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Pedido {
  id: string;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  productos: string;
  total: number;
  estado: string;
  createdAt: string;
}

interface ProductoItem {
  nombre: string;
  cantidad: number;
  precio: number;
  precioTotal?: number;
}

interface Notificacion {
  mostrar: boolean;
  mensaje: string;
  tipo: 'exito' | 'error';
}

export default function PedidosAdmin() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [cargando, setCargando] = useState(true);
  const [filtroEstado, setFiltroEstado] = useState('todos');
  const [notificacion, setNotificacion] = useState<Notificacion>({
    mostrar: false,
    mensaje: '',
    tipo: 'exito'
  });

  const mostrarNotificacion = (mensaje: string, tipo: 'exito' | 'error' = 'exito') => {
    setNotificacion({ mostrar: true, mensaje, tipo });
    setTimeout(() => {
      setNotificacion(prev => ({ ...prev, mostrar: false }));
    }, 3000);
  };

  useEffect(() => {
    async function cargarPedidos() {
      try {
        const respuesta = await fetch('/api/pedidos');
        if (respuesta.ok) {
          const datos = await respuesta.json();
          setPedidos(datos);
        }
      } catch (error) {
        console.error('Error al cargar pedidos:', error);
      } finally {
        setCargando(false);
      }
    }
    cargarPedidos();
  }, []);

  const cambiarEstado = async (id: string, nuevoEstado: string) => {
    try {
      const respuesta = await fetch(`/api/pedidos?id=${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: nuevoEstado })
      });

      if (respuesta.ok) {
        setPedidos(prev => prev.map(p => 
          p.id === id ? { ...p, estado: nuevoEstado } : p
        ));
        mostrarNotificacion('Estado actualizado correctamente');
      } else {
        mostrarNotificacion('Error al actualizar estado', 'error');
      }
    } catch (error) {
      console.error('Error al cambiar estado:', error);
      mostrarNotificacion('Error de conexión', 'error');
    }
  };

  const eliminarPedido = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este pedido? Esta acción no se puede deshacer.')) return;

    try {
      const respuesta = await fetch(`/api/pedidos?id=${id}`, { method: 'DELETE' });
      if (respuesta.ok) {
        setPedidos(prev => prev.filter(p => p.id !== id));
        mostrarNotificacion('Pedido eliminado correctamente');
      } else {
        mostrarNotificacion('Error al eliminar', 'error');
      }
    } catch (error) {
      console.error('Error al eliminar:', error);
      mostrarNotificacion('Error de conexión', 'error');
    }
  };

  const pedidosFiltrados = filtroEstado === 'todos' 
    ? pedidos 
    : pedidos.filter(p => p.estado === filtroEstado);

  const obtenerProductosDesglose = (productosJson: string) => {
    try {
      const productos = JSON.parse(productosJson);
      // Aseguramos que sea un array
      const lista = Array.isArray(productos) ? productos : [];
      return (
        <div className="space-y-1">
          {lista.map((p: ProductoItem, i: number) => (
            <div key={i} className="text-xs border-b border-gray-100 last:border-0 pb-1 last:pb-0">
              <span className="font-bold">{p.nombre}</span> x {p.cantidad} <br/>
              <span className="text-gray-500">S/. {(p.precio * p.cantidad).toFixed(2)}</span>
            </div>
          ))}
        </div>
      );
    } catch {
      return <div className="text-xs text-gray-400 italic">Datos del pedido no disponibles</div>;
    }
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'pendiente': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'completado': return 'bg-green-50 text-green-700 border-green-200';
      case 'cancelado': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-marron-logo p-6 sm:p-12 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado con Navegación */}
        <div className="mb-8">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-black tracking-tight">Panel de Pedidos</h1>
                <p className="text-sm text-marron-logo/60">Gestiona los pedidos y datos de tus clientes</p>
              </div>
              <div className="flex gap-3">
                <Link 
                  href="/admin"
                  className="inline-flex items-center justify-center bg-gray-100 text-gray-700 font-bold px-5 py-3 rounded-xl hover:bg-gray-200 transition-all text-sm cursor-pointer"
                >
                  📦 Productos
                </Link>
                <Link 
                  href="/admin/nuevo"
                  className="inline-flex items-center justify-center bg-marron-logo text-white font-bold px-5 py-3 rounded-xl hover:bg-marron-logo/90 transition-all text-sm shadow-sm cursor-pointer"
                >
                  ➕ Nuevo Producto
                </Link>
              </div>
            </div>
          </div>

          {/* Filtros de Estado */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-wrap gap-2">
            {['todos', 'pendiente', 'completado', 'cancelado'].map((estado) => (
              <button
                key={estado}
                onClick={() => setFiltroEstado(estado)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors capitalize ${
                  filtroEstado === estado 
                    ? 'bg-amber-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {estado} ({estado === 'todos' ? pedidos.length : pedidos.filter(p => p.estado === estado).length})
              </button>
            ))}
          </div>
        </div>

        {/* Tabla de Pedidos */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-bold text-lg">Detalle de Pedidos ({pedidosFiltrados.length})</h2>
          </div>

          {cargando ? (
            <div className="text-center py-12">
              <p className="text-sm italic animate-pulse">Cargando pedidos desde la base de datos...</p>
            </div>
          ) : pedidosFiltrados.length === 0 ? (
            <div className="text-center py-12 px-4">
              <p className="text-gray-400 text-sm mb-2">No hay pedidos con este estado.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/70 border-b border-gray-100 text-xs font-bold uppercase tracking-wider text-marron-logo/50">
                    <th className="py-4 px-4">Cliente</th>
                    <th className="py-4 px-4">Contacto</th>
                    <th className="py-4 px-4">Dirección de Envío</th>
                    <th className="py-4 px-4 w-64">Detalle del Pedido</th>
                    <th className="py-4 px-4 text-right">Total</th>
                    <th className="py-4 px-4">Estado</th>
                    <th className="py-4 px-4">Fecha</th>
                    <th className="py-4 px-4 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {pedidosFiltrados.map((pedido) => (
                    <tr key={pedido.id} className="hover:bg-gray-50/40 transition-colors">
                      <td className="py-4 px-4">
                        <div className="font-bold text-base">{pedido.nombre} {pedido.apellidos}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-xs font-semibold">{pedido.email}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{pedido.telefono}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-xs">{pedido.direccion}</div>
                        {pedido.ciudad && <div className="text-xs text-gray-500 mt-0.5">{pedido.ciudad}</div>}
                      </td>
                      <td className="py-4 px-4 max-w-xs">
                        <div className="text-xs space-y-2">
                          {obtenerProductosDesglose(pedido.productos)}
                        </div>
                      </td>
                      <td className="py-4 px-4 font-extrabold text-right text-base">
                        S/. {pedido.total.toFixed(2)}
                      </td>
                      <td className="py-4 px-4">
                        <select
                          value={pedido.estado}
                          onChange={(e) => cambiarEstado(pedido.id, e.target.value)}
                          className={`text-xs font-bold px-3 py-1.5 rounded-full border cursor-pointer outline-none focus:ring-2 focus:ring-amber-200 ${getEstadoColor(pedido.estado)}`}
                        >
                          <option value="pendiente">Pendiente</option>
                          <option value="completado">Completado</option>
                          <option value="cancelado">Cancelado</option>
                        </select>
                      </td>
                      <td className="py-4 px-4 text-xs text-gray-500">
                        {new Date(pedido.createdAt).toLocaleDateString('es-PE', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button
                          onClick={() => eliminarPedido(pedido.id)}
                          className="bg-red-50 text-red-600 hover:bg-red-100 text-xs font-bold px-3 py-1.5 rounded-xl transition-colors cursor-pointer shadow-sm border border-red-200/30"
                        >
                          🗑️ Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Notificación */}
      {notificacion.mostrar && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-lg border border-gray-100/50 transition-all duration-300 ${
          notificacion.tipo === 'exito' 
            ? 'bg-amber-50 text-amber-900 border-l-4 border-l-amber-600' 
            : 'bg-red-50 text-red-900 border-l-4 border-l-red-600'
        }`}>
          <span className="text-base">{notificacion.tipo === 'exito' ? '✨' : '⚠️'}</span>
          <p className="text-xs font-bold tracking-tight">{notificacion.mensaje}</p>
        </div>
      )}
    </main>
  );
}