# Analytics Setup (GA4)

Panduan ini menjelaskan cara mengaktifkan Google Analytics 4 (GA4) pada landing page.

## 1) Ganti Measurement ID

Buka `index.html` lalu cari konfigurasi:

```html
window.JDT_ANALYTICS_CONFIG = {
    measurementId: 'G-XXXXXXXXXX'
};
```

Ganti `G-XXXXXXXXXX` dengan Measurement ID GA4 milik Anda (contoh: `G-ABCD1234EF`).

## 2) Build dan Publish

Jalankan:

```bash
npm run build
```

Jika deploy dari folder `dist/`, pastikan hasil build terbaru yang dipublikasikan.

## 3) Event yang Sudah Ditrack

Event akan otomatis terkirim setelah ID GA4 valid:

- `cta_click`
  - Untuk klik CTA utama seperti:
    - `nav_get_started`
    - `hero_get_started`
    - `hero_view_work`
    - `pricing_get_started`
    - `contact_submit_click`
- `form_start`
  - Saat user mulai mengisi form kontak (focus pertama pada field form)
- `generate_lead`
  - Saat form disubmit (mode demo/custom/formspree)

## 4) Verifikasi

Setelah deploy:

1. Buka website
2. Buka DevTools > Network, filter: `collect` atau `gtag`
3. Cek Google Analytics > Realtime
4. Klik CTA dan submit form untuk memastikan event masuk

## 5) Catatan Penting

- Jika ID masih `G-XXXXXXXXXX`, tracking **tidak aktif** (aman untuk development).
- Untuk produksi, gunakan domain final agar laporan GA4 konsisten.
