class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log("O valor do depósito deve ser um valor positivo.");
    }
  }

  retirar(valor) {
    if (valor > 0) {
      if (this.saldo >= valor) {
        this.saldo -= valor;
        console.log(`Retirada de R$${valor.toFixed(2)} realizada com sucesso.`);
      } else {
        console.log('Saldo insuficiente para a retirada.');
      }
    } else {
      console.log('O valor da retirada deve ser positivo.');
    }
  }

  consultarSaldo() {
    console.log(`O saldo atual é: ${this.saldo.toFixed(2)}.`)
  }
}