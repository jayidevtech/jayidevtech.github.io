# JAYIDEVTECH - Professional Landing Page

![JAYIDEVTECH Landing Page](./static/images/logo_jayidevtech.svg)

A professional landing page for JAYIDEVTECH showcasing our software development services. Built with **Vue 3 + Vite**, **Tailwind CSS**, and **Flowbite** for a responsive, fast, and maintainable experience.

## ✨ Vue Build Setup

This version uses a Vue 3 + Vite build pipeline with Tailwind CSS. Source code is developed in `src/` and production output is generated into `dist/`.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean and professional interface
- **Fast Performance** - Optimized production build via Vite
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Dark Mode Support** - Full dark mode implementation
- **Smooth Animations** - Engaging user interactions
- **Tailwind CSS** - Utility-first CSS framework
- **Flowbite Components** - Pre-built interactive components
- **Developer Friendly** - Easy to customize and extend

## 📈 Current Status

- **Workflow:** Build-only (`src/` → `dist/`)
- **Phase 1:** ✅ Complete (stabilization and build pipeline)
- **Phase 2:** 🟨 Mostly complete (interactive fixes, SEO, analytics done)
- **Remaining in Phase 2:** Final image compression/performance pass
- **Next focus:** Phase 3 cross-browser and quality testing

Detailed progress is tracked in **[docs/PHASE_2_STATUS.md](./docs/PHASE_2_STATUS.md)**.

## 🛠️ Built With

- [Tailwind CSS v4.2.1](https://tailwindcss.com/) - Utility-first CSS framework
- [Flowbite v4.0.1](https://flowbite.com/) - Component library built on Tailwind
- [Vite](https://vite.dev/) - Frontend build tool
- [Vue 3](https://vuejs.org/) - Progressive JavaScript framework
- [TypeScript](https://www.typescriptlang.org/) - Static typing for Vue components
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Linting and formatting
- [PostCSS](https://postcss.org/) - CSS processing
- Node.js & npm (build tools)

## 🎯 Quick Start

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation

```bash
# Clone or download the project
cd jayidevtech-landing-page

# Install dependencies
npm install

# Build production bundle
npm run build

# Start development server
npm run dev

# Type check + lint
npm run check
```

### Local Testing

```bash
# Run local production preview
npm run preview
```

### Build Process

The project uses Vite to bundle Vue app + Tailwind styles:

```bash
# Build once
npm run build

# Start local development
npm run dev
```

This generates optimized assets in `dist/`.

### Quality Commands

```bash
# TypeScript check only
npm run type-check

# Lint
npm run lint

# Auto-fix lint issues
npm run lint:fix

# Format all files
npm run format
```

### Deploy to Production

**First, build the project:**

```bash
npm run build
```

This creates the `dist/` folder with:
- `dist/index.html` - Production entry
- `dist/assets/` - Bundled JS/CSS and hashed assets
- `dist/images/` - Static image assets

**Upload the `dist/` folder contents to your hosting:**

#### Deployment Options:

**1. Vercel (Recommended - Free tier)**
```bash
npm install -g vercel
vercel deploy
```

**2. Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**3. GitHub Pages**
```bash
git add .
git commit -m "Deploy landing page"
git push
# In GitHub: Settings -> Pages -> Source = GitHub Actions
```

Important: for this Vue + Vite app, do not use **Deploy from a branch**. If branch mode is used, production may serve `index.html` source (`/src/main.ts`) and show blank screen.

**4. Traditional Hosting (cPanel/FTP)**
- Build locally: `npm run build`
- Upload `dist/` folder contents via FTP/File Manager
- Ensure `index.html` is in root directory

## 📁 Project Structure

```
jayidevtech-landing-page/
├── src/
│   ├── App.vue                 # Main Vue app component
│   ├── main.ts                 # Vue app entry point
│   ├── css/
│   │   └── style.css           # Tailwind directives
│   └── components/
│       └── LandingContent.vue  # Landing page markup component
├── index.html                  # Vite HTML entry
├── dist/                       # Production build output (generated)
├── static/                     # Static assets copied as-is by Vite
│   ├── images/                 # Public images (including icons)
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   └── browserconfig.xml
├── package.json                # npm configuration
├── tsconfig.json               # TypeScript configuration
├── .eslintrc.cjs               # ESLint configuration
├── .prettierrc.json            # Prettier configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── README.md                   # Main documentation
└── docs/                       # Project documentation
    ├── DEPLOYMENT.md           # Deployment instructions
    ├── CHECKLIST.md            # Pre-launch checklist
    ├── FORMSPREE_SETUP.md      # Contact form integration guide
    ├── ANALYTICS_SETUP.md      # Google Analytics setup guide
    ├── PHASE_2_STATUS.md       # Phase 2 overall status
  ├── archive/                # Historical docs
  │   ├── ACTIONABLE_CHECKLIST.md
  │   ├── PROJECT_ANALYSIS.md
  │   ├── PHASE_2_1_COMPLETE.md
  │   └── DEVELOPMENT_PLAN_ID.md
    └── README.md               # Documentation index
```

## 🎨 Customization

### Editing Content

Edit `src/components/LandingContent.vue`:

1. **Hero Section** - Update tagline and description
2. **Services** - Modify service offerings
3. **Pricing** - Update pricing plans
4. **Contact** - Add your contact information
5. **Footer** - Update company information

Then rebuild:
```bash
npm run build
```

### Styling & Colors

Tailwind CSS utility classes are used throughout. To customize:

1. **Edit `tailwind.config.js`** for global configuration
2. **Add custom CSS** to `src/css/style.css`
3. **Use Tailwind directives** like `@apply` for custom classes
4. **Run check/build** with `npm run check`

### Adding New Sections

Add new section markup in `src/components/LandingContent.vue`.

Example:
```html
<section id="new-section" class="py-12 bg-gray-50">
  <div class="max-w-screen-xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">New Section</h2>
    <!-- Your content here -->
  </div>
</section>
```

Then validate/build:
```bash
npm run check
```

## 📚 Documentation

Comprehensive documentation is available in the `docs/` folder:

- **[docs/FORMSPREE_SETUP.md](./docs/FORMSPREE_SETUP.md)** - Contact form integration guide with Formspree
- **[docs/ANALYTICS_SETUP.md](./docs/ANALYTICS_SETUP.md)** - Google Analytics (GA4) integration and event tracking guide
- **[docs/PHASE_2_STATUS.md](./docs/PHASE_2_STATUS.md)** - Current project phase status and progress
- **[docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)** - Detailed deployment instructions for various hosting platforms
- **[docs/CHECKLIST.md](./docs/CHECKLIST.md)** - Pre-launch verification checklist
- **[docs/archive/ACTIONABLE_CHECKLIST.md](./docs/archive/ACTIONABLE_CHECKLIST.md)** - Historical development checklist
- **[docs/archive/PROJECT_ANALYSIS.md](./docs/archive/PROJECT_ANALYSIS.md)** - Historical technical analysis
- **[docs/archive/PHASE_2_1_COMPLETE.md](./docs/archive/PHASE_2_1_COMPLETE.md)** - Historical Phase 2.1 completion summary
- **[docs/archive/DEVELOPMENT_PLAN_ID.md](./docs/archive/DEVELOPMENT_PLAN_ID.md)** - Historical Indonesian development plan

## ❓ FAQ

### Do I need to install Node.js?
**Yes**, for development. Download from [nodejs.org](https://nodejs.org/). Not needed on production server.

### How do I make changes?
1. Edit files in `src/` (utama: `src/components/LandingContent.vue`)
2. Run `npm run check` untuk type-check + lint + build
3. Deploy folder `dist/`

### What's the difference between src/ and dist/?
- **src/** - Source code Vue + TypeScript
- **dist/** - Output build production (ready to deploy)

### Can I use this without building?
No. This project is **build-only** and uses workflow `src/` → `dist/`.

### How do I preview changes locally?
```bash
npm run dev      # dev server
npm run preview  # preview hasil build
```

### Is the CSS optimized?
Yes! Tailwind CSS build process removes unused styles and optimizes output.

### Can I add custom CSS?
Yes, add it to `src/css/style.css` and rebuild with `npm run build`

### How do I activate the contact form?
See [docs/FORMSPREE_SETUP.md](./docs/FORMSPREE_SETUP.md) for complete integration instructions with Formspree (5 minutes setup).

## 🆘 Troubleshooting

### Build fails with "npm: command not found"
Install Node.js from [nodejs.org](https://nodejs.org/)

### Styling not applied
```bash
# Rebuild
npm run build

# Verify dist exists
ls -la dist
```

### Changes not reflecting
1. Edit file sumber (`src/components/LandingContent.vue` / `src/css/style.css`)
2. Run `npm run check`
3. Refresh browser (hard refresh: Cmd+Shift+R)

### Images not showing
- Ensure images are in `static/images/` folder
- Check image paths use `/images/filename.ext`
- Verify `npm run build` completed successfully

### Local server not starting
```bash
# Vite preview with custom port
npm run preview -- --port 8001
```

### Port 8000 already in use
```bash
# Find process using port 8000
lsof -i :8000

# Kill the process
kill -9 <PID>
```

## 📄 License

This project is open source under the MIT license.
