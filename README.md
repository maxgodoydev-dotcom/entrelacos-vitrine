<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=260&text=EntreLa%C3%A7os&fontSize=62&fontColor=FFF7FB&animation=twinkling&fontAlignY=38&desc=Vitrine%20Digital%20de%20Presentes%20%7C%20Cat%C3%A1logo%20Visual%20%2B%20WhatsApp&descAlignY=62&descSize=18&color=0:180617,25:4A0D2E,55:8A2BE2,78:C23B87,100:FF8FBD" />

<br>

![Status](https://img.shields.io/badge/STATUS-PUBLICADO-8A2BE2?style=for-the-badge)
![Projeto](https://img.shields.io/badge/PROJETO-VITRINE%20DIGITAL-C23B87?style=for-the-badge)
![Deploy](https://img.shields.io/badge/DEPLOY-VERCEL-000000?style=for-the-badge\&logo=vercel)
![Stack](https://img.shields.io/badge/STACK-HTML%20%7C%20CSS%20%7C%20JS-FF8FBD?style=for-the-badge)

<br>

### 💝 Uma vitrine digital bonita, responsiva e direta para divulgar kits presenteáveis com atendimento pelo WhatsApp.

<br>

🔗 **Acesse o projeto publicado:**

### https://entrelacos-vitrine.vercel.app

</div>

---

## ✨ Sobre o projeto

O **EntreLaços** é uma **vitrine digital de presentes** criada para apresentar kits de forma mais bonita, organizada e prática.

O projeto foi desenvolvido para ajudar um **colega de classe que revende produtos de marcas conhecidas**, oferecendo uma página simples, visualmente atrativa e fácil de usar, onde os clientes podem visualizar os kits, conferir detalhes e iniciar o atendimento diretamente pelo WhatsApp.

A ideia principal foi transformar uma divulgação comum, que poderia ficar espalhada em imagens e mensagens, em uma experiência mais profissional, elegante e centralizada.

---

## 💡 Problema que resolve

Divulgar produtos apenas por mensagens, fotos soltas ou listas pode dificultar a escolha do cliente. Muitas vezes a pessoa precisa perguntar preço, detalhes, disponibilidade e formas de entrega manualmente.

O **EntreLaços** resolve isso criando uma vitrine onde o cliente consegue:

* 💝 visualizar os produtos em cards organizados;
* 🏷️ comparar preços promocionais;
* 🔎 abrir detalhes de cada kit;
* 🖼️ ampliar a imagem do produto;
* 🧭 filtrar por categoria;
* 📲 iniciar o pedido pelo WhatsApp com mensagem pronta.

Com isso, o vendedor passa uma imagem mais profissional e o cliente tem uma experiência mais clara, bonita e rápida.

---

## 🖼️ Preview visual

<div align="center">

| Vitrine digital                     | Atendimento direto                 |
| ----------------------------------- | ---------------------------------- |
| 💝 Cards com imagens, preços e tags | 📲 Pedido automático pelo WhatsApp |
| 🏷️ Filtros por categoria           | 🔎 Modal com detalhes do produto   |
| ✨ Visual romântico e responsivo     | 💬 Mensagem pronta para o vendedor |

</div>

---

## 🎯 Objetivo

Criar uma página estática, leve e elegante para divulgação de kits presenteáveis, com foco em:

* estética visual;
* navegação simples;
* carregamento rápido;
* responsividade;
* organização dos produtos;
* integração direta com WhatsApp;
* publicação gratuita na Vercel.

---

## 🚀 Funcionalidades

* 💝 Vitrine digital com produtos carregados via `products.json`;
* 🧭 filtros por categoria:

  * **Todos**;
  * **Para ela**;
  * **Para ele**;
  * **Até R$ 100**;
  * **Premium**;
* 🏷️ cards com nome, linha, tags e preço;
* 💸 preço promocional no formato **De/Por**;
* 📉 cálculo automático de desconto quando existe `oldPrice`;
* 🔎 modal com maiores informações do produto;
* 🖼️ botão para ampliar a imagem do kit;
* 📲 botão de pedido via WhatsApp;
* 💬 mensagem automática personalizada por produto;
* ✨ animações de corações e símbolos ao mover/clicar;
* 🌊 efeito ripple nos botões;
* 🧊 efeito 3D nos cards com fallback;
* 📱 layout responsivo para celular, tablet e desktop;
* ⚠️ aviso de vitrine independente no rodapé.

---

## 🛠️ Tecnologias utilizadas

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-estrutura-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-layout%20%26%20anima%C3%A7%C3%B5es-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-interatividade-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=111)
![JSON](https://img.shields.io/badge/JSON-produtos-6E1846?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-deploy-000000?style=for-the-badge\&logo=vercel\&logoColor=white)

</div>

### Stack principal

| Tecnologia          | Uso no projeto                                       |
| ------------------- | ---------------------------------------------------- |
| **HTML5**           | Estrutura da página                                  |
| **CSS3**            | Layout, responsividade, cores, animações e visual    |
| **JavaScript puro** | Filtros, modal, renderização dos produtos e WhatsApp |
| **JSON**            | Cadastro dos produtos                                |
| **Vercel**          | Deploy e hospedagem                                  |
| **Google Fonts**    | Tipografia do projeto                                |
| **VanillaTilt.js**  | Efeito 3D nos cards                                  |

---

## 🎨 Identidade visual

A identidade do projeto foi pensada para transmitir uma sensação de presente, carinho e sofisticação.

| Elemento          | Estilo                     |
| ----------------- | -------------------------- |
| 💜 Roxo/neon      | destaque visual e botões   |
| 🌹 Vinho/rosa     | clima romântico e elegante |
| 🤍 Fundo claro    | leitura confortável        |
| ✨ Animações sutis | experiência mais viva      |
| 🖼️ Cards grandes | foco nos produtos          |

---

## 📁 Estrutura do projeto

```text
entrelacos-vitrine/
├── index.html
├── styles.css
├── script.js
├── products.json
├── vercel.json
├── robots.txt
├── _headers
├── _redirects
└── assets/
    ├── icons/
    │   └── favicon.svg
    └── images/
        ├── cover.webp
        ├── og-cover.webp
        └── imagens-dos-produtos.webp
```

---

## 🧩 Como editar os produtos

Os produtos ficam cadastrados no arquivo:

```text
products.json
```

Exemplo:

```json
{
  "id": "kit-para-seu-amor",
  "name": "Kit Para Seu Amor",
  "line": "Tododia Ameixa e Flor de Baunilha",
  "price": 134.90,
  "oldPrice": 149.90,
  "image": "assets/images/kit-para-seu-amor.webp",
  "badge": "Romântico",
  "categories": ["todos", "ela"],
  "tags": ["Doce", "Delicado"],
  "details": [
    ["Fixação", "até 6h na pele"],
    ["Acorde", "frutal adocicado com fundo amadeirado cremoso"],
    ["Combinação do kit", "creme nutritivo para o corpo + body splash"],
    ["Indicação", "para quem gosta de presente delicado, cheiroso e romântico"]
  ]
}
```

---

## 📲 Como alterar o WhatsApp

No arquivo `script.js`, altere:

```js
const WHATSAPP_NUMBER = "55XXXXXXXXXXX";
const SELLER_NAME = "Nome do vendedor";
```

Use o formato:

```text
DDI + DDD + número
```

Sem espaços, traços ou parênteses.

---

## ▶️ Como executar localmente

### Opção 1 — VS Code com Live Server

1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito no `index.html`.
4. Selecione **Open with Live Server**.

O projeto será aberto em algo parecido com:

```text
http://127.0.0.1:5500
```

### Opção 2 — Python

Dentro da pasta do projeto, execute:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

> Evite abrir o `index.html` direto com duplo clique, porque o navegador pode bloquear o carregamento do `products.json`.

---

## 🌐 Deploy

O projeto foi publicado na **Vercel**.

🔗 **Site publicado:**
https://entrelacos-vitrine.vercel.app

Para atualizar o site:

```bash
git add .
git commit -m "atualiza vitrine"
git push
```

A Vercel detecta o novo commit e realiza o deploy automaticamente.

---

## 🔐 Configurações e boas práticas

O projeto inclui arquivos de apoio para publicação e segurança:

* `vercel.json`;
* `_headers`;
* `_redirects`;
* `robots.txt`;
* `Content-Security-Policy`;
* `X-Content-Type-Options`;
* `Referrer-Policy`;
* `Permissions-Policy`.

---

## ⚠️ Aviso comercial

Esta é uma vitrine independente criada para fins de divulgação e atendimento direto.

Marcas, linhas e produtos pertencem aos seus respectivos fabricantes. Disponibilidade, entrega, retirada, montagem dos kits e preços devem ser confirmados diretamente pelo WhatsApp.

---

## 🔮 Melhorias futuras

* 🟢 status de produto: disponível, reservado ou vendido;
* 🧑‍💻 painel administrativo simples;
* 🔍 busca por nome do produto;
* 💬 seção de depoimentos;
* 📊 analytics privacy-friendly;
* 📲 preview personalizado para WhatsApp;
* 📦 controle simples de estoque.

---

## 👨‍💻 Autor

<div align="center">

Desenvolvido por **Max Godoy**
como uma solução prática para apoiar a divulgação de produtos de um colega de classe.

<br>

![Feito com HTML](https://img.shields.io/badge/feito%20com-HTML%20%2B%20CSS%20%2B%20JS-8A2BE2?style=for-the-badge)
![Projeto com propósito](https://img.shields.io/badge/projeto-com%20prop%C3%B3sito-C23B87?style=for-the-badge)
![EntreLaços](https://img.shields.io/badge/EntreLa%C3%A7os-vitrine%20digital-FF8FBD?style=for-the-badge)

</div>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=140&section=footer&color=0:180617,35:4A0D2E,65:8A2BE2,100:FF8FBD" />
