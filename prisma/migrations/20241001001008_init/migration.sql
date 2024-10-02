-- CreateEnum
CREATE TYPE "sexo_enum" AS ENUM ('masculino', 'feminino', 'outro');

-- CreateEnum
CREATE TYPE "tipo_pessoa_enum" AS ENUM ('fisica', 'juridica');

-- CreateEnum
CREATE TYPE "situacao_enum" AS ENUM ('vivo', 'morto');

-- CreateTable
CREATE TABLE "pessoa" (
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
    "programas" JSONB NOT NULL,
    "assinatura" TEXT,
    "observacoes" TEXT,
    "data_replica" BIGINT,
    "created_at" BIGINT NOT NULL,
    "modified_at" BIGINT NOT NULL,
    "sequencial" BIGINT NOT NULL,

    CONSTRAINT "pessoa_pkey" PRIMARY KEY ("id")
);
