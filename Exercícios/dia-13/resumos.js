/*Classe seria algo abstrato.
Objeto seria algo completo. 

    Exemplo  de Classe: Uma fábrica de garrafas onde fabricariam várias garrafas com um padão de cor, material, quantidade e conteúdo.
    A classe é quado definimos uma estrutura de um objeto e apartir dessa classe podemos criar vários objetos. 

    Exemplo de Objeto: Garrafa > Cor: Prata > Material: Aço Inox > Quantidade: 600ml > Conteúdo: Água
    Funções desse obetjo > Abrir , Fechar, Tomar água.
*/

//CRIANDO UMA CLASSE
class carro {
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
let carro = new carro('fiesta','for','prata')
