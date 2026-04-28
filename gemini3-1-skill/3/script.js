
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// Cursor
const cursor = document.querySelector('.cursor');
const magneticElements = document.querySelectorAll('[data-magnetic], .btn-primary');

document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power3.out' });
});

magneticElements.forEach((el) => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: relX * 0.3, y: relY * 0.3, duration: 0.4, ease: 'power2.out' });
    gsap.to(cursor, { scale: 4, backgroundColor: '#FFFFFF', mixBlendMode: 'difference', duration: 0.3 });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    gsap.to(cursor, { scale: 1, backgroundColor: '#A3B18A', mixBlendMode: 'normal', duration: 0.3 });
  });
});

// Parallax
gsap.utils.toArray('[data-speed]').forEach(el => {
  gsap.to(el, {
    y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
    ease: 'none',
    scrollTrigger: { scrub: 0 }
  });
});

// Staggered Text Reveal
document.querySelectorAll('.split-text').forEach(el => {
  const text = el.innerText;
  el.innerHTML = text.split('').map(c => `<span>${c === ' ' ? '&nbsp;' : c}</span>`).join('');
  gsap.to(el.querySelectorAll('span'), {
    scrollTrigger: { trigger: el, start: 'top 80%' },
    y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', stagger: 0.05
  });
});
