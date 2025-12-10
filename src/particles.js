import * as THREE from 'three';

export class ParticleSystem {
    constructor(scene) {
        this.scene = scene;
        this.count = 10000;
        this.particles = null;
        this.geometry = null;
        this.material = null;
        this.color = new THREE.Color('#00ffff');
        this.baseSize = 0.05;

        // State
        this.currentShape = 'sphere';
        this.expansion = 1.0;
        this.tension = 0.0;

        // Morphing
        this.targetPositions = new Float32Array(this.count * 3);
        this.currentPositions = new Float32Array(this.count * 3);

        this.init();
    }

    init() {
        this.geometry = new THREE.BufferGeometry();

        this.calculateShape('sphere', this.currentPositions);
        this.calculateShape('sphere', this.targetPositions);

        this.geometry.setAttribute('position', new THREE.BufferAttribute(this.currentPositions, 3));

        this.material = new THREE.PointsMaterial({
            size: this.baseSize,
            color: this.color,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.particles = new THREE.Points(this.geometry, this.material);
        this.scene.add(this.particles);
    }

    calculateShape(shape, outputArray) {
        for (let i = 0; i < this.count; i++) {
            const i3 = i * 3;
            let x, y, z;

            if (shape === 'sphere') {
                const r = 5 * Math.cbrt(Math.random());
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                x = r * Math.sin(phi) * Math.cos(theta);
                y = r * Math.sin(phi) * Math.sin(theta);
                z = r * Math.cos(phi);
            } else if (shape === 'heart') {
                const t = Math.random() * Math.PI * 2;
                const u = Math.random() * Math.PI;
                x = 16 * Math.pow(Math.sin(t), 3);
                y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
                z = u * 2 - 3;
                const s = Math.random();
                x *= s * 0.3;
                y *= s * 0.3;
                z *= s * 0.3;
            } else if (shape === 'flower') {
                const r = 5 * Math.sqrt(Math.random());
                const theta = Math.random() * Math.PI * 2;
                const petals = 5;
                const petalLen = Math.sin(theta * petals);
                const rMod = r * (0.5 + 0.5 * petalLen);
                x = rMod * Math.cos(theta);
                y = rMod * Math.sin(theta);
                z = (Math.random() - 0.5) * 2;
            } else if (shape === 'saturn') {
                if (i < this.count * 0.3) {
                    const r = 3 * Math.cbrt(Math.random());
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos(2 * Math.random() - 1);
                    x = r * Math.sin(phi) * Math.cos(theta);
                    y = r * Math.sin(phi) * Math.sin(theta);
                    z = r * Math.cos(phi);
                } else {
                    const r = 5 + Math.random() * 4;
                    const theta = Math.random() * Math.PI * 2;
                    x = r * Math.cos(theta);
                    z = r * Math.sin(theta);
                    y = (Math.random() - 0.5) * 0.5;
                }
            } else if (shape === 'buddha') {
                const p = Math.random();
                if (p < 0.3) {
                    const r = 1.5 * Math.cbrt(Math.random());
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos(2 * Math.random() - 1);
                    x = r * Math.sin(phi) * Math.cos(theta);
                    y = r * Math.sin(phi) * Math.sin(theta) + 4;
                    z = r * Math.cos(phi);
                } else if (p < 0.7) {
                    const r = 2.5 * Math.cbrt(Math.random());
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos(2 * Math.random() - 1);
                    x = r * Math.sin(phi) * Math.cos(theta);
                    y = r * Math.sin(phi) * Math.sin(theta);
                    z = r * Math.cos(phi);
                } else {
                    const r = 4 * Math.sqrt(Math.random());
                    const theta = Math.random() * Math.PI;
                    x = r * Math.cos(theta);
                    y = -2.5 + (Math.random() - 0.5);
                    z = r * Math.sin(theta) * 0.5;
                }
            } else if (shape === 'fireworks') {
                const r = 8 * Math.pow(Math.random(), 0.5);
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                x = r * Math.sin(phi) * Math.cos(theta);
                y = r * Math.sin(phi) * Math.sin(theta);
                z = r * Math.cos(phi);
            }

            outputArray[i3] = x;
            outputArray[i3 + 1] = y;
            outputArray[i3 + 2] = z;
        }
    }

    update(deltaTime, handState) {
        if (handState) {
            // Smoothly interpolate values
            this.expansion = THREE.MathUtils.lerp(this.expansion, handState.expansion, 0.1);
            this.tension = THREE.MathUtils.lerp(this.tension, handState.tension, 0.1);

            // Apply rotation from hand
            // We use a smaller lerp factor for rotation to avoid jitter
            this.particles.rotation.z = THREE.MathUtils.lerp(this.particles.rotation.z, handState.rotation, 0.05);
        } else {
            // Idle rotation
            this.particles.rotation.y += 0.001;
        }

        const positions = this.geometry.attributes.position.array;

        // Morphing logic
        for (let i = 0; i < this.count; i++) {
            const i3 = i * 3;
            positions[i3] += (this.targetPositions[i3] - positions[i3]) * 0.05;
            positions[i3 + 1] += (this.targetPositions[i3 + 1] - positions[i3 + 1]) * 0.05;
            positions[i3 + 2] += (this.targetPositions[i3 + 2] - positions[i3 + 2]) * 0.05;
        }

        this.geometry.attributes.position.needsUpdate = true;

        // Update particle visuals
        this.material.size = this.baseSize * (1 + this.tension * 0.5); // Less dramatic size change
        this.particles.scale.setScalar(this.expansion);
    }

    setColor(hex) {
        this.color.set(hex);
        this.material.color.copy(this.color);
    }

    setShape(shapeName) {
        this.currentShape = shapeName;
        this.calculateShape(shapeName, this.targetPositions);
    }
}
