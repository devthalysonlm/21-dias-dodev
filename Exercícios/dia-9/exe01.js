
let condicao = true
ano = 2023


do {
    //CONHECENDO O USUÁRIO
    let nome = prompt('Digite o seu nome:')
    let idade = parseInt(prompt('Digite a sua idade:'))
    let peso = Number(prompt('Digite o seu peso:'))
    let altura = Number(prompt('Digite a sua altura:'))
    let profissao = prompt('Qual sua profissão?')
    console.log(`--------INFORMAÇÕES--------`)
    console.log(`Nome:${nome}, idade:${idade}, peso:${peso}, altura:${altura}, profissão:${profissao}`)
    if (idade > 18){
        console.log('Está liberado para tomar geladas!')
    } else {
        console.log('Sem gelada para você!')
    }
    console.log(`Você tem ${idade * 12 } meses de vida!`) // Aqui temos os meses 12 meses igual a 1 ano 
    console.log(`Você tem ${idade * 48 } semanas de vida!`) // um mes é igual a 4 semanas e 12 meses igual a 48 semanas
    console.log(`Você tem ${idade * 365} dias de vida!`) // 365 dias do ano mostra quantos dias de vida a pessoa tem

    //CALCULANDO IMC 
    console.log('-----CALCULANDO SEU IMC-----')
    const imc = peso / (altura * altura)
    if(imc < 18.5){
        console.log(`Ano de nascimento: ${ano - idade}, imc: ${imc.toFixed(1)}`)
        console.log('Magreza!! Você está abaixo do peso!')
    } else if ( imc < 24.9){
        console.log(`Ano de nascimento:${ano - idade}, imc: ${imc.toFixed(1)}`)
        console.log('Normal!! Você está no peso ideal!')
    } else if(  imc < 30){
        console.log(`Ano de nascimento: ${ano - idade}, imc: ${imc.toFixed(1)}`)
        console.log('Sobrepeso!! Você está acima do peso!')
    } else {
        console.log(`Ano de nascimento: ${ano - idade}, imc: ${imc.toFixed(1)}`)
        console.log('Obesidade! Você está com obesidade, tome cuidado!')
    }

    //EXIBINDO TODOS OS ANOS DE NASCIMENTO
    console.log('-----EXIBINDO TODOS OS SEUS ANOS DE VIDA-----')
    let anoNascimento = ano - idade
    conte = 0
    for (let contador = anoNascimento; contador <= ano; contador++) {
        console.log(`${contador} - ${conte++} anos de idade`)
   
    }
    
    let opcao = prompt('Deseja inseir novas informações? (s/n)')
    if(opcao == 's'){
        condicao = true
    } else {
        condicao = false
        console.log('Programa encerrado!!')
    }
} while (condicao );





