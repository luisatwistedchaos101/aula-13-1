// Exemplo de lista de livros

const Biblioteca = {
  // Objetos mock, objetos simulados ou simplesmente mock em desenvolvimento
  // de software são objetos que simulam o comportamento de objetos reais
  // de forma controlada. São normalmente criados para testar o
  // comportamento de outros objetos.
  livros: [
    {
      titulo: "César",
      autor: "Alan Massie",
      descricao: `
        Júlio César é apresentado ao leitor narrando 
        suas memórias como general e político romano, 
        cujo nome original era Décimo Júnio Bruto Albino.`,
      imagem: "images/cesar.jpg"
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      descricao: `
        Publicado em 1949, o texto de Orwell nasceu destinado à polêmica. 
        Traduzido em mais de sessenta países, virou minissérie, filmes, 
        quadrinhos, mangás e até uma ópera.
      `,
      imagem: "images/1984.jpg"
    },
    {
      titulo: "Harry Potter e a Pedra Filosofal",
      autor: "J.K. Rowling",
      descricao: `
        Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por 
        um poderosíssimo bruxo quando ele ainda era um bebê.
      `,
      imagem: "images/pedra-filosofal.jpg"
    },
    {
      titulo: "Sapiens: Uma breve história da humanidade",
      autor: " Yuval Noah Harari",
      descricao: `
        O planeta Terra tem cerca de 4,5 bilhões de anos. Numa fração ínfima 
        desse tempo, uma espécie entre incontáveis outras o dominou: nós, humanos.
      `,
      imagem: "images/sapiens.jpg"
    },
    {
      titulo: "O Filho de Netuno",
      autor: "Rick Riordan",
      descricao: `
        Filho de Poseidon, o deus do mar, um belo dia Percy desperta sem 
        memória e acaba em um acampamento de heróis que não reconhece.
      `,
      imagem: "images/filho-de-netuno.jpg"
    },
    {
      titulo: "Fedro: ou Do Belo",
      autor: "Platão",
      descricao: `
        Fedro é um diálogo platônico que trata da investigação sobre a 
        retórica e o amor.
      `,
      imagem: "images/fedro.jpg"
    }
  ],

  // Função para atualizar a interface com os dados do livro
  exibirLivros() {
    const div = document.getElementById("livroDiv");
    div.innerHTML = "";
    const { livros } = Biblioteca;

    for (let i = 0; i < livros.length; i++) {
      div.innerHTML += `
    <div class="livro">
      <img src="${livros[i].imagem}" alt="${livros[i].titulo}" />
      <div>
        <h2>${livros[i].titulo}</h2>
        <h3>${livros[i].autor}</h3>
        <p>${livros[i].descricao}</p>
      </div>
    <div>
    `;
    }
  },

  // Método para adicionar um novo livro
  adicionarLivro() {
    const titulo = document.getElementById("tituloInput").value;
    const autor = document.getElementById("autorInput").value;
    const descricao = document.getElementById("descricaoInput").value;
    const imagem = document.getElementById("imagemInput").value;

    if (!titulo || !autor || !descricao || !imagem) {
      alert("Todos os dados precisam ser preenchidos")
      return;
    }

    const novoLivro = {
      titulo,
      autor,
      descricao,
      imagem
    }

    this.livros.push(novoLivro);
    this.exibirLivros(); // Atualiza a lista após adicionar
  },

  // Método para remover um livro
  removerLivro() {
    const titulo = document.getElementById("tituloRemoverInput").value;
    const index = this.livros.findIndex((livro) => livro.titulo === titulo);
    if (index !== -1) {
      this.livros.splice(index, 1);
      console.log(this.livros);
    }
    this.exibirLivros(); // Atualiza a lista após remover
  },
};

document
  .getElementById("adicionarLivroBtn")
  .addEventListener("click", () => Biblioteca.adicionarLivro());
document
  .getElementById("removerLivroBtn")
  .addEventListener("click", () => Biblioteca.removerLivro());

// Exemplo de como exibir o primeiro livro da lista
Biblioteca.exibirLivros();
