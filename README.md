# 🛍️ LANKO STORE — E-commerce com JavaScript e API

A **LANKO STORE** é um projeto fictício de e-commerce desenvolvido com HTML5, CSS3 e JavaScript puro, como parte das atividades práticas da graduação em Análise e Desenvolvimento de Sistemas.

O objetivo do projeto é aplicar conceitos de desenvolvimento Front-end, incluindo HTML semântico, estilização responsiva, manipulação do DOM, eventos JavaScript, consumo de APIs públicas e boas práticas de organização de código (Clean Code).

O layout foi desenvolvido a partir de um protótipo criado no Figma.

---

## 🚀 Demonstração

🌐 **[Acessar a LANKO STORE online](https://l4nko.github.io/lanko-store/)**

---

## 💻 Tecnologias utilizadas

- **HTML5:** estruturação semântica do conteúdo.
- **CSS3:** estilização e organização visual.
- **Flexbox:** alinhamento dos elementos.
- **CSS Grid:** organização responsiva dos produtos.
- **Media Queries:** adaptação para computadores e dispositivos móveis.
- **JavaScript:** manipulação do DOM, eventos e interatividade.
- **Fetch API:** consumo de dados externos.
- **Async/Await:** tratamento de operações assíncronas.
- **Figma:** prototipação da interface.
- **Git e GitHub:** versionamento e publicação do projeto.

---

## ⚙️ Funcionalidades

### 🛒 Interação com produtos

Os botões "Adicionar ao carrinho" exibem uma mensagem de confirmação com o nome do produto selecionado.

*Observação: o projeto não possui um carrinho de compras funcional.*

### 🌙 Alternância de temas

O usuário pode alternar entre os temas claro e escuro por meio de um botão no cabeçalho.

### 🕒 Data e hora em tempo real

O rodapé apresenta a data e a hora atuais, atualizadas automaticamente a cada segundo com JavaScript.

### 🌐 Consumo de API

O projeto utiliza a [Fake Store API](https://fakestoreapi.com/) para carregar produtos fictícios dinamicamente.

Por meio de `fetch()`, são obtidas informações como:

- Imagem do produto.
- Nome.
- Descrição.
- Preço.

Os dados recebidos são utilizados para criar novos cards na página por meio da manipulação do DOM.

**Observação:** os produtos da API mantêm suas descrições originais em inglês e preços em dólares (US$).

---

## 🧹 Boas práticas e Clean Code

Durante o desenvolvimento, procurei aplicar boas práticas de organização de código:

- Nomes claros para variáveis e funções.
- Separação de responsabilidades.
- Reutilização de funções para evitar repetição de código.
- Tratamento de erros no consumo da API utilizando `try/catch`.
- Organização dos arquivos HTML, CSS e JavaScript em pastas específicas.

---

## 📁 Estrutura do projeto

```text
lanko-store/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── banner1.png
    ├── camiseta.png
    ├── moletom.png
    └── calca.png
```

---

## ▶️ Como executar o projeto

1. Clone o repositório ou baixe os arquivos do projeto.
2. Abra a pasta no Visual Studio Code.
3. Execute o `index.html` utilizando a extensão Live Server.
4. Acesse a loja no navegador.

**Importante:** é necessário ter conexão com a internet para carregar os produtos da API.

---

## 📌 Melhorias futuras

- Implementar um carrinho de compras funcional.
- Adicionar contador de produtos no carrinho.
- Criar filtros e pesquisa de produtos.
- Implementar persistência de dados com `localStorage`.
- Aprimorar a integração com APIs.
- Melhorar a experiência de navegação em dispositivos móveis.

---

## 👨‍💻 Autor

Desenvolvido por **Alan Camargo**, estudante de Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento Front-end.

**GitHub:** [L4NKO](https://github.com/L4NKO)

---

⭐ Projeto desenvolvido para fins educacionais e aprimoramento das habilidades em desenvolvimento web.
