# Project Status (Current)

## Arsitektur Aktif

- Framework: Vue 3 + Vite + TypeScript
- Styling: Tailwind CSS v4 + Flowbite
- Quality tools: ESLint + Prettier
- Build output: `dist/`

## Workflow Resmi

```bash
npm run dev
npm run check
npm run build
npm run preview
```

## Lokasi File Utama

- Entry HTML: [index.html](index.html)
- App shell: [src/App.vue](src/App.vue)
- Konten landing: [src/components/LandingContent.vue](src/components/LandingContent.vue)
- Styling: [src/css/style.css](src/css/style.css)

## Aktivasi Produksi

1. Formspree ID: update `YOUR_FORM_ID` di `src/components/LandingContent.vue`
2. GA4 ID: update `G-XXXXXXXXXX` di `index.html`
3. Build: `npm run build`
4. Deploy: upload isi folder `dist/`

## Catatan

Dokumen lama yang menyebut `src/index.html` dan folder `public/` sudah tidak berlaku untuk workflow saat ini.
