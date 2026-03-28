# Formspree Setup (Vue + Vite)

Panduan ini untuk mengaktifkan contact form pada arsitektur terbaru (`src` → `dist`).

## 1) Update Form Action

Form berada di [src/components/LandingContent.vue](src/components/LandingContent.vue).

Cari placeholder:

```html
<form id="contact-form" class="space-y-6" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
```

Ganti `YOUR_FORM_ID` dengan ID Formspree Anda.

Contoh:

```html
<form id="contact-form" class="space-y-6" method="POST" action="https://formspree.io/f/xyzqwerty">
```

## 2) Build & Preview

```bash
npm run build
npm run preview
```

## 3) Deploy

Deploy **isi folder `dist/`** ke hosting Anda.

## 4) Verifikasi

- Submit form dari halaman contact
- Pastikan muncul success message
- Pastikan email masuk ke inbox yang terhubung di Formspree

## Catatan

- Jika masih `YOUR_FORM_ID`, mode demo tetap aktif (tidak mengirim ke Formspree).
- Untuk produksi, pastikan domain final sudah sesuai konfigurasi Formspree.
