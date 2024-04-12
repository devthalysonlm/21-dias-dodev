let confirmar = 'n'
while (confirmar != 's') {
    let nome = prompt('Informe o seu nome:')
    let idade = prompt('Informe sua idade:')
    let salario = Number(prompt('Informe seu salário atual:'))
    console.log(`Nome: ${nome}\nIdade: ${idade}\nSalário Atual: ${salario}`) 
    confirmar = prompt('Deseja  confirmar as informações?')
    
}

console.log('Essa é sua previsão salárial!  Aguarde!!')




