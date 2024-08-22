function ContaBancaria (titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;

  this.depositar = function (valor) {
    this.saldo += valor
    console.log(`Saldo de R$${valor} depositado com sucesso.`)
  },

  this.retirar = function (valor) {
    if (this.saldo > valor){
      this.saldo -= valor
      console.log(`Saldo de R$${valor} retirado com sucesso.`)
    } else {
      console.log (`Saldo é insuficiente.`)
    }
  },

  this.consultarSaldo = function () {
    console.log (`\nTitular: 4{this.titular}\nSaldo: ${this.saldo}`)
  }
};

const luisadeAlmeida = new ContaBancaria("luisadeAlmeida", 20.00);

luisadeAlmeida.consultarSaldo()
luisadeAlmeida.depositar(10)
luisadeAlmeida.retirar(5)