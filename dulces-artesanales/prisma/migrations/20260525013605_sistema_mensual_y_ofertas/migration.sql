-- CreateTable
CREATE TABLE "CierreMensual" (
    "id" TEXT NOT NULL,
    "mesAnio" TEXT NOT NULL,
    "totalVentas" DOUBLE PRECISION NOT NULL,
    "numCierres" INTEGER NOT NULL,
    "cierresJson" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CierreMensual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BannerOferta" (
    "id" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "vigencia" TIMESTAMP(3) NOT NULL,
    "metodosPago" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BannerOferta_pkey" PRIMARY KEY ("id")
);
