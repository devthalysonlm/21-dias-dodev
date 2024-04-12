

let array = [];
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Digite o numero ${i + 1}`))
    array[i] = numero
    
}
console.log(`Esse meu array original: ${array}`)
console.log(`Esse é meu array reverso: ${array.reverse()}`)
