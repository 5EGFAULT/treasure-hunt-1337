-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "picture" TEXT,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hint" TEXT NOT NULL,
    "secret" TEXT NOT NULL,
    "bounty" INTEGER NOT NULL,
    "bouty_reduction_precentage" INTEGER NOT NULL,
    "has_bounty" BOOLEAN NOT NULL DEFAULT true,
    "max_collectors" INTEGER NOT NULL,

    CONSTRAINT "Flag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamFlags" (
    "id" SERIAL NOT NULL,
    "teamId" INTEGER NOT NULL,
    "flagId" INTEGER NOT NULL,
    "collectedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeamFlags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Flag_name_key" ON "Flag"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamFlags" ADD CONSTRAINT "TeamFlags_flagId_fkey" FOREIGN KEY ("flagId") REFERENCES "Flag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
