# 📌 Portfolio — Aadarsh Sasi Kumar

A personal developer portfolio built with **React, TypeScript, and Vite**, showcasing my experience, projects, and technical skill set with a focus on **clean architecture, SOLID principles, and maintainable UI components**.

---

## ✨ Features

- ⚡ **Vite-powered** development & build
- 🧠 **SOLID & clean component architecture**
- ♻️ Reusable UI primitives (CardGrid, Modal)
- 🎯 Fully responsive (desktop → mobile)
- ♿ Accessible interactions (keyboard navigation, focus states, ESC-close modals)
- 🎨 SCSS with BEM-style naming
- 🧩 Interactive UI effects (scrambled text, hover effects, tooltips)
- 📦 Strong separation of concerns (data, UI, sections)

---

## 🛠 Tech Stack

### Frontend

- React 18
- TypeScript
- Vite
- SCSS (BEM methodology)

### UI & UX

- Tippy.js (tooltips)
- Custom animations & cursor effects
- Responsive layouts

### Code Quality

- SOLID principles
- DRY & separation of concerns
- Reusable components
- Strong typing

---

## 📂 Project Structure

```
src/
├─ assets/               # Images & SVGs
├─ components/
│  ├─ effects/           # Visual & cursor effects
│  ├─ ui/                # Reusable UI primitives (Modal, CardGrid)
│  ├─ experienceSection/
│  ├─ projectSection/
│  ├─ skillsSection/
│  ├─ introSection/
│  ├─ header/
│  └─ footerSection/
├─ data/                 # Static data (experience, projects)
├─ types/                # Shared TypeScript types
├─ index.scss            # Global styles
├─ main.tsx              # App entry
└─ mainpage.tsx          # Main page layout
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the dev server

```bash
npm run dev
```

Open: http://localhost:5173

---

## 🏗 Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🧪 Linting

```bash
npm run lint
```

---

## 🧠 Architectural Notes

- Sections focus only on composition, not data ownership
- Data is stored separately for easy extension
- UI components are reusable and predictable
- State is kept local and minimal
- Accessibility is treated as a first-class concern

---

## 📬 Contact

- **Email:** aadarshsasikumar@gmail.com
- **GitHub:** https://github.com/aadarshjr123
- **LinkedIn:** https://linkedin.com/in/aadarshss

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

Built with curiosity, caffeine, and a healthy respect for clean code ☕💻
