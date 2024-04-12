
 let nome = prompt('Digite o seu nome:')
 let idade = Number(prompt('Digite a sua idade:'))
 let cnh = prompt('Possui CNH ?')
 let carro = prompt('Possui algum veiculo ?')
 if(idade < 18 || cnh === 'Não'){
    console.log(`${nome} você não pode dirigir!`)
 } else if(idade >= 18 && cnh === 'Sim' && carro === 'Não'){
    console.log(`${nome}, você pode dirigir mas não tem carro!`)
 } else if( idade >= 18 && cnh === 'Sim' && carro === 'Sim'){
    console.log(`${nome}, você será o motorista!`)
 }