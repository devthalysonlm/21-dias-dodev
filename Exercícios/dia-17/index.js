

//CRIANDO CLASSES 

class Hoteis{
    id
    nome
    categoria
    endereco
    telefone
    constructor(id, nome, categoria, endereco, telefone){
        this.id = id
        this.nome = nome
        this.categoria = categoria
        this.endereco = endereco
        this.telefone = telefone
    }
}

class Reservas{
    id
    idHotel
    responsavel
    entrada
    saida
    constructor(id, idHotel, responsavel, diaEntrada, diaSaida ){
        this.id = id
        this.idHotel = idHotel
        this.responsavel = responsavel
        this.diaEntrada = diaEntrada
        this.diaSaida = diaSaida
    }
}
//CRIANDO ARRAY 
let hoteis = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1;

//CRIANDO FUNÇÃO PARA CADASTRO DE HOTEL
function CadastrarHotel(){
    let nome;
    do {
        nome = prompt('Informe o nome:')
        if(!nome){
            alert('O campo nome é obrigatório')
        } else {
            alert('Nome inserido com sucesso!')
        }
    } while (!nome);
    let categoria = parseInt(prompt('Informe a categoria do hotel:'))
    let endereco = prompt('Informe o endereço:')
    let telefone = parseInt(prompt('Telefone para contato:'))
    let hotel = new Hoteis(idHotel, nome, categoria, endereco, telefone,)
    idHotel++
    hoteis.push(hotel)
}
//CRIANDO FUNÇÃO PARA CADASTRO DE RESERVA

function CadastrarReserva(){
    let idHotel;
    let existe = false;
    do {
         idHotel = parseInt(prompt('Informe o ID do Hotel:'))
        for(let i = 0; i < hoteis.length; i++){
            if(idHotel == hoteis[i].id){
                existe = true;
            }
            else if(i == hoteis.length - 1){
                alert('ID de hotel inexistente')
            }
        }
    } while (!existe);

    let responsavel = prompt('Informe o nome do responsável pela reserva:')
    let diaEntrada = parseInt(prompt('Informe o dia de check-in:'))
    let diaSaida;
    do {
        diaSaida = parseInt(prompt('Informe o dia check-out:'))
        if(diaSaida < diaEntrada){
            alert(`O dia de check-out deve ser posterior ao check-in!`)
        }

    } while (diaSaida < diaEntrada);
    let reserva = new Reservas(idReserva, idHotel, responsavel, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)

}

//CONSULTANDO RESERVA PELO HOTEL
function ConsultarReservaPeloHotel(idHotel){
    reservas.forEach(reserva => {
        if(idHotel == reserva.idHotel){
            let i = idHotel-1
            console.log(`Hotel: ${hoteis[i].nome}`)
            console.log(`Endereço: ${hoteis[i].endereco}`)
            console.log(`Responsável: ${reserva.responsavel}`)
            console.log(`Check-in: ${reserva.diaEntrada}`)
            console.log(`Check-out: ${reserva.diaSaida}`)
        }
    })
}

//CONSULTANDO HOTEL PELA RESERVA
function ConsultarHotelPelaReserva(idReserva){
    let idHotel = reservas[idReserva-1].idHotel;
    console.log(`Hotel:${hoteis[idHotel -1].nome}`)
    console.log(`Endereco: ${hoteis[idHotel -1].endereco}`)
    console.log(`Check-in:${reservas[idReserva -1].diaEntrada}`)
    console.log(`Check-out:${reservas[idReserva -1].diaSaida}`)   
}

//CONSULTANDO RESERVAS PELO NOME
function ConsultarReservaPeloNome(responsavel){
    for(let i = 0; i < reservas.length; i++){
        if(responsavel == reservas[i].responsavel){
            console.log(`ID reserva: ${reservas[i].id}`)
            console.log(`id: ${hoteis[(reservas[i].idHotel)-1].nome}`)
        }
    }
}

//CONSULTANDO HOTEL PELA CATEGORIA
function ConsultarHotelPelaCategoria(categoria){
    let hoteisProcurados = []
    for(let i = 0; i < hoteis.length; i++){
        if(categoria == hoteis[i].categoria){
            hoteisProcurados.push(hoteis[i].nome)

        }
    }
    return hoteisProcurados
}

//ATUALIZAR NUMERO DE TELEFONE
function AtualizarTelefone(idHotel, telefone){
    hoteis[idHotel - 1].telefone = telefone
    console.log('Numero de Hotel atualizado com sucesso!')

}


/*
 1 - CADASTRO DE HOTEL
 2 - CADASTRO DE RESERVA
 3 - CONSULTAR RESERVA USANDO HOTEL
 4 - CONSULTAR HOTEL USANDO RESERVA
 5 - CONSULTAR RESERVA PELO NOME
 6 - CONSULTAR HOTEL PELA CATEGORIA
 7 - ATUALIZAR NUMERO DE TELEFONE
 8 - SAIR
*/

let continuar = true
do {
    let opcoes = parseInt(prompt('Bem vindo ao sistema de cadastro de hoteis e reservas Dodev\nEscolha a opção que melhor lhe atender:\n1 - Cadastro de hotel\n2 - Cadastro de reserva\n3 - Consulta de reservas pelo hotel\n4 - Consulta de hoteis pela reserva\n5 - Consulta de reservas pelo responsável\n6 - Consulta de hoteis pela categoria\n7 - Atualizar número de telefone\n8 - Encerrar o programa'))
    switch(opcoes){
        case 1:
            CadastrarHotel();
            break;
        case 2:
            CadastrarReserva();
            break;
        case 3:
            ConsultarReservaPeloHotel(prompt('Informe o ID do hotel:'))
            break;
        case 4:
            ConsultarHotelPelaReserva(prompt('Informe o ID da reserva:'))
            break;
        case 5:
            ConsultarReservaPeloNome(prompt('Informe o nome do responsável pela reserva:'))
            break;
        case 6:
            let hoteisProcurados = ConsultarHotelPelaCategoria(parseInt((prompt('Informe a categoria que deseja procurar:'))))
            console.log(hoteisProcurados)
            break;
        case 7:
            let = idHotel = parseInt(prompt('informe o ID do hotel:'))
            let telefone = prompt('Informe o novo número de telefone:')
            AtualizarTelefone(idHotel, telefone)
            break;
        case 8:
            continuar = false
            alert('Programa Encerrado com sucesso!')
            break;
        default:
            alert('[ERRO] Opção inválida!')
            break;
    }
} while (continuar);











