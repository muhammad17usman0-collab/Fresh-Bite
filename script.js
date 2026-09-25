/* =========================================================
   FRESH BITE — DATA LAYER
   Edit this array to add / remove / update products & deals.
   ========================================================= */
const CATEGORIES = [
  { name: "Pizzas", emoji: "🍕" },
  { name: "Burgers", emoji: "🍔" },
  { name: "Chicken", emoji: "🍗" },
  { name: "Fries & Sides", emoji: "🍟" },
  { name: "Wraps & Sandwiches", emoji: "🌯" },
  { name: "Milkshakes", emoji: "🥤" },
  { name: "Drinks", emoji: "🧃" },
  { name: "Kids Meals", emoji: "🧒" },
  { name: "Desserts", emoji: "🍰" },
];

const PRODUCTS = [
  // ---------- PIZZAS ----------
  { id:"pz1", name:"Fresh Bite Special", category:"Pizzas", emoji:"🍕",
    desc:"Our signature loaded pizza with a mix of premium toppings.",
    isPopular:true, badge:"POPULAR", createdAt:1,
    sizes:[{label:"Medium",price:900},{label:"Large",price:1770},{label:"Extra Large",price:2000}],
    addons:[{label:"Extra Cheese",price:150},{label:"Extra Toppings",price:180},{label:"Extra Sauce",price:60}] },
  { id:"pz2", name:"Chicken Fajita", category:"Pizzas", emoji:"🍕",
    desc:"Spiced chicken fajita, peppers and onions on a cheesy base.",
    createdAt:2,
    sizes:[{label:"Medium",price:900},{label:"Large",price:1770},{label:"Extra Large",price:2000}],
    addons:[{label:"Extra Cheese",price:150},{label:"Extra Toppings",price:180},{label:"Extra Sauce",price:60}] },
  { id:"pz3", name:"Chicken Tikka", category:"Pizzas", emoji:"🍕",
    desc:"Classic tikka-marinated chicken with a smoky finish.",
    createdAt:3,
    sizes:[{label:"Medium",price:900},{label:"Large",price:1770},{label:"Extra Large",price:2000}],
    addons:[{label:"Extra Cheese",price:150},{label:"Extra Toppings",price:180},{label:"Extra Sauce",price:60}] },
  { id:"pz4", name:"BBQ Chicken", category:"Pizzas", emoji:"🍕",
    desc:"Smoky BBQ sauce, grilled chicken and a triple cheese blend.",
    badge:"NEW", createdAt:9,
    sizes:[{label:"Medium",price:900},{label:"Large",price:1770},{label:"Extra Large",price:2000}],
    addons:[{label:"Extra Cheese",price:150},{label:"Extra Toppings",price:180},{label:"Extra Sauce",price:60}] },
  { id:"pz5", name:"Peri Peri Chicken", category:"Pizzas", emoji:"🍕",
    desc:"Fiery peri peri chicken for those who like it bold.",
    createdAt:4,
    sizes:[{label:"Medium",price:900},{label:"Large",price:1770},{label:"Extra Large",price:2000}],
    addons:[{label:"Extra Cheese",price:150},{label:"Extra Toppings",price:180},{label:"Extra Sauce",price:60}] },
  { id:"pz6", name:"Veggie Delight", category:"Pizzas", emoji:"🍕",
    desc:"Garden-fresh vegetables and mozzarella on our house base.",
    createdAt:5,
    sizes:[{label:"Medium",price:900},{label:"Large",price:1770},{label:"Extra Large",price:2000}],
    addons:[{label:"Extra Cheese",price:150},{label:"Extra Toppings",price:180},{label:"Extra Sauce",price:60}] },

  // ---------- BURGERS ----------
  { id:"bg1", name:"Zinger Burger", category:"Burgers", emoji:"🍔",
    desc:"Crispy fried chicken fillet, fresh lettuce and house mayo.",
    isPopular:true, badge:"POPULAR", createdAt:1,
    price:400,
    addons:[{label:"Extra Cheese",price:80},{label:"Extra Patty",price:250},{label:"Extra Sauce",price:50}] },
  { id:"bg2", name:"Mighty Zinger", category:"Burgers", emoji:"🍔",
    desc:"A bigger take on our classic zinger. Price to be confirmed.",
    priceTBD:true, createdAt:2,
    addons:[{label:"Extra Cheese",price:80},{label:"Extra Patty",price:250},{label:"Extra Sauce",price:50}] },
  { id:"bg3", name:"Beef Smash Burger", category:"Burgers", emoji:"🍔",
    desc:"Smash-grilled beef patty with caramelised onions and cheese.",
    createdAt:8, badge:"NEW",
    price:480,
    addons:[{label:"Extra Cheese",price:80},{label:"Extra Patty",price:250},{label:"Extra Sauce",price:50}] },
  { id:"bg4", name:"Double Cheese Burger", category:"Burgers", emoji:"🍔",
    desc:"Double beef patties layered with melted cheddar.",
    createdAt:3,
    price:520,
    addons:[{label:"Extra Cheese",price:80},{label:"Extra Patty",price:250},{label:"Extra Sauce",price:50}] },
  { id:"bg5", name:"Fire Chicken Burger", category:"Burgers", emoji:"🍔",
    desc:"Spicy crispy chicken with jalapeños and fire sauce.",
    createdAt:4,
    price:430,
    addons:[{label:"Extra Cheese",price:80},{label:"Extra Patty",price:250},{label:"Extra Sauce",price:50}] },
  { id:"bg6", name:"Mushroom Beef Burger", category:"Burgers", emoji:"🍔",
    desc:"Juicy beef patty topped with sautéed mushrooms and swiss cheese.",
    createdAt:5,
    price:490,
    addons:[{label:"Extra Cheese",price:80},{label:"Extra Patty",price:250},{label:"Extra Sauce",price:50}] },

  // ---------- CHICKEN ----------
  { id:"ck1", name:"Crispy Chicken (4pc)", category:"Chicken", emoji:"🍗", desc:"Golden crispy fried chicken pieces.", price:650, createdAt:1 },
  { id:"ck2", name:"Buffalo Wings (6pc)", category:"Chicken", emoji:"🍗", desc:"Classic buffalo-tossed wings with a tangy kick.", price:590, createdAt:2, badge:"POPULAR", isPopular:true },
  { id:"ck3", name:"Chicken Nuggets (8pc)", category:"Chicken", emoji:"🍗", desc:"Bite-sized crispy nuggets, great for sharing.", price:420, createdAt:3 },
  { id:"ck4", name:"Popcorn Chicken", category:"Chicken", emoji:"🍗", desc:"Crunchy bite-sized chicken poppers.", price:450, createdAt:4 },

  // ---------- FRIES & SIDES ----------
  { id:"fr1", name:"Classic Fries", category:"Fries & Sides", emoji:"🍟", desc:"Golden and crispy, salted to perfection.", price:250, createdAt:1 },
  { id:"fr2", name:"Peri Peri Fries", category:"Fries & Sides", emoji:"🍟", desc:"Fries tossed in a spicy peri peri seasoning.", price:290, createdAt:2, badge:"POPULAR", isPopular:true },
  { id:"fr3", name:"Loaded Fries", category:"Fries & Sides", emoji:"🍟", desc:"Fries loaded with cheese sauce, jalapeños and mayo.", price:420, createdAt:3 },
  { id:"fr4", name:"Mozzarella Sticks (6pc)", category:"Fries & Sides", emoji:"🧀", desc:"Crispy fried mozzarella with a molten cheese centre.", price:480, createdAt:4 },
  { id:"fr5", name:"Onion Rings", category:"Fries & Sides", emoji:"🧅", desc:"Crunchy battered onion rings.", price:280, createdAt:5 },

  // ---------- WRAPS & SANDWICHES ----------
  { id:"wr1", name:"Zinger Wrap", category:"Wraps & Sandwiches", emoji:"🌯", desc:"Crispy chicken, lettuce and sauce rolled in soft bread.", price:390, createdAt:1, isPopular:true, badge:"POPULAR" },
  { id:"wr2", name:"BBQ Chicken Wrap", category:"Wraps & Sandwiches", emoji:"🌯", desc:"Grilled BBQ chicken with fresh veggies.", price:400, createdAt:2 },
  { id:"wr3", name:"Club Sandwich", category:"Wraps & Sandwiches", emoji:"🥪", desc:"Triple-layered sandwich with chicken, egg and veggies.", price:450, createdAt:3 },

  // ---------- MILKSHAKES ----------
  { id:"ms1", name:"Oreo Blast", category:"Milkshakes", emoji:"🥤", desc:"Rich vanilla shake loaded with crushed Oreo cookies.",
    isPopular:true, badge:"POPULAR", createdAt:1,
    sizes:[{label:"Regular",price:450},{label:"Large",price:620}] },
  { id:"ms2", name:"Lotus Biscoff Shake", category:"Milkshakes", emoji:"🥤", desc:"Creamy Biscoff shake with a caramelised biscuit swirl.",
    badge:"NEW", createdAt:9,
    sizes:[{label:"Regular",price:480},{label:"Large",price:650}] },
  { id:"ms3", name:"Ferrero Rocher Shake", category:"Milkshakes", emoji:"🥤", desc:"Hazelnut chocolate indulgence, topped with whipped cream.",
    createdAt:2,
    sizes:[{label:"Regular",price:520},{label:"Large",price:690}] },
  { id:"ms4", name:"KitKat Shake", category:"Milkshakes", emoji:"🥤", desc:"Chocolate shake blended with crushed KitKat.",
    createdAt:3,
    sizes:[{label:"Regular",price:460},{label:"Large",price:630}] },
  { id:"ms5", name:"Nutella Hazelnut Shake", category:"Milkshakes", emoji:"🥤", desc:"Nutella swirled through creamy hazelnut milkshake.",
    createdAt:4,
    sizes:[{label:"Regular",price:490},{label:"Large",price:660}] },
  { id:"ms6", name:"Mango Cream Shake", category:"Milkshakes", emoji:"🥤", desc:"Seasonal mango blended with fresh cream.",
    createdAt:5,
    sizes:[{label:"Regular",price:420},{label:"Large",price:580}] },

  // ---------- DRINKS ----------
  { id:"dr1", name:"Coca Cola", category:"Drinks", emoji:"🥤", desc:"Chilled 345ml can.", price:120, createdAt:1 },
  { id:"dr2", name:"Fresh Lemonade", category:"Drinks", emoji:"🍋", desc:"Freshly squeezed and lightly sweetened.", price:200, createdAt:2, isPopular:true, badge:"POPULAR" },
  { id:"dr3", name:"Mint Margarita", category:"Drinks", emoji:"🍹", desc:"Refreshing mint and lime cooler.", price:220, createdAt:3 },
  { id:"dr4", name:"Iced Tea", category:"Drinks", emoji:"🧊", desc:"Chilled and lightly brewed iced tea.", price:190, createdAt:4 },

  // ---------- KIDS MEALS ----------
  { id:"kd1", name:"Kids Burger Meal", category:"Kids Meals", emoji:"🧒", desc:"Mini burger + fries + drink, sized just right for kids.", price:550, createdAt:1, isPopular:true, badge:"POPULAR" },
  { id:"kd2", name:"Kids Nuggets Meal", category:"Kids Meals", emoji:"🧒", desc:"Crispy nuggets + fries + drink.", price:530, createdAt:2 },

  // ---------- DESSERTS ----------
  { id:"ds1", name:"Chocolate Lava Cake", category:"Desserts", emoji:"🍰", desc:"Warm chocolate cake with a molten centre.", price:380, createdAt:1, isPopular:true, badge:"POPULAR" },
  { id:"ds2", name:"Cheesecake Slice", category:"Desserts", emoji:"🍰", desc:"Classic baked cheesecake, rich and creamy.", price:420, createdAt:2 },
];

const DEALS = [
  { id:"dl1", name:"Couple Deal", emoji:"🍔🥤", price:1450, badge:"POPULAR", desc:"2 Burgers + Fries + 2 Drinks" },
  { id:"dl2", name:"Family Deal", emoji:"🍕🍟", price:3200, badge:"BEST VALUE", desc:"Large Pizza + Burgers + Fries + Drinks" },
  { id:"dl3", name:"Friends Deal", emoji:"🍔🍔🍟", price:2600, badge:"LIMITED TIME", desc:"4 Burgers + Fries + Drinks" },
  { id:"dl4", name:"Pizza Party Deal", emoji:"🍕🎉", price:3600, badge:"NEW", desc:"Extra Large Pizza + Sides + Drinks" },
];

const WHATSAPP_NUMBER = "923418919885";
const DELIVERY_FEE = 150;

/* =========================================================
   STATE
   ========================================================= */
let cart = JSON.parse(localStorage.getItem("fb_cart") || "[]");
let favourites = new Set(JSON.parse(localStorage.getItem("fb_favs") || "[]"));
let activeCategory = "All";
let searchTerm = "";
let sortMode = "popular";

/* =========================================================
   HELPERS
   ========================================================= */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const money = (n) => `Rs. ${n.toLocaleString("en-PK")}`;
const saveCart = () => localStorage.setItem("fb_cart", JSON.stringify(cart));
const saveFavs = () => localStorage.setItem("fb_favs", JSON.stringify([...favourites]));

function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.remove("show"), 2200);
}

function basePrice(p) {
  if (p.priceTBD) return null;
  if (p.sizes) return p.sizes[0].price;
  return p.price;
}

/* =========================================================
   RENDER: QUICK CATS + CHIPS
   ========================================================= */
function renderQuickCats() {
  $("#quickCats").innerHTML = CATEGORIES.map(c => `
    <div class="quick-cat-item" data-cat="${c.name}">
      <span class="emoji">${c.emoji}</span>
      <span class="label">${c.name}</span>
    </div>`).join("");
  $$(".quick-cat-item").forEach(el => el.addEventListener("click", () => {
    setActiveCategory(el.dataset.cat);
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  }));
}

function renderChips() {
  const chips = ["All", ...CATEGORIES.map(c => c.name)];
  $("#categoryChips").innerHTML = chips.map(c =>
    `<button class="chip ${c === activeCategory ? "active" : ""}" data-cat="${c}">${c}</button>`
  ).join("");
  $$(".chip").forEach(el => el.addEventListener("click", () => setActiveCategory(el.dataset.cat)));
}

