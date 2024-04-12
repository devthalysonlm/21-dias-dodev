

let numero = []
continuar = true;
posicaoArray = 0;

let quantidade = prompt('Quantos números deseja adicionar? ')
while(posicaoArray < quantidade){
    
    let inserirNumero  = prompt('Insira um número:')
    numero[posicaoArray] = inserirNumero

    
    if(posicaoArray > quantidade){
        continuar = false
        continue;
    }
    posicaoArray++
} 
console.log(`Você escolheu ${quantidade} números para serem adicionado a lista.`)
console.log(`Essa é a minha lista de números: ${numero}`)
console.log(`Essa é minha lista de números reserva: ${numero.reverse()}`)