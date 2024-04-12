let nomes = [];
let senhas = [];
let contador = 0;

let continuar = true

while (continuar) {
    let opcao = prompt('Cadastro [1] / Login [2] / Excluir [3] / Encerrar [4]')

    switch (opcao) {
        case "1": //Opção de cadastro
            nomes[contador] = prompt('Informe o nome:')
            senhas[contador] = prompt('Informe a senha:')
            contador++
            break;
        
        case "2": //Opção de login 
            let nome = prompt('Nome:')
            let senha = prompt('Senha:')
            let loginValido = false
        
        for (let i = 0; i < nomes.length; i++) {
            if(nomes[i] ==  nome && senhas[i] == senha){
                loginValido = true
            }  
        }
        if (loginValido){
            alert('Login efetuado com sucesso')
        }else{
            alert('Login Inválido')
        }
            break;

        case "3": //Opção de exlusão de usuário
            let deletarUser = prompt('Qual nome deseja exluir?') //Peça para que o user informe o nome a ser excluído
            let nomeAux = [] //Cria uma nova lista onde os nomes excluídos vão constar
            let senhaAux = [] //Cria uma nova lista onde as senhas excluídas vão constar
            let contadorAux = 0 // Um novo contador pra auxiliar
            
        for (let i = 0; i < contador; i++) {  // Um for para  que seja feito uma varredura pelo contador 
            if(deletarUser == nomes[i]){ //Verificar se o nome a ser deletador conta na lista de nomes
                alert('Cadastro excluído com sucesso')

            } else {
                nomeAux[contadorAux] = nomes[i]
                senhaAux[contadorAux] = senhas[i]
                contadorAux++
            }
        }    
            nomes = nomeAux
            senhas = senhaAux
            contador--
            break;
            
       
        case "4": //Opção de encerramento
            let encerrar = prompt('Deseja encerrar a tela de login? [s/n]')
            if(encerrar != "n"){
                continuar = false
                alert('Programa encerrado!')
            } 
            break;
        
        default:
            alert('Opção inválida!')
            break;
    }
    
 }
