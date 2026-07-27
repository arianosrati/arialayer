(() => {
  const root = document.documentElement;
  root.classList.replace("no-js", "js");

  window.__arialayerFallback = window.setTimeout(() => {
    if (!root.classList.contains("js-ready")) {
      root.classList.replace("js", "no-js");
      document.querySelectorAll(".page[hidden], .skill-panel[hidden]").forEach((element) => {
        element.hidden = false;
      });
      document.querySelectorAll("[inert]").forEach((element) => element.removeAttribute("inert"));
    }
  }, 4500);
})();
