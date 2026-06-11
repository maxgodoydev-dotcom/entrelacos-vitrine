const WHATSAPP_NUMBER = "5511964661995";
const SELLER_NAME = "Rómulo";

const fallbackProducts = [
  {
    "id": "kit-para-seu-amor",
    "name": "Kit Para Seu Amor",
    "line": "Tododia Ameixa e Flor de Baunilha",
    "price": 134.9,
    "oldPrice": 149.9,
    "image": "assets/images/kit-para-seu-amor.webp",
    "imageWidth": 1122,
    "imageHeight": 1402,
    "badge": "Romântico",
    "categories": [
      "todos",
      "ela"
    ],
    "tags": [
      "Doce",
      "Delicado"
    ],
    "details": [
      [
        "Fixação",
        "até 6h na pele"
      ],
      [
        "Acorde",
        "frutal adocicado com fundo amadeirado cremoso"
      ],
      [
        "Combinação do kit",
        "creme nutritivo para o corpo + body splash"
      ],
      [
        "Indicação",
        "para quem gosta de presente delicado, cheiroso e romântico"
      ]
    ]
  },
  {
    "id": "mimo-romantico",
    "name": "Mimo Romântico",
    "line": "Linha Tododia",
    "price": 69.9,
    "oldPrice": 84.9,
    "image": "assets/images/mimo-romantico.webp",
    "imageWidth": 1122,
    "imageHeight": 1402,
    "badge": "Acessível",
    "categories": [
      "todos",
      "ela",
      "ate100"
    ],
    "tags": [
      "Até R$ 100",
      "Mimo"
    ],
    "details": [
      [
        "Fixação",
        "4 a 6h"
      ],
      [
        "Acorde",
        "adocicado suave"
      ],
      [
        "Combinação do kit",
        "hidratante Tododia + embalagem especial"
      ],
      [
        "Indicação",
        "para uma lembrança bonita, prática e carinhosa"
      ]
    ]
  },
  {
    "id": "carinho-em-presente",
    "name": "Carinho em Presente",
    "line": "Linha Tododia",
    "price": 76.9,
    "oldPrice": 89.9,
    "image": "assets/images/carinho-em-presente.webp",
    "imageWidth": 1122,
    "imageHeight": 1402,
    "badge": "Queridinho",
    "categories": [
      "todos",
      "ela",
      "ate100"
    ],
    "tags": [
      "Leve",
      "Versátil"
    ],
    "details": [
      [
        "Fixação",
        "4 a 6h"
      ],
      [
        "Acorde",
        "suave e confortável"
      ],
      [
        "Combinação do kit",
        "body splash Tododia + mimo de banho + embalagem especial"
      ],
      [
        "Indicação",
        "para quem quer um presente leve, cheiroso e com boa apresentação"
      ]
    ]
  },
  {
    "id": "essencial-classico",
    "name": "Essencial Clássico",
    "line": "Deo Parfum Masculino",
    "price": 225.9,
    "oldPrice": 249.9,
    "image": "assets/images/essencial-classico.webp",
    "imageWidth": 1122,
    "imageHeight": 1402,
    "badge": "Elegante",
    "categories": [
      "todos",
      "ele",
      "premium"
    ],
    "tags": [
      "Amadeirado",
      "Sofisticado"
    ],
    "details": [
      [
        "Fixação",
        "aprox. 10h"
      ],
      [
        "Acorde",
        "amadeirado aromático"
      ],
      [
        "Notas",
        "bergamota, lavanda, patchouli e madeiras nobres"
      ],
      [
        "Combinação do kit",
        "deo parfum 100 ml + embalagem presenteável"
      ],
      [
        "Indicação",
        "para quem gosta de fragrância elegante, masculina e marcante"
      ]
    ]
  },
  {
    "id": "essencial-safran",
    "name": "Essencial Safran",
    "line": "Luxo e intensidade",
    "price": 222.9,
    "oldPrice": 239.9,
    "image": "assets/images/essencial-safran.webp",
    "imageWidth": 1122,
    "imageHeight": 1402,
    "badge": "Premium",
    "categories": [
      "todos",
      "ela",
      "premium"
    ],
    "tags": [
      "Até 14h",
      "Marcante"
    ],
    "details": [
      [
        "Fixação",
        "até 14h"
      ],
      [
        "Acorde",
        "amadeirado especiado"
      ],
      [
        "Notas",
        "açafrão, paramela e madeiras nobres"
      ],
      [
        "Combinação do kit",
        "deo parfum + embalagem especial"
      ],
      [
        "Indicação",
        "para quem quer impressionar com um presente mais sofisticado"
      ]
    ]
  },
  {
    "id": "essencial-atrai",
    "name": "Essencial Atrai",
    "line": "Fragrância marcante",
    "price": 234.9,
    "oldPrice": 259.9,
    "image": "assets/images/essencial-atrai.webp",
    "imageWidth": 1122,
    "imageHeight": 1402,
    "badge": "Destaque",
    "categories": [
      "todos",
      "ele",
      "premium"
    ],
    "tags": [
      "Intenso",
      "Amadeirado"
    ],
    "details": [
      [
        "Fixação",
        "aprox. 10h"
      ],
      [
        "Acorde",
        "amadeirado especiado"
      ],
      [
        "Notas",
        "pimenta rosa e madeiras nobres"
      ],
      [
        "Combinação do kit",
        "dupla Essencial Atrai em embalagem especial"
      ],
      [
        "Indicação",
        "para quem prefere presença, intensidade e visual premium"
      ]
    ]
  }
];

