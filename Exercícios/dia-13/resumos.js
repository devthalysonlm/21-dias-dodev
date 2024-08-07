/*Classe seria algo abstrato.
Objeto seria algo completo. 

    Exemplo  de Classe: Uma fábrica de garrafas onde fabricariam várias garrafas com um padão de cor, material, quantidade e conteúdo.
    A classe é quado definimos uma estrutura de um objeto e apartir dessa classe podemos criar vários objetos. 

    Exemplo de Objeto: Garrafa > Cor: Prata > Material: Aço Inox > Quantidade: 600ml > Conteúdo: Água
    Funções desse obetjo > Abrir , Fechar, Tomar água.
*/

//CRIANDO UMA CLASSE
class Carro {
    Modelo
    Marca
    cor
    constructor(modelo, marca, cor){
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
    }
    
}

//TIRANDO A CLASSE DO ABSTRATO E TRANFORMANDO EM ALGO CONCRETO
//CRIANDO UM OBJETO:
let carro = new Carro('fiesta','ford','prata')



/*

OUTRO EXEMPLO DO USO DE CLASSES

class Retangulo {
    constructor(largura=0, altura=0){
        this.largura = largura
        this.altura = altura
    }
    calcularArea(){
        return this.largura * this.altura
    }

    calcularPerimetro(){
        return 2 * (this.largura + this.altura)
    }
}


let retanguloUm = new Retangulo(5,3 );
console.log(retanguloUm.calcularArea());

Acessando o objeto 
console.log('retanguloUm.largura') Saída:5 
*/