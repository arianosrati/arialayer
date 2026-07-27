# راهنمای انتشار AriaLayer روی Cloudflare Pages

## روش پیشنهادی: Git Integration

این پروژه build step ندارد و فایل `index.html` در ریشه است.

در Cloudflare Dashboard:

1. Workers & Pages → Create application → Pages → Import an existing Git repository
2. Framework preset: None
3. Production branch: `main`
4. Build command: `exit 0`
5. Build output directory: `.`
6. Root directory: خالی
7. Environment variables: نیاز ندارد

فایل `_headers` باید در همان پوشه‌ای باشد که `index.html` قرار دارد. این فایل هدرهای امنیتی، CSP، سیاست کش و noindex برای دامنه‌های pages.dev را اعمال می‌کند.

## روش Drag and Drop

محتویات این پوشه را به‌صورت ZIP آپلود کنید؛ `index.html` باید در ریشه ZIP باشد. توجه کنید پروژه Direct Upload بعداً مستقیماً به Git Integration تبدیل نمی‌شود و برای این تغییر باید پروژه Pages جدید بسازید.

## دامنه اصلی

در Pages project → Custom domains، دامنه `arialayer.ir` را اضافه کنید.

پس از فعال‌شدن گواهی SSL:

- SSL/TLS → Edge Certificates → Always Use HTTPS: On
- Automatic HTTPS Rewrites: On

## Redirectهای دامنه

Redirect دامنه در فایل `_redirects` پشتیبانی نمی‌شود؛ از Bulk Redirects استفاده کنید.

### pages.dev → arialayer.ir

- Source: نام واقعی پروژه، مانند `arialayer.pages.dev`
- Target: `https://arialayer.ir`
- Status: 301
- Preserve query string: On
- Subpath matching: On
- Preserve path suffix: On
- Include subdomains: On

### www.arialayer.ir → arialayer.ir

- Source: `www.arialayer.ir`
- Target: `https://arialayer.ir`
- Status: 301
- Preserve query string: On
- Subpath matching: On
- Preserve path suffix: On

برای `www` یک DNS record پروکسی‌شده نیز لازم است. طبق الگوی Cloudflare می‌توان A record با مقدار `192.0.2.1` و Proxy status روشن ایجاد کرد.

## بررسی بعد از انتشار

```bash
curl -I https://arialayer.ir/
curl -I https://arialayer.ir/styles.css
curl -I https://arialayer.ir/not-a-real-page
```

در پاسخ صفحه اصلی باید هدرهای زیر دیده شوند:

- `content-security-policy`
- `strict-transport-security`
- `x-content-type-options: nosniff`
- `x-frame-options: DENY`
- `referrer-policy: strict-origin-when-cross-origin`

مسیر ناموجود باید status واقعی `404` و صفحه اختصاصی 404 را برگرداند.

## نکته CSP

CSP شامل SHA-256 محتوای JSON-LD فعلی در `index.html` است. در صورت تغییر محتوای بلوک `<script type="application/ld+json">` باید hash داخل `_headers` نیز دوباره محاسبه شود؛ در غیر این صورت مرورگر ممکن است آن بلوک inline را مسدود کند.

## فایل‌های PWA و Social Preview

پس از انتشار، مسیرهای زیر نیز باید کد `200` برگردانند:

```bash
curl -I https://arialayer.ir/site.webmanifest
curl -I https://arialayer.ir/assets/icon-192.png
curl -I https://arialayer.ir/assets/icon-512.png
curl -I https://arialayer.ir/assets/og-cover.jpg
```

برای بررسی Social Preview، کش پلتفرم مقصد ممکن است نیاز به Refresh داشته باشد.
