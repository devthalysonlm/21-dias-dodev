//CRIANDO A CLASSE LIVROS

class Livros{
    constructor(titulo, autor, editora, anoPublicacao, disponibilidade = true){
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.anoPublicacao = anoPublicacao
        this.disponibilidade = disponibilidade
    }
}

let livros = [];
livros.push(`livro1`, `Rhony`, `Curitiba`,1994)
livros.push(`Livro2`, `Jhonatan`, `Nordeste`, 1990)
livros.push(`Livro3`, `Bruno`, `Balneário Camboriú`, 1999)
livros.push(`Livro4`, `Jonas`, `Para`, 1990)
livros.push(`Livro5`, `Thalyson`, `Balneário Camboriú`, 1999)

class Biblioteca{
    constructor(nome, endereco, telefone, acervoLivros = []){
        this.nome = nome
        this.endereco = endereco
        this.telefone = telefone
        this.acervoLivros = acervoLivros
    }

    BuscarLivros(titulo){
        this.acervoLivros.forEach(livro => {
            if(livro.titulo === titulo){
                console.log(livro)
            }
        })
    }

    EmprestarLivros(titulo){
        let emprestar = false
        this.acervoLivros.forEach(livro => {
            if(livro.titulo === titulo){
                if(livro.disponibilidade === true){
                    livro.disponibilidade = false
                    emprestar = true
                }
            }
        })
        return emprestar
    }

    DevolverLivros(titulo){
        this.acervoLivros.forEach(livro => {
            if(livro.titulo === titulo){
                livro.disponibilidade = true
                console.log(`Livro devolvido com sucesso!`)
            }
        })
    }
}

let biblioteca = new Biblioteca(`Biblioteca Dodev`, `Rua 3000,480`, `33631094`, livros)

biblioteca.BuscarLivros(`Livro1`)
biblioteca.EmprestarLivros(`Livro3`)
biblioteca.DevolverLivros(`Livro3`)





