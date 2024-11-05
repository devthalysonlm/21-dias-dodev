class Hoteis{
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
        this.Telefone = telefone
    }
}

class Reservas{
    Id
    IdHotel
    Responsavel
    Entrada
    Saida
    constructor(id, idHotel, responsavel, entrada, saida){
        this.Id = id
        this.IdHotel = idHotel
        this.Responsavel = responsavel
        this.Entrada = entrada
        this.Saida = saida
    }
}

let hoteis = []
let idHotel = 1
let reservas = []
let idReserva = 1

function CadastrarHotel(){
    let nome;
    do {
        nome = prompt('Informe o nome da unidade de hotel:')
        if(!nome){
            console.log('O campo nome é obrigatório!')
        }
    } while (!nome);
    let categoria = prompt('Informe a categoria do hotel:')
    let endereco = prompt('Informe o endereco do hotel:')
    let telefone = prompt('Informe o número de telefone:')
    let hotel = new Hoteis(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)

    



}



