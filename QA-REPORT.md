# AriaLayer QA Report

تاریخ بررسی: 2026-07-27

## بررسی‌های خودکار

- JavaScript syntax: passed
- CSS parsing: passed
- JSON-LD parsing: passed
- Web App Manifest parsing: passed
- Duplicate HTML IDs: none
- Broken local asset references: none
- Missing `aria-controls` targets: none
- Missing `aria-labelledby` targets: none
- CSP JSON-LD SHA-256 match: passed
- Inline `style` attributes under strict CSP: none

## تست‌های تعاملی Chromium

۳۹ سناریو با موفقیت اجرا شد، شامل:

- Routing و History
- نمایش فقط یک صفحه در حالت JavaScript
- Navigation بدون JavaScript و نمایش تمام بخش‌ها
- عدم Horizontal Overflow در دسکتاپ و موبایل
- مدیریت `aria-current`
- Tabs با Mouse، Arrow Keys و Home
- باز و بسته‌شدن Command Palette
- Focus Trap و Focus Restoration
- حالت Empty Search
- تغییر زبان و جهت RTL/LTR
- تکمیل ترجمه‌های بخش About
- منوی موبایل، `inert` و `aria-hidden`
- Reduced Motion و غیرفعال‌شدن Boot Animation

## بررسی ضروری پس از انتشار

موارد زیر فقط روی دامنه نهایی قابل تأیید هستند:

```bash
curl -I https://arialayer.ir/
curl -I https://arialayer.ir/styles.css
curl -I https://arialayer.ir/not-a-real-page
```

انتظار می‌رود صفحه اصلی کد `200`، مسیر ناموجود کد واقعی `404` و هدرهای CSP، HSTS، `nosniff`، Referrer Policy و Permissions Policy را برگردانند.
