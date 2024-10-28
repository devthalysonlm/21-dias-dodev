///////////////////////////HOTEL SAN REMO\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(id, nome, categoria, endereco, telefone){
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.telefone = telefone
    }
  
}

class Reserva {
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida
    constructor(id, idHotel, responsavel, diaEntrada, diaSaida){
        this.Id = id
        this.IdHotal = idHotel
        this.Responsavel = responsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

function CadastrarHotel(){
    let nome = prompt('Informe o nome da unidade:')
    let categoria = prompt('Informe a categoria:')
    let endereco = prompt('Informe o endereço:')
    let telefone = prompt('Informe o telefone para contato:')
    let hotel = new Hotel(nome, categoria, endereco, telefone)
    idHotel ++
    hoteis.push(hotel)
   
}

