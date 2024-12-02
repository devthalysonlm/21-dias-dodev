alert(`---------Sistemas de Cadastro Dodev---------`)

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
    constructor(id, idHotel, responsavel, entrada, saida ){
        this.id = id
        this.idHotel = idHotel
        this.responsavel = responsavel
        this.entrada = entrada
        this.saida = saida
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
    let categoria = prompt('Informe a categoria do Hotel:')
    let endereco = prompt('Informe o endereço:')
    let telefone = parseInt(prompt('Telefone para contato:'))
    let hotel = new Hoteis(idHotel, nome, categoria, endereco, telefone,)
    idHotel++
    hoteis.push(hotel)
}
//CRIANDO FUNÇÃO PARA CADASTRO DE RESERVA
function CadastrarReserva(){
    let IdHotel = parseInt(prompt('Informe o ID do Hotel:'))
    let existe = false;
    for(let i = 0; i < hoteis.length; i++){
        if(idHotel == hoteis[i]){
            existe = true;
        }
        if(i == hoteis[i] - 1){
            alert('ID de hotel inexistente')
        }
    }
    let responsavel = prompt('Informe o nome do responsável pela reserva:')
    let diaEntrada = parseInt('Informe o dia de check-in:')
    let diaSaida;
    do {
        diaSaida = parseInt(prompt('Informe o dia check-out:'))
        if(diaSaida < diaEntrada){
            alert(`Saida`)
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
            console.log(`Hotel: ${hoteis[i].endereco}`)
            console.log(`Responsável: ${reserva.nome}`)
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
function ConsultarReservaPeloNome(nome){
    for(let i = 0; i < reservas.length; i++){
        if(nome == reservas[i].responsavel){
            console.log(`ID reserva: ${reservas[i].nome}`)
            console.log(`id: ${hoteis[(reservas[i].idHotel)-1].nome}`)
        }
    }
}

//CONSULTANDO HOTEL PELA CATEGORIA
function ConsultarHotelPelaCategoria(categoria){
    let hoteisProcurados = []
    for(let i = 0; i < hoteis.length; i++){
        
    }
}













