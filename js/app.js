// ============================================
// FULL MENU DATA
// ============================================
const fullMenu = [
  // SALADES
  { id: 1, name: "Salade Niçoise", price: 35, category: "salades", description: "Tomate, riz, thon, betterave, pomme de terre, carottes, concombre", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  { id: 2, name: "Salade Russe", price: 35, category: "salades", description: "Patata rossa, thon, maïs", image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400" },
  { id: 3, name: "Salade Thon", price: 35, category: "salades", description: "Tomate, concombre, thon, olives", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" },
  { id: 4, name: "Salade Normale", price: 25, category: "salades", description: "Tomate, concombre, olives", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400" },
  
  // PLATS
  { id: 5, name: "Plat Chawarma Poulet", price: 80, category: "plats", description: "Servi avec Frites", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400" },
  { id: 6, name: "Plat Filet Poulet", price: 80, category: "plats", description: "Servi avec Frites", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
  { id: 7, name: "Plat Poulet Mexicain", price: 80, category: "plats", description: "Servi avec Frites", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400" },
  { id: 8, name: "Plat Viande Hachée", price: 80, category: "plats", description: "Servi avec Frites", image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400" },
  { id: 9, name: "Plat Chawarma Arabe", price: 70, category: "plats", description: "Servi avec Frites", image: "https://images.unsplash.com/photo-1561651823-34a0658ebc9d?w=400" },
  { id: 10, name: "Plat Falafel", price: 35, category: "plats", description: "Servi avec Frites", image: "https://images.unsplash.com/photo-1593001872095-7d5f5c731b3e?w=400" },
  
  // TACOS
  { id: 11, name: "Tacos Poulet", price: 45, category: "tacos", description: "Poulet mariné avec sauce fromagère", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400" },
  { id: 12, name: "Tacos Mixte", price: 45, category: "tacos", description: "Mélange de poulet et viande hachée", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400" },
  { id: 13, name: "Tacos Viande Hachée", price: 45, category: "tacos", description: "Viande hachée épicée", image: "https://images.unsplash.com/photo-1613514785913-63a6c0d0db21?w=400" },
  
  // PIZZAS
  { id: 14, name: "Pizza Royale", price: 90, category: "pizzas", description: "Sauce, mozzarella, poivrons, calamars, champignons, crevettes, olives, maïs, thon", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400", badge: "Popular" },
  { id: 15, name: "Pizza Chahd Cham", price: 85, category: "pizzas", description: "Sauce, mozzarella, poivrons, calamar, champignons, crevettes, olives, maïs", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" },
  { id: 16, name: "Pizza Viande Hachée", price: 70, category: "pizzas", description: "Sauce, mozzarella, viande hachée, olives", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400" },
  { id: 17, name: "Pizza Crevettes", price: 70, category: "pizzas", description: "Sauce, mozzarella, crevettes, olives", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" },
  { id: 18, name: "Pizza Chawarma", price: 70, category: "pizzas", description: "Sauce, mozzarella, poivrons, chawarma, olives", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400" },
  { id: 19, name: "Pizza Légumes", price: 65, category: "pizzas", description: "Sauce, mozzarella, maïs, poivrons, olives, champignons", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400", badge: "Végétarien" },
  { id: 20, name: "Pizza Champignons", price: 65, category: "pizzas", description: "Sauce, mozzarella, champignons, olives", image: "https://images.unsplash.com/photo-1548369937-47519962c11a?w=400" },
  { id: 21, name: "Pizza Thon", price: 65, category: "pizzas", description: "Sauce, mozzarella, thon, olives", image: "https://images.unsplash.com/photo-1574126154517-d1e0d89e7344?w=400" },
  { id: 22, name: "Pizza Margarita", price: 55, category: "pizzas", description: "Sauce, mozzarella, olives", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400" },
  { id: 23, name: "Petite Pizza Chawarma 20cm", price: 30, category: "pizzas", description: "Sauce, mozzarella, poivrons, chawarma, olives", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" },
  
  // SANDWICHES
  { id: 24, name: "Sandwich Chawarma Super", price: 50, category: "sandwiches", description: "Chawarma généreux avec sauce spéciale", image: "https://images.unsplash.com/photo-1642783944285-b33b18ef5768?w=400", badge: "Best Seller" },
  { id: 25, name: "Sandwich Quesadilla", price: 40, category: "sandwiches", description: "Fromage fondant avec garniture au choix", image: "https://images.unsplash.com/photo-1613514785913-63a6c0d0db21?w=400" },
  { id: 26, name: "Sandwich Chawarma", price: 35, category: "sandwiches", description: "Chawarma traditionnel", image: "https://images.unsplash.com/photo-1561651823-34a0658ebc9d?w=400" },
  { id: 27, name: "Sandwich Mexicain", price: 35, category: "sandwiches", description: "Saveurs épicées mexicaines", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400" },
  { id: 28, name: "Sandwich Poulet Indien", price: 35, category: "sandwiches", description: "Poulet aux épices indiennes", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400" },
  { id: 29, name: "Sandwich Suprême", price: 35, category: "sandwiches", description: "Mélange premium de viandes", image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400" },
  { id: 30, name: "Sandwich Flamenco", price: 35, category: "sandwiches", description: "Saveurs espagnoles", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400" },
  { id: 31, name: "Sandwich Latino", price: 35, category: "sandwiches", description: "Épices latines", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" },
  { id: 32, name: "Sandwich Viande Hachée", price: 35, category: "sandwiches", description: "Viande hachée grillée", image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400" },
  { id: 33, name: "Sandwich Tac Chicken", price: 28, category: "sandwiches", description: "Poulet pané croustillant", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400" },
  { id: 34, name: "Sandwich Hamburger", price: 28, category: "sandwiches", description: "Burger classique", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400" },
  { id: 35, name: "Sandwich Chicken Burger", price: 25, category: "sandwiches", description: "Burger au poulet", image: "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?w=400" },
  { id: 36, name: "Sandwich Falafel", price: 15, category: "sandwiches", description: "Falafel traditionnel", image: "https://images.unsplash.com/photo-1593001872095-7d5f5c731b3e?w=400", badge: "Végétarien" },
  
  // DESSERTS
  { id: 37, name: "Mehalabila", price: 15, category: "desserts", description: "Dessert traditionnel arabe au lait et eau de rose", image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400" },
  
  // BOISSONS
  { id: 38, name: "Grande Bouteille d'eau", price: 20, category: "boissons", description: "1.5L", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400" },
  { id: 39, name: "Bio Fruta", price: 15, category: "boissons", description: "33cl", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400" },
  { id: 40, name: "Pepsi", price: 15, category: "boissons", description: "33cl", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400" },
  { id: 41, name: "Petite Bouteille d'eau", price: 10, category: "boissons", description: "50cl", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400" },
];

// ============================================
// CART FUNCTIONALITY
// ============================================

let cart = [];

const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartCountMobile = document.getElementById('cartCountMobile');
const sidebarCartCount = document.getElementById('sidebarCartCount');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const emptyCart = document.getElementById('emptyCart');
const sendOrderBtn = document.getElementById('sendOrderBtn');
const whtsappBTN = document.querySelector('.whtsappBTN');
const btnWhatsApp = document.querySelector('.btnwhat a');
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");
const whatsAPPbb = document.getElementById("WhatsAppbb");
// message de notification
// function showNotification() {
//   const phoneNumber = '+212608173585';
  
//   let message =`*New Order from Chahd Cham*: \n`;
//   showNotification('order via whatsapp');
//   ecodemessage=encodeURIComponent(message);
//   const encodeurl = `https://wa.me/${phoneNumber}?text=${message}`;
//   window.open(encodeurl, '_blank');
// }
// whtsappBTN.addEventListener('click', showNotification);
// btnWhatsApp.addEventListener('click', showNotification);
// whatsAPPbb.addEventListener('click', showNotification);


// Notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'fixed top-24 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-full shadow-lg z-[80] flex items-center gap-2 animate-bounce';
  notification.innerHTML = `
    <span class="material-icons-round">check_circle</span>
    <span class="font-medium">${message}</span>
  `;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

// Send WhatsApp
function sendWhatsApp() {
  const phoneNumber = '+212608173585';
  const message = 'Hi : I want to place an order from Chahd Cham: ';
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');

  showNotification('Message sent via WhatsApp');
}

// Event Listeners
whtsappBTN.addEventListener('click', sendWhatsApp);
btnWhatsApp.addEventListener('click', sendWhatsApp);
whatsAPPbb.addEventListener('click', sendWhatsApp);

function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartBtnMobile').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
document.getElementById('continueShopping').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function addToCart(name, price, image) {
  const existingItem = cart.find(item => item.name === name);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      image: image,
      quantity: 1
    });
  }
  
  updateCart();
  showNotification(`${name} added to cart!`);
}

function updateCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  cartCount.textContent = totalItems;
  cartCountMobile.textContent = totalItems;
  sidebarCartCount.textContent = totalItems;
  
  if (totalItems > 0) {
    cartCount.classList.remove('hidden');
    cartCountMobile.classList.remove('hidden');
    cartCount.classList.add('cart-badge');
    setTimeout(() => cartCount.classList.remove('cart-badge'), 300);
  } else {
    cartCount.classList.add('hidden');
    cartCountMobile.classList.add('hidden');
  }
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartSubtotal.textContent = `${subtotal} MAD`;
  cartTotal.textContent = `${subtotal} MAD`;
  
  renderCartItems();
}

function renderCartItems() {
  if (cart.length === 0) {
    emptyCart.style.display = 'block';
    cartItems.innerHTML = '';
    cartItems.appendChild(emptyCart);
    sendOrderBtn.disabled = true;
    sendOrderBtn.classList.add('opacity-50', 'cursor-not-allowed');
    return;
  }
  
  emptyCart.style.display = 'none';
  sendOrderBtn.disabled = false;
  sendOrderBtn.classList.remove('opacity-50', 'cursor-not-allowed');
  
  cartItems.innerHTML = '';
  
  cart.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item bg-gray-50 dark:bg-[#1a0f12] rounded-xl p-4 flex gap-4';
    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg">
      <div class="flex-1">
        <h4 class="font-bold text-gray-900 dark:text-white text-sm">${item.name}</h4>
        <p class="text-primary font-bold text-sm">${item.price} MAD</p>
        
        <div class="flex items-center justify-between mt-2">
          <div class="flex items-center gap-2">
            <button onclick="updateQuantity(${index}, -1)" class="qty-btn w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <span class="material-icons-round text-sm">remove</span>
            </button>
            <span class="font-bold text-gray-900 dark:text-white w-6 text-center">${item.quantity}</span>
            <button onclick="updateQuantity(${index}, 1)" class="qty-btn w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <span class="material-icons-round text-sm">add</span>
            </button>
          </div>
          
          <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-600 transition-colors">
            <span class="material-icons-round text-sm">delete</span>
          </button>
        </div>
        
        <p class="text-gray-500 dark:text-gray-400 text-xs mt-1">Total: ${item.price * item.quantity} MAD</p>
      </div>
    `;
    cartItems.appendChild(itemElement);
  });
}

function updateQuantity(index, change) {
  cart[index].quantity += change;
  
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

sendOrderBtn.addEventListener('click', () => {
  if (cart.length === 0) return;
  
  const phoneNumber = '+212608173585';
  
  let message = '🍽️ *New Order from Chahd Cham*\n\n';
  message += '📋 *Order Details:*\n';
  message += '━━━━━━━━━━━━━━━━━━━\n\n';
  
  cart.forEach((item, index) => {
    message += `${index + 1}. *${item.name}*\n`;
    message += `   Quantity: ${item.quantity}\n`;
    message += `   Price: ${item.price} MAD each\n`;
    message += `   Subtotal: ${item.price * item.quantity} MAD\n\n`;
  });
  
  message += '━━━━━━━━━━━━━━━━━━━\n';
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  message += `💰 *Total: ${total} MAD*\n\n`;
  message += '📍 *Delivery Address:*\n';
  message += '(Please provide your address)\n\n';
  message += '📞 *Contact Number:*\n';
  message += '(Please provide your phone number)\n\n';
  message += 'Thank you for choosing Chahd Cham! 🙏';
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
});

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'fixed top-24 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-full shadow-lg z-[80] flex items-center gap-2 animate-bounce';
  notification.innerHTML = `
    <span class="material-icons-round">check_circle</span>
    <span class="font-medium">${message}</span>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCart();
    closeFullMenu();
  }
});

// ============================================
// FULL MENU MODAL FUNCTIONALITY
// ============================================

const menuModal = document.getElementById('menuModal');
const fullMenuGrid = document.getElementById('fullMenuGrid');

function openFullMenu() {
  menuModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderFullMenu('all');
}

function closeFullMenu() {
  menuModal.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('closeMenuModal').addEventListener('click', closeFullMenu);
menuModal.addEventListener('click', (e) => {
  if (e.target === menuModal) {
    closeFullMenu();
  }
});

function filterMenu(category) {
  // Update active tab
  document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.category === category) {
      tab.classList.add('active');
    }
  });
  
  renderFullMenu(category);
}

function renderFullMenu(category) {
  const filteredItems = category === 'all' 
    ? fullMenu 
    : fullMenu.filter(item => item.category === category);
  
  fullMenuGrid.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      ${filteredItems.map(item => `
        <div class="menu-item-card bg-white dark:bg-[#2a1418] rounded-xl p-4 border border-gray-100 dark:border-gray-700 flex gap-4">
          <img src="${item.image}" alt="${item.name}" class="w-24 h-24 object-cover rounded-lg flex-shrink-0">
          <div class="flex-1 flex flex-col">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="font-bold text-gray-900 dark:text-white text-sm">${item.name}</h4>
                ${item.badge ? `<span class="inline-block mt-1 px-2 py-0.5 text-xs rounded-full ${item.badge === 'Végétarien' ? 'bg-green-100 text-green-700' : 'bg-accent-gold text-white'}">${item.badge}</span>` : ''}
              </div>
              <span class="text-primary font-bold">${item.price} MAD</span>
            </div>
            <p class="text-gray-500 dark:text-gray-400 text-xs mt-1 flex-1">${item.description}</p>
            <button onclick="addToCart('${item.name}', ${item.price}, '${item.image}')" class="mt-2 w-full py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors font-medium text-sm flex items-center justify-center gap-1">
              <span class="material-icons-round text-sm">add_shopping_cart</span> Add
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ============================================
// MOBILE MENU TOGGLE - SLIDE DOWN ANIMATION
// ============================================
let isMenuOpen = false;

// Toggle mobile menu visibility
function toggleMobileMenu()
{
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) 
  {
    mobileMenu.classList.add("active");
    menuIcon.textContent = "close";
    document.body.style.overflow = "hidden";
  }
  else
  {
    mobileMenu.classList.remove("active");
    menuIcon.textContent = "menu";
    document.body.style.overflow = "";
  }

}
// Close mobile menu when clicking outside or pressing Escape
function closeMobileMenu() {
  isMenuOpen = false;
  mobileMenu.classList.remove("active");
  menuIcon.textContent = "menu";
  document.body.style.overflow = "";
}

// Toggle mobile menu on button click
menuBtn.addEventListener("click",(e) => {
  e.stopPropagation();
  toggleMobileMenu();
});

// Close mobile menu when clicking on a link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click',() =>{
    closeMobileMenu();
  });

});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (isMenuOpen && !mobileMenu.contains(e.target) && e.target !== menuBtn) 
  {
    closeMobileMenu();
  }
});

// Close mobile menu on Escape key press
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isMenuOpen) {
    closeMobileMenu();
  }
});