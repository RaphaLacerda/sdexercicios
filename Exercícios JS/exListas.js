const biblioteca = [{
        nome: "Dom Quixote",
        paginas: 401,
        ano: 1605,
        pais: "China"
    },
    {
        nome: "Guerra e Paz",
        paginas: 547,
        ano: 1869,
        pais: "Australia"
    },
    {
        nome: "Cem Anos de Solidão",
        paginas: 258,
        ano: 1967,
        pais: "Brasil",
    },
    {
        nome: "Ulisses",
        paginas: 745,
        ano: 1922,
        pais: "China",
    },
    {
        nome: "Busca do Tempo Perdido",
        paginas: 111,
        ano: 1913,
        pais: "Argentina",
    }
]

//Retornar todos os livros da China

const listaLivrosChineses = biblioteca.filter(livroChina => livroChina.pais === 'China')

//Retornar o nome, e quantidade de paginas dos livros com mais de 500 paginas

const listaPaginas = biblioteca.filter(livro => livro.paginas > 500)
    .map(livro => {
        return ({ 'nome': livro.nome, 'paginas': livro.paginas })
    })

//Retornar a media de quantidade de paginas dos livros com ano maior que 1900

const livrosAtuais = biblioteca.filter(atuais => atuais.ano > 1900)
const paginas = livrosAtuais.reduce((total, livro) => total + livro.paginas)
const media = paginas / livrosAtuais.length

//Retornar o nome do livro mais recente que tenha até 200 paginas (essa aqui usa uma outra função junto além das citadas acima)

const livroMaisRecente = biblioteca.filter(livro => livro.paginas <= 200)
    .sort((a, b) => {
        return b.ano - a.ano
    })
