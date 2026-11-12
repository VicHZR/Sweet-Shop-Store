"use client";

import React, { useState } from 'react';
import { CalendarRange, ShieldCheck, Lock, Loader2, FileText, CheckCircle2, AlertCircle, Eye, FileSpreadsheet, RefreshCw, CheckSquare, Square } from 'lucide-react';

export interface CierreSemanal {
  id: string;
  numeroSemana: number;
  mesAnio: string;
  totalVentas: number;
  numPedidos: number;
  cierresJson: string;
  cerradoMan: boolean;
  createdAt: string | Date;
}

interface PedidoInterno {
  id: string;
  nombre: string;
  apellidos: string;
  total: number;
  telefono: string;
  direccion: string;
  productos: string;
}

interface CierreDiarioRespaldo {
  id: string;
  fecha?: string;
  createdAt: string;
  totalVentas: number;
  numPedidos: number;
  pedidosJson: string;
}

interface TablaSemanalesProps {
  semanas: CierreSemanal[];
  ejecutandoCierreSemana: boolean;
  onCerrarSemanaServer: (semanaNumero: number, password: string) => Promise<void>;
  mostrarNotificacion: (mensaje: string, tipo: 'exito' | 'error') => void;
}

export const TablaSemanales: React.FC<TablaSemanalesProps> = ({
  semanas,
  ejecutandoCierreSemana,
  onCerrarSemanaServer,
  mostrarNotificacion
}) => {
  const [isModalClaveOpen, setIsModalClaveOpen] = useState(false);
  const [semanaSeleccionada, setSemanaSeleccionada] = useState<number | null>(null);
  const [passwordAdmin, setPasswordAdmin] = useState("");
  const [detalleCierres, setDetalleCierres] = useState<CierreDiarioRespaldo[] | null>(null);
  const [pedidosModal, setPedidosModal] = useState<PedidoInterno[] | null>(null);

  const [semanasSeleccionadas, setSemanasSeleccionadas] = useState<number[]>([]);
  const [procesandoReinicio, setProcesandoReinicio] = useState(false);
  const [isModalConfirmacionOpen, setIsModalConfirmacionOpen] = useState(false);

  const abrirModalCierre = (semanaNumero: number) => {
    setSemanaSeleccionada(semanaNumero);
    setIsModalClaveOpen(true);
  };

  const handleToggleSeleccionCheckbox = (numeroSemana: number) => {
    setSemanasSeleccionadas((prev) =>
      prev.includes(numeroSemana)
        ? prev.filter((n) => n !== numeroSemana)
        : [...prev, numeroSemana]
    );
  };
  const procesarCierreSemana = async () => {
    if (semanaSeleccionada === null) return;
    if (passwordAdmin.length < 4) {
      mostrarNotificacion("La contraseña de seguridad debe tener mínimo 4 caracteres", "error");
      return;
    }
    await onCerrarSemanaServer(semanaSeleccionada, passwordAdmin);
    setIsModalClaveOpen(false);
    setPasswordAdmin("");
    setSemanaSeleccionada(null);
  };

  const verDesgloseSemana = (semana: CierreSemanal) => {
    try {
      const datos = JSON.parse(semana.cierresJson) as CierreDiarioRespaldo[];
      setDetalleCierres(Array.isArray(datos) ? datos : []);
    } catch {
      setDetalleCierres([]);
    }
  };

  const verDetallePedidosDia = (cierre: CierreDiarioRespaldo) => {
    try {
      const lista = JSON.parse(cierre.pedidosJson) as PedidoInterno[];
      setPedidosModal(Array.isArray(lista) ? lista : []);
    } catch {
      setPedidosModal([]);
      mostrarNotificacion("No se encontraron órdenes desglosables para este cierre diario", "error");
    }
  };

  const ejecutarReinicioBackend = async () => {
    setIsModalConfirmacionOpen(false);
    setProcesandoReinicio(true);
    try {
      const idsAEnviar = semanas
        .filter((s) => semanasSeleccionadas.includes(s.numeroSemana))
        .map((s) => s.id);

      if (idsAEnviar.length === 0) {
        mostrarNotificacion("Las semanas seleccionadas no están guardadas en la base de datos.", "error");
        setProcesandoReinicio(false);
        return;
      }

      const respuesta = await fetch('/api/semanas/reiniciar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: idsAEnviar }),
      });

      if (respuesta.ok) {
        setSemanasSeleccionadas([]);
        mostrarNotificacion("Semanas reiniciadas con éxito.", "exito");
        window.location.reload();
      } else {
        const errData = await respuesta.json();
        mostrarNotificacion(errData.error || "Error al procesar el reinicio.", "error");
      }
    } catch (error) {
      console.error(error);
      mostrarNotificacion("Error de conexión al procesar el reinicio.", "error");
    } finally {
      setProcesandoReinicio(false);
    }
  };

  const exportarCierreDiarioExcel = (cierre: CierreDiarioRespaldo) => {
    let contenidoCsv = "data:text/csv;charset=utf-8,\uFEFF";
    contenidoCsv += "REPORTE DE CIERRE DIARIO\n";
    contenidoCsv += `FECHA DE CIERRE,${new Date(cierre.fecha || cierre.createdAt).toLocaleDateString()}\n`;
    contenidoCsv += `TOTAL RECAUDADO,S/ ${cierre.totalVentas.toFixed(2)}\n`;
    contenidoCsv += `TOTAL ORDENES,${cierre.numPedidos}\n\n`;
    contenidoCsv += "ID PEDIDO,CLIENTE,TELEFONO,DIRECCION,TOTAL ORDEN\n";

    try {
      const lista = JSON.parse(cierre.pedidosJson) as PedidoInterno[];
      if (Array.isArray(lista)) {
        lista.forEach((p) => {
          contenidoCsv += `"${p.id}","${p.nombre} ${p.apellidos}","${p.telefono}","${p.direccion}","S/ ${p.total.toFixed(2)}"\n`;
        });
      }
    } catch {
      contenidoCsv += '"Sin detalles de órdenes disponibles","","","",""\n';
    }

    const encodedUri = encodeURI(contenidoCsv);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Cierre_Diario_${new Date(cierre.fecha || cierre.createdAt).toLocaleDateString().replace(/\//g, '-')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    mostrarNotificacion("Reporte del día descargado con éxito para Excel", "exito");
  };
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-0.5">
          <h2 className="text-xl font-black text-gray-900 tracking-tight flex items-center gap-2">
            <CalendarRange className="text-amber-600" size={22} />
            Control de Ciclos Semanales (4 Semanas del Mes)
          </h2>
          <p className="text-xs text-gray-500">
            Visualiza el estado comercial. Selecciona los casilleros dentro de las tarjetas para forzar su reinicio manual.
          </p>
        </div>
        <button
          type="button"
          disabled={semanasSeleccionadas.length === 0 || procesandoReinicio}
          onClick={() => setIsModalConfirmacionOpen(true)}
          className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition shadow-xs disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
        >
          <RefreshCw size={14} className={procesandoReinicio ? "animate-spin" : ""} />
          Reiniciar Semanas ({semanasSeleccionadas.length})
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, index) => {
          const numSemana = index + 1;
          const datosSemana = semanas.find(s => s.numeroSemana === numSemana);
          const isChecked = semanasSeleccionadas.includes(numSemana);

          return (
            <div key={numSemana} className={`bg-white rounded-2xl border p-5 shadow-xs flex flex-col justify-between transition ${
              datosSemana?.cerradoMan ? 'border-green-100 bg-green-50/10' : 'border-gray-200 bg-white'
            }`}>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleToggleSeleccionCheckbox(numSemana)}
                      className="text-gray-400 hover:text-amber-600 transition cursor-pointer focus:outline-hidden border-0 bg-transparent p-0 flex items-center justify-center"
                    >
                      {isChecked ? (
                        <CheckSquare size={18} className="text-amber-600" />
                      ) : (
                        <Square size={18} className="text-gray-300" />
                      )}
                    </button>
                    <span className="text-sm font-black text-gray-800">Semana {numSemana}</span>
                  </div>

                  {datosSemana?.cerradoMan ? (
                    <span className="flex items-center gap-1 text-[10px] bg-green-600 text-white font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      <CheckCircle2 size={12} /> Cerrado Interno
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] bg-amber-500 text-white font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      <AlertCircle size={12} /> Ciclo Activo
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-gray-100">
                  <div>
                    <span className="text-gray-400 block">Total Ventas</span>
                    <span className="text-base font-black text-gray-900">S/ {(datosSemana?.totalVentas || 0).toFixed(2)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">N° Cierres Diarios</span>
                    <span className="text-base font-black text-gray-900">{datosSemana?.numPedidos || 0} Días</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <button
                  type="button"
                  disabled={!datosSemana}
                  onClick={() => datosSemana && verDesgloseSemana(datosSemana)}
                  className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition disabled:opacity-40 flex items-center justify-center gap-1 cursor-pointer"
                >
                  <FileText size={14} /> Ver Días
                </button>

                <button
                  type="button"
                  disabled={datosSemana?.cerradoMan || ejecutandoCierreSemana}
                  onClick={() => abrirModalCierre(numSemana)}
                  className="w-full py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-xs transition disabled:opacity-30 cursor-pointer"
                >
                  Forzar Cierre
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {detalleCierres && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
          <div className="flex justify-between items-center border-b border-gray-100 pb-3">
            <h3 className="font-black text-gray-900 text-sm">Desglose de Cierres Diarios Indexados</h3>
            <button 
              type="button" 
              onClick={() => setDetalleCierres(null)} 
              className="text-xs text-red-500 font-bold hover:underline cursor-pointer"
            >
              Ocultar Listado
            </button>
          </div>
          {detalleCierres.length === 0 ? (
            <p className="text-xs text-gray-400 text-center py-4">No hay cierres diarios empaquetados en esta semana todavía.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    <th className="py-2">Fecha Cierre</th>
                    <th className="py-2">Pedidos Consolidados</th>
                    <th className="py-2 text-right">Monto Recaudado</th>
                    <th className="py-2 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-xs">
                  {detalleCierres.map((cierre, i) => (
                    <tr key={i} className="text-gray-700">
                      <td className="py-3 font-medium">{new Date(cierre.fecha || cierre.createdAt).toLocaleDateString()}</td>
                      <td className="py-3">{cierre.numPedidos} Órdenes</td>
                      <td className="py-3 text-right font-black text-gray-900 pr-4">S/ {(cierre.totalVentas).toFixed(2)}</td>
                      <td className="py-3 flex items-center justify-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => verDetallePedidosDia(cierre)}
                          className="p-1.5 bg-gray-50 hover:bg-amber-50 text-gray-600 hover:text-amber-800 rounded-lg transition cursor-pointer"
                          title="Ver Detalle Diario"
                        >
                          <Eye size={14} />
                        </button>
                        <button
                          type="button"
                          onClick={() => exportarCierreDiarioExcel(cierre)}
                          className="p-1.5 bg-gray-50 hover:bg-green-50 text-gray-600 hover:text-green-700 rounded-lg transition cursor-pointer"
                          title="Exportar a Excel"
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
      )}

      {pedidosModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-gray-100 p-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="border-b border-gray-100 pb-2">
              <h3 className="font-black text-gray-900 text-sm">Órdenes Consolidadas de la Jornada</h3>
            </div>
            <div className="divide-y divide-gray-50 max-h-60 overflow-y-auto space-y-2 text-xs">
              {pedidosModal.length === 0 ? (
                <p className="text-gray-400 text-center py-4">No hay desglose disponible.</p>
              ) : (
                pedidosModal.map((p) => (
                  <div key={p.id} className="py-2 flex justify-between items-center text-gray-700">
                    <div>
                      <p className="font-bold text-gray-900">{p.nombre} {p.apellidos}</p>
                      <p className="text-[10px] text-gray-400 font-mono">{p.id.substring(0, 8)}</p>
                    </div>
                    <span className="font-black text-amber-950">S/ {p.total.toFixed(2)}</span>
                  </div>
                ))
              )}
            </div>
            <button
              type="button"
              onClick={() => setPedidosModal(null)}
              className="w-full py-2 bg-gray-900 text-white text-xs font-bold rounded-xl transition cursor-pointer"
            >
              Cerrar Detalle
            </button>
          </div>
        </div>
      )}

      {isModalConfirmacionOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm border border-gray-100 p-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto border border-amber-100">
                <RefreshCw size={22} />
              </div>
              <h3 className="text-base font-black text-gray-900 tracking-tight">¿Confirmar Mantenimiento Manual?</h3>
              <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                Vas a liberar las semanas seleccionadas (<span className="font-bold text-gray-700">{semanasSeleccionadas.join(", ")}</span>). Sus totales volverán a S/ 0.00 de forma inmediata.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button 
                type="button" 
                onClick={() => setIsModalConfirmacionOpen(false)} 
                className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition cursor-pointer"
              >
                Cancelar
              </button>
              <button 
                type="button" 
                onClick={ejecutarReinicioBackend} 
                className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Confirmar Reinicio
              </button>
            </div>
          </div>
        </div>
      )}

      {isModalClaveOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm border border-gray-100 p-6 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto border border-red-100">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-black text-gray-900 tracking-tight">Autorizar Cierre Semana {semanaSeleccionada}</h3>
              <p className="text-xs text-gray-400 max-w-60 mx-auto leading-relaxed">Esta acción forzará el empaquetado de los días transcurridos dentro del archivo semanal. Ingresa la contraseña.</p>
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Contraseña de Seguridad</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="password" 
                  value={passwordAdmin} 
                  onChange={(e) => setPasswordAdmin(e.target.value)} 
                  disabled={ejecutandoCierreSemana} 
                  placeholder="••••••••••••" 
                  className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm font-mono outline-none bg-gray-50/50" 
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button 
                type="button" 
                disabled={ejecutandoCierreSemana} 
                onClick={() => { setIsModalClaveOpen(false); setPasswordAdmin(""); setSemanaSeleccionada(null); }} 
                className="w-full py-2 bg-gray-100 text-gray-700 text-xs font-bold rounded-xl transition cursor-pointer"
              >
                Cancelar
              </button>
              <button 
                type="button" 
                disabled={ejecutandoCierreSemana || passwordAdmin.length < 4} 
                onClick={procesarCierreSemana} 
                className="w-full py-2 bg-red-600 text-white text-xs font-bold rounded-xl shadow-xs transition disabled:opacity-40 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {ejecutandoCierreSemana ? <Loader2 className="animate-spin h-3 w-3" /> : "Confirmar Cierre"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
