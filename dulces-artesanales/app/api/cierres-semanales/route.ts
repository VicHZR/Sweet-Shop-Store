import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

interface ModelosCrudDinamicos {
  findMany: (args?: { orderBy?: Record<string, 'asc' | 'desc'> }) => Promise<unknown[]>;
  create: (args: { data: Record<string, unknown> }) => Promise<unknown>;
  findFirst: (args?: Record<string, unknown>) => Promise<unknown>;
}

interface ServidorPrismaDinamico {
  [key: string]: unknown;
}

interface RegistroCierreDiario {
  id: string;
  totalVentas: number;
  numPedidos: number;
  fecha?: string;
  createdAt: string;
}

export async function GET() {
  try {
    const dbDinamica = prisma as unknown as ServidorPrismaDinamico;
    
    
    const modeloCierreSemanal = 
      dbDinamica.cierreSemanal || 
      dbDinamica.cierresemanal;
    
    if (!modeloCierreSemanal) {
      console.warn("⚠️ El modelo CierreSemanal no se encuentra expuesto en el cliente de Prisma actual. Retornando arreglo vacío.");
      return NextResponse.json([]);
    }

    const cierresSemanales = await (modeloCierreSemanal as ModelosCrudDinamicos).findMany({
      orderBy: { numeroSemana: 'asc' }
    });
    
    return NextResponse.json(cierresSemanales);
  } catch (error: unknown) {
    const errorMensaje = error instanceof Error ? error.message : "Error desconocido";
    console.error('❌ ERROR EN GET /api/cierres-semanales:', errorMensaje);
    return NextResponse.json({ error: 'Error al recuperar el historial semanal' }, { status: 500 });
  }
}
export async function POST(request: Request) {
  try {
    const datosCuerpo = await request.json() as { semanaNumero?: number };
    const numeroSemanaSolicitada = datosCuerpo.semanaNumero;

    if (!numeroSemanaSolicitada || numeroSemanaSolicitada < 1 || numeroSemanaSolicitada > 4) {
      return NextResponse.json({ error: 'Número de semana inválido (Debe ser de 1 a 4)' }, { status: 400 });
    }

    const dbDinamica = prisma as unknown as ServidorPrismaDinamico;
    
    
    const modeloCierreDiario = dbDinamica.cierreDiario as ModelosCrudDinamicos;

    if (!modeloCierreDiario) {
      return NextResponse.json({ error: 'El modelo CierreDiario no está inicializado en el servidor.' }, { status: 500 });
    }

    const cierresDiariosLibres = await modeloCierreDiario.findMany() as RegistroCierreDiario[];

    if (cierresDiariosLibres.length === 0) {
      return NextResponse.json({ 
        error: 'No hay cierres diarios acumulados para empaquetar en esta semana.' 
      }, { status: 400 });
    }

    const sumaTotalVentasSemana = cierresDiariosLibres.reduce((sum, c) => sum + c.totalVentas, 0);
    const sumaTotalPedidosSemana = cierresDiariosLibres.reduce((sum, c) => sum + c.numPedidos, 0);
    const cadenaJsonRespaldos = JSON.stringify(cierresDiariosLibres);

    
    const fechaActual = new Date();
    const mesFormateado = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const anioFormateado = fechaActual.getFullYear();
    const cadenaMesAnioStr = `${mesFormateado}-${anioFormateado}`;
    const resultadoCierreSemanal = await prisma.$transaction(async (tx) => {
      const txDinamica = tx as unknown as ServidorPrismaDinamico;
      
    
      const txModeloCierreSemanal = (txDinamica.cierreSemanal || txDinamica.cierresemanal) as ModelosCrudDinamicos;
      const txModeloCierreDiario = txDinamica.cierreDiario as { deleteMany: () => Promise<unknown> };

      const nuevoRegistroSemanal = await txModeloCierreSemanal.create({
        data: {
          numeroSemana: numeroSemanaSolicitada,
          mesAnio: cadenaMesAnioStr,
          totalVentas: sumaTotalVentasSemana,
          numPedidos: sumaTotalPedidosSemana,
          cierresJson: cadenaJsonRespaldos,
          cerradoMan: true
        }
      });

      
      await txModeloCierreDiario.deleteMany();

      return nuevoRegistroSemanal;
    });

    return NextResponse.json(resultadoCierreSemanal, { status: 201 });
  } catch (error: unknown) {
    const errorMensaje = error instanceof Error ? error.message : "Error desconocido";
    console.error('❌ ERROR EN POST /api/cierres-semanales:', errorMensaje);
    return NextResponse.json({ error: 'Error interno de servidor al empaquetar la semana' }, { status: 500 });
  }
}
