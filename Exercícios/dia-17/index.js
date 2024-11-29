alert(`---------Sistemas de Cadastro Dodev---------`)

//Criando  classes 

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

let hoteis = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1;

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
    let hotel = new Hoteis(id, nome, categoria, endereco, telefone,)
    idHotel++
    hoteis.push(hotel)
}





CadastrarHotel();
console.log(hoteis)