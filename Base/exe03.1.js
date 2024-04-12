/*Faça um algoritmo que receba um valor, inteiro e positivo, e usando a estrutura FOR, mostre no console uma contagem de 0 até o número recebido.
   Ex.: entrada => 5 ; saída => 0,1,2,3,4,5 */


   var Numero = prompt('Digite um número:')
   for (var contador = 0; contador < Numero; contador++) {
      console.log(contador + 1) 
      
  }

/* Aqui nos devemos primero criar a variável para se pedir um numero. Depois disso devemos fazer com oque o nosso contador seja igual a 0.
Próximo passo seria o contador ser menos doque o número pedido para que a minha contagem pare nele. Depois disso colocar o meu contador para repetir o laço
(contador++) depois disso fazer um console.log(contador + 1) para que conte exatamente até o número que eu solicitar. */