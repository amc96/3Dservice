// Header background on scroll
const header = document.getElementById("header");
const onScroll = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile menu toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

// Close mobile menu after picking a link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact dropdowns ("Fale conosco" — WhatsApp / E-mail)
const dropdowns = document.querySelectorAll(".contact-dropdown");

document.addEventListener("click", (e) => {
  dropdowns.forEach((d) => {
    if (!d.contains(e.target)) d.removeAttribute("open");
  });
});

dropdowns.forEach((d) => {
  d.addEventListener("toggle", () => {
    if (d.open) {
      dropdowns.forEach((other) => {
        if (other !== d) other.removeAttribute("open");
      });
    }
  });

  d.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => d.removeAttribute("open"));
  });
});
