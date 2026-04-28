
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

// Three.js Orb
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

const geometry = new THREE.IcosahedronGeometry(2, 4);
const material = new THREE.MeshBasicMaterial({ color: 0xA3B18A, wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.001;
  sphere.rotation.y += 0.002;
  renderer.render(scene, camera);
}
animate();

// Scroll Camera
ScrollTrigger.create({
  trigger: 'body',
  start: 'top top',
  end: 'bottom bottom',
  scrub: 2,
  onUpdate: (self) => {
    camera.position.z = gsap.utils.interpolate(5, 2, self.progress);
    sphere.rotation.z = self.progress * Math.PI;
  }
});

// Text Reveal
gsap.utils.toArray('.headline').forEach(el => {
  gsap.to(el, {
    scrollTrigger: { trigger: el, start: 'top 80%' },
    y: 0, opacity: 1, duration: 1.5, ease: 'power4.out'
  });
});
