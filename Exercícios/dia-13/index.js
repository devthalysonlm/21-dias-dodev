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



//Outra Tentativas 
/*
class Aluno{ //Todo nome de classe precida começar com letra maiúscula
    nome 
    idade
    areaAtuacao
    constructor(nome, idade){ //O construtor é um método e ele também pode receber parâmetros, e oque eu colocar como parâmetro será executado. 
        this.nome = nome    //this quer dizer "esse", e quando eu coloca  isso estou acessando o a propriedade e apoós o "=" eu acesso o parâmetro. 
        this.idade = idade
        
    }

    apresentar(){
        console.log(`Meu nome é ${this.nome}\nMinha idade: ${this.idade}\nMinha área de atuação: ${this.areaAtuacao} `) //metodo 
    }
}
//Acessando essa propriedade podemos ter vária informações dentro de uma variável ou melhor dentro de um Objeto.
//Como podemos ver o campo de atuação está em branco, podemos preencher com o seguinte comando:
// alunoUm.areaAtuacao = "Back - end" > dessa forma o campo será preenchido. 
//Para acessar somente o nome do aluno: alunos[0].nome

console.log('=======Cadastro de Aluno=======')
  
let alunos = [];
let continuar = true
let indexAluno = 0;

while(continuar){
    let nome = prompt('Insira o nome do aluno:')
    let idade = parseInt(prompt('Insira a idade do aluno:'))
    let aluno = new Aluno(nome,idade)

    let areaAtucao = prompt('Insira a área de atuação do aluno:')
    aluno.areaAtuacao = areaAtucao;

    alunos[indexAluno] = aluno

    let desejaContinuar = prompt('Insira 1 caso deseja cadastrar um novo aluno:')
    if(desejaContinuar != '1'){
        continuar = false
        continue;
    } else {
        indexAluno ++
    }
}

class Aluno{
    nome 
    idade
    areaAtuacao
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    apresentar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

let alunos = [];
let continuar = true;
let indiceAlunos = 0;

while(continuar){
    let nome = prompt('Digite o seu nome:')
    let idade = prompt('Digite sua idade:')
    let aluno = new Aluno(nome, idade)

    let areaAtuacao = prompt('Digite sua área de atuação:')
    aluno.areaAtuacao = areaAtuacao

    alunos[indiceAlunos] = aluno

    let desejaContinuar = prompt('Digite 1 caso queira cadastrar mais alunos:')
    if(desejaContinuar != '1'){
        continuar = false
        continue;
    } else {
        indiceAlunos++
    }
}

*/





