/*
  Warnings:

  - You are about to drop the column `estado` on the `CierreSemanal` table. All the data in the column will be lost.
  - You are about to drop the column `numCierres` on the `CierreSemanal` table. All the data in the column will be lost.
  - You are about to drop the column `numeroSemana` on the `CierreSemanal` table. All the data in the column will be lost.
  - Added the required column `numPedidos` to the `CierreSemanal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numSemana` to the `CierreSemanal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CierreSemanal" DROP COLUMN "estado",
DROP COLUMN "numCierres",
DROP COLUMN "numeroSemana",
ADD COLUMN     "cerradoMan" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "numPedidos" INTEGER NOT NULL,
ADD COLUMN     "numSemana" INTEGER NOT NULL;
