// Heart & Brew State Manager & UI Controller

// --- DATABASE & STATE INITIALIZATION ---

const DEFAULT_MENU = [
    // Sandwiches
    { id: "sw-1", name: "Crab Sandwich", category: "sandwiches", price: 250, description: "Premium crab meat tossed in house dressing with crisp lettuce.", image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&q=80&w=400", isVeg: false },
    { id: "sw-2", name: "Exotic Veggies Sandwich", category: "sandwiches", price: 250, description: "Loaded with grilled bell peppers, zucchini, cheese and pesto.", image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=400", isVeg: true },
    { id: "sw-3", name: "Mushroom Cheesy Sandwich", category: "sandwiches", price: 249, description: "Sautéed mushrooms, melted cheddar and garlic mayo on toasted sourdough.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=400", isVeg: true },
    // Wraps
    { id: "wr-1", name: "Cheese Wraps", category: "wraps", price: 189, description: "Warm tortilla stuffed with a blend of cheeses and Mexican seasoning.", image: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=400", isVeg: true },
    { id: "wr-2", name: "Spicy Paneer Wraps", category: "wraps", price: 179, description: "Cottage cheese cubes tossed in spicy tandoori sauce wrapped with veggies.", image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=400", isVeg: true },
    // Fries
    { id: "fr-1", name: "Classic Fries", category: "fries", price: 89, description: "Crisp, golden-brown salted potato fries served with dip.", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400", isVeg: true },
    { id: "fr-2", name: "Peri Peri Fries", category: "fries", price: 99, description: "Golden fries dusted with spicy peri peri spice mix.", image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=400", isVeg: true },
    { id: "fr-3", name: "Messy Fries", category: "fries", price: 249, description: "Loaded with liquid cheese, spicy jalapeños, onions and signature dressing.", image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=400", isVeg: true },
    // Mojitos
    { id: "mj-1", name: "Classic Mojito", category: "mojitos", price: 179, description: "Refreshing blend of fresh lime, mint leaves, soda and brown sugar.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400", isVeg: true },
    { id: "mj-2", name: "Blueberry Mojito", category: "mojitos", price: 179, description: "Muddled sweet blueberries with mint, lime and sparkling water.", image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=400", isVeg: true },
    { id: "mj-3", name: "BubbleGum Mojito", category: "mojitos", price: 120, description: "Fun, sweet bubblegum syrup combined with mint and fresh lime soda.", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=400", isVeg: true },
    // Pasta
    { id: "ps-1", name: "Alfredo Pasta", category: "pasta", price: 289, description: "Penne tossed in creamy, rich white sauce with mushrooms and garlic bread.", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400", isVeg: true },
    { id: "ps-2", name: "Arrabiata Pasta", category: "pasta", price: 259, description: "Fiery red tomato sauce with bell peppers, olives and fresh basil.", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400", isVeg: true },
    // Frappe
    { id: "fp-1", name: "Blended Cold Coffee", category: "frappe", price: 179, description: "Classic thick, creamy blended espresso milk-shake with vanilla ice cream.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400", isVeg: true },
    { id: "fp-2", name: "Biscoff Frappe", category: "frappe", price: 259, description: "Indulgent blend of cookie butter, Lotus Biscoff crumbles and double shot coffee.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400", isVeg: true },
    // Burgers
    { id: "bg-1", name: "Classic Burger", category: "burgers", price: 49, description: "Simple single potato patty burger with onion, tomato and standard dressing.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400", isVeg: true },
    { id: "bg-2", name: "Cheese Burger", category: "burgers", price: 169, description: "Crispy veg patty topped with a thick cheese slice and cheesy spread.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400", isVeg: true },
    { id: "bg-3", name: "Spicy Paneer Burger", category: "burgers", price: 249, description: "Crispy fried cottage cheese patty loaded with hot and spicy peri-peri sauce.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400", isVeg: true },
    // Pizza
    { id: "pz-1", name: "Margherita Pizza", category: "pizza", price: 189, description: "Classic 10 inch pizza with fresh tomato sauce, basil and loads of mozzarella.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400", isVeg: true },
    { id: "pz-2", name: "Farm House Pizza", category: "pizza", price: 349, description: "10 inch pizza loaded with onions, green peppers, mushrooms and sweet corn.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400", isVeg: true }
];

const DEFAULT_ORDERS = [
    {
        id: "HB-9401",
        customerName: "Eleanor Shellstrop",
        phone: "98250 12345",
        deliveryType: "Takeaway",
        items: [
            { id: "fp-2", name: "Biscoff Frappe", price: 259, quantity: 2 },
            { id: "sw-2", name: "Exotic Veggies Sandwich", price: 250, quantity: 1 }
        ],
        total: 768,
        status: "Preparing",
        timestamp: new Date().toISOString()
    },
    {
        id: "HB-9399",
        customerName: "Chidi Anagonye",
        phone: "98250 54321",
        deliveryType: "Dine-in",
        items: [
            { id: "sw-3", name: "Mushroom Cheesy Sandwich", price: 249, quantity: 1 }
        ],
        total: 249,
        status: "Ready",
        timestamp: new Date(Date.now() - 3600000).toISOString()
    },
    {
        id: "HB-9398",
        customerName: "Tahani Al-Jamil",
        phone: "98250 99999",
        deliveryType: "Takeaway",
        items: [
            { id: "pz-2", name: "Farm House Pizza", price: 349, quantity: 1 },
            { id: "mj-2", name: "Blueberry Mojito", price: 179, quantity: 2 }
        ],
        total: 707,
        status: "Delivered",
        timestamp: new Date(Date.now() - 7200000).toISOString()
    }
];

const DEFAULT_RESERVATIONS = [
    {
        id: "R-8302",
        customerName: "Jason Mendoza",
        phone: "98250 67890",
        date: "2026-07-04",
        time: "19:30",
        guests: 4,
        occasion: "Birthday Party",
        status: "Pending",
        timestamp: new Date().toISOString()
    },
    {
        id: "R-8301",
        customerName: "Janet Dell-Tello",
        phone: "98250 11122",
        date: "2026-07-04",
        time: "12:00",
        guests: 2,
        occasion: "Casual Dining",
        status: "Confirmed",
        timestamp: new Date(Date.now() - 1800000).toISOString()
    }
];

const DEFAULT_REVIEWS = [
    {
        id: "rv-1",
        authorName: "Akanksha Narad",
        rating: 5,
        text: "The interior is super cozy! Truly has that warm oak aesthetic. We ordered the Biscoff Frappe and Cheese Garlic Bread, absolutely delicious. Staff was friendly.",
        timestamp: new Date(Date.now() - 86400000).toISOString()
    },
    {
        id: "rv-2",
        authorName: "Rohan Shah",
        rating: 4,
        text: "Excellent place to work or hang out with friends. Good Wi-Fi speed and very peaceful ambient music. Alfredo Pasta was rich and tasty.",
        timestamp: new Date(Date.now() - 172800000).toISOString()
    }
];

// Database Init function
function initDB() {
    if (!localStorage.getItem("heart_brew_menu")) {
        localStorage.setItem("heart_brew_menu", JSON.stringify(DEFAULT_MENU));
    }
    if (!localStorage.getItem("heart_brew_orders")) {
        localStorage.setItem("heart_brew_orders", JSON.stringify(DEFAULT_ORDERS));
    }
    if (!localStorage.getItem("heart_brew_reservations")) {
        localStorage.setItem("heart_brew_reservations", JSON.stringify(DEFAULT_RESERVATIONS));
    }
    if (!localStorage.getItem("heart_brew_reviews")) {
        localStorage.setItem("heart_brew_reviews", JSON.stringify(DEFAULT_REVIEWS));
    }
    if (!localStorage.getItem("heart_brew_cart")) {
        localStorage.setItem("heart_brew_cart", JSON.stringify([]));
    }
}

// Call initDB immediately
initDB();

// --- DB ACCESS & MUTATION FUNCTIONS ---

const DB = {
    // Menu
    getMenu: () => JSON.parse(localStorage.getItem("heart_brew_menu")),
    saveMenu: (menu) => {
        localStorage.setItem("heart_brew_menu", JSON.stringify(menu));
        window.dispatchEvent(new Event("heart_brew_menu_updated"));
    },
    addMenuItem: (item) => {
        const menu = DB.getMenu();
        item.id = "item-" + Date.now();
        menu.push(item);
        DB.saveMenu(menu);
    },
    deleteMenuItem: (itemId) => {
        let menu = DB.getMenu();
        menu = menu.filter(item => item.id !== itemId);
        DB.saveMenu(menu);
    },

    // Cart
    getCart: () => JSON.parse(localStorage.getItem("heart_brew_cart")),
    saveCart: (cart) => {
        localStorage.setItem("heart_brew_cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("heart_brew_cart_updated"));
    },
    addToCart: (itemId) => {
        const cart = DB.getCart();
        const menu = DB.getMenu();
        const item = menu.find(i => i.id === itemId);
        if (!item) return;

        const existing = cart.find(c => c.id === itemId);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                isVeg: item.isVeg,
                quantity: 1
            });
        }
        DB.saveCart(cart);
        showNotification(`${item.name} added to cart!`);
    },
    updateCartQty: (itemId, qty) => {
        let cart = DB.getCart();
        const existing = cart.find(c => c.id === itemId);
        if (existing) {
            existing.quantity = parseInt(qty);
            if (existing.quantity <= 0) {
                cart = cart.filter(c => c.id !== itemId);
            }
            DB.saveCart(cart);
        }
    },
    clearCart: () => DB.saveCart([]),

    // Orders
    getOrders: () => JSON.parse(localStorage.getItem("heart_brew_orders")),
    saveOrders: (orders) => {
        localStorage.setItem("heart_brew_orders", JSON.stringify(orders));
        window.dispatchEvent(new Event("heart_brew_orders_updated"));
    },
    createOrder: (customerName, phone, deliveryType) => {
        const cart = DB.getCart();
        if (cart.length === 0) return null;

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const orderId = "HB-" + Math.floor(1000 + Math.random() * 9000);
        const newOrder = {
            id: orderId,
            customerName,
            phone,
            deliveryType,
            items: cart,
            total,
            status: "Preparing",
            timestamp: new Date().toISOString()
        };

        const orders = DB.getOrders();
        orders.unshift(newOrder);
        DB.saveOrders(orders);
        DB.clearCart();
        return newOrder;
    },
    updateOrderStatus: (orderId, status) => {
        const orders = DB.getOrders();
        const idx = orders.findIndex(o => o.id === orderId);
        if (idx !== -1) {
            orders[idx].status = status;
            DB.saveOrders(orders);
        }
    },

    // Reservations
    getReservations: () => JSON.parse(localStorage.getItem("heart_brew_reservations")),
    saveReservations: (resList) => {
        localStorage.setItem("heart_brew_reservations", JSON.stringify(resList));
        window.dispatchEvent(new Event("heart_brew_reservations_updated"));
    },
    createReservation: (resData) => {
        const resList = DB.getReservations();
        const newRes = {
            id: "R-" + Math.floor(1000 + Math.random() * 9000),
            ...resData,
            status: "Pending",
            timestamp: new Date().toISOString()
        };
        resList.unshift(newRes);
        DB.saveReservations(resList);
        return newRes;
    },
    updateReservationStatus: (resId, status) => {
        const resList = DB.getReservations();
        const idx = resList.findIndex(r => r.id === resId);
        if (idx !== -1) {
            resList[idx].status = status;
            DB.saveReservations(resList);
        }
    },

    // Reviews
    getReviews: () => JSON.parse(localStorage.getItem("heart_brew_reviews")),
    saveReviews: (reviews) => {
        localStorage.setItem("heart_brew_reviews", JSON.stringify(reviews));
        window.dispatchEvent(new Event("heart_brew_reviews_updated"));
    },
    createReview: (authorName, rating, text) => {
        const reviews = DB.getReviews();
        const newReview = {
            id: "rv-" + Date.now(),
            authorName,
            rating: parseInt(rating),
            text,
            timestamp: new Date().toISOString()
        };
        reviews.unshift(newReview);
        DB.saveReviews(reviews);
        return newReview;
    },
    deleteReview: (reviewId) => {
        let reviews = DB.getReviews();
        reviews = reviews.filter(r => r.id !== reviewId);
        DB.saveReviews(reviews);
    }
};

// --- COMMON UI UTILITIES ---

function showNotification(message) {
    let container = document.getElementById("notification-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "notification-container";
        container.className = "fixed bottom-24 left-8 z-[100] flex flex-col gap-2 max-w-sm pointer-events-none";
        document.body.appendChild(container);
    }

    const notif = document.createElement("div");
    notif.className = "bg-primary text-on-primary px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-300 opacity-0 translate-y-4 pointer-events-auto border border-outline-variant/20";
    notif.innerHTML = `
        <span class="material-symbols-outlined text-secondary-container">check_circle</span>
        <span class="font-label-bold text-xs">${message}</span>
    `;
    container.appendChild(notif);

    // Trigger transition
    setTimeout(() => {
        notif.classList.remove("opacity-0", "translate-y-4");
    }, 10);

    // Remove after 3s
    setTimeout(() => {
        notif.classList.add("opacity-0", "translate-y-4");
        setTimeout(() => {
            notif.remove();
        }, 300);
    }, 3000);
}

// Global active page helper
function highlightNavbar() {
    const filename = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll("header nav a, aside nav a, footer a");
    links.forEach(a => {
        const href = a.getAttribute("href");
        if (href === filename || (filename === "index.html" && href === "#")) {
            a.classList.add("text-secondary", "border-b-2", "border-secondary");
            a.classList.remove("text-on-surface-variant");
        }
    });
}

// Injects the Cart Sidebar Drawer
function injectCartDrawer() {
    // Check if on admin page, don't show customer cart
    if (window.location.pathname.includes("admin.html")) return;

    // Create Cart Floating Button if not exists
    if (!document.getElementById("cart-fab")) {
        const fab = document.createElement("button");
        fab.id = "cart-fab";
        fab.className = "fixed bottom-20 md:bottom-8 right-4 md:right-8 w-14 h-14 bg-secondary text-on-secondary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 hover:bg-secondary/90";
        fab.innerHTML = `
            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">shopping_bag</span>
            <span id="cart-badge" class="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white font-bold opacity-0 transition-opacity">0</span>
        `;
        fab.addEventListener("click", openCart);
        document.body.appendChild(fab);
    }

    // Create Cart Side Drawer Modal
    if (!document.getElementById("cart-drawer-overlay")) {
        const drawerHtml = `
            <div id="cart-drawer-overlay" class="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[90] opacity-0 pointer-events-none transition-opacity duration-300"></div>
            <div id="cart-drawer" class="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background shadow-2xl z-[95] translate-x-full transition-transform duration-300 flex flex-col">
                <!-- Header -->
                <div class="px-6 py-5 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-low">
                    <div class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-primary">shopping_bag</span>
                        <h2 class="font-headline-sm text-headline-sm text-primary text-xl">Your Order Cart</h2>
                    </div>
                    <button id="close-cart-btn" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-outline-variant/20 text-on-surface-variant transition-colors">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>
                <!-- Items list -->
                <div id="cart-items" class="flex-1 overflow-y-auto p-6 space-y-4">
                    <!-- Loaded dynamically -->
                </div>
                <!-- Footer Summary -->
                <div class="p-6 border-t border-outline-variant/20 bg-surface-container-low space-y-4">
                    <div class="flex justify-between items-center text-on-surface">
                        <span class="font-body-lg">Subtotal</span>
                        <span id="cart-total" class="font-headline-sm text-primary">₹0</span>
                    </div>
                    <!-- Checkout Form (reveals when clicking Checkout) -->
                    <div id="checkout-form-container" class="hidden space-y-3 pt-3 border-t border-outline-variant/10">
                        <div class="space-y-1">
                            <label class="text-[11px] font-label-bold text-on-surface-variant uppercase tracking-wider block">Your Name</label>
                            <input id="checkout-name" type="text" class="w-full bg-white border border-outline-variant rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-secondary outline-none" placeholder="e.g. John Doe">
                        </div>
                        <div class="space-y-1">
                            <label class="text-[11px] font-label-bold text-on-surface-variant uppercase tracking-wider block">Phone Number</label>
                            <input id="checkout-phone" type="tel" class="w-full bg-white border border-outline-variant rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-secondary outline-none" placeholder="e.g. 98250 XXXXX">
                        </div>
                        <div class="space-y-1">
                            <label class="text-[11px] font-label-bold text-on-surface-variant uppercase tracking-wider block">Delivery Mode</label>
                            <select id="checkout-mode" class="w-full bg-white border border-outline-variant rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-secondary outline-none">
                                <option value="Dine-in">Dine-in</option>
                                <option value="Takeaway" selected>Takeaway / Delivery</option>
                            </select>
                        </div>
                    </div>
                    <!-- Main buttons -->
                    <div class="grid grid-cols-2 gap-3 pt-2">
                        <button id="cart-clear-btn" class="border border-outline-variant text-on-surface-variant py-3 rounded-xl font-label-bold text-sm hover:bg-surface-variant/30 transition-colors">Clear Cart</button>
                        <button id="cart-action-btn" class="bg-primary text-on-primary py-3 rounded-xl font-label-bold text-sm hover:opacity-90 transition-opacity">Checkout</button>
                    </div>
                </div>
            </div>
        `;
        const div = document.createElement("div");
        div.innerHTML = drawerHtml;
        document.body.appendChild(div);

        // Add Listeners
        document.getElementById("close-cart-btn").addEventListener("click", closeCart);
        document.getElementById("cart-drawer-overlay").addEventListener("click", closeCart);
        document.getElementById("cart-clear-btn").addEventListener("click", () => {
            DB.clearCart();
            closeCart();
        });
        document.getElementById("cart-action-btn").addEventListener("click", handleCartAction);
    }

    updateCartUI();
}

// Injects the review modal
function injectReviewModal() {
    if (document.getElementById("review-modal-overlay")) return;

    const modalHtml = `
        <div id="review-modal-overlay" class="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[90] opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-4">
            <div id="review-modal" class="bg-background max-w-md w-full rounded-3xl shadow-2xl p-8 relative transform scale-95 opacity-0 transition-all duration-300 space-y-6 border border-outline-variant/10">
                <button id="close-review-modal" class="absolute right-6 top-6 w-8 h-8 rounded-full flex items-center justify-center hover:bg-outline-variant/20 text-on-surface-variant transition-colors">
                    <span class="material-symbols-outlined">close</span>
                </button>
                <div>
                    <h3 class="font-headline-md text-headline-sm text-primary">Write a Review</h3>
                    <p class="text-on-surface-variant text-sm mt-1">Tell us about your experience at Heart & Brew.</p>
                </div>
                <form id="review-form" class="space-y-4">
                    <div class="space-y-1">
                        <label class="text-[11px] font-label-bold text-on-surface-variant uppercase tracking-wider block">Your Name</label>
                        <input id="review-name" type="text" required class="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary outline-none transition-all" placeholder="Enter your name">
                    </div>
                    <div class="space-y-1">
                        <label class="text-[11px] font-label-bold text-on-surface-variant uppercase tracking-wider block">Rating</label>
                        <div class="flex gap-2" id="star-selector">
                            ${[1, 2, 3, 4, 5].map(n => `
                                <button type="button" data-rating="${n}" class="star-btn text-outline hover:text-secondary transition-colors">
                                    <span class="material-symbols-outlined text-[32px]">star</span>
                                </button>
                            `).join("")}
                        </div>
                        <input type="hidden" id="review-rating-value" value="5">
                    </div>
                    <div class="space-y-1">
                        <label class="text-[11px] font-label-bold text-on-surface-variant uppercase tracking-wider block">Review Comments</label>
                        <textarea id="review-text" required rows="4" class="w-full bg-white border border-outline-variant rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary outline-none transition-all" placeholder="What did you order? How was the service?"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-primary text-on-primary py-4 rounded-xl font-label-bold hover:bg-primary/95 transition-all shadow-md active:scale-95">Submit Review</button>
                </form>
            </div>
        </div>
    `;

    const div = document.createElement("div");
    div.innerHTML = modalHtml;
    document.body.appendChild(div);

    // Modal listeners
    document.getElementById("close-review-modal").addEventListener("click", closeReviewModal);
    document.getElementById("review-modal-overlay").addEventListener("click", (e) => {
        if (e.target.id === "review-modal-overlay") closeReviewModal();
    });

    // Rating star handler
    const starBtns = document.querySelectorAll(".star-btn");
    starBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const rating = parseInt(btn.getAttribute("data-rating"));
            document.getElementById("review-rating-value").value = rating;
            highlightStars(rating);
        });
    });

    // Initial highlight (5 stars)
    highlightStars(5);

    // Form submit listener
    document.getElementById("review-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("review-name").value.trim();
        const text = document.getElementById("review-text").value.trim();
        const rating = document.getElementById("review-rating-value").value;

        if (name && text) {
            DB.createReview(name, rating, text);
            closeReviewModal();
            showNotification("Thank you for your valuable feedback!");
            // Reset form
            document.getElementById("review-form").reset();
            highlightStars(5);
        }
    });
}

function highlightStars(rating) {
    const starBtns = document.querySelectorAll(".star-btn");
    starBtns.forEach((btn, index) => {
        const icon = btn.querySelector(".material-symbols-outlined");
        if (index < rating) {
            btn.classList.add("text-secondary");
            btn.classList.remove("text-outline");
            icon.style.fontVariationSettings = "'FILL' 1";
        } else {
            btn.classList.remove("text-secondary");
            btn.classList.add("text-outline");
            icon.style.fontVariationSettings = "'FILL' 0";
        }
    });
}

function openReviewModal() {
    injectReviewModal();
    const overlay = document.getElementById("review-modal-overlay");
    const modal = document.getElementById("review-modal");
    overlay.classList.remove("pointer-events-none", "opacity-0");
    overlay.classList.add("opacity-100");
    modal.classList.remove("scale-95", "opacity-0");
    modal.classList.add("scale-100", "opacity-100");
}

function closeReviewModal() {
    const overlay = document.getElementById("review-modal-overlay");
    const modal = document.getElementById("review-modal");
    if (overlay && modal) {
        overlay.classList.add("pointer-events-none", "opacity-0");
        overlay.classList.remove("opacity-100");
        modal.classList.add("scale-95", "opacity-0");
        modal.classList.remove("scale-100", "opacity-100");
    }
}

// Opens the side Cart Drawer
function openCart() {
    const overlay = document.getElementById("cart-drawer-overlay");
    const drawer = document.getElementById("cart-drawer");
    overlay.classList.remove("pointer-events-none", "opacity-0");
    overlay.classList.add("opacity-100");
    drawer.classList.remove("translate-x-full");
}

// Closes the side Cart Drawer
function closeCart() {
    const overlay = document.getElementById("cart-drawer-overlay");
    const drawer = document.getElementById("cart-drawer");
    if (overlay && drawer) {
        overlay.classList.add("pointer-events-none", "opacity-0");
        overlay.classList.remove("opacity-100");
        drawer.classList.add("translate-x-full");

        // Hide checkout form and reset button
        setTimeout(() => {
            const container = document.getElementById("checkout-form-container");
            const btn = document.getElementById("cart-action-btn");
            if (container && btn) {
                container.classList.add("hidden");
                btn.textContent = "Checkout";
            }
        }, 300);
    }
}

// Handle cart button action (Checkout -> Place Order)
function handleCartAction() {
    const container = document.getElementById("checkout-form-container");
    const btn = document.getElementById("cart-action-btn");

    if (container.classList.contains("hidden")) {
        // Show checkout form
        container.classList.remove("hidden");
        btn.textContent = "Place Order";
    } else {
        // Complete checkout
        const name = document.getElementById("checkout-name").value.trim();
        const phone = document.getElementById("checkout-phone").value.trim();
        const mode = document.getElementById("checkout-mode").value;

        if (!name || !phone) {
            alert("Please provide your name and phone number to complete the order.");
            return;
        }

        const newOrder = DB.createOrder(name, phone, mode);
        if (newOrder) {
            closeCart();
            showNotification(`Order placed successfully! ID: ${newOrder.id}`);
            // Clear inputs
            document.getElementById("checkout-name").value = "";
            document.getElementById("checkout-phone").value = "";
        }
    }
}

// Redraws the Shopping Cart inside the drawer and updates badges
function updateCartUI() {
    const cart = DB.getCart();
    const badge = document.getElementById("cart-badge");
    const totalSpan = document.getElementById("cart-total");
    const itemsContainer = document.getElementById("cart-items");

    // Update Floating Badge
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (badge) {
        badge.textContent = totalCount;
        if (totalCount > 0) {
            badge.classList.remove("opacity-0");
        } else {
            badge.classList.add("opacity-0");
        }
    }

    // Update dynamic subtotal in navbar if order-online button is there
    const orderBtn = document.querySelector("nav button, header button");
    if (orderBtn && orderBtn.textContent.includes("Order Online") && totalCount > 0) {
        orderBtn.innerHTML = `View Cart (${totalCount})`;
        orderBtn.onclick = openCart;
    } else if (orderBtn) {
        orderBtn.innerHTML = "Order Online";
        orderBtn.onclick = () => { window.location.href = "menu.html"; };
    }

    // Render Items inside drawer
    if (!itemsContainer) return;

    if (cart.length === 0) {
        itemsContainer.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full text-on-surface-variant/60 py-16 text-center space-y-4">
                <span class="material-symbols-outlined text-6xl">shopping_cart_off</span>
                <p class="font-label-bold">Your cart is empty.</p>
                <p class="text-xs max-w-[200px]">Head over to our Menu page to add some tasty treats!</p>
            </div>
        `;
        totalSpan.textContent = "₹0";
        document.getElementById("cart-action-btn").disabled = true;
        document.getElementById("cart-action-btn").classList.add("opacity-50", "pointer-events-none");
    } else {
        document.getElementById("cart-action-btn").disabled = false;
        document.getElementById("cart-action-btn").classList.remove("opacity-50", "pointer-events-none");

        let itemsHtml = "";
        cart.forEach(item => {
            itemsHtml += `
                <div class="bg-surface-container-lowest p-4 rounded-xl flex gap-4 border border-outline-variant/10 items-center justify-between">
                    <img class="w-16 h-16 rounded-lg object-cover flex-shrink-0" src="${item.image}" alt="${item.name}">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-1.5">
                            <h4 class="font-label-bold text-sm text-primary truncate">${item.name}</h4>
                            ${item.isVeg ? `<span class="material-symbols-outlined text-green-700 text-xs" style="font-variation-settings: 'FILL' 1;">fiber_manual_record</span>` : ""}
                        </div>
                        <p class="text-xs text-secondary font-label-bold mt-1">₹${item.price}</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="DB.updateCartQty('${item.id}', ${item.quantity - 1})" class="w-7 h-7 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-outline-variant/20 active:scale-95 transition-all">
                            <span class="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span class="font-label-bold text-sm w-4 text-center">${item.quantity}</span>
                        <button onclick="DB.updateCartQty('${item.id}', ${item.quantity + 1})" class="w-7 h-7 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-outline-variant/20 active:scale-95 transition-all">
                            <span class="material-symbols-outlined text-sm">add</span>
                        </button>
                    </div>
                </div>
            `;
        });
        itemsContainer.innerHTML = itemsHtml;

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalSpan.textContent = `₹${subtotal}`;
    }
}

// Add state listeners
window.addEventListener("heart_brew_cart_updated", updateCartUI);
window.addEventListener("DOMContentLoaded", () => {
    injectCartDrawer();
    highlightNavbar();
});