let products = [...fallbackProducts];

const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

const productGrid = document.querySelector("#productGrid");
const filters = document.querySelectorAll(".filter");
const modal = document.querySelector("#productModal");
const modalClose = document.querySelector("#modalClose");
const modalImage = document.querySelector("#modalImage");
const modalWhatsapp = document.querySelector("#modalWhatsapp");
const clickBursts = document.querySelector("#clickBursts");
const navToggle = document.querySelector("#navToggle");
const navDrawer = document.querySelector("#navDrawer");
const imageLightbox = document.querySelector("#imageLightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxClose = document.querySelector("#lightboxClose");
const zoomImageBtn = document.querySelector("#zoomImageBtn");

const isTouchDevice = window.matchMedia("(hover: none)").matches;

function buildMessage(product) {
  if (!product) {
    return encodeURIComponent(`Oi, ${SELLER_NAME}! Vi a vitrine EntreLaços e queria consultar os kits disponíveis para o Dia dos Namorados.`);
  }

  return encodeURIComponent(`Oi, ${SELLER_NAME}! Vi a vitrine EntreLaços e tenho interesse no ${product.name}, de ${money.format(product.price)}. Ainda está disponível?`);
}

function whatsappLink(product) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${buildMessage(product)}`;
}

function discountPercent(product) {
  if (!product.oldPrice || product.oldPrice <= product.price) return null;
  return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
}

function loadProducts() {
  return fetch("products.json", { cache: "no-store" })
    .then(response => {
      if (!response.ok) throw new Error("products.json não carregou");
      return response.json();
    })
    .then(data => {
      if (Array.isArray(data) && data.length) {
        products = data;
      }
    })
    .catch(error => {
      console.warn("Products JSON falhou. Usando fallback interno para manter a vitrine visível.", error);
      products = [...fallbackProducts];
    });
}

function productTemplate(product) {
  const tags = (product.tags || []).map(tag => `<span>${tag}</span>`).join("");
  const discount = discountPercent(product);

  return `
    <article class="product-card reveal visible glow-card" data-id="${product.id}">
      <button class="poster-wrap poster-button" type="button" data-open="${product.id}" aria-label="Abrir detalhes de ${product.name}">
        <img
          src="${product.image}"
          width="${product.imageWidth || 1122}"
          height="${product.imageHeight || 1402}"
          alt="${product.name}"
          loading="lazy"
          decoding="async"
          onerror="this.closest('.poster-wrap').classList.add('image-error')"
        />
        <span class="badge">${product.badge}</span>
        ${discount ? `<span class="badge-discount">-${discount}%</span>` : ""}
        <span class="poster-3d poster-ring" aria-hidden="true"></span>
      </button>

      <div class="product-info">
        <div class="product-line">
          <div>
            <h3>${product.name}</h3>
            <small>${product.line}</small>
          </div>

          <div class="price-wrap" aria-label="Preço promocional">
            <span class="old-price">De ${money.format(product.oldPrice)}</span>
            <strong class="price">Por ${money.format(product.price)}</strong>
          </div>
        </div>

        <div class="tag-row">${tags}</div>

        <div class="product-actions">
          <a class="btn btn-primary ripple-target" href="${whatsappLink(product)}" target="_blank" rel="noopener">
            Pedir
          </a>
          <button class="btn btn-ghost ripple-target details-btn" type="button" data-open="${product.id}">
            Mais informações
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(filter = "todos") {
  if (!productGrid) return;

  const filtered = products.filter(product => (product.categories || []).includes(filter));
  productGrid.innerHTML = filtered.length
    ? filtered.map(productTemplate).join("")
    : `<p class="noscript">Nenhum kit encontrado nesse filtro.</p>`;

  bindProductButtons();
  addRippleEffect();
  initTilt();
  revealOnScroll();
}

function bindProductButtons() {
  document.querySelectorAll("[data-open]").forEach(element => {
    element.addEventListener("click", () => openProduct(element.dataset.open));
  });
}

function openProduct(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalImage.dataset.zoomSrc = product.image;

  document.querySelector("#modalTitle").textContent = product.name;
  document.querySelector("#modalSubtitle").textContent = product.line;
  document.querySelector("#modalOldPrice").textContent = `De ${money.format(product.oldPrice)}`;
  document.querySelector("#modalPrice").textContent = `Por ${money.format(product.price)}`;
  document.querySelector("#modalDetails").innerHTML = product.details.map(([label, value]) => `
    <div class="detail"><strong>${label}</strong><span>${value}</span></div>
  `).join("");

  modalWhatsapp.href = whatsappLink(product);
  modalWhatsapp.target = "_blank";
  modalWhatsapp.rel = "noopener";

  if (typeof modal.showModal === "function") modal.showModal();
  else modal.setAttribute("open", "open");

  document.body.classList.add("no-scroll");
}

function closeProduct() {
  if (modal?.open) modal.close();
  document.body.classList.remove("no-scroll");
}

function openLightbox() {
  const src = modalImage.dataset.zoomSrc || modalImage.src;
  if (!src) return;

  lightboxImage.src = src;
  lightboxImage.alt = modalImage.alt || "Imagem ampliada do produto";

  if (typeof imageLightbox.showModal === "function") imageLightbox.showModal();
  else imageLightbox.setAttribute("open", "open");

  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  if (imageLightbox?.open) imageLightbox.close();
  if (!modal?.open) document.body.classList.remove("no-scroll");
}

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(item => item.classList.toggle("is-active", item === button));
    renderProducts(button.dataset.filter);
  });
});

function bindWhatsappLinks() {
  ["navWhatsapp", "footerWhatsapp", "heroWhatsapp"].forEach(id => {
    const element = document.getElementById(id);
    if (!element) return;
    element.href = whatsappLink();
    element.target = "_blank";
    element.rel = "noopener";
  });
}

function bindMobileNav() {
  if (!navToggle || !navDrawer) return;

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navDrawer.classList.toggle("open", !expanded);
    navDrawer.setAttribute("aria-hidden", String(expanded));
  });

  navDrawer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navDrawer.classList.remove("open");
      navDrawer.setAttribute("aria-hidden", "true");
    });
  });
}

modalClose?.addEventListener("click", closeProduct);
modal?.addEventListener("click", event => {
  const panel = modal.querySelector(".modal-panel");
  const rect = panel.getBoundingClientRect();
  const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inside) closeProduct();
});

zoomImageBtn?.addEventListener("click", openLightbox);
modalImage?.addEventListener("click", openLightbox);
lightboxClose?.addEventListener("click", closeLightbox);
imageLightbox?.addEventListener("click", event => {
  const panel = imageLightbox.querySelector(".lightbox-panel");
  const rect = panel.getBoundingClientRect();
  const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inside) closeLightbox();
});

window.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeLightbox();
    closeProduct();
    navToggle?.setAttribute("aria-expanded", "false");
    navDrawer?.classList.remove("open");
    navDrawer?.setAttribute("aria-hidden", "true");
  }
});

let lastTrailTime = 0;
const hearts = ["♡", "♥", "❦", "✧", "💘", "✨"];
const colors = ["#ff6b9f", "#ff8fb7", "#b46cff", "#ff4f93", "#8f315e", "#ffd4e5"];

function spawnHeartBurst(x, y, count = 4) {
  if (!clickBursts) return;

  const burst = document.createElement("div");
  burst.className = "click-burst";
  burst.style.left = `${x}px`;
  burst.style.top = `${y}px`;
  clickBursts.appendChild(burst);

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "click-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.setProperty("--size", `${14 + Math.random() * 15}px`);
    heart.style.setProperty("--dx", `${(Math.random() - 0.5) * (count > 4 ? 110 : 54)}px`);
    heart.style.setProperty("--dy", `${-30 - Math.random() * (count > 4 ? 64 : 40)}px`);
    burst.appendChild(heart);
  }

  setTimeout(() => burst.remove(), 1200);
}

if (!isTouchDevice) {
  window.addEventListener("mousemove", event => {
    const now = Date.now();
    if (now - lastTrailTime < 90) return;
    lastTrailTime = now;
    spawnHeartBurst(event.clientX, event.clientY, 2);
  });
}

document.addEventListener("click", event => {
  spawnHeartBurst(event.clientX, event.clientY, 6);
});

document.addEventListener("touchstart", event => {
  const touch = event.touches[0];
  if (!touch) return;
  spawnHeartBurst(touch.clientX, touch.clientY, 5);
}, { passive: true });

function addRippleEffect() {
  document.querySelectorAll(".ripple-target").forEach(element => {
    if (element.dataset.rippleReady) return;
    element.dataset.rippleReady = "true";

    element.addEventListener("click", function(event) {
      const circle = document.createElement("span");
      circle.className = "ripple";
      const diameter = Math.max(this.clientWidth, this.clientHeight);
      circle.style.width = circle.style.height = `${diameter}px`;

      const rect = this.getBoundingClientRect();
      circle.style.left = `${event.clientX - rect.left - diameter / 2}px`;
      circle.style.top = `${event.clientY - rect.top - diameter / 2}px`;

      this.appendChild(circle);
      circle.addEventListener("animationend", () => circle.remove());
    });
  });
}

function initTilt() {
  if (!window.VanillaTilt || isTouchDevice) return;

  document.querySelectorAll(".product-card, .benefit-card, .hero-spotlight").forEach(card => {
    if (card.vanillaTilt) return;

    VanillaTilt.init(card, {
      max: 4,
      speed: 350,
      glare: true,
      "max-glare": 0.10,
      scale: 1.01
    });
  });
}

function revealOnScroll() {
  const trigger = window.innerHeight * 0.94;

  document.querySelectorAll(".reveal:not(.visible)").forEach((element, index) => {
    if (element.getBoundingClientRect().top < trigger) {
      setTimeout(() => element.classList.add("visible"), Math.min(index * 30, 180));
    }
  });
}

window.addEventListener("scroll", revealOnScroll, { passive: true });
window.addEventListener("load", revealOnScroll);

async function init() {
  bindWhatsappLinks();
  bindMobileNav();
  addRippleEffect();

  await loadProducts();
  renderProducts("todos");

  initTilt();
  revealOnScroll();
}

init();
