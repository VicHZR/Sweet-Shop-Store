-- CreateTable
CREATE TABLE "CierreSemanal" (
    "id" TEXT NOT NULL,
    "numeroSemana" INTEGER NOT NULL,
    "mesAnio" TEXT NOT NULL,
    "totalVentas" DOUBLE PRECISION NOT NULL,
    "numCierres" INTEGER NOT NULL,
    "cierresJson" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'abierta',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CierreSemanal_pkey" PRIMARY KEY ("id")
);
