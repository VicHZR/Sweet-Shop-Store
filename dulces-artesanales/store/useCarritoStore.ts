import { create } from 'zustand';

// Definimos la interfaz del producto en el carrito
export interface ItemCarrito {
  id: string;
  nombre: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

// Estructura para el parámetro de entrada del dulce base
export interface DulceBase {
  id: string;
  nombre: string;
  precio: number;
  imagen: string;
}

interface CarritoState {
  items: ItemCarrito[];
  agregarProducto: (producto: DulceBase) => void;
  removerProducto: (id: string) => void;
  actualizarCantidad: (id: string, cantidad: number) => void;
  vaciarCarrito: () => void;
  obtenerTotal: () => number;
  obtenerConteoItems: () => number;
}

export const useCarritoStore = create<CarritoState>((set, get) => ({
  items: [],

  agregarProducto: (producto) => set((state) => {
    const itemExistente = state.items.find(item => item.id === producto.id);
    
    if (itemExistente) {
      return {
        items: state.items.map(item =>
          item.id === producto.id ? { ...item, max: true, cantidad: item.cantidad + 1 } : item
        ),
      };
    }

    return {
      items: [...state.items, {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
        cantidad: 1
      }],
    };
  }),

  removerProducto: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),

  actualizarCantidad: (id, cantidad) => set((state) => ({
    items: state.items.map(item => 
      item.id === id ? { ...item, cantidad: Math.max(1, cantidad) } : item
    )
  })),

  vaciarCarrito: () => set({ items: [] }),

  obtenerTotal: () => {
    return get().items.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  },

  obtenerConteoItems: () => {
    return get().items.reduce((conteo, item) => conteo + item.cantidad, 0);
  }
}));
