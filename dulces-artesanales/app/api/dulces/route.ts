import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/db';

// GET: Obtener todos los dulces de la base de datos real
export async function GET() {
  try {
    const dulces = await prisma.dulce.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(dulces);
  } catch (error) {
    console.error("❌ ERROR AL OBTENER DULCES:", error);
    return NextResponse.json(
      { error: 'Error al obtener los dulces', detalle: String(error) }, 
      { status: 500 }
    );
  }
}

// POST: Crear un nuevo dulce desde el panel de administración
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Diagnóstico: Ver exactamente qué datos envía el formulario del frontend
    console.log("📥 DATOS RECIBIDOS DEL FRONTEND (POST):", body);

    const { nombre, descripcion, precio, categoria, imagen, artesanal, ingredientes } = body;

    // Normalización de tipos para cumplir estrictamente con Prisma y PostgreSQL
    const nuevoDulce = await prisma.dulce.create({
      data: {
        nombre,
        descripcion,
        precio: parseFloat(precio) || 0, // Convierte a número flotante de forma segura
        categoria,
        imagen,
        artesanal: typeof artesanal === 'boolean' ? artesanal : artesanal === 'true', // Asegura booleano
        // Si ingredientes viene como string separado por comas, lo convierte a un arreglo (String[])
        ingredientes: Array.isArray(ingredientes) 
          ? ingredientes 
          : typeof ingredientes === 'string' 
            ? ingredientes.split(',').map((i: string) => i.trim()).filter(Boolean)
            : []
      }
    });

    return NextResponse.json(nuevoDulce, { status: 201 });
  } catch (error) {
    // Diagnóstico: Imprime el motivo exacto del fallo en la terminal de VS Code
    console.error("❌ ERROR DETALLADO AL CREAR DULCE:", error);

    return NextResponse.json(
      { error: 'Error al crear el dulce', detalle: String(error) }, 
      { status: 500 }
    );
  }
}

// DELETE: Eliminar un dulce específico por su ID único
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID del producto requerido' }, { status: 400 });
    }

    await prisma.dulce.delete({
      where: { id }
    });

    return NextResponse.json({ mensaje: 'Dulce eliminado con éxito' }, { status: 200 });
  } catch (error) {
    console.error("❌ ERROR AL ELIMINAR DULCE:", error);
    return NextResponse.json(
      { error: 'Error al intentar eliminar el dulce', detalle: String(error) }, 
      { status: 500 }
    );
  }
}

// PUT: Actualizar los datos de un dulce existente en la base de datos
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    
    // Diagnóstico: Ver exactamente qué cambios envía el panel de edición
    console.log("📥 DATOS RECIBIDOS DEL FRONTEND (PUT):", body);

    const { id, nombre, descripcion, precio, categoria, imagen, artesanal, ingredientes } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID del producto requerido para actualizar' }, { status: 400 });
    }

    // Ejecuta la actualización mapeando correctamente los tipos de datos requeridos por PostgreSQL
    const dulceActualizado = await prisma.dulce.update({
      where: { id },
      data: {
        nombre,
        descripcion,
        precio: parseFloat(precio) || 0,
        categoria,
        imagen,
        artesanal: typeof artesanal === 'boolean' ? artesanal : artesanal === 'true',
        ingredientes: Array.isArray(ingredientes) 
          ? ingredientes 
          : typeof ingredientes === 'string' 
            ? ingredientes.split(',').map((i: string) => i.trim()).filter(Boolean)
            : []
      }
    });

    return NextResponse.json(dulceActualizado, { status: 200 });
  } catch (error) {
    console.error("❌ ERROR DETALLADO AL ACTUALIZAR DULCE:", error);
    return NextResponse.json(
      { error: 'Error al intentar actualizar el dulce', detalle: String(error) }, 
      { status: 500 }
    );
  }
}
