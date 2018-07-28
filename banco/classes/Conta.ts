import { IConta } from './../interface/IConta';
import { ICliente } from "../interface/ICliente";

export class Conta implements IConta {

    public cliente: ICliente;
    public agencia: string;
    public numero: string;
    private saldo: number;

    constructor(cliente: ICliente, agencia: string, numero: string, saldoInicial: number) {
        this.cliente = cliente;
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = saldoInicial;
    }

    sacar(valor: number): boolean { 
        if (this.getSaldo() < valor) {
            return false;
        } else {
            this.saldo -= valor;
            return true;
        }
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    transferir(valor: number, contaDestino: Conta): boolean {
        if (this.getSaldo() < valor) {
            return false;
        } else {
            this.saldo -= valor;
            contaDestino.saldo += valor;
            return true;
        }
    }

    getSaldo(): number {
        return this.saldo == undefined ? 0.00 : this.saldo;
    }
}
