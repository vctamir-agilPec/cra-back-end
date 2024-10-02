import { Request, Response } from 'express';
import prisma from '../database/prisma';
import { createToken, hashPassword, verifyPassword } from '../functions/auth';
import { AuthHandler } from '../Handlers/Auth';
import { Usuario } from '../model/ususario';

class AuthController {
    async login(req: Request, res: Response) {
        try {
            const usuario = await prisma.usuario.findFirstOrThrow({
                where: {
                    email: req.body.email
                }
            })
            if (verifyPassword(req.body.senha, usuario.senha)) {
                res.status(200).send({
                    message: 'Usuário logado com sucesso',
                    nome: usuario.nome,
                    email: usuario.email,

                    token: createToken({ id: usuario.id, email: usuario.email, nome: usuario.nome })
                });
            } else {
                throw new AuthHandler('Usuário ou senha incorretos', "P2025");
            }

        } catch (error) {
            if (error.code === 'P2025') {
                res.status(400).send({ message: "Usuário ou senha incorretos" });
                return;
            }
            res.status(400).send({ message: 'Erro ao efetuar login', error });
        }


    }
    async register(req: Request, res: Response) {
        try {
            const usuario = new Usuario(null, req.body.email, hashPassword(req.body.senha), req.body.nome);
            const user = await prisma.usuario.findFirst({
                where: {
                    email: usuario.email
                }
            })
            if (user) {
                res.status(400).send({ message: 'Usuário já cadastrado' });
                return;
            }
            await prisma.usuario.create({
                data: {
                    email: usuario.email,
                    senha: usuario.senha,
                    nome: usuario.nome,
                    created_at: Date.now(),
                    modified_at: Date.now()
                }
            })
            res.status(201).send({ message: 'Usuário cadastrado com sucesso' });
        } catch (error) {
            res.status(400).send({ message: 'Erro ao cadastrar usuário' });
        }

    }
    async oauth(req: Request, res: Response) {

    }
}

export default AuthController;