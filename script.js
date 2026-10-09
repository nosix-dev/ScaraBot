// ⚠️ À remplacer par tes vrais liens
const INVITE_URL  = "https://discord.com/oauth2/authorize?client_id=1403513450273177772&scope=bot%20applications.commands&permissions=8";
const SUPPORT_URL = "https://discord.gg/TON_INVITE";
document.querySelectorAll(".js-invite").forEach(a => a.href = INVITE_URL);
document.querySelectorAll(".js-support").forEach(a => a.href = SUPPORT_URL);

// Premium : l'ID de ton application (= client_id)
const APP_ID = "1403513450273177772";
const STORE_URL = `https://discord.com/application-directory/${APP_ID}/store`;
// Chaque bouton .js-sku a un data-sku (ID du SKU, Developer Portal → Monetization → SKUs).
// Tant que l'ID n'est pas rempli, le bouton ouvre la boutique.
document.querySelectorAll(".js-sku").forEach(a => {
  const id = a.dataset.sku;
  a.href = id && !id.startsWith("TON_") ? `${STORE_URL}/${id}` : STORE_URL;
});
document.querySelectorAll(".js-store").forEach(a => a.href = STORE_URL);

// Animation d'apparition au scroll
(function () {
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const els = document.querySelectorAll(".show .txt, .shot, .card, .cmd, .plan, .tease a, .end .panel, section h2");
  const seen = new Map(); // décalage léger entre éléments d'une même grille
  els.forEach(el => {
    const n = seen.get(el.parentNode) || 0;
    seen.set(el.parentNode, n + 1);
    el.style.transitionDelay = (n % 3) * 90 + "ms";
    el.classList.add("fade-in");
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      io.unobserve(el);
      el.classList.add("visible");
      // une fois apparu, on retire l'animation pour que le survol (hover) refonctionne
      const done = () => { el.classList.remove("fade-in", "visible"); el.style.transitionDelay = ""; };
      el.addEventListener("transitionend", ev => { if (ev.propertyName === "opacity") done(); }, { once: true });
      setTimeout(done, 1200);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  els.forEach(el => io.observe(el));
})();