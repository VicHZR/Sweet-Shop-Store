import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/db';


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


export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    
    console.log("📥 DATOS RECIBIDOS DEL FRONTEND (POST):", body);

    const { nombre, descripcion, precio, categoria, imagen, artesanal, ingredientes } = body;

    
    const nuevoDulce = await prisma.dulce.create({
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

    return NextResponse.json(nuevoDulce, { status: 201 });
  } catch (error) {
  
    console.error("❌ ERROR DETALLADO AL CREAR DULCE:", error);

    return NextResponse.json(
      { error: 'Error al crear el dulce', detalle: String(error) }, 
      { status: 500 }
    );
  }
}


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


export async function PUT(request: Request) {
  try {
    const body = await request.json();
    
    
    console.log("📥 DATOS RECIBIDOS DEL FRONTEND (PUT):", body);

    const { id, nombre, descripcion, precio, categoria, imagen, artesanal, ingredientes } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID del producto requerido para actualizar' }, { status: 400 });
    }

    
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
