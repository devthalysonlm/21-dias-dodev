let saldo = 1000;
let  maiorValorInserido = 0;
let somaDosValoresInseridos = 0;
let totalDeTransacoes = 0; 
let continuar = false
do {
    const nome = prompt('Digite o seu nome:')
    const cpf = prompt('Digite o seu CPF:')
    const valor = Number(prompt('Digite o valor da transação:'))
    const operacao = prompt('Digite q operação que deseja realizar: S / D')
    if (valor< 0 ){
        console.log('Inválido, transação não executada!')
    } else if( operacao == 'S' && valor > saldo) {
        console.log('Saldo insuficiente, transação não executada!')
    } else if(operacao == 'S'){
        console.log(`Olá ${nome} portador do CPF: ${cpf}, seu saldo é de R$${saldo}`);
        saldo -= valor;
        totalDeTransacoes++;
        somaDosValoresInseridos += valor;
        if( valor > maiorValorInserido){
            maiorValorInserido = valor;
        }
        console.log(`Operação realizada com sucesso. Seu saldo atual agora é R$${saldo}`)
    } else {
        console.log(`Olá ${nome}, portador do CPF: ${cpf}, seu saldo é de R$${saldo}`);
        saldo += valor;
        totalDeTransacoes++;
        somaDosValoresInseridos += valor;
        if( valor > maiorValorInserido){
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual agora é R$${saldo}`)
    }
    const opcao = prompt('Deseja continuar? Digite 1 para sim e 2  para não:');
    if (opcao === '1'){
        continuar = true
    } else if (opcao === '2'){
        continuar = false
    } else {
        console.log('Opcão inválida!')
        continuar = false
    }

} while (continuar);
console.log(`Seu saldo final: R$${saldo}`)
console.log(`Maior valor inserido: R$${maiorValorInserido}`)
console.log(`Média dos valores inseridos: R$${somaDosValoresInseridos/totalDeTransacoes}`)