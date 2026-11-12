import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { ids } = await request.json();

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { error: 'No se enviaron identificadores válidos de semanas comerciales.' }, 
        { status: 400 }
      );
    }

    
    await prisma.$transaction(async (tx) => {
      for (const id of ids) {
        await tx.$executeRaw`
          UPDATE "SemanaComercial"
          SET "estado" = 'CICLO_ACTIVO',
              "totalVentas" = 0,
              "numCierresDiarios" = 0
          WHERE "id" = ${id}
        `;
      }
    });

    return NextResponse.json({ mensaje: 'Las semanas seleccionadas se reiniciaron correctamente.' }, { status: 200 });
  } catch (error) {
    console.error('❌ ERROR EN POST /api/semanas/reiniciar:', error);
    return NextResponse.json({ error: 'Fallo interno al restablecer los ciclos semanales manuales.' }, { status: 500 });
  }
}
