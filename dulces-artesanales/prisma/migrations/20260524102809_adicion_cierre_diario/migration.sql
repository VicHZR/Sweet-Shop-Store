-- CreateTable
CREATE TABLE "CierreDiario" (
    "id" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalVentas" DOUBLE PRECISION NOT NULL,
    "numPedidos" INTEGER NOT NULL,
    "pedidosJson" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CierreDiario_pkey" PRIMARY KEY ("id")
);
