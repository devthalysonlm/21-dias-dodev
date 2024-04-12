//Conhecendo seu usuário
var anoatual = 2023

var nome = prompt('Digite o seu nome:')
var idade = prompt('Digite  a sua idade:')
var AnodeNascimento = anoatual - idade 

console.log(`Olá ${nome} você tem ${idade} anos,`)

if (idade % 2 == 0){
    console.log('que é um número par ')
} else {
    console.log('que é um número impar')
}

console.log(`e nasceu no ano: ${AnodeNascimento}`)

if (AnodeNascimento % 2 == 0){
    console.log('que é um número par')
} else{
    console.log('que é um número impar')
}

if (idade >= 18){
    console.log('Está liberado o consumo de bebidas alcoólicas')
} else {
    console.log('Você ainda não pode consumir bebidas alcoólicas')
}
