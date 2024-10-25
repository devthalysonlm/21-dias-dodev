///////////////////////////HOTEL SAN REMO\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let arrayHotel = []
let arrayReserva = []


function CadastrarHotel(id, nome, categoria, endereco, telefone){
    let hotel = {
        id: id,
        nome: nome,
        categoria: categoria,
        endereco: endereco,
        telefone: telefone
    }

    arrayHotel.push(hotel)
}

function CadastrarReserva(id, idHotel, responsavel, entrada, saida){
    let reserva = {
        id: id,
        idHotel: idHotel,
        responsavel: responsavel,
        entrada: entrada,
        saida: saida
    }

    arrayReserva.push(reserva)
    
}

function ListagemDeReserva(idHotel){
    return idHotel.filter(nome,)
    
}
