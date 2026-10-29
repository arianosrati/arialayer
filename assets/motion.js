/* Motion is decorative: content is always visible, including when JS is blocked. */
(() => {
  'use strict';
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const constrained = navigator.connection?.saveData || (navigator.deviceMemory && navigator.deviceMemory <= 2) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
  const root = document.documentElement;
  if (constrained) root.dataset.motion = 'limited';
  if (preference.matches || constrained || !('IntersectionObserver' in window)) return;
  const targets = [...document.querySelectorAll('.section-heading,.about-copy,.skill,.projects>div,.timeline li,.contact-row')];
  let remaining = 0;
  const clean = element => element.classList.remove('entering');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const element = entry.target;
      observer.unobserve(element);
      if (--remaining === 0) observer.disconnect();
      element.classList.add('entering');
      element.addEventListener('animationend', () => clean(element), {once:true});
      element.addEventListener('animationcancel', () => clean(element), {once:true});
    }
  }, {threshold:0.08});
  for (const target of targets) {
    if (target.getBoundingClientRect().top >= innerHeight) { remaining++; observer.observe(target); }
  }
  const stop = () => { observer.disconnect(); targets.forEach(clean); };
  preference.addEventListener?.('change', () => { if (preference.matches) stop(); });
  window.addEventListener('pagehide', stop, {once:true});
})();
