# JAYIDEVTECH - Professional Landing Page

![JAYIDEVTECH Landing Page](./images/logo_jayidevtech.svg)

A professional landing page for JAYIDEVTECH showcasing our software development services. Built with modern web technologies using **Tailwind CSS CDN** and **Flowbite CDN** for a responsive, fast, and beautiful user experience.

## ✨ Pure Static / CDN Version

**No build process required!** This version uses CDN links - just open in browser or upload to any hosting.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean and professional interface
- **Fast Performance** - Optimized for speed
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Dark Mode Support** - Automatic based on system preferences
- **Smooth Animations** - Engaging user interactions
- **Zero Build** - No npm, no Node.js, no compilation needed!
- **Deploy Anywhere** - Works on any hosting (cPanel, Netlify, Vercel, GitHub Pages, etc)

## 🛠️ Built With

- [Tailwind CSS](https://tailwindcss.com/) - Via CDN (cdn.tailwindcss.com)
- [Flowbite](https://flowbite.com/) - Via CDN (cdn.jsdelivr.net)
- HTML5 & Pure JavaScript
- No build tools required!

## 🎯 Quick Start

### Local Testing

**Option 1: Open directly in browser**
```bash
# Simply open the file
open index.html
```

**Option 2: Use a simple HTTP server**
```bash
# Using Python (if installed)
python3 -m http.server 8000

# Using PHP (if installed)
php -S localhost:8000

# Then open: http://localhost:8000
```

### Deploy to Production

**No build required!** Just upload these files:

#### Files to Upload:
```
✅ index.html
✅ images/ (folder lengkap)
✅ favicon-32x32.png
✅ favicon-16x16.png
✅ apple-touch-icon.png
✅ site.webmanifest
✅ robots.txt (optional, for SEO)
✅ sitemap.xml (optional, for SEO)
```

#### Deployment Options:

**1. Vercel (Gratis)**
```bash
# Install Vercel CLI (one time only)
npm install -g vercel

# Deploy
vercel --prod
```

**2. Netlify (Gratis)**
- Drag & drop ke [Netlify Drop](https://app.netlify.com/drop)
- Atau gunakan Netlify CLI

**3. GitHub Pages (Gratis)**
```bash
# Push to GitHub
git add .
git commit -m "Deploy landing page"
git push

# Enable GitHub Pages di repository settings
```

**4. cPanel / Traditional Hosting**
- Upload semua files via FTP/File Manager
- Extract di folder `public_html/`

## 📁 Project Structure

```
jayidevtech-landing-page/
├── index.html              # Main HTML file (CDN version)
├── images/                 # Image assets
│   ├── hero.png
│   ├── feature-1.png
│   ├── feature-2.png
│   └── logo_jayidevtech.svg
├── favicon-32x32.png       # Favicon
├── favicon-16x16.png
├── apple-touch-icon.png
├── site.webmanifest
├── robots.txt              # SEO
├── sitemap.xml             # SEO
├── README.md               # This file
├── CDN-README.md           # Quick start untuk CDN
├── STATIC-vs-BUILD.md      # Comparison CDN vs Build
├── DEPLOYMENT.md           # Deployment guide
└── CHECKLIST.md            # Pre-deployment checklist
```

## 🎨 Customization

### Mengubah Konten
Simply edit `index.html` dengan text editor favorit Anda:

1. **Hero Section** - Edit tagline dan deskripsi (line ~85-95)
2. **Services** - Update layanan yang ditawarkan (line ~130+)
3. **Pricing** - Sesuaikan paket harga (line ~400+)
4. **Contact** - Ganti email dan info kontak (line ~570+)

### Mengubah Warna
Edit bagian `<script>` di dalam `<head>`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    "500": "#3b82f6",  // Ubah kode warna ini
                    // ...
                }
            }
        }
    }
}
```

### Menambah Section Baru
Cukup tambahkan HTML baru di `<body>`. Semua Tailwind utility classes langsung bisa digunakan!

## 📚 Documentation

- **[CDN-README.md](./CDN-README.md)** - Quick start guide untuk CDN version
- **[STATIC-vs-BUILD.md](./STATIC-vs-BUILD.md)** - Perbandingan CDN vs Build approach  
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Detailed deployment instructions
- **[CHECKLIST.md](./CHECKLIST.md)** - Pre-publication checklist

## ❓ FAQ

### Apakah perlu install Node.js atau npm?
**Tidak!** Versi ini pure static dengan CDN. Tidak butuh npm sama sekali.

### Apakah CDN aman untuk production?
**Ya!** Tailwind CDN dan Flowbite CDN sangat reliable dan digunakan jutaan website.

### Bagaimana cara update konten?
Edit file `index.html` → Upload ke hosting → Done!

### Apakah bisa custom styling?
**Bisa!** Edit inline Tailwind config di `<script>` tag atau tambahkan custom CSS.

### Loading lambat karena CDN?
CDN biasanya lebih cepat karena cached globally. Tapi jika ingin self-host, baca [STATIC-vs-BUILD.md](./STATIC-vs-BUILD.md).

## 🆘 Troubleshooting

**Styling tidak muncul?**
- Pastikan koneksi internet aktif (CDN butuh internet)
- Check browser console untuk errors

**Images tidak tampil?**
- Cek path relatif (`./images/nama-file.png`)
- Pastikan folder images ter-upload

**Interactive elements (accordion, modal) tidak bekerja?**
- Pastikan Flowbite JS script ter-load
- Check browser console untuk JavaScript errors

## 📄 License

This project is open source under the MIT license.