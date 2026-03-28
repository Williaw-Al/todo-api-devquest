-- CreateTable
CREATE TABLE "todos" (
    "id" SERIAL NOT NULL,
    "done" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);
