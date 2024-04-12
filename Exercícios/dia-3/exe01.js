/*1 - Crie um sistema que peça para o seu usuário as seguintes informações: nome, idade, altura e peso. */

let nome = prompt('Digite o seu nome por favor:')
let idade = parseInt(prompt('Digite a sua idade por favor:'))
let altura = prompt('Digite a sua altura por favor:')
let peso = Number(prompt('Digite o seu peso por favor:'))
let anoDeNascimento = 2023 - idade
let imc =  peso / (altura * altura)
let imcFormatado = imc.toFixed(2)
console.log(`Olá ${nome}, você tem ${idade} anos, nasceu em ${anoDeNascimento}, tem ${altura} de altura, pesa ${peso}kg e seu IMC é ${imcFormatado} Kg/m2`)


