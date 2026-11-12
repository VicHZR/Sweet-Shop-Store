/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

interface EstructuraCierreDiario {
  totalVentas: number;
  numPedidos: number;
  fecha: string;
}

// GET: Recuperar las carpetas mensuales mediante SQL Puro
export async function GET() {
  try {
    const mensuales: unknown[] = await prisma.$queryRaw`
      SELECT * FROM "CierreMensual" ORDER BY "createdAt" DESC
    `;
    return NextResponse.json(mensuales);
  } catch (error) {
    console.error('❌ ERROR EN GET /api/cierres-mensuales:', error);
    return NextResponse.json({ error: 'Fallo al recuperar históricos mensuales' }, { status: 500 });
  }
}

// POST: Consolidar el mes e inyectar los datos directamente en PostgreSQL
export async function POST() {
  try {
    // 1. Descargar los cierres diarios acumulados de forma segura mediante SQL Puro
    const cierresDiariosRaw: any[] = await prisma.$queryRaw`
      SELECT * FROM "CierreDiario"
    `;

    if (!cierresDiariosRaw || cierresDiariosRaw.length === 0) {
      return NextResponse.json(
        { error: 'No existen registros de cierres diarios activos para procesar un cierre de mes.' }, 
        { status: 400 }
      );
    }

    const cierresDiarios: EstructuraCierreDiario[] = cierresDiariosRaw.map((c) => ({
      totalVentas: Number(c.totalVentas || 0),
      numPedidos: Number(c.numPedidos || 0),
      fecha: c.fecha ? new Date(c.fecha).toISOString() : new Date().toISOString()
    }));

    const totalVentas = cierresDiarios.reduce((sum, c) => sum + c.totalVentas, 0);
    const numCierres = cierresDiarios.length;
    const cierresJson = JSON.stringify(cierresDiarios);

    const ahora = new Date();
    const mesAnio = `${String(ahora.getMonth() + 1).padStart(2, '0')}-${ahora.getFullYear()}`;
    const uuidNuevo = crypto.randomUUID();

    // 2. Transacción de SQL Nativo limpia homogeneizada sin conversiones forzadas de UUID
    await prisma.$transaction(async (tx) => {
      await tx.$executeRawUnsafe(`
        INSERT INTO "CierreMensual" ("id", "mesAnio", "totalVentas", "numCierres", "cierresJson", "createdAt")
        VALUES ($1, $2, $3, $4, $5, $6)
      `, uuidNuevo, mesAnio, totalVentas, numCierres, cierresJson, ahora);

      await tx.$executeRawUnsafe(`
        DELETE FROM "CierreDiario"
      `);

      await tx.$executeRawUnsafe(`
        UPDATE "CierreSemanal"
        SET "cerradoMan" = false,
            "totalVentas" = 0,
            "numPedidos" = 0,
            "cierresJson" = '[]'
      `);
    });

    return NextResponse.json({ mensaje: 'Cierre mensual consolidado y semanas liberadas con éxito' }, { status: 201 });
  } catch (error) {
    console.error('❌ ERROR CRÍTICO EN POST /api/cierres-mensuales:', error);
    return NextResponse.json({ error: 'Fallo estructural interno en PostgreSQL al registrar la carpeta mensual.' }, { status: 500 });
  }
}
