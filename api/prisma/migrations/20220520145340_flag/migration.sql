/*
  Warnings:

  - Added the required column `picture` to the `Flag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flag" ADD COLUMN     "picture" TEXT NOT NULL;
