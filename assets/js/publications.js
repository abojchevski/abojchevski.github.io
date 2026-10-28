// /publications/: theme filter and section jump links.
//
// Each bibliography row carries data-themes="uq robust guarantees"; the URL hash selects one theme
// key. Any other hash (#entry-key from news items, #workshops, ...) is left to the browser.
(function () {
  const root = document.querySelector(".publications");
  const bar = root && root.querySelector(".theme-filter");
  if (!bar) return;

  const keys = new Set([...bar.querySelectorAll("[data-theme]")].map((a) => a.dataset.theme).filter(Boolean));

  // Hide year headings, lists and section headings left without a visible entry.
  const tidy = () => {
    let sectionHead = null;
    let sectionVisible = false;
    let yearHead = null;
    let yearVisible = false;
    const closeYear = () => {
      if (yearHead) yearHead.hidden = !yearVisible;
      yearHead = null;
    };
    const closeSection = () => {
      closeYear();
      if (sectionHead) sectionHead.hidden = !sectionVisible;
      sectionHead = null;
    };
    [...root.children].forEach((el) => {
      if (el.tagName === "H1") {
        closeSection();
        sectionHead = el;
        sectionVisible = false;
      } else if (el.tagName === "H2" && el.classList.contains("bibliography")) {
        closeYear();
        yearHead = el;
        yearVisible = false;
      } else if (el.tagName === "OL" && el.classList.contains("bibliography")) {
        const any = [...el.children].some((li) => !li.hidden);
        el.hidden = !any;
        yearVisible = yearVisible || any;
        sectionVisible = sectionVisible || any;
      }
    });
    closeSection();
  };

  const filter = () => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (hash && !keys.has(hash)) return; // an anchor, not a theme: keep the current filter
    bar.querySelectorAll("[data-theme]").forEach((a) => a.classList.toggle("active", a.dataset.theme === hash));
    root.querySelectorAll("ol.bibliography > li").forEach((li) => {
      const row = li.querySelector("[data-themes]");
      const themes = row ? row.dataset.themes.split(" ") : [];
      li.hidden = hash !== "" && !themes.includes(hash);
    });
    tidy();
  };

  // Jump links scroll without touching the hash, so an active theme filter stays in place.
  root.querySelectorAll(".pub-jump a").forEach((a) =>
    a.addEventListener("click", (e) => {
      const target = document.getElementById(a.getAttribute("href").slice(1));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    })
  );

  window.addEventListener("hashchange", filter);
  filter();
})();
