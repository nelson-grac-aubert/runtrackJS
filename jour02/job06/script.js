// Sequence : ↑ ↑ ↓ ↓ ← → ← → B A
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let currentIndex = 0;

window.addEventListener("keydown", (event) => {
  const key = event.key;

  // Check if key is current step
  if (key === konamiCode[currentIndex]) {
    currentIndex++;

    // If whole sequence is correct
    if (currentIndex === konamiCode.length) {
      unlock();
      currentIndex = 0; // reset 
    }
  } else {
    // If error, go back to 0 (or 1 if error is ArrowUp)
    currentIndex = key === konamiCode[0] ? 1 : 0;
  }
});

function unlock() {
    if (document.body.classList.contains("unlocked")) return;
 
    document.body.classList.add("unlocked");
    document.body.innerHTML = `
        <header class="site-header">
            <span class="logo">La Plateforme_</span>
            <nav>
                <a href="#">Formation</a>
                <a href="#">Projets</a>
                <a href="#">Contact</a>
            </nav>
        </header>
 
        <main class="hero">
            <h1>Bienvenue sur<br><span class="accent">La Plateforme_</span></h1>
            <p>Tu as trouvé le code!</p>
        </main>
 
        <section class="cards">
            <article class="card">
                <span class="card-icon">Logiciel</span>
                <h2>Développement</h2>
                <p>Web, mobile, systèmes embarqués.</p>
            </article>
            <article class="card">
                <span class="card-icon">DATA et IA</span>
                <h2>Intelligence Artificielle</h2>
                <p>Machine learning, data science, et applications concrètes.</p>
            </article>
            <article class="card">
                <span class="card-icon">Cyber</span>
                <h2>Cybersécurité</h2>
                <p>Administration système, protection cyber-attaques, réseau.</p>
            </article>
            <article class="card">
                <span class="card-icon">JVSI</span>
                <h2>Game dev, Simulations, Immersion, VR/AR/MR</h2>
                <p>Game design, engines, animation 2D/2D, outils...</p>
            </article>
            </article>
            <article class="card">
                <span class="card-icon">Web</span>
                <h2>Dev Web et WebApp</h2>
                <p>Sites responsive à la pointe du design.</p>
            </article>
        </section>
 
    `;
}
