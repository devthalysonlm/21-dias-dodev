
let nomes = []
let senhas = []


//FUNÇÃO DE ESCOLHA
function escolherOpcao(){
    let opcao = prompt('Escolha uma opçao:\n1 > Cadastro\n2 > Login\n3 > Exluir Login\n4 > Encerrar')
    return opcao 
}

//FUNCAO DE CADASTRO

function cadastrarLogin(){
    nomes.push(prompt('Informe o seu nome:'))
    senhas.push(parseInt(prompt('Informe a sua senha:')))
}

//FUNCAO DE LOGIN

function efetuarLogin(nome, senha){
    if(nomes.includes(nome) && senhas.includes(senha)){
        return true
    } else {
        return false
    }
}


//FUNÇÃO DE EXCLUSAO DE CADASTRO

function excluirCadastro(nome){
    let indice = nomes.indexOf(nome);
    if(nomes == -1){
        nomes.splice(indice,1)
        senhas.splice(indice,1)
        console.log('Cadastro Excluído com sucesso!')
    }  else {
        console.log('Usuário não  encontrado!')
    }
}

let continuar = true;
while (continuar){
    let opcao = escolherOpcao()
    switch(opcao){
        case '1':
            cadastrarLogin()
            alert('Cadastro efetuado com sucesso!')
        break;
        case '2':
            
            let nome = prompt('Informe o seu usuário:')
            let senha = prompt('Informe sua senha:') 
            let login = efetuarLogin(nome,senha)
            if(login){
                alert('logado com sucesso!')
            } else {
                alert('Usuário ou senha incorretos!')
            }
        break;
        case '4':
            continuar = false;
        break;
    }

    
}

