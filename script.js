/* Every food item across the site (burgers, pizzas, drinks) is drawn as a self-contained
   SVG "sticker" icon below (ICONS + DRINK_SVG) instead of hotlinked photos. No external
   image ever has to load, so nothing can ever go missing or break on any network. */
const ICONS={
 pizza:`<svg viewBox="0 0 160 160"><circle cx="80" cy="80" r="72" fill="#e4b876"/>
  <circle cx="80" cy="80" r="60" fill="#c93f2c"/>
  <circle cx="80" cy="80" r="52" fill="#f4ecdd" opacity=".92"/>
  <circle cx="55" cy="60" r="6" fill="#3f7d32"/><circle cx="102" cy="52" r="6" fill="#3f7d32"/>
  <circle cx="68" cy="102" r="6" fill="#3f7d32"/><circle cx="107" cy="96" r="6" fill="#3f7d32"/>
  <circle cx="85" cy="76" r="6" fill="#3f7d32"/>
  <path d="M80 80 L80 8M80 80 L136 118M80 80 L24 118" stroke="#d99a54" stroke-width="2" opacity=".45"/></svg>`,
 pizzaChicken:`<svg viewBox="0 0 160 160"><circle cx="80" cy="80" r="72" fill="#e4b876"/>
  <circle cx="80" cy="80" r="60" fill="#7a3b1d"/>
  <circle cx="80" cy="80" r="52" fill="#f2c97a" opacity=".85"/>
  <ellipse cx="58" cy="60" rx="10" ry="7" fill="#c98a4b"/><ellipse cx="102" cy="55" rx="9" ry="6" fill="#c98a4b"/>
  <ellipse cx="68" cy="102" rx="10" ry="7" fill="#c98a4b"/><ellipse cx="107" cy="94" rx="9" ry="6" fill="#c98a4b"/>
  <circle cx="85" cy="76" r="5" fill="none" stroke="#a84632" stroke-width="2"/>
  <circle cx="63" cy="86" r="4" fill="none" stroke="#a84632" stroke-width="2"/>
  <path d="M80 80 L80 8M80 80 L136 118M80 80 L24 118" stroke="#d99a54" stroke-width="2" opacity=".4"/></svg>`,
 burger:`<svg viewBox="0 0 160 160">
  <path d="M20 70 Q80 20 140 70 L140 82 L20 82 Z" fill="#d99a54"/>
  <circle cx="55" cy="46" r="3" fill="#f4ecdd"/><circle cx="80" cy="38" r="3" fill="#f4ecdd"/><circle cx="105" cy="46" r="3" fill="#f4ecdd"/>
  <path d="M18 82 Q80 98 142 82 L142 92 Q80 108 18 92 Z" fill="#6a8f4e"/>
  <rect x="20" y="92" width="120" height="20" rx="8" fill="#c9903e"/>
  <path d="M20 110 L30 124 L42 110 L54 124 L66 110 L78 124 L90 110 L102 124 L114 110 L126 124 L140 110 L140 114 L20 114 Z" fill="#e8b93e"/>
  <path d="M20 124 Q80 150 140 124 L140 134 Q80 158 20 134 Z" fill="#c9863f"/></svg>`,
 pizzaPepperoni:`<svg viewBox="0 0 160 160"><circle cx="80" cy="80" r="72" fill="#e4b876"/>
  <circle cx="80" cy="80" r="60" fill="#c93f2c"/>
  <circle cx="80" cy="80" r="52" fill="#f4ecdd" opacity=".92"/>
  <circle cx="55" cy="60" r="8" fill="#a4271c"/><circle cx="102" cy="52" r="8" fill="#a4271c"/>
  <circle cx="68" cy="102" r="8" fill="#a4271c"/><circle cx="107" cy="96" r="8" fill="#a4271c"/>
  <circle cx="85" cy="76" r="8" fill="#a4271c"/>
  <path d="M80 80 L80 8M80 80 L136 118M80 80 L24 118" stroke="#d99a54" stroke-width="2" opacity=".45"/></svg>`,
 burgerBeef:`<svg viewBox="0 0 160 160">
  <path d="M20 70 Q80 20 140 70 L140 82 L20 82 Z" fill="#d99a54"/>
  <circle cx="55" cy="46" r="3" fill="#f4ecdd"/><circle cx="80" cy="38" r="3" fill="#f4ecdd"/><circle cx="105" cy="46" r="3" fill="#f4ecdd"/>
  <path d="M18 82 Q80 98 142 82 L142 92 Q80 108 18 92 Z" fill="#6a8f4e"/>
  <rect x="20" y="92" width="120" height="18" rx="7" fill="#5a3323"/>
  <path d="M20 110 L30 124 L42 110 L54 124 L66 110 L78 124 L90 110 L102 124 L114 110 L126 124 L140 110 L140 114 L20 114 Z" fill="#e8b93e"/>
  <path d="M20 124 Q80 150 140 124 L140 134 Q80 158 20 134 Z" fill="#c9863f"/></svg>`,
 burgerBig:`<svg viewBox="0 0 160 170">
  <path d="M14 46 Q80 4 146 46 L146 58 L14 58 Z" fill="#d99a54"/>
  <circle cx="50" cy="28" r="3" fill="#f4ecdd"/><circle cx="80" cy="20" r="3" fill="#f4ecdd"/><circle cx="110" cy="28" r="3" fill="#f4ecdd"/>
  <path d="M12 58 Q80 72 148 58 L148 68 Q80 82 12 68 Z" fill="#6a8f4e"/>
  <rect x="16" y="68" width="128" height="16" rx="7" fill="#5a3323"/>
  <path d="M16 84 q8 8 16 0 q8 8 16 0 q8 8 16 0 q8 8 16 0 q8 8 16 0 q8 8 16 0 q8 8 16 0 q8 8 16 0" stroke="#8c3a2c" stroke-width="6" fill="none" opacity=".85"/>
  <path d="M16 98 L28 112 L42 98 L56 112 L70 98 L84 112 L98 98 L112 112 L126 98 L140 112 L144 98 L144 102 L16 102 Z" fill="#e8b93e"/>
  <rect x="16" y="112" width="128" height="14" rx="6" fill="#5a3323"/>
  <path d="M14 126 Q80 152 146 126 L146 136 Q80 162 14 138 Z" fill="#c9863f"/></svg>`,
 fries:`<svg viewBox="0 0 160 160">
  <path d="M40 70 L120 70 L112 150 L48 150 Z" fill="#a84632"/>
  <path d="M40 70 L120 70 L124 58 L36 58 Z" fill="#8c3a2c"/>
  <rect x="40" y="90" width="80" height="7" fill="#f4ecdd" opacity=".8"/>
  <rect x="50" y="20" width="10" height="55" rx="3" fill="#e8b93e" transform="rotate(-6 55 47)"/>
  <rect x="66" y="14" width="10" height="62" rx="3" fill="#f2c53d" transform="rotate(-2 71 45)"/>
  <rect x="84" y="12" width="10" height="64" rx="3" fill="#e8b93e" transform="rotate(3 89 44)"/>
  <rect x="100" y="16" width="10" height="58" rx="3" fill="#f2c53d" transform="rotate(7 105 45)"/>
  <path d="M46 100 q6 14 0 28M64 98 q6 15 0 30M84 98 q-6 15 0 30M104 100 q-6 14 0 28" stroke="#e8b93e" stroke-width="5" fill="none" opacity=".9"/></svg>`,
 wrap:`<svg viewBox="0 0 160 160">
  <rect x="20" y="50" width="120" height="70" rx="35" fill="#efd9a0"/>
  <line x1="35" y1="58" x2="35" y2="112" stroke="#c9a066" stroke-width="3" opacity=".5"/>
  <line x1="55" y1="53" x2="55" y2="117" stroke="#c9a066" stroke-width="3" opacity=".5"/>
  <line x1="75" y1="51" x2="75" y2="119" stroke="#c9a066" stroke-width="3" opacity=".5"/>
  <circle cx="128" cy="85" r="32" fill="#f4ecdd"/>
  <circle cx="128" cy="85" r="32" fill="none" stroke="#d9b878" stroke-width="4"/>
  <path d="M104 70 q24 -10 48 0 q-6 10 -24 10 q-18 0 -24 -10Z" fill="#6a8f4e"/>
  <circle cx="118" cy="90" r="7" fill="#c9903e"/><circle cx="136" cy="88" r="7" fill="#c9903e"/><circle cx="128" cy="100" r="6" fill="#c9903e"/>
  <path d="M110 100 q18 12 36 0" stroke="#a84632" stroke-width="4" fill="none" opacity=".8"/></svg>`
};
/* Drinks drawn as crisp CSS/SVG glass art (cola/lemonade/orange soda/milkshake) so every
   drink has a clean, consistent, on-brand look even where a licensed photo wasn't available. */
const DRINK_SVG={
 cola:`<svg viewBox="0 0 120 160"><defs><linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5a2a1e"/><stop offset="100%" stop-color="#2b120c"/></linearGradient></defs>
  <path d="M24 34 L96 34 L88 152 L32 152 Z" fill="#eaf6fb" opacity=".12"/>
  <path d="M30 46 L90 46 L84 148 L36 148 Z" fill="url(#cg1)"/>
  <circle cx="50" cy="75" r="6" fill="#fff" opacity=".18"/><circle cx="70" cy="100" r="5" fill="#fff" opacity=".14"/>
  <path d="M42 30 Q60 10 78 30 L74 46 L46 46 Z" fill="#8c3a2c"/>
  <rect x="55" y="4" width="10" height="30" rx="3" fill="#a84632"/></svg>`,
 lemonade:`<svg viewBox="0 0 120 160"><defs><linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff3b0"/><stop offset="100%" stop-color="#f2c53d"/></linearGradient></defs>
  <path d="M22 30 L98 30 L88 152 L32 152 Z" fill="#eaf6fb" opacity=".18"/>
  <path d="M28 40 L92 40 L84 148 L36 148 Z" fill="url(#lg1)"/>
  <circle cx="50" cy="70" r="6" fill="#fff" opacity=".85"/><circle cx="70" cy="95" r="5" fill="#fff" opacity=".7"/><circle cx="55" cy="115" r="4.5" fill="#fff" opacity=".6"/>
  <ellipse cx="60" cy="42" rx="32" ry="7" fill="#fdf6e3"/>
  <circle cx="60" cy="25" r="16" fill="none" stroke="#e8e0c8" stroke-width="4" opacity=".5"/>
  <rect x="80" y="8" width="8" height="46" rx="4" fill="#f4ecdd" opacity=".9"/>
  <circle cx="24" cy="55" r="2" fill="#fff" opacity=".7"/><circle cx="30" cy="85" r="2" fill="#fff" opacity=".6"/><circle cx="92" cy="65" r="2" fill="#fff" opacity=".6"/></svg>`,
 orange:`<svg viewBox="0 0 120 160"><defs><linearGradient id="og1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffb057"/><stop offset="100%" stop-color="#f2760c"/></linearGradient></defs>
  <path d="M24 32 L96 32 L87 150 L33 150 Z" fill="#eaf6fb" opacity=".18"/>
  <path d="M30 44 L90 44 L83 146 L37 146 Z" fill="url(#og1)"/>
  <circle cx="50" cy="70" r="6" fill="#fff" opacity=".55"/><circle cx="68" cy="100" r="5" fill="#fff" opacity=".45"/>
  <path d="M20 44 a10 10 0 0 1 20 0" fill="none" stroke="#fff8ea" stroke-width="6" opacity=".5"/>
  <ellipse cx="60" cy="44" rx="30" ry="6" fill="#ffe9c7"/>
  <rect x="76" y="6" width="7" height="46" rx="3.5" fill="#f4ecdd" opacity=".9"/>
  <circle cx="26" cy="60" r="2" fill="#fff" opacity=".6"/><circle cx="90" cy="80" r="2" fill="#fff" opacity=".55"/></svg>`,
 milkshake:`<svg viewBox="0 0 120 160"><defs><linearGradient id="mg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff7ee"/><stop offset="100%" stop-color="#e7b98c"/></linearGradient></defs>
  <path d="M26 46 L94 46 L86 150 L34 150 Z" fill="#eaf6fb" opacity=".15"/>
  <path d="M32 58 L88 58 L81 146 L39 146 Z" fill="url(#mg1)"/>
  <path d="M30 40 Q60 8 90 40 Q80 26 60 26 Q40 26 30 40Z" fill="#fffdf8"/>
  <circle cx="45" cy="20" r="5" fill="#fffdf8"/><circle cx="72" cy="18" r="5" fill="#fffdf8"/><circle cx="60" cy="14" r="6" fill="#fffdf8"/>
  <circle cx="62" cy="16" r="5" fill="#b3452f"/>
  <rect x="72" y="2" width="7" height="46" rx="3.5" fill="#f4ecdd" opacity=".9"/></svg>`
};
const FAVORITES=[
 {n:"Smoky Beef Deluxe",d:"Flame-grilled beef patty, smoked cheddar, caramelized onions.",p:850,t:"Beef Burger",icon:ICONS.burgerBeef},
 {n:"Crispy Zinger",d:"Hand-breaded chicken fillet, spicy mayo, pickles.",p:690,t:"Chicken Burger",icon:ICONS.burger},
 {n:"Fire Pepperoni Pizza",d:"Wood-fired crust, mozzarella, double pepperoni.",p:1290,t:"Pizza",icon:ICONS.pizzaPepperoni},
 {n:"Margherita Pizza",d:"San Marzano tomato, fresh mozzarella, basil.",p:1150,t:"Pizza",icon:ICONS.pizza},
 {n:"BBQ Chicken Pizza",d:"Smoky BBQ base, grilled chicken, red onion.",p:1350,t:"Pizza",icon:ICONS.pizzaChicken},
 {n:"Classic Cheeseburger",d:"Beef patty, melted cheddar, pickles, house sauce.",p:790,t:"Beef Burger",icon:ICONS.burgerBeef},
 {n:"Loaded Cheese Fries",d:"Hand-cut fries, melted cheese, house sauce.",p:450,t:"Fries",icon:ICONS.fries},
 {n:"BBQ Bacon Burger",d:"Beef patty, smoked bacon, tangy BBQ glaze.",p:920,t:"Beef Burger",icon:ICONS.burgerBig},
 {n:"Peri Peri Wrap",d:"Grilled chicken, peri sauce, fresh veg.",p:520,t:"Quick Bites",icon:ICONS.wrap}
];
const DRINKS=[
 {n:"Ice-Cold Cola",d:"Classic chilled cola, served with ice.",p:180,t:"Drink",svg:DRINK_SVG.cola},
 {n:"Fresh Lemonade",d:"House-squeezed lemons over crushed ice.",p:200,t:"Drink",svg:DRINK_SVG.lemonade},
 {n:"Orange Soda",d:"Fizzy orange soda, ice-cold.",p:180,t:"Drink",svg:DRINK_SVG.orange},
 {n:"Chocolate Milkshake",d:"Thick and creamy, topped with whipped cream.",p:390,t:"Drink",svg:DRINK_SVG.milkshake}
];
const ALL_ITEMS=FAVORITES.concat(DRINKS);
const DEALS=[
 {n:"Burger + Fries + Drink",d:"Any signature burger with fries and a chilled drink.",p:990,icon:ICONS.burgerBeef},
 {n:"Family Feast",d:"2 burgers, 1 pizza, fries, 4 drinks.",p:2990,icon:ICONS.pizzaPepperoni},
 {n:"Duo Deal",d:"2 zinger burgers with fries.",p:1350,icon:ICONS.burger}
];
const CATS=["Deals","Chicken Burgers","Beef Burgers","Pizza","Drinks","Quick Bites","Fries"];
let cart=[];

