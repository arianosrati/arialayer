(() => {
  const routes = ["home","about","skills","education","learning","projects","notes","resume","contact"];
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const mobileQuery = matchMedia("(max-width: 880px)");

  const titles = {
    fa: {
      home:"AriaLayer — آریا نصرتی",
      about:"درباره من — AriaLayer",
      skills:"مهارت‌ها — AriaLayer",
      education:"تحصیلات — AriaLayer",
      learning:"مسیر یادگیری — AriaLayer",
      projects:"پروژه‌ها — AriaLayer",
      notes:"یادداشت‌ها — AriaLayer",
      resume:"رزومه — AriaLayer",
      contact:"تماس با من — AriaLayer"
    },
    en: {
      home:"AriaLayer — Aria Nosrati",
      about:"About — AriaLayer",
      skills:"Skills — AriaLayer",
      education:"Education — AriaLayer",
      learning:"Learning Roadmap — AriaLayer",
      projects:"Projects — AriaLayer",
      notes:"Notes — AriaLayer",
      resume:"Resume — AriaLayer",
      contact:"Contact — AriaLayer"
    }
  };

  const translations = {"en":{"brandSubtitle":"Developer Portfolio","learningStatus":"Learning in progress","quickNav":"Quick navigation","fullName":"Aria Nosrati","profileRole":"Backend Developer in Training","navIntro":"Introduction","navJourney":"Professional path","navConnect":"Connect","navHome":"Home","navAbout":"About me","navSkills":"Skills","navEducation":"Education","navLearning":"Learning roadmap","navProjects":"Projects","navNotes":"Notes","navResume":"Resume","navContact":"Contact","heroName":"I am Aria Nosrati;","heroHeadline":"growing my backend skills one step at a time.","heroDescription":"I am a software engineering student in Isfahan, focused on Python, API design, databases, and the tools required to build real-world backend projects.","heroAboutButton":"My story","heroLearningButton":"Learning roadmap","heroResumeButton":"Download resume","factLocationLabel":"Location","factLocation":"Isfahan, Iran","factEducationLabel":"Education","factEducation":"Software student","factFocusLabel":"Current focus","aboutTitle":"My story","aboutSubtitle":"From the first computer to choosing backend development","identityName":"Name","identityAge":"Birth year","ageValue":"2007","identityOrigin":"Origin","originValue":"Luri, Padena","storyIntro":"My connection with computers began at around five years old, when my father bought our first computer and curiosity about how it worked became a serious interest.","storyChildhoodTitle":"Curiosity begins in Amirabad","storyChildhood":"I grew up in Amirabad village in the Padena region. The computer was more than entertainment to me; I spent hours exploring its features and learning through experimentation.","storyPythonTitle":"My first programming experience with Python","storyPython":"A friend invited me to a Python class during middle school. The lessons were introductory and fragmented, but they made my interest in programming logic and problem solving much more serious.","storyChoiceTitle":"Choosing computer studies","storyChoice":"Because of my grades, most people encouraged me to choose experimental sciences. A thoughtful conversation with my aunt Parvaneh, who holds a PhD in chemistry, helped me choose the path I was genuinely interested in: computing.","storySchoolTitle":"Moving to Isfahan and Ebn Sina Technical School","storySchool":"After my father retired, we moved to Isfahan. I studied Computer Networks and Software at Ebn Sina Public Technical School and gained an introductory familiarity with C# and software development.","storyTodayTitle":"Focusing on backend development","storyToday":"My interest in thinking, problem solving, and system logic led me toward web development, Python, and backend engineering. I am now a software student preparing for professional entry into the job market.","valueOrganized":"Organized","valueOrganizedText":"I create a clear structure for learning and completing tasks.","valueProblem":"Problem solving","valueProblemText":"I enjoy analyzing problems and finding logical solutions.","valueFastLearner":"Fast learner","valueFastLearnerText":"Through consistent practice, I quickly turn new concepts into practical work.","interestFootball":"Football","interestFootballText":"Former semi-professional activity","interestSetar":"Setar","interestSetarText":"Iranian music performance","interestGaming":"Gaming","skillsTitle":"Skills","skillsSubtitle":"Real learning status, without artificial percentages","skillsCurrent":"Current focus","skillsLearned":"Foundations","skillsUpcoming":"Next steps","currentSkillsText":"I am currently focused on client-server communication, REST API design, PostgreSQL, and building a presentable backend project.","statusLearning":"Learning","statusPracticing":"Practicing","statusRoadmap":"Course roadmap","learnedTitle":"Foundations I have learned","learnedText":"I have completed introductory and advanced Python studies, and gained basic familiarity with programming and C# during technical school.","statusCompleted":"Completed","statusFoundation":"Educational foundation","statusFamiliar":"Introductory familiarity","upcomingTitle":"Skills for the next stage","upcomingText":"After completing project foundations, my roadmap continues toward security, testing, deployment, and standards required for real software.","educationTitle":"Education","educationSubtitle":"Formal studies alongside practical learning","educationCurrentStatus":"Currently studying","educationAssociate":"Associate Degree in Software Engineering","educationAssociateText":"Computer software student; I have completed semester two and am continuing my studies.","educationCompletedStatus":"Completed","educationDiploma":"Diploma in Computer Networks and Software","educationDiplomaText":"Ebn Sina Public Technical School, District 2 of Isfahan; foundations in networking, software, and programming.","educationOnlineStatus":"Online learning","educationCourse":"Python Backend Development Course","educationCourseText":"A project-based course covering HTTP and REST, FastAPI, databases, testing, Docker, and deployment, ending with a final project.","englishLevel":"I can read English technical documentation.","languagesText":"Languages: Persian, Luri, and English for technical documentation reading.","learningTitle":"Learning roadmap","learningSubtitle":"From Python foundations to building and deploying a real project","roadmapCurrent":"Current learning path","roadmapProjectGoal":"Goal: first complete backend project","roadmapDone":"Completed","roadmapNow":"Current focus","roadmapNext":"Next stage","roadmapFinal":"Final stage","roadmapPython":"Python fundamentals and advanced topics.","roadmapHttp":"Understanding client-server communication and request design.","roadmapGit":"Version control and development workflow management.","roadmapDatabase":"Database design and fundamental SQL queries.","roadmapFastapi":"Project structure and implementation of core operations.","roadmapOrm":"Database integration, relationships, and migrations.","roadmapSecurity":"Basic security and user identity management.","roadmapTesting":"Testing and preparing a production-oriented project.","roadmapDeploy":"Containerization, deployment, and documentation.","projectsTitle":"Projects","projectsSubtitle":"Only completed and presentable projects","projectsEmptyTitle":"The first real project is still taking shape.","projectsEmptyText":"I am currently completing a project-based course. Once the final project is complete, I will publish only the finished and documented version, including source code, technologies, technical challenges, screenshots, and lessons learned.","caseProblem":"Project problem","caseProblemText":"What need does the project address?","caseStack":"Technology stack","caseStackText":"The tools selected and why they were used","caseChallenge":"Technical challenge","caseChallengeText":"The important problem and its implementation solution","caseResult":"Result and lessons","caseResultText":"The final outcome and knowledge gained","notesTitle":"Technical notes","notesSubtitle":"Documenting what I learn along the way","notesEditorTitle":"Aria's technical notes","notesEditorLine1":"Every note will come from a real experience.","notesEmptyTitle":"A technical blog will grow alongside my learning path.","notesEmptyText":"After beginning practical project work, I will publish concise notes, solved problems, and weekly or monthly learning updates here.","resumeTitle":"Resume","resumeSubtitle":"A downloadable summary of my educational and technical path","resumeDownloadTitle":"The English resume is ready to download.","resumeDownloadText":"The current resume includes a professional profile, education, current learning, career direction, languages, and contact information. Projects and a GitHub link will be added after the first project is complete.","resumeDownloadButton":"Download PDF resume","contactTitle":"Contact","contactSubtitle":"For conversation, knowledge exchange, or professional connection","contactLead":"For a conversation about programming, the learning journey, or professional networking, you can contact me by email or Telegram.","githubSoon":"Coming soon","linkedinSoon":"Coming soon","formName":"Name","formNamePlaceholder":"Your name","formEmail":"Email","formSubject":"Subject","formSubjectPlaceholder":"Message subject","formMessage":"Message","formMessagePlaceholder":"Write your message...","formSubmit":"Send through email","formNote":"Submitting opens your email application with a prepared message.","commandPlaceholder":"Search for a section...","commandEmpty":"No section found.","skipToContent":"Skip to main content","identityResidence":"Residence","languageToggleLabel":"Change language","commandOpenLabel":"Open quick navigation","commandCloseLabel":"Close quick navigation","commandDialogTitle":"Quick navigation","commandSearchLabel":"Search site sections","siteSectionsLabel":"Site sections","skillsTabsLabel":"Skill categories","menuCloseLabel":"Close main menu"}};
  const interfaceLabels = {
    fa: {
      menuOpen: "بازکردن منوی اصلی",
      menuClose: "بستن منوی اصلی"
    },
    en: {
      menuOpen: "Open main menu",
      menuClose: "Close main menu"
    }
  };

  const pages = [...document.querySelectorAll("[data-page]")];
  const routeButtons = [...document.querySelectorAll("[data-route]")];
  const navItems = [...document.querySelectorAll(".nav-item[data-route]")];
  const breadcrumb = document.querySelector("[data-breadcrumb]");
  const topbar = document.querySelector("[data-topbar]");
  const mainContent = document.querySelector("[data-main-content]");
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBackdrop = document.querySelector("[data-sidebar-close]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const languageToggle = document.querySelector("[data-language-toggle]");
  const commandTrigger = document.querySelector("[data-command-trigger]");
  const commandPalette = document.querySelector("[data-command-palette]");
  const commandDialog = commandPalette?.querySelector(".command-dialog");
  const commandClose = document.querySelector("[data-command-close]");
  const commandInput = document.querySelector("[data-command-input]");
  const commandButtons = [...document.querySelectorAll(".command-list [data-route]")];
  const commandEmpty = document.querySelector("[data-command-empty]");
  const toast = document.querySelector("[data-toast]");
  const root = document.documentElement;

  let currentLanguage = (() => {
    try {
      const stored = localStorage.getItem("arialayer-language");
      return stored === "en" ? "en" : "fa";
    } catch {
      return "fa";
    }
  })();
  let currentRoute = "home";
  let commandReturnFocus = null;

  const faText = new Map();
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    faText.set(element, element.textContent.trim());
  });

  const faPlaceholders = new Map();
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    faPlaceholders.set(element, element.getAttribute("placeholder") || "");
  });

  const faAriaLabels = new Map();
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    faAriaLabels.set(element, element.getAttribute("aria-label") || "");
  });

  const setInert = (element, inert) => {
    if (!element) return;
    element.toggleAttribute("inert", inert);
  };

  const isCommandOpen = () => Boolean(commandPalette && !commandPalette.hidden);
  const isSidebarOpen = () => Boolean(mobileQuery.matches && sidebar?.classList.contains("is-open"));

  const getFocusable = (container) => {
    if (!container) return [];
    return [...container.querySelectorAll(
      'a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])'
    )].filter((element) => !element.hidden && !element.closest("[hidden]") && !element.hasAttribute("inert"));
  };

  const updateMenuToggleLabel = () => {
    if (!menuToggle) return;
    const labels = interfaceLabels[currentLanguage];
    menuToggle.setAttribute("aria-label", isSidebarOpen() ? labels.menuClose : labels.menuOpen);
  };

  const syncOverlayState = () => {
    const commandOpen = isCommandOpen();
    const sidebarOpen = isSidebarOpen();

    if (menuToggle) menuToggle.setAttribute("aria-expanded", String(sidebarOpen));
    if (commandTrigger) commandTrigger.setAttribute("aria-expanded", String(commandOpen));

    if (sidebar) {
      if (mobileQuery.matches) sidebar.setAttribute("aria-hidden", String(!sidebarOpen));
      else sidebar.removeAttribute("aria-hidden");
    }

    if (sidebarBackdrop) sidebarBackdrop.hidden = !sidebarOpen;

    setInert(topbar, commandOpen);
    setInert(mainContent, commandOpen || sidebarOpen);
    setInert(sidebar, commandOpen || (mobileQuery.matches && !sidebarOpen));
    setInert(sidebarBackdrop, commandOpen);

    document.body.classList.toggle("is-locked", commandOpen || sidebarOpen);
    updateMenuToggleLabel();
  };

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2300);
  };

  const openSidebar = () => {
    if (!sidebar || !mobileQuery.matches || isCommandOpen()) return;
    sidebar.classList.add("is-open");
    syncOverlayState();
    setTimeout(() => {
      const target = sidebar.querySelector(".nav-item.is-active") || getFocusable(sidebar)[0];
      target?.focus();
    }, 60);
  };

  const closeSidebar = ({ restoreFocus = false } = {}) => {
    if (!sidebar) return;
    const wasOpen = sidebar.classList.contains("is-open");
    sidebar.classList.remove("is-open");
    syncOverlayState();
    if (restoreFocus && wasOpen) requestAnimationFrame(() => menuToggle?.focus());
  };

  function filterCommands(query) {
    const value = query.trim().toLocaleLowerCase(currentLanguage === "fa" ? "fa" : "en");
    let visibleCount = 0;
    commandButtons.forEach((button) => {
      const match = !value || button.textContent.toLocaleLowerCase().includes(value);
      button.hidden = !match;
      button.classList.toggle("is-match", Boolean(value && match));
      if (match) visibleCount += 1;
    });
    if (commandEmpty) commandEmpty.hidden = visibleCount > 0;
  }

  const openCommandPalette = () => {
    if (!commandPalette || !commandInput || isCommandOpen()) return;
    closeSidebar({ restoreFocus: false });
    commandReturnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : commandTrigger;
    commandPalette.hidden = false;
    syncOverlayState();
    requestAnimationFrame(() => commandInput.focus());
  };

  function closeCommandPalette({ restoreFocus = true } = {}) {
    if (!commandPalette || commandPalette.hidden) return;
    commandPalette.hidden = true;
    if (commandInput) commandInput.value = "";
    filterCommands("");
    syncOverlayState();

    const target = commandReturnFocus;
    commandReturnFocus = null;
    if (restoreFocus && target?.isConnected) requestAnimationFrame(() => target.focus());
  }

  const focusPageHeading = (route) => {
    const page = pages.find((item) => item.dataset.page === route);
    const heading = page?.querySelector("h1,h2");
    if (!heading) return;
    if (!heading.hasAttribute("tabindex")) heading.setAttribute("tabindex", "-1");
    requestAnimationFrame(() => heading.focus({ preventScroll: true }));
  };

  const activateRoute = (route, { updateHistory = true, focusHeading = false } = {}) => {
    if (!routes.includes(route)) route = "home";
    currentRoute = route;

    pages.forEach((page) => {
      const active = page.dataset.page === route;
      page.hidden = !active;
      page.classList.toggle("is-active", active);
    });

    navItems.forEach((item) => {
      const active = item.dataset.route === route;
      item.classList.toggle("is-active", active);
      if (active) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });

    if (breadcrumb) breadcrumb.textContent = route;
    document.title = titles[currentLanguage][route];

    if (updateHistory && location.hash !== `#${route}`) {
      history.pushState({ route }, "", `#${route}`);
    }

    closeSidebar({ restoreFocus: false });
    closeCommandPalette({ restoreFocus: false });
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" });
    if (focusHeading) focusPageHeading(route);
  };

  routeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (button.tagName === "A") event.preventDefault();
      const shouldMoveFocus = isCommandOpen() || (mobileQuery.matches && sidebar?.contains(button));
      activateRoute(button.dataset.route, { focusHeading: shouldMoveFocus });
    });
  });

  menuToggle?.addEventListener("click", () => {
    if (isSidebarOpen()) closeSidebar({ restoreFocus: false });
    else openSidebar();
  });
  sidebarBackdrop?.addEventListener("click", () => closeSidebar({ restoreFocus: true }));

  commandTrigger?.addEventListener("click", openCommandPalette);
  commandClose?.addEventListener("click", () => closeCommandPalette());
  commandInput?.addEventListener("input", (event) => filterCommands(event.target.value));

  const applyLanguage = (language) => {
    currentLanguage = language === "en" ? "en" : "fa";
    const english = currentLanguage === "en";

    root.lang = currentLanguage;
    root.dir = english ? "ltr" : "rtl";
    root.dataset.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (english && translations.en[key]) element.textContent = translations.en[key];
      else if (faText.has(element)) element.textContent = faText.get(element);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (english && translations.en[key]) element.setAttribute("placeholder", translations.en[key]);
      else if (faPlaceholders.has(element)) element.setAttribute("placeholder", faPlaceholders.get(element));
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.dataset.i18nAriaLabel;
      if (english && translations.en[key]) element.setAttribute("aria-label", translations.en[key]);
      else if (faAriaLabels.has(element)) element.setAttribute("aria-label", faAriaLabels.get(element));
    });

    const spans = languageToggle?.querySelectorAll("span") || [];
    spans[0]?.classList.toggle("is-active", !english);
    spans[1]?.classList.toggle("is-active", english);

    document.title = titles[currentLanguage][currentRoute];

    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const descriptions = {
      fa: "وب‌سایت شخصی آریا نصرتی؛ توسعه‌دهنده بک‌اند در حال یادگیری، دانشجوی نرم‌افزار و علاقه‌مند به پایتون، API و دیتابیس.",
      en: "Aria Nosrati's personal portfolio and learning journey, focused on backend development, Python, APIs, and databases."
    };
    const socialDescriptions = {
      fa: "وب‌سایت شخصی و مسیر یادگیری آریا نصرتی با تمرکز بر توسعه بک‌اند، Python، FastAPI و PostgreSQL.",
      en: "Personal portfolio and learning journey focused on backend development, Python, FastAPI, and PostgreSQL."
    };
    metaDescription?.setAttribute("content", descriptions[currentLanguage]);
    ogTitle?.setAttribute("content", titles[currentLanguage].home);
    ogDescription?.setAttribute("content", socialDescriptions[currentLanguage]);
    ogLocale?.setAttribute("content", english ? "en_US" : "fa_IR");
    twitterTitle?.setAttribute("content", titles[currentLanguage].home);
    twitterDescription?.setAttribute("content", socialDescriptions[currentLanguage]);

    updateMenuToggleLabel();
    try { localStorage.setItem("arialayer-language", currentLanguage); } catch {}
  };

  languageToggle?.addEventListener("click", () => {
    applyLanguage(currentLanguage === "fa" ? "en" : "fa");
  });

  window.addEventListener("popstate", () => {
    activateRoute(location.hash.slice(1) || "home", { updateHistory: false });
  });

  const trapFocus = (event, elements) => {
    if (event.key !== "Tab" || !elements.length) return false;
    event.preventDefault();
    const currentIndex = elements.indexOf(document.activeElement);
    const step = event.shiftKey ? -1 : 1;
    const nextIndex = currentIndex < 0
      ? (event.shiftKey ? elements.length - 1 : 0)
      : (currentIndex + step + elements.length) % elements.length;
    elements[nextIndex].focus();
    return true;
  };

  document.addEventListener("keydown", (event) => {
    const typing = ["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName);

    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      isCommandOpen() ? closeCommandPalette() : openCommandPalette();
      return;
    }

    if (isCommandOpen()) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeCommandPalette();
        return;
      }

      if (trapFocus(event, getFocusable(commandDialog))) return;

      const visibleCommands = commandButtons.filter((button) => !button.hidden);
      const activeIndex = visibleCommands.indexOf(document.activeElement);

      if (document.activeElement === commandInput && event.key === "ArrowDown") {
        event.preventDefault();
        visibleCommands[0]?.focus();
        return;
      }
      if (activeIndex >= 0 && ["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        let nextIndex = activeIndex;
        if (event.key === "ArrowDown") nextIndex = (activeIndex + 1) % visibleCommands.length;
        if (event.key === "ArrowUp") nextIndex = (activeIndex - 1 + visibleCommands.length) % visibleCommands.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = visibleCommands.length - 1;
        visibleCommands[nextIndex]?.focus();
        return;
      }
      if (document.activeElement === commandInput && event.key === "Enter") {
        event.preventDefault();
        visibleCommands[0]?.click();
      }
      return;
    }

    if (isSidebarOpen()) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSidebar({ restoreFocus: true });
        return;
      }
      if (trapFocus(event, [menuToggle, ...getFocusable(sidebar)].filter(Boolean))) return;
    }

    if (!typing && /^[1-9]$/.test(event.key)) {
      activateRoute(routes[Number(event.key) - 1], { focusHeading: true });
    }
  });

  mobileQuery.addEventListener?.("change", () => {
    closeSidebar({ restoreFocus: false });
    syncOverlayState();
  });

  const skillTabs = [...document.querySelectorAll("[data-skill-tab]")];
  const skillPanels = [...document.querySelectorAll("[data-skill-panel]")];

  const activateSkillTab = (tab, { moveFocus = false } = {}) => {
    if (!tab) return;
    const target = tab.dataset.skillTab;

    skillTabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
      item.tabIndex = active ? 0 : -1;
    });

    skillPanels.forEach((panel) => {
      const active = panel.dataset.skillPanel === target;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });

    if (moveFocus) tab.focus();
  };

  skillTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateSkillTab(tab));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();

      let nextIndex = index;
      if (event.key === "Home") nextIndex = 0;
      else if (event.key === "End") nextIndex = skillTabs.length - 1;
      else {
        const visualStep = event.key === "ArrowRight" ? 1 : -1;
        const directionStep = root.dir === "rtl" ? -visualStep : visualStep;
        nextIndex = (index + directionStep + skillTabs.length) % skillTabs.length;
      }
      activateSkillTab(skillTabs[nextIndex], { moveFocus: true });
    });
  });

  activateSkillTab(skillTabs.find((tab) => tab.classList.contains("is-active")) || skillTabs[0]);

  document.querySelector("[data-contact-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    const body = currentLanguage === "en"
      ? `Name: ${name}\nEmail: ${email}\n\n${message}`
      : `نام: ${name}\nایمیل: ${email}\n\n${message}`;

    location.href = `mailto:ariianosratii@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showToast(currentLanguage === "en"
      ? "Opening your email application..."
      : "برنامه ایمیل در حال بازشدن است...");
  });

  const portrait = document.querySelector("[data-portrait]");
  if (portrait && !reducedMotion.matches) {
    portrait.addEventListener("mousemove", (event) => {
      const rect = portrait.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      portrait.style.transform =
        `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    });

    portrait.addEventListener("mouseleave", () => {
      portrait.style.transform = "";
    });
  }

  const glow = document.querySelector("[data-cursor-glow]");
  if (glow) {
    document.addEventListener("mousemove", (event) => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    });
  }

  if (!reducedMotion.matches) {
    document.querySelectorAll(".magnetic").forEach((button) => {
      button.addEventListener("mousemove", (event) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        button.style.transform =
          `translate(${x * 0.07}px, ${y * 0.12}px) translateY(-3px)`;
      });

      button.addEventListener("mouseleave", () => {
        button.style.transform = "";
      });
    });
  }

  const typingElement = document.querySelector("[data-typing]");
  const typingTexts = [
    "python --learn",
    "fastapi --build",
    "postgresql --practice",
    "git commit --progress"
  ];

  if (typingElement) {
    if (reducedMotion.matches) {
      typingElement.textContent = typingTexts[0];
    } else {
      let typingTextIndex = 0;
      let typingCharIndex = 0;
      let deleting = false;

      const typeLoop = () => {
        const text = typingTexts[typingTextIndex];
        typingElement.textContent = deleting
          ? text.slice(0, typingCharIndex--)
          : text.slice(0, typingCharIndex++);

        let delay = deleting ? 38 : 70;
        if (!deleting && typingCharIndex > text.length) {
          deleting = true;
          delay = 1200;
        } else if (deleting && typingCharIndex < 0) {
          deleting = false;
          typingTextIndex = (typingTextIndex + 1) % typingTexts.length;
          typingCharIndex = 0;
          delay = 300;
        }
        setTimeout(typeLoop, delay);
      };
      typeLoop();
    }
  }

  const boot = document.querySelector("[data-boot]");
  const bootText = document.querySelector("[data-boot-text]");
  const finishBoot = () => boot?.classList.add("is-finished");

  if (boot && bootText && !reducedMotion.matches) {
    let alreadyBooted = false;
    try { alreadyBooted = sessionStorage.getItem("arialayer-booted") === "true"; } catch {}

    if (alreadyBooted) {
      finishBoot();
    } else {
      const bootMessage = "loading AriaLayer...";
      let bootIndex = 0;
      const bootType = () => {
        bootText.textContent = bootMessage.slice(0, bootIndex++);
        if (bootIndex <= bootMessage.length) setTimeout(bootType, 24);
        else setTimeout(finishBoot, 160);
      };
      bootType();
      try { sessionStorage.setItem("arialayer-booted", "true"); } catch {}
    }
  } else {
    finishBoot();
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  applyLanguage(currentLanguage);
  syncOverlayState();

  const initialRoute = location.hash.slice(1);
  activateRoute(routes.includes(initialRoute) ? initialRoute : "home", { updateHistory: false });

  root.classList.add("js-ready");
  if (window.__arialayerFallback) window.clearTimeout(window.__arialayerFallback);
})();
