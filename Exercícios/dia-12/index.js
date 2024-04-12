let nomes = [];
let senhas = [];
let contador = 0;

let continuar = true 

while(continuar){
    let opcao = prompt('Cadastro:1 / Login: 2 / Excluir Cadastro: 3 / Sair: 4')

    switch (opcao) {
        case '1':
            nomes[contador] = prompt('informe o nome:')
            senhas[contador] = prompt('Informe a senha:')
            contador++
            console.log(`${nomes} Cadastrado com sucesso.`)
            break;
        case '2':
            let nome = prompt('Usuário:')
            let senha = prompt('Senha:')
            loginValido = false
        for (let i = 0; i < nomes.length; i++) {
            if(nomes[i] == nome && senhas[i] == senha){
                loginValido = true
                console.log(`${nome} fez login.`)
            }
        }
        if(loginValido){
            alert('Login efetuado com sucesso...')
        }else{
            alert('Login inválido! Tente novamente...')
        }
            break;
        case '3':
            let userDelet = prompt('Informe o usuário a ser excluído:')
            let nomesAux = [];
            let senhasAux = [];
            let contadorAux = [];

        for (let i = 0; i < contador; i++) {
            if(userDelet == nomes[i]){
                alert('Usuário excluído com sucesso...')
                console.log(`${userDelet} excluído com sucesso`)
            }else{

            
            nomesAux[contadorAux] = nomes
            senhasAux[contadorAux] = senhas
            contador++
            } 
            nomes = nomesAux
            senhas = senhasAux
            contador--
        }
        break;
        case '4':
            if(opcao == '4'){
                continuar = false
                alert('Programa encerrado...')
            }
            break;
        default:
            alert('Opção Iválida! Tente novamente...')
            break;
    }

}

console.log(`Usuários cadastrados: ${contador}`)