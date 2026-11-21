# عيادة الدكتورة إيثار خضر الخفاجي — موقع تعريفي

موقع تعريفي بسيط باللغة العربية (من اليمين إلى اليسار) لعيادة الدكتورة إيثار خضر الخفاجي،
اختصاص النسائية والتوليد في النجف / الحيدرية.

يعرض الموقع:

- اسم الدكتورة والاختصاص
- نبذة تعريفية مختصرة
- مجالات الرعاية
- عنوان العيادة مع رابط البحث في خرائط Google
- معلومات التواصل وأوقات الدوام (تظهر فقط عند إضافتها)

الموقع تعريفي فقط — لا يحتوي على نظام حجز أو نماذج تواصل.

## التقنيات المستخدمة

- [TanStack Start](https://tanstack.com/start) (React 19 + TypeScript)
- [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)

## تعديل محتوى العيادة

كل معلومات العيادة (الاسم، العنوان، الهاتف، أوقات الدوام، روابط التواصل، مجالات الرعاية)
موجودة في ملف واحد فقط:

```
src/config/clinic.ts
```

عدّل القيم هناك وستنعكس على الموقع كاملاً. الحقول الفارغة (`""`) تُخفى تلقائياً من الصفحة.

## التشغيل محلياً

تحتاج إلى [Node.js](https://nodejs.org) (يُفضّل عبر [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
# تثبيت الاعتماديات
npm install

# تشغيل خادم التطوير
npm run dev
```

ثم افتح العنوان الظاهر في الطرفية (افتراضياً `http://localhost:8080`).

## البناء للإنتاج

```sh
npm run build
```

تُولَّد نسخة الإنتاج داخل مجلد `dist/`، والملفات الثابتة الجاهزة للنشر
(بما فيها `index.html` المُولَّدة مسبقاً) موجودة في `dist/client/`.

## النشر على GitHub Pages

المشروع مضبوط مسبقاً بمسار نسبي (`base: './'` في `vite.config.ts`) مع توليد
الصفحة الرئيسية كـ HTML ثابت، لذا يعمل على GitHub Pages تحت أي اسم مستودع
دون تعديل إضافي.

### الطريقة الأولى: النشر اليدوي من مجلد البناء

1. نفّذ `npm run build`.
2. انشر محتويات مجلد `dist/client/` على فرع `gh-pages`، مثلاً باستخدام حزمة `gh-pages`:

   ```sh
   npx gh-pages -d dist/client
   ```

3. من إعدادات المستودع: **Settings → Pages**، اختر الفرع `gh-pages` والمجلد `/ (root)`.
4. بعد دقائق يصبح الموقع متاحاً على:
   `https://<اسم-المستخدم>.github.io/<اسم-المستودع>/`

### الطريقة الثانية: GitHub Actions (نشر تلقائي عند كل push)

أنشئ الملف `.github/workflows/deploy.yml` بالمحتوى التالي:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist/client

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

ثم من **Settings → Pages** اختر **Source: GitHub Actions**، وادفع التغييرات إلى فرع `main`.

## بنية المشروع

```
src/
├── config/clinic.ts      # كل محتوى العيادة القابل للتعديل
├── routes/
│   ├── __root.tsx        # الغلاف العام (الخطوط، اللغة، الاتجاه RTL)
│   └── index.tsx         # الصفحة الرئيسية
├── styles.css            # الألوان والخطوط (Tailwind v4)
└── ...
```