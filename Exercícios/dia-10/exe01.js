

const array = [];
const indices = [];
contadorIndices = 0;

const numeroProcurado = parseInt(prompt('Digite o número a ser procurado:'))
for (let i = 0; i < 10; i++) {
    const elemento = parseInt(prompt(`Informe o ${i + 1} elemento:`))
    array[i] = elemento //Informados um elemento dessa lista i , e esses elementos compoem a lista vazia array.
    
}

// Criamos mais um for mas para agora assimilar o número procurado ao índice
for (let i = 0; i < 10; i++) {
    if (array[i] === numeroProcurado){
        indices[contadorIndices] = i
        contadorIndices++
    }
    
}

console.log(`O numero ${numeroProcurado} foi encontrado no índice ${indices}`)

