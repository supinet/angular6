import { Cliente } from './classes/Cliente';
import { Conta } from './classes/Conta';

const valorDeposito: number = 100.0;
const valorSaque: number = 50.0;
const valorTransferencia: number = 5.0;

const cliente: Cliente = new Cliente(`Fernando`, `111.222.333-20`,`f@f.com`);
const clienteDestino: Cliente = new Cliente(`João`, `999.999999-20`,`r@r.com`);

let conta: Conta = new Conta(cliente, `1999`, `456`, 100.0);
let contaDestino: Conta = new Conta(cliente, `666`, `777`, 1000.0);

console.log(`saldo inicial da conta ${conta.numero} é:`, conta.getSaldo());
console.log(`saldo inicial da contaDestino ${contaDestino.numero} é:`, contaDestino.getSaldo());

console.log(`depositando na conta origem: ${conta.numero} o valor: ${valorDeposito}`);
conta.depositar(valorDeposito);

console.log(`sacando conta origem: ${conta.numero} o valor: ${valorSaque}`); 
conta.sacar(valorSaque);

console.log(`saldo da conta ${conta.numero} é:`, conta.getSaldo());
console.log(`saldo da contaDestino ${contaDestino.numero} é:`, contaDestino.getSaldo());

console.log(`Transferindo da conta origem ${conta.numero} para conta destino ${contaDestino.numero}`);
conta.transferir(valorTransferencia, contaDestino);

console.log(`saldo da conta de origem: ${conta.numero}`, conta.getSaldo());
console.log(`saldo conta destino: ${contaDestino.numero}`, contaDestino.getSaldo());


