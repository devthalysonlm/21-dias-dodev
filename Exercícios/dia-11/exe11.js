let arrayNome = [];
let arrayNota = [];
let soma = 0;
contadorArray  = 0;
let condition = true
while (condition) {
    let nome = prompt('Digite o seu nome:')
    let nota = parseInt(prompt('Digite sua nota:'))
    arrayNome[contadorArray] = nome
    arrayNota[contadorArray] = nota
    soma+=nota //Somando 
    contadorArray++

    let continuar = prompt('Digite 1 para continuar:')
    if(continuar != '1')
    condition = false
} 
for (let i = 0; i < arrayNome.length; i++) {
    console.log(`Aluno(a): ${arrayNome[i]} > Nota: ${arrayNota[i]}`)
    
}

console.log(`Quantidade de alunos: ${contadorArray}`)
console.log(`Soma de todas as notas: ${soma}`)
console.log(`A média da turma: ${soma / contadorArray}`)