function photoInner(item){
 if(item.svg) return `<div class="drink-glass">${item.svg}</div><span class="tag">${item.n}</span>`;
 if(item.icon) return `<div class="food-icon">${item.icon}</div><span class="tag">${item.n}</span>`;
 if(item.img) return `<img src="${item.img}" alt="${item.n}" loading="lazy" onerror="this.style.display='none'"><span class="tag">${item.n}</span>`;
 return `<span class="tag">${item.n}</span>`;
}
function foodCard(item){
 return `<div class="food-card"><div class="photo">${photoInner(item)}</div>
 <div class="food-body"><h3>${item.n}</h3><p>${item.d}</p>
 <div class="food-foot"><span class="price">Rs ${item.p}</span>
 <button class="add-btn" onclick='addToCart(${JSON.stringify(item.n)},${item.p})'>Add</button></div></div></div>`;
}
document.getElementById('favGrid').innerHTML=FAVORITES.map(foodCard).join('');
document.getElementById('dealGrid').innerHTML=DEALS.map(d=>
 `<div class="food-card deal-card"><span class="deal-tag">Deal</span><div class="photo">${photoInner(d)}</div>
 <div class="food-body"><h3>${d.n}</h3><p>${d.d}</p>
 <div class="food-foot"><span class="price">Rs ${d.p}</span>
 <button class="add-btn" onclick='addToCart(${JSON.stringify(d.n)},${d.p})'>Add</button></div></div></div>`).join('');

document.getElementById('tabs').innerHTML=CATS.map((c,i)=>
 `<button class="tab ${i===0?'active':''}" data-i="${i}" onclick="showTab(${i})">${c}</button>`).join('');
let listsHtml='';
CATS.forEach((c,i)=>{
 const items=ALL_ITEMS.filter(f=>f.t===c.replace(/s$/,'')||f.t===c).length?ALL_ITEMS.filter(f=>f.t===c.replace(/s$/,'')||f.t===c):ALL_ITEMS.slice(0,3);
 listsHtml+=`<div class="menu-list ${i===0?'active':''}" id="list${i}">${items.map(it=>
  `<div class="menu-row"><div class="photo">${photoInner(it)}</div><div class="menu-row-body"><h4>${it.n}</h4><span>${it.d}</span></div>
  <div class="menu-row-price">Rs ${it.p}</div>
  <button class="add-btn" onclick='addToCart(${JSON.stringify(it.n)},${it.p})'>Add</button></div>`).join('')}</div>`;
});
document.getElementById('menuLists').innerHTML=listsHtml;
function showTab(i){
 document.querySelectorAll('.tab').forEach((t,idx)=>t.classList.toggle('active',idx===i));
 document.querySelectorAll('.menu-list').forEach((l,idx)=>l.classList.toggle('active',idx===i));
}
const GALLERY_ICONS=[ICONS.burgerBeef,ICONS.pizzaPepperoni,ICONS.burger,ICONS.pizza,ICONS.burgerBig,ICONS.pizzaChicken,ICONS.burgerBeef,ICONS.pizzaPepperoni];
document.getElementById('gallery').innerHTML=GALLERY_ICONS.map(icon=>`<div class="photo"><div class="food-icon">${icon}</div></div>`).join('');

function addToCart(name,price){
 const existing=cart.find(c=>c.name===name);
 if(existing)existing.qty++;else cart.push({name,price,qty:1});
 renderCart();
}
function changeQty(name,delta){
 const item=cart.find(c=>c.name===name);
 if(!item)return;
 item.qty+=delta;
 if(item.qty<=0)cart=cart.filter(c=>c.name!==name);
 renderCart();
}
function renderCart(){
 const count=cart.reduce((a,c)=>a+c.qty,0);
 document.getElementById('cartCount').textContent=count;
 const box=document.getElementById('cartItems');
 if(!cart.length){box.innerHTML='<div class="cart-empty">Your cart is empty.</div>';}
 else{
  box.innerHTML=cart.map(c=>`<div class="cart-line"><div><strong>${c.name}</strong><div style="font-size:.8rem;color:var(--muted)">Rs ${c.price} × ${c.qty}</div></div>
  <div class="qty"><button onclick='changeQty(${JSON.stringify(c.name)},-1)'>-</button>${c.qty}<button onclick='changeQty(${JSON.stringify(c.name)},1)'>+</button></div></div>`).join('');
 }
 const total=cart.reduce((a,c)=>a+c.price*c.qty,0);
 document.getElementById('cartTotal').textContent='Rs '+total;
}
function toggleCart(open){
 document.getElementById('cartDrawer').classList.toggle('open',open);
 document.getElementById('overlay').classList.toggle('open',open);
}
window.addEventListener('scroll',()=>{
 document.getElementById('site-header').classList.toggle('compact',window.scrollY>40);
});
