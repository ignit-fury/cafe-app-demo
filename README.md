<div align="center">

# ☕ Heart & Brew — Cafe & Restro

**A beautifully crafted, fully interactive cafe web app built with vanilla HTML, TailwindCSS, and JavaScript.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

> *Crafting every cup with Heart.* — A demo cafe website featuring a live menu, cart system, table reservations, customer reviews, and a full-featured admin dashboard. No frameworks, no build step — just open and run.

</div>

---

## ✨ Features

### 🧑‍💼 Customer-Facing
- **Home Page** — Hero section with animated highlights, daily specials bento card, and featured offerings
- **Menu Page** — Browsable menu with category filters (Sandwiches, Wraps, Burgers, Pizza, Pasta, Fries, Mojitos, Frappe), veg/non-veg badges, and Add to Cart
- **Cart Drawer** — Slide-in cart with quantity controls, subtotal, and a full checkout flow (name, phone, delivery mode)
- **Reservations Page** — Table booking form with date/time/occasion picker and instant confirmation
- **About Page** — Cafe story, team section, and live customer reviews with a write-a-review modal
- **Star Rating System** — Interactive 5-star rating UI for submitting reviews

### 🛠️ Admin Dashboard
- **Orders Tab** — View all placed orders, update statuses (Preparing → Ready → Delivered)
- **Reservations Tab** — Confirm or cancel incoming table bookings
- **Menu Manager** — Add new menu items with image URL, price, category, and veg toggle; delete existing items
- **Reviews Tab** — View and moderate customer reviews

### 🎨 Design & UX
- Custom Material Design 3-inspired color system (warm cafe palette)
- Smooth micro-animations (hover lifts, slide-in drawers, fade modals)
- Grain texture overlay for a tactile, premium feel
- Glassmorphism nav bar with `backdrop-blur`
- Fully responsive — mobile, tablet, desktop
- Google Fonts: **Playfair Display** (headings) + **Montserrat** (body)
- Material Symbols icons throughout

---

## 📸 Pages at a Glance

| Page | Description |
|------|-------------|
| `index.html` | Home — Hero, Daily Special, Features |
| `menu.html` | Full menu with cart integration |
| `about.html` | Cafe story, team & reviews |
| `reservations.html` | Table booking form |
| `admin.html` | Admin dashboard (demo access via navbar) |

---

## 🗂️ Project Structure

```
cafe-app/
├── index.html          # Home page
├── about.html          # About / Reviews page
├── menu.html           # Menu & ordering page
├── reservations.html   # Table reservation page
├── admin.html          # Admin dashboard
├── js/
│   └── app.js          # All state management, DB layer & UI logic
├── heart_brew_data.txt # Raw cafe data reference
└── README.md
```

---

## 🚀 Getting Started

No installation required. This is a zero-dependency, browser-native app.

**Option 1 — Just open it:**
```bash
# Clone the repo
git clone https://github.com/your-username/cafe-app.git

# Open in your browser
open index.html
```

**Option 2 — Serve locally (recommended to avoid CORS on assets):**
```bash
# Using Python
python3 -m http.server 3000

# Using Node.js (npx)
npx serve .

# Then visit
http://localhost:3000
```

---

## 🧠 How It Works

All data is managed client-side using **`localStorage`** via a custom `DB` abstraction in `js/app.js`. On first load, it seeds default menu items, orders, reservations, and reviews. All CRUD operations (create order, add menu item, update status, etc.) write back to localStorage and dispatch custom DOM events to keep the UI reactive.

```
localStorage
├── heart_brew_menu          # Menu items array
├── heart_brew_orders        # Orders array
├── heart_brew_reservations  # Reservations array
├── heart_brew_reviews       # Customer reviews array
└── heart_brew_cart          # Active shopping cart
```

> **Note:** Data resets to defaults if localStorage is cleared. This is intentional for a demo app.

---

## 🛣️ Roadmap

- [ ] Convert to **MERN stack** (MongoDB + Express + React + Node.js) for persistent, multi-device data
- [ ] Add real authentication for the Admin dashboard
- [ ] Online ordering integration (Razorpay / Stripe)
- [ ] Mobile PWA support
- [ ] Dark mode toggle

---

## 🏷️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | TailwindCSS (CDN) + custom design tokens |
| Logic | Vanilla JavaScript (ES6+) |
| Storage | Browser `localStorage` |
| Icons | Google Material Symbols |
| Fonts | Google Fonts (Playfair Display, Montserrat) |

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

<div align="center">

Made with ☕ and ❤️ · **Heart & Brew Cafe & Restro**

*"Experience the perfect blend of artisanal coffee and a cozy rustic ambiance."*

</div>
