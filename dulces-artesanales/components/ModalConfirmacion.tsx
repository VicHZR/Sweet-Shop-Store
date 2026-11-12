"use client";

import React from 'react';

import { AlertTriangle } from 'lucide-react'; 

interface ModalConfirmacionProps {
  isOpen: boolean;
  titulo: string;
  mensaje: string;
  textoConfirmar?: string;
  textoCancelar?: string;
  onConfirmar: () => void;
  onCancelar: () => void;
}

export const ModalConfirmacion: React.FC<ModalConfirmacionProps> = ({
  isOpen,
  titulo,
  mensaje,
  textoConfirmar = "Aceptar",
  textoCancelar = "Cancelar",
  onConfirmar,
  onCancelar
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm border border-gray-100 p-6 space-y-4 animate-in zoom-in-95 duration-200">
        
        {/* Cabecera con Icono de Advertencia Estético */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto border border-amber-100">
            <AlertTriangle size={24} />
          </div>
          <h3 className="text-lg font-black text-gray-900 tracking-tight">
            {titulo}
          </h3>
          <p className="text-xs text-gray-400 max-w-60 mx-auto leading-relaxed">
            {mensaje}
          </p>
        </div>

        {/* Botones de Acción Estilizados */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            type="button"
            onClick={onCancelar}
            className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition-all active:scale-95"
          >
            {textoCancelar}
          </button>
          
          <button
            type="button"
            onClick={onConfirmar}
            className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all active:scale-95"
          >
            {textoConfirmar}
          </button>
        </div>
      </div>
    </div>
  );
};