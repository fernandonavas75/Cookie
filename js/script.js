  /* ═══════════════════════════════════════════════════════════════
     MÓRDIKA — Catalog data
     ═══════════════════════════════════════════════════════════════ */
  const MORDIKA = {
    phone: "+593962791136",
    whatsapp: "593962791136",
    instagram: "m_mordika",
    instagramUrl: "https://instagram.com/m_mordika",
    dipExtra: 0.75,
    formats: [
      { id: "regular", title: "Tamaño de una mano", subtitle: "Galleta clásica, generosa", sub: "Regular",
        sizes: [
          { id: "r1",  label: "1 pieza",   pieces: 1,  price: 1.00 },
          { id: "r3",  label: "3 piezas",  pieces: 3,  price: 3.00 },
          { id: "r6",  label: "6 piezas",  pieces: 6,  price: 5.00 },
          { id: "r12", label: "12 piezas", pieces: 12, price: 10.50 },
        ]},
      { id: "mini", title: "Tamaño de media mano", subtitle: "Mini, para compartir", sub: "Mini",
        sizes: [
          { id: "m6",  label: "6 mini",   pieces: 6,  price: 2.00 },
          { id: "m10", label: "10 mini",  pieces: 10, price: 3.00 },
          { id: "m12", label: "12 mini",  pieces: 12, price: 5.00 },
          { id: "m16", label: "16 mini",  pieces: 16, price: 10.50 },
        ]},
    ],
    flavors: [
      { id: "vainilla",       name: "Vainilla",                          category: "principal", desc: "La base, suave y clásica",    img: "img/sabores/vainilla.jpg" },
      {id: "redvelvet",       name: "Red Velvet",                        category: "principal", desc: "Con cacao y un toque de acidez, el favorito de muchos", img: "img/sabores/redvelvet.jpg"},
      {id: "chocolate",       name: "Chocolate",                         category: "principal", desc: "Intenso y reconfortante",     img: "img/sabores/chocolate.jpg" },
      {id: "lechepolvo",      name: "Leche en polvo",                    category: "principal", desc: "Dulce y con un toque nostálgico, como las galletas de la infancia", img: "img/sabores/lechepolvo.jpg"},
      {id: "m&m", name:"M&M's", category: "principal", desc: "Galleta de vainilla con trozos de M&M's, un clásico que nunca falla", img: "img/sabores/mym.jpg"},
      {id: "chispaschocolate" ,name: "chispas de chocolate",                 category: "principal", desc: "La clásica galleta con chispas de chocolate, un favorito atemporal", img: "img/sabores/chispas.jpg"},
      {id: "mermelad" , name: "Mermelada",                         category: "principal",  desc: "Galleta de vainilla con un corazón de mermelada de fresa, frambuesa o mora", img: "img/sabores/mermelada.jpg"},
      {id: "nutella" , name: "Nutella",                           category: "principal",  desc: "Galleta de vainilla con un corazón cremoso de Nutella", img: "img/sabores/nutella.jpg"},
      {id: "chocovainilla", name: "Chocolate y Vainilla", category: "principal",  desc: "La combinación perfecta: galleta de vainilla con chispas de chocolate", img: "img/sabores/chocovainilla.jpg"},
      {id: "redvainilla", name: "Red Velvet y Vainilla", category: "principal",  desc: "Un giro al clásico red velvet, con una base de vainilla y un toque de cacao", img: "img/sabores/redvainilla.jpg"},
      {id: "chispchonut", name: "Chispas de chocolate y relleno de nutella", category: "especial",  desc: "Galleta de vainilla con chispas de chocolate y un corazón cremoso de Nutella", img: "img/sabores/chispas.jpg"},
      {id: "chiscolores", name: "Chispas de colores", category: "especial",  desc: "Galleta de vainilla con chispas de colores, alegre y divertida", img: "img/sabores/chiscolores.jpg"},
      {id: "chischoblacno", name: "Chispas de chocolate blanco", category: "especial",  desc: "Galleta de vainilla con chispas de chocolate blanco, dulce y cremosa", img: "img/sabores/chischoblanco.jpg"},
      {id: "redbetun", name: "Red Velvet y Betún", category: "especial",  desc: "Una combinación irresistible de red velvet y betún, un sabor único", img: "img/sabores/redbetun.jpg"},
      {id: "redchischo", name: "Red Velvet y chispas de chocolate", category: "especial", desc: "Una deliciosa mezcla de red velvet con chispas de chocolate, el equilibrio perfecto entre sabor y textura", img: "img/sabores/redchischo.jpg"},
      {id: "kinder",         name: "Kinder",                            category: "especial",  desc: "Chocolate de avellanas",      img: "img/sabores/kinder.jpg" },
      {id: "chischorelcho", name: "Chocolate y chispas de chocolate", category: "especial",  desc: "Para los amantes del chocolate, una galleta de chocolate con chispas de chocolate", img: "img/sabores/chischococho.jpg"},
      {id: "galfresa", name: "Galleta de fresa", category: "especial", desc: "Galleta de vainilla con chispas de fresa, dulce y frutal", img: "img/sabores/galfresa.jpg"},
      {id: "cinnamon", name: "Cinnamon", category: "premium", desc: "Galleta de vainilla con un toque de canela, cálida y reconfortante", img: "img/sabores/cinnamon.jpg"},
      {id: "limon", name: "De Limon",category: "premium", desc: "Galleta de vainilla con chispas de limón, fresca y cítrica", img: "img/sabores/limon.jpg"},
      {id: "de Oreo", name: "De Oreo", category: "premium", desc: "Galleta de chocolate con trozos de Oreo, un clásico reinventado", img: "img/sabores/oreo.jpg"},
      {id: "smore", name: "S'Mores - Estilo Fogata", category: "premium", desc: "Galleta de chocolate con un corazón de malvavisco y trozos de graham, inspirada en el clásico postre de fogata", img: "img/sabores/smore.jpg"},
      {id: "chocobrownie", name: "Brownie Craquelada", category: "premium", desc: "Galleta de chocolate con un intenso sabor a brownie, para los amantes del chocolate oscuro", img: "img/sabores/chocobrownie.jpg"},
      {id: "monster", name: "Monster Cookie", category: "premium", desc: "Galleta de chocolate con chispas de chocolate, avena y nueces, una combinación monstruosamente deliciosa", img: "img/sabores/monster.jpg"},
      {id: "nuez", name: "Nueces", category: "premium", desc: "Galleta de vainilla con trozos de nuez, crujiente y llena de sabor", img: "img/sabores/nuez.png"},
      {id: "frurojosos", name: "Frutos Rojos", category: "premium", desc: "Galleta de vainilla con chispas de frutos rojos, dulce y ligeramente ácido", img: "img/sabores/frurojos.jpg"},
      {id: "happy", name :"Galleta Pastel de cumpleaños", category: "premium", desc: "Galleta de vainilla con chispas de colores y un toque de betún, perfecta para celebrar", img: "img/sabores/happy.jpg"},
      {id: "browraq", name: "Brownie Craquelada", category: "premium", desc: "Galleta de chocolate con una textura craquelada y un intenso sabor a brownie, para los amantes del chocolate oscuro", img: "img/sabores/browraq.jpg"},
      {id: "cookcream", name: "Cookie & Cream", category: "premium", desc: "Galleta de vainilla con trozos de galleta y un corazón cremoso, inspirada en el clásico sabor de helado", img: "img/sabores/cookcream.jpg"},
      {id: "kitkat", name: "KitKat", category: "premium", desc: "Galleta de chocolate con trozos de KitKat, una combinación crujiente y deliciosa", img: "img/sabores/kitkat.jpg"},
      {id: "fresOreo", name: "Fresa y Oreo", category: "premium", desc: "Galleta de fresa con trozos de Oreo, una mezcla sorprendente y deliciosa", img: "img/sabores/fresoreo.jpg"},,
      {id:"dona", name: "dona", category: "premium", desc: "Galleta de vainilla con chispas de dona, dulce y divertida", img: "img/sabores/dona.jpg"},
      {id: "crumblwaffle", name: "Crumbl Waffle", category: "premium", desc: "Galleta de vainilla con trozos de waffle, inspirada en el famoso postre", img: "img/sabores/crumblwaffle.jpg"},
      {id: "crumbllimon", name: "Crumbl de Pie de Limon", category: "premium", desc: "Galleta de vainilla con chispas de limón y un toque de merengue, inspirada en el clásico postre", img: "img/sabores/crumbllimon.jpg"},
      {id: "crymbltiramisu", name: "Crumbl de Tiramisú", category: "premium", desc: "Galleta de vainilla con trozos de café y un corazón cremoso de mascarpone, inspirada en el clásico postre italiano", img: "img/sabores/crumbltiramisu.jpg"},
      {id: "crumnlpis", name: "Crumbl de Pistacho", category: "premium", desc: "Galleta de vainilla con trozos de pistacho y un toque de crema, inspirada en el clásico sabor de helado", img: "img/sabores/crumblpis.jpg"},
      {id: "crumblchesecake", name: "Crumbl de Cheesecake", category: "premium", desc: "Galleta de vainilla con trozos de cheesecake y un toque de fresa, inspirada en el clásico postre", img: "img/sabores/crumblcheesecake.jpg"},
      {id: "galfresabetun", name: "Galleta de fresa con betún", category: "premium", desc: "Galleta de fresa con un corazón de betún de fresa, dulce y frutal", img: "img/sabores/galfresabetun.jpg"},
      {id: "carsalado", name: "Caramelo Salado", category: "premium", desc: "Galleta de vainilla con un toque de caramelo salado, dulce y con un contraste de sabor", img: "img/sabores/carsalado.jpg"},
      {id: "cumgomitas", name: "Cumble de Gomitas", category: "premium", desc: "Galleta de vainilla con trozos de gomitas, dulce y divertida", img: "img/sabores/cumgomitas.jpg"},
      {id: "galcraqlimon",name: "Galleta craquelada de limón", category: "premium", desc: "Galleta de vainilla con un toque de limón y una textura craquelada, fresca y deliciosa", img: "img/sabores/galcraqlimon.jpg"},
      {id:"galcraqred", name: "Galleta craquelada de red velvet", category: "premium", desc: "Galleta de vainilla con un toque de cacao y una textura craquelada, inspirada en el clásico red velvet", img: "img/sabores/galcraqred.jpg"},
      {id: "galcraqvainilla", name: "Galleta craquelada de vainilla", category: "premium", desc: "Galleta de vainilla con una textura craquelada, suave y deliciosa", img: "img/sabores/galcraqvainilla.png"},
      {id: "galcraqchocolate", name: "Galleta craquelada de chocolate", category: "premium", desc: "Galleta de chocolate con una textura craquelada, intensa y deliciosa", img: "img/sabores/galcraqchocolate.png"},
      {id: "galcraqfresa", name: "Galleta craquelada de fresa", category: "premium", desc: "Galleta de fresa con una textura craquelada, dulce y frutal", img: "img/sabores/galcraqfresa.jpg"},
      {id: "reeses", name: "Reese's", category: "premium", desc: "Galleta de chocolate con un corazón cremoso de mantequilla de maní, inspirada en el famoso dulce", img: "img/sabores/reeses.jpg"},
      {id: "brookie", name: "Brookie", category: "premium", desc: "Galleta que combina lo mejor de ambos mundos: una mitad de brownie y una mitad de cookie, para los amantes del chocolate que no pueden decidirse", img: "img/sabores/brookie.jpg"},
      {id: "bonobon", name: "Bon o Bon", category: "premium", desc: "Galleta de chocolate con un centro cremoso de avellana, inspirada en el famoso dulce", img: "img/sabores/bonobon.jpg" },
      
    ],
    dips: [
      { id: "dip-mermelada",   name: "Mermelada" },
      { id: "dip-nutella",     name: "Nutella" },
      { id: "dip-jet",         name: "Jet" },
      { id: "dip-arquipe",     name: "Arequipe" },
      { id: "dip-brigadeiro",  name: "Brigadeiro" },
      { id: "dip-caramelo_dulce_salado", name: "Caramelo dulce y salado" },
      {id: "dip-Reeses", name: "Reese's"},
      { id: "dip-oreo", name: "Oreo" },
      { id: "dip-pistacho", name: "Pistacho" },
      {id: "dip-biscoof", name: "Biscoof"}
    ],
    faq: [
      { q: "¿Cómo hago mi pedido?", a: "Arma tu cajita aquí mismo eligiendo formato, sabores y dips. Al terminar, te llevamos directo a WhatsApp con tu pedido listo para enviar." },
      { q: "¿Cuánto demora la entrega?", a: "Cada cajita se hornea bajo pedido. Recomendamos avisarnos con al menos 24 horas de anticipación; para pedidos grandes (eventos, regalos corporativos) 48-72 horas." },
      { q: "¿Hacen envíos?", a: "Coordinamos por WhatsApp. Si estás dentro de la zona, gestionamos el envío; si no, recogida en punto acordado." },
      { q: "¿Puedo pedir sabores mezclados en una caja?", a: "¡Por supuesto! Ese es el chiste. Elige tantos sabores distintos como piezas tenga tu cajita." },
      { q: "¿Qué incluye un dip?", a: "Un acompañamiento dulce para mojar la galleta: mermelada, Nutella, Jet, arequipe o brigadeiro. Suma $0.75 por unidad." },
      { q: "¿Aceptan pedidos para eventos?", a: "Sí. Cumpleaños, bodas, baby showers, regalos de empresa. Escríbenos por WhatsApp y armamos algo a medida." },
    ],
  };

  /* ═══════════════════════════════════════════════════════════════
     APP STATE  (persisted in localStorage)
     ═══════════════════════════════════════════════════════════════ */
  const STORAGE_KEY = "mordika:cart:v1";
  const cart = loadCart();
  let pickedSet = new Set();    // for landing flavor pre-pick UI
  let openFaq = 0;

  function loadCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return Object.assign({ sizeId: null, flavorQty: {}, dipQty: {}, name: "", notes: "" }, JSON.parse(raw));
    } catch (e) { /* noop */ }
    return { sizeId: null, flavorQty: {}, dipQty: {}, name: "", notes: "" };
  }
  function saveCart() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch (e) {}
  }

  function findSize(id) {
    for (const f of MORDIKA.formats) {
      for (const s of f.sizes) {
        if (s.id === id) return Object.assign({}, s, { formatId: f.id, formatTitle: f.title });
      }
    }
    return null;
  }

  /* ═══════════════════════════════════════════════════════════════
     ROUTING (hash-based: "" or "#pedir")
     ═══════════════════════════════════════════════════════════════ */
  function getRoute() {
    const h = (window.location.hash || "").replace("#", "");
    return h === "pedir" ? "pedir" : "home";
  }
  function setRoute(target) {
    if (target === "home") {
      // remove the hash entirely so the home anchors don't conflict
      history.replaceState(null, "", window.location.pathname + window.location.search);
    } else {
      window.location.hash = target;
    }
    handleRouteChange();
  }
  function handleRouteChange() {
    const route = getRoute();
    document.body.dataset.route = route;
    window.scrollTo(0, 0);
    if (route === "pedir") renderBuilder();
    updateCartPill();
  }
  window.addEventListener("hashchange", handleRouteChange);

  // Intercept clicks on [data-nav]
  document.addEventListener("click", (e) => {
    const navEl = e.target.closest("[data-nav]");
    if (navEl) {
      e.preventDefault();
      setRoute(navEl.dataset.nav);
    }
  });

  /* ═══════════════════════════════════════════════════════════════
     LANDING — render dynamic sections
     ═══════════════════════════════════════════════════════════════ */
  function renderFormats() {
    const root = document.getElementById("formatsGrid");
    root.innerHTML = MORDIKA.formats.map(f => `
      <div class="format-card">
        <div class="format-card__head">
          <div><div class="format-card__title">${f.title}</div></div>
          <div class="format-card__sub">${f.sub}</div>
        </div>
        ${f.sizes.map(s => `
          <div class="format-row">
            <div class="format-row__label">${s.label}</div>
            <div class="format-row__pieces">${s.pieces} pzs</div>
            <div class="format-row__price">$${s.price.toFixed(2)}</div>
          </div>
        `).join("")}
        <div class="format-card__note">
          Con <b>dip</b> el costo aumenta <b>$0.75</b> por unidad
        </div>
      </div>
    `).join("");
  }

  function renderFlavors() {
    const root = document.getElementById("flavorsContainer");
    const principales = MORDIKA.flavors.filter(f => f.category === "principal");
    const especiales  = MORDIKA.flavors.filter(f => f.category === "especial");
    const premium     = MORDIKA.flavors.filter(f => f.category === "premium");

    root.innerHTML =
      flavorBlockHTML("Sabores principales", principales) +
      flavorBlockHTML("Más sabores", especiales) +
      (premium.length ? flavorBlockHTML("Sabores Especiales", premium, "EL COSTO DE ESTOS VARÍA DE ACUERDO AL MODELO ENTRE $1 A $5") : "");

    root.querySelectorAll("[data-flavor]").forEach(el => {
      el.addEventListener("click", () => {
        const id = el.dataset.flavor;
        if (pickedSet.has(id)) pickedSet.delete(id); else pickedSet.add(id);
        renderFlavors();
      });
    });
  }

  function flavorBlockHTML(title, flavors, disclaimer = "") {
    return `
      <div class="cat-divider">
        <div class="cat-divider__line"></div>
        <div class="cat-divider__label">${title}</div>
        <div class="cat-divider__line"></div>
      </div>
      ${disclaimer ? `<p class="flavor-disclaimer">${disclaimer}</p>` : ""}
      <div class="flavors-grid">${flavors.map(f => flavorCardHTML(f)).join("")}</div>
    `;
  }

  function flavorCardHTML(f, full) {
    return `
      <div class="flavor-card ${pickedSet.has(f.id) ? "is-selected" : ""}" data-flavor="${f.id}" ${full ? 'style="height:100%"' : ''}>
        <div class="flavor-card__check">✓</div>
        <div class="flavor-card__pic">
          ${f.img
            ? `<img src="${escapeAttr(f.img)}" alt="${escapeAttr(f.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;">`
            : `<div class="placeholder-stripes"></div><div class="placeholder-label">— foto producto —</div>`}
        </div>
        <div class="flavor-card__name">${escapeHTML(f.name)}</div>
        <div class="flavor-card__desc">${escapeHTML(f.desc)}</div>
      </div>
    `;
  }

  function renderFaq() {
    const root = document.getElementById("faqList");
    root.innerHTML = MORDIKA.faq.map((it, i) => `
      <div class="faq__item ${openFaq === i ? "is-open" : ""}" data-faq="${i}">
        <div class="faq__q">${escapeHTML(it.q)}</div>
        <div class="faq__a">${escapeHTML(it.a)}</div>
      </div>
    `).join("");
    root.querySelectorAll("[data-faq]").forEach(el => {
      el.addEventListener("click", () => {
        const i = parseInt(el.dataset.faq, 10);
        openFaq = (openFaq === i ? -1 : i);
        renderFaq();
      });
    });
  }

  /* CTA "Escribir directo" link */
  document.getElementById("ctaWhatsappDirect").href =
    `https://wa.me/${MORDIKA.whatsapp}?text=${encodeURIComponent("Hola Mórdika, quiero hacer un pedido 🍪")}`;

  /* ═══════════════════════════════════════════════════════════════
     BUILDER — render + interactions
     ═══════════════════════════════════════════════════════════════ */
  function renderBuilder() {
    renderBuilderFormats();
    renderBuilderStep2();
    renderBuilderStep3();
    renderBuilderSummary();
    syncFormFields();
  }

  function renderBuilderFormats() {
    const root = document.getElementById("builderFormats");
    root.innerHTML = MORDIKA.formats.map(f => `
      <div class="builder__format-group">
        <div class="builder__format-head">
          <span>${f.title}</span>
          <span style="color:rgba(14,13,11,0.4); font-family:var(--mono); text-transform:none; letter-spacing:0.02em">${f.sizes.length} opciones</span>
        </div>
        <div class="builder__format-grid">
          ${f.sizes.map(s => `
            <button class="builder__format-card ${cart.sizeId === s.id ? "is-on" : ""}" data-size="${s.id}">
              <div class="builder__format-label">${s.label}</div>
              <div class="builder__format-pieces">${s.pieces} piezas</div>
              <div class="builder__format-price">$${s.price.toFixed(2)}</div>
            </button>
          `).join("")}
        </div>
      </div>
    `).join("");

    root.querySelectorAll("[data-size]").forEach(btn => {
      btn.addEventListener("click", () => {
        cart.sizeId = btn.dataset.size;
        cart.flavorQty = {};
        cart.dipQty = {};
        saveCart();
        renderBuilder();
      });
    });
  }

  function renderBuilderStep2() {
    const step2 = document.getElementById("step2");
    const size = findSize(cart.sizeId);
    if (!size) { step2.style.display = "none"; return; }
    step2.style.display = "";

    document.getElementById("step2Title").textContent =
      `Elige ${size.pieces} sabor${size.pieces > 1 ? "es" : ""}`;

    const totalPicked = sumValues(cart.flavorQty);
    const remaining = size.pieces - totalPicked;
    const counter = document.getElementById("builderCounter");
    counter.classList.toggle("is-warn", remaining < 0);
    counter.classList.toggle("is-full", remaining === 0);
    document.getElementById("counterPicked").textContent = totalPicked;
    document.getElementById("counterTotal").textContent = `/ ${size.pieces}`;
    document.getElementById("counterBar").style.width =
      Math.min(100, (totalPicked / size.pieces) * 100) + "%";

    const root = document.getElementById("builderFlavors");
    const principales = MORDIKA.flavors.filter(f => f.category === "principal");
    const especiales  = MORDIKA.flavors.filter(f => f.category === "especial");
    const premium     = MORDIKA.flavors.filter(f => f.category === "premium");
    root.innerHTML = `
      <div class="builder__flavor-cat">Principales</div>
      <div class="builder__flavor-grid">${principales.map(f => builderFlavorHTML(f, remaining)).join("")}</div>
      <div class="builder__flavor-cat">Más sabores</div>
      <div class="builder__flavor-grid">${especiales.map(f => builderFlavorHTML(f, remaining)).join("")}</div>
      ${premium.length ? `
      <div class="builder__flavor-cat">Sabores Especiales</div>
      <p class="flavor-disclaimer flavor-disclaimer--builder">EL COSTO DE ESTOS VARÍA DE ACUERDO AL MODELO ENTRE $1 A $5</p>
      <div class="builder__flavor-grid">${premium.map(f => builderFlavorHTML(f, remaining)).join("")}</div>
      ` : ""}
    `;

    // Wire add/remove
    root.querySelectorAll("[data-add]").forEach(el => {
      el.addEventListener("click", (ev) => {
        ev.stopPropagation();
        if (el.disabled) return;
        bumpFlavor(el.dataset.add, +1);
      });
    });
    root.querySelectorAll("[data-sub]").forEach(el => {
      el.addEventListener("click", (ev) => {
        ev.stopPropagation();
        bumpFlavor(el.dataset.sub, -1);
      });
    });
    // Tap whole card to add (when qty 0 and not disabled)
    root.querySelectorAll("[data-flavor-card]").forEach(el => {
      el.addEventListener("click", (ev) => {
        if (ev.target.closest("button")) return;
        const id = el.dataset.flavorCard;
        const qty = cart.flavorQty[id] || 0;
        const disabled = el.classList.contains("is-disabled");
        if (qty === 0 && !disabled) bumpFlavor(id, +1);
      });
    });
  }

  function builderFlavorHTML(f, remaining) {
    const qty = cart.flavorQty[f.id] || 0;
    const isOn = qty > 0;
    const disabled = remaining <= 0 && qty === 0;
    return `
      <div class="builder__flavor ${isOn ? "is-on" : ""} ${disabled ? "is-disabled" : ""}" data-flavor-card="${f.id}">
        <div class="builder__flavor-pic">
          ${f.img
            ? `<img src="${escapeAttr(f.img)}" alt="${escapeAttr(f.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;">`
            : `<div class="placeholder-stripes"></div>`}
        </div>
        <div class="builder__flavor-body">
          <div class="builder__flavor-name">${escapeHTML(f.name)}</div>
          <div class="builder__flavor-desc">${escapeHTML(f.desc)}</div>
        </div>
        ${qty === 0
          ? `<button class="builder__flavor-add" data-add="${f.id}" ${disabled ? "disabled" : ""}>+</button>`
          : `<div class="builder__flavor-qty">
              <button data-sub="${f.id}">−</button>
              <span>${qty}</span>
              <button data-add="${f.id}" ${disabled ? "disabled" : ""}>+</button>
            </div>`}
      </div>
    `;
  }

  function bumpFlavor(id, delta) {
    const size = findSize(cart.sizeId);
    if (!size) return;
    const cur = cart.flavorQty[id] || 0;
    const next = Math.max(0, cur + delta);
    const others = Object.entries(cart.flavorQty).filter(([k]) => k !== id).reduce((a, b) => a + b[1], 0);
    if (others + next > size.pieces) return;
    if (next === 0) delete cart.flavorQty[id]; else cart.flavorQty[id] = next;
    saveCart();
    renderBuilder();
  }

  function renderBuilderStep3() {
    const step3 = document.getElementById("step3");
    const size = findSize(cart.sizeId);
    const totalPicked = sumValues(cart.flavorQty);
    const canSend = size && totalPicked === size.pieces;
    if (!canSend) { step3.style.display = "none"; return; }
    step3.style.display = "";

    const root = document.getElementById("builderDips");
    root.innerHTML = MORDIKA.dips.map(d => {
      const qty = cart.dipQty[d.id] || 0;
      const isOn = qty > 0;
      return `
        <div class="builder__dip ${isOn ? "is-on" : ""}" data-dip-card="${d.id}">
          <div class="builder__dip-name">${escapeHTML(d.name)}</div>
          <div class="builder__dip-price">+$0.75</div>
          ${qty === 0
            ? `<button class="builder__dip-add" data-dip-add="${d.id}">+</button>`
            : `<div class="builder__flavor-qty">
                <button data-dip-sub="${d.id}">−</button>
                <span>${qty}</span>
                <button data-dip-add="${d.id}">+</button>
              </div>`}
        </div>
      `;
    }).join("");

    root.querySelectorAll("[data-dip-add]").forEach(el => {
      el.addEventListener("click", (ev) => { ev.stopPropagation(); bumpDip(el.dataset.dipAdd, +1); });
    });
    root.querySelectorAll("[data-dip-sub]").forEach(el => {
      el.addEventListener("click", (ev) => { ev.stopPropagation(); bumpDip(el.dataset.dipSub, -1); });
    });
    root.querySelectorAll("[data-dip-card]").forEach(el => {
      el.addEventListener("click", (ev) => {
        if (ev.target.closest("button")) return;
        const id = el.dataset.dipCard;
        const qty = cart.dipQty[id] || 0;
        if (qty === 0) bumpDip(id, +1);
      });
    });
  }

  function bumpDip(id, delta) {
    const cur = cart.dipQty[id] || 0;
    const next = Math.max(0, cur + delta);
    if (next === 0) delete cart.dipQty[id]; else cart.dipQty[id] = next;
    saveCart();
    renderBuilder();
  }

  function syncFormFields() {
    const nameEl = document.getElementById("formName");
    const notesEl = document.getElementById("formNotes");
    if (nameEl && nameEl.value !== cart.name) nameEl.value = cart.name;
    if (notesEl && notesEl.value !== cart.notes) notesEl.value = cart.notes;
  }
  document.getElementById("formName").addEventListener("input", (e) => { cart.name = e.target.value; saveCart(); });
  document.getElementById("formNotes").addEventListener("input", (e) => { cart.notes = e.target.value; saveCart(); });

  function renderBuilderSummary() {
    const size = findSize(cart.sizeId);
    const totalPicked = sumValues(cart.flavorQty);
    const totalDips   = sumValues(cart.dipQty);
    const remaining   = size ? size.pieces - totalPicked : 0;
    const dipCost     = totalDips * MORDIKA.dipExtra;
    const total       = (size ? size.price : 0) + dipCost;
    const canSend     = !!(size && totalPicked === size.pieces);

    // Title / sub
    document.getElementById("summaryTitle").textContent = size ? size.label : "Sin formato";
    const sub = document.getElementById("summarySub");
    if (size) { sub.textContent = size.formatTitle; sub.style.display = ""; } else { sub.style.display = "none"; }

    // Step pill
    const step = !size ? 1 : (totalPicked === 0 ? 2 : (totalPicked < size.pieces ? 2 : 3));
    const pills = document.querySelectorAll("#stepPill span");
    pills.forEach((p, i) => p.classList.toggle("is-on", i + 1 <= step));

    // Box preview
    document.getElementById("boxPreview").innerHTML = boxPreviewHTML(size);

    // Summary list
    const list = document.getElementById("summaryList");
    if (size && (totalPicked > 0 || totalDips > 0)) {
      list.style.display = "";
      list.innerHTML = [
        ...Object.entries(cart.flavorQty).map(([id, qty]) => {
          const f = MORDIKA.flavors.find(x => x.id === id);
          return f ? `<div class="builder__summary-item"><span class="mono">${qty}×</span><span>${escapeHTML(f.name)}</span></div>` : "";
        }),
        ...Object.entries(cart.dipQty).map(([id, qty]) => {
          const d = MORDIKA.dips.find(x => x.id === id);
          return d ? `<div class="builder__summary-item is-dip"><span class="mono">${qty}×</span><span>Dip ${escapeHTML(d.name)}</span></div>` : "";
        }),
      ].join("");
    } else {
      list.style.display = "none";
    }

    // Totals
    document.getElementById("summaryBoxPrice").textContent = `$${(size ? size.price : 0).toFixed(2)}`;
    const dipsRow = document.getElementById("summaryDipsRow");
    if (dipCost > 0) {
      dipsRow.style.display = "";
      document.getElementById("summaryDipsLabel").textContent = `Dips (${totalDips})`;
      document.getElementById("summaryDipsPrice").textContent = `$${dipCost.toFixed(2)}`;
    } else {
      dipsRow.style.display = "none";
    }
    document.getElementById("summaryTotal").textContent = `$${total.toFixed(2)}`;

    // Send buttons
    const sendBtn = document.getElementById("sendBtn");
    const sendLabel = document.getElementById("sendBtnLabel");
    const mobileBtn = document.getElementById("mobileSendBtn");
    const mobileLabel = document.getElementById("mobileSendLabel");
    sendBtn.disabled = !canSend;
    mobileBtn.disabled = !canSend;
    sendLabel.textContent   = canSend ? "Enviar por WhatsApp" : (size ? `Faltan ${remaining}` : "Elige formato");
    mobileLabel.textContent = canSend ? "Enviar"              : (size ? `Faltan ${remaining}` : "Elige");
    document.getElementById("mobileTotal").textContent = `$${total.toFixed(2)}`;

    updateCartPill();
  }

  function boxPreviewHTML(size) {
    if (!size) {
      return `
        <div class="box-preview is-empty">
          <div class="box-preview__empty">
            <div>Elige un formato</div>
            <div class="mono">para comenzar</div>
          </div>
        </div>`;
    }
    const slots = [];
    Object.entries(cart.flavorQty).forEach(([id, qty]) => {
      const f = MORDIKA.flavors.find(x => x.id === id);
      for (let i = 0; i < qty; i++) slots.push(f);
    });
    while (slots.length < size.pieces) slots.push(null);

    const n = size.pieces;
    const cols = n <= 3 ? n : (n <= 6 ? 3 : 4);
    const filled = slots.filter(Boolean).length;

    return `
      <div class="box-preview__grid" style="grid-template-columns: repeat(${cols}, 1fr)">
        ${slots.map(f => `
          <div class="box-preview__slot ${f ? "is-filled" : ""}" title="${f ? escapeAttr(f.name) : "vacío"}">
            ${f ? `<span>${escapeHTML(f.name.slice(0,2))}</span>` : "" }
          </div>
        `).join("")}
      </div>
      <div class="box-preview__caption mono">${filled} de ${size.pieces}</div>
    `;
  }

  /* Send via WhatsApp */
  function sendWhatsapp() {
    const size = findSize(cart.sizeId);
    if (!size) return;
    const totalPicked = sumValues(cart.flavorQty);
    if (totalPicked !== size.pieces) return;
    const totalDips = sumValues(cart.dipQty);
    const dipCost = totalDips * MORDIKA.dipExtra;
    const total = size.price + dipCost;

    const lines = [];
    lines.push("¡Hola Mórdika! Quiero hacer un pedido 🍪");
    lines.push("");
    if (cart.name) lines.push(`*Nombre:* ${cart.name}`);
    lines.push(`*Formato:* ${size.formatTitle} — ${size.label}  ($${size.price.toFixed(2)})`);
    lines.push("");
    lines.push("*Sabores:*");
    Object.entries(cart.flavorQty).forEach(([id, qty]) => {
      const f = MORDIKA.flavors.find(x => x.id === id);
      if (f) lines.push(`  • ${qty}× ${f.name}`);
    });
    if (Object.keys(cart.dipQty).length) {
      lines.push("");
      lines.push("*Dips:*");
      Object.entries(cart.dipQty).forEach(([id, qty]) => {
        const d = MORDIKA.dips.find(x => x.id === id);
        if (d) lines.push(`  • ${qty}× ${d.name}  ($${(qty * MORDIKA.dipExtra).toFixed(2)})`);
      });
    }
    if (cart.notes) {
      lines.push("");
      lines.push(`*Notas:* ${cart.notes}`);
    }
    lines.push("");
    lines.push(`*Total estimado:* $${total.toFixed(2)}`);

    const url = `https://wa.me/${MORDIKA.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank");
  }
  document.getElementById("sendBtn").addEventListener("click", sendWhatsapp);
  document.getElementById("mobileSendBtn").addEventListener("click", sendWhatsapp);

  /* Floating cart pill */
  function updateCartPill() {
    const totalInCart = sumValues(cart.flavorQty);
    const pill = document.getElementById("cartPill");
    const count = document.getElementById("cartPillCount");
    count.textContent = totalInCart;
    // Show only on home, with at least one flavor in cart
    pill.classList.toggle("is-shown", totalInCart > 0 && getRoute() === "home");
  }
  document.getElementById("cartPill").addEventListener("click", () => setRoute("pedir"));

  /* ═══════════════════════════════════════════════════════════════
     UTILITIES
     ═══════════════════════════════════════════════════════════════ */
  function sumValues(obj) { return Object.values(obj).reduce((a, b) => a + b, 0); }
  function escapeHTML(s) { return String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" })[c]); }
  function escapeAttr(s) { return escapeHTML(s); }

  /* ═══════════════════════════════════════════════════════════════
     INIT
     ═══════════════════════════════════════════════════════════════ */
  renderFormats();
  renderFlavors();
  renderFaq();
  handleRouteChange();