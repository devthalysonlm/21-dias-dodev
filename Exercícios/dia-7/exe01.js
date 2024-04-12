
let mediaGeral = 0
let quantidadeHomens = 0
let quantidadeMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 0
while(contador <= 10){
    nota = parseInt(prompt('Digite a sua nota por favor:'))
    sexo = prompt('Digite o sexo do aluno:(m/f)')


   if (sexo == 'm'){
        if (nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
        quantidadeHomens++
    }   

    if (sexo == 'f' && nota > 7){
        quantidadeMulheresAcimaDe7++
    }
    
    mediaGeral += nota
    contador++

   }


mediaGeral = mediaGeral / 10
console.log(`A média geral dos alunos é ${mediaGeral}`)
console.log(`${quantidadeHomens} homens enviaram as notas`)
console.log(`${quantidadeMulheresAcimaDe7} mulheres tiveram a nota acima de 7`)
console.log(`A maior nota entre os homens é de ${maiorNotaHomens}`)