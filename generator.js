const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'gemini3-1-skill');

// Create base directories if not exist
for (let i = 1; i <= 5; i++) {
  const dir = path.join(baseDir, i.toString());
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const baseHTML = (title, bodyContent, extraHead = '') => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Oasis - ${title}</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  ${extraHead}
</head>
<body>
  <div class="cursor"></div>
  
  <nav class="diegetic-nav">
    <div class="nav-item" data-magnetic>OASIS</div>
    <div class="nav-item" data-magnetic>EXPERIENCE</div>
    <div class="nav-item" data-magnetic>RESERVE</div>
  </nav>

  ${bodyContent}

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
  <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.19/bundled/lenis.min.js"></script>
  <script src="script.js"></script>
</body>
</html>`;

const baseCSS = `
:root {
  --primary: #FFFFFF;
  --secondary: #6B6B6B;
  --tertiary: #A3B18A;
  --neutral: #050505;
  --ease-cinematic: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-atmospheric: cubic-bezier(0.45, 0, 0.55, 1);
}

* { margin: 0; padding: 0; box-sizing: border-box; cursor: none; }

body {
  background-color: var(--neutral);
  color: var(--primary);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

.cursor {
  position: fixed;
  top: 0; left: 0;
  width: 12px; height: 12px;
  background-color: var(--tertiary);
  border-radius: 9999px;
  pointer-events: none;
  z-index: 100;
  transform: translate(-50%, -50%);
}

.diegetic-nav {
  position: fixed;
  top: 32px; left: 32px; right: 32px;
  display: flex;
  justify-content: space-between;
  z-index: 20;
  mix-blend-mode: difference;
}

.nav-item {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
}

.huge-text {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12vw;
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

.large-text {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 7vw;
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: -0.03em;
}

.micro-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--secondary);
}

.btn-primary {
  background-color: var(--tertiary);
  color: #000;
  padding: 16px 32px;
  border-radius: 9999px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: none;
  display: inline-block;
  margin-top: 32px;
}

.section {
  min-height: 100vh;
  padding: 20vw 32px;
  position: relative;
  z-index: 10;
}
`;

const baseJS = `
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
`;

// Version 1: The Orb (Three.js)
fs.writeFileSync(path.join(baseDir, '1', 'index.html'), baseHTML('The Orb', `
  <div id="canvas-container" style="position: fixed; top: 0; left: 0; width: 100%; height: 100vh; z-index: 0;"></div>
  <div class="section hero">
    <div class="micro-text">01. THE SANCTUARY</div>
    <div class="huge-text headline">FIND<br>STILLNESS</div>
  </div>
  <div class="section">
    <div class="large-text headline">A VOID FOR<br>THE MIND</div>
    <button class="btn-primary">ENTER OASIS</button>
  </div>
`, '<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>'));

fs.writeFileSync(path.join(baseDir, '1', 'style.css'), baseCSS + `
.headline { opacity: 0; transform: translateY(120px); }
`);

fs.writeFileSync(path.join(baseDir, '1', 'script.js'), baseJS + `
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
`);

// Version 2: The Monolith (Horizontal Scroll)
fs.writeFileSync(path.join(baseDir, '2', 'index.html'), baseHTML('The Monolith', `
  <div class="horizontal-container">
    <div class="panel">
      <div class="huge-text">BREATHE</div>
      <div class="micro-text">EXHALE THE NOISE</div>
    </div>
    <div class="panel">
      <div class="huge-text">RELEASE</div>
      <div class="micro-text">LET GO OF TIME</div>
    </div>
    <div class="panel">
      <div class="huge-text">OASIS</div>
      <button class="btn-primary">RESERVE</button>
    </div>
  </div>
`));

fs.writeFileSync(path.join(baseDir, '2', 'style.css'), baseCSS + `
.horizontal-container {
  display: flex;
  width: 300vw;
  height: 100vh;
}
.panel {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
`);

fs.writeFileSync(path.join(baseDir, '2', 'script.js'), baseJS + `
const sections = gsap.utils.toArray('.panel');
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.horizontal-container',
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => '+=' + document.querySelector('.horizontal-container').offsetWidth
  }
});
`);

// Version 3: The Void (Deep Parallax)
fs.writeFileSync(path.join(baseDir, '3', 'index.html'), baseHTML('The Void', `
  <div class="parallax-bg" data-speed="0.1"></div>
  <div class="parallax-mid" data-speed="0.4"></div>
  <div class="section hero">
    <div class="huge-text split-text">SILENCE</div>
  </div>
  <div class="section">
    <div class="large-text split-text">IS LUXURY</div>
    <button class="btn-primary" style="margin-top:10vw">BEGIN</button>
  </div>
`));

fs.writeFileSync(path.join(baseDir, '3', 'style.css'), baseCSS + `
.parallax-bg, .parallax-mid {
  position: absolute; top: 0; left: 0; width: 100%; height: 200vh; z-index: 0;
}
.parallax-bg { background: radial-gradient(circle at 50% 50%, #1a1a1a 0%, #050505 100%); }
.parallax-mid { background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="2" fill="%23A3B18A" opacity="0.5"/></svg>') repeat; }
.split-text span { display: inline-block; opacity: 0; transform: translateY(100px); }
`);

fs.writeFileSync(path.join(baseDir, '3', 'script.js'), baseJS + `
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
  el.innerHTML = text.split('').map(c => \`<span>\${c === ' ' ? '&nbsp;' : c}</span>\`).join('');
  gsap.to(el.querySelectorAll('span'), {
    scrollTrigger: { trigger: el, start: 'top 80%' },
    y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', stagger: 0.05
  });
});
`);

// Version 4: The Ripple (Clip-path morphs)
fs.writeFileSync(path.join(baseDir, '4', 'index.html'), baseHTML('The Ripple', `
  <div class="clip-hero"></div>
  <div class="section" style="position:relative; z-index:20; pointer-events:none;">
    <div class="huge-text">ELEVATE</div>
  </div>
  <div class="section">
    <div class="large-text">BEYOND FORM</div>
    <button class="btn-primary" data-magnetic style="pointer-events:auto">DISCOVER</button>
  </div>
`));

fs.writeFileSync(path.join(baseDir, '4', 'style.css'), baseCSS + `
.clip-hero {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100vh;
  background-color: var(--tertiary);
  clip-path: circle(5% at 50% 50%);
  z-index: 5;
}
`);

fs.writeFileSync(path.join(baseDir, '4', 'script.js'), baseJS + `
gsap.to('.clip-hero', {
  clipPath: 'circle(150% at 50% 50%)',
  ease: 'none',
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1
  }
});
`);

// Version 5: The Ethereal (Asymmetrical Layout & Kinetic Typography)
fs.writeFileSync(path.join(baseDir, '5', 'index.html'), baseHTML('The Ethereal', `
  <div class="section" style="padding-top: 30vh">
    <div class="huge-text asym-1">AWAKEN</div>
    <div class="micro-text asym-2" style="margin-left: 40vw; margin-top: 5vh;">05. THE ETHEREAL</div>
  </div>
  <div class="section">
    <div class="huge-text asym-3" style="text-align: right; margin-right: 5vw;">THE SOUL</div>
    <button class="btn-primary asym-4" style="margin-left: 10vw;">RESERVE NOW</button>
  </div>
`));

fs.writeFileSync(path.join(baseDir, '5', 'style.css'), baseCSS + `
.asym-1, .asym-2, .asym-3, .asym-4 {
  opacity: 0;
}
`);

fs.writeFileSync(path.join(baseDir, '5', 'script.js'), baseJS + `
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
`);

console.log('All 5 variations generated successfully.');
