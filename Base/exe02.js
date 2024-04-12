//Contador de notas R$100 R$50 R$10 R$5 R$1 

let n = parseInt(gets());
let quantidadeNotas = 0;
let cedulas = [100,50,20,10,5,2,1];


// Função responsável por contar as notas a partir de um valor.
function contaNotas(valor){
  quantidadeNotas = parseInt(n/valor);

  // TODO Subtraia de "n" a "quantidadeNotas" multiplicada por seu respectivo "valor" (parâmetro).
  n -= 
   
  
  console.log(`${quantidadeNotas} nota(s) de R$ ${valor},00`);
}

console.log(n);


for(let cedula in cedulas){    
    contaNotas(cedulas[cedula]);
    }
