
let numberOne = Number(prompt('Digite um número:'))
let numberTwo = Number(prompt('Digite um segundo número:'))
let opcao = Number(prompt('Digite qual operação deseja realizar com esses números: 1: +, 2: -, 3: *, 4: /'))
switch(opcao){
    case 1:
        console.log('Você escolheu a opção 1:')
        console.log(`${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`)
        break;
    case 2:
        console.log('Você escolheu a opção 2:')
        console.log(`${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`)
        break;
    case 3:
        console.log('Você escolheu a opção 3:')
        console.log(`${numberOne} * ${numberTwo} = ${numberOne * numberTwo}`)
        break;
    case 4:
        console.log('Você escolheu a opção 4:')
        console.log(`${numberOne} / ${numberTwo} = ${numberOne / numberTwo}`)
        break;
    default:
        console.log('Opção inválida, tente novamente!')
        break;
}      
