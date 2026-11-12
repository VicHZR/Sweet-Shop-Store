export interface Dulce {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: 'chocolates' | 'galletas' | 'pasteles' | 'tradicionales';
  imagen: string; 
  artesanal: boolean;
  ingredientes: string[]; 
}

export const LISTA_DULCES: Dulce[] = [
  {
    id: '1',
    nombre: 'Cupcakes',
    descripcion: 'Hechas a mano con cacao al 70%, decoradas con lluvia de frutos secos.',
    precio: 15.00,
    categoria: 'chocolates',
    imagen: '/Cupcakes.jpg', 
    artesanal: true,
    ingredientes: ['Cacao orgánico 70%', 'Crema de leche premium', 'Pizca de sal marina', 'Almendras picadas']
  },
  {
    id: '2',
    nombre: 'Macaron',
    descripcion: 'Horneadas artesanalmente, endulzadas con miel orgánica de abeja.',
    precio: 12.50,
    categoria: 'galletas',
    imagen: '/macaron_12.jpg', 
    artesanal: true,
    ingredientes: ['Avena integral en hojuelas', 'Miel pura de abeja', 'Aceite de coco', 'Esencia de vainilla natural']
  },
  {
    id: '3',
    nombre: 'Tiramisu',
    descripcion: 'Dulce clásico preparado en olla de bronce siguiendo la receta familiar.',
    precio: 18.00,
    categoria: 'tradicionales',
    imagen: '/Tiramisu.jpg', 
    artesanal: true,
    ingredientes: ['Yemas de huevo frescas', 'Leche evaporada', 'Azúcar blanca', 'Agua de azahar']
  },
  {
    id: '4',
    nombre: 'Tarta de Manzana',
    descripcion: 'Dulce clásico preparado en olla de bronce siguiendo la receta familiar.',
    precio: 18.00,
    categoria: 'pasteles',
    imagen: '/tarta_manzana.jpg', 
    artesanal: true,
    ingredientes: ['Yemas de huevo frescas', 'Leche evaporada', 'Azúcar blanca', 'Agua de azahar']
  },
  {
    id: '5',
    nombre: 'Cheesecake Fresa',
    descripcion: 'Dulce clásico preparado en olla de bronce siguiendo la receta familiar.',
    precio: 18.00,
    categoria: 'pasteles',
    imagen: '/Cheesecake_fresa.jpg', 
    artesanal: true,
    ingredientes: ['Yemas de huevo frescas', 'Leche evaporada', 'Azúcar blanca', 'Agua de azahar']
  },
  {
    id: '6',
    nombre: 'Tarta de Chocolate',
    descripcion: 'Dulce clásico preparado en olla de bronce siguiendo la receta familiar.',
    precio: 18.00,
    categoria: 'pasteles',
    imagen: '/Tarta_Chocolate.jpg', 
    artesanal: true,
    ingredientes: ['Yemas de huevo frescas', 'Leche evaporada', 'Azúcar blanca', 'Agua de azahar']
  }

];
