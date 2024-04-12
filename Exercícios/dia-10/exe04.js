


let numero = parseInt(prompt('Digite um número inteiro:')) //Pedir um número inteiro 
let fibonacci = [] //Nada mais é doque uma lista vazia 
fibonacci[0] = numero - 1 // Criei uma contagem chamanda fibonacci para que a posição 0 de fibonacci comece pelo numero que eu pedi acima menos 1 
fibonacci[1] = numero // Criei outra contagem fibonacci para que a posição 1 seja o numero que eu escolhi acimda 
for (let i = 2; i < 10; i++) { // Fiz uma contagem de 0 a 10 mas que comece pela posição 2 pois a 0 e 1 já existe. 
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2] // minha lista será equivalente a i e será igual a fibonacci[i - 1] + fibonacci[i - 2]
    
}
console.log(`Fibonacci: ${fibonacci}`) //Mostrar a contagem fibonacci