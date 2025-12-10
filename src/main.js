import './style.css';
import { SceneManager } from './scene.js';
import { ParticleSystem } from './particles.js';
import { HandTracker } from './hand-tracking.js';
import { UI } from './ui.js';

const app = document.querySelector('#app');
const videoElement = document.querySelector('#input-video');

// Initialize Scene
const sceneManager = new SceneManager(app);

// Initialize Particles
const particleSystem = new ParticleSystem(sceneManager.scene);

// Initialize UI
const ui = new UI(particleSystem);

// Initialize Hand Tracking
const handTracker = new HandTracker(videoElement, (state) => {
  // Update particle system with hand state
  particleSystem.update(0.016, state);
});

// Start Camera
handTracker.start();

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  // Fallback update if no hand state yet (or just for rotation)
  // particleSystem.update(0.016, null); 
  // Actually, we update in the callback, but we also need to render every frame
  // and maybe update idle animations if no hands.
  // For now, let's just render.

  sceneManager.render();
}

animate();
