export class Usuario {
    id?: number | null;
    email: string;
    senha: string;
    nome: string;
    constructor(id: number | null, email: string, senha: string, nome: string) {
        this.id = id ?? null;
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}
