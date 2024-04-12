//CALCULANDO IMC 
console.log('-----CALCULANDO SEU IMC-----')
let idade = Number(prompt('Informe sua idade:'))
let ano = Number(prompt('Ano de nascimento:'))
let peso = Number(prompt('Informe o seu peso:'))
let altura = Number(prompt('Altura:'))
const imc = peso / (altura * altura)
if(imc < 18.5){
    console.log(`Ano de nascimento: ${ano - idade}, imc: ${imc.toFixed(1)}`)
    console.log('Magreza!! Você está abaixo do peso!')
} else if (imc > 18.5 && imc < 24.9){
    console.log(`Ano de nascimento:${ano - idade}, imc: ${imc.toFixed(1)}`)
    console.log('Normal!! Você está no peso ideal!')
} else if( imc > 24.9 && imc < 30){
    console.log(`Ano de nascimento: ${ano - idade}, imc: ${imc.toFixed(1)}`)
    console.log('Sobrepeso!! Você está acima do peso!')
} else {
    console.log(`Ano de nascimento: ${ano - idade}, imc: ${imc.toFixed(1)}`)
    console.log('Obesidade! Você está com obesidade, tome cuidado!')
}