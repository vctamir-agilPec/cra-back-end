-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "created_at" BIGINT NOT NULL,
    "modified_at" BIGINT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);
