import { ICliente } from "./ICliente";

export interface IConta {
    cliente: ICliente;
    agencia: string;
    numero: string;

    sacar(valor: number): boolean;
    depositar(valor: number): void;
    transferir(valor: number, contaDestino: IConta): boolean;
    getSaldo(): number;
}