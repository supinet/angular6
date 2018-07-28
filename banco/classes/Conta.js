"use strict";
exports.__esModule = true;
var Conta = /** @class */ (function () {
    function Conta(cliente, agencia, numero, saldoInicial) {
        this.cliente = cliente;
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = saldoInicial;
    }
    Conta.prototype.sacar = function (valor) {
        if (this.getSaldo() < valor) {
            return false;
        }
        else {
            this.saldo -= valor;
            return true;
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    Conta.prototype.transferir = function (valor, contaDestino) {
        if (this.getSaldo() < valor) {
            return false;
        }
        else {
            this.saldo -= valor;
            contaDestino.saldo += valor;
            return true;
        }
    };
    Conta.prototype.getSaldo = function () {
        return this.saldo == undefined ? 0.00 : this.saldo;
    };
    return Conta;
}());
exports.Conta = Conta;
