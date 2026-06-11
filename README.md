# EntreLaços — Vitrine Digital de Presentes

Projeto estático criado para divulgar kits especiais de Dia dos Namorados com foco em visual, responsividade, integração com WhatsApp e acabamento técnico para publicação.

## Objetivo

Criar uma vitrine digital simples, bonita e direta, onde a pessoa escolhe um kit, vê as maiores informações e inicia o atendimento pelo WhatsApp com uma mensagem pronta.

## Funcionalidades

- Vitrine de produtos com filtros: **Todos**, **Para ela**, **Para ele**, **Até R$ 100** e **Premium**.
- Cards com preço promocional no formato **De/Por**.
- Modal com maiores informações: fixação, acorde, combinação do kit e indicação.
- Botões de WhatsApp com mensagem automática por produto.
- Fundo com transição lenta de cores românticas.
- Corações/símbolos ao mover o mouse e clicar.
- Efeito de shimmer nos cards.
- Ripple effect nos botões.
- Efeito 3D nos cards com fallback.
- Layout responsivo para celular, tablet e desktop.
- Aviso de vitrine independente no footer.

## Stack

- HTML5
- CSS3
- JavaScript puro
- JSON para cadastro dos produtos

## Recursos externos gratuitos

- **Google Fonts**: Sora e Cormorant Garamond.
- **VanillaTilt** via jsDelivr CDN para efeito 3D nos cards.

Se o CDN do VanillaTilt não carregar, o site continua funcionando normalmente, apenas sem o efeito 3D.

## Estrutura

```text
entrelacos-release-final/
├── index.html
├── styles.css
├── script.js
├── products.json
├── _headers
├── _redirects
├── vercel.json
├── robots.txt
└── assets/
    ├── icons/
    └── images/
```

## Como editar produtos

Edite o arquivo `products.json`.

Campos principais:

```json
{
  "name": "Nome do produto",
  "line": "Linha ou descrição curta",
  "price": 134.90,
  "oldPrice": 149.90,
  "image": "assets/images/imagem.webp",
  "categories": ["todos", "ela"],
  "tags": ["Doce", "Delicado"]
}
```

## Como editar o WhatsApp

No arquivo `script.js`, altere:

```js
const WHATSAPP_NUMBER = "5511964661995";
const SELLER_NAME = "Rómulo";
```

Use DDI + DDD + número, sem espaços e sem traços.

## Como executar localmente

### Opção 1 — VS Code

1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server**.
3. Clique em **Go Live**.

### Opção 2 — Python

No terminal dentro da pasta:

```bash
python -m http.server 5500
```

Acesse:

```text
http://localhost:5500
```

> Evite abrir o `index.html` direto com duplo clique, porque o navegador pode bloquear o carregamento do `products.json`.

## Segurança e deploy

O projeto inclui:

- `_headers` para Netlify;
- `vercel.json` para Vercel;
- `Content-Security-Policy`;
- `X-Content-Type-Options`;
- `Referrer-Policy`;
- `Permissions-Policy`;
- proteção contra embed externo.

## Observação comercial

Os preços antigos em `oldPrice` devem ser confirmados antes da publicação. Se não houver preço anterior real, use somente preço especial ou remova o campo no layout.

## Aviso de independência

Esta vitrine é independente. Marcas e produtos pertencem aos seus respectivos fabricantes. Disponibilidade, entrega e montagem dos kits são confirmadas via WhatsApp.

## Melhorias futuras

- Trocar estoque manual por status: disponível, reservado ou vendido.
- Criar painel admin simples.
- Adicionar analytics privacy-friendly, como Umami ou Plausible.
- Criar versão de preview exclusiva para WhatsApp.


## Ajustes de polimento mobile

- Menu hamburguer no mobile.
- Filtros mantidos e com rolagem horizontal mais suave.
- Produtos carregados via `products.json`.
- `srcset` e versões `-sm.webp` para melhorar carregamento em mobile.
- Badge de desconto calculado automaticamente quando houver `oldPrice`.
- Skeleton loading enquanto o catálogo carrega.
- Botão principal do card abre detalhes antes do pedido.
- Modal com scroll interno em telas pequenas.
- Trail de corações desativado em mousemove no touch/mobile para melhorar performance.
- OG image com URL absoluta para melhorar preview no WhatsApp.


## Ajuste de hero

- Hero inicial alterado para layout lateral.
- Texto e chamada principal ficam à esquerda.
- Imagem/capa fica à direita no desktop.
- No mobile, o bloco empilha com texto acima e imagem abaixo, mantendo proporção padronizada.


## Refino do topo

- Hero reorganizado com mais harmonia visual.
- Bloco de texto com card suave à esquerda.
- Imagem à direita com proporção melhor controlada.
- Menu principal do desktop convertido em mini menu.
- Intro principal agora não depende de animação/reveal para aparecer.


## Refação estrutural da landing page

Nesta revisão, a estrutura da página inicial foi reorganizada, mantendo a vitrine digital com os produtos já cadastrados.

### Alterações principais
- hero refeito com **texto primeiro** e **banner horizontal logo abaixo**;
- navbar com **mini menu central**, glow/neon leve e botão de WhatsApp separado;
- fundo com **efeito luminária** e transição suave de cores;
- elementos decorativos com aparência 3D em pontos estratégicos;
- cards informativos reestruturados;
- footer simplificado, sem repetir a logo;
- modal de produto com botão **"Ampliar imagem"** para ver a foto maior.

### Como executar localmente
Como é um projeto estático, basta abrir com um servidor local.

Exemplo com Python:
```bash
python -m http.server 8000
```

Depois, abra:
```text
http://localhost:8000
```

Ou use a extensão **Live Server** no VS Code.


## Atualização do topo
- removida a imagem do começo do site;
- adicionado bloco principal escuro com efeito luminária e troca suave de cores;
- navbar refinada com mini menu central e glow/neon;
- modal com botão de ampliar imagem mantido;
- vitrine digital e cards preservados com as imagens dos produtos.


## Ajuste rápido solicitado
- removidos os elementos decorativos fixos do fundo da página;
- mantidas apenas as animações interativas do mouse/clique;
- vitrine digital redimensionada para cards mais alinhados;
- imagens dos produtos melhor enquadradas dentro dos cards.
