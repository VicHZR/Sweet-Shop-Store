/*
  Warnings:

  - You are about to drop the column `numSemana` on the `CierreSemanal` table. All the data in the column will be lost.
  - Added the required column `numeroSemana` to the `CierreSemanal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CierreSemanal" DROP COLUMN "numSemana",
ADD COLUMN     "numeroSemana" INTEGER NOT NULL;
