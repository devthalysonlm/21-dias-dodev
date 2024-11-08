
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
            if(idHotel === hoteis[i].Id) {
                i = hoteis.length
                existe = true
            } else if(i === hoteis.length -1){
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


//FUNÇÃO PARA PROCURAR HOTEL PELA RESERVA
function ProcurarHotelPelaReserva(idReserva){
    let idHotel = reservas[idReserva -1].idHoteld
    console.log(`Hotel: ${hoteis[idHotel -1].Nome}`)
    console.log(`Endereço: ${hoteis[idHotel -1].Endereco}`)
    console.log(`Dia de entrada: ${reservas[idReserva -1].DiaEntrada}`)
    console.log(`Dia de Saída:${reservas[idReserva -1].DiaSaida}`)
}

//FUNÇÃO PARA PROCURAR RESERVA PELO RESPONSÁVEL
function ProcurarReservaPeloNome(nome){
    for(let i = 0; i < reservas.length; i++){
        if(nome == reservas[i].Responsavel){
            console.log(`ID da Reserva: ${reservas[i].id}`)
            console.log(`Hotel: ${hoteis[(reservas[i].idHotel) -1].Nome}`)
        }
    }
}

//FUNÇÃO PARA PROCURAR HOTÉIS PELA CATEGORIA
function ProcurarHotelPelaCategoria(categoria){
    let hoteisProcurados = []
    for(let i = 0; i < hoteis.length; i++){
        if(categoria == hoteis[i].Categoria){
            hoteisProcurados.push(hoteis[i].Nome)
        }
    }
    return hoteisProcurados
}

//FUNÇÃO PARA ATUALIZAR TELEFONE DO HOTEL 
function AtualizarTelefone(idHotel, telefone){
    hoteis[idHotel - 1]. telefone = telefone
    console.log('Número de telefone atualizado!')
}


//FLUXO DE FUNCIONAMENTO
let continuar = true
do {
    let opcao = prompt(`Escolha uma opção: \n1 - Cadastrar Hotel \n2 - Cadastrar Reserva \n3 - Procurar Reservas pelo Hotel \n4 - Procurar hotel pela reserva \n5 - Procurar reserva pelo responsável \n6 - Procurar Hoteis por categoria \n7 - Atualizar telefone de um hotel \n8 - Encerrar o programa`)
    switch(opcao){
        case'1':
            CadastrarHotel()
            break;
        case'1':
            CadastrarReserva()
            break;
        case'3':
        ProcurarRerservasPeloHotel(prompt('Digite o id do hotel:'))
            break;
        case'4':
        ProcurarHotelPelaReserva(prompt('Digite o id da reserva:'))
            break;
        case'5':
        ProcurarReservaPeloNome(prompt('Digite o nome do responsável pela reserva:'))
            break;
        case'6':
        let hoteisProcurados = ProcurarHotelPelaCategoria(parseInt(prompt('Digite a categoria que deseja procurar:')))
        console.log(hoteisProcurados)
            break;
        case'7':
        let idHotel = parseInt(prompt('Digite o id do hotel que deseja atualizar:'))
        let telefone = prompt('Digite o nono telefone')
        AtualizarTelefone(idHotel, telefone)
            break;
        case'8':
        console.log('Programa encerrado')
        continuar = false
            break;
        default:
            console.log('Opção inválida')


    }
} while (continuar);