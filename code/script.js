class Livro {
  constructor(titulo, autor, descricao, imagem) {
    this.titulo = titulo;
    this.autor = autor;
    this.descricao = descricao;
    this.imagem = imagem;
  }
}

class Biblioteca {
  constructor() {
    this.livros = [];
  }

  // Adiciona um livro à biblioteca
  adicionarLivro(livro) {
    if (livro instanceof Livro) {
      this.livros.push(livro);
      this.exibirLivros(); // Atualiza a exibição após adicionar
      console.log(`Livro "${livro.titulo}" adicionado com sucesso.`);
    } else {
      console.log("O item a ser adicionado deve ser uma instância da classe Livro.");
    }
  }

  // Remove um livro da biblioteca com base no título
  removerLivro(titulo) {
    const index = this.livros.findIndex(livro => livro.titulo === titulo);
    if (index !== -1) {
      this.livros.splice(index, 1);
      this.exibirLivros(); // Atualiza a exibição após remover
      console.log(`Livro "${titulo}" removido com sucesso.`);
    } else {
      console.log(`Livro "${titulo}" não encontrado.`);
    }
  }

  // Exibe todos os livros na interface
  exibirLivros() {
    const div = document.getElementById("livroDiv");
    div.innerHTML = "";

    this.livros.forEach(livro => {
      div.innerHTML += `
        <div class="livro">
          <img src="${livro.imagem}" alt="${livro.titulo}" />
          <div>
            <h2>${livro.titulo}</h2>
            <h3>${livro.autor}</h3>
            <p>${livro.descricao}</p>
          </div>
        </div>
      `;
    });
  }
}

const biblioteca = new Biblioteca();

// Adiciona livros à biblioteca
biblioteca.adicionarLivro(new Livro(
  "César",
  "Alan Massie",
  `Júlio César é apresentado ao leitor narrando suas memórias como general e político romano, cujo nome original era Décimo Júnio Bruto Albino.`,
  "https://m.media-amazon.com/images/I/81dEu3U6sxS._AC_UF1000,1000_QL80_.jpg"
));

biblioteca.adicionarLivro(new Livro(
  "1984",
  "George Orwell",
  `Publicado em 1949, o texto de Orwell nasceu destinado à polêmica. Traduzido em mais de sessenta países, virou minissérie, filmes, quadrinhos, mangás e até uma ópera.`,
  "https://m.media-amazon.com/images/I/61t0bwt1s3L._AC_UF1000,1000_QL80_.jpg"
));

biblioteca.adicionarLivro(new Livro(
  "Harry Potter e a Pedra Filosofal",
  "J.K. Rowling",
  `Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê.`,
  "https://m.media-amazon.com/images/I/61jgm6ooXzL._AC_UF1000,1000_QL80_.jpg"
));

biblioteca.adicionarLivro(new Livro(
  "Sapiens: Uma breve história da humanidade",
  "Yuval Noah Harari",
  `O planeta Terra tem cerca de 4,5 bilhões de anos. Numa fração ínfima desse tempo, uma espécie entre incontáveis outras o dominou: nós, humanos.`,
  "https://www.lpm.com.br/livros/imagens/sapiens_9788525438393_hd.jpg"
));

biblioteca.adicionarLivro(new Livro(
  "O Filho de Netuno",
  "Rick Riordan",
  `Filho de Poseidon, o deus do mar, um belo dia Percy desperta sem memória e acaba em um acampamento de heróis que não reconhece.`,
  "https://m.media-amazon.com/images/I/61HVJUOwUpL._AC_UF1000,1000_QL80_.jpg"
));

biblioteca.adicionarLivro(new Livro(
  "Fedro: ou Do Belo",
  "Platão",
  `Fedro é um diálogo platônico que trata da investigação sobre a retórica e o amor.`,
  "https://edipro.com.br/wp-content/uploads/2017/02/9788572835626.jpg"
));

// Atualiza a interface com os livros iniciais
biblioteca.exibirLivros();

// Adiciona evento para adicionar livro
document.getElementById("adicionarLivroBtn").addEventListener("click", () => {
  const titulo = document.getElementById("tituloInput").value;
  const autor = document.getElementById("autorInput").value;
  const descricao = document.getElementById("descricaoInput").value;
  const imagem = document.getElementById("imagemInput").value;
  
  const novoLivro = new Livro(titulo, autor, descricao, imagem);
  biblioteca.adicionarLivro(novoLivro);
});

// Adiciona evento para remover livro
document.getElementById("removerLivroBtn").addEventListener("click", () => {
  const titulo = document.getElementById("tituloRemoverInput").value;
  biblioteca.removerLivro(titulo);
});

