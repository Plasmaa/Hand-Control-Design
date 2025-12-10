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
            // We map 0.15 -> 0.1 (shrunk) and 0.35 -> 1.5 (expanded)
            const minOpen = 0.15;
            const maxOpen = 0.4;
            const t = Math.max(0, Math.min(1, (avgDist - minOpen) / (maxOpen - minOpen)));
            state.expansion = 0.2 + (t * 1.8); // Range 0.2 to 2.0

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

            // 3. Rotation (Wrist to Middle Finger MCP)
            // This gives the orientation of the hand
            const middleMCP = landmarks[9];
            const dx = middleMCP.x - wrist.x;
            const dy = middleMCP.y - wrist.y;
            // Calculate angle. Note: Y is down in screen coords, so we might need to flip or adjust.
            // We want 0 to be upright.
            // Atan2(y, x)
            state.rotation = -Math.atan2(dx, dy) + Math.PI;

            // 4. Tension (Inverse of expansion for other effects)
            state.tension = 1.0 - t;
        }

        this.onResultsCallback(state);
    }
}