function setActiveCategory(cat) {
  activeCategory = cat;
  renderChips();
  renderMenu();
}

/* =========================================================
   RENDER: MENU GRID
   ========================================================= */
function renderMenu() {
  let list = PRODUCTS.filter(p => activeCategory === "All" || p.category === activeCategory);
  if (searchTerm.trim()) {
    const q = searchTerm.trim().toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }
  list = [...list].sort((a, b) => {
    if (sortMode === "low") return (basePrice(a) ?? 0) - (basePrice(b) ?? 0);
    if (sortMode === "high") return (basePrice(b) ?? 0) - (basePrice(a) ?? 0);
    if (sortMode === "new") return b.createdAt - a.createdAt;
    return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
  });

  $("#emptyState").hidden = list.length > 0;
  $("#menuGrid").innerHTML = list.map(p => {
    const price = basePrice(p);
    const priceLabel = p.priceTBD ? "Price TBD" : (p.sizes ? `From ${money(price)}` : money(price));
    const isFav = favourites.has(p.id);
    return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-media" data-open="${p.id}">
        ${p.badge ? `<span class="badge ${p.badge.toLowerCase().replace(/\s+/g,"-")}">${p.badge}</span>` : ""}
        <button class="fav-btn ${isFav ? "active" : ""}" data-fav="${p.id}" aria-label="Favourite">${isFav ? "♥" : "♡"}</button>
        <span>${p.emoji}</span>
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <div class="product-foot">
          <span class="price">${priceLabel}</span>
          <button class="add-btn" data-open="${p.id}">${p.sizes || p.addons ? "Customise" : "Add to Cart"}</button>
        </div>
      </div>
    </article>`;
  }).join("");

  $$("[data-open]").forEach(el => el.addEventListener("click", () => openProduct(el.dataset.open)));
  $$("[data-fav]").forEach(el => el.addEventListener("click", (e) => {
    e.stopPropagation();
    const id = el.dataset.fav;
    favourites.has(id) ? favourites.delete(id) : favourites.add(id);
    saveFavs();
    renderMenu();
  }));
}

/* =========================================================
   RENDER: DEALS
   ========================================================= */
function renderDeals() {
  $("#dealsGrid").innerHTML = DEALS.map(d => `
    <div class="deal-card">
      <span class="badge ${d.badge.toLowerCase().replace(/\s+/g,"-")}">${d.badge}</span>
      <span class="deal-emoji">${d.emoji}</span>
      <h3>${d.name}</h3>
      <p>${d.desc}</p>
      <div class="deal-price">${money(d.price)}</div>
      <button class="btn btn-primary full" data-deal="${d.id}">Add to Cart</button>
    </div>`).join("");
  $$("[data-deal]").forEach(el => el.addEventListener("click", () => {
    const d = DEALS.find(x => x.id === el.dataset.deal);
    addToCart({ id: d.id, name: d.name, emoji: d.emoji, unitPrice: d.price, qty: 1, options: "Deal" });
  }));
}

/* =========================================================
   PRODUCT DETAIL MODAL
   ========================================================= */
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  let selectedSize = p.sizes ? 0 : null;
  let selectedAddons = new Set();
  let qty = 1;

  function total() {
    if (p.priceTBD) return 0;
    let base = p.sizes ? p.sizes[selectedSize].price : p.price;
    selectedAddons.forEach(i => base += p.addons[i].price);
    return base * qty;
  }

  function draw() {
    $("#productModal").innerHTML = `
      <button class="icon-btn modal-close" id="pdClose">&times;</button>
      <div class="pd-media">${p.emoji}</div>
      <h3>${p.name}</h3>
      <p class="pd-desc">${p.desc}</p>
      ${p.sizes ? `
        <div class="pd-group"><h4>Size</h4><div class="pd-options" id="pdSizes">
          ${p.sizes.map((s,i) => `<div class="pd-option ${i===selectedSize?"selected":""}" data-i="${i}">${s.label} — ${money(s.price)}</div>`).join("")}
        </div></div>` : ""}
      ${p.addons ? `
        <div class="pd-group"><h4>Add-ons</h4><div class="pd-options" id="pdAddons">
          ${p.addons.map((a,i) => `<div class="pd-option ${selectedAddons.has(i)?"selected":""}" data-i="${i}">${a.label} +${money(a.price)}</div>`).join("")}
        </div></div>` : ""}
      ${p.priceTBD ? `<p class="pd-desc"><strong>Price to be confirmed by our team.</strong> Add to cart and we'll confirm on WhatsApp/phone.</p>` : ""}
      <div class="pd-qty">
        <button id="pdMinus">−</button>
        <span id="pdQty">${qty}</span>
        <button id="pdPlus">+</button>
      </div>
      <div class="pd-footer">
        <span class="pd-total">${p.priceTBD ? "TBD" : money(total())}</span>
        <button class="btn btn-primary" id="pdAdd">Add to Cart</button>
      </div>
    `;
    $("#pdClose").addEventListener("click", closeModals);
    if (p.sizes) $$("#pdSizes .pd-option").forEach(el => el.addEventListener("click", () => { selectedSize = +el.dataset.i; draw(); }));
    if (p.addons) $$("#pdAddons .pd-option").forEach(el => el.addEventListener("click", () => {
      const i = +el.dataset.i;
      selectedAddons.has(i) ? selectedAddons.delete(i) : selectedAddons.add(i);
      draw();
    }));
    $("#pdMinus").addEventListener("click", () => { if (qty > 1) qty--; draw(); });
    $("#pdPlus").addEventListener("click", () => { qty++; draw(); });
    $("#pdAdd").addEventListener("click", () => {
      const sizeLabel = p.sizes ? p.sizes[selectedSize].label : null;
      const addonLabels = p.addons ? [...selectedAddons].map(i => p.addons[i].label) : [];
      const optionsText = [sizeLabel, ...addonLabels].filter(Boolean).join(", ") || "Regular";
      addToCart({
        id: p.id + "|" + optionsText,
        baseId: p.id,
        name: p.name,
        emoji: p.emoji,
        unitPrice: p.priceTBD ? 0 : total() / qty,
        qty,
        options: optionsText,
        priceTBD: !!p.priceTBD,
      });
      closeModals();
    });
  }
  draw();
  $("#productOverlay").classList.add("open");
}

/* =========================================================
   CART
   ========================================================= */
function addToCart(item) {
  const existing = cart.find(c => c.id === item.id);
  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push(item);
  }
  saveCart();
  renderCart();
  showToast(`${item.name} added to cart`);
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  saveCart();
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  renderCart();
}

function cartSubtotal() {
  return cart.reduce((sum, c) => sum + c.unitPrice * c.qty, 0);
}

function renderCart() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  $("#cartCount").textContent = count;

  if (cart.length === 0) {
    $("#cartBody").innerHTML = `<div class="cart-empty"><span>🛒</span>Your cart is empty.<br>Add something delicious!</div>`;
  } else {
    $("#cartBody").innerHTML = cart.map(c => `
      <div class="cart-item">
        <div class="cart-item-media">${c.emoji}</div>
        <div class="cart-item-info">
          <h4>${c.name}</h4>
          <p class="meta">${c.options || ""}${c.priceTBD ? " • Price to be confirmed" : ""}</p>
          <div class="qty-control">
            <button data-minus="${c.id}">−</button>
            <span>${c.qty}</span>
            <button data-plus="${c.id}">+</button>
          </div>
          <div class="remove-btn" data-remove="${c.id}">Remove</div>
        </div>
        <div class="cart-item-price">${c.priceTBD ? "TBD" : money(c.unitPrice * c.qty)}</div>
      </div>`).join("");
    $$("[data-minus]").forEach(el => el.addEventListener("click", () => changeQty(el.dataset.minus, -1)));
    $$("[data-plus]").forEach(el => el.addEventListener("click", () => changeQty(el.dataset.plus, 1)));
    $$("[data-remove]").forEach(el => el.addEventListener("click", () => removeItem(el.dataset.remove)));
  }

  const subtotal = cartSubtotal();
  const delivery = cart.length ? DELIVERY_FEE : 0;
  $("#cartSubtotal").textContent = money(subtotal);
  $("#cartDelivery").textContent = money(delivery);
  $("#cartTotal").textContent = money(subtotal + delivery);
  updateWhatsappLinks();
}

function openCart() { $("#cartDrawer").classList.add("open"); $("#cartOverlay").classList.add("open"); }
function closeCart() { $("#cartDrawer").classList.remove("open"); $("#cartOverlay").classList.remove("open"); }

/* =========================================================
   CHECKOUT
   ========================================================= */
function openCheckout() {
  if (cart.length === 0) { showToast("Your cart is empty"); return; }
  $("#checkoutForm").hidden = false;
  $("#checkoutConfirm").hidden = true;
  const subtotal = cartSubtotal();
  const delivery = DELIVERY_FEE;
  $("#orderSummary").innerHTML = `
    ${cart.map(c => `<div class="cart-row"><span>${c.name} x${c.qty}</span><span>${c.priceTBD ? "TBD" : money(c.unitPrice * c.qty)}</span></div>`).join("")}
    <div class="cart-row"><span>Delivery</span><span>${money(delivery)}</span></div>
    <div class="cart-row total"><span>Total</span><span>${money(subtotal + delivery)}</span></div>
  `;
  closeCart();
  $("#checkoutOverlay").classList.add("open");
}

function closeModals() {
  $("#checkoutOverlay").classList.remove("open");
  $("#productOverlay").classList.remove("open");
}

function placeOrder(e) {
  e.preventDefault();
  const ref = "FB-" + Math.floor(100000 + Math.random() * 900000);
  $("#orderRef").textContent = ref;
  $("#checkoutForm").hidden = true;
  $("#checkoutConfirm").hidden = false;
  cart = [];
  saveCart();
  renderCart();
}

/* =========================================================
   WHATSAPP LINKS
   ========================================================= */
function buildWhatsappMessage() {
  if (cart.length === 0) return "Hi Fresh Bite! I'd like to place an order.";
  const lines = cart.map(c => `- ${c.name} (${c.options || "Regular"}) x${c.qty}${c.priceTBD ? " [price TBD]" : ` — ${money(c.unitPrice * c.qty)}`}`);
  const subtotal = cartSubtotal();
  return `Hi Fresh Bite! I'd like to order:\n${lines.join("\n")}\n\nSubtotal: ${money(subtotal)}\nDelivery: ${money(DELIVERY_FEE)}`;
}
function updateWhatsappLinks() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsappMessage())}`;
  $("#whatsappFab").href = url;
  $("#whatsappOrderBtn").href = url;
  $("#whatsappLocBtn").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Fresh Bite, can you share your restaurant location?")}`;
}

