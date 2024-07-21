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
    Tempo(distancia=0){
        return distancia / (this.velocidadeMaxima / this.aceleracao)
    }
    apresentacao(){
        console.log(`O modelo do carro é ${this.nome}, tem ${this.potencia} cavalos de potência, chega até ${this.velocidadeMaxima}kmh e vai de o a 100km em ${this.aceleracao} segundos`)
    }
}


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
        this.participantes = []
        this.vencedor = ''

    }
    definirVencedor(){
        let menorTempo = this.participantes[0].Tempo(this.distancia)
        let vencedor = this.participantes[0]

        for (let index = 1; index < this.participantes.length; index ++){
            let tempo = this.participantes[index].Tempo(this.distancia)
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.participantes[index]
            }
        }
        return this.vencedor = vencedor
    
    }
    exibirVencedor(){
        alert`O vencedor é ${this.vencedor.nome}`
    }
}

let corrida = new Corrida('Interlagos', 'Fórmula1', 7000, )

corrida.participantes[0] = new Carro('Kia Sporatge', 180, 192)
corrida.participantes[1] = new Carro('Palio Fire', 75, 157)
corrida.participantes[2] = new Carro('Posche Carreira',650, 330 )

corrida.definirVencedor()
corrida.exibirVencedor()
