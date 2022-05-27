/*
  Warnings:

  - You are about to drop the column `score` on the `TeamFlags` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "score" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "TeamFlags" DROP COLUMN "score";
