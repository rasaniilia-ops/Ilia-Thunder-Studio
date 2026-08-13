/*
 * PRODUCT CATALOG
 *
 * Fastest way to add work:
 * 1. Copy one complete product object.
 * 2. Give it a unique id.
 * 3. Change text, category, image paths, and links.
 * 4. Set published: true.
 *
 * Full instructions: ADDING_PRODUCTS.md
 */
window.STUDIO_PRODUCTS = [
  {
    id: "ilia-thunder-studio",
    published: true,
    featured: true,
    category: "websites",
    status: "released",
    name: {
      en: "Ilia Thunder Studio",
      fa: "استودیو ایلیا تاندر"
    },
    tagline: {
      en: "A bilingual home for independent digital work.",
      fa: "خانه‌ای دو‌زبانه برای آثار دیجیتال مستقل."
    },
    description: {
      en: [
        "The official portfolio for Ilia Thunder Studio. It brings games, websites, apps, tools, and experiments into one focused, easy-to-explore place.",
        "The experience is built for both English and Persian readers, with right-to-left support, accessible controls, responsive layouts, project search, category filters, and detailed product pages."
      ],
      fa: [
        "وب‌سایت رسمی استودیو ایلیا تاندر؛ جایی متمرکز و ساده برای نمایش بازی‌ها، وب‌سایت‌ها، اپلیکیشن‌ها، ابزارها و تجربه‌های خلاقانه.",
        "این تجربه برای کاربران فارسی و انگلیسی ساخته شده و از چیدمان راست‌به‌چپ، کنترل‌های دسترس‌پذیر، طراحی واکنش‌گرا، جست‌وجوی پروژه، فیلتر دسته‌بندی و صفحه کامل هر محصول پشتیبانی می‌کند."
      ]
    },
    icon: "assets/products/studio-site/icon.svg",
    screenshots: [
      {
        src: "assets/products/studio-site/screen-home.svg",
        alt: {
          en: "Ilia Thunder Studio home page concept",
          fa: "نمای صفحه اصلی استودیو ایلیا تاندر"
        }
      },
      {
        src: "assets/products/studio-site/screen-projects.svg",
        alt: {
          en: "Project library interface",
          fa: "نمای کتابخانه پروژه‌ها"
        }
      },
      {
        src: "assets/products/studio-site/screen-mobile.svg",
        alt: {
          en: "Mobile version of the studio website",
          fa: "نسخه موبایل وب‌سایت استودیو"
        }
      }
    ],
    tags: {
      en: ["Web design", "Bilingual", "Responsive"],
      fa: ["طراحی وب", "دو‌زبانه", "واکنش‌گرا"]
    },
    details: {
      releaseDate: "2026",
      platforms: {
        en: "Web",
        fa: "وب"
      }
    },
    actions: [
      {
        type: "website",
        url: "./",
        label: {
          en: "Open website",
          fa: "باز کردن وب‌سایت"
        }
      }
    ]
  }

  /*
  ,
  {
    id: "my-new-product",
    published: false,
    featured: false,
    category: "games",
    status: "comingSoon",
    name: {
      en: "My New Product",
      fa: "محصول جدید من"
    },
    tagline: {
      en: "One short sentence shown on the product card.",
      fa: "یک جمله کوتاه که روی کارت محصول نمایش داده می‌شود."
    },
    description: {
      en: [
        "First full description paragraph.",
        "Second full description paragraph."
      ],
      fa: [
        "پاراگراف اول توضیحات کامل.",
        "پاراگراف دوم توضیحات کامل."
      ]
    },
    icon: "assets/products/my-new-product/icon.png",
    screenshots: [
      {
        src: "assets/products/my-new-product/screenshot-1.jpg",
        alt: {
          en: "Main screen",
          fa: "صفحه اصلی"
        }
      }
    ],
    tags: {
      en: ["Windows", "Puzzle"],
      fa: ["ویندوز", "معمایی"]
    },
    details: {
      releaseDate: "2026",
      platforms: {
        en: "Windows",
        fa: "ویندوز"
      }
    },
    actions: [
      {
        type: "download",
        url: "https://example.com/download",
        label: {
          en: "Download",
          fa: "دانلود"
        }
      },
      {
        type: "website",
        url: "https://example.com",
        label: {
          en: "Visit website",
          fa: "مشاهده وب‌سایت"
        }
      }
    ]
  }
  */
];
