
/*let arrayDeNomes  = ["valor1","valor2","valor3"]; //Declarando uma lista já com valores
let outroArray =  []; //Declarando uma lista vazia  

let primeiroElememto = arrayDeNomes[0]; //Acessa o valor do primeiro elemento
arrayDeNomes[1] = "Thalyson"; //Atribui valor ao segundo elemento 

//Loop para exibição dos elementos de um array
for (let index = 0; index < arrayDeNomes.length; index++) {
    console.log(arrayDeNomes[index]);
    
} 

Para acessar um array eu devo coloar o seu nome e em colchetes colocar o índice que quero buscar nessa lista :
primeiroArray:[0] >>> Nessa exemplo estamos buscando o elemento 0 dentro da lista. 



> Criando uma array:
    let nomes : ['Thalyson', 'Lorena', 'Douglas', 'Aginor']
    Importante lembarar que para criar uma array  precisamos usar let ou const


> Acessando um elemento dessa Array:
    nomes[0] > 'Thalyson'
    nomes[2] > 'Douglas'
    nomes[1] > 'Lorena'
    Para acessarmos um elemento de uma Array colocamos somente o nome da variável e a posição que desejamos acessar. 


> Todas lista em programação o primeiro elemento começa em 0 e assim por diante. Para adicionarmos um elemento nessa lista fazemos o seguinte:
    nomes[4] = 'Aginor Ali haznime'
    nomes[4] > 'Aginor Ali haznime' > Quando eu chamar pela posição 4 ela vai me retornar esse nome que eu coloquei acima. 


> Criando uma Array vazia e ir adicionando os nomes:
    let outraArray = []   
    outraArray[0] = 'Thalyson'
    outroArray[0] > Vai me Retornar o nome que eu acabei de inserir 'Thalyson'
    Uma característica importante é que eu posso criar uma lista e pular posições exemplo:
    Eu crio um array e coloco elemento na posição 0 e posição 2, o JS vai me dar uma posição vazia caso eu busque posição 1
    mas mesmo assim ele já entende que a minha array possui 3 posições.
    O JS permite que eu crie um array com numeros e letras mas isso não é recomendado, sempre deixe sua array com somente um tipo de caracteres. 

*/

let nome = []; //Criei uma Array vaziu 
let continuar = true; // Criei uma variável para controlar só quando eu quero sair ou não do loop while 
let posicaoArray = 0; // Criei essa variável posição so para mim saber em que posição do  array que vou inseir esse nome

// Código que vai repetir enquanto meu user decidir continuar 

while(continuar === true){
    let nomeInserido = prompt('Digite um nome:') //Eu peço para que um nome seja inserido 
    nome[posicaoArray] = nomeInserido // Eu adiciono esse array na posiçãoArray atual que vai começar como 0 

    let desejaContinuar = prompt('Insira 1 caso deseja adicionar um novo nome!') //Vou perguntar se ele deseja continuar 
    if( desejaContinuar != '1'){ //Seu meu usuário adicionar qualquer coisa alem de  1 o while não continua 
        continuar = false;
        continue;
    }
    posicaoArray++ // Atualiza posição de array sempre depois do if 
}


