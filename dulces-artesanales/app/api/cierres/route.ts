import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

type PrismaDinamica = {
  [key: string]: {
    findMany: (args?: unknown) => Promise<unknown[]>;
    create: (args: unknown) => Promise<unknown>;
    deleteMany: (args?: unknown) => Promise<unknown>;
  }
};

export async function GET() {
  try {
    const dbDinamica = prisma as unknown as PrismaDinamica;
    const cierres = await dbDinamica.cierreDiario.findMany({
      orderBy: { fecha: 'desc' }
    });
    return NextResponse.json(cierres);
  } catch (error) {
    console.error('❌ ERROR EN GET /api/cierres:', error);
    return NextResponse.json({ error: 'Error al recuperar el historial' }, { status: 500 });
  }
}

export async function POST() {
  try {
    const pedidosDia = await prisma.pedido.findMany({
      where: { estado: { in: ['pendiente', 'completado'] } }
    });

    if (pedidosDia.length === 0) {
      return NextResponse.json({ error: 'No hay pedidos activos registrados en la base de datos para realizar un cierre hoy.' }, { status: 400 });
    }

    const totalVentas = pedidosDia.reduce((sum, p) => sum + p.total, 0);
    const numPedidos = pedidosDia.length;
    const pedidosJson = JSON.stringify(pedidosDia);

    const cierre = await prisma.$transaction(async (tx) => {
      const txDinamica = tx as unknown as PrismaDinamica;

      const nuevoCierre = await txDinamica.cierreDiario.create({
        data: {
          totalVentas,
          numPedidos,
          pedidosJson
        }
      });

      await tx.pedido.deleteMany();
      return nuevoCierre;
    });

    return NextResponse.json(cierre, { status: 201 });
  } catch (error) {
    console.error('❌ ERROR EN POST /api/cierres:', error);
    return NextResponse.json({ error: 'Error interno en el servidor al procesar el cierre de caja.' }, { status: 500 });
  }
}
