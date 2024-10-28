
//CRIANDO CLASSE HOTEL
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
//CRIANDO CLASSE RESERVA
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

//CRIANDO ARRAYS
let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

//FUNCÃO PARA CADASTRAR HOTEL
function CadastrarHotel(){
    let nome = prompt('Informe o nome da unidade:')
    let categoria = prompt('Informe a categoria:')
    let endereco = prompt('Informe o endereço:')
    let telefone = prompt('Informe o telefone para contato:')
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel ++
    hoteis.push(hotel)
   
}

//FUNCÃO PARA CADASTRAR RESERVA
function CadastrarReserva(){
    let idHotel
    let existe = false
    do {
        idHotel = parseInt(prompt('Digite o id do hotel:'))
        for(let i = 0; i < hoteis.length; i++){
            if(idHotel == hoteis[i].Id) {
                i = hoteis.length
                existe = true
            } else if(i == hoteis.length -1){
                console.log('Id do hotel não cadastrado')
            }
        }
    } while (!existe);

    let nome = prompt('Informe o nome do responsável:')
    let diaEntrada = parseInt(prompt('informe o dia de entrada:'))
    let diaSaida
    do {
        diaSaida = parseint(prompt('Informe o dia de saída:'))
        if(diaSaida < diaEntrada){
            console.log('O dia de saída não ser menor do que o dia de entrada!')
        }
    } while(diaSaida < diaEntrada)

    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}

//FUNÇÃO PARA PROCURAR RESERVAS PELO HOTEL

function ProcurarRerservasPeloHotel(idHotel){
    reservas.forEach(reserva => {
        if(idHotel == reserva.idHotel){
            let i = idHotel -1
            console.log(`Hotel: ${hoteis[i].Nome}`)
            console.log(`Responsável:${reserva.responsavel}`)
            console.log(`Dia de entrada:${reserva.DiaEntrada}`)
            console.log(`Dia de saída: ${reserva.DiaSaida}`)
        }
    })
}

