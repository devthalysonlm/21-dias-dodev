

class Carro{
    modelo
    cor 
    kilometragem
    preco
    constructor(modelo,cor,kilometragem,preco){
        this.modelo = modelo
        this.cor = cor
        this.kilometragem = kilometragem
        this.preco = preco
    }
    apresentar(){
        console.log(`Modelo:${this.modelo}\nCor:${this.cor}\nKilometragem:${this.kilometragem}\nPreço:${this.preco}`)
    }
    calcularTempoMedio(distancia){
        let resultado = distancia / (this.velocidadeMaxia / Aceleracao)
        return resultado
    }

}
class Corrida{
    nome //nome do local da corrida
    tipo  // Formula1, Stock Car, Rally e etc...
    distancia // O total em metro da corrida 
    vencedor // qual equipe ganhou a corrida 
    participantes // um array de objetos da classe carros
    
    constructor(nome, tipo, distancia){
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.vencedor = ''
        this.participantes = [] 
    }

    definirVencedor(){
        let menorTempo = this.participantes[indexCarros].calcularTempoMedio(this.distancia)
        let vencedor = this.participantes[indexCarros]

        for (let i = 0; i < this.participantes.length; i++) {
            let tempo = this.participantes[i].calcularTempoMedio(this.distancia)
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.participantes[i]
            }
            
        }
        return this.vencedor

    }

    exibirVencedor(){
        alert(`O vencedor é ${this.vencedor.nome}`)
    }
}

let carros = [];
let indexCarros = 0;
let continuar = true
while(continuar){
    let modelo = prompt('Informe o modelo do veículo:')
    let cor = prompt('Informe a cor do veículo:')
    let kilometragem = prompt('Qual a kilometragem ?')
    let preco = prompt('informe o preço do veículo:R$')
    let carro = new Carro(modelo,cor,kilometragem,preco)
    carros[indexCarros] = carro

    let cadastrarMais = prompt('Digite 1 caso queria cadastrar mais veículos:')
    if(cadastrarMais != '1'){
        continuar = false
    } else{
        indexCarros++
    }
    let continuarCorrida = true
    while(continuarCorrida){
        
    }
}

