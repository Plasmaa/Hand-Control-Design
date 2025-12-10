# Hand Control Particle System

A real-time interactive 3D particle system controlled by hand gestures, built with Three.js and MediaPipe.

**Live Demo:** [https://plasmaa.github.io/Hand-Control-Design/](https://plasmaa.github.io/Hand-Control-Design/)

## Features
- **Hand Tracking**: Control particles using your webcam.
- **3D Interaction**:
    - **Zoom**: Move hand forward/backward to zoom in/out.
    - **Rotate**: Move hand around the screen to rotate the object.
    - **Expand**: Open/Close hand to expand/shrink the particle cloud.
- **Immersive Zoom**: "Fly through" the particles by opening your hand fully.
- **Shape Templates**: Morph particles into Heart, Flower, Saturn, Buddha, and Fireworks shapes.
- **Customization**: Real-time color picker.

## Tech Stack
- **Three.js**: 3D Rendering
- **MediaPipe Hands**: Hand Tracking & Gesture Recognition
- **Vite**: Build Tool

## Running Locally
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
