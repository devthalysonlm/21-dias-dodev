class Hoteis{
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(id, categoria, endereco, telefone){
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
let idHoteis = 0
let reservas = []
let idReservas = 0

function CadastrarHotel(){
    let nome;
    do {
        nome = prompt('Informe o nome da unidade de hotel:')
        if(!nome){
            console.log('O campo nome é obrigatório!')
        }
        categoria = prompt('Informe a categoria:')
        if(!categoria){
            console.log('O campo categoria é obrigatório')
        }
        
    } while (!nome);


}


CadastrarHotel()
