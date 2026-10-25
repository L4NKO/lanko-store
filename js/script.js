// Exibe a confirmação de compra
function confirmarCompra(nomeProduto) {
  alert(`${nomeProduto} adicionado ao carrinho!`);
}

const botoesComprar = document.querySelectorAll(".produto button");

botoesComprar.forEach((botao) => {
  botao.addEventListener("click", () => {
    const produto = botao.dataset.produto;

    confirmarCompra(produto);
  });
});

const elementoDataHora = document.querySelector("#data-hora");

function atualizarDataHora() {
  const agora = new Date();

  const data = agora.toLocaleDateString("pt-BR");
  const hora = agora.toLocaleTimeString("pt-BR");

  elementoDataHora.textContent = `${data} - ${hora}`;
}

atualizarDataHora();

setInterval(atualizarDataHora, 1000);

const botaoTema = document.querySelector("#alterar-tema");

botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("tema-escuro");

  const temaEscuro = document.body.classList.contains("tema-escuro");

  if (temaEscuro) {
    botaoTema.textContent = "☀️ Tema claro";
  } else {
    botaoTema.textContent = "🌙 Tema escuro";
  }
});

// Elementos da seção de produtos da API
const listaProdutosApi = document.querySelector("#lista-produtos-api");
const mensagemApi = document.querySelector("#mensagem-api");

// Responsável por buscar os dados da API
async function carregarProdutos() {
  try {
    const resposta = await fetch("https://fakestoreapi.com/products?limit=3");

    if (!resposta.ok) {
      throw new Error("Não foi possível carregar os produtos.");
    }

    const produtos = await resposta.json();

    exibirProdutos(produtos);
    mensagemApi.textContent = "";
  } catch (erro) {
    mensagemApi.textContent = "Erro ao carregar os produtos.";
    console.error(erro);
  }
}

// Responsável por criar os cards na página
function exibirProdutos(produtos) {
  listaProdutosApi.innerHTML = "";

  produtos.forEach((produto) => {
    const card = document.createElement("article");
    card.classList.add("produto");

    const imagem = document.createElement("img");
    imagem.src = produto.image;
    imagem.alt = produto.title;

    const nome = document.createElement("h3");
    nome.textContent = produto.title;

    const descricao = document.createElement("p");
    descricao.textContent = produto.description;

    // A fake Store API fornece descrições em inglês e preços  em dólares.
    // Os dados originais foram mantidos para demonstrar o consumo da API.
    const preco = document.createElement("span");
    preco.textContent = `US$ ${produto.price.toFixed(2)}`;

    const botao = document.createElement("button");
    botao.type = "button";
    botao.textContent = "Adicionar ao carrinho";

    botao.addEventListener("click", () => {
      confirmarCompra(produto.title);
    });

    card.append(imagem, nome, descricao, preco, botao);
    listaProdutosApi.appendChild(card);
  });
}

carregarProdutos();

/*
REFLEXÃO SOBRE CLEAN CODE

Neste projeto, procurei aplicar os princípios de Clean Code
utilizando nomes de variáveis e funções claros e organizando
o JavaScript em partes com responsabilidades específicas.

Separei a busca de dados da API da criação dos cards,
facilitando a leitura e a manutenção do código.

Também utilizei uma função para evitar a repetição
da mensagem de confirmação ao adicionar produtos.

Como melhoria futura, pretendo separar as funcionalidades
em arquivos JavaScript diferentes e implementar um
carrinho de compras funcional.
*/
