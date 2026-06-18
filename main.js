/* ZeeVi.ai — interactions */

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Sticky nav shadow
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 12);
});

// Mobile menu
const toggle = document.getElementById("navToggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

// Render portfolio from portfolio.js config
const grid = document.getElementById("portfolioGrid");
if (grid && Array.isArray(window.PORTFOLIO ?? PORTFOLIO)) {
  grid.innerHTML = PORTFOLIO.map(
    (p) => `
    <a class="pf-card reveal" href="${p.file}" target="_blank" rel="noopener"
       style="--accent-c:${p.accent}">
      <div class="pf-top">
        <span class="pf-cat">${p.category}</span>
        ${p.cover
          ? `<img class="pf-cover" src="${p.cover}" alt="${p.title} preview" loading="lazy" />`
          : `<span class="pf-doc">📄</span>`}
      </div>
      <div class="pf-body">
        <h3>${p.title}</h3>
        <div class="pf-client">${p.client}</div>
        <p class="pf-summary">${p.summary}</p>
        <div class="pf-tags">
          ${p.tags.map((t) => `<span class="pf-tag">${t}</span>`).join("")}
        </div>
        <span class="pf-open">Open document <span class="arr">↗</span></span>
      </div>
    </a>`
  ).join("");
}

// Scroll reveal
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document
  .querySelectorAll(".card, .stat, .about-card, .about-text, .pf-card, .contact-pill")
  .forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
