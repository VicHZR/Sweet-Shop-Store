import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';


export async function GET() {
  try {
    const ofertas: unknown[] = await prisma.$queryRaw`
      SELECT * FROM "BannerOferta" ORDER BY "createdAt" DESC
    `;
    return NextResponse.json(ofertas);
  } catch (error) {
    console.error('❌ ERROR EN GET /api/ofertas:', error);
    return NextResponse.json({ error: 'Fallo al recuperar promociones' }, { status: 500 });
  }
}


export async function POST(request: NextRequest) {
  try {
    const cuerpo = await request.json();
    const { imagen, descripcion, vigencia, metodosPago } = cuerpo;

    if (!vigencia || vigencia === "") {
      return NextResponse.json({ error: 'Por favor, selecciona una Fecha de Vigencia válida antes de publicar.' }, { status: 400 });
    }

    if (!imagen || imagen === "/placeholder.jpg" || !descripcion.trim()) {
      return NextResponse.json({ error: 'Faltan campos obligatorios: ingresa una descripción y sube una imagen.' }, { status: 400 });
    }

    const fechaVigencia = new Date(vigencia);
    if (isNaN(fechaVigencia.getTime())) {
      return NextResponse.json({ error: 'El formato de la fecha de vigencia es inválido.' }, { status: 400 });
    }

    const uuidNuevo = crypto.randomUUID();
    const ahora = new Date();
    const arraySql = metodosPago && metodosPago.length > 0 ? metodosPago : [];


    await prisma.$executeRaw`
      INSERT INTO "BannerOferta" ("id", "imagen", "descripcion", "vigencia", "metodosPago", "createdAt")
      VALUES (${uuidNuevo}, ${imagen}, ${descripcion}, ${fechaVigencia}, ${arraySql}, ${ahora})
    `;

    return NextResponse.json({ mensaje: 'Oferta guardada correctamente' }, { status: 201 });
  } catch (error) {
    console.error('❌ ERROR EN POST /api/ofertas:', error);
    return NextResponse.json({ error: 'Fallo de Humanidad interno al registrar la oferta en la base de datos.' }, { status: 500 });
  }
}


export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const cuerpo = await request.json();
    const { imagen, descripcion, vigencia, metodosPago } = cuerpo;

    if (!id || !vigencia || !imagen || !descripcion.trim()) {
      return NextResponse.json({ error: 'Faltan datos obligatorios para actualizar la oferta.' }, { status: 400 });
    }

    const fechaVigencia = new Date(vigencia);
    const arraySql = metodosPago && metodosPago.length > 0 ? metodosPago : [];

    await prisma.$executeRaw`
      UPDATE "BannerOferta" 
      SET "imagen" = ${imagen}, "descripcion" = ${descripcion}, "vigencia" = ${fechaVigencia}, "metodosPago" = ${arraySql}
      WHERE "id" = ${id}
    `;

    return NextResponse.json({ mensaje: 'Oferta actualizada correctamente' });
  } catch (error) {
    console.error('❌ ERROR EN PUT /api/ofertas:', error);
    return NextResponse.json({ error: 'Fallo interno al actualizar la oferta.' }, { status: 500 });
  }
}


export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Se requiere el ID de la oferta' }, { status: 400 });
    }

    
    await prisma.$executeRaw`
      DELETE FROM "BannerOferta" WHERE "id" = ${id}
    `;

    return NextResponse.json({ mensaje: 'Oferta eliminada correctamente' });
  } catch (error) {
    console.error('❌ ERROR EN DELETE /api/ofertas:', error);
    return NextResponse.json({ error: 'Fallo al intentar eliminar la promoción' }, { status: 500 });
  }
}