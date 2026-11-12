import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient, Prisma } from './generated/client';

// 🏛️ SOLUCIÓN DEFINITIVA: Si Turbopack vacía process.env, usamos tu cadena de conexión directa como respaldo
const conexionPostgres = process.env.DATABASE_URL || "postgresql://postgres:prueba@localhost:5433/dulce_diferencia?schema=public";

// Inicializamos el Pool físico pasando la cadena de conexión garantizada como String
const pool = new Pool({ connectionString: conexionPostgres });
const adapter = new PrismaPg(pool);

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// Usamos el tipo de configuración oficial expuesto por tu cliente de Prisma
const clientOptions: Prisma.PrismaClientOptions = {
  adapter: adapter,
};

export const prisma =
  globalForPrisma.prisma || 
  new PrismaClient(clientOptions);

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
