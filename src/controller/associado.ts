import { Associado } from '@cra/interfaces';
import { InputJsonValue } from '@prisma/client/runtime/library';
import { Request, Response } from 'express';
import prisma from '../database/prisma';

export class AssociadoController {
    private associadoData: Associado = {} as Associado;

    constructor();
    constructor(data: Associado);
    constructor(data?: Associado) {
        if (data)
            this.associadoData = data;
    }

    async create(req: Request, res: Response) {
        try {
            //if have ID do a update insted 
            if (this.associadoData.id) {
                req.params.id = this.associadoData.id;
                await this.update(req, res);
                return;
            }
            const newAssociado = await prisma.associado.create({
                data: {
                    id: this.associadoData.id,
                    nome: this.associadoData.nome,
                    tipo_pessoa: this.associadoData.tipo_pessoa,
                    insc_estadual: this.associadoData.insc_estadual,
                    razao_social: this.associadoData.razao_social,
                    sexo: this.associadoData.sexo,
                    data_nasc: this.associadoData.data_nasc,
                    cpf: this.associadoData.cpf,
                    cnpj: this.associadoData.cnpj,
                    rg: this.associadoData.rg,
                    data_exped: this.associadoData.data_exped,
                    orgao_exped: this.associadoData.orgao_exped,
                    cod_prop: this.associadoData.cod_prop,
                    enderecos: this.associadoData.enderecos as InputJsonValue,
                    contatos: this.associadoData.contatos as InputJsonValue,
                    assinatura: this.associadoData.assinatura,
                    observacoes: this.associadoData.observacoes,
                    data_replica: this.associadoData.data_replica,
                    created_at: BigInt(Date.now()),
                    modified_at: BigInt(Date.now()),
                    sequencial: BigInt(0)
                }
            });
            const response = {
                ...newAssociado,
                created_at: newAssociado.created_at.toString(),
                modified_at: newAssociado.modified_at.toString(),
                sequencial: newAssociado.sequencial.toString(),
                data_nasc: newAssociado.data_nasc ? newAssociado.data_nasc.toString() : null,
                data_exped: newAssociado.data_exped ? newAssociado.data_exped.toString() : null,
                data_replica: newAssociado.data_replica ? newAssociado.data_replica.toString() : null,
            };
            res.status(201).json(response);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error);
                res.status(400).json({ error: 'An error occurred while creating the Associado.', message: error.message });
            }

        }
    }
    async get(req: Request, res: Response) {
        try {
            const associados = await prisma.associado.findMany();
            const response = associados.map(associado => {
                return {
                    ...associado,
                    created_at: associado.created_at.toString(),
                    modified_at: associado.modified_at.toString(),
                    sequencial: associado.sequencial.toString(),
                    data_nasc: associado.data_nasc ? associado.data_nasc.toString() : null,
                    data_exped: associado.data_exped ? associado.data_exped.toString() : null,
                    data_replica: associado.data_replica ? associado.data_replica.toString() : null,
                };
            });
            res.status(200).json(response);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error);
                res.status(400).json({ error: 'An error occurred while getting the Associados.', message: error.message });
            }
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const associado = await prisma.associado.findUnique({
                where: {
                    id: id
                }
            });
            if (associado) {
                const response = {
                    ...associado,
                    created_at: associado.created_at.toString(),
                    modified_at: associado.modified_at.toString(),
                    sequencial: associado.sequencial.toString(),
                    data_nasc: associado.data_nasc ? associado.data_nasc.toString() : null,
                    data_exped: associado.data_exped ? associado.data_exped.toString() : null,
                    data_replica: associado.data_replica ? associado.data_replica.toString() : null,
                };
                res.status(200).json(response);
            } else {
                res.status(404).json({ error: 'Associado not found' });
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error);
                res.status(400).json({ error: 'An error occurred while getting the Associado.', message: error.message });
            }
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updatedAssociado = await prisma.associado.update({
                where: {
                    id: id
                },
                data: {
                    nome: this.associadoData.nome,
                    tipo_pessoa: this.associadoData.tipo_pessoa,
                    insc_estadual: this.associadoData.insc_estadual,
                    razao_social: this.associadoData.razao_social,
                    sexo: this.associadoData.sexo,
                    data_nasc: this.associadoData.data_nasc,
                    cpf: this.associadoData.cpf,
                    cnpj: this.associadoData.cnpj,
                    rg: this.associadoData.rg,
                    data_exped: this.associadoData.data_exped,
                    orgao_exped: this.associadoData.orgao_exped,
                    cod_prop: this.associadoData.cod_prop,
                    enderecos: this.associadoData.enderecos as InputJsonValue,
                    contatos: this.associadoData.contatos as InputJsonValue,
                    assinatura: this.associadoData.assinatura,
                    observacoes: this.associadoData.observacoes,
                    data_replica: this.associadoData.data_replica,
                    modified_at: BigInt(Date.now())
                }
            });
            const response = {
                ...updatedAssociado,
                created_at: updatedAssociado.created_at.toString(),
                modified_at: updatedAssociado.modified_at.toString(),
                sequencial: updatedAssociado.sequencial.toString(),
                data_nasc: updatedAssociado.data_nasc ? updatedAssociado.data_nasc.toString() : null,
                data_exped: updatedAssociado.data_exped ? updatedAssociado.data_exped.toString() : null,
                data_replica: updatedAssociado.data_replica ? updatedAssociado.data_replica.toString() : null,
            };
            res.status(200).json(response);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error);
                res.status(400).json({ error: 'An error occurred while updating the Associado.', message: error });
            }
        }
    }
}
