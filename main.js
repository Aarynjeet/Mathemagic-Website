(() => {
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-links]");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle("isOpen", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("isOpen");
    setOpen(!isOpen);
  });

  document.addEventListener("click", (e) => {
    if (!(e.target instanceof Element)) return;
    if (e.target.closest("[data-nav-links]") || e.target.closest("[data-nav-toggle]")) return;
    setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
})();
