//var nome = prompt('Digite o seu nome por favor:')
//var idade = prompt('Digite a sua idade por favor:')
//var altura = prompt('Digite a sua altura por favor:')
//var peso = prompt('Digite o seu peso por favor:')
//var peso2 = Math.floor(peso)
//ano = 2023
//nascimento = ano - idade 
//console.log(`Olá ${nome}, você tem ${idade} anos, nasceu em ${nascimento}, tem ${altura} de altura e pesa ${peso2}kg! `)

//Soma  subtração divisão multiplicação modulo
//var  valorUm = 3
//var valorDois = 4

//var soma = valorUm + valorDois 
//var subtracao = valorUm - valorDois 
//var divisao = valorDois / valorUm 
//var multiplicacao = valorUm * valorDois
//var modulo = valorDois % valorUm

//Operadores
//onsole.log('Conta maior: ', (2 + 2) * 5 + 3 )
//console.log('Soma: ', soma)
//console.log('Subtação: ', subtracao)
//console.log('Divisão: ', divisao)
//console.log('Multiplicação: ', multiplicacao)
//console.log('Modulo: ', valorDois % valorUm)
// Aqui podemos em vez de colocar a variável, colocamos diretamente a conta

//Operadores lógicos >>>> true = verdadeiro false = falso 
// Podemos fezer de duas maneiras, ou jogar direto no  console.log 
//Ou podemos guardar em uma variável e depois jogar no console.log
/*console.log(2 == 2)
console.log(2 != 2)
console.log(3 > 2)
console.log(3 < 2)
console.log(3 >= 3)
console.log(3 <= 3)


 se = if 
 senao = else 

if (2 == 2){
    //console.log('Entrou no if')
} else{
    //console.log('Deu ruim')
}

 Estruturas condicionais switch case 



let condicao = prompt('Digite um número:')

switch (condicao) {
    case 'texto':
        console.log('Você digitou')
        console.log('Texto')
        break;
    case '1':
        console.log('Esse é o caso 1!')
        break;
    case '2':
        console.log('Esse é o caso 2!')
        break;
    case '3':
        console.log('Esse é o caso 3!')
        break;
    default:
        console.log('ERRO! Tente novamente...')
        break;
}*/

// laço de REPETIÇÃO 
// Definição da variável -> verifica a condição para rodar -> executa o código -> vai para o laço e muda a variavel
// O ++ adiciona um em uma contagem numérica
/*
for (let contador = 0; contador < 10; contador++) {
    console.log(contador)
    
}*/

// tabuada 

var numeroDaTabuada = prompt('Digite o numero para saber a tabuada:')
for (var contador = 1; contador < 10; contador++) {
    console.log(numeroDaTabuada, 'x', contador, '=', numeroDaTabuada * contador)
    
}
