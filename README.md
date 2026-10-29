# AriaLayer

وب‌سایت شخصی دو‌زبانهٔ آریا نصرتی با HTML، CSS و JavaScript ساده؛ بدون مرحلهٔ build یا کتابخانهٔ اجرایی خارجی.

## ساختار فعلی
- `index.html`: صفحهٔ فارسی
- `en/index.html`: صفحهٔ انگلیسی
- `404.html` و `en/404.html`: صفحات خطا
- `styles.css`: سبک مشترک و فونت محلی
- `assets/motion.js`: انیمیشن‌های اختیاری با پشتیبانی از کاهش حرکت
- `assets/aria-480.jpg` و `assets/aria-933.jpg`: تصویر واکنش‌گرا
- `assets/arialayer-mark.svg`: نشان سایت
- `favicon.ico`، `assets/favicon.svg` و آیکون‌های PNG: آیکون‌های هماهنگ
- `site.webmanifest`: نام، رنگ و آیکون‌های سایت؛ بدون ادعای پشتیبانی آفلاین
- `robots.txt` و `sitemap.xml`: راهنمای خزنده‌ها
- `_headers` و `_redirects`: تنظیمات Cloudflare Pages

## نگهداری
متن هر زبان در HTML همان زبان ویرایش می‌شود. عکس، فونت و نشان مشترک‌اند. مجوز فونت در `assets/OFL.txt` نگهداری می‌شود.
بعد از تغییر JSON-LD، هش‌های SHA-256 در CSP فایل `_headers` باید محاسبه شوند. بعد از تغییر motion.js، مقدار integrity در هر دو صفحه باید به‌روزرسانی شود.
تاریخ dateModified باید زمان واقعی تغییر اطلاعات پروفایل با قالب ISO 8601 باشد، نه زمان هر انتشار.

## پیش‌نمایش
از ریشهٔ پروژه `python -m http.server 8000` را اجرا و http://localhost:8000 را باز کنید. این سرور تنظیمات اختصاصی Cloudflare و رفتار خطاهای آن را شبیه‌سازی نمی‌کند.

راهنمای انتشار: [DEPLOY-CLOUDFLARE.md](DEPLOY-CLOUDFLARE.md)
گزارش بررسی: [QA-REPORT.md](QA-REPORT.md)
