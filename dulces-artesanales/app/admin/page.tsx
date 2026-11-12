"use client";

import React from 'react';
import { Loader2, ShieldCheck, Lock } from 'lucide-react';

// IMPORTACIÓN DE COMPONENTES CORE Y NUEVOS MÓDULOS DE CONTROL
import { Sidebar } from './components/Sidebar';
import { TablaProductos } from './components/TablaProductos';
import { TablaPedidos } from './components/TablaPedidos';
import { ModalProducto } from './components/ModalProducto';
import { ModalPedido } from './components/ModalPedido';
import { TablaMensuales } from './components/TablaMensuales';
import { GestionOfertas } from './components/GestionOfertas';
import { ModalConfirmacion } from '@/components/ModalConfirmacion';

// NUEVAS VISTAS INTEGRADAS DE CONTROL FINANCIERO SEMANAL
import { TablaDiarias } from './components/TablaDiarias';
import { TablaSemanales } from './components/TablaSemanales';

// SUBMÓDULOS AISLADOS Y CUSTOM HOOK DE LOGICA
import { CabeceraAdmin } from './components/CabeceraAdmin';
import { BarraBusqueda } from './components/BarraBusqueda';
import { useAdminData } from './hooks/useAdminData';

export interface Dulce {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string;
  categoria: string;
  artesanal: boolean;
  ingredientes: string[];
}

export interface Pedido {
  id: string;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  direccion: string;
  ciudad?: string;
  productos: string;
  total: number;
  estado: 'pendiente' | 'completado' | 'cancelado';
  createdAt: string;
}

