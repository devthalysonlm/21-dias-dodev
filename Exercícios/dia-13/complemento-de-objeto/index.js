//EXEMPLOS DE CLASSE

/*

class Pessoa {
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }


    //definindo o comportamento dessa classe
    saudacao(){
        return `Meu nome é ${this.nome} e eu tenho ${this.idade} anos`
    }
}


//criando instancias dessa classe

let pessoa1 = new Pessoa('Thalyson', 25)
let pessoa2 = new Pessoa('Lorena', 34)

// Faz a classe funcionário herdar as propriedades da classe pessoa.
class Funcionario extends Pessoa{
    constructor(nome,idade,cargo){
        super(nome,idade) //Vai chamar o construtor da classe base
        this.cargo = cargo
    }

    //Definindo comportamento da classe
    descricao(){
        return `${this.saudacao()} e eu sou um ${this.cargo}`
    }
}


let pessoa3 = new Funcionario('Thalyson',25,'Desenvolvedor')
console.log(pessoa3.descricao())

*/

class Livro{
    constructor(titulo,autor,ano){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }

    descricao(){
        return `Titulo da Obra: ${this.titulo}\nAutor: ${this.autor}\nAno: ${this.ano}`
    }
}

let livro1 = new Livro('O código de Bil gades','Bil Gades', 1999)
let livro2 = new Livro('Rede Social','Mark Zukenberg', 2004)
let livro3 = new Livro('Spotify','Daniel Cuza1',2006)

console.log(livro1.descricao())
console.log(livro2.descricao())
console.log(livro3.descricao())
