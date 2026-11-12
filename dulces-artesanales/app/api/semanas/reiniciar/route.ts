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
        if (typeof id === 'string' && id.trim() !== '') {
          await tx.$executeRawUnsafe(`
            UPDATE "CierreSemanal"
            SET "cerradoMan" = false,
                "totalVentas" = 0,
                "numPedidos" = 0,
                "cierresJson" = '[]'
            WHERE "id" = $1
          `, id);
        }
      }
    });

    return NextResponse.json({ mensaje: 'Las semanas seleccionadas se reiniciaron correctamente.' }, { status: 200 });
  } catch (error) {
    console.error('❌ ERROR FINANCIERO EN POST /api/semanas/reiniciar:', error);
    return NextResponse.json({ error: 'Fallo interno en PostgreSQL al restablecer los ciclos semanales.' }, { status: 500 });
  }
}