export default function AdminPage() {
  const {
    pestanaActiva, setPestanaActiva, dulces, pedidos, pedidosDiarios, semanas, notificacion, busqueda, setBusqueda,
    cargando, mensuales, ofertas, isModalOpen, dulceAEditar, formData, ejecutandoCierreSemana,
    pedidoSeleccionado, isModalPedidoOpen, setIsModalPedidoOpen, isModalCierreOpen,
    setIsModalCierreOpen, passwordAdmin, setPasswordAdmin, passwordCorrecta, ejecutandoCierre,
    isModalCierreMesOpen, setIsModalCierreMesOpen, passwordAdminMes, setPasswordAdminMes,
    passwordMesCorrecta, ejecutandoCierreMes, isModalEliminarOpen, setIsModalEliminarOpen,
    mostrarNotificacion, abrirModal, cerrarModal, manejarCambio,
    manejarSubidaArchivoEdicion, guardarDulce, eliminarDulce, confirmarEliminarDulceServer,
    cambiarEstadoPedido, abrirDetallePedido, manejarValidarPassword, ejecutarCierreDiarioServer,
    manejarValidarPasswordMes, ejecutarCierreMensualServer, manejarCrearOfertaServer,
    manejarActualizarOfertaServer, manejarEliminarOfertaServer, refrescarTablas, onCerrarSemanaServer
  } = useAdminData();

  const dulcesFiltrados = dulces.filter(dulce => 
    dulce.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    dulce.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (cargando) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <Loader2 className="animate-spin h-8 w-8 text-amber-600" />
      </div>
    );
  }
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR DE RUTA COMERCIAL */}
      <Sidebar pestanaActiva={pestanaActiva} setPestanaActiva={setPestanaActiva} setBusqueda={setBusqueda} />

      <main className="flex-1 pl-64 p-8">
        {notificacion && (
          <div className={`fixed top-4 right-4 p-4 rounded-xl shadow-xl z-50 font-medium ${
            notificacion.tipo === 'exito' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
          }`}>
            {notificacion.mensaje}
          </div>
        )}

        {/* CABECERA UNIFICADA */}
        <CabeceraAdmin 
          pestanaActiva={pestanaActiva} 
          ejecutandoCierre={ejecutandoCierre} 
          setIsModalCierreOpen={setIsModalCierreOpen} 
          abrirModal={() => abrirModal()} 
        />

        {/* BARRA DE BÚSQUEDA Y FILTRADO */}
        <BarraBusqueda 
          pestanaActiva={pestanaActiva} 
          busqueda={busqueda} 
          setBusqueda={setBusqueda} 
          refrescarTablas={refrescarTablas} 
          mostrarNotificacion={mostrarNotificacion} 
        />
        
        {/* ENRUTADOR MODULAR DE PESTAÑAS ADMINISTRATIVAS */}
        {pestanaActiva === 'productos' && (
          <TablaProductos 
            dulcesFiltrados={dulcesFiltrados} 
            abrirModal={abrirModal} 
            eliminarDulce={eliminarDulce} 
          />
        )}
        
        {pestanaActiva === 'pedidos' && (
          <TablaPedidos 
            pedidos={pedidos} 
            busqueda={busqueda} 
            abrirDetallePedido={abrirDetallePedido} 
          />
        )}

        {pestanaActiva === 'diarias' && (
          <TablaDiarias 
            pedidosDiarios={pedidosDiarios} 
            mostrarNotificacion={mostrarNotificacion} 
          />
        )}

        {pestanaActiva === 'semanales' && (
          <TablaSemanales 
            semanas={semanas} 
            ejecutandoCierreSemana={ejecutandoCierreSemana} 
            onCerrarSemanaServer={onCerrarSemanaServer} 
            mostrarNotificacion={mostrarNotificacion} 
          />
        )}
        
        {pestanaActiva === 'mensuales' && (
          <TablaMensuales 
            mensuales={mensuales} 
            onForzarCierreMes={() => setIsModalCierreMesOpen(true)} 
            ejecutandoCierre={ejecutandoCierreMes} 
          />
        )}
        
        {pestanaActiva === 'ofertas' && (
          <GestionOfertas 
            ofertas={ofertas} 
            onCrearOferta={manejarCrearOfertaServer} 
            onActualizarOferta={manejarActualizarOfertaServer} 
            onEliminarOferta={manejarEliminarOfertaServer} 
            mostrarNotificacion={mostrarNotificacion} 
          />
        )}
      </main>
      {/* COMPONENTES MODULARES DE DIÁLOGO */}
      <ModalProducto 
        isOpen={isModalOpen} 
        dulceAEditar={dulceAEditar} 
        formData={formData} 
        subiendoImagen={false} 
        cerrarModal={cerrarModal} 
        manejarCambio={manejarCambio} 
        manejarSubidaArchivoEdicion={manejarSubidaArchivoEdicion} 
        guardarDulce={guardarDulce} 
      />
      
      <ModalPedido 
        isOpen={isModalPedidoOpen} 
        pedidoSeleccionado={pedidoSeleccionado} 
        setIsModalPedidoOpen={setIsModalPedidoOpen} 
        cambiarEstadoPedido={cambiarEstadoPedido} 
      />

      {/* DIÁLOGO DE SEGURIDAD: AUTENTICACIÓN CIERRE DIARIO */}
      {isModalCierreOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm border border-gray-100 p-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto border border-red-100">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-black text-gray-900 tracking-tight">Confirmar Autorización Diaria</h3>
              <p className="text-xs text-gray-400 max-w-60 mx-auto leading-relaxed">El cierre de caja del día requiere privilegios de seguridad. Ingresa tu contraseña.</p>
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input type="password" value={passwordAdmin} onChange={manejarValidarPassword} disabled={ejecutandoCierre} placeholder="••••••••••••" className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm font-mono outline-none bg-gray-50/50" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button type="button" disabled={ejecutandoCierre} onClick={() => { setIsModalCierreOpen(false); setPasswordAdmin(""); }} className="w-full py-2 bg-gray-100 text-gray-700 text-xs font-bold rounded-xl transition cursor-pointer">Cancelar Acción</button>
              <button type="button" disabled={!passwordCorrecta || ejecutandoCierre} onClick={ejecutarCierreDiarioServer} className="w-full py-2 bg-red-600 text-white text-xs font-bold rounded-xl shadow-xs transition disabled:opacity-40 flex items-center justify-center gap-1.5 cursor-pointer">
                {ejecutandoCierre ? <Loader2 className="animate-spin h-3 w-3" /> : "Confirmar Cierre"}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* DIÁLOGO DE SEGURIDAD: AUTENTICACIÓN CIERRE MENSUAL */}
      {isModalCierreMesOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm border border-gray-100 p-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto border border-red-100"><ShieldCheck size={24} /></div>
              <h3 className="text-lg font-black text-gray-900 tracking-tight">Confirmar Cierre de Mes</h3>
              <p className="text-xs text-gray-400 max-w-60 mx-auto leading-relaxed">Esta acción vaciará el Historial Diario empaquetándolo en Carpetas Mensuales. Ingresa tu clave de autorización.</p>
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Contraseña de Administrador</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input type="password" value={passwordAdminMes} onChange={manejarValidarPasswordMes} disabled={ejecutandoCierreMes} placeholder="••••••••••••" className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm font-mono outline-none bg-gray-50/50" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button type="button" disabled={ejecutandoCierreMes} onClick={() => { setIsModalCierreMesOpen(false); setPasswordAdminMes(""); }} className="w-full py-2 bg-gray-100 text-gray-700 text-xs font-bold rounded-xl transition cursor-pointer">Cancelar Acción</button>
              <button
                type="button"
                disabled={!passwordMesCorrecta || ejecutandoCierreMes}
                onClick={ejecutarCierreMensualServer}
                className="w-full py-2 bg-red-600 text-white text-xs font-bold rounded-xl shadow-xs transition disabled:opacity-40 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {ejecutandoCierreMes ? (
                  <>
                    <Loader2 className="animate-spin h-3 w-3" />
                    Procesando...
                  </>
                ) : (
                  "Confirmar Cierre Mes"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* COMPONENTE DE CONFIRMACIÓN DE ELIMINACIÓN DE PRODUCTOS */}
      <ModalConfirmacion 
        isOpen={isModalEliminarOpen} 
        titulo="¿Eliminar este dulce?" 
        mensaje="Esta acción borrará el producto de forma permanente del catálogo y no se podrá deshacer." 
        textoConfirmar="Eliminar" 
        textoCancelar="Cancelar" 
        onConfirmar={confirmarEliminarDulceServer} 
        onCancelar={() => { setIsModalEliminarOpen(false); }} 
      />
    </div>
  );
}
