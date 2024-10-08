/*
  Warnings:

  - You are about to drop the `pessoa` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "sequential" BIGSERIAL NOT NULL;

-- DropTable
DROP TABLE "pessoa";

-- CreateTable
CREATE TABLE "associado" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo_pessoa" "tipo_pessoa_enum" NOT NULL,
    "insc_estadual" TEXT,
    "razao_social" TEXT,
    "sexo" "sexo_enum",
    "data_nasc" BIGINT,
    "cpf" VARCHAR(14),
    "cnpj" VARCHAR(18),
    "rg" VARCHAR(18),
    "data_exped" BIGINT,
    "orgao_exped" TEXT,
    "cod_prop" TEXT,
    "enderecos" JSONB NOT NULL,
    "contatos" JSONB NOT NULL,
    "assinatura" TEXT,
    "observacoes" TEXT,
    "data_replica" BIGINT,
    "created_at" BIGINT NOT NULL,
    "modified_at" BIGINT NOT NULL,
    "sequencial" BIGINT NOT NULL,

    CONSTRAINT "associado_pkey" PRIMARY KEY ("id")
);
