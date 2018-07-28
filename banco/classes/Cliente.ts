import { ICliente } from './../interface/ICliente';

export class Cliente implements ICliente {

    nome: string;
    cpf: string;
    email: string;

    constructor(nome?: string, cpf?: string, email?: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
    }
}
