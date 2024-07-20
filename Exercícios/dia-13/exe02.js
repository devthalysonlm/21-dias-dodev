class Carro {
    nome 
    potencia
    velocidadeMaxima
    aceleracao
    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }
    tempo(distancia=0){
        return distancia / (this.velocidadeMaxima / this.aceleracao)
    }
    apresentacao(){
        console.log(`O modelo do carro é ${this.nome}, tem ${this.potencia} cavalos de potência, chega até ${this.velocidadeMaxima}kmh e vai de o a 100km em ${this.aceleracao} segundos`)
    }
}

let carro1 = new Carro('Sportage', 180, 192, 9)

console.log(carro1.tempo(100));
console.log(carro1.apresentacao());

class Corrida {
    nome
    tipo
    distancia
    participantes
    vencedor
    constructor(nome, tipo, distancia, participantes, vencedor){
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.participantes = participantes
        this.vencedor = vencedor

    }
}
