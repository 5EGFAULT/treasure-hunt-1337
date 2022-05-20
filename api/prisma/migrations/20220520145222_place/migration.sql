/*
  Warnings:

  - You are about to drop the column `bouty_reduction_precentage` on the `Flag` table. All the data in the column will be lost.
  - Added the required column `bounty_reduction_percent` to the `Flag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flag" DROP COLUMN "bouty_reduction_precentage",
ADD COLUMN     "bounty_reduction_percent" INTEGER NOT NULL;
