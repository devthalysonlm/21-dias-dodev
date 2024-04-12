class Carro {
    nome
    potencia
    velocidadeMaxima
    aceleracao
    constructor(nome, potencia, velocidadeMaxima,aceleracao){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao

    }

    calcularTempoMedio(distancia){
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
        return resultado
    }
}
class Corrida{
    nome
    tipo
    distancia
    participantes
    vencedor
    constructor(local,tipo,distancia,participantes,vencedor){
        this.local = local
        this.tipo = tipo
        this.distancia = distancia
        this.participantes  = []
        this.vencedor = ''
    }
    
    DefinirVencedor(){
        let menorTempo = this.participantes[indexCarros].calcularTempoMedio(this.distancia)
        let vencedor = this.participantes

        for (let index = 0; index < this.participantes.length; index++) {
            let tempo = this.participantes[index].calcularTempoMedio(this.distancia)
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.participantes[index]
            }
        }
        return this.vencedor = vencedor
    }
    exibirVencedor(){
        alert(`O vencedor é : ${this.vencedor}`)
    }
}


continuar = true
let indexCarros = 0;
let carros = [];

while(continuar){
    let nome = prompt('Informe o nome do carro:')
    let potencia = prompt('Informe a potencia do carro:')
    let velocidadeMaxima = prompt('Qual a velocidade máxima?')
    let aceleracao = prompt('Informe o tempo de aceleração:')
    let carro = new Carro(nome,potencia,velocidadeMaxima,aceleracao)
    carros[indexCarros] = carro
    let local = prompt('Informe o local da corrida:')
    let tipo = prompt('Informe o tipo de corrida:')
    let distancia = prompt('Informe a distância:')
    let corrida = new Corrida(local,tipo,distancia)
    participantes = indexCarros
    corrida = indexCarros

    let adicionarMais = prompt('Digite 1 caso queira adicionar mais carros:')
        if(adicionarMais != '1'){
            continuar = false
        } else {
            indexCarros++
        }
}
    

    




/*let corrida = new Corrida("Monza","Formula 1", 60000)

corrida.participantes[0] = new Carro("Kicks", 120, 160, 5)
corrida.participantes[1] = new Carro("Marea", 210,200,9)
corrida.participantes[2] = new Carro("Peugeot 206", 300, 220, 10)

corrida.DefinirVencedor()
corrida.exibirVencedor()*/
