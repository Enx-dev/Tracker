/*
  Warnings:

  - The values [MEDUIM] on the enum `Priority` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Priority_new" AS ENUM ('HIGH', 'MEDIUM', 'LOW');
ALTER TABLE "Tasks" ALTER COLUMN "priority" DROP DEFAULT;
ALTER TABLE "Tasks" ALTER COLUMN "priority" TYPE "Priority_new" USING ("priority"::text::"Priority_new");
ALTER TYPE "Priority" RENAME TO "Priority_old";
ALTER TYPE "Priority_new" RENAME TO "Priority";
DROP TYPE "Priority_old";
ALTER TABLE "Tasks" ALTER COLUMN "priority" SET DEFAULT 'LOW';
COMMIT;

-- AlterTable
ALTER TABLE "Tasks" ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT;
DROP SEQUENCE "Tasks_id_seq";

-- CreateTable
CREATE TABLE "Labels" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Labels_id_key" ON "Labels"("id");
