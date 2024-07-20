class Aluno{
    nome
    idade
    areaAtuacao
    
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    //Quando estamos dentro da classe não precisamos usar a palavra function
    apresentar(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e atuo como ${this.areaAtuacao} e o nome do meu pai é ${this.nomePai}`)
    }
}

console.log('--------Cadastrado de Alunos---------------')

let alunos = [];
let arrayAlunos = 0;
let continuar = true
while(continuar){
    let nome = prompt('Informe o seu nome:')
    let idade = parseInt(prompt('Informe sua idade:'))
    let aluno = new Aluno(nome,idade)

    let areaAtuacao = prompt('informe a sua area de atuação:')
    aluno.areaAtuacao = areaAtuacao;

    let nomePai = prompt('Informe o nome do seu Pai:')
    aluno.nomePai = nomePai;

    alunos[arrayAlunos] = aluno;
    let desejaContinuar = prompt('Informe 1 para continuar ou 2 para encerrar!')
    if(desejaContinuar != 1){
        continuar = false
        continue;
    } else {
        arrayAlunos++
    }

        
}





