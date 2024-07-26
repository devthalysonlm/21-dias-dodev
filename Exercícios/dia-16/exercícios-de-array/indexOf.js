/*
A função indexOf em JavaScript é utilizado para encontrar um elemento específico dentro de um array
O comportamento dessa função é percorrer todo array e retornar o índice do primeiro elemento encontrado que corresponde ao valor específicado. Se o valor não for encontrado ele retorna '-1'. Se o elemento aparecer mais de uma vez apenas o indice da primeira é retornado.


//ECONTRAR UM NÚMERO
let numeros = [10,20,30,40,50]
let index = numeros.indexOf(20)
console.log(index)
//  Meu retorno seria: 1  porque a posição 1 é onde o número 20 se encontra.


//ECONTRA UMA STRING

let frutas = ['maça','laranja','pera','banana','morango']
let acharFrutas = frutas.indexOf('Pera')
console.log(acharFrutas)

//Meu retorno seria -1 porque tem difernça de código do p minúsculo para o maiúsculo.

//ENCONTRAR UMA STRING SEM SE PREOCUPAR COM LETRAS MINÚSCULAS OU MAIÚSCULAS. 

let palavras = ['maça','Laranja','banana']
let busca = 'laranja'

//NORMALIZANDO PRA MINÚSCULAS

let indice = palavras.findIndex(palavra => palavra.toLowerCase() === busca.toLowerCase())
console.log(`A palavra laraja se econtra na posição ${indice} `)
//Retorno posição 1 

//NORMALIZANDO PARA MAÚSCULAS

let roupas = ['Camiseta', 'short', 'Meia']
let buscar = 'Short'
let buscarRoupa = roupas.findIndex(roupas => roupas.toUpperCase() === buscar.toUpperCase())

console.log(`A roupa ${buscar} se econtra na posição ${buscarRoupa}`)
//Retorno posição : 1


//USANDO PARÂMETRO DE INICIO

let cores = ['laraja','verde','marrom','verde','laranja']
let buscarCor = cores.indexOf('verde', 2)
console.log(buscarCor)

//VERIFICAÇÃO DE NÃO EXISTÊNCIA
let letras = ['a','b','c','d']
let buscarLetras = letras.indexOf('e')
console.log(buscarLetras)
//Retorno de -1 por inexistência
*/

/*
    Você está desenvolvendo um sistema de busca simples para um catálogo de livros. Cada livro tem um título e você precisa encontrar a posição de um título no catálogo. Você quer garantir que sua busca não seja sensível a maiúsculas e minúsculas.

Tarefa
Crie um array com títulos de livros. Utilize pelo menos 5 títulos variados, misturando maiúsculas e minúsculas.
Solicite ao usuário que insira um título para busca.
Use a função indexOf para encontrar o título no array de forma que a busca não seja sensível a maiúsculas e minúsculas.
Se o título for encontrado, exiba a posição (índice) do livro no array. Caso contrário, informe que o livro não foi encontrado.
Dicas
Lembre-se de normalizar tanto o título de busca quanto os títulos no array para minúsculas (ou maiúsculas) para fazer a comparação.



let livros = ['Crónicas de Nárina','a baleia Azul','Código Limpo','melhor Comer melhor Pensar','pai rico pai pobre']
let livro = 'código limpo'
let buscarLivro = livros.findIndex(leitura => leitura.toUpperCase() === livro.toUpperCase())
if(buscarLivro != -1){
    console.log(`O livro ${livro} foi encontrado na prateleira ${buscarLivro}`)
} else {
    console.log('Livro não encontrado!')
}

*/

let livros = ['Crónicas de Nárina','a baleia Azul','Código Limpo','melhor Comer melhor Pensar','pai rico pai pobre']

function buscarLivros(tituloBusca){
    let normalizarTitulo = tituloBusca.toUpperCase();

    let indice = livros.findIndex(palavras => palavras.toUpperCase() === normalizarTitulo)

    if(indice !== -1){
        console.log(`O livro foi encontrado na prateleira ${indice}`)
    } else {
        console.log(`Livro não encontrado!`)
    }

}


tituloParaBusca = 'CÓDIGO LIMPO'
buscarLivros(tituloParaBusca)