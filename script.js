(() => {
  "use strict";

  const translations = {
    en: {
      documentTitle: "Ilia Thunder Studio",
      metaDescription:
        "Ilia Thunder Studio — independent games, websites, apps, tools, and experiments by Ilia Rasani.",
      skipLink: "Skip to content",
      studio: "STUDIO",
      navWork: "Work",
      navAbout: "About",
      navPrinciples: "Approach",
      navContact: "Contact",
      heroEyebrow: "Independent creative technology studio",
      heroLineOne: "Ideas with energy.",
      heroLineTwo: "Products with purpose.",
      heroDescription:
        "Games, websites, apps, and useful digital experiments designed and built by Ilia Rasani.",
      exploreWork: "Explore the work",
      meetStudio: "Meet the studio",
      signalBuild: "BUILD",
      signalPlay: "PLAY",
      signalExplore: "EXPLORE",
      scrollLabel: "Scroll to discover",
      workLabel: "SELECTED WORK",
      workTitle: "Things made to be used.",
      workIntro:
        "Browse releases and ongoing projects. Open any item for screenshots, details, and download links.",
      searchLabel: "Search projects",
      searchPlaceholder: "Search projects",
      emptyTitle: "No matching projects",
      emptyText: "Try another category or search phrase.",
      capabilitiesLabel: "CAPABILITIES",
      capabilitiesTitle: "One studio. Many forms.",
      gamesTitle: "Games",
      gamesText: "Playful systems, memorable worlds, and satisfying interaction.",
      websitesTitle: "Websites",
      websitesText: "Fast, clear web experiences that feel distinct on every screen.",
      appsTitle: "Apps",
      appsText: "Focused tools that make everyday tasks simpler and quicker.",
      toolsTitle: "Tools",
      toolsText: "Practical utilities and resources built to solve real problems.",
      experimentsTitle: "Experiments",
      experimentsText: "Small ideas, prototypes, and creative technology explorations.",
      aboutLabel: "ABOUT",
      aboutTitleOne: "Small studio.",
      aboutTitleTwo: "Serious craft.",
      aboutLead: "Ilia Thunder Studio is the independent creative studio of Ilia Rasani.",
      aboutText:
        "Every project begins with a useful or exciting idea, then gets shaped through design, code, testing, and careful refinement. The goal is simple: make digital things people enjoy using.",
      founderRole: "Founder & Creator",
      principlesLabel: "APPROACH",
      principlesTitle: "How the work gets better.",
      principleOneTitle: "Useful first",
      principleOneText: "Every feature earns its place by helping the person using it.",
      principleTwoTitle: "Clear by design",
      principleTwoText: "Strong hierarchy and familiar patterns keep experiences easy.",
      principleThreeTitle: "Built to evolve",
      principleThreeText: "Solid foundations make future improvements faster and safer.",
      contactLabel: "CONTACT",
      contactTitle: "Have an idea worth building?",
      contactText: "Questions, collaboration, and thoughtful feedback are welcome.",
      contactUnavailable: "Contact links coming soon.",
      email: "Email",
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      rights: "All rights reserved.",
      backToTop: "Back to top",
      all: "All",
      games: "Games",
      websites: "Websites",
      apps: "Apps",
      tools: "Tools",
      experiments: "Experiments",
      other: "Other",
      released: "Released",
      inDevelopment: "In development",
      comingSoon: "Coming soon",
      openProject: "View project",
      projectDetails: "Project details",
      screenshots: "Screenshots",
      aboutProject: "About this project",
      release: "Release",
      platform: "Platform",
      close: "Close",
      imageCount: (current, total) => `Image ${current} of ${total}`
    },
    fa: {
      documentTitle: "استودیو ایلیا تاندر",
      metaDescription:
        "استودیو ایلیا تاندر — بازی‌ها، وب‌سایت‌ها، اپلیکیشن‌ها، ابزارها و تجربه‌های مستقل ساخته ایلیا راسانی.",
      skipLink: "رفتن به محتوای اصلی",
      studio: "استودیو",
      navWork: "آثار",
      navAbout: "درباره",
      navPrinciples: "رویکرد",
      navContact: "ارتباط",
      heroEyebrow: "استودیوی مستقل فناوری خلاق",
      heroLineOne: "ایده‌های پرانرژی.",
      heroLineTwo: "محصولات هدفمند.",
      heroDescription:
        "بازی‌ها، وب‌سایت‌ها، اپلیکیشن‌ها و تجربه‌های دیجیتال کاربردی؛ طراحی و ساخته‌شده توسط ایلیا راسانی.",
      exploreWork: "دیدن آثار",
      meetStudio: "آشنایی با استودیو",
      signalBuild: "ساختن",
      signalPlay: "بازی",
      signalExplore: "کشف",
      scrollLabel: "برای کشف بیشتر پایین بروید",
      workLabel: "آثار منتخب",
      workTitle: "چیزهایی ساخته‌شده برای استفاده.",
      workIntro:
        "محصولات منتشرشده و پروژه‌های در حال ساخت را ببینید. هر مورد را برای تصاویر، جزئیات و لینک دانلود باز کنید.",
      searchLabel: "جست‌وجوی پروژه‌ها",
      searchPlaceholder: "جست‌وجوی پروژه‌ها",
      emptyTitle: "پروژه‌ای پیدا نشد",
      emptyText: "دسته‌بندی یا عبارت دیگری را امتحان کنید.",
      capabilitiesLabel: "توانایی‌ها",
      capabilitiesTitle: "یک استودیو؛ شکل‌های گوناگون.",
      gamesTitle: "بازی‌ها",
      gamesText: "سیستم‌های سرگرم‌کننده، دنیاهای به‌یادماندنی و تعامل لذت‌بخش.",
      websitesTitle: "وب‌سایت‌ها",
      websitesText: "تجربه‌های وب سریع، روشن و متمایز در هر اندازه صفحه.",
      appsTitle: "اپلیکیشن‌ها",
      appsText: "ابزارهای متمرکز برای ساده‌تر و سریع‌تر کردن کارهای روزمره.",
      toolsTitle: "ابزارها",
      toolsText: "ابزارها و منابع کاربردی برای حل مسئله‌های واقعی.",
      experimentsTitle: "آزمایش‌ها",
      experimentsText: "ایده‌های کوچک، نمونه‌های اولیه و تجربه‌های خلاقانه فناوری.",
      aboutLabel: "درباره",
      aboutTitleOne: "استودیوی کوچک.",
      aboutTitleTwo: "ساخت حرفه‌ای.",
      aboutLead: "استودیو ایلیا تاندر، استودیوی خلاق مستقل ایلیا راسانی است.",
      aboutText:
        "هر پروژه با یک ایده کاربردی یا هیجان‌انگیز آغاز می‌شود و با طراحی، کدنویسی، آزمایش و بهبود دقیق شکل می‌گیرد. هدف ساده است: ساخت محصولات دیجیتالی که مردم از استفاده‌شان لذت ببرند.",
      founderRole: "بنیان‌گذار و سازنده",
      principlesLabel: "رویکرد",
      principlesTitle: "چطور کار بهتر می‌شود.",
      principleOneTitle: "اول کاربرد",
      principleOneText: "هر قابلیت فقط وقتی می‌ماند که به کاربر کمک کند.",
      principleTwoTitle: "شفاف در طراحی",
      principleTwoText: "سلسله‌مراتب قوی و الگوهای آشنا، تجربه را ساده نگه می‌دارند.",
      principleThreeTitle: "آماده رشد",
      principleThreeText: "پایه‌های محکم، بهبودهای آینده را سریع‌تر و امن‌تر می‌کنند.",
      contactLabel: "ارتباط",
      contactTitle: "ایده‌ای دارید که ارزش ساختن دارد؟",
      contactText: "پرسش‌ها، همکاری و بازخورد سازنده همیشه خوش‌آمدند.",
      contactUnavailable: "راه‌های ارتباطی به‌زودی اضافه می‌شوند.",
      email: "ایمیل",
      github: "گیت‌هاب",
      instagram: "اینستاگرام",
      linkedin: "لینکدین",
      rights: "همه حقوق محفوظ است.",
      backToTop: "بازگشت به بالا",
      all: "همه",
      games: "بازی‌ها",
      websites: "وب‌سایت‌ها",
      apps: "اپلیکیشن‌ها",
      tools: "ابزارها",
      experiments: "آزمایش‌ها",
      other: "سایر",
      released: "منتشرشده",
      inDevelopment: "در حال ساخت",
      comingSoon: "به‌زودی",
      openProject: "مشاهده پروژه",
      projectDetails: "جزئیات پروژه",
      screenshots: "تصاویر",
      aboutProject: "درباره این پروژه",
      release: "انتشار",
      platform: "پلتفرم",
      close: "بستن",
      imageCount: (current, total) => `تصویر ${current} از ${total}`
    }
  };

  const categoryOrder = ["all", "games", "websites", "apps", "tools", "experiments", "other"];
  const products = (window.STUDIO_PRODUCTS || []).filter((product) => product.published);
  const config = window.SITE_CONFIG || {};

  const state = {
    language: getInitialLanguage(),
    category: "all",
    search: "",
    activeProjectId: null,
    previousFocus: null
  };

  const elements = {
    html: document.documentElement,
    filters: document.querySelector("#category-filters"),
    grid: document.querySelector("#project-grid"),
    search: document.querySelector("#project-search"),
    empty: document.querySelector("#empty-state"),
    template: document.querySelector("#project-card-template"),
    dialog: document.querySelector("#project-dialog"),
    dialogContent: document.querySelector("#dialog-content"),
    closeDialog: document.querySelector("[data-close-dialog]"),
    contactActions: document.querySelector("#contact-actions"),
    toast: document.querySelector("#toast")
  };

  function getInitialLanguage() {
    const saved = localStorage.getItem("ilia-thunder-language");
    if (saved === "en" || saved === "fa") return saved;
    if (config.defaultLanguage === "fa") return "fa";
    return navigator.language.toLowerCase().startsWith("fa") ? "fa" : "en";
  }

  function text(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return value[state.language] || value.en || value.fa || "";
  }

  function t(key) {
    return translations[state.language][key] ?? translations.en[key] ?? key;
  }

  function setLanguage(language) {
    if (language !== "en" && language !== "fa") return;
    state.language = language;
    localStorage.setItem("ilia-thunder-language", language);

    elements.html.lang = language;
    elements.html.dir = language === "fa" ? "rtl" : "ltr";
    document.title = t("documentTitle");
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t("metaDescription"));

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      element.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.placeholder = t(element.dataset.i18nPlaceholder);
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      const active = button.dataset.language === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    elements.closeDialog?.setAttribute("aria-label", t("close"));
    renderFilters();
    renderProjects();
    renderContact();

    if (state.activeProjectId) {
      const product = products.find((item) => item.id === state.activeProjectId);
      if (product) renderDialog(product);
    }
  }

  function availableCategories() {
    return categoryOrder;
  }

  function renderFilters() {
    elements.filters.replaceChildren();
    availableCategories().forEach((category) => {
      const button = document.createElement("button");
      const count =
        category === "all"
          ? products.length
          : products.filter((product) => product.category === category).length;
      button.type = "button";
      button.className = "filter-button";
      button.classList.toggle("is-active", state.category === category);
      button.dataset.category = category;
      button.setAttribute("aria-pressed", String(state.category === category));
      button.innerHTML = `<span>${escapeHtml(t(category))}</span><small>${String(count).padStart(2, "0")}</small>`;
      elements.filters.append(button);
    });
  }

  function filteredProducts() {
    const query = state.search.trim().toLocaleLowerCase(state.language);
    return products
      .filter((product) => state.category === "all" || product.category === state.category)
      .filter((product) => {
        if (!query) return true;
        const haystack = [
          text(product.name),
          text(product.tagline),
          ...(product.tags?.[state.language] || [])
        ]
          .join(" ")
          .toLocaleLowerCase(state.language);
        return haystack.includes(query);
      })
      .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }

  function renderProjects() {
    elements.grid.replaceChildren();
    const visibleProducts = filteredProducts();
    elements.empty.hidden = visibleProducts.length > 0;

    visibleProducts.forEach((product) => {
      const fragment = elements.template.content.cloneNode(true);
      const card = fragment.querySelector(".project-card");
      const button = fragment.querySelector(".project-card-button");
      const icon = fragment.querySelector(".project-icon");

      card.dataset.projectId = product.id;
      button.setAttribute("aria-label", `${t("openProject")}: ${text(product.name)}`);
      button.addEventListener("click", () => openProject(product.id, button));
      fragment.querySelector(".project-category").textContent = t(product.category);
      fragment.querySelector(".project-status").textContent = t(product.status);
      fragment.querySelector(".project-name").textContent = text(product.name);
      fragment.querySelector(".project-tagline").textContent = text(product.tagline);
      fragment.querySelector(".project-open-label").textContent = t("openProject");
      icon.src = product.icon;
      icon.alt = "";

      const tags = fragment.querySelector(".project-tags");
      (product.tags?.[state.language] || []).slice(0, 3).forEach((tag) => {
        const item = document.createElement("span");
        item.textContent = tag;
        tags.append(item);
      });

      elements.grid.append(fragment);
    });

    observeRevealElements();
  }

  function renderContact() {
    const contact = config.contact || {};
    const links = [
      ["email", contact.email ? `mailto:${contact.email}` : ""],
      ["github", contact.github],
      ["instagram", contact.instagram],
      ["linkedin", contact.linkedin]
    ].filter(([, url]) => Boolean(url));

    elements.contactActions.replaceChildren();

    if (!links.length) {
      const note = document.createElement("p");
      note.className = "contact-unavailable";
      note.textContent = t("contactUnavailable");
      elements.contactActions.append(note);
      return;
    }

    links.forEach(([type, url], index) => {
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.className = index === 0 ? "button button-light" : "button button-ghost";
      anchor.textContent = t(type);
      if (!url.startsWith("mailto:")) {
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
      }
      elements.contactActions.append(anchor);
    });
  }

  function openProject(id, trigger) {
    const product = products.find((item) => item.id === id);
    if (!product) return;

    state.activeProjectId = id;
    state.previousFocus = trigger || document.activeElement;
    renderDialog(product);

    if (typeof elements.dialog.showModal === "function") {
      elements.dialog.showModal();
    } else {
      elements.dialog.setAttribute("open", "");
    }
    document.body.classList.add("dialog-open");
    updateProjectUrl(id);
  }

  function renderDialog(product) {
    const screenshots = product.screenshots || [];
    const descriptions = product.description?.[state.language] || [];
    const tags = product.tags?.[state.language] || [];

    const galleryMarkup = screenshots.length
      ? `
        <section class="dialog-section">
          <div class="dialog-section-title">
            <h3>${escapeHtml(t("screenshots"))}</h3>
            <span>${String(screenshots.length).padStart(2, "0")}</span>
          </div>
          <div class="screenshot-strip">
            ${screenshots
              .map(
                (image, index) => `
                  <button class="screenshot-button" type="button" data-image-index="${index}" aria-label="${escapeHtml(
                    t("imageCount")(index + 1, screenshots.length)
                  )}">
                    <img src="${escapeAttribute(image.src)}" alt="${escapeAttribute(text(image.alt))}" loading="lazy" />
                  </button>
                `
              )
              .join("")}
          </div>
        </section>
      `
      : "";

    const actionMarkup = (product.actions || [])
      .filter((action) => action.url)
      .map(
        (action, index) => `
          <a
            class="button ${index === 0 ? "button-primary" : "button-secondary"}"
            href="${escapeAttribute(action.url)}"
            ${isExternal(action.url) ? 'target="_blank" rel="noopener noreferrer"' : ""}
          >
            <span>${escapeHtml(text(action.label))}</span>
            <span aria-hidden="true">${action.type === "download" ? "↓" : "↗"}</span>
          </a>
        `
      )
      .join("");

    elements.dialogContent.innerHTML = `
      <header class="dialog-hero">
        <div class="dialog-title-row">
          <img class="dialog-icon" src="${escapeAttribute(product.icon)}" alt="" />
          <div>
            <p class="dialog-category">${escapeHtml(t(product.category))} / ${escapeHtml(
              t(product.status)
            )}</p>
            <h2 id="dialog-title">${escapeHtml(text(product.name))}</h2>
            <p>${escapeHtml(text(product.tagline))}</p>
          </div>
        </div>
        ${actionMarkup ? `<div class="dialog-actions">${actionMarkup}</div>` : ""}
      </header>

      ${galleryMarkup}

      <section class="dialog-section dialog-description">
        <div class="dialog-section-title">
          <h3>${escapeHtml(t("aboutProject"))}</h3>
        </div>
        <div class="dialog-description-layout">
          <div class="dialog-copy">
            ${descriptions.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
          </div>
          <dl class="project-facts">
            ${
              product.details?.releaseDate
                ? `<div><dt>${escapeHtml(t("release"))}</dt><dd>${escapeHtml(
                    product.details.releaseDate
                  )}</dd></div>`
                : ""
            }
            ${
              product.details?.platforms
                ? `<div><dt>${escapeHtml(t("platform"))}</dt><dd>${escapeHtml(
                    text(product.details.platforms)
                  )}</dd></div>`
                : ""
            }
          </dl>
        </div>
        ${
          tags.length
            ? `<div class="dialog-tags">${tags
                .map((tag) => `<span>${escapeHtml(tag)}</span>`)
                .join("")}</div>`
            : ""
        }
      </section>
    `;

    elements.dialogContent.querySelectorAll(".screenshot-button").forEach((button) => {
      button.addEventListener("click", () => {
        const image = button.querySelector("img");
        if (!image) return;
        openImageViewer(image.src, image.alt);
      });
    });
  }

  function openImageViewer(src, alt) {
    const viewer = document.createElement("div");
    viewer.className = "image-viewer";
    viewer.setAttribute("role", "dialog");
    viewer.setAttribute("aria-modal", "true");
    viewer.setAttribute("aria-label", alt || t("screenshots"));
    viewer.innerHTML = `
      <button type="button" aria-label="${escapeAttribute(t("close"))}">×</button>
      <img src="${escapeAttribute(src)}" alt="${escapeAttribute(alt)}" />
    `;
    viewer.addEventListener("click", (event) => {
      if (event.target === viewer || event.target.closest("button")) viewer.remove();
    });
    document.body.append(viewer);
    viewer.querySelector("button").focus();
  }

  function closeProject() {
    if (!elements.dialog.open) return;
    elements.dialog.close();
  }

  function afterDialogClosed() {
    state.activeProjectId = null;
    document.body.classList.remove("dialog-open");
    updateProjectUrl(null);
    state.previousFocus?.focus();
  }

  function updateProjectUrl(id) {
    const url = new URL(window.location.href);
    if (id) url.searchParams.set("project", id);
    else url.searchParams.delete("project");
    history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }

  function openProjectFromUrl() {
    const id = new URLSearchParams(window.location.search).get("project");
    if (id && products.some((product) => product.id === id)) openProject(id);
  }

  function isExternal(url) {
    return /^(https?:)?\/\//.test(url);
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value);
  }

  let revealObserver;
  function observeRevealElements() {
    const items = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px" }
      );
    }
    items.forEach((item) => revealObserver.observe(item));
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  elements.filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    renderFilters();
    renderProjects();
  });

  elements.search.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProjects();
  });

  elements.closeDialog.addEventListener("click", closeProject);
  elements.dialog.addEventListener("close", afterDialogClosed);
  elements.dialog.addEventListener("click", (event) => {
    const rect = elements.dialog.getBoundingClientRect();
    const outside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;
    if (outside) closeProject();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.querySelector(".image-viewer")) {
      document.querySelector(".image-viewer").remove();
    }
  });

  document.querySelector("#current-year").textContent = new Date().getFullYear();
  setLanguage(state.language);
  observeRevealElements();
  requestAnimationFrame(openProjectFromUrl);
})();
