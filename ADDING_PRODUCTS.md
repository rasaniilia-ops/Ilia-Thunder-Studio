# Adding products to Ilia Thunder Studio

Only people with write access to your GitHub repository can add or change products. Visitors have
no upload form and cannot modify the catalog.

## فارسی

### افزودن محصول در ۷ مرحله

1. داخل پوشه `assets/products` پوشه‌ای با نام کوتاه انگلیسی محصول بسازید؛ برای نمونه:
   `assets/products/thunder-game`
2. آیکن و تصاویر محصول را داخل همان پوشه آپلود کنید:
   - `icon.png` برای آیکن مربعی
   - `screenshot-1.jpg`
   - `screenshot-2.jpg`
3. فایل `products.js` را در GitHub باز کنید و روی آیکن مداد بزنید.
4. نمونه محصول کامنت‌شده را کامل کپی کنید و قبل از `];` قرار دهید.
5. مقدارهای انگلیسی و فارسی، مسیر تصاویر و لینک‌ها را عوض کنید.
6. مقدار `published` را روی `true` بگذارید.
7. روی **Commit changes** بزنید. انتشار خودکار چند دقیقه زمان می‌برد.

### معنی فیلدها

- `id`: نام یکتای انگلیسی با حروف کوچک و خط تیره؛ مثل `thunder-game`
- `published`: با `true` نمایش داده می‌شود؛ با `false` مخفی می‌ماند.
- `featured`: محصولات مهم‌تر با `true` اول نمایش داده می‌شوند.
- `category`: یکی از `games`، `websites`، `apps`، `tools`، `experiments` یا `other`
- `status`: یکی از `released`، `inDevelopment` یا `comingSoon`
- `name`: نام کامل محصول به انگلیسی و فارسی
- `tagline`: توضیح کوتاه کارت محصول؛ یک جمله کوتاه بهتر است.
- `description`: توضیحات کامل؛ هر پاراگراف داخل یک جفت کوتیشن جدا
- `icon`: مسیر آیکن مربعی؛ پیشنهاد: PNG یا WebP با اندازه `512×512`
- `screenshots`: تصاویر محصول؛ پیشنهاد: JPG یا WebP با نسبت `16:9` و عرض `1600px`
- `tags`: حداکثر چند برچسب کوتاه
- `details`: سال انتشار و پلتفرم
- `actions`: دکمه‌های دانلود یا وب‌سایت. می‌توانید یکی یا هر دو را نگه دارید.

### نمونه دکمه دانلود

```js
{
  type: "download",
  url: "https://YOUR-DOWNLOAD-LINK",
  label: {
    en: "Download",
    fa: "دانلود"
  }
}
```

### نمونه دکمه وب‌سایت

```js
{
  type: "website",
  url: "https://YOUR-WEBSITE-LINK",
  label: {
    en: "Visit website",
    fa: "مشاهده وب‌سایت"
  }
}
```

برای حذف یک دکمه، کل بخش آن دکمه را از `actions` پاک کنید. اگر محصول هنوز آماده نیست،
`published: false` بگذارید؛ اطلاعات باقی می‌ماند ولی در سایت دیده نمی‌شود.

### افزودن راه ارتباطی

فایل `site-config.js` را باز کنید. مقدار موردنظر را بین کوتیشن‌ها بنویسید:

```js
contact: {
  email: "you@example.com",
  github: "https://github.com/YOUR-USERNAME",
  instagram: "https://instagram.com/YOUR-USERNAME",
  linkedin: ""
}
```

مقدار خالی یعنی آن دکمه نمایش داده نمی‌شود.

## English

### Add a product in 7 steps

1. Create a short, lowercase folder inside `assets/products`, for example:
   `assets/products/thunder-game`
2. Upload the product icon and screenshots into that folder:
   - `icon.png` for the square icon
   - `screenshot-1.jpg`
   - `screenshot-2.jpg`
3. Open `products.js` on GitHub and press the pencil icon.
4. Copy the complete commented product example and place it before `];`.
5. Replace English and Persian text, image paths, and links.
6. Change `published` to `true`.
7. Press **Commit changes**. Automatic publishing takes a few minutes.

### Field guide

- `id`: unique lowercase English name using hyphens, such as `thunder-game`
- `published`: `true` shows the product; `false` keeps it private from site visitors.
- `featured`: `true` places important products first.
- `category`: `games`, `websites`, `apps`, `tools`, `experiments`, or `other`
- `status`: `released`, `inDevelopment`, or `comingSoon`
- `name`: full product name in English and Persian
- `tagline`: short card description; one concise sentence works best.
- `description`: full description; place each paragraph in separate quotes.
- `icon`: square product icon; recommended PNG or WebP size: `512×512`
- `screenshots`: product images; recommended JPG or WebP ratio: `16:9`, width: `1600px`
- `tags`: a few short labels
- `details`: release year and platform
- `actions`: download or website buttons. Keep either one or both.

### Publishing with GitHub Pages

This repository includes `.github/workflows/pages.yml`, which deploys every push to `main`.
GitHub requires one initial repository setting:

1. Open repository **Settings**.
2. Open **Pages** under **Code and automation**.
3. Set **Source** to **GitHub Actions**.

After that, uploading or editing files is enough. The site updates automatically after each commit.
