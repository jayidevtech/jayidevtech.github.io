# Deployment Guide - JAYIDEVTECH Landing Page

This guide will help you deploy your landing page to various hosting platforms.

## 📦 Prerequisites

Before deploying, make sure you have:

1. Built the production version:
```bash
npm run build
```

2. Tested the site locally

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel offers free hosting with automatic SSL and global CDN.

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts. Your site will be live in seconds!

**Website**: https://vercel.com

### Option 2: Netlify

Netlify provides free hosting with continuous deployment from Git.

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

**Website**: https://netlify.com

### Option 3: GitHub Pages

Host for free directly from your GitHub repository.

1. Push your code to GitHub

2. Go to repository Settings → Pages

3. Select branch and folder (usually `main` branch and `/ (root)`)

4. Your site will be available at `https://[username].github.io/[repo-name]`

### Option 4: Traditional Hosting (cPanel/FTP)

For traditional web hosts:

1. Build the project:
```bash
npm run build
```

2. Upload these files to your hosting:
   - `index.html`
   - `output.css`
   - `images/` folder
   - `favicon` files
   - `site.webmanifest`
   - `browserconfig.xml`

3. Set your domain to point to the public_html folder

## ⚙️ Configuration

### Custom Domain

After deploying, you can configure a custom domain:

1. **DNS Settings**: Point your domain to the hosting provider
   - For Vercel/Netlify: Add CNAME record
   - For GitHub Pages: Add CNAME file to repository

2. **SSL Certificate**: Most platforms provide free SSL automatically

3. **Update URLs**: Replace placeholder URLs in:
   - Meta tags in `index.html`
   - `package.json` homepage field

### Environment-Specific Updates

Before deploying, update these in `index.html`:

1. **Canonical URL** (Line 4):
```html
<link rel="canonical" href="https://your-domain.com/" />
```

2. **Social Media Meta Tags**:
```html
<meta property="og:url" content="https://your-domain.com/" />
<meta property="og:image" content="https://your-domain.com/images/og-image.png" />
```

3. **Contact Email**:
```html
<a href="mailto:your-email@jayidevtech.com">
```

## 🔍 SEO Checklist

- [x] Meta tags configured
- [x] Sitemap created (create sitemap.xml)
- [ ] robots.txt configured
- [ ] Google Analytics added
- [ ] Google Search Console verified
- [ ] Social media meta tags
- [ ] Favicon set

## 📊 Post-Deployment

After deployment:

1. **Test the site** on multiple devices
2. **Check loading speed** using Google PageSpeed Insights
3. **Verify SEO** with Google Search Console
4. **Monitor analytics** to track visitors

## 🆘 Troubleshooting

### Images not loading
- Check image paths are relative (./images/...)
- Verify images folder uploaded correctly

### CSS not applying
- Ensure output.css is uploaded
- Check file permissions (644 for files, 755 for folders)

### 404 errors
- Verify index.html is in root directory
- Check .htaccess for redirects (if using Apache)

## 📱 Contact

For deployment support:
- Email: info@jayidevtech.com
- Website: https://jayidevtech.com

---

Happy Deploying! 🎉
