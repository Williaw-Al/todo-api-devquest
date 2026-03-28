/*
  Warnings:

  - Made the column `done` on table `todos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "todos" ALTER COLUMN "done" SET NOT NULL,
ALTER COLUMN "done" DROP DEFAULT;