/* =========================================================
   NAV / SCROLL EFFECTS
   ========================================================= */
function setupNav() {
  const nav = $("#navbar");
  window.addEventListener("scroll", () => {
    nav.style.boxShadow = window.scrollY > 10 ? "0 10px 30px -20px rgba(0,0,0,.6)" : "none";
  });
  $("#hamburger").addEventListener("click", () => {
    $("#hamburger").classList.toggle("open");
    $("#navLinks").classList.toggle("open");
  });
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => {
    $("#hamburger").classList.remove("open");
    $("#navLinks").classList.remove("open");
  }));
  $$('a[data-cat]').forEach(a => a.addEventListener("click", (e) => {
    e.preventDefault();
    setActiveCategory(a.dataset.cat);
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  }));
}

/* =========================================================
   INIT
   ========================================================= */
function init() {
  $("#year").textContent = new Date().getFullYear();
  renderQuickCats();
  renderChips();
  renderMenu();
  renderDeals();
  renderCart();
  updateWhatsappLinks();
  setupNav();

  $("#searchInput").addEventListener("input", (e) => { searchTerm = e.target.value; renderMenu(); });
  $("#sortSelect").addEventListener("change", (e) => { sortMode = e.target.value; renderMenu(); });

  $("#cartBtn").addEventListener("click", openCart);
  $("#cartCloseBtn").addEventListener("click", closeCart);
  $("#cartOverlay").addEventListener("click", closeCart);
  $("#clearCartBtn").addEventListener("click", () => { cart = []; saveCart(); renderCart(); });
  $("#checkoutBtn").addEventListener("click", openCheckout);

  $("#checkoutCloseBtn").addEventListener("click", closeModals);
  $("#checkoutOverlay").addEventListener("click", (e) => { if (e.target === e.currentTarget) closeModals(); });
  $("#productOverlay").addEventListener("click", (e) => { if (e.target === e.currentTarget) closeModals(); });
  $("#orderForm").addEventListener("submit", placeOrder);
  $("#confirmCloseBtn").addEventListener("click", closeModals);

  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Message sent! We'll get back to you soon.");
    e.target.reset();
  });
}

document.addEventListener("DOMContentLoaded", init);
