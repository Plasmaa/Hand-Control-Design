import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';

export class HandTracker {
    constructor(videoElement, onResults) {
        this.videoElement = videoElement;
        this.onResultsCallback = onResults;
        this.hands = new Hands({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }
        });

        this.hands.setOptions({
            maxNumHands: 2,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        this.hands.onResults(this.onResults.bind(this));

        this.camera = new Camera(this.videoElement, {
            onFrame: async () => {
                await this.hands.send({ image: this.videoElement });
            },
            width: 640,
            height: 480
        });
    }

    start() {
        this.camera.start();
    }

    onResults(results) {
        let state = {
            expansion: 1.0,
            tension: 0.0,
            rotation: 0.0,
            handsDetected: 0
        };

        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
            state.handsDetected = results.multiHandLandmarks.length;
            const landmarks = results.multiHandLandmarks[0]; // Primary hand

            // 1. Calculate Openness (Avg distance from wrist to fingertips)
            const wrist = landmarks[0];
            const tips = [4, 8, 12, 16, 20]; // Thumb, Index, Middle, Ring, Pinky tips
            let avgDist = 0;

            tips.forEach(i => {
                const dx = landmarks[i].x - wrist.x;
                const dy = landmarks[i].y - wrist.y;
                avgDist += Math.sqrt(dx * dx + dy * dy);
            });
            avgDist /= 5;

            // Map avgDist to expansion
            // Closed fist ~ 0.1-0.15, Open hand ~ 0.3-0.4 (normalized coords)
            // We map 0.15 -> 0.1 (shrunk) and 0.35 -> 8.0 (fully immersive)
            const minOpen = 0.15;
            const maxOpen = 0.4;
            const t = Math.max(0, Math.min(1, (avgDist - minOpen) / (maxOpen - minOpen)));

            // Use exponential curve for dramatic zoom at the end
            // 0.2 base, up to 8.0
            state.expansion = 0.2 + (Math.pow(t, 2) * 7.8);

            // 2. Pinch Detection (Thumb tip to Index tip)
            const thumb = landmarks[4];
            const index = landmarks[8];
            const pinchDist = Math.sqrt(
                Math.pow(thumb.x - index.x, 2) +
                Math.pow(thumb.y - index.y, 2)
            );

            if (pinchDist < 0.05) {
                state.expansion = 0.1; // Force shrink on pinch
            }

            // 3. Rotation & Position (Wrist to Middle Finger MCP)
            const middleMCP = landmarks[9];
            const dx = middleMCP.x - wrist.x;
            const dy = middleMCP.y - wrist.y;
            state.rotation = -Math.atan2(dx, dy) + Math.PI;

            // Calculate Hand Position (Center of palm approx)
            state.palmCenter = {
                x: (wrist.x + middleMCP.x) / 2,
                y: (wrist.y + middleMCP.y) / 2
            };

            // Calculate Hand Size (Proxy for Depth)
            // Distance between wrist and middle finger tip
            const middleTip = landmarks[12];
            const sizeDist = Math.sqrt(
                Math.pow(middleTip.x - wrist.x, 2) +
                Math.pow(middleTip.y - wrist.y, 2)
            );
            state.handSize = sizeDist; // Larger = Closer to camera

            // 4. Tension (Inverse of expansion for other effects)
            state.tension = 1.0 - t;
        }

        this.onResultsCallback(state);
    }
}
