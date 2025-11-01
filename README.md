# TechVerse - Angular 19 Portfolio

A modern tech blog and tutorial portfolio website built with Angular 19, featuring a beautiful dark theme, responsive design, and comprehensive content about coding tutorials and tech blogs.

## 🚀 Features

- **Angular 19** with standalone components and latest features
- **Responsive Design** - Works beautifully on all devices
- **Modern UI/UX** - Dark theme with gradient accents and smooth animations
- **7 Main Pages**:
  - Home - Hero section with featured tech blogs and tutorials
  - About - Mission, values, and what we offer
  - Blogs - Browse and search tech articles by category
  - YouTube - Video tutorials gallery
  - Contact - Contact form and social links
  - Privacy Policy - Privacy policy information
  - Terms & Conditions - Terms of service

## 📋 Prerequisites

Make sure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher) or yarn

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/rrohankumawat/rrohankumawat.github.io.git
cd rrohankumawat.github.io
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

4. **Open your browser**
Navigate to `http://localhost:4200`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist/techverse` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── about/              # About page component
│   ├── blogs/              # Blogs listing component
│   ├── contact/            # Contact form component
│   ├── footer/             # Footer component
│   ├── home/               # Home page component
│   ├── navbar/             # Navigation bar component
│   ├── privacy/            # Privacy policy page
│   ├── terms/              # Terms & conditions page
│   ├── youtube/            # YouTube videos component
│   ├── app.component.ts    # Root component
│   ├── app.component.html
│   ├── app.component.css
│   └── app.routes.ts       # Routing configuration
├── index.html              # Main HTML file
├── styles.css              # Global styles
└── main.ts                 # Application entry point

angular.json                 # Angular CLI configuration
tsconfig.json               # TypeScript configuration
package.json                # Project dependencies
```

## 🎨 Design System

The application uses CSS custom properties for theming:

- **Primary Color**: #6366f1 (Indigo)
- **Secondary Color**: #8b5cf6 (Purple)
- **Accent Color**: #ec4899 (Pink)
- **Dark Background**: #0f172a
- **Light Background**: #f8fafc
- **Card Background**: #1e293b

## 🔧 Technologies Used

- **Angular 19** - Frontend framework
- **TypeScript** - Programming language
- **HTML5/CSS3** - Markup and styling
- **RxJS** - Reactive programming
- **Angular Router** - Client-side routing

## 📝 Customization

### Adding New Pages

1. Generate a new component:
```bash
ng generate component pages/new-page
```

2. Add route in `app.routes.ts`:
```typescript
{ path: 'new-page', component: () => import('./pages/new-page/new-page.component').then(m => m.NewPageComponent) }
```

3. Add navigation link in `navbar.component.html`

### Styling

Global styles are in `src/styles.css`. Component-specific styles are in each component's `.css` file.

## 🌐 Deployment

### GitHub Pages

For GitHub Pages deployment, you'll need to configure the `baseHref` in `angular.json`:

```json
"baseHref": "/rrohankumawat.github.io/"
```

Build and deploy:
```bash
npm run build -- --base-href=/rrohankumawat.github.io/
```

Copy the contents of `dist/techverse` to your GitHub Pages repository.

### Other Platforms

This Angular app can be deployed to:
- **Vercel** - Auto-deploy from GitHub
- **Netlify** - Drag & drop or Git integration
- **Firebase Hosting** - Firebase CLI
- **AWS Amplify** - CI/CD integration
- **Azure Static Web Apps** - GitHub Actions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: support@techverse.com
- **Website**: [TechVerse](https://rrohankumawat.github.io)

---

Made with 💜 for developers worldwide

