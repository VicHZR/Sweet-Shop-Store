import 'dotenv/config';
import { defineConfig } from 'prisma/config';

// Usamos tu cadena de conexión directa como respaldo para la CLI en migración
const conexionPostgres = process.env.DATABASE_URL || "postgresql://postgres:prueba@localhost:5433/dulce_diferencia?schema=public";

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: conexionPostgres,
  },
});