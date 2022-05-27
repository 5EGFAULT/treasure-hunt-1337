/*
  Warnings:

  - You are about to drop the column `bounty_reduction_percent` on the `Flag` table. All the data in the column will be lost.
  - You are about to drop the column `has_bounty` on the `Flag` table. All the data in the column will be lost.
  - You are about to drop the column `picture` on the `Flag` table. All the data in the column will be lost.
  - You are about to drop the column `placeholder` on the `Flag` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[teamId,flagId]` on the table `TeamFlags` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `score` to the `TeamFlags` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Flag" DROP COLUMN "bounty_reduction_percent",
DROP COLUMN "has_bounty",
DROP COLUMN "picture",
DROP COLUMN "placeholder",
ADD COLUMN     "is_expired" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "is_road" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "place" TEXT,
ALTER COLUMN "hint" DROP NOT NULL;

-- AlterTable
ALTER TABLE "TeamFlags" ADD COLUMN     "score" INTEGER NOT NULL,
ALTER COLUMN "collectedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email";

-- CreateIndex
CREATE UNIQUE INDEX "TeamFlags_teamId_flagId_key" ON "TeamFlags"("teamId", "flagId");

-- AddForeignKey
ALTER TABLE "TeamFlags" ADD CONSTRAINT "TeamFlags_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
