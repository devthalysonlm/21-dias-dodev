//Criando dois arrays 

let arrayA = [68,7,11,91,66,72,24,17,19,14]
let arrayB = [24,22,23,11,15,17,29,16,21,49]

 //Função de verificação 
function verificarArray(arrayUm,arrayDois){
    let resultado = []
    let contador = 0

    for(let i = 0; i < arrayUm.length; i++){

        for(let j = 0; j < arrayDois.length; j++){

            if(arrayUm[i] == arrayDois[j]){
                resultado[contador] = arrayUm[i]
                contador++
                j = arrayDois.length
            }
        }

    }
    
    return resultado
}


console.log(verificarArray(arrayA, arrayB))