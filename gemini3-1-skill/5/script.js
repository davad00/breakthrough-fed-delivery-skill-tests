
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

gsap.to('.asym-1', { y: -50, opacity: 1, duration: 2, ease: 'power4.out', delay: 0.2 });
gsap.to('.asym-2', { x: -30, opacity: 1, duration: 2, ease: 'power4.out', delay: 0.6 });

gsap.to('.asym-3', {
  scrollTrigger: { trigger: '.asym-3', start: 'top 80%' },
  x: -50, opacity: 1, duration: 1.5, ease: 'power4.out'
});
gsap.to('.asym-4', {
  scrollTrigger: { trigger: '.asym-4', start: 'top 90%' },
  y: -20, opacity: 1, duration: 1.5, ease: 'power4.out', delay: 0.2
});
