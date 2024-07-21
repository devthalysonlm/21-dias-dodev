
//PEGUNTAR O NOME O SALÁRIO 
var nome 
var salario
function perguntarColaborador(){
    nome = prompt('Informe o seu nome')
    salario = parseFloat(prompt('Informe o seu salário atual:'))
    calcularAumento(salario, nome)
}

//CALCULANDO O AUMENTO

    let porcentagem = 0
    if(salario <= 1500){
        porcentagem = 20
    } else if (salario <= 2000){
        porcentagem = 15
    } else if (salario <= 3000){
        porcentagem = 10
    } else {
        porcentagem = 5
    }

    let novoSalario = salario + (salario * porcentagem / 100)
    
    //EXIBINDO AS INFORMAÇÕES NA TELA
    console.log(`Nome: ${nome}\nSalário: R$${salario}\nTaxa de aumento: ${porcentagem}%\nSalário Atual: R$${novoSalario}`)

    perguntarNovamente()
}

function perguntarNovamente(){
    let novoCadastro = prompt('Digite 1 se deseja inserir novas informações ou 2 para encerrar!')
    if(novoCadastro == 1){
        perguntarColaborador()
    } else {
        console.log('Programa Encerrado!')
    }
}

perguntarColaborador()


 




/*MANEIRA OPCIONAL DE SE FAZER O CALCULO DO AUMENTO
if(salario <= 1500){
    novoSalario = salario + (salario * 20 / 100)
    porcentagem = 20
} else if ( salario <= 2000){
    novoSalario = salario + (salario * 15 / 100)
    porcentagem = 15
} else if (salario <= 3000){
    novoSalario = salario + (salario * 10 / 100)
    porcentagem = 10
} else {
    porcentagem = 5
    novoSalario = salario + (salario * 5 / 100)
}
*/