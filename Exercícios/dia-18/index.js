//CRIANDO  CLASSE DE LIVROS
class Livros{
    titulo
    autor
    editora
    anoDePublicacao
    disponibilidade = true
    constructor(titulo, autor, editora, anoDePublicacao,){
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.anoDePublicacao = anoDePublicacao
        
    }
}

//CRIANDO OBJETOS DA CLASSE DE LIVROS
let livros = []
livros.push(new Livros(`Livro1`, `Navera`,`Editora A`, 1999))
livros.push(new Livros(`Livro2`, `EuNaPlay`, `Editora B`, 1992))
livros.push(new Livros(`Livro3`, `CalveludoGamer`, `Editora C`, 1995))
livros.push(new Livros(`Livro4`, `TiãoDoido`, `Editora D`,1990 ))
livros.push(new Livros(`Livro5`, `Rhonyzeera`, `Editora E`, 1986))
livros.push(new Livros(`Livro6`, `JucaBala`, `Editora F`, 1990))

//CRIANDO A CLASSE BIBLIOTECA
class Biblioteca{
    nome
    endereco
    telefone
    acervoDeLivros = []
    constructor(nome, endereco, telefone, acervo){
        this.nome = nome
        this.endereco = endereco
        this.telefone = telefone
        this.acervoDeLivros = acervo
    }
    //METODO PARA BUSCAR UM LIVRO ESPECÍFICO
    BuscarLivroPeloTitulo(titulo){
        this.acervoDeLivros.forEach((livro) =>{
            if(livro.titulo === titulo){
                console.log(livro)
            }
        })
    }

    //METODO PARA EMPRESTAR LIVRO
    EmprestarLivros(titulo){
        let emprestar = false
        this.acervoDeLivros.forEach((livro) =>{
            if(livro.titulo === titulo){
                if(livro.disponibilidade === true){
                    livro.disponibilidade = false
                    emprestar = true
                }

            }
        })
        return emprestar

    }
    //METODO PARA DEVOLVER LIVRO
    DevolverLivro(titulo){
       livros.forEach((livro) =>{
        if(livro.titulo == titulo){
            livro.disponibilidade = true
            console.log(`Livro devolvido!`)
        }
       })

    }

}

//CRIANDO OBJETO DE BIBLIOTECA

let biblioteca = new Biblioteca(`Biblioteca Dodev`, `Rua 3000,480`, `33631094`,livros)

biblioteca.BuscarLivroPeloTitulo(`Livro2`)
biblioteca.EmprestarLivros(`Livro1`)
biblioteca.DevolverLivro(`Livro1`)


