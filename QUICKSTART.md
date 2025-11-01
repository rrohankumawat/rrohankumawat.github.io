# 🚀 Quick Start Guide

## Get Running in 3 Steps

### Step 1: Install Node.js
Download from: https://nodejs.org/ (v18+ recommended)

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development
```bash
npm start
```

Open browser to: **http://localhost:4200**

---

## 📋 Available Commands

```bash
npm start          # Start dev server on port 4200
npm run build      # Build for production
npm run watch      # Build with auto-reload
ng serve           # Alternative start command
ng build           # Alternative build command
```

---

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `src/app/home/` | Home page |
| `src/app/blogs/` | Blog listing |
| `src/app/navbar/` | Navigation bar |
| `src/app/footer/` | Footer |
| `src/styles.css` | Global styles & theme |
| `src/app/app.routes.ts` | Routing config |
| `angular.json` | Build config |
| `package.json` | Dependencies |

---

## 🎨 Change Colors

Edit `src/styles.css`:
```css
:root {
    --primary: #6366f1;      /* Main color */
    --secondary: #8b5cf6;    /* Secondary */
    --accent: #ec4899;       /* Accent */
    --dark: #0f172a;         /* Background */
}
```

---

## 📱 Add New Page

1. Create folder: `src/app/newpage/`
2. Create 3 files:
   - `newpage.component.ts`
   - `newpage.component.html`
   - `newpage.component.css`
3. Add route in `src/app/app.routes.ts`
4. Add link in `src/app/navbar/navbar.component.html`

---

## 🌐 Deploy to GitHub Pages

```bash
ng build --base-href=/rrohankumawat.github.io/
```

Copy `dist/techverse/*` to your repo root.

---

## ❗ Troubleshooting

**"Cannot find module"**  
→ Run `npm install`

**Port 4200 busy**  
→ Use `ng serve --port 4201`

**Build errors**  
→ Check Node.js version (v18+)

---

## 📚 Need More?

- **Details**: See `README.md`
- **Setup Guide**: See `SETUP.md`
- **Conversion Info**: See `CONVERSION_SUMMARY.md`

---

**Happy coding!** 💜

