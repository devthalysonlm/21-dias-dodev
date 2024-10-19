
let arrayHotel = []
let arrayReserva = []

function CadastrarHotel(){
    let id = prompt('ID:')
    let nome = prompt('Nome:')
    let categoria = prompt('Categoria:')
    let endereco = prompt('Endereço:')
    let telefone = prompt('Telefone:')

    let hotel = {
        id: id,
        nome: nome,
        categoria: categoria,
        endereco: endereco,
        telefone: telefone,

    }
    if(!arrayHotel.some(x => x.id === id))
    arrayHotel.push(hotel)
}

function CadastrarReserva(){
    let id = prompt('ID:')
    let idHotel = prompt('ID do Hotel:')
    let nome = prompt('Nome do Responsável:')
    let entrada = prompt('Dia de entrada:')
    let saida = prompt('Dia de saída:')

    let reserva = {
        id: id,
        idHotel: idHotel,
        nome: nome,
        entrada: entrada,
        saida: saida
    }

    arrayReserva.push(reserva)
}