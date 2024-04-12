

let alunos = [];
let continuar = true;
let contador = 0;


while(continuar){
    let aluno = prompt('Digite o seu nome:')
    let idade = parseInt(prompt('Digite a sua idade:'))
    let areaAtuacao = prompt('Digite a sua área de atuação:')
    alunos[contador] = aluno

    let continuarCadastro = prompt('Digite 1 caso queira cadastrar mais alunos...')
    if(continuarCadastro != '1'){
        continuar = false;
        continue;

    } else {
        contador++
    }
}

console.log(`Quantidade de alunos cadastrador: ${alunos}`)