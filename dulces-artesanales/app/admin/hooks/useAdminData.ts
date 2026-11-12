/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useCallback } from 'react';
import { Dulce, Pedido } from '../page';
import { CierreMensual } from '../components/TablaMensuales';
import { Oferta } from '../components/GestionOfertas';
import { CierreSemanal } from '../components/TablaSemanales';

export const useAdminData = () => {
  const [pestanaActiva, setPestanaActiva] = useState<'productos' | 'pedidos' | 'diarias' | 'semanales' | 'mensuales' | 'ofertas'>('productos');
  const [dulces, setDulces] = useState<Dulce[]>([]);
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [pedidosDiarios, setPedidosDiarios] = useState<Pedido[]>([]);
  const [semanas, setSemanas] = useState<CierreSemanal[]>([]);
  const [mensuales, setMensuales] = useState<CierreMensual[]>([]);
  const [ofertas, setOfertas] = useState<Oferta[]>([]);
  
  const [notificacion, setNotificacion] = useState<{ mensaje: string; tipo: 'exito' | 'error' } | null>(null);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dulceAEditar, setDulceAEditar] = useState<Dulce | null>(null);
  const [formData, setFormData] = useState<Partial<Dulce>>({
    nombre: '', descripcion: '', precio: 0, stock: 0, imagen: '/placeholder.jpg', categoria: 'Tortas y Pasteles', artesanal: true, ingredientes: []
  });
  
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState<Pedido | null>(null);
  const [isModalPedidoOpen, setIsModalPedidoOpen] = useState(false);

  const [isModalCierreOpen, setIsModalCierreOpen] = useState(false);
  const [passwordAdmin, setPasswordAdmin] = useState("");
  const [passwordCorrecta, setPasswordCorrecta] = useState(false);
  const [ejecutandoCierre, setEjecutandoCierre] = useState(false);

  const [isModalCierreMesOpen, setIsModalCierreMesOpen] = useState(false);
  const [passwordAdminMes, setPasswordAdminMes] = useState("");
  const [passwordMesCorrecta, setPasswordMesCorrecta] = useState(false);
  const [ejecutandoCierreMes, setEjecutandoCierreMes] = useState(false);

  const [isModalEliminarOpen, setIsModalEliminarOpen] = useState(false);
  const [idDulceAEliminar, setIdDulceAEliminar] = useState<string | null>(null);
  const [ejecutandoCierreSemana, setEjecutandoCierreSemana] = useState(false);

  const mostrarNotificacion = useCallback((mensaje: string, tipo: 'exito' | 'error') => {
    setNotificacion({ mensaje, tipo });
    setTimeout(() => setNotificacion(null), 3000);
  }, []);
  const obtenerDatosDelServidor = useCallback(async () => {
    try {
      const [resDulces, resPedidos, resMensuales, resOfertas, resSemanales, resDiarios] = await Promise.all([
        fetch('/api/dulces'),
        fetch('/api/pedidos'),
        fetch('/api/cierres-mensuales'),
        fetch('/api/ofertas'),
        fetch('/api/cierres-semanales'),
        fetch('/api/pedidos?tipo=diarios').catch(() => null)
      ]);

      const dataDulces = resDulces.ok ? await resDulces.json() : [];
      const dataPedidos = resPedidos.ok ? await resPedidos.json() : [];
      const dataMensuales = resMensuales.ok ? await resMensuales.json() : [];
      const dataOfertas = resOfertas.ok ? await resOfertas.json() : [];
      const dataSemanales = resSemanales && resSemanales.ok ? await resSemanales.json() : [];
      const dataDiarios = resDiarios && resDiarios.ok ? await resDiarios.json() : [];

      return { dataDulces, dataPedidos, dataMensuales, dataOfertas, dataSemanales, dataDiarios };
    } catch (err) {
      console.error("Error crítico en la sincronización masiva:", err);
      return null;
    }
  }, []);

  useEffect(() => {
    let activo = true;
    const inicializarComponente = async () => {
      const resultado = await obtenerDatosDelServidor();
      if (activo && resultado) {
        setDulces(resultado.dataDulces);
        setPedidos(resultado.dataPedidos);
        setMensuales(resultado.dataMensuales);
        setOfertas(resultado.dataOfertas);
        setSemanas(resultado.dataSemanales);
        setPedidosDiarios(Array.isArray(resultado.dataDiarios) ? resultado.dataDiarios : resultado.dataPedidos);
        setCargando(false);
      }
    };
    inicializarComponente();

    const intervaloPolling = setInterval(async () => {
      if (!activo) return;
      const resultado = await obtenerDatosDelServidor();
      if (resultado) {
        setPedidos(resultado.dataPedidos);
        setDulces(resultado.dataDulces);
        setMensuales(resultado.dataMensuales);
        setOfertas(resultado.dataOfertas);
        setSemanas(resultado.dataSemanales);
        setPedidosDiarios(Array.isArray(resultado.dataDiarios) ? resultado.dataDiarios : resultado.dataPedidos);
      }
    }, 10000);

    return () => {
      activo = false;
      clearInterval(intervaloPolling);
    };
  }, [obtenerDatosDelServidor]);

  const refrescarTablas = async () => {
    const resultado = await obtenerDatosDelServidor();
    if (resultado) {
      setDulces(resultado.dataDulces);
      setPedidos(resultado.dataPedidos);
      setMensuales(resultado.dataMensuales);
      setOfertas(resultado.dataOfertas);
      setSemanas(resultado.dataSemanales);
      setPedidosDiarios(Array.isArray(resultado.dataDiarios) ? resultado.dataDiarios : resultado.dataPedidos);
    }
  };
  const ejecutarCierreDiarioServer = async () => {
    setEjecutandoCierre(true);
    try {
      const res = await fetch('/api/cierres', { method: 'POST' });
      const datos = await res.json();
      if (!res.ok) throw new Error(datos.error || 'No se pudo procesar el cierre diario');
      mostrarNotificacion('Cierre de caja completado con éxito', 'exito');
      await refrescarTablas();
      setIsModalCierreOpen(false);
      setPasswordAdmin("");
      setPasswordCorrecta(false);
    } catch (error: any) {
      mostrarNotificacion(error.message, 'error');
    } finally {
      setEjecutandoCierre(false);
    }
  };

  const onCerrarSemanaServer = async (semanaNumero: number, passwordVerificacion: string) => {
    if (passwordVerificacion.length < 4) return;
    setEjecutandoCierreSemana(true);
    try {
      const res = await fetch('/api/cierres-semanales', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ semanaNumero })
      });
      const datos = await res.json();
      if (!res.ok) throw new Error(datos.error || 'Fallo al consolidar el archivo semanal');
      mostrarNotificacion(`Semana ${semanaNumero} guardada y empaquetada con éxito`, 'exito');
      await refrescarTablas();
    } catch (error: any) {
      mostrarNotificacion(error.message, 'error');
    } finally {
      setEjecutandoCierreSemana(false);
    }
  };

  const ejecutarCierreMensualServer = async () => {
    setEjecutandoCierreMes(true);
    try {
      const res = await fetch('/api/cierres-mensuales', { method: 'POST' });
      const datos = await res.json();
      if (!res.ok) throw new Error(datos.error || 'No se pudo procesar el cierre mensual');
      mostrarNotificacion('Cierre mensual consolidado y guardado', 'exito');
      await refrescarTablas();
      setIsModalCierreMesOpen(false);
      setPasswordAdminMes("");
      setPasswordMesCorrecta(false);
    } catch (error: any) {
      mostrarNotificacion(error.message, 'error');
    } finally {
      setEjecutandoCierreMes(false);
    }
  };

  const manejarCrearOfertaServer = async (nuevaOferta: Omit<Oferta, 'id'>) => {
    try {
      const res = await fetch('/api/ofertas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevaOferta)
      });
      const datos = await res.json();
      if (!res.ok) throw new Error(datos.error);
      mostrarNotificacion('Oferta publicada con éxito', 'exito');
      await refrescarTablas();
    } catch (error: any) {
      mostrarNotificacion(error.message, 'error');
    }
  };

  const manejarActualizarOfertaServer = async (id: string, ofertaEditada: Omit<Oferta, 'id'>) => {
    try {
      const res = await fetch(`/api/ofertas?id=${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ofertaEditada)
      });
      const datos = await res.json();
      if (!res.ok) throw new Error(datos.error);
      mostrarNotificacion('¡Cambios de promoción guardados con éxito!', 'exito');
      await refrescarTablas();
    } catch (error: any) {
      mostrarNotificacion(error.message, 'error');
    }
  };

  const manejarEliminarOfertaServer = async (id: string) => {
    try {
      const res = await fetch(`/api/ofertas?id=${id}`, { method: 'DELETE' });
      const datos = await res.json();
      if (!res.ok) throw new Error(datos.error);
      mostrarNotificacion('Promoción removida correctamente', 'exito');
      await refrescarTablas();
    } catch (error: any) {
      mostrarNotificacion(error.message, 'error');
    }
  };
  const abrirModal = (dulce: Dulce | null = null) => {
    if (dulce) {
      setDulceAEditar(dulce);
      setFormData(dulce);
    } else {
      setDulceAEditar(null);
      setFormData({
        nombre: '', descripcion: '', precio: 0, stock: 0, imagen: '/placeholder.jpg', categoria: 'Tortas y Pasteles', artesanal: true, ingredientes: []
      });
    }
    setIsModalOpen(true);
  };

  const cerrarModal = () => {
    setIsModalOpen(false);
    setDulceAEditar(null);
  };

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  
  const manejarSubidaArchivoEdicion = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivosSeleccionados = e.target.files;
    if (!archivosSeleccionados || archivosSeleccionados.length === 0) return;

    const file = archivosSeleccionados[0];
    mostrarNotificacion("Subiendo imagen...", "exito");
    const paquete = new FormData();
    paquete.append("file", file);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: paquete });
      const datos = await res.json();
      if (res.ok) setFormData(prev => ({ ...prev, imagen: datos.url }));
    } catch {
      mostrarNotificacion("Error en la subida física del archivo", "error");
    }
  };

  const guardarDulce = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    try {
      const metodo = dulceAEditar ? 'PUT' : 'POST';
      const url = dulceAEditar ? `/api/dulces?id=${dulceAEditar.id}` : '/api/dulces';
      const res = await fetch(url, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Error al procesar el producto');
      mostrarNotificacion(dulceAEditar ? 'Producto actualizado' : 'Producto creado', 'exito');
      await refrescarTablas();
      cerrarModal();
    } catch (error: any) {
      mostrarNotificacion(error.message, 'error');
    }
  };

  const eliminarDulce = (id: string) => {
    setIdDulceAEliminar(id);
    setIsModalEliminarOpen(true);
  };

  const confirmarEliminarDulceServer = async () => {
    if (!idDulceAEliminar) return;
    try {
      const res = await fetch(`/api/dulces?id=${idDulceAEliminar}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('No se pudo borrar el producto');
      mostrarNotificacion('Producto eliminado', 'exito');
      await refrescarTablas();
    } catch (error: any) {
      mostrarNotificacion(error.message, 'error');
    } finally {
      setIsModalEliminarOpen(false);
      setIdDulceAEliminar(null);
    }
  };

  const abrirDetallePedido = (pedido: Pedido) => {
    setPedidoSeleccionado(pedido);
    setIsModalPedidoOpen(true);
  };

  const cambiarEstadoPedido = async (id: string, nuevoEstado: 'pendiente' | 'completado' | 'cancelado') => {
    try {
      const res = await fetch(`/api/pedidos?id=${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: nuevoEstado })
      });
      if (!res.ok) throw new Error('Error actualizando pedido');
      mostrarNotificacion('Estado del pedido actualizado', 'exito');
      await refrescarTablas();
      if (pedidoSeleccionado?.id === id) {
        setPedidoSeleccionado(prev => prev ? { ...prev, estado: nuevoEstado } : null);
      }
    } catch (error: any) {
      mostrarNotificacion(error.message, 'error');
    }
  };

  const manejarValidarPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pass = e.target.value;
    setPasswordAdmin(pass);
    setPasswordCorrecta(pass.length >= 4); 
  };

  const manejarValidarPasswordMes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pass = e.target.value;
    setPasswordAdminMes(pass);
    setPasswordMesCorrecta(pass.length >= 4);
  };

  return {
    pestanaActiva, setPestanaActiva, dulces, setDulces, pedidos, setPedidos,
    pedidosDiarios, semanas, notificacion, busqueda, setBusqueda, cargando, mensuales, ofertas,
    isModalOpen, dulceAEditar, formData, ejecutandoCierreSemana,
    pedidoSeleccionado, setPedidoSeleccionado, isModalPedidoOpen, setIsModalPedidoOpen,
    isModalCierreOpen, setIsModalCierreOpen, passwordAdmin, setPasswordAdmin, passwordCorrecta, setPasswordCorrecta, ejecutandoCierre,
    isModalCierreMesOpen, setIsModalCierreMesOpen, passwordAdminMes, setPasswordAdminMes, passwordMesCorrecta, setPasswordMesCorrecta, ejecutandoCierreMes,
    isModalEliminarOpen, setIsModalEliminarOpen,
    mostrarNotificacion, refrescarTablas, ejecutarCierreDiarioServer, ejecutarCierreMensualServer,
    manejarCrearOfertaServer, manejarActualizarOfertaServer, manejarEliminarOfertaServer,
    abrirModal, cerrarModal, manejarCambio, manejarSubidaArchivoEdicion, guardarDulce, 
    eliminarDulce, confirmarEliminarDulceServer, cambiarEstadoPedido, abrirDetallePedido, 
    manejarValidarPassword, manejarValidarPasswordMes, onCerrarSemanaServer
  };
};
