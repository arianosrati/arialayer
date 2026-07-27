# AriaLayer

وب‌سایت شخصی و مسیر یادگیری آریا نصرتی با رابط فارسی/انگلیسی، طراحی RTL/LTR و تمرکز بر توسعه بک‌اند.

## قابلیت‌ها

- ۹ بخش با Hash Routing و لینک مستقیم
- نسخه دو‌زبانه با ذخیره انتخاب زبان در Local Storage
- رابط واکنش‌گرا برای دسکتاپ، تبلت و موبایل
- Command Palette با `Ctrl/Cmd + K`
- میانبرهای عددی `1` تا `9`
- رزومه PDF قابل دانلود
- فرم تماس مبتنی بر `mailto:` بدون ذخیره اطلاعات در سرویس ثالث
- صفحه اختصاصی 404
- Metadata کامل برای SEO و Social Preview
- Web App Manifest و آیکون‌های استاندارد و Maskable
- هدرهای امنیتی مناسب Cloudflare Pages

## دسترس‌پذیری

- Skip Link برای پرش به محتوای اصلی
- ساختار صحیح Landmarkها و عنوان‌های مرتبط با هر بخش
- منوی موبایل و Command Palette با Focus Trap، بازگرداندن Focus، `inert` و کنترل با `Esc`
- Tabs مطابق الگوی WAI-ARIA با `role="tab"`، `aria-selected`، `tabpanel` و پشتیبانی از کلیدهای جهت‌دار، `Home` و `End`
- `aria-current="page"` برای مسیر فعال
- Focus Indicator یکپارچه و پشتیبانی از Forced Colors
- رعایت `prefers-reduced-motion`
- نسخه Progressive Enhancement: در صورت غیرفعال‌بودن یا خرابی JavaScript، تمام محتوا و لینک‌های اصلی همچنان قابل استفاده‌اند

## ساختار پروژه

```text
.
├── index.html
├── styles.css
├── boot.js
├── script.js
├── 404.html
├── 404.css
├── _headers
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── favicon.ico
└── assets/
    ├── logo.svg
    ├── favicon.svg
    ├── icon-192.png
    ├── icon-512.png
    ├── icon-maskable-512.png
    ├── apple-touch-icon.png
    ├── og-cover.jpg
    ├── aria-avatar.webp
    ├── aria-portrait.webp
    └── aria-nosrati-resume.pdf
```

## اجرای محلی

```bash
python -m http.server 8000
```

سپس آدرس زیر را باز کنید:

```text
http://localhost:8000
```

اجرای سایت با بازکردن مستقیم `index.html` نیز ممکن است، اما برای شبیه‌سازی رفتار هاست و مسیر 404 استفاده از HTTP server توصیه می‌شود.

## انتشار

روش پیشنهادی Cloudflare Pages است. جزئیات در فایل `DEPLOY-CLOUDFLARE.md` قرار دارد. برای Direct Upload، خود فایل‌های این پوشه را ZIP کنید؛ `index.html` باید در ریشه ZIP باشد.

## نکات نگهداری

- برای افزودن پروژه، محتوای بخش `<section data-page="projects">` را با Case Study واقعی جایگزین کنید.
- در صورت تغییر JSON-LD داخل `index.html`، SHA-256 موجود در CSP فایل `_headers` باید دوباره محاسبه شود.
- آدرس دامنه در canonical، Open Graph، JSON-LD، robots و sitemap باید همواره یکسان بماند.
- تصاویر و اطلاعات تماس پس از انتشار عمومی قابل مشاهده و دریافت خواهند بود.

## کیفیت‌سنجی

نسخه تحویلی با بررسی‌های نحوی HTML/CSS/JavaScript، اعتبار ارتباط‌های ARIA، وجود فایل‌های referenced، صحت JSON-LD و Manifest و ۳۹ تست تعاملی در Chromium بررسی شده است. جزئیات در `QA-REPORT.md` آمده است.
