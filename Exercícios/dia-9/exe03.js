
ano = 2023
let idade = 0
let anoNascimento = ano - idade
let conte = 0
let continuar = false



do {
    const idade = prompt('Informe sua idade:')
    for (let contador = anoNascimento ; contador < ano + 1; contador++) 
    console.log(`${contador} - ${conte++} anos de idade`)
    opcao = prompt('Deseja continuar? Digite 1 para sim ou 2 para não')
    if (opcao === '1'){
        continuar = true 
    } else if (opcao === '2'){
        continuar = false
    } else{
        console.log('Opção inválida! Programa encerrado!')
        continuar = false
    }
} while (continuar);






console.log(`${contador} - ${conte++} anos de idade`) 

//Agora temos que unificar esses três exercícios